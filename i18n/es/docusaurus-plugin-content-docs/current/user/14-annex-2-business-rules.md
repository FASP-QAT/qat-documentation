---
id: annex-2-business-rules
title: "Annex 2: Business Rules"
sidebar_label: "Annex 2: Business Rules"
sidebar_position: 14
---
# Anexo 2: Reglas de Negocio

## A. Introducción

Este documento describe las fórmulas clave y las reglas comerciales que sustentan la aplicación de la herramienta de análisis de cuantificación (QAT).

## B. Módulo de Planificación de Suministros: Planificación de Suministros

1. **Saldo de apertura:**
   El saldo inicial de un mes es el mismo que el saldo final del mes pasado y, si ese es el primer mes, el saldo inicial es 0.
   
   **Fórmula:**
   *Saldo inicial del primer mes = 0*
   *Saldo inicial del mes actual = Saldo final del mes anterior*

2. **Stock vencido:**
   El stock vencido se calcula como la suma del Saldo final de todos los lotes del mes anterior que estén disponibles y tengan la misma fecha de vencimiento que la del mes actual.
   
   **Fórmula:**
   *Stock vencido = Suma del saldo final de los lotes que vencen este mes*

3. **Envío total:**
   El envío total se calcula como la suma de todos los envíos con fecha de recepción (si está presente o fecha de entrega esperada) es la misma que la del mes actual y el estado del envío no está cancelado y si ese envío en particular debe contabilizarse, se considerará en el saldo final.
   
   **Fórmula:**
   *Envíos totales = Suma de todos los envíos cuya fecha de recepción o fecha prevista de entrega es en el mismo mes*

4. **Stock Final y Ajuste:**
   El stock final se calcula como la suma del stock de todas las regiones y el ajuste total se calcula como la suma de los ajustes de todas las regiones en función de determinadas condiciones.
   a. Si la región ha informado tanto el stock real como el ajuste, entonces solo consideramos el recuento real mientras hacemos la suma y el ajuste se ignora para esa región incluso si alguien ha ingresado los datos para el ajuste.
   b. Si la región solo ha informado el ajuste, entonces ese ajuste se considera al realizar la suma.
   
   Por ejemplo, si la Región A ha informado tanto el recuento de existencias como el ajuste manual, en ese caso solo consideramos el recuento de existencias e ignoramos el ajuste. Y si la Región B ha informado solo los ajustes, entonces tomamos la suma de todos los ajustes para esa región. Y luego sumamos los recuentos de ambas regiones como stock final y ajuste total.
   
   **Fórmula:**
   *Stock final = Suma del stock de todas las regiones*
   *Ajustes totales = Suma de ajustes de todas las regiones para las que no hay cantidad de stock disponible.*

5. **Consumo:**
   El consumo se calcula como la suma del consumo de todas las regiones en función de algunas condiciones.
   * Si no todas las regiones han informado el consumo real, QAT toma el máximo de la suma del consumo previsto y la suma del consumo real.
   * Si todas las regiones han informado el consumo real, tomamos la suma como consumo final.
   
   **Fórmula:**
   *Consumo final (si todas las regiones no han informado el consumo real) = MAX (Suma del consumo real para todas las regiones, Suma del consumo previsto para todas las regiones)*
   *Consumo final (si todas las regiones han informado el consumo real) = Suma del consumo real de todas las regiones*

6. **Inventario proyectado:**
   El inventario proyectado se calcula como la suma del saldo inicial, los envíos totales, los ajustes totales y la deducción del consumo final total y el stock vencido.
   
   **Fórmula:**
   *Inventario proyectado = Saldo inicial + Envíos totales +/- Ajustes totales - Consumo final - Stock vencido*

7. **Calcular ajuste automático:**
   Los ajustes automáticos se calculan en base a tres condiciones:
   un. Si todas las regiones han informado el recuento de existencias real y el inventario proyectado no es igual al inventario final
   B. Si algunas de las regiones han informado que el recuento de existencias real y el inventario final son mayores que la suma del inventario proyectado y el ajuste total
   c. Si alguna de las regiones ha informado que el recuento de existencias real y el inventario proyectado es inferior a 0
   
   Y en función de las condiciones anteriores, si se cumple alguna de las condiciones, el ajuste automático se calcula como la diferencia entre el inventario final y el inventario proyectado; de lo contrario, se considera 0.
   
   **Fórmula:**
   *Ajustes automáticos = Stock final - Inventario proyectado*

8. **AMC:**
   El consumo mensual promedio (AMC) se calcula como la relación entre la suma de la demanda total de los meses pasados y la demanda total de los meses futuros con el número total de meses para todos los consumos finales distintos de cero e incluyendo el mes actual en los meses futuros. Si el consumo es real, la Demanda Plena será igual a la suma de la demanda insatisfecha más el consumo real. Si se pronostica el consumo, la demanda total es igual al consumo pronosticado. Tanto los meses pasados ​​como los meses futuros se basan en el mapeo de las unidades de planificación del programa.
   
   **Fórmula:**
   *AMC = Suma (Demanda total en el número de meses pasados) + Suma (Demanda total en el número de meses futuros)/Número total de meses*

9. **MOS mínimo:**
   Min MOS se calcula como Max of Min MOS y Min MOS guardrail. Min MOS se basa en el mapeo de la unidad de planificación del programa y la barandilla Min MOS se basa en el reino.
   
   Las reglas para los lugares decimales son las siguientes:
   * Muestra 0 decimales si tiene más de 3 dígitos (&gt;100, por ejemplo, 10 000)
   * Muestra 1 decimal si tiene 2 dígitos (por ejemplo, 99,8)
   * Muestra 2 decimales si tiene 1 dígito (por ejemplo, 1,63)
   * Muestra 3 decimales si es inferior a 0 (por ejemplo, 0,124)
   
   *Nota: AMC y MOS siempre muestran decimales, otros campos del plan de suministro solo mostrarán decimales si la opción de redondeo está activada.*
   
   **Fórmula:**
   *Min MOS = Máx. de (Min MOS, Barandilla Min MOS)*

10. **MOS máx.:**
    Max MOS se calcula como Min of Max de la suma de Min MOS y la frecuencia de reordenamiento y la barandilla Min Max y la barandilla Max Max. La frecuencia de reorden se basa en el mapeo de la unidad de planificación del programa y la barandilla Min Max y la barandilla Max Max se basan en el ámbito.
    
    **Fórmula:**
    *Max MOS = Min(Max(Min MOS + Frecuencia de reordenamiento, barandilla Min Max), barandilla Max Max)*

11. **Stock mínimo:**
    El stock mínimo se calcula multiplicando el AMC y el MOS mínimo.
    
    **Fórmula:**
    *Stock mínimo = AMC * MOS mínimo*

12. **Stock máximo:**
    El stock máximo se calcula multiplicando el AMC y el MOS máximo.
    
    **Fórmula:**
    *Stock máximo = AMC * MOS máximo*

13. **Cantidad máxima:**
    La cantidad máxima se calcula como la suma de la cantidad mínima y la multiplicación de la frecuencia de reorden y el AMC.
    
    **Fórmula:**
    *Cantidad máxima = Cantidad mínima + (Frecuencia de reorden * AMC)*

14. **Saldo final:**
    El saldo final se calcula en base a ciertas condiciones:
    un. Si todas las regiones han informado el recuento de existencias real, entonces el saldo final es igual al stock final.
      
      **Fórmula:**
      *Saldo final = Stock final*
    B. Si algunas de las regiones han informado el recuento de existencias real y si las existencias finales son mayores que la suma del inventario proyectado y el ajuste automático, entonces el saldo final es igual al stock final.
      
      **Fórmula:**
      *Saldo final = Stock final*
    c. De lo contrario, el saldo final se calcula como la suma del inventario proyectado y el ajuste automático.
      
      **Fórmula:**
      *Saldo final = Inventario proyectado + Ajuste automático*

15. **Demanda insatisfecha:**
    * Cuando el consumo real está disponible = *(Consumo real * Días desabastecidos) / (Días del mes – Días desabastecidos)*
    * Cuando no hay consumo real disponible = *Inventario Proyectado\* (si el Inventario Proyectado es &lt; 0)*

16. **MOS:**
    MOS se calcula como la relación entre el saldo final y el de AMC.
    
    **Fórmula:**
    *MOS = Saldo final / AMC*

17. **Cuándo sugerir envíos (Planificar por MOS):**
    QAT sugiere el envío por un mes cuando el MOS del mes y los dos meses siguientes es menor que el del Min MOS y si el mes es mayor que el mes actual.
    
    **Fórmula:**
    *Cuándo sugerir envíos = Si MOS para el mes y dos meses siguientes &lt; MOS mínimo*

18. **Cantidad de envío sugerida (planificada por MOS):**
    La cantidad de envío sugerida se calcula como la diferencia entre el stock máximo y el saldo final.
    
    **Fórmula:**
    *Cantidad de envío sugerida = Stock máximo - Saldo final*
    * Si el MOS del mes actual y los dos meses siguientes es inferior al MOS mínimo:
      *Cantidad de pedido sugerida = (Stock máximo - Saldo final + Demanda insatisfecha)*
    * Si MOS es '0' y AMC es mayor que &gt; 0 y los dos meses siguientes son menores que Min MOS:
      *Cantidad de pedido sugerida = (Stock máximo - Saldo final + Demanda insatisfecha)*
    * Si MOS es '0' y AMC es mayor que &gt; 0 y uno de los dos meses siguientes es mayor que Min MOS:
      *Cantidad de pedido sugerida = (Stock mínimo - Saldo final + Demanda insatisfecha)*

19. **Cuándo sugerir envíos (Planificar por cantidad):**
    QAT sugiere el envío de un mes cuando el Saldo final del mes + el tiempo de entrega de distribución y los dos meses siguientes es menor que el de la Cantidad mínima o cuando el Saldo final del mes es 0 y el AMC es mayor que 0 y si el mes es mayor que el mes actual.
    
    **Fórmula:**
    *Cuándo sugerir envíos = Si Saldo final del mes + X (Tiempo de entrega de distribución) y dos meses siguientes &lt; Cantidad mínima o*
    *Cuándo sugerir envíos = Si el saldo final del mes = 0 y el AMC no es igual a 0*

20. **Cantidad de envío sugerida (Planificar por cantidad):**
    La cantidad de envío sugerida se calcula como la diferencia entre el stock máximo/stock mínimo y la suma del saldo final y la demanda insatisfecha.
    
    **Fórmula:**
    * Si el saldo final del mes actual + X meses (plazo de entrega de distribución) y los dos meses siguientes es inferior a la cantidad mínima:
      *Cantidad de pedido sugerida = (Cantidad máxima para el mes actual + X meses (plazo de entrega de distribución) - Saldo final + Demanda insatisfecha)*
    * Si el saldo final es '0' y el AMC es mayor que &gt; 0 para el mes actual + X meses (plazo de entrega de distribución) y los dos meses siguientes son menores que la cantidad mínima:
      *Cantidad de pedido sugerida = (Cantidad máxima para el mes actual + X meses (plazo de entrega de distribución) - Saldo final + Demanda insatisfecha)*
    * Si el final es '0' y el AMC es mayor que &gt; 0 para el mes actual + X meses (plazo de entrega de distribución) y uno de los dos meses siguientes es mayor que el MOS mínimo:
      *Cantidad de pedido sugerida = (Cantidad mínima - Saldo final + Demanda insatisfecha)*

21. **Cálculos por lotes:**
    A continuación se detallan los pasos para todas las asignaciones de lotes:
    
    un. **Cálculos FEFO:**
      Primero calculamos el FEFO no asignado, es decir, calculamos la cantidad restante total del consumo final y el ajuste total que se utilizará en el caso de cálculos de FEFO y para los cuales no tenemos la información del lote. Entonces, el FEFO no asignado se calcula en función de dos condiciones diferentes:
      yo. Si la suma del ajuste total y el ajuste automático es menor que 0, entonces el FEFO no asignado se calcula como la diferencia entre el consumo final y la suma del ajuste manual y el ajuste automático.
        
        **Fórmula:**
        *FEFO no asignado = Consumo final - (Ajuste manual + Ajuste automático)*
      ii. Si la suma del ajuste y el ajuste nacional es mayor que 0, entonces el FEFO no asignado es igual al del consumo final.
        
        **Fórmula:**
        *FEFO no asignado = Consumo final*
      
      Clasificamos todos los lotes según la fecha de vencimiento en orden ascendente, es decir, clasificamos los lotes en el orden que vence primero.
      
      Luego recorremos todos los lotes para realizar los cálculos de FEFO:
      
      Calculamos el saldo inicial de un lote que es el mismo que el saldo final del mismo lote en el mes anterior. Y si se crea el lote, el saldo inicial se considera 0.
      
      **Fórmula:**
      *Saldo inicial del lote recién creado = 0*
      *Saldo inicial de lotes restantes = Saldo final*
      
      Luego calculamos la cantidad de existencias vencidas, que es igual al saldo final del mismo lote del mes anterior y solo se calcula cuando la fecha de vencimiento del lote es la misma que la del mes actual; de lo contrario, es 0.
      
      **Fórmula:**
      *Stock vencido (si la fecha de vencimiento es la misma que la fecha actual) = Saldo final*
      *Stock vencido (de lo contrario) = 0*
      
      Luego calculamos el saldo final temporal. El Saldo Final Temporal se calcula como la suma del saldo inicial, los envíos totales, los ajustes totales y la deducción del consumo final total y el stock vencido.
      
      **Fórmula:**
      *Saldo final temporal = Saldo inicial + Cant. de envío + Cant. de ajuste - Cant. de consumo - Stock vencido*
      
      Luego calculamos el monto del saldo final, que se calcula en función de dos condiciones diferentes:
      yo. Si el saldo final temporal es mayor o igual al FEFO no asignado, entonces el saldo final es igual a la diferencia entre el saldo final temporal y el FEFO no asignado. Además, en este caso hacemos que el FEFO no asignado sea 0, ya que hemos asignado toda la cantidad al lote.
        
        **Fórmula:**
        *Saldo final = Saldo final temporal - FEFO no asignado*
        *FEFO no asignado = 0*
      ii. Si el saldo final temporal es menor que el FEFO no asignado, entonces el saldo final es igual a 0, ya que consumiremos este lote por completo. Además, luego deducimos la CB temporal del FEFO no asignado, ya que hemos consumido gran parte de la cantidad.
        
        **Fórmula:**
        *Saldo final = 0*
        *FEFO no asignado = FEFO no asignado - Saldo final temporal*
      
      Repetimos este proceso para cada lote en orden de fecha de caducidad.

b. **Cálculos LEFO:**
      Primero calculamos el LEFO no asignado, es decir, calculamos la cantidad restante total del consumo final y el ajuste total que se utilizará en el caso de los cálculos de LEFO y para los cuales no tenemos la información del lote. Entonces, el LEFO no asignado se calcula en función de dos condiciones diferentes:
      yo. Si la suma del ajuste manual y el ajuste automático es mayor que 0, entonces el LEFO no asignado se calcula como la diferencia entre 0 y la suma del ajuste manual y el ajuste automático.
        
        **Fórmula:**
        *LEFO no asignado = 0 - (Ajuste manual + Ajuste automático)*
      ii. Si la suma del ajuste manual y el ajuste automático es menor que 0, entonces el LEFO no asignado es 0.
        
        **Fórmula:**
        *LEFO no asignado = 0*
      III. Si LEFO no asignado no es igual a 0, entonces continuamos; de lo contrario, nos rompemos.
      
      Clasificamos todos los lotes según la fecha de vencimiento en orden descendente, es decir, clasificamos los lotes en el orden que vence primero.
      
      Luego recorremos todos los lotes para realizar los cálculos LEFO:
      
      Luego calculamos el saldo final temporal. El saldo final temporal es el mismo que el saldo final del lote después de los cálculos de FEFO.
      
      **Fórmula:**
      *Saldo final temporal = Saldo final después de los cálculos de FEFO*
      
      Luego calculamos el monto del saldo final, que se calcula en función de dos condiciones diferentes:
      yo. Si el saldo final temporal es mayor o igual que el LEFO no asignado, entonces el saldo final es igual a la diferencia entre el saldo final temporal y el LEFO no asignado. Además, en este caso hacemos que el LEFO no asignado sea 0, ya que hemos asignado toda la cantidad al lote.
        
        **Fórmula:**
        *Saldo final = Saldo final temporal - LEFO no asignado*
        *LEFO no asignado = 0*
      ii. Si el saldo final temporal es menor que el LEFO no asignado, entonces el saldo final es igual a 0, ya que consumiremos este lote por completo. Además, luego deducimos la temperatura CB del LEFO no asignado, ya que hemos consumido gran parte de la cantidad.
        
        **Fórmula:**
        *Saldo final = 0*
        *LEFO no asignado = LEFO no asignado - Saldo final temporal*
      
      Repetimos este mismo proceso para el resto de lotes hasta que LEFO no asignado no sea igual a 0.

## C. Módulo de planificación de suministros: Lista de problemas QAT

### C1. Calidad de datos

1. **Faltan entradas de consumo real recientes (en los últimos &lt;%X %&gt; meses):**
   un. **Sugerencia:** *Proporcione el consumo real en la región &lt;%REGION %&gt; para el mes de &lt;%DT %&gt;.*
   B. **Lógica:** QPL verificará el consumo real de los últimos tres meses y del mes actual. Si falta el consumo real de los últimos tres meses y del mes actual, se marca el problema.

2. **Faltan entradas de inventario recientes (en los últimos &lt;%X%&gt; meses):**
   un. **Sugerencia:** *Proporcione el recuento de existencias en la región &lt;%REGION %&gt; para el mes de &lt;%DT%&gt;. *
   b. **Lógica:** QPL verificará el stock de los últimos tres meses y del mes actual. Si faltan existencias de los últimos tres meses y del mes actual, se señala el problema.

3. **Faltan insumos de consumo real recientes para meses en brechas:**
   un. **Sugerencia:** *Proporcione el consumo real en la región &lt;%REGION %&gt; para el mes de &lt;%DT %&gt;.*
   B. **Lógica:**
     yo. QPL verificará los insumos de consumo real para el mes actual (considérelo como t) y para el mes que será el mes actual menos dos meses (considérelo como t-2), es decir, t y t-2 si ambos meses tienen consumo real y el mes actual menos un mes (considérelo como t-1), es decir, t-1 no tiene consumo real. Entonces, en este caso, se señala el problema.
     ii. QPL verificará los insumos de consumo real para el mes actual menos un mes (considere como t-1) y para el mes que será el mes actual menos tres meses (considere como t-3), es decir, t-1 y t-3 si ambos meses tienen consumo real y el mes actual menos dos meses (considere como t-2), es decir, t-2 no tienen consumo real. Entonces, en este caso, se señala el problema.

### C2. Calendario de adquisiciones

1. **Los envíos tienen fechas de recepción de más de &lt;%X%&gt; días en el pasado:**
   un. **Sugerencia:** *Verifique que se haya recibido el envío &lt;%SHIPMENT_ID %&gt; y actualice la fecha de recepción o el estado del envío.*
   B. **Lógica:** QPL verificará la fecha de recepción de todos los envíos y, si la fecha de recepción ya pasó y también cruzó el período de tiempo de reserva, entonces se marca el problema. Por ejemplo, el tiempo de reserva para este problema es de 14 días, por lo que si la fecha de recepción del envío más los días de reserva han pasado, el problema se marca para cada envío.

2. **El envío no se ha enviado durante más de &lt;%X%&gt; días desde la fecha prevista:**
   un. **Sugerencia:** *Según los plazos de entrega, el envío &lt;%SHIPMENT_ID%&gt; ya debería haberse enviado. Vuelva a verificar para asegurarse de que el estado o la fecha de recepción sean correctos.*
   B. **Lógica:** QPL verificará la fecha de envío de todos los envíos y, si la fecha de envío ya pasó y también cruzó el período de tiempo de reserva, se marca el problema. Por ejemplo, el tiempo de reserva para este problema es de 3 días. Por lo tanto, si la fecha de envío del envío más los días de reserva ya han pasado, el problema se marca para cada envío.

### C3. Planificación de suministros

1. **Sin consumo previsto &lt;%X %&gt; meses en el futuro:**
   un. **Sugerencia:** *Proporcione el consumo previsto en la región &lt;%REGION %&gt; para el mes de &lt;%DT %&gt;.*
   B. **Lógica:** QPL comprobará el consumo previsto para los próximos 18 meses. Si falta el consumo previsto para cualquier momento del mes, se marca el problema. El problema entra en estado de cumplimiento si y sólo si en todos los 18 meses se ha previsto el consumo.

2. **El pronóstico dinámico no se utiliza para grupos de productos ARV:**
   un. **Sugerencia:** *Consulte los datos de consumo en la región &lt;%REGION%&gt; durante el período &lt;%DT%&gt; ya que recomendamos realizar pronósticos con valores mensuales dinámicos, que muestren que se han tenido en cuenta factores como la escala del programa o la estacionalidad.*
   B. **Lógica:** QPL comprobará si la unidad de planificación del programa se encuentra en el grupo de productos ARV y luego QPL comprobará el consumo previsto para los 18 meses futuros. Si cuatro meses consecutivos dentro del lapso futuro de 18 meses tienen la misma cantidad de consumo previsto, se marca el problema.

3. **No se utiliza pronóstico dinámico para grupos de productos MALARIA:**
   un. **Sugerencia:** *Verifique los datos de consumo en la región &lt;%REGION %&gt; durante el período &lt;%DT%&gt; ya que recomendamos realizar pronósticos con valores mensuales dinámicos, que muestren que se han tenido en cuenta factores como la escala del programa o la estacionalidad.*
   B. **Lógica:** QPL comprobará si la unidad de planificación del programa pertenece al grupo de productos MALARIA y luego QPL comprobará el consumo previsto para los 18 meses futuros. Si cuatro meses consecutivos dentro del lapso futuro de 18 meses tienen la misma cantidad de consumo previsto, se marca el problema.

4. **El pronóstico dinámico no se utiliza para los grupos de productos VMMC:**
   un. **Sugerencia:** *Consulte los datos de consumo en la región &lt;%REGION%&gt; durante el período &lt;%DT%&gt; ya que recomendamos realizar pronósticos con valores mensuales dinámicos, que muestren que se han tenido en cuenta factores como la escala del programa o la estacionalidad.*
   B. **Lógica:** QPL comprobará si la unidad de planificación del programa pertenece al grupo de productos VMMC y luego QPL comprobará el consumo previsto para los 18 meses futuros. Si cuatro meses consecutivos dentro del lapso futuro de 18 meses tienen la misma cantidad de consumo previsto, se marca el problema.

5. **El plan de suministro no sigue los parámetros mínimos/máximos:**
   un. **Sugerencia:** *Reevaluar el plan de suministro para cumplir con los parámetros mínimos y máximos. Si hay exceso de existencias, considere retrasar o cancelar los envíos, revisar los vencimientos futuros o donar existencias. Si no hay suficiente stock, considere planificar y realizar pedidos, acelerar o aumentar la cantidad de envío.*
   B. **Lógica:** QPL comprobará si cada unidad de planificación tiene exceso o falta de existencias en algún momento durante los próximos 18 meses de acuerdo con los parámetros mínimos y de reorden definidos en los niveles de programa individuales. Luego, QAT contará la cantidad de meses en que la unidad de planificación tiene exceso de existencias y falta de existencias y la subdividirá en dos períodos de tiempo diferentes: aquellos meses dentro del plazo de entrega (1 a 6 meses) y aquellos dentro de la ventana de planificación (7 a 18 meses). El QPL también indicará la cantidad de envíos que se recibirán en los próximos 1 a 6 meses y en los próximos 7 a 18 meses.

6. **Agotamiento de existencias en los próximos 1 a 6 meses/Agotamiento de existencias en los próximos 7 a 18 meses:**
   un. **Sugerencia:** *Considere planificar y realizar pedidos, acelerar o aumentar la cantidad de envío. Comunicar los posibles desabastecimientos a las partes interesadas relevantes.*
   B. **Lógica:** QPL comprobará si cada unidad de planificación está agotada (cero MOS) en algún momento durante los próximos 18 meses. Luego, QAT contará la cantidad de meses en que la unidad de planificación está agotada y la subdividirá en dos períodos de tiempo diferentes: los meses dentro del plazo de entrega (1 a 6 meses) y los que se encuentran dentro del período de planificación (7 a 18 meses). El QPL también indicará la cantidad de envíos que se recibirán en los próximos 1 a 6 meses y en los próximos 7 a 18 meses.

### C4. Otros (problemas manuales)

1. Estas son preguntas o aclaraciones específicas ingresadas manualmente por el revisor del plan de suministro que QAT no marca automáticamente. La descripción del problema, la sugerencia y la criticidad las determina el revisor del plan de suministro. QAT no aplica ninguna lógica específica para este problema, ya que el revisor del plan de suministro debe agregarlo, actualizarlo y resolverlo manualmente.

## D. Módulo de planificación de suministros: otros informes QAT

### 1. WAPE (Error porcentual absoluto ponderado):
WAPE (error porcentual absoluto ponderado) se utiliza para calcular el error de pronóstico. Este cálculo se utiliza en los informes de errores de pronóstico, lo que ayuda a los propietarios de planes de suministro a revisar los errores de pronóstico para monitorear la solidez de su pronóstico. La fórmula WAPE utiliza los datos de los 3 a 12 meses anteriores, según la selección en el menú desplegable "Ventana de tiempo".

WAPE consiste en dividir la suma de diferencias absolutas por la suma de los valores reales para una ventana de tiempo particular. La ventana de tiempo puede ser 3,6,9 o 12.

**Fórmula:**
*WAPE = ((Abs(consumo real mes 1 - consumo previsto mes 1) + Abs(consumo real mes 2 - consumo previsto mes 2) + Abs(consumo real mes 3 - consumo previsto mes 3) + Abs(consumo real mes 4 - consumo previsto mes 4) + Abs(consumo real mes 5 - consumo previsto mes 5) + Abs(consumo real mes 6 - consumo previsto mes 6)) / (Suma de todo el consumo real en los últimos 6 meses))*
*Nota: La ventana de tiempo se considera de 6 meses*

### 2. Costo de envío:
Es el costo total requerido para recibir el pedido en el almacén.

**Fórmula:**
*Costo total del envío = (Costo del producto + Costo de flete) * tasa de conversión a USD*

### 3. Costo del inventario:
Este cálculo nos proporciona el costo del producto disponible.

**Fórmula:**
*Costo de Inventario = saldo final * precio de catálogo*

### 4. Stock promedio:

**Fórmula:**
*Stock promedio = suma (saldo final de ‘n’ meses) / n*
*Nota: “n” es el número de meses*

### 5. Turnos de inventario:
Es la relación entre el consumo y el stock medio. El usuario puede seleccionar ver la tabla de dos maneras: por país o por categoría de PU. Puede ser de selección múltiple para países o categoría de PU, cálculo de nivel más alto (agregación/promedio de cada PU bajo programa o de cada programa que contiene esa categoría de PU). Luego se calcularán los turnos para cada unidad de planificación bajo ese programa.

#### Turnos de inventario planificados (TI)

**A nivel de PU:**
El cálculo se realiza determinando los posibles meses de stock para cada mes durante 12 meses si las reglas de inventario funcionaron perfectamente considerando el MIN y el Intervalo de Reorden de la Unidad de Planificación.

Consumo = 1 MOS/mes; Consumo total durante el período = 12 MOS. El MOS promedio se calcula en función del MIN y el intervalo de reorden.

Por ejemplo:
1. Si el MIN es 3 y el reorden es 9 y el primer mes es un mes de reorden entonces:
   un. El MOS promedio durante 12 meses sería 7,25
   B. El giro de inventario planificado es el consumo total 12 dividido por los meses promedio de existencias calculados durante 12 meses. Así 12 / 7,25 = 1,7

| Intervalo de reorden | Mes 1 | Mes 2 | Mes 3 | Mes 4 | Mes 5 | Mes 6 | Mes 7 | Mes 8 | Mes 9 | Mes 10 | Mes 11 | Mes 12 | Meses totales |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **12** | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | **78** |
| **11** | 1 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | **67** |
| **10** | 2 | 1 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | **58** |
| **9** | 3 | 2 | 1 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | **51** |
| **8** | 4 | 3 | 2 | 1 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | **46** |
| **7** | 5 | 4 | 3 | 2 | 1 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | **43** |
| **6** | 6 | 5 | 4 | 3 | 2 | 1 | 6 | 5 | 4 | 3 | 2 | 1 | **42** |
| **5** | 2 | 1 | 5 | 4 | 3 | 2 | 1 | 5 | 4 | 3 | 2 | 1 | **33** |
| **4** | 4 | 3 | 2 | 1 | 4 | 3 | 2 | 1 | 4 | 3 | 2 | 1 | **30** |
| **3** | 3 | 2 | 1 | 3 | 2 | 1 | 3 | 2 | 1 | 3 | 2 | 1 | **24** |
| **2** | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | **18** |
| **1** | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **12** |

**A nivel de programa:**
*MODO (Rotación de inventario planificada de todas las unidades de planificación bajo un programa específico)*

**A nivel de país y/o categoría de PU:**
*MODO (Rotación de inventario planificada de todas las unidades de planificación en un país específico/categoría de PU)*

#### Giros de inventario reales (IT)

**A nivel de PU:**
*1. Consumo Total últimos 12 meses / Stock Promedio Disponible últimos 12 meses*

**A nivel de programa:**
1. La primera opción es buscar un modo.
2. Si el recuento del valor MODE &lt; 3 (configuración variable), QAT usa AVG, si el recuento del valor MODE es &gt; 3 (configuración variable), entonces:
3. La moda se determinará si el valor se presenta en al menos el 20% (configuración variable), del número total de unidades de planificación del programa. *(Ejemplo: el programa contiene 100 PU, 20 de ellas tienen turnos = 1,2 y el resto tienen giros diferentes; por lo que los turnos del programa serán 1,2)*
4. Si la condición anterior (20%) se encuentra varias veces en el conjunto de datos, QAT utilizará la inv. MÁS BAJA. enciende el modo del conjunto. *(Ejemplo: El programa contiene 100 PU; 60 PU tienen giros diferentes; 20 PU tienen giros inv = 1,2, otras 20 PU tienen giros inv. = 2,5; QAT mostrará 1,2 como giros inv. para ese programa)*
5. Si no se puede encontrar un modo definitivo según las reglas anteriores, entonces los giros de inventario a nivel de programa serán el promedio de todos los giros de inventario de PU bajo ese programa.

**A nivel de país y/o categoría de PU:**
1. La primera opción es buscar un modo.
2. Si el recuento del valor MODE &lt; 3 (configuración variable), QAT usa AVG, si el recuento del valor MODE es &gt; 3 (configuración variable), entonces:
3. La moda se determinará si el valor ocurre en al menos el 20% (configuración variable) del número total de unidades de planificación de ese país (o categoría de PU).
4. Regla: si la condición anterior se encuentra varias veces en el conjunto de datos, QAT utilizará la inv. MÁS BAJA. turns mode of the bunch *(e.g., Country contains 1000 PUs; 600 PUs have different turns; 200 PUs have inv turns = 1.6, another 200 PUs have inv. turns = 2.2; QAT will display 1.6 as the inv. turns for that Country/PU category)*.
5. Regla: Si no se puede encontrar un modo definitivo según las reglas anteriores, entonces los giros de inventario a nivel de categoría de país/PU serán el promedio de todos los giros de inventario de PU bajo ese país/categoría de PU.

*Nota: El consumo real precede al consumo previsto en el cálculo, si está disponible*

### 6. Plazo total de entrega del agente de adquisiciones:
Este es el tiempo total requerido para recibir un producto en el almacén desde la fecha en que se planificó el pedido. También depende del modo de envío (marítimo o aéreo). Este cálculo se utiliza para calcular la fecha de entrega prevista para que el usuario pueda pedir productos antes de que se agoten las existencias.

**Fórmula:**
*Tiempo de entrega total del agente de adquisiciones (por vía aérea) = Plazo de entrega planificado para enviar en meses + Plazo de entrega enviado para aprobar en meses + Plazo de entrega aprobado para enviar en meses + Plazo de entrega para enviar hasta llegar en meses (por aire) + Plazo de entrega para llegar a recibir en meses*
*Tiempo de entrega total del agente de adquisiciones (por mar) = Plazo de entrega planificado para enviar en meses + Plazo de entrega enviado para aprobar en meses + Plazo de entrega aprobado para enviar en meses + Plazo de entrega para enviar hasta llegar en meses (por mar) + Plazo de entrega para llegar a recibir en meses*

### 7. Informe de vencimientos:
This report calculates the expired quantity for each planning unit as well as the linked batch number to show dates of when the expiry occurred. También se incluye el coste total de caducidad de los productos que hayan caducado.

**Fórmula:**
*Costo total de vencimiento = Cantidad que vence * Precio unitario del producto del envío (si el lote no proviene del envío, se utiliza el precio de catálogo predeterminado)*

## E. Módulo de pronóstico: pronósticos de árboles

### 1. Nodo de agregación:
El valor del nodo de agregación para un mes se calcula como la suma de los valores de los nodos secundarios para ese mismo mes.

**Fórmula:**
*Valor del nodo por un mes = Suma (Valores de los nodos secundarios)*

### 2. Nodo numérico:
El valor del nodo numérico para un mes se define en el nodo.

**Fórmula:**
*Valor del nodo por un mes = Valor definido en el nodo*

Hay tres tipos de modelado/transferencia que se pueden aplicar:
* **a. Número lineal:**
  Si se aplica el modelado de números lineales, el valor de ese nodo aumenta o disminuye en una cantidad fija mensual.
  Si se aplica la transferencia de números lineales, el valor de ese nodo disminuye desde este nodo y la misma cantidad aumenta en el nodo transferido.
  * **Fórmula para modelar:** *Valor de un nodo para un mes = Valor definido en el nodo +/- Cantidad fija mensual*
  * **Fórmula de transferencia:**
    *Valor de la transferencia desde el nodo por un mes = Valor definido en el nodo - cantidad fija mensual*
    *Valor de transferencia al nodo por un mes = Valor definido en el nodo + cantidad fija mensual*
* **b. Porcentaje lineal:**
  Si se aplica el modelo de porcentaje lineal, entonces se aumenta o disminuye un porcentaje del mes inicial de cada mes.
  Si se aplica una transferencia de porcentaje lineal, entonces se reduce un porcentaje del mes inicial desde este nodo y se aumenta la misma cantidad en el nodo transferido para cada mes.
  * **Fórmula para modelar:** *Valor de un nodo para un mes = Valor definido en el nodo +/- Porcentaje del valor del mes inicial*
  * **Fórmula de transferencia:**
    *Valor de transferencia desde el nodo por un mes = Valor definido en el nodo - Porcentaje del valor del mes inicial*
    *Valor de transferencia al nodo por un mes = Valor definido en el nodo + Porcentaje del valor del mes inicial de transferencia desde el nodo*
* **c. Porcentaje exponencial:**
  Si se aplica el modelo de porcentaje exponencial, entonces se aumenta o disminuye un porcentaje del valor del mes anterior de cada mes.
  Si se aplica una transferencia de porcentaje exponencial, entonces un porcentaje del valor del mes anterior se reduce desde este nodo y la misma cantidad se incrementa en el nodo transferido para cada mes.
  * **Fórmula para modelar:** *Valor de un nodo para un mes = Valor definido en el nodo +/- Porcentaje del valor del mes anterior*
  * **Fórmula de transferencia:**
    *Valor de la transferencia desde el nodo para un mes = Valor definido en el nodo - Porcentaje del valor del mes anterior*
    *Valor de transferencia al nodo por un mes = Valor definido en el nodo + Porcentaje del valor del mes anterior*

### 3. Nodo de porcentaje:
El valor del nodo de porcentaje se calcula como porcentaje del valor del nodo principal.

**Fórmula:**
*Valor del nodo por un mes = (Valor definido en el nodo * Valor del Nodo padre / 100)*

Sólo hay un tipo de modelado/transferencia que se puede aplicar:
* **a. Lineal (puntos porcentuales):**
  Si se aplica el modelado lineal (puntos porcentuales), el valor se calcula como la suma del porcentaje del nodo y el valor porcentual lineal (puntos porcentuales) del nodo principal.
  Si se aplica la transferencia de números lineales, el valor porcentual de ese nodo disminuye desde este nodo y la misma cantidad aumenta en el nodo transferido.
  * **Fórmula para modelar:** *Valor de un nodo para un mes = (Valor definido en el nodo +/- Valor de puntos porcentuales lineales) * Valor del nodo del padre / 100*
  * **Fórmula de transferencia:**
    *Valor de la transferencia desde el nodo por un mes = (Valor definido en el nodo - Valor lineal en puntos porcentuales) * Valor del nodo del padre / 100*
    *Valor de transferencia al nodo por un mes = (Valor definido en el nodo + Valor lineal % puntos) *Valor del nodo del padre / 100*

### 4. Nodo de unidad de pronóstico:
El valor del nodo de porcentaje se calcula como porcentaje del valor del nodo principal en función de los parámetros de la unidad de pronóstico.

**Fórmula:**
*Valor del nodo por un mes = (Valor definido en el nodo * Valor del Nodo padre / 100)*

Sólo hay un tipo de modelado/transferencia que se puede aplicar:
* **a. Lineal (puntos porcentuales):**
  Si se aplica el modelado lineal (puntos porcentuales), el valor se calcula como la suma del porcentaje del nodo y el valor porcentual lineal (puntos porcentuales) del nodo principal.
  Si se aplica la transferencia de números lineales, el valor porcentual de ese nodo disminuye desde este nodo y la misma cantidad aumenta en el nodo transferido.
  * **Fórmula para modelar:** *Valor de un nodo para un mes = (Valor definido en el nodo +/- Valor de puntos porcentuales lineales) * Valor del nodo del padre / 100*
  * **Fórmula de transferencia:**
    *Valor de la transferencia desde el nodo por un mes = (Valor definido en el nodo - Valor lineal en puntos porcentuales) * Valor del nodo del padre / 100*
    *Valor de transferencia al nodo por un mes = (Valor definido en el nodo + Valor lineal % puntos) *Valor del nodo del padre / 100*

### 5. Nodo de la Unidad de Planificación:
El valor del nodo de porcentaje se calcula como porcentaje del valor del nodo principal según los parámetros de la unidad de planificación.

**Fórmula:**
*Valor del nodo por un mes = (Valor definido en el nodo * Valor del Nodo padre / 100)*

Sólo hay un tipo de modelado/transferencia que se puede aplicar:
* **a. Lineal (puntos porcentuales):**
  Si se aplica el modelado lineal (puntos porcentuales), el valor se calcula como la suma del porcentaje del nodo y el valor porcentual lineal (puntos porcentuales) del nodo principal.
  Si se aplica la transferencia de números lineales, el valor porcentual de ese nodo disminuye desde este nodo y la misma cantidad aumenta en el nodo transferido.
  * **Fórmula para modelar:** *Valor de un nodo para un mes = (Valor definido en el nodo +/- Valor de puntos porcentuales lineales) * Valor del nodo del padre / 100*
  * **Fórmula de transferencia:**
    *Valor de la transferencia desde el nodo por un mes = (Valor definido en el nodo - Valor lineal en puntos porcentuales) * Valor del nodo del padre / 100*
    *Valor de transferencia al nodo por un mes = (Valor definido en el nodo + Valor lineal % puntos) *Valor del nodo del padre / 100*

## F. Módulo de Previsión: Previsión de Consumo

### 1. Interpolar:
QAT interpola encontrando los valores más cercanos en cada lado (antes o después del espacio en blanco), calcula la línea recta entre ellos y usa esa fórmula de línea recta para calcular el valor de los espacios en blanco. Tenga en cuenta que QAT no interpolará para los meses en los que el consumo real sea cero. QAT solo interpolará si hay al menos un punto de datos antes y un punto de datos después de los valores en blanco.

Matemáticamente:
* Donde x representa meses e y representa el consumo real,
* Donde los valores de datos conocidos son *(x₀, y₀)* y *(x₁, y₁)*
* Donde los valores de datos desconocidos son *(x, y)*
* La fórmula para la línea interpolada es:
  *y = y₀ + (x - x₀) * (y₁ - y₀) / (x₁ - x₀)*

### 2. Tasa de desabastecimiento:
La tasa de desabastecimiento se calcula como porcentaje de la relación entre la tasa de desabastecimiento en días y el número de días en un mes.

**Fórmula:**
*Tasa de desabastecimiento = (Tasa de desabastecimiento (días) / Número de días en el mes) * 100*

### 3. Consumo Ajustado:
El consumo ajustado se calcula en función del consumo real, la tasa de informes, la tasa de desabastecimiento (días) y el número de días del mes utilizando la siguiente fórmula.

**Fórmula:**
Si el consumo real está vacío, entonces,
*Consumo Ajustado = ""*
De lo contrario,
*Consumo ajustado = (Consumo real / Tasa de informe / (1 - (Tasa de desabastecimiento (días) / No de días en el mes))) * 100*

### 4. Factor de conversión para entrada de datos y pantalla de ajuste:
* Si el consumo real está en unidades de pronóstico, entonces:
  *Factor de conversión = 1 / Factor de conversión de unidades de planificación*
* Si el Consumo Real está en Unidades de Planificación entonces:
  *Factor de conversión = 1*
* Si el consumo real está en otra unidad entonces:
  *Factor de conversión = 1 / Conversión a FU (ingresado por el usuario)*

### 5. Consumo Ajustado en términos de Unidad de Planificación:
El Consumo Ajustado en términos de unidad de planificación se calcula multiplicando el Consumo Ajustado por el Factor de Conversión.

**Fórmula:**
*Consumo Ajustado (Unidad de Planificación) = Consumo Ajustado * Factor de Conversión*

### 6. Error de pronóstico (%):
* **WAPE (Error porcentual absoluto ponderado):**
  WAPE divide la suma de las diferencias absolutas por la suma de los valores reales para una ventana de tiempo particular. La ventana de tiempo es de 6 meses.
  
  **Fórmula:**
  *WAPE = ((Abs(consumo real mes 1 - consumo previsto mes 1) + Abs(consumo real mes 2 - consumo previsto mes 2) + Abs(consumo real mes 3 - consumo previsto mes 3) + Abs(consumo real mes 4 - consumo previsto mes 4) + Abs(consumo real mes 5 - consumo previsto mes 5) + Abs(consumo real mes 6 - consumo previsto mes 6)) / (Suma de todo el consumo real en los últimos 6 meses))*
* **RMSE (error cuadrático medio):**
  RMSE se calcula como la raíz cuadrada de la relación de la suma de los cuadrados de la diferencia entre el pronóstico y el número real de observaciones.
  
  **Fórmula:**
  *RMSE = Raíz cuadrada [ Suma(Cuadrado(Pronóstico – Real)) / No. de observaciones ]*
* **MAPE (Error porcentual absoluto medio):**
  MAPE se calcula como una relación de 1 al número de observaciones multiplicada por la suma de la diferencia absoluta entre lo real y lo pronosticado y la multiplicación de lo real absoluto y 100.
  
  **Fórmula:**
  *MAPE = (1 / No de observaciones) * Suma(Absoluta(real – previsión) / Absoluta(real)) * 100*
* **MSE (Error cuadrático medio):**
  El MSE se calcula como la multiplicación de la proporción de 1 a no de observaciones y la suma de los cuadrados de la diferencia entre lo real y lo previsto.
  
  **Fórmula:**
  *MSE = (1 / No de observaciones) * Suma(Cuadrado(real – pronóstico))*
* **R cuadrado:**
  *R² = 1 – [regresión suma de cuadrados (SSR) / suma de cuadrados total (SST)]*. La suma al cuadrado de los residuos de la regresión es la suma de sus residuos al cuadrado, y la suma total de los cuadrados es la suma de la distancia entre los datos y la media, todo al cuadrado. Por “suma de cuadrados” nos referimos a la suma de las desviaciones al cuadrado entre los valores reales y la media (SST), o entre los valores predichos y la media (SSR). El valor R² es siempre un número entre 0 y 1. R² es una medida para ajustar una línea de regresión a una serie de observaciones históricas con valores más cercanos a 1 que indican una correspondencia más fuerte entre los valores reales y predichos (modelo de regresión). No es una medida de error y no debe usarse por sí sola para evaluar la idoneidad de una predicción, sino en combinación con otras métricas de error y el conocimiento del programa por parte del usuario.
  
  **Fórmula:**
  *R² = 1 - [SSR / SST]*

### 7. Importar desde el plan de suministro QAT:
* QAT permite a los usuarios importar datos reales de sus planes de suministro a una previsión de consumo.
  * Primero, un usuario seleccionará un programa de pronóstico y un rango de fechas para el consumo real importado.
    * *Nota: Se muestra un interruptor si no se van a importar todas las unidades de planificación no asignadas. Esto es útil si hay muchas unidades de planificación y solo importa unas pocas seleccionadas. Después de asignar las pocas unidades de planificación seleccionadas, haga clic en la opción "No importar todas las unidades de planificación no asignadas", que luego seleccionará automáticamente las unidades de planificación restantes que no se importarán.*
  * En segundo lugar, se seleccionará un programa de plan de suministro y una versión del plan de suministro. Esto es útil si un usuario desea cargar una versión específica del plan de suministro y no solo la más reciente.
    * *Nota: Un usuario puede seleccionar más de un programa para importar.*
  * En tercer lugar, después de seleccionar un programa de Plan de suministro, las Unidades de planificación del plan de suministro se mostrarán junto al menú desplegable Unidad de planificación de pronóstico.
    * *Nota: El menú desplegable Unidad de planificación de pronóstico permite al usuario seleccionar una Unidad de planificación de pronóstico específica o no importar esa Unidad de planificación de plan de suministro específica.*
  * Después de seleccionar siguiente, ahora se debe ingresar un % del Plan de Suministro.
    * *Se muestra una información sobre herramientas en la columna superior que indica “Porcentaje de la cantidad de consumo real mensual del programa Plan de suministro que se importará al Programa de pronóstico.*
    * *Esto es para permitir que se use un porcentaje específico si no se necesita el 100%.*

## G. Módulo de pronóstico: informes y resultados

### G1. Comparar y seleccionar

1. **Comparar con el pronóstico de consumo:**
   Comparar con el pronóstico de consumo se muestra solo cuando hay pronósticos de árbol y de consumo. Muestra los valores como:

   <ul style={{listStyleType: 'disc'}}><li>Higher than H% than the highest consumption forecast or</li><li>Lower than L% than the lowest consumption forecast</li></ul>
   
   **Fórmula:**
   *H% = (Suma (pronóstico de árbol seleccionado) - Suma (Pronóstico de consumo)) / Suma (Pronóstico de consumo)*
   *L% = (Suma (pronóstico de árbol seleccionado) - Suma (Pronóstico de consumo)) / Suma (Pronóstico de consumo)*

2. **Árboles de selección múltiple:**
   En la pantalla de comparar y seleccionar, los usuarios pueden seleccionar múltiples pronósticos de árboles como pronóstico final, que agregarán las cantidades de pronóstico mensuales. Los usuarios no pueden seleccionar múltiples pronósticos de consumo o una combinación de pronósticos de árbol y consumo como pronóstico final.
   *Nota: El error de pronóstico de extrapolación de consumo y el error de pronóstico de comparación y selección coincidirán en ambas pantallas incluso si el rango histórico de datos es limitado.*

### G2. Resumen de pronóstico

1. **Stock o Demanda Insatisfecha:**
   El stock o la demanda insatisfecha se calcula como la diferencia entre la suma del stock y los envíos existentes para una unidad de planificación y el consumo total previsto.
   
   **Fórmula:**
   *Stock o Demanda Insatisfecha = (Stock para una unidad de planificación + Envíos Existentes para una unidad de planificación) -(Consumo total previsto)*

2. **Stock deseado:**
   El stock deseado se calcula como la relación entre la multiplicación de los meses de stock para una unidad de planificación y el consumo total previsto por el número de meses en el período de pronóstico.
   
   **Fórmula:**
   *Stock deseado =((Meses de stock para una unidad de planificación) *(Consumo total previsto) /(Nº de meses en el período de pronóstico))*

3. **Excedente/brecha de adquisiciones**
   El excedente de adquisiciones se calcula como la diferencia entre el stock y el stock deseado.

   **Fórmula:**
   *Excedente de Adquisiciones = Stock o Demanda Insatisfecha - Stock deseado*

4. **Adquisiciones necesarias**
   Las adquisiciones necesarias se calculan como la multiplicación del excedente/brecha de adquisiciones y el precio unitario.

   **Fórmula:**
   *Adquisiciones necesarias = Excedente de adquisiciones * Precio unitario*

5. **Costo de flete**
   El costo del flete se calcula multiplicando la proporción del porcentaje de flete por 100 y la suma de las adquisiciones necesarias.

   **Fórmula:**
   *Costo de flete = Porcentaje de flete /100 * Adquisiciones totales necesarias*

6. **Costo total**
   El costo total se calcula como la suma de las adquisiciones necesarias y el costo del flete.

   **Fórmula:**
   *Costo total = Suma de las adquisiciones necesarias + Costo de flete*

## H. Módulo de planificación y previsión de suministros: carga de versiones

La siguiente sección detalla las diferentes condiciones que busca QAT al identificar conflictos en la carga de una versión (tanto para un programa de plan de suministro como para un programa de pronóstico).

El siguiente ejemplo se utilizará a lo largo de la explicación a continuación: Un usuario está intentando cargar la versión 8 local y la última versión disponible en el servidor es la versión 10. Una vez que se resuelvan los conflictos y el usuario confirme, la versión cargada será la versión 11. QAT compara las 3 versiones diferentes:
un. Servidor v8 (esta es la versión del servidor que el usuario descargó antes de realizar modificaciones)
B. Local v8 (esta es la versión que el usuario pretende cargar)
c. Servidor v10 (esta es la última versión del servidor)

Dependiendo del tipo de datos, QAT compara registros reales o compara fechas modificadas. Los registros reales no se pueden comparar para algunos datos porque son demasiado amplios y complejos.

<div style={{overflowX: 'auto'}}>

<table style={{ border: '1px solid #dddddd', borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', fontWeight: 'bold' }}>Actual records are compared</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', fontWeight: 'bold' }}>Modified dates are compared</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', verticalAlign: 'top' }}>
        <ul style={{listStyleType: 'disc', margin: 0, paddingLeft: '20px'}}>
          <li>
            <span>Supply Planning Module</span>
            <ul style={{listStyleType: 'circle', paddingLeft: '20px'}}>
              <li>Actual/Forecasted consumption, Inventory, Adjustment, Shipment records</li>
              <li>QAT Problem List</li>
              <li>ERP Shipment Linking*</li>
            </ul>
          </li>
          <li>
            <span>Forecasting Module</span>
            <ul style={{listStyleType: 'circle', paddingLeft: '20px'}}>
              <li>Planning Unit Settings</li>
              <li>Version Settings</li>
              <li>Selected Forecast</li>
            </ul>
          </li>
        </ul>
      </td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', verticalAlign: 'top' }}>
        <ul style={{listStyleType: 'disc', margin: 0, paddingLeft: '20px'}}>
          <li>
            <span>Forecasting Module</span>
            <ul style={{listStyleType: 'circle', paddingLeft: '20px'}}>
              <li>Actual consumption, adjustments, extrapolation</li>
              <li>Tree</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

</div>

* Para la vinculación de ERP, antes de la lógica siguiente, QAT primero verifica si el envío de ERP ya está vinculado a otro programa. Si está vinculado, QAT se resalta en rojo y no permite la carga.

Utilizando la lógica que se describe a continuación (probando cada condición en orden secuencial), QAT determina si los datos son
* <span style={{color: '#00b050', fontWeight: 'bold'}}>Recientemente agregado en la versión local (Local v8)</span> &larr; Condición 1
* <span style={{color: '#0070c0', fontWeight: 'bold'}}>Recientemente agregado en la versión del servidor (Server v10)</span> &larr; Condición 2
* **Sin cambios desde la versión anterior del servidor (Server v8)** &larr; Condición 3a
* <span style={{color: '#00b050', fontWeight: 'bold'}}>Actualizado en la versión local (Local v8) sin conflictos</span> &larr; Condición 3b
* <span style={{color: '#0070c0', fontWeight: 'bold'}}>Actualizado en la versión del servidor (Server v10) sin conflictos</span> &larr; Condición 3c
* **Or, a conflict between the <span style={{backgroundColor: '#ffff00'}}>local</span> and <span style={{backgroundColor: '#ffff00'}}>server</span> versions.** &larr; Condition 3d

### a. Condición 1: datos recién agregados en la versión local

Primero, QAT verifica cada punto de datos en la versión local (Local v8) para confirmar si se trata de datos recién agregados. Si es así, los datos se muestran como <span style={{color: '#00b050', fontWeight: 'bold'}}>verde</span> en la pantalla de carga.

* **a.** Servidor v8: el registro no existe
* <span style={{color: '#00b050', fontWeight: 'bold'}}>**b.** Local v8: el registro existe</span>
* **c.** Servidor v10: el registro no existe

A continuación se muestran algunos ejemplos de esta condición:
1. **Consumo (planificación de suministro):** Por ejemplo, hay un registro de consumo real en la v8 local para mayo de 2023, unidad de planificación A, unidad de informes alternativa B, región X. QAT verifica el servidor v10 y el servidor v8 para ver si existe un registro de consumo real en mayo de 2023, unidad de planificación A, unidad de informes alternativa B, región X. De lo contrario, <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 es la última.</span>
2. **Inventario (planificación de suministro):** Por ejemplo, hay un registro de inventario en la versión 8 local para mayo de 2023, unidad de planificación A, unidad de informes alternativa B, región X, fuente de datos Y. QAT verifica el servidor v10 y el servidor v8 para ver si existe un registro de inventario en mayo de 2023, unidad de planificación A, unidad de informes alternativa B, región X, fuente de datos Y. De lo contrario, <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 es la última.</span>
3. **Ajustes, envíos, QPL (planificación de suministro):** Dado que los ID solo se asignan después de cargar el plan de suministro, QAT verifica los ID de cada registro en la versión 8 local para ver si son "0". Los registros con el ID "0" se crearon recientemente en esta versión local, por lo que para estos registros, <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 es la última.</span> QAT no verifica las versiones del servidor.
4. **Árboles (pronóstico):** Dado que los ID solo se asignan después de cargar el pronóstico, QAT verifica los ID de cada árbol en la versión 8 local para ver si son "0". Los árboles con el ID "0" se crearon recientemente en esta versión local, por lo que para estos, <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 es la última.</span> QAT no verifica las versiones del servidor.
5. **Configuración de la unidad de planificación (pronóstico):** QAT verifica si esa ID de la unidad de planificación está presente en el servidor v8 y el servidor v10. Si el ID de la unidad de planificación no existe en ninguno de los dos, <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 es el más reciente.</span>
6. **Datos de consumo y extrapolación (pronóstico):** QAT verifica si los datos para esta unidad de planificación y región están presentes en el servidor v10 en función de la presencia de la fecha de modificación. Si los datos de la unidad de planificación y la región no están presentes en el servidor v10, <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 es el más reciente.</span>
7. **Pronóstico seleccionado (pronóstico):** QAT verifica si existe un pronóstico seleccionado para esta unidad de planificación y región en el servidor v10. Si no hay ninguna selección presente en el servidor v10, <span style={{color: '#00b050', fontWeight: 'bold'}}>local v8 es el más reciente.</span>

### b. Condición 2: datos recién agregados en la versión del servidor

Si la Condición 1 falla, QAT verifica la última versión del servidor (Servidor v10) para ver si esos datos se agregaron recientemente comparándolos con la versión local (Local v8). QAT no comprueba la versión anterior del servidor (servidor v8). Si los datos no están presentes en la versión local, eso significa que los datos se agregaron recientemente en la última versión del servidor y no hay conflicto con la versión local. Estos datos se agregarán a la versión recién cargada (Servidor v11) y los datos se muestran como <span style={{color: '#0070c0', fontWeight: 'bold'}}>azul</span> en la pantalla de carga.

* **a.** Servidor v8: el registro no existe
* **b.** Local v8: el registro no existe
* <span style={{color: '#0070c0', fontWeight: 'bold'}}>**c.** Servidor v10: el registro existe</span>

A continuación se muestran algunos ejemplos de esta condición:
1. **Inventario de consumo, ajuste, envío, QPL (planificación de suministro):** Por ejemplo, hay un registro de consumo real con ID único #A en el servidor v10. QAT comprueba si el ID único #A también está presente en la versión local v8. Si el ID único no está presente en la versión local, <span style={{color: '#0070c0', fontWeight: 'bold'}}>el servidor v10 es el más reciente.</span>
2. **Árboles:** Por ejemplo, hay un árbol con ID único #B en el servidor v10. QAT comprueba si el ID único #B también está presente en la versión local v8. Si el ID único no está presente en la versión local, <span style={{color: '#0070c0', fontWeight: 'bold'}}>el servidor v10 es el más reciente.</span>
3. **Configuración de la unidad de planificación (pronóstico):** Por ejemplo, hay una unidad de planificación con ID de unidad de planificación n.º C en el servidor v10. QAT comprueba si la unidad de planificación #C también está presente en la versión local v8. Si el ID de la unidad de planificación no está presente en la versión local, <span style={{color: '#0070c0', fontWeight: 'bold'}}>el servidor v10 es el más reciente.</span>
4. **Datos de consumo y extrapolación (pronóstico):** Después de que QAT encuentra datos para una unidad de planificación y un servidor de región v10, QAT busca la misma unidad de planificación y región en v8 local para buscar una fecha de modificación. Si la fecha de modificación no existe en la versión 8 local, <span style={{color: '#0070c0', fontWeight: 'bold'}}>el servidor v10 es el más reciente.</span>
5. **Pronóstico seleccionado (pronóstico):** Después de que QAT encuentra datos para pronósticos seleccionados para una unidad de planificación y región en particular en el servidor v10, QAT busca la misma unidad de planificación y región en v8 local busca un pronóstico seleccionado. Si el pronóstico seleccionado no existe en la versión 8 local, <span style={{color: '#0070c0', fontWeight: 'bold'}}>el servidor v10 es el más reciente.</span>

### c. Condición 3a: el servidor local y el más reciente son iguales

Si las condiciones anteriores fallan, QAT verifica cada punto de datos en la versión local (Local v8) para ver si son los mismos que la última versión del servidor (v10). De ser así, los datos se muestran sin resaltar en la pantalla de carga.

* **a.** servidor v8 – El registro es X
* **b.** v8 local – El registro es X
* **c.** Servidor más reciente v10: el registro es X

A continuación se muestran algunos ejemplos de esta condición:
1. **Consumo, Inventario, Ajuste, Envíos, QPL, configuración de versión, configuración de unidad de planificación y pronósticos seleccionados:** QAT compara cada registro en la versión local (v8) con las últimas versiones del servidor (v10). Por ejemplo, para el registro de consumo real del mes 22 de junio, QAT verifica cada campo (ARU, fuente de datos, cantidad, días sin existencias, etc.) para ver si la versión local (v8) y la última versión del servidor (v10) son las mismas. Si son iguales, entonces no se han realizado cambios desde el servidor v8 o se actualizaron para que tengan el mismo valor.
2. **Consumo (pronóstico) y árboles:** QAT compara la última fecha de modificación de cada registro en la versión local (v8) con la última fecha de modificación de la última versión del servidor (v10). Si son iguales, entonces no se han realizado cambios desde el servidor v8.

### d. Condición 3b: Cambios sólo en la versión local

Si las condiciones anteriores fallan, entonces QAT se compara para ver si la versión anterior del servidor (Servidor v8) y la última versión del servidor (servidor v10) son las mismas. Si es así, QAT infiere que se cambió la versión local (v8 local) y los datos se muestran como <span style={{color: '#00b050', fontWeight: 'bold'}}>verde</span> en la pantalla de carga.

* **a.** servidor v8: la fuente de datos es LMIS Reports
* <span style={{color: '#00b050', fontWeight: 'bold'}}>**b.** v8 local: la fuente de datos son Informes de almacén</span>
* **c.** Servidor más reciente v10: la fuente de datos es LMIS Reports

A continuación se muestran algunos ejemplos de esta condición:
1. **Consumo, inventario, ajuste, envíos, QPL, configuración de versión, configuración de unidad de planificación y pronósticos seleccionados:** Por ejemplo, un registro de consumo real para el 22 de junio tiene "Informes de almacén" como fuente de datos en v8 local. Si el campo de origen de datos para las versiones del servidor anterior (v8) y más reciente (v10) son "Informes LMIS", esto indica que los datos se modificaron en la versión local, por lo que <span style={{color: '#00b050', fontWeight: 'bold'}}>la v8 local es la más reciente.</span>
2. **Consumo (pronóstico) y árboles:** Si las fechas de última modificación de las versiones anterior (v8) y última (v10) del servidor son las mismas, esto indica que los datos se modificaron en la versión local, por lo que <span style={{color: '#00b050', fontWeight: 'bold'}}>la v8 local es la más reciente.</span>
   * **a.** Servidor v8: la fecha de última modificación es el 15 de septiembre de 2023 a las 12:00:00
   * <span style={{color: '#00b050', fontWeight: 'bold'}}>**b.** Local v8: la última fecha de modificación es el 20 de septiembre de 2023 a las 15:15:00</span>
   * **c.** Servidor v10: la fecha de última modificación es el 15 de septiembre de 2023 a las 12:00:00

### e. Condición 3c: cambios solo en la última versión del servidor

Si las condiciones anteriores fallan, entonces QAT se compara para ver si la versión anterior del servidor (Servidor v8) y la versión local (local v8) son las mismas. Si es así, QAT infiere que se cambió la última versión del servidor (servidor v10) y los datos se muestran como <span style={{color: '#0070c0', fontWeight: 'bold'}}>azul</span> en la pantalla de carga.

* **a.** Servidor v8: la fuente de datos es LMIS Reports
* **b.** Local v8: la fuente de datos es LMIS Reports
* <span style={{color: '#0070c0', fontWeight: 'bold'}}>**c.** Servidor v10: la fuente de datos es Warehouse Reports</span>

A continuación se muestran algunos ejemplos de esta condición:
1. **Consumo, inventario, ajuste, envíos, QPL, configuración de versión, configuración de unidad de planificación y pronósticos seleccionados:** Por ejemplo, un registro de consumo real para el 22 de junio. Si el valor de la fuente de datos en el servidor v8 y en el local v8 es el mismo, esto indica que los datos se modificaron en la última versión del servidor (v10), por lo que <span style={{color: '#0070c0', fontWeight: 'bold'}}>el servidor v10 es el más reciente.</span>
2. **Consumo (pronóstico) y árboles:** Si las fechas de última modificación de la versión anterior del servidor (v8) y la versión local (v8) son las mismas, esto indica que los datos se modificaron en la última versión del servidor (v10), por lo que <span style={{color: '#0070c0', fontWeight: 'bold'}}>el servidor v10 es el más reciente.</span>
   * **a.** Servidor v8: la fecha de última modificación es el 15 de septiembre de 2023 a las 12:00:00
   * **b.** Local v8: la última fecha de modificación es el 15 de septiembre de 2023 a las 12:00:00
   * <span style={{color: '#0070c0', fontWeight: 'bold'}}>**c.** Servidor v10: la fecha de última modificación es el 20 de septiembre de 2023 a las 15:30:00</span>

###f. Condición 3d: Cambios en la versión local y en la última versión del servidor (mismo parámetro)

Si las condiciones anteriores fallan, esto significa que las 3 versiones no coinciden y hay un conflicto. Si es así, los datos se resaltan <span style={{backgroundColor: '#ffff00'}}>amarillo</span> en la pantalla de carga.

* **a.** servidor v8: la fuente de datos es LMIS Reports
* <span style={{backgroundColor: '#ffff00'}}>**b.** v8 local: la fuente de datos es SDP Reports</span>
* <span style={{backgroundColor: '#ffff00'}}>**c.** servidor más reciente v10: la fuente de datos es Warehouse Reports</span>

A continuación se muestran algunos ejemplos de esta condición:
1. **Consumo, Inventario, Ajuste, Envíos, QPL, configuración de versión, configuración de unidad de planificación y pronósticos seleccionados:** Para un registro de consumo real para el mes del 22 de junio, si el valor de la fuente de datos no coincide con ninguna de las versiones, esto indica que los datos se modifican tanto en la versión local (v8) como en la última versión del servidor (v10), por lo que QAT resalta la fila en <span style={{backgroundColor: '#ffff00'}}>amarillo</span> para indicar un conflicto que el usuario debe resolver.
2. **Consumo (pronóstico) y árboles:** Si la última fecha de modificación no coincide para ninguna de las versiones, esto indica que los datos se modifican tanto en la versión local (v8) como en la última versión del servidor (v10), por lo que QAT resalta la fila en <span style={{backgroundColor: '#ffff00'}}>amarillo</span> para indicar un conflicto que el usuario debe resolver.
   * **a.** Servidor v8: la fecha de última modificación es el 15 de septiembre de 2023 a las 12:00:00
   * <span style={{backgroundColor: '#ffff00'}}>**b.** Local v8: la última fecha de modificación es el 16 de septiembre de 2023 a las 13:00:00</span>
   * <span style={{backgroundColor: '#ffff00'}}>**c.** Servidor v10: la fecha de última modificación es el 20 de septiembre de 2023 a las 15:30:00</span>
   * **a.** Servidor v8: la fecha de última modificación es el 28 de septiembre de 2023, 12:00:00
   * <span style={{backgroundColor: '#ffff00'}}>**b.** Local v8: la última fecha de modificación es el 16 de septiembre de 2023 a las 13:00:00</span>
   * <span style={{backgroundColor: '#ffff00'}}>**c.** servidor más reciente v10: falta el árbol</span>

### g. Condición 4: Cambios en la versión local y en la última versión del servidor (parámetros diferentes)

Después de verificar todas las condiciones, QAT verifica si hay registros que tengan una combinación de 3b y 3c, pero para campos diferentes. Si es así, los datos se resaltan <span style={{backgroundColor: '#ffff00'}}>amarillo</span> en la pantalla de carga.

1. **Consumo, Inventario, Ajuste, Envíos, QPL, configuración de versión, configuración de unidad de planificación y pronósticos seleccionados:** Para un registro de consumo real para el mes del 22 de junio, la fuente de datos se actualiza en la versión local (Condición 3b) y la cantidad se cambia en la versión del servidor (condición 3c). En este caso, QAT no sabe qué versión usar, por lo que QAT resalta la fila en <span style={{backgroundColor: '#ffff00'}}>amarillo</span> para indicar un conflicto que el usuario debe resolver.

<div style={{overflowX: 'auto'}}>

<table style={{ border: '1px solid #dddddd', borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', fontWeight: 'bold' }}>Version</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', fontWeight: 'bold' }}>Data Source (Condition 3b)</th>
      <th style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>Quantity (Condition 3c)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>v8 server</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>LMIS Reports</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center' }}>50</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', backgroundColor: '#ffff00', fontWeight: 'bold', color: '#00b050' }}>v8 local</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', backgroundColor: '#ffff00', fontWeight: 'bold', color: '#00b050' }}>Warehouse Reports</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center' }}>50</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #dddddd', padding: '8px', backgroundColor: '#ffff00', fontWeight: 'bold', color: '#0070c0' }}>v10 latest server</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>LMIS Reports</td>
      <td style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'center', backgroundColor: '#ffff00', fontWeight: 'bold', color: '#0070c0' }}>55</td>
    </tr>
  </tbody>
</table>

</div>

2. **Consumo (Pronóstico) y Árboles:** Esto no aplica ya que solo se compara la fecha de modificación para estos dos tipos de datos.