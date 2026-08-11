---
id: supply-planning-module-reports
title: "6. Supply Planning Module: Reports"
sidebar_label: "   6. Supply Plan Reports"
sidebar_position: 7
---
# Sección 6. Módulo de Planificación de Suministros: Informes

Los informes QAT permiten al usuario extraer y ver sus datos de planificación de suministro en gráficos, tablas y otros formatos visuales. El usuario también podrá navegar, ordenar, filtrar y ver los datos para necesidades específicas. Los informes QAT producen visualizaciones y muestran datos de una manera que puede respaldar la toma de decisiones.

Los informes se dividen en **Informes globales** e **Informes específicos del programa**. Los informes específicos del programa se muestran tanto en línea como fuera de línea. Sin embargo, los informes globales se muestran solo en modo en línea y solo están disponibles para los usuarios globales, como el administrador del reino y el administrador de la aplicación.

**Nota:** Todos los informes QAT se pueden exportar a un archivo CSV de Excel y a formato PDF. Además, todos los gráficos permiten al usuario pasar el cursor sobre un objeto visual para obtener información sobre herramientas con más información.

## A. **Lista de problemas QAT**

**Propósito:** Una revisión del plan de suministro integrada en QAT que permite un control de calidad para identificar fácilmente datos/problemas problemáticos y corregirlos antes de cargar un plan de suministro al servidor como versión "borrador" o "final".

- **Accesible para:** Administradores de reino, administradores de programas y usuarios de programas
- **Navegación:** Informes → Lista de problemas QAT

![Figure 120: QAT Problem List](/img/media/image198.png)
*Figura 120: Lista de problemas QAT*

**Nota:** Solo el problema asociado con los programas que ha descargado el usuario en su máquina local aparecerá en la Lista de problemas de QAT. Para obtener detalles sobre cómo descargar programas y versiones específicos, consulte la sección [Descargar programa] (./06-managing-programs-and-versions.md#b-downloaddelete) del Manual del usuario.

### A1. **Conceptos básicos de la lista de problemas QAT**
Cada problema marcado en la lista de problemas QAT tendrá una línea separada. Esto tendrá la unidad de planificación asociada, una descripción del problema, una sugerencia sobre cómo solucionar el problema, el estado del problema, notas del usuario, una casilla de verificación para identificar si el problema ha sido revisado, las últimas notas del revisor (según corresponda), la fecha de la última revisión y la criticidad.

![Figure 121: Aspects QAT Problem List](/img/media/image199.png)
*Figura 121: Aspectos Lista de Problemas QAT*

Los problemas QAT se pueden subdividir en cuatro categorías principales: calidad de datos, cronograma de adquisiciones, planificación de suministros y otros. También se les asignan diferentes niveles de criticidad: Bajo (amarillo), Medio (naranja) y Alto (rojo). La criticidad informa a los usuarios en qué medida un problema afecta la calidad del plan de suministro. Sin embargo, independientemente de su importancia, todos los problemas deben estar "En cumplimiento" o "Abordados" en la Lista de problemas QAT para poder cargarlos como una versión final. Hay cinco estados principales asociados con los problemas individuales en la Lista de problemas QAT:

1. **En cumplimiento**: el problema se cerró mediante la entrada de datos por parte del usuario. El estado se cambiará automáticamente y no se requieren notas.

   Ejemplo: *A una unidad de planificación le falta el consumo real en los últimos 3 meses. Un usuario ingresa datos de consumo real de los últimos 3 meses. QAT marca automáticamente esto como "cumplimiento".*
2. **Resuelto**: el revisor marcó manualmente el problema como "resuelto". El revisor utiliza este estado si es poco probable que este problema se corrija mediante la entrada de datos y tampoco requiere más notas en el futuro. Sólo un revisor puede marcar un problema como "resuelto".

   Ejemplo: *Se marca una unidad de planificación por no seguir la previsión dinámica. El usuario ingresa una nota de que esta unidad de planificación no sigue pronósticos dinámicos ya que no es un producto estacional. El revisor marca esto como resuelto porque lo más probable es que la explicación no cambie en el futuro.*
3. **Abordado**: el revisor o el usuario marcaron manualmente el problema como "abordado". El usuario aplica este estado cuando no puede resolver el problema mediante la entrada de datos. Este estado debe ir acompañado de una nota. El revisor utiliza este estado si este problema no se puede resolver en este período de revisión, pero se resolverá en el futuro, probablemente en algunos períodos, en lugar de antes de la siguiente revisión.

Ejemplo: *Una unidad de planificación que se está eliminando solo tiene 8 meses de consumo previsto en el futuro en lugar de 18. Esto es aceptable ya que es una unidad de planificación que se está eliminando gradualmente, pero el usuario aún deberá desactivar la unidad de planificación una vez que esté completamente eliminada, razón por la cual el problema se marca como "abordado" en lugar de "resuelto".*
4. **Abierto**: QAT marcó automáticamente este problema o el revisor lo marcó manualmente como "Abierto". El revisor podría utilizar este estado al rechazar un plan de suministro para indicar que las notas no se aceptan.

   Ejemplo: *Un usuario tiene una unidad de planificación a la que le faltan datos de consumo real en los últimos 3 meses. QAT lo marcará automáticamente como "Abierto". Si el problema se "solucionó" cuando se cargó y aprobó, el problema volverá al estado "Abierto" para el próximo envío.*
5. **Revisado**: el problema ha sido revisado por el revisor del plan de suministro. Este campo solo lo puede editar el revisor del plan de suministro.

### A2. **Cerrar y abordar problemas**

1. **Cerrar un problema mediante la entrada de datos:** para cambiar un problema "Abierto" a uno que esté "En cumplimiento", el usuario deberá completar la sugerencia proporcionada en la columna "Sugerencia" para el problema específico. Por ejemplo, la sugerencia puede ser “proporcionar el consumo real” para meses específicos. Por tanto, el usuario deberá:

   ![Figure 122: Closing a Problem Example](/img/media/image200.png)
   *Figura 122: Ejemplo de cierre de un problema*

   <ol style={{listStyleType: 'lower-alpha'}}>
     <li>Navigate to the Consumption Data Entry screen by either clicking directly on the Problem (which will open a new QAT window) or by clicking on Supply Plan Data → Consumption Data.</li>
     <li>From the consumption data entry screen, the user will add actual consumption for the requested months. For instructions on how to add consumption, please refer to <a href="./07-supply-planning-module-program-data.md#consumption-data">Consumption Data</a>.</li>
     <li>Navigate back to the QAT Problem List and click Recalculate to refresh the QAT Problem List to include the most recent addition of actual consumption data. The previously flagged problem should now be “In-compliance” and no longer be flagged by the QAT Problem List.</li>
   </ol>

   ![Figure 123: QAT Problem List Recalculate/Refresh](/img/media/image201.png)
   *Figura 123: Recalcular/Actualizar la lista de problemas de QAT*

2. **Abordar un problema con un comentario:** Si un problema que se ha marcado en la Lista de problemas de QAT no se puede solucionar y convertirlo en "Cumplimiento" mediante la entrada de datos como se recomienda en la columna "Sugerencia", un usuario puede proporcionar un comentario y cambiar manualmente el estado a "Abordado". Por ejemplo, una unidad de planificación puede tener exceso o falta de existencias y se presenta la sugerencia de "reevaluar el plan de suministro para cumplir con los parámetros mínimos y máximos". Si un usuario no puede solucionar este problema mediante la entrada de datos, deberá solucionar el problema:
   <ol style={{listStyleType: 'lower-alpha'}}>
     <li>Double-click on the Problem Status dropdown for that problem and choose "Addressed." Users must provide an explanatory note in the Notes column for all problems marked as "Addressed."</li>
   </ol>

   ![Figure 124: Addressing a Problem & Adding a Note](/img/media/image202.png)
   *Figura 124: Solucionar un problema y agregar una nota*

   **Nota:** el usuario también puede ver en la pantalla "Detalles de la transacción del problema" haciendo clic derecho en el Problema. Esta área mostrará al usuario notas anteriores, revisores, fechas revisadas, etc.

   ![Figure 125: Problem Transaction Right Click](/img/media/image203.png)
   *Figura 125: Clic derecho en transacción problemática*

   ![Figure 126: Problem Transaction Details](/img/media/image204.png)
   *Figura 126: Detalles de la transacción problemática*

   <ol style={{listStyleType: 'lower-alpha'}} start="2">
     <li>Click "Update." The QAT Problem List will now include the most recent addition of explanatory notes and the status.</li>
   </ol>

### A3. **Lista de problemas QAT: explicación de los problemas**

- **Faltan datos de consumo real recientes (en los últimos 3 meses)**
  Si a una unidad de planificación le faltan entradas de datos de consumo real recientes dentro de los últimos tres meses, se marcará en la Lista de problemas QAT. Si se completan las entradas para cualquiera de estos últimos tres meses, ya sea un mes o los tres meses, el sistema no señalará el problema.

- **Cualquier brecha en los últimos 6 meses (consumo real)**
  QAT verifica si a una unidad de planificación le faltan uno o varios meses de entradas de consumo real recientes entre dos entradas de consumo real en el rango de 6 meses especificado. Este problema busca brechas accidentales en los insumos de consumo reales. Si hay alguna brecha en los datos de consumo real en los últimos 6 meses, la Lista de problemas QAT lo marcará como un problema. Por ejemplo, un usuario ingresa el consumo real para septiembre de 2022, diciembre de 2022 y enero de 2023. Esto será marcado por la lista de problemas QAT porque faltan datos de consumo real para octubre de 2022 y noviembre de 2022.

- **Faltan entradas de inventario recientes (en los últimos 3 meses)**
  Si a una unidad de planificación le faltan entradas de datos de inventario reales recientes dentro de los últimos tres meses, se marcará en la Lista de problemas QAT. Si se completan las entradas para cualquiera de estos últimos tres meses, ya sea un mes o los tres meses, el sistema no señalará el problema.

- **El plan de suministro carece de consumo previsto para los próximos 18 meses**
  Si a una unidad de planificación le faltan los insumos de consumo previstos para uno o más meses durante un período de 18 meses a partir del mes actual, QAT lo marcará como un problema. QAT comprobará si hay lagunas para garantizar que todos los próximos 18 meses tengan los valores de consumo previstos.

  **Nota:** *Si hay una unidad de planificación que se está eliminando gradualmente, se recomienda que el usuario ponga cero como consumo previsto, hasta que se elimine por completo, momento en el cual será necesario desactivar la unidad de planificación.*

- **Envíos con fechas de recepción anteriores**
  QAT verificará las fechas de recepción de todos los envíos para ver si alguno pertenece al pasado según la fecha actual. Si la fecha de recepción de un envío ya pasó, se marcará en la Lista de problemas QAT. Por ejemplo, hay una unidad de planificación con una fecha de recepción del 31 de diciembre<sup>st</sup> de 2022. Como esta fecha ya pasó, QAT la marcará y el usuario deberá cambiar el estado del envío a "Recibido" o cambiar la fecha de recepción a una futura.

  **Nota:** *hay un tiempo de reserva de catorce días para que QAT reconozca que la fecha de recepción del envío ya pasó y para que se marque el problema.*

- **Envíos que deberían haberse enviado antes de la fecha prevista**
  QAT comprobará las fechas estimadas de envío, que se calculan en función de los plazos de entrega predefinidos del Programa, para ver si hay algún envío con una fecha estimada de "Enviado" en el pasado. Si la fecha estimada de envío del envío ya pasó, se marcará en la Lista de problemas QAT. Por ejemplo, hay una unidad de planificación con una fecha de envío objetivo del 15 de enero<sup></sup> de 2023. Como esta fecha ya pasó, QAT la marcará y el usuario deberá cambiar el estado del envío a "Enviado" o cambiar la fecha de recepción a una más futura. Cambiar la fecha de recepción a una fecha futura hará que QAT vuelva a calcular automáticamente las fechas de envío previstas. Si no es posible cambiar el estado o la fecha de recepción, el usuario puede "abordar" el problema (consulte [Cerrar y abordar problemas](#a2-cerrar-y-abordar-problemas)).

  **Nota:** *Hay un tiempo de reserva de catorce días para que QAT reconozca que la fecha de envío del envío ya pasó y para que se marque el problema.*

- **No se utiliza pronóstico dinámico (para grupos de productos Malaria, ARV, VMMC)**
  Para cualquier producto que pertenezca a las siguientes categorías de trazadores: Malaria, ARV o VMMC, QAT verificará el pronóstico dinámico. GHSC-PSM fomenta la previsión con valores mensuales dinámicos, para mostrar que se han tenido en cuenta factores como la estacionalidad, la ampliación del programa o las campañas. Si una unidad de planificación de uno de estos tres grupos de productos tiene cuatro meses consecutivos con consumo estático, se marcará en la Lista de problemas QAT.

- **El plan de suministro no sigue los parámetros mínimos/máximos**
  Si una unidad de planificación tiene exceso de existencias, falta de existencias o desabastecimiento en cualquier momento durante los próximos 18 meses, se marcará en la Lista de problemas QAT. QAT contará la cantidad de meses en los que la unidad de planificación tiene exceso y falta de existencias, subdividiéndola en dos períodos de tiempo diferentes: aquellos meses dentro del plazo de entrega (1 a 6 meses) y aquellos dentro del período de planificación (7 a 18 meses). La lista de problemas QAT también indicará la cantidad de envíos que se recibirán en los próximos 1 a 6 meses y en los próximos 7 a 18 meses. Los desabastecimientos se marcarán como un problema separado en la Lista de problemas QAT. QAT indicará directamente qué meses están agotados en los períodos de tiempo subdivididos de 1 a 6 meses y de 7 a 18 meses. La lista de problemas QAT también indicará la cantidad de envíos que se recibirán en los próximos 1 a 6 meses y en los próximos 7 a 18 meses.

**Plan por MOS:** El exceso de existencias se define por MOS &gt; MOS máximo. La falta de existencias se define por MOS &lt; MOS mínimo. Consulte a continuación un ejemplo de un problema y el gráfico del plan de suministro adjunto:

  <div style={{border: '1.5px solid #000', padding: '15px', margin: '20px auto', maxWidth: '500px', backgroundColor: '#ffffff', textAlign: 'center', color: '#000'}}>
    <p style={{fontWeight: 'bold', fontSize: '1.15em', margin: '0 0 10px 0'}}>Flagged in Feb 2021</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>In the next 1-6 months (Mar 21 - Aug 21), inventory is...</p>
    <p style={{fontWeight: 'bold', fontStyle: 'italic', margin: '0 0 5px 0'}}>understocked for 2 month(s)</p>
    <p style={{fontWeight: 'bold', fontStyle: 'italic', margin: '0 0 10px 0'}}>overstocked for 1 month(s)</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>In the next 7-18 months (Sep 21 - Aug 22), inventory is...</p>
    <p style={{fontWeight: 'bold', fontStyle: 'italic', margin: '0 0 5px 0'}}>understocked for 0 month(s)</p>
    <p style={{fontWeight: 'bold', fontStyle: 'italic', margin: '0 0 15px 0'}}>overstocked for 3 month(s)</p>
    <br/>
    <p style={{margin: '0', fontStyle: 'italic'}}><b>Note:</b> There are 2 shipment(s) in the next 1-6 months, and<br/>there are 3 shipment(s) in the next 7-18 months.</p>
  </div>

  ![Figure 127: Supply Plan does not follow min/max MOS parameter example](/img/media/image205.png)
  *Figura 127: El plan de suministro no sigue el ejemplo del parámetro MOS mínimo/máximo*

  **Nota:** *Si el valor de MOS para un mes determinado es “N/A”, entonces todos esos casos se excluyen al calcular los problemas de exceso de existencias, falta de existencias o desabastecimiento.*

  **Ejemplo de plan por cantidad:** El exceso de existencias se define por la cantidad del saldo final &gt; Cantidad máxima. El faltante de existencias se define por la cantidad mínima del saldo final &lt;. Tenga en cuenta que QAT solo marcará el exceso de existencias si este excede el tiempo de entrega consecutivo (por ejemplo, si el tiempo de entrega es de 2 meses, entonces QAT marcará si hay un exceso de existencias durante más de 2 meses seguidos, pero no marcará el problema si el exceso de existencias ocurre cada dos meses). Consulte a continuación un ejemplo de un problema y el gráfico del plan de suministro adjunto:

  <div style={{border: '1.5px solid #000', padding: '15px', margin: '20px auto', maxWidth: '550px', backgroundColor: '#ffffff', textAlign: 'center', color: '#000'}}>
    <p style={{fontWeight: 'bold', fontSize: '1.15em', margin: '0 0 10px 0'}}>Flagged in Feb 2021 (Distribution lead time is 1 month)</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>In the next 1-6 months (Mar-23 to Aug-23), inventory is...</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>* over the max stock qty + distribution lead time for 1 month(s)</p>
    <p style={{fontStyle: 'italic', margin: '0 0 15px 0'}}>* under the min stock qty for 0 month(s)</p>
    <br/>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>In the next 7-18 months (Sep-23 to Aug-24), inventory is...</p>
    <p style={{fontStyle: 'italic', margin: '0 0 5px 0'}}>* over the max stock qty + distribution lead time for 6 month(s)</p>
    <p style={{fontStyle: 'italic', margin: '0 0 0 0'}}>* under the min stock qty for 0 month(s)</p>
  </div>

  ![Figure 128: Supply Plan does not follow min/max quantity parameter example](/img/media/image206.png)
  *Figura 128: El plan de suministro no sigue el ejemplo del parámetro de cantidad mínima/máxima*

- **Otro – Manual**
  Estas son preguntas o aclaraciones específicas ingresadas manualmente por el revisor del plan de suministro que QAT no marca automáticamente. Estos problemas podrían ser elementos que el revisor del plan de suministro desea abordar ese trimestre antes de finalizar o un recordatorio para la próxima presentación trimestral. La descripción del problema, la sugerencia y la criticidad las determina el revisor del plan de suministro.

## B. Catálogo de programas

**Propósito:** ver una lista estandarizada de todas las unidades de planificación y unidades de pronóstico en un programa QAT y sus atributos correspondientes.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas
- **Navegación:** Informes ➔ Catálogo de programas
- **Notas:** Un usuario puede seleccionar todas las categorías de unidades de planificación y categorías de seguimiento, o puede elegir una categoría específica para ver. Si un usuario desea agregar una unidad de planificación que no aparece en el Informe del catálogo de programas, consulte [Tickets para agregar/actualizar usuarios y datos maestros] (./05-getting-started.md#i1-tickets-for-addingupdating-users-and-master-data).

![Figure 129: Program Catalog Report](/img/media/image207.png)
*Figura 129: Informe del catálogo de programas*

## C. Informes de estado de existencias

### C1. Estado del stock a lo largo del tiempo
**Propósito:** comparar uno o más productos y sus niveles de inventario durante un período de tiempo.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas
- **Navegación:** Informes ➔ Estado del stock ➔ Estado del stock a lo largo del tiempo
- **Notas:** La Unidad de Planificación puede ser única, de selección múltiple o de selección total. La opción "Seleccionar todo" puede no ser ventajosa si el programa tiene muchas unidades de planificación, ya que el gráfico no podrá determinar las líneas individuales en el gráfico. Sugerimos elegir menos de diez productos a la vez. En concreto, este informe puede resultar útil para comparar categorías.

![Figure 130: Stock Status Over Time Report](/img/media/image208.png)
*Figura 130: Informe del estado del stock a lo largo del tiempo*

### C2. Matriz de estado de existencias
**Propósito:** proporcionar una instantánea rápida de los meses de existencias a lo largo del tiempo en un formato de tabla fácil de leer.

- **Accesible a:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas
- **Navegación:** Informes ➔ Estado de stock ➔ Matriz de estado de stock
- **Notas:**
  - Se muestra una fila para cada combinación de unidad de planificación y año, según lo seleccionado en los filtros superiores.
  - QAT mostrará el MOS o la cantidad para cada unidad de planificación en función de si el producto está planificado por cantidad o MOS, según lo seleccionado en la pantalla Actualizar unidades de planificación (consulte la Sección 4.A2).
  - Los colores corresponden a los niveles de stock durante ese mes en particular:
    - Rojo – Agotado
    - Naranja – Falta de existencias
    - Verde: abastecido según el plan
    - Amarillo: exceso de existencias
    - Gris: N/A (QAT no puede calcular el valor debido a que faltan datos)
  - Aunque el CSV no exporta los colores con formato condicional, el PDF contiene los colores y los usuarios pueden copiar y pegar la tabla para conservar todos los colores y el formato.

![Figure 131: Stock Status Snapshot Report](/img/media/image209.png)
*Figura 131: Informe instantáneo del estado del stock*

### C3. Instantánea del estado del stock
**Propósito:** brindar una vista de alto nivel del estado del stock de un programa en todas las unidades de planificación en un único momento (un mes).

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas
- **Navegación:** Informes ➔ Estado del stock ➔ Instantánea del estado del stock
- **Notas:**
  - Los distintos colores corresponden a los niveles de existencias durante ese mes en particular:
    - Rojo – Agotado
    - Naranja – Falta de existencias
    - Verde: abastecido según el plan
    - Amarillo: exceso de existencias
    - Gris: N/A (QAT no puede calcular el valor debido a que faltan datos)
  - Aunque el PDF y el CSV no exportan los colores con formato condicional, los usuarios pueden copiar y pegar la tabla para conservar todos los colores y el formato.

![Figure 132: Stock Status Snapshot Report](/img/media/image210.png)
*Figura 132: Informe instantáneo del estado del stock*

### C4. Instantánea del estado del stock (global)
**Propósito:** brindar una vista de alto nivel del estado del stock de un programa en todas las unidades de planificación en un único momento (un mes) para múltiples programas.

- **Accesible a:** Administradores de dominio, administradores de programas, usuarios de programas y visualizadores de informes
- **Navegación:** Informes ➔ Estado del stock ➔ Instantánea del estado del stock (global)
- **Notas:**
  - Los distintos colores corresponden a los niveles de existencias durante ese mes en particular:
    - Rojo – Agotado
    - Naranja – Falta de existencias
    - Verde: abastecido según el plan
    - Amarillo: exceso de existencias
  - Aunque el PDF y el CSV no exportan los colores con formato condicional, los usuarios pueden copiar y pegar la tabla para conservar todos los colores y el formato.

![Figure 133: Stock Status Snapshot (Global) Report](/img/media/image211.png)
*Figura 133: Informe instantáneo del estado del stock (global)*

## D. Informes de consumo

###DI. Consumo (Global)
**Propósito:** mostrar visualmente el consumo de una unidad de planificación o de varias unidades de planificación en todos los países.

- **Accesible a:** Administradores de dominio, administradores de programas, usuarios de programas y visualizadores de informes
- **Navegación:** Informes ➔ Informes de Consumo ➔ Consumo (Global)
<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The various colors stacked in the horizontal bars represent different countries. Users can determine which country by referencing the graph legend.</li><li>The x-axis corresponds to the consumption quantity (in millions) for each country.</li></ul></li></ul>

### D2. Error de pronóstico (mensual)
**Propósito:** mostrar visualmente la precisión del pronóstico utilizando el método de error porcentual promedio ponderado (WAPE), a lo largo del tiempo, mientras se compara el consumo pronosticado con el consumo real.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas
- **Navegación:** Informes ➔ Informes de Consumo ➔ Error de Previsión (Mensual)

![Figure 135: Forecast Error (Monthly) Report](/img/media/image213.png)
*Figura 135: Informe de error de pronóstico (mensual)*

<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>In the graph, the red vertical bars represent the actual consumption, the blue vertical bars represents the forecasted consumption, the green line (which uses the right axis), represents the forecast error, and the turquoise dotted line represents the forecast error threshold (see Figure 115: Forecast Error (Monthly) Report).</li><li>The forecast error threshold (%) per planning unit is set by the Program Admin in the Update Planning Units screen. If a forecast error is above the set forecast error threshold (%), it will appear in red text in the data table.</li><li>The Report View can be viewed in multiple ways:<ul style={{listStyleType: 'square'}}><li><strong>Forecasting unit.</strong> A user may want to choose forecasting unit when comparing in base units, such as with medicines that have different bottle sizes (planning units) sharing the same forecasting unit (e.g. the antiretroviral TLD30 vs TLD90 - See Figure 116.)</li><li><strong>Equivalency Unit:</strong> A user may want to choose forecasting unit when comparing products with different forecasting units, but some programmatic link (e.g. malaria treatments AL 6x1 vs 6x2 – see Figure 117.)</li><li><strong>“Show consumption adjusted for stock out?”:</strong> If this checkbox is checked, QAT uses the adjusted actual consumption instead of the actual consumption. QAT calculates the total days in the month based on the calendar.</li></ul></li><li>Missing Data:<ul style={{listStyleType: 'circle'}}><li>If data is missing for either forecasted or actual consumption, there will be a missing segment of the line or a missing bar in the graph</li><li>If there is missing data for actual or forecasted consumption, it will not be possible to calculate the forecast error and the user may see a gap in the line graph</li></ul></li><li><strong>Formula:</strong> Forecast Error uses the Weighted Average Percent Error (WAPE) formula. The example below uses the time windows of 6 months.<ul style={{listStyleType: 'square'}}><li><strong>Time Window:</strong> For non-seasonal products with predictable consumption pattern, use a short time window, but consider using a longer time window for those products with a more variable consumption or those with seasonality (use a time window at least long enough to consider the entire season).</li><li>For more details on the logic QAT uses to calculate this report, see the “Show Formulae” in the tool.</li></ul></li></ul></li></ul>

![Figure 136: WAPE Formula with 6-month time window as example](/img/media/image214.png)

*Figura 136: Fórmula WAPE con ventana de tiempo de 6 meses como ejemplo*

![Figure 137: Forecast Error (Monthly) Report – displayed by forecasting unit](/img/media/image215.png)
*Figura 137: Informe de error de pronóstico (mensual): se muestra por unidad de pronóstico*

![Figure 138: Forecast Error (Monthly) Report – displayed by equivalency unit](/img/media/image216.png)
*Figura 138: Informe de error de pronóstico (mensual): se muestra por unidad de equivalencia*

### D3. Error de pronóstico (por unidad de planificación)
**Propósito:** evaluar la precisión del pronóstico para productos seleccionados durante un mes específico en todos los países y programas.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas
- **Navegación:** Informes ➔ Informes de Consumo ➔ Error de Previsión (por Unidad de Planificación)
<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>For the time window, non-seasonal products with predictable consumption pattern can have a short time window, but those that have a more variable consumption/those with seasons should have a long-time window, or at least long enough to consider the entire season.</li><li>In the table, the forecast error percentages that are above the forecast error threshold (%), set by a Program Admin in the Update Planning Units screen, will be highlighted red</li><li>If there is missing data for actual or forecasted consumption, it will not be possible to calculate the forecast error and the user will see an error message in the table.</li><li>Forecast Error uses the Weighted Average Percent Error (WAPE) formula:</li></ul></li></ul>

![Figure 139: WAPE Formula](/img/media/image217.png)

*Figura 139: Fórmula WAPE*

![Figure 140: Forecast Error (by Planning Unit) Report](/img/media/image218.png)
*Figura 140: Informe de error de pronóstico (por unidad de planificación)*

## E. Informes de envío

### EI. Envío (global)
**Propósito:** agregar cantidades de adquisiciones por fuente de financiamiento, agente de adquisiciones y tipo de agente de adquisiciones en todos los países y programas.

- **Accesible a:** Administradores de dominio, administradores de programas, usuarios de programas y visualizadores de informes
- **Navegación:** Informes ➔ Informes de envío ➔ Envíos (Global)
<ul><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The two graphs that appear first in the Shipments (Global) Report depict the aggregated quantity of shipments per country and cost of the shipments (in USD) per funding source for a single planning unit. For a tabular view of the data, the user may find details in the bottom two tables.</li><li>If a country does not procure the selected planning unit, it will not appear in the graph of the tables in the report.</li></ul></li></ul>

![Figure 141: Shipment (Global) Report](/img/media/image219.png)
*Figura 141: Informe de envío (global)*

### E2. Descripción general del envío
**Propósito:** agregar cantidades de adquisiciones por fuente de financiamiento o por tipo de agente de adquisiciones en todos los países y programas.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins/Users, and Report Viewers</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Overview</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>Once navigating to the Shipment Overview screen, Users will see dropdowns in which they must fill out to show specific data. Once selecting certain dropdowns or all, users are shown a graph and a pie chart. The graph that appears first in the Shipments Overview Report depicts the aggregated quantity of shipments across countries and cost (in USD) of the shipments per funding source across planning units. The pie chart shows percentages of Funding Source depending on user selections while also being able to hover over to see the total amount (in USD). Users may also choose to group the data by Procurement Agent Type or Funding Source Type. For a tabular view of the data, the user may find details in the bottom table.</li></ul></li></ul>

![Figure 142: Shipment Overview Report](/img/media/image220.png)
*Figura 142: Informe general del envío*

### E3. Detalles de envío
**Propósito:** proporcionar una vista integral de todos los envíos de un programa.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Details</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The top graphs shows total USD per month by shipment status</li><li>There are two tables below the graph: the first one provides a summary and the second one provides detailed information on shipments.<ul style={{listStyleType: 'square'}}><li>The summary table shows the total number of shipments, and total costs per funding source, for the selected time period.</li><li>The detailed table contains the shipments disaggregated by planning unit, etc.</li></ul></li></ul></li></ul>

![Figure 143: Shipment Details Report](/img/media/image221.png)
*Figura 143: Informe de detalles del envío*

### E4. Detalles del costo de envío
**Propósito:** proporcionar una vista simple de todos los envíos de un programa y sus costos totales.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Cost Details</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>Can be displayed by funding source, procurement agent, or planning unit.</li></ul></li></ul>

![Figure 144: Shipment Cost Details Report](/img/media/image222.png)
*Figura 144: Informe de detalles de costos de envío*

### E5. Resumen de costos de envío
**Propósito:** proporcionar una visión general de los costos totales de envío por año calendario para una unidad de programa y planificación, por fuente de financiamiento.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Shipment Cost Overview</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report can be viewed in PDF or Excel (CSV) format</li><li>This report can be based on either the shipment receive date, or the shipment submitted date</li></ul></li></ul>

![Figure 145: Shipment Cost Overview Report](/img/media/image223.png)
*Figura 145: Informe general de costos de envío*

### E6. Presupuesto
**Propósito:** mostrar los diferentes presupuestos asignados a un programa(s), los montos asignados a los envíos, el monto gastado en exceso (si corresponde) y los montos restantes estimados. Este menú desplegable de programas en este informe es de selección múltiple, ya que varios programas pueden compartir el mismo presupuesto.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Budget</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The graph shows every predefined Budget in a program and whether it is allocated to shipments (planned or ordered) and the remaining amount.</li><li>The tabular view of the graph also provides information on the funding source for each budget, start and end date, and other detailed information.</li></ul></li></ul>

![Figure 146: Budget Report](/img/media/image224.png)
*Figura 146: Informe de Presupuesto*

### E7. Plazo de entrega del agente de adquisiciones
**Propósito:** mostrar los plazos de entrega detallados (en meses) para todas las unidades de planificación, por agente de adquisiciones.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Shipment Reports → Procurement Agent Lead Time</li></ul>

![Figure 147: Procurement Agent Lead Time Report](/img/media/image225.png)
*Figura 147: Informe de tiempo de entrega del agente de adquisiciones*

## F. Informes de inventario

### F1. Vencimientos
**Propósito:** proporcionar a los planificadores cantidades estimadas de unidades de planificación que vencerán en el futuro según el lote o la vida útil.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Expiries</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report pulls from data previously entered by including batch information on shipments, inventory, and actual consumption, and shelf life per planning unit. It displays the batch numbers, the receive date of the batch, shelf life of that batch (or planning unit), expiry date, and cost of the expired product.</li><li>The report can include quantities in planned shipments expected to arrive and expiry during the selected timeframe.</li><li>It will calculate (based on shelf life, stock projections, and forecast consumption) how much of a particular batch is expected to expire and when.<ul style={{listStyleType: 'square'}}><li>For the expiry calculation, refer to <a href="./14-annex-2-business-rules.md">Annex 2: Business Rules</a>.</li></ul></li><li>The report will calculate a cost of expired product, based on the quantity expired and the planning unit default price set by the user in the Update Planning Units screen.</li><li>The table is interactive. When the user clicks on the expired quantity, QAT will open a pop up with the batch ledger.</li></ul></li></ul>

![Figure 148: Expiries Report](/img/media/image226.png)
*Figura 148: Informe de Vencimientos*

### F2. Costo del inventario
**Propósito:** para un mes seleccionado, proporciona un costo estimado del inventario basado en el stock disponible real o proyectado y el precio del catálogo de la unidad de planificación.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Cost of Inventory</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>The report can include quantities in planned shipments expected to arrive during the selected timeframe.</li><li>The stock column could be based on an actual inventory or projected ending balance.</li><li>This report uses the following formula:</li></ul></li></ul>

![Figure 149: Cost of Inventory Formula](/img/media/image227.png)

*Figura 149: Fórmula del costo del inventario*

![Figure 150: Cost of Inventory Report](/img/media/image228.png)
*Figura 150: Informe de costo de inventario*

### F3. Turnos de inventario
**Propósito:** mostrar el número de rotaciones de inventario por unidad de planificación, programa, país o categoría de unidad de planificación en un momento determinado. Los giros de inventario son una forma de medir la velocidad de los planes de suministro. La rotación de inventario es una métrica clave de desempeño que a menudo se utiliza para señalar la eficacia de la gestión de la cadena de suministro. Por lo general, es una métrica retrospectiva, pero debido a que QAT utiliza datos de pronóstico para estimar las proyecciones de stock en el futuro, el informe también se puede usar para ver los giros de inventario estimados según los planes. En general, una mayor rotación significa una cadena de suministro más saludable: los productos se mueven hacia abajo y son reemplazados por productos frescos con mayor frecuencia. Una baja rotación implica un bajo consumo, posiblemente un exceso de inventario; podría indicar, por ejemplo, que los objetivos del programa son demasiado ambiciosos.

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Inventory Turns</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report calculates inventory turns at various levels: at the individual planning unit level, at an aggregate level for an entire program (multiple planning units), and at an aggregate level for an entire country (multiple programs), or commodity category.</li><li><strong>Planned Inventory turns:</strong> Are the possible months of stock for each month over 12 months if the inventory rules worked perfectly considering the Planning Unit’s MIN and Reorder Interval.<ul style={{listStyleType: 'square'}}><li>At the planning unit level, the report utilizes the MIN and Reorder Interval from Planning Unit Settings to calculate the “Planned” inventory turns.</li><li>At the program level (multiple planning units) QAT utilizes the mode of all planned inventory turns of all Planning units under a specific program.</li><li>At the country and/or Planning Unit Category level QAT utilizes the mode of all planned inventory turns of all Planning units under a specific country / PU Category.</li></ul></li><li><strong>Actual inventory turns:</strong><ul style={{listStyleType: 'square'}}><li>At the planning unit level, QAT uses the following formula for each planning unit to calculate the actual inventory turns:</li></ul></li></ul></li></ul>

![Figure 151: Inventory Turns Formula at the planning unit level](/img/media/image229.png)

*Figura 151: Fórmula de rotación de inventario a nivel de unidad de planificación*

<ul><li style={{listStyleType: 'none'}}><ul style={{listStyleType: 'circle'}}><li style={{listStyleType: 'none'}}><ul style={{listStyleType: 'square'}}><li>For each planning unit, the report compares the actual and planned turns, and calculates the MAPE and MSE.</li><li>To calculate the actual inventory turns at the program level, QAT will look for the mode across all planning units in that program. If no mode can be found, QAT will use the average from all planning units as that program’s actual inventory turns.</li><li>To calculate the actual inventory turns at the country (or commodity category) level, QAT will look for the mode across all programs. If no mode can be found, QAT will use the average.</li></ul></li></ul></li></ul>

![Figure 152: Inventory Turns Report](/img/media/image230.png)
*Figura 152: Informe de rotación de inventario*

### F4. Ajuste de existencias
**Propósito:** mostrar una lista de todos los ajustes de stock ingresados manualmente en un programa. *Nota: los ajustes calculados automáticamente no se mostrarán en este informe.*

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Stock Adjustment</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>Automatically calculated adjustments (as a result of a difference between projected ending balance and an inventory count) do not appear in this report.</li></ul></li></ul>

![Figure 153: Stock Adjustment Report](/img/media/image231.png)
*Figura 153: Informe de Ajuste de Stock*

### F5. Capacidad de almacén (por programa)
**Propósito:** muestra el volumen (en metros cúbicos) de todas las regiones dentro de un país (si un usuario ingresa dicha información al configurar un programa).

<ul><li><strong>Accessible to:</strong> Realm Admins, Program Admins, Report Viewers, and Program Users</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Warehouse Capacity (by Program)</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report is most useful for those countries with multiple regions.</li></ul></li></ul>

![Figure 154: Warehouse Capacity (by Program)](/img/media/image232.png)
*Figura 154: Capacidad de Almacén (por Programa)*

### F6. Capacidad de almacén (por país)
**Propósito:** muestra el volumen (en metros cúbicos) de todos los países y regiones dentro de un país (se requiere acceso a nivel de dominio).

<ul><li><strong>Accessible to:</strong> Realm Admins and Report Viewers</li><li><strong>Navigation:</strong> Reports → Inventory Reports → Warehouse Capacity (by Country)</li><li><strong>Notes:</strong><ul style={{listStyleType: 'circle'}}><li>This report is most useful for those countries with multiple regions.</li></ul></li></ul>

![Figure 155: Warehouse Capacity (by Country)](/img/media/image233.png)
*Figura 155: Capacidad de almacén (por país)*