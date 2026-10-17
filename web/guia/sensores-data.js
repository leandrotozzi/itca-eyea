/* ITCA · Guía Visual — datos de sensores y motores (compartidos por sensores-funcionamiento,
   sensores-motores y competencia-movil). Un solo lugar para corregir pines y valores. */
/* ===== Tipos de pin ===== */
var KINDS = {
  ref:{c:'var(--k-ref)', n:'5 V referencia (ECU)'},
  sig:{c:'var(--k-sig)', n:'Señal'},
  gnd:{c:'var(--k-gnd)', n:'Masa'},
  v12:{c:'var(--k-v12)', n:'12 V (batería / relé)'},
  heat:{c:'var(--k-heat)', n:'Calefactor'},
  mot:{c:'var(--k-mot)', n:'Motor (PWM)'},
  shd:{c:'var(--k-shd)', n:'Malla / blindaje'}
};

/* ===== Fichas por tipo de sensor =====
   pins: [etiqueta, tipo, función, qué medir] */
var SENSORS = {
ckp:{sig:'CKP', name:'Sensor de rotación inductivo', tipo:'Posición del cigüeñal y RPM · inductivo (genera su propia tensión alterna) · lee una rueda fónica 60-2 o 36-1',
  pins:[['A','sig','Señal (+)','Ω entre A y B; Vca dando arranque'],['B','sig','Señal (−) / masa de señal','idem'],['(3)','shd','Malla a masa (si tiene 3 pines)','continuidad a masa']],
  mido:['Desconectado: <b>Ω entre los 2 pines</b> de señal.','Aislación: entre cada pin y masa → <b>infinito</b> (OL).','Enchufado, dando arranque: <b>V AC</b> entre señal y masa → debe aparecer tensión alterna (sube con las RPM).','Entrehierro con sonda de lainas: <b>0,5–1,5 mm</b>. Punta limpia (sin limaduras).'],
  vals:['≈ 200–1.200 Ω (según marca)','> 0,5 V AC arranque','aislación ∞'],
  falla:'Sin señal de CKP <b>el motor no arranca</b>: no hay chispa ni inyección. Típico: cable cortado, punta sucia de viruta o rueda fónica con dientes dañados.'},
hall:{sig:'CMP / Hall', name:'Sensor de efecto Hall (fase, VSS, algunos CKP)', tipo:'Interruptor electrónico: entrega una onda cuadrada 0 ↔ 5 V (o 0 ↔ 12 V) al pasar una ventana o diente metálico',
  pins:[['1','v12','Alimentación 5 V o 12 V (según sistema)','V con contacto'],['2','sig','Señal (pull-up de la ECU)','V conmuta 0 ↔ 5 V girando lento'],['3','gnd','Masa','≈0 V / continuidad a masa']],
  mido:['Con contacto, conector enchufado: <b>alimentación vs masa</b> = 5 V o 12 V.','Señal por backprobe, girando el motor <b>a mano lento</b>: tiene que <b>saltar</b> entre ≈0 V y ≈5 V.','Con motor en marcha: el multímetro muestra un promedio (≈2,5 V) o la <b>frecuencia en Hz</b>; con osciloscopio se ve la onda cuadrada.','<b>No se mide en Ω</b>: es electrónico (adentro tiene un chip).'],
  vals:['0 ↔ 5 V cuadrada','alim. 5 o 12 V'],
  falla:'CMP muerto: arranca pero tarda (la ECU busca la fase) o pasa a <b>inyección simultánea</b>; luz de falla. VSS muerto: velocímetro en 0 y ralentí inestable al frenar.'},
ect:{sig:'ECT / CTS', name:'Temperatura del refrigerante', tipo:'Termistor NTC: baja la resistencia al subir la temperatura · la ECU le da 5 V a través de una resistencia fija y mide la caída',
  pins:[['1','sig','Señal (5 V por resistencia de la ECU)','V: frío ≈3–3,5 V, caliente ≈0,5–1 V'],['2','gnd','Masa de sensores (desde la ECU)','≈0 V']],
  mido:['Desconectado: <b>Ω entre pines</b> y comparar con la tabla (motor frío y caliente).','En el arnés desconectado con contacto: el pin de señal da <b>≈5 V</b> (prueba que la ECU alimenta).','Enchufado: la tensión de señal <b>baja</b> a medida que el motor calienta, <b>sin saltos</b>.','Variantes de 3–4 pines: traen una segunda NTC para el <b>reloj del tablero</b>.'],
  vals:['0 °C ≈ 5,9 kΩ','20 °C ≈ 2,5 kΩ','40 °C ≈ 1,2 kΩ','80 °C ≈ 330 Ω','100 °C ≈ 190 Ω'],
  falla:'Ojo: cada marca tiene su curva (Ford: 20 °C ≈ 36 kΩ). Abierto → la ECU lee −40 °C: <b>mezcla muy rica</b>, humo negro, consumo. En corto → lee caliente: <b>arranque en frío difícil</b>. También comanda el electroventilador.'},
iat:{sig:'IAT / ACT', name:'Temperatura del aire de admisión', tipo:'Termistor NTC (igual que el ECT) · corrige la inyección según la densidad del aire · suele venir dentro del TMAP',
  pins:[['1','sig','Señal (5 V por resistencia de la ECU)','V: ≈2–3 V a temperatura ambiente'],['2','gnd','Masa de sensores','≈0 V']],
  mido:['Desconectado: <b>Ω a temperatura ambiente</b> (≈2–3 kΩ a 20–25 °C).','Calentá la punta con la mano o un secador: la <b>resistencia tiene que bajar</b>.','Enchufado: tensión de señal baja suave al calentarse.'],
  vals:['20 °C ≈ 2,5 kΩ','40 °C ≈ 1,2 kΩ'],
  falla:'Lectura errónea → mezcla corrida pocos %. Raramente deja el auto parado; la ECU usa un valor de reemplazo (≈20–40 °C).'},
map:{sig:'MAP', name:'Presión absoluta del múltiple', tipo:'Piezorresistivo de silicio con electrónica: tensión alta = presión alta (motor parado / acelerón), baja = vacío (ralentí, desaceleración)',
  pins:[['1','gnd','Masa de sensores','≈0 V'],['2','sig','Señal de presión','V: parado ≈4–4,5 V, ralentí ≈1–1,5 V'],['3','ref','5 V de referencia','≈5 V']],
  mido:['Con contacto, enchufado: <b>5 V</b> en referencia, <b>0 V</b> en masa.','<b>Contacto y motor parado</b>: señal ≈ 4–4,5 V (es la presión atmosférica; a nivel del mar).','<b>Ralentí</b>: señal ≈ 1–1,5 V (vacío alto). Acelerón brusco: sube cerca de 4 V y vuelve.','Revisar la <b>manguera de vacío</b> (fisurada = señal falsa).'],
  vals:['ref 5 V','parado ≈ 4–4,5 V','ralentí ≈ 1–1,5 V'],
  falla:'Sensor de <b>carga</b> principal en estos motores: si falla, el motor anda muy rico o muy pobre, falta de potencia, humo negro. Algunos Ford viejos (EEC-IV) usaban un MAP <b>de frecuencia</b> (Hz); el Rocam (EEC-V) ya trae un TMAP analógico.'},
tmap:{sig:'TMAP', name:'MAP + temperatura de aire (4 pines)', tipo:'Dos sensores en un cuerpo: el MAP (activo, 5 V) y la NTC del IAT · va atornillado al múltiple de admisión',
  pins:[['1','gnd','Masa común','≈0 V'],['2','sig','Señal IAT (NTC)','V / Ω como el IAT'],['3','ref','5 V referencia MAP','≈5 V'],['4','sig','Señal MAP','V como el MAP']],
  mido:['Identificá los pines con contacto: el que da <b>5 V</b> es la referencia, el de <b>0 V</b> la masa.','De los otros dos: el que <b>cambia al dar arranque/acelerar</b> es el MAP; el que <b>da ≈5 V desenchufado</b> y mide kΩ contra masa (sensor fuera) es el IAT.','Valores: los del MAP y los del IAT.'],
  vals:['MAP parado ≈ 4–4,5 V','ralentí ≈ 1–1,5 V','IAT 20 °C ≈ 2,5 kΩ'],
  falla:'Igual que MAP e IAT. Ojo: el orden 1-2-3-4 <b>no es igual</b> en Bosch, Magneti Marelli y Delphi.'},
tps:{sig:'TPS', name:'Posición de mariposa (acelerador por cable)', tipo:'Potenciómetro: pista resistiva entre 5 V y masa, el cursor sigue el eje de la mariposa',
  pins:[['1','gnd','Masa de sensores','≈0 V'],['2','ref','5 V referencia','≈5 V'],['3','sig','Señal (cursor)','V: cerrada ≈0,3–0,9 V, a fondo ≈4–4,8 V']],
  mido:['Con contacto, enchufado: <b>5 V</b> en referencia y <b>0 V</b> en masa.','Señal con mariposa <b>cerrada</b>: ≈0,3–0,9 V. <b>Abrí despacio</b> a fondo: tiene que subir <b>de forma lineal, sin saltos ni cortes</b>, hasta ≈4–4,8 V.','Desconectado: Ω entre 5 V y masa fija (≈4–6 kΩ); entre cursor y masa varía al mover.'],
  vals:['cerrada 0,3–0,9 V','a fondo 4–4,8 V','pista ≈ 4–6 kΩ'],
  falla:'Pista gastada (un "pozo" en la zona de ralentí) → <b>tirones</b> al acelerar suave, ralentí que oscila, cut-off que no actúa.'},
etb:{sig:'ETB', name:'Cuerpo de mariposa motorizado (drive-by-wire)', tipo:'Motor de CC que mueve la mariposa (comandado por PWM) + doble sensor de posición (2 pistas, por seguridad)',
  pins:[['M+','mot','Motor (+/−, puente H de la ECU)','Ω motor ≈ 1–5 Ω'],['M−','mot','Motor (−/+)','idem'],['5V','ref','5 V referencia','≈5 V'],['GND','gnd','Masa sensores','≈0 V'],['S1','sig','Pista 1','V sube al abrir'],['S2','sig','Pista 2 (inversa o desplazada)','V espejo de la pista 1']],
  mido:['Desconectado: <b>Ω del motor</b> (los 2 pines de mayor sección) → pocos Ω (≈1–5).','Con contacto (no arranques): 5 V y masa en el lado sensor.','Pistas por backprobe pisando el pedal: una <b>sube</b> y la otra <b>baja</b> (o sube con otra pendiente). La ECU compara las dos (plausibilidad).','<b>No forzar</b> la mariposa con los dedos con contacto puesto.'],
  vals:['motor ≈ 1–5 Ω','pistas 0,5 → 4,5 V','reposo ≈ 5–7° abierta'],
  falla:'Suciedad o pista que no coincide → <b>modo emergencia</b>: motor limitado a ≈1.500 rpm, luz EPC/MIL. Después de limpiarla, suele pedir <b>aprendizaje</b>.'},
app:{sig:'APP', name:'Pedal de acelerador electrónico', tipo:'Dos potenciómetros independientes en el pedal (cada uno con su 5 V, masa y señal) · la pista 2 da la mitad de la 1',
  pins:[['1','ref','5 V pista 1','≈5 V'],['2','ref','5 V pista 2','≈5 V'],['3','gnd','Masa pista 1','≈0 V'],['4','sig','Señal pista 1','V: reposo ≈0,7 V → a fondo ≈4 V'],['5','gnd','Masa pista 2','≈0 V'],['6','sig','Señal pista 2','≈ la mitad de la pista 1']],
  mido:['Con contacto: dos pares 5 V / masa independientes.','Señales por backprobe: <b>pista 2 ≈ ½ pista 1</b> en todo el recorrido.','Barrido lento sin saltos.'],
  vals:['P1 0,7 → 4 V','P2 = ½ P1'],
  falla:'Las pistas no coinciden → aceleración limitada (modo emergencia) y luz de falla.'},
o2:{sig:'HO2S / λ', name:'Sonda lambda (oxígeno)', tipo:'Generador de circonio: produce 0,1–0,9 V según el O₂ del escape · calefaccionada para trabajar rápido (necesita ≈350 °C)',
  pins:[['Neg','sig','Señal (+) — cable negro (Bosch)','V oscila 0,1 ↔ 0,9 V'],['Gris','gnd','Masa de señal — gris','≈0 V'],['Bco','heat','Calefactor +12 V (relé) — blanco','≈12 V con contacto/motor'],['Bco','heat','Calefactor − (ECU lo comanda a masa) — blanco','Ω calefactor']],
  mido:['Desconectado: <b>Ω entre los 2 cables blancos</b> (calefactor) → ≈2–15 Ω en frío según marca.','Con contacto: <b>12 V</b> en uno de los blancos (del lado arnés).','Motor <b>caliente</b>, ralentí/2.000 rpm: señal <b>oscila</b> 0,1 ↔ 0,9 V varias veces por segundo (lazo cerrado).','<b>Bajo</b> (&lt; 0,45 V) = pobre · <b>alto</b> (&gt; 0,45 V) = rico. La post-catalizador oscila poco (≈0,6–0,7 V estable) si el catalizador funciona.'],
  vals:['0,1 ↔ 0,9 V','calefactor ≈ 2–15 Ω','12 V calefactor'],
  falla:'Lenta o fija en 0,45 V: lazo abierto, consumo alto. Variantes: <b>1 cable</b> (solo señal, masa por la rosca), <b>3 cables</b> (señal + calefactor, masa por la rosca), <b>4 cables</b> (todo aislado).'},
knock:{sig:'KS', name:'Sensor de detonación (picado)', tipo:'Piezoeléctrico: un cristal genera tensión al recibir la vibración del block · va atornillado al block, bajo el múltiple de admisión',
  pins:[['1','sig','Señal (+)','mV AC al golpear el block'],['2','sig','Señal (−) / masa','idem'],['(3)','shd','Malla (si tiene)','continuidad a masa']],
  mido:['Desconectado: entre pines → <b>muy alta resistencia</b> (MΩ / OL). Si da pocos Ω, está en corto.','Enchufado, multímetro en mV AC: <b>golpecito suave</b> con una llave cerca del sensor → aparece tensión.','<b>Torque de ajuste</b> correcto (≈20 Nm): flojo no detecta, demasiado apretado detecta de más. Sin arandelas.'],
  vals:['R ≈ MΩ (OL)','mV AC al golpear','torque ≈ 20 Nm'],
  falla:'La ECU <b>atrasa el encendido</b> por seguridad: el motor pierde potencia y consume más.'},
vss:{sig:'VSS', name:'Sensor de velocidad del vehículo', tipo:'Hall en la caja de cambios (salida del diferencial): pulsos cuadrados, frecuencia proporcional a la velocidad',
  pins:[['1','v12','Alimentación 12 V (o 5 V)','V con contacto'],['2','gnd','Masa','≈0 V'],['3','sig','Señal de pulsos','V conmuta girando una rueda']],
  mido:['Con contacto: alimentación y masa.','Rueda motriz levantada, girándola a mano (o en marcha): la señal <b>conmuta</b> 0 ↔ 5/12 V; con multímetro en Hz sube con la velocidad.','Detenido = sin pulsos.'],
  vals:['pulsos 0 ↔ 5/12 V','Hz ∝ velocidad'],
  falla:'Velocímetro y odómetro en 0, ralentí inestable en desaceleración, a veces cut-off que no actúa.'},
oil:{sig:'OPS', name:'Presostato (bulbo) de presión de aceite', tipo:'Interruptor normalmente cerrado a masa: con presión (motor andando) abre y apaga la luz del tablero',
  pins:[['1','sig','Cable a la lámpara del tablero','continuidad a masa con motor parado']],
  mido:['Motor <b>parado</b>: entre el terminal y masa → <b>continuidad</b> (0 Ω): la luz prende.','Motor <b>en marcha</b>: circuito <b>abierto</b> (OL): la luz se apaga.','Si la luz no se apaga: verificar presión real con manómetro antes de culpar al bulbo.'],
  vals:['parado = 0 Ω','andando = abierto'],
  falla:'No es de inyección (va al tablero), pero <b>es un sensor del motor</b> y lo suelen pedir.'}
};

/* ===== Actuadores que se confunden con sensores ===== */
var ACT = [
  ['Inyector','2','12 V (relé) + masa comandada por la ECU','Ω ≈ 11–16 Ω (alta impedancia)'],
  ['Motor paso a paso (IAC)','4','2 bobinas (A/A′ y B/B′)','Ω por bobina ≈ 40–60 Ω'],
  ['Válvula canister','2','12 V + masa ECU (PWM)','Ω ≈ 20–30 Ω'],
  ['Bobina doble / casete','3–4','12 V + 1 o 2 comandos de la ECU (+masa)','primario ≈ 0,4–1 Ω'],
  ['Bomba de combustible','2–4','12 V del relé + masa (+ aforador)','consumo ≈ 4–7 A']
];

/* ===== Motores =====
   S(nombre, ficha, fila comparativa, zona, fx, fy, ubicación, pines, función de pines, valores, confianza) */
function S(n,f,r,zona,fx,fy,ubic,p,pines,val,c){return {n:n,f:f,r:r,zona:zona,fx:fx,fy:fy,ubic:ubic,p:p,pines:pines,val:val,c:c};}
/* A(nombre, pines, qué es cada pin, medición, nota) · actuadores propios del motor (campo opcional acts) */
function A(n,p,pines,med,nota){return {n:n,p:p,pines:pines,med:med,nota:nota};}
var ENGINES = {
r19:{short:'Renault 19', sub:'1.4 Energy monopunto', name:'Renault 19 1.4 Energy (E7J) · inyección monopunto',
  info:[['ECU','Siemens Fenix 3 · Bosch Monomotronic (según año: mirá la etiqueta)'],['Acelerador','Cable: TPS + paso a paso de ralentí'],['Inyección','Monopunto: <b>1 inyector</b> en el cuerpo de mariposa'],['Encendido','Bobina + módulo (distribuidor)']],
  nota:'<b>Motor de la competencia</b> (7 sensores, 4 actuadores). El <b>MAP va separado</b>, conectado al múltiple con una <b>manguera de vacío</b>: revisá que no esté fisurada. Hay <b>dos sensores de temperatura del motor</b>: el de la <b>ECU</b> (NTC de 2 pines) y el del <b>reloj del tablero</b> (1 pin, masa por la rosca): no confundirlos. El CKP lee el <b>volante</b> desde la caja. El paso a paso de ralentí (IAC) <b>faltaba</b> en el motor. Sin manual: valores típicos, <b>confirmá midiendo</b>.',
  sensors:[
    S('Posición mariposa (TPS)','tps','TPS','mariposa',.5,.62,'En el <b>cuerpo de mariposa monopunto</b> (acelerador por cable).','3','Masa · 5 V · señal','Cerrada 0,3–0,9 V · a fondo 4–4,8 V','medio'),
    S('Temp. aire (IAT)','iat','IAT','filtro',.75,.62,'En la tapa del cuerpo monopunto / caja del filtro, en el paso del aire.','2','Señal · masa','NTC ≈2–3 kΩ a temp. ambiente','medio'),
    S('Rotación / PMS (CKP)','ckp','CKP','caja',.82,.55,'Sobre la carcasa de la caja, leyendo los dientes del <b>volante</b>.','2 (+malla)','Señal + · señal − · (malla)','≈200–270 Ω','medio'),
    S('Temp. refrigerante · ECU (ECT)','ect','ECT','tapa',.08,.6,'Salida de agua / caja del termostato, en la tapa.','2','Señal · masa','NTC: baja al calentar','medio'),
    S('Temp. refrigerante · tablero','ect','ECT','tapa',.2,.6,'Cerca del de la ECU, en la salida de agua.','1','Cable al reloj del tablero (masa por la rosca)','Va al tablero, <b>no a la ECU</b>','medio'),
    S('Presión del múltiple (MAP) con manguera','map','MAP','admision',.5,.62,'<b>Separado</b> (en el vano motor), conectado al múltiple por una <b>manguera de vacío</b>.','3','Masa · señal · 5 V','Parado ≈4–4,5 V · ralentí ≈1–1,5 V','medio'),
    S('Sonda lambda','o2','λ pre','escape',.62,.6,'Múltiple / bajada de escape.','1, 3 o 4','Según versión: contá los cables (señal · masa · calefactor)','Oscila 0,1 ↔ 0,9 V','bajo')],
  acts:[
    A('Inyector monopunto','2','12 V (relé) + masa comandada por la ECU','<b>Baja impedancia ≈1–2 Ω</b> (no 11–16 Ω como el multipunto)','Uno solo, arriba del cuerpo de mariposa.'),
    A('Bobina de encendido + módulo','2–3','12 V + comando del módulo / ECU','Primario ≈0,5–1 Ω · secundario ≈5–10 kΩ','Reparte con distribuidor.'),
    A('Bomba de combustible','2','12 V del relé + masa','Consumo ≈4–7 A · presión monopunto ≈1 bar','En el tanque.'),
    A('Motor paso a paso de ralentí (IAC)','4','2 bobinas (A/A′ y B/B′)','Ω por bobina ≈40–60 Ω','<b>Faltaba en el motor</b> de la competencia.')]},
vectra:{short:'Chevrolet Vectra', sub:'2.0 8v multipunto', name:'Chevrolet Vectra 2.0 8v · inyección multipunto',
  info:[['ECU','Bosch Motronic · Delphi Multec (según año: mirá la etiqueta)'],['Acelerador','Cable: TPS + válvula de ralentí (IAV)'],['Inyección','Multipunto: 4 inyectores en el múltiple'],['Encendido','Bobina doble (chispa perdida)']],
  nota:'<b>Motor de la competencia</b> (7 sensores, 4 actuadores). <b>No tiene sensor de fase (CMP)</b>: la ECU se arregla solo con el CKP, que lee la <b>rueda fónica de la polea</b> del cigüeñal. La válvula de ralentí puede ser <b>rotativa (2–3 pines)</b> o <b>paso a paso (4 pines)</b> según versión: contá los pines. Sin manual: valores típicos, <b>confirmá midiendo</b>.',
  sensors:[
    S('Temp. refrigerante (ECT)','ect','ECT','tapa',.08,.6,'Salida de agua / caja del termostato, en la tapa.','2','Señal · masa','NTC: baja al calentar','medio'),
    S('Presión del múltiple (MAP)','map','MAP','admision',.5,.62,'En el múltiple de admisión o en el vano motor con manguera de vacío.','3','Masa · señal · 5 V','Parado ≈4–4,5 V · ralentí ≈1–1,5 V','medio'),
    S('Posición mariposa (TPS)','tps','TPS','mariposa',.5,.62,'En el cuerpo de mariposa (acelerador por cable).','3','Masa · 5 V · señal','Cerrada 0,3–0,9 V · a fondo 4–4,8 V','medio'),
    S('Rotación (CKP)','ckp','CKP','dist',.5,.8,'Adelante y abajo, frente a la rueda fónica de la <b>polea del cigüeñal</b>.','2 (+malla)','Señal + · señal − · (malla)','Cientos de Ω · V AC dando arranque','medio'),
    S('Detonación (KS)','knock','KS','block',.5,.5,'Block, del lado de admisión, debajo del múltiple.','2','Señal + · señal −','R muy alta (MΩ)','medio'),
    S('Temp. aire (IAT)','iat','IAT','filtro',.75,.62,'En el conducto de aire, entre el filtro y la mariposa.','2','Señal · masa','NTC ≈2–3 kΩ a temp. ambiente','medio'),
    S('Sonda lambda','o2','λ pre','escape',.62,.6,'Múltiple / bajada de escape, antes del catalizador.','1, 3 o 4','Según versión: contá los cables (señal · masa · calefactor)','Oscila 0,1 ↔ 0,9 V','bajo')],
  acts:[
    A('Válvula de ralentí (IAV)','2–4','Rotativa: 12 V + comando(s) ECU · paso a paso: 2 bobinas','Medir Ω entre pines (rotativa ≈ 10–25 Ω · paso a paso ≈40–60 Ω por bobina)','Regula el aire que pasa por fuera de la mariposa.'),
    A('Inyectores (×4)','2','12 V (relé) + masa comandada por la ECU','Ω ≈ 12–16 Ω (alta impedancia)','Uno por cilindro, en el múltiple.'),
    A('Bobina doble','3–4','12 V + 2 comandos de la ECU (+masa)','Primario ≈0,4–1 Ω','Chispa perdida: 1-4 y 2-3.'),
    A('Bomba de combustible','2','12 V del relé + masa','Consumo ≈4–7 A · presión ≈3 bar','En el tanque.')]},
ap:{short:'VW AP', sub:'1.6/1.8 Gol · Senda · Saveiro', name:'VW AP 1.6 / 1.8 8v (Gol · Senda · Saveiro) · multipunto',
  info:[['ECU','Magneti Marelli 1AVP · Bosch Motronic (según año: mirá la etiqueta)'],['Acelerador','Cable: TPS + motor paso a paso'],['Inyección','Multipunto: 4 inyectores'],['Encendido','Bobina única + <b>distribuidor</b>']],
  nota:'<b>Motor de la competencia</b> (6 sensores, 4 actuadores). La <b>posición la da un Hall dentro del distribuidor</b> (3 pines): no hay CKP en la polea ni en el volante, y <b>no se mide en Ω</b>: alimentación + señal girando el motor a mano. El <b>TMAP</b> junta MAP y temp. de aire. Sin manual: valores típicos, <b>confirmá midiendo</b>.',
  sensors:[
    S('Posición mariposa (TPS)','tps','TPS','mariposa',.5,.62,'En el cuerpo de mariposa (acelerador por cable).','3','Masa · 5 V · señal','Cerrada 0,3–0,9 V · a fondo 4–4,8 V','medio'),
    S('Hall del distribuidor (posición)','hall','CKP','block',.85,.75,'<b>Dentro del distribuidor</b>, al costado del block (lo mueve el eje intermedio).','3','Alimentación · señal · masa','Cuadrada 0 ↔ 5 V girando a mano · no se mide en Ω','medio'),
    S('Sonda lambda','o2','λ pre','escape',.62,.6,'Múltiple / bajada de escape, antes del catalizador.','1, 3 o 4','Según versión: contá los cables (señal · masa · calefactor)','Oscila 0,1 ↔ 0,9 V','bajo'),
    S('MAP + temp. aire (TMAP)','tmap','TMAP','admision',.5,.62,'Arriba del múltiple de admisión.','4','Masa · señal IAT · 5 V · señal MAP','Parado ≈4–4,5 V · ralentí ≈1–1,5 V','medio'),
    S('Temp. refrigerante (ECT)','ect','ECT','tapa',.08,.6,'Brida de agua en el extremo de la tapa.','2','Señal · masa','NTC: baja al calentar','medio'),
    S('Detonación (KS)','knock','KS','block',.5,.5,'Block, del lado de admisión.','2 (+malla)','Señal + · señal − · (malla)','R muy alta (MΩ)','medio')],
  acts:[
    A('Motor paso a paso de ralentí (IAC)','4','2 bobinas (A/A′ y B/B′)','Ω por bobina ≈40–60 Ω','En el cuerpo de mariposa.'),
    A('Inyectores (×4)','2','12 V (relé) + masa comandada por la ECU','Ω ≈ 12–16 Ω (alta impedancia)','Uno por cilindro, en el múltiple.'),
    A('Bobina de encendido','3','12 V + comando de la ECU / módulo + masa','Primario ≈0,5–1 Ω · secundario ≈5–10 kΩ','Una sola: reparte el distribuidor.'),
    A('Bomba de combustible','2','12 V del relé + masa','Consumo ≈4–7 A · presión ≈3 bar','En el tanque.')]},
agile:{short:'Chevrolet Agile', sub:'1.4 8v Econo.Flex', name:'Chevrolet Agile 1.4 8v Econo.Flex (2009–2016)',
  info:[['ECU','Delphi Multec (HN14 / MT27E, según fuente)'],['Acelerador','Electrónico: mariposa motorizada + pedal'],['Inyección','Multipunto secuencial · Flex'],['Combustible','Bomba en tanque con regulador · 4 bar']],
  nota:'El <b>CKP es de 3 pines</b> y las fuentes no coinciden si es inductivo con malla o Hall. Truco para la competencia: <b>medí Ω entre pines</b>: si dos de ellos dan cientos de Ω, es <b>inductivo</b> (A-B señal, C malla); si no da nada coherente y hay 5/12 V con contacto, es <b>Hall</b>. Sin señal de rotación, la ECU usa la de fase como respaldo.',
  sensors:[
    S('Rotación (CKP)','ckp','CKP','dist',.5,.8,'Adelante y abajo, frente a la rueda fónica de la <b>polea del cigüeñal</b> (lado distribución), en un soporte propio.','3','Inductivo: A-B señal, C malla · si es Hall: alimentación · señal · masa','Medir Ω entre pines para identificar el tipo','medio'),
    S('Fase (CMP)','hall','CMP','tapa',.9,.6,'Tapa de cilindros, lado distribución, cerca de la bobina.','3','Alimentación · señal · masa','Onda cuadrada 0 ↔ 5 V','medio'),
    S('MAP + temp. aire (TMAP)','tmap','TMAP','admision',.3,.62,'Atornillado arriba del <b>múltiple de admisión</b> (Bosch 0261230146).','4','Masa · señal IAT · 5 V · señal MAP','Parado ≈4–4,5 V · ralentí ≈1–1,5 V','medio'),
    S('Mariposa motorizada','etb','ETB','mariposa',.5,.62,'Cuerpo de mariposa a la entrada del múltiple.','6','Motor + / motor − · 5 V · masa · pista 1 · pista 2','Pistas en espejo','medio'),
    S('Pedal acelerador (APP)','app','APP','pedal',.5,.62,'En el habitáculo, en el pedal.','6','5 V ×2 · masa ×2 · señal pista 1 · señal pista 2','P2 ≈ ½ P1','medio'),
    S('Temp. refrigerante (ECT)','ect','ECT','tapa',.08,.6,'Caja del termostato / salida de agua, en el extremo de la tapa.','2','Señal · masa','NTC: baja al calentar','bajo'),
    S('Detonación (KS)','knock','KS','block',.5,.5,'Block, del lado de admisión, debajo del múltiple.','2','Señal + · señal −','R muy alta (MΩ)','medio'),
    S('Sonda lambda pre-cat','o2','λ pre','escape',.62,.6,'Múltiple / bajada de escape, <b>antes</b> del catalizador.','4','Señal · masa señal · calefactor 12 V · calefactor −','Oscila 50–900 mV','alto'),
    S('Sonda lambda post-cat','o2','λ post','cat',.85,.62,'<b>Después</b> del catalizador.','4','Señal · masa señal · calefactor 12 V · calefactor −','Estable ≈ 450 mV si el cat. funciona','alto'),
    S('Presión de aceite','oil','OPS','block',.15,.8,'Block, cerca del filtro de aceite.','1','Cable a la lámpara del tablero','Parado 0 Ω · andando abierto','medio')]},
k7m:{short:'Renault K7M', sub:'1.6 8v Logan/Sandero/Clio/Kangoo', name:'Renault K7M 1.6 8v (Logan · Sandero · Clio · Kangoo)',
  info:[['ECU','Siemens/Sagem Sirius 32 (fase 1) · Continental EMS31xx "V42" (Logan/Sandero)'],['Acelerador','Fase 1: cable (TPS + paso a paso) · V42: mariposa motorizada'],['Encendido','Bobina de 4 salidas (un bloque)'],['Inyectores','9,2–17 Ω']],
  nota:'El K7M <b>no tiene sensor de fase (CMP)</b>: la ECU identifica el cilindro por software. Saberlo suma puntos. El CKP lee el <b>volante</b> desde la caja y, si se cambia, la ECU pide un <b>aprendizaje</b> (RZ037). Datos del manual Renault MR-453 (calculador V42). También tiene un transductor de presión del A/C de 3 pines (5 V · señal · masa).',
  sensors:[
    S('Rotación / PMS (CKP)','ckp','CKP','caja',.82,.55,'Sobre la <b>carcasa de la caja</b>, detrás del motor, leyendo los dientes del <b>volante</b>.','2','Señal + · señal −','<b>175–295 Ω</b> (0–40 °C)','alto'),
    S('Presión del múltiple (MAP)','map','MAP','admision',.35,.62,'En el múltiple de admisión.','3','Masa · señal · 5 V','Parado ≈4–4,5 V · ralentí ≈1–1,5 V','medio'),
    S('Temp. aire (IAT)','iat','IAT','filtro',.75,.62,'Separado, a la <b>entrada del circuito de aire</b> (conducto / caja de filtro).','2','Señal · masa','NTC 300 Ω – 6 kΩ a temp. ambiente','alto'),
    S('Posición mariposa (TPS) · fase 1','tps','TPS','mariposa',.28,.62,'En el cuerpo de mariposa (versiones con acelerador por cable).','3','Masa · 5 V · señal','Cerrada 0,3–0,9 V · a fondo 4–4,8 V','medio'),
    S('Mariposa motorizada · V42','etb','ETB','mariposa',.72,.62,'Cuerpo de mariposa motorizado (calculador V42).','6','Motor ± · 5 V · masa · pista 1 · pista 2','Doble pista','alto'),
    S('Pedal acelerador · V42','app','APP','pedal',.5,.62,'Pedal con potenciómetro de 2 pistas.','6','5 V ×2 · masa ×2 · 2 señales','P2 ≈ ½ P1','medio'),
    S('Temp. refrigerante (ECT)','ect','ECT','tapa',.08,.6,'<b>Caja de agua</b> del motor (salida de agua en la tapa).','2 (3)','Señal · masa (3.er pin = reloj del tablero en algunas versiones)','NTC 100 Ω – 10 kΩ','medio'),
    S('Detonación (KS)','knock','KS','block',.5,.5,'Block, <b>entre los 4 inyectores</b> (debajo del múltiple).','2','Señal + · señal −','<b>&gt; 10 MΩ</b>','alto'),
    S('Sonda lambda pre-cat','o2','λ pre','escape',.62,.6,'Aguas arriba: a la salida del múltiple de escape.','4','Señal · masa señal · calefactor 12 V · calefactor −','Calefactor <b>7–11 Ω</b>','alto'),
    S('Sonda lambda post-cat','o2','λ post','cat',.85,.62,'Aguas abajo: después del catalizador.','4','Señal · masa señal · calefactor 12 V · calefactor −','Estable si el cat. funciona','alto'),
    S('Velocidad (VSS)','vss','VSS','caja',.4,.82,'En la caja de cambios.','3','Alimentación · masa · señal','Pulsos al girar la rueda','medio'),
    S('Presión de aceite','oil','OPS','block',.15,.8,'Block, cerca del filtro de aceite.','1','Cable a la lámpara','Parado 0 Ω · andando abierto','medio')]},
vw:{short:'VW 1.6 EA111', sub:'Gol Trend / Voyage 8v', name:'VW 1.6 8v EA111 (Gol Trend · Voyage 2008+)',
  info:[['ECU','Bosch ME7.5.30 (1.6) · Magneti Marelli IAW 4GV en el 1.0'],['Acelerador','Electrónico: mariposa motorizada + pedal'],['CKP','Hall, atrás del cigüeñal (hay que bajar la caja)'],['Inyección','Multipunto secuencial · Flex']],
  nota:'El <b>CKP del EA111 es Hall de 3 pines</b> y está en la <b>brida trasera del cigüeñal</b>: no se mide en Ω, se mide alimentación y señal. El Gol Power (G4) puede tener otra ECU (Marelli): verificá la etiqueta. Si el auto tiene sensor de velocidad en la caja o la toma del ABS depende del año: no confirmado.',
  sensors:[
    S('Rotación (CKP)','hall','CKP','caja',.9,.72,'En la <b>brida trasera del cigüeñal</b>, entre motor y caja (para cambiarlo hay que bajar la caja).','3','Alimentación · señal · masa','Hall: no se mide en Ω','medio'),
    S('Fase (CMP)','hall','CMP','tapa',.92,.6,'Tapa de cilindros, lado distribución, en la punta del árbol de levas.','3','Alimentación · señal · masa','Cuadrada 0 ↔ 5 V','medio'),
    S('MAP + temp. aire (TMAP)','tmap','TMAP','admision',.4,.62,'Arriba del múltiple de admisión.','4','Masa · señal IAT · 5 V · señal MAP','Parado ≈4–4,5 V · ralentí ≈1–1,5 V','medio'),
    S('Mariposa motorizada','etb','ETB','mariposa',.5,.62,'Cuerpo de mariposa a la entrada del múltiple.','6','Motor ± · 5 V · masa · pista 1 · pista 2','Pistas en espejo','medio'),
    S('Pedal acelerador (APP)','app','APP','pedal',.5,.62,'En el pedal.','6','5 V ×2 · masa ×2 · 2 señales','P2 ≈ ½ P1','medio'),
    S('Temp. refrigerante (ECT)','ect','ECT','tapa',.08,.6,'<b>Brida de agua</b> en el extremo de la tapa.','2 o 4','Señal · masa (4 pines = 2 NTC: ECU + tablero)','NTC: baja al calentar','bajo'),
    S('Detonación (KS)','knock','KS','block',.5,.5,'Block, del lado de admisión.','2 (+malla)','Señal + · señal − · (malla)','R muy alta (MΩ)','medio'),
    S('Sonda lambda pre-cat','o2','λ pre','escape',.62,.6,'Antes del catalizador.','4','Señal · masa señal · calefactor 12 V · calefactor −','Oscila 0,1 ↔ 0,9 V','medio'),
    S('Sonda lambda post-cat (según año)','o2','λ post','cat',.85,.62,'Después del catalizador (en las versiones que la traen).','4','Igual que la pre','Estable si el cat. funciona','bajo'),
    S('Presión de aceite','oil','OPS','block',.15,.8,'Block, cerca del filtro de aceite.','1','Cable a la lámpara','Parado 0 Ω · andando abierto','medio')]},
fire:{short:'Fiat Fire 1.4', sub:'Palio / Siena 8v', name:'Fiat Fire 1.4 8v (Palio · Siena)',
  info:[['ECU','Magneti Marelli IAW 4DF (Flex 2005–09) · IAW 4SF (Fire Evo)'],['Acelerador','4DF: cable (TPS + actuador de ralentí) · 4SF: mariposa motorizada'],['CKP','Inductivo 2 pines, adelante en la polea'],['Encendido','Bobina doble (chispa perdida)']],
  nota:'Hay <b>dos generaciones</b>: la vieja (IAW 4DF, acelerador por <b>cable</b>, cuerpo 44SMF8 con TPS de 3 pines) y la Evo (IAW 4SF, mariposa <b>motorizada</b> + pedal). Mirá si hay cable de acelerador y ya sabés cuál es. El <b>sensor de fase no está confirmado</b> en la lista del 4SF; si encontrás un sensor de 3 pines en la tapa lado distribución, es el CMP (Hall).',
  sensors:[
    S('Rotación (CKP)','ckp','CKP','dist',.5,.8,'Adelante, frente a la <b>rueda fónica de la polea</b> del cigüeñal.','2','Señal + · señal −','<b>≈840 Ω</b> (600–1.100) · entrehierro 0,8–1,4 mm','alto'),
    S('MAP + temp. aire (TMAP)','tmap','TMAP','admision',.35,.62,'Arriba del múltiple de admisión.','4','Masa · señal IAT · 5 V · señal MAP','Parado ≈4–4,5 V · ralentí ≈1–1,5 V','medio'),
    S('Posición mariposa (TPS) · 4DF','tps','TPS','mariposa',.28,.62,'Cuerpo de mariposa 44SMF8 (acelerador por cable).','3','Masa · 5 V · señal','Cerrada 0,3–0,9 V · a fondo 4–4,8 V','medio'),
    S('Mariposa motorizada · 4SF','etb','ETB','mariposa',.72,.62,'Cuerpo de mariposa motorizado (Fire Evo).','6','Motor ± · 5 V · masa · pista 1 · pista 2','Pistas en espejo','medio'),
    S('Pedal acelerador · 4SF','app','APP','pedal',.5,.62,'En el pedal (Fire Evo).','6','5 V ×2 · masa ×2 · 2 señales','P2 ≈ ½ P1','medio'),
    S('Temp. refrigerante (ECT)','ect','ECT','tapa',.08,.6,'Caja de agua en el extremo de la tapa.','2','Señal · masa','NTC: baja al calentar','bajo'),
    S('Detonación (KS)','knock','KS','block',.5,.5,'Block, del lado de admisión.','2','Señal + · señal −','Torque <b>25 Nm</b>','medio'),
    S('Sonda lambda pre-cat','o2','λ pre','escape',.62,.6,'Antes del catalizador.','4','Señal · masa señal · calefactor 12 V · calefactor −','Oscila 0,1 ↔ 0,9 V','medio'),
    S('Velocidad (VSS)','vss','VSS','caja',.4,.82,'En la caja de cambios.','3','Alimentación · masa · señal','Pulsos al girar la rueda','medio'),
    S('Presión de aceite','oil','OPS','block',.15,.8,'Block, cerca del filtro de aceite.','1','Cable a la lámpara','Parado 0 Ω · andando abierto','medio')]},
tu:{short:'Peugeot TU 1.4/1.6', sub:'206 / 207 8v', name:'Peugeot TU3JP 1.4 / TU5JP 1.6 8v (206 · 207)',
  info:[['ECU','Sagem S2000 · Magneti Marelli IAW 48P2 (según versión)'],['Acelerador','Cable: TPS + motor paso a paso'],['CKP','Inductivo 2 pines, lee el volante'],['Encendido','Bobina casete (chispa perdida)']],
  nota:'El TU 8v <b>no tiene sensor de fase</b>. El CKP lee las ranuras del <b>volante</b> desde la caja. La ECU varía mucho entre años (Sagem / Marelli): por eso la <b>numeración de pines</b> cambia, pero las <b>funciones</b> no. Muchos datos de este motor tienen confianza media o baja: <b>confirmá midiendo</b>.',
  sensors:[
    S('Rotación (CKP)','ckp','CKP','caja',.82,.55,'Lado volante, sobre la carcasa de la caja, leyendo las ranuras del <b>volante</b>.','2','Señal + · señal −','<b>≈440–550 Ω</b>','medio'),
    S('MAP + temp. aire (TMAP)','tmap','TMAP','admision',.15,.62,'Múltiple de admisión, lado izquierdo (sujeto con 1 tornillo).','4','Masa · señal IAT · 5 V · señal MAP','Parado ≈4–4,5 V · ralentí ≈1–1,5 V','medio'),
    S('Posición mariposa (TPS)','tps','TPS','mariposa',.5,.62,'En el cuerpo de mariposa.','3','Masa · 5 V · señal','Cerrada 0,3–0,9 V · a fondo 4–4,8 V','medio'),
    S('Temp. refrigerante (ECT)','ect','ECT','tapa',.08,.6,'Caja de salida de agua / termostato.','2','Señal · masa (el del tablero va aparte)','NTC: baja al calentar','bajo'),
    S('Detonación (KS)','knock','KS','block',.5,.5,'Block, del lado de admisión.','2','Señal + · señal −','R muy alta (MΩ)','bajo'),
    S('Sonda lambda pre-cat','o2','λ pre','escape',.62,.6,'Antes del catalizador.','4','Señal · masa señal · calefactor 12 V · calefactor −','Oscila 0,1 ↔ 0,9 V','medio'),
    S('Sonda lambda post-cat (Euro 3+)','o2','λ post','cat',.85,.62,'Después del catalizador (desde Euro 3).','4','Igual que la pre','Estable si el cat. funciona','bajo'),
    S('Velocidad (VSS)','vss','VSS','caja',.4,.82,'En la caja de cambios.','3','Alimentación · masa · señal','Pulsos al girar la rueda','bajo'),
    S('Presión de aceite','oil','OPS','block',.15,.8,'Block, cerca del filtro de aceite.','1','Cable a la lámpara','Parado 0 Ω · andando abierto','medio')]},
rocam:{short:'Ford Rocam 1.6', sub:'Ka / Fiesta / EcoSport', name:'Ford 1.6 Zetec Rocam (Ka · Fiesta · EcoSport) · EEC-V',
  info:[['ECU','Ford EEC-V (PCM de 60 pines)'],['Acelerador','Cable: TPS + válvula IAC de 2 pines (6–14 Ω)'],['CKP / CMP','Los dos inductivos de 2 pines'],['Fuente','Manual EEC-V Rocam (pines del PCM)']],
  nota:'Dos cosas que distinguen al Rocam: <b>el CMP también es inductivo</b> (2 pines, 400–600 Ω, como el CKP), y Ford usa su <b>propia curva NTC</b>: a 20 °C el ECT/IAT mide <b>≈36 kΩ</b> (diez veces más que un Bosch). No te asustes: está bien. El manual EEC-V del Rocam <b>no menciona sensor de detonación</b>. Entre paréntesis va el pin del PCM.',
  sensors:[
    S('Rotación (CKP)','ckp','CKP','caja',.82,.55,'En el block, frente al <b>volante</b> (lado caja).','2','1 señal (PCM 56) · 2 masa (PCM 55)','<b>400–600 Ω</b> · arranque ≈1,2 VAC · ralentí 3–6 VAC','alto'),
    S('Fase (CMP) — inductivo','ckp','CMP','tapa',.92,.6,'En la tapa del árbol de levas (lado distribución).','2','1 señal (PCM 24) · 2 masa (PCM 30)','<b>400–600 Ω</b> · 0,1–0,5 VAC · 1 pulso cada 2 vueltas','alto'),
    S('MAP + temp. aire (TMAP)','tmap','TMAP','admision',.4,.62,'Arriba del múltiple de admisión (Bosch 0261230027).','4','1 MAP (PCM 49) · 2 +5 V (PCM 26) · 3 IAT (PCM 25) · 4 masa (PCM 46)','MAP ≈4,0 V parado · <b>≈1,35 V ralentí</b> · IAT 20 °C ≈ 36 kΩ','alto'),
    S('Posición mariposa (TPS)','tps','TPS','mariposa',.5,.62,'En el cuerpo de mariposa.','3','1 +5 V (PCM 26) · 2 señal (PCM 47) · 3 masa (PCM 46)','Ralentí 0,5–1,0 V · a fondo 4,0–4,6 V','alto'),
    S('Temp. refrigerante (ECT)','ect','ECT','tapa',.08,.6,'Salida de agua de la tapa (ubicación exacta no confirmada).','2','1 señal (PCM 7) · 2 masa (PCM 46)','20 °C ≈ 36 kΩ · 80 °C ≈ 4 kΩ · 100 °C ≈ 2,15 kΩ','medio'),
    S('Sonda lambda (HEGO)','o2','λ pre','escape',.62,.6,'Múltiple de escape, antes del catalizador.','4','Señal (PCM 44) · masa · calefactor 12 V (fusible F27 10 A) · calefactor −','0–900 mV oscilando','medio'),
    S('Velocidad (VSS)','vss','VSS','caja',.4,.82,'En el eje de salida de la caja.','3','1 masa (PCM 20) · 2 señal (PCM 3) · 3 +12 V','Cuadrada 0–12 V','alto'),
    S('Presión de aceite','oil','OPS','block',.15,.8,'Block, cerca del filtro de aceite.','1','Cable a la lámpara','Parado 0 Ω · andando abierto','medio')]}
};

/* ===== Mapa del motor ===== */
var ZONES = {
  filtro:{x:24,y:24,w:150,h:76,t:'FILTRO DE AIRE'},
  mariposa:{x:196,y:24,w:130,h:76,t:'CUERPO MARIPOSA'},
  admision:{x:348,y:24,w:330,h:76,t:'MÚLTIPLE DE ADMISIÓN'},
  tapa:{x:220,y:120,w:458,h:96,t:'TAPA DE CILINDROS'},
  block:{x:220,y:228,w:458,h:100,t:'BLOCK / CÁRTER'},
  escape:{x:220,y:342,w:458,h:46,t:'MÚLTIPLE DE ESCAPE'},
  cat:{x:420,y:404,w:150,h:50,t:'CATALIZADOR'},
  caja:{x:24,y:120,w:176,h:208,t:'CAJA / VOLANTE'},
  dist:{x:698,y:120,w:140,h:208,t:'DISTRIBUCIÓN'},
  pedal:{x:24,y:404,w:176,h:50,t:'HABITÁCULO · PEDAL'}
};
/* posición de un sensor: zona + punto relativo (fx,fy en 0..1) */
function mkPos(s){var z=ZONES[s.zona]; return {x:z.x+z.w*(s.fx==null?.5:s.fx), y:z.y+z.h*(s.fy==null?.6:s.fy)};}

/* ===== Diagrama de pines ===== */
function pinDiagram(s){
  var n=s.pins.length, rh=40, top=26, h=top*2+rh*(n-1)+10, W=560;
  var y0=top+5, sx=20, sw=140, ex=430, ew=110;
  var o='<svg viewBox="0 0 '+W+' '+h+'" role="img" aria-label="Diagrama de pines de '+s.sig+'">';
  o+='<rect class="boxs" x="'+sx+'" y="8" width="'+sw+'" height="'+(h-16)+'" rx="12"/>';
  o+='<text class="boxt" x="'+(sx+sw/2-8)+'" y="'+(h/2+2)+'">'+s.sig.split(' ')[0]+'</text>';
  o+='<text class="boxt2" x="'+(sx+sw/2-8)+'" y="'+(h/2+18)+'">sensor</text>';
  o+='<rect class="boxe" x="'+ex+'" y="8" width="'+ew+'" height="'+(h-16)+'" rx="12"/>';
  o+='<text class="boxt" x="'+(ex+ew/2)+'" y="'+(h/2+2)+'">ECU</text>';
  o+='<text class="boxt2" x="'+(ex+ew/2)+'" y="'+(h/2+18)+'">'+(s.sig==='OPS'?'tablero':'módulo')+'</text>';
  s.pins.forEach(function(p,i){
    var y=y0+i*rh, k=KINDS[p[1]], dash=p[1]==='shd'?' stroke-dasharray="5 5"':'';
    o+='<path d="M'+(sx+sw)+' '+y+' H'+ex+'" stroke="'+k.c+'" stroke-width="3" fill="none" stroke-linecap="round"'+dash+'/>';
    o+='<circle class="pinc" cx="'+(sx+sw)+'" cy="'+y+'" r="13" stroke="'+k.c+'"/>';
    o+='<text class="pint" x="'+(sx+sw)+'" y="'+(y+4)+'" style="font-size:'+(p[0].length>2?9:12)+'px">'+p[0]+'</text>';
    o+='<text class="wlab" x="'+(sx+sw+22)+'" y="'+(y-6)+'">'+p[2].split(' — ')[0].split(' (')[0]+'</text>';
    o+='<circle cx="'+ex+'" cy="'+y+'" r="4" fill="'+k.c+'"/>';
  });
  return o+'</svg>';
}

/* ===== Ficha de un tipo de sensor: principio, pines, cómo se mide, valores ===== */
function renderFicha(id){
  var s=SENSORS[id], h='';
  h+='<article class="panel ficha" id="f-'+id+'"><div class="fhead"><span class="sig">'+s.sig+'</span><h3>'+s.name+'</h3><span class="tipo">'+s.tipo+'</span></div>';
  h+='<div class="fgrid"><div><div class="diag">'+pinDiagram(s)+'</div>';
  h+='<h5>Valores típicos</h5><div class="vals">'+s.vals.map(function(v){return '<span class="val">'+v+'</span>';}).join('')+'</div>';
  h+='<p class="fail"><b>Si falla:</b> '+s.falla+'</p></div><div>';
  h+='<h5>Pines</h5><table class="pintbl"><tr><th>Pin</th><th>Función</th><th>Qué medir</th></tr>';
  s.pins.forEach(function(p){h+='<tr><td><span class="kdot" style="background:'+KINDS[p[1]].c+'"></span>'+p[0]+'</td><td>'+p[2]+'</td><td class="m">'+p[3]+'</td></tr>';});
  return h+'</table><h5>Cómo lo mido</h5><ol>'+s.mido.map(function(m){return '<li>'+m+'</li>';}).join('')+'</ol></div></div></article>';
}
function renderLegend(el){
  el.innerHTML=Object.keys(KINDS).map(function(k){return '<span><span class="kdot" style="background:'+KINDS[k].c+'"></span>'+KINDS[k].n+'</span>';}).join('');
}
function renderActTable(){
  return '<table class="pintbl"><tr><th>Actuador</th><th>Pines</th><th>Qué es cada pin</th><th>Medición</th></tr>'+
    ACT.map(function(a){return '<tr><td>'+a[0]+'</td><td>'+a[1]+'</td><td>'+a[2]+'</td><td class="m">'+a[3]+'</td></tr>';}).join('')+'</table>';
}
function renderEngActs(e){
  if(!e.acts||!e.acts.length) return '';
  return '<table class="pintbl"><tr><th>Actuador</th><th>Pines</th><th>Qué es cada pin</th><th>Medición</th></tr>'+
    e.acts.map(function(a){return '<tr><td><b>'+a.n+'</b>'+(a.nota?'<br><small>'+a.nota+'</small>':'')+'</td><td>'+a.p+'</td><td>'+a.pines+'</td><td class="m">'+a.med+'</td></tr>';}).join('')+'</table>';
}
