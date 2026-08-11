---
id: forecasting-module-reports-and-outputs
title: "9. Forecasting Module: Reports and Outputs"
sidebar_label: "9. Forecast Outputs"
sidebar_position: 12
---
# Sección 9. Módulo de Pronósticos: Informes y Resultados

## A. Comparar y seleccionar

**Propósito:** Permitir a los usuarios comparar todos los pronósticos disponibles (de los métodos de árbol y consumo) y seleccionar su pronóstico final. En esta pantalla, los usuarios seleccionan sus pronósticos una unidad de planificación y una región a la vez. Para seleccionar pronósticos en múltiples unidades de planificación y regiones, use la pantalla Resumen de pronóstico. Los usuarios deben utilizar todas las tablas y gráficos de esta pantalla para comparar datos y elegir un pronóstico final.

**<u>Usando esta pantalla:</u>**

1. Verifique para asegurarse de que todos los pronósticos esperados aparezcan en la tabla Comparar y seleccionar. Para agregar pronósticos, navegue hasta la pantalla [Administrar árbol](11-forecasting-module-forecasting.md#b-tree-forecasts) para crear un pronóstico de árbol o la pantalla [Extrapolación](11-forecasting-module-forecasting.md#a3-extrapolation) para crear un pronóstico basado en el consumo. Es posible que los usuarios también deban volver a verificar la pantalla [Actualizar unidades de planificación] (10-forecasting-module-program-data.md#d-planning-units) para asegurarse de que los métodos de Pronóstico de consumo o Pronósticos de árbol se hayan marcado o desmarcado para cada Unidad de planificación.

   a. Nota: Las filas se resaltan en gris y no se pueden editar cuando no hay nada que mostrar o seleccionar.

2. Revise los pronósticos disponibles para cada unidad de planificación utilizando la siguiente información en la pantalla:

   un. **Error de pronóstico (%):** este error se calcula utilizando el cálculo del error porcentual absoluto ponderado (WAPE) de la misma manera que se calcula en la pantalla de extrapolación de consumo. Si el error de pronóstico está resaltado en <span style={{ color: 'green' }}>texto verde</span>, este pronóstico tiene el error de pronóstico más bajo de los pronósticos disponibles.

      *Nota: el error de pronóstico no siempre es confiable para los pronósticos de árboles; a menos que un pronóstico de árbol tenga una superposición significativa con los datos reales pasados, es posible que no haya datos de pronósticos anteriores disponibles para comparar.*

   B. **Comparar con el pronóstico de consumo:** QAT compara los pronósticos de consumo y los pronósticos de árboles disponibles. Para cualquier pronóstico de árbol. QAT señalará el porcentaje por encima del pronóstico de consumo más alto o por debajo del más bajo. La comparación se resaltará en <span style={{ color: 'red' }}>texto rojo</span> si está fuera de los porcentajes de umbral establecidos por el usuario en la pantalla [Configuración de versión](10-forecasting-module-program-data.md#c-version-settings). Suponiendo datos de consumo real confiables, esta comparación ayuda a los usuarios a determinar si sus pronósticos de árboles son comparables al consumo histórico. Esta estadística no estará disponible para las previsiones de consumo.

   do. **Gráfico:** Compara visualmente las diferentes previsiones. El pronóstico seleccionado en la tabla superior aparecerá **en negrita** en el gráfico.

   d. **Tabla de datos detallada:** Compare los datos entre pronósticos uno al lado del otro haciendo clic en el botón "Mostrar datos" debajo del gráfico. Cualquier dato **negrita**/<span style={{ color: 'purple' }}><strong><em>negrita cursiva violeta</em></strong></span> se encuentra dentro del período de pronóstico.

   mi. **Ver los pronósticos en agregaciones de año calendario o año fiscal:** de forma predeterminada, QAT muestra el pronóstico en cifras mensuales, pero los usuarios tienen la opción de ver una agregación de esas cifras por año calendario o por año fiscal (y definir el inicio/final del año fiscal que funcione en su contexto).

      i. Al elegir ver por año calendario/fiscal, aparece una nueva tabla entre el gráfico y la tabla de datos detallados. Esta nueva tabla muestra los valores de pronóstico agregados por año calendario o fiscal e indica el número de meses utilizados en el cálculo para ese año.

3. Seleccione el pronóstico final en la tabla Comparar y Seleccionar. Si hay un símbolo <img src={require('@site/static/img/media/image319.png').default} alt="warning" style={{ width: '18px', verticalAlign: 'middle' }} /> al lado de la Unidad de planificación, no hay ningún pronóstico seleccionado. Si hay un símbolo <img src={require('@site/static/img/media/image320.png').default} alt="check" style={{ width: '15px', verticalAlign: 'middle' }} /> al lado de la Unidad de planificación, hay un pronóstico seleccionado.

4. Repita los pasos 1 a 3 para cada unidad de planificación y región hasta que no queden más símbolos <img src={require('@site/static/img/media/image319.png').default} alt="warning" style={{ width: '18px', verticalAlign: 'middle' }} />. Una vez completado, continúe con los [Pronósticos mensuales] (#9b-pronóstico-mensual) para verificar todas las unidades de planificación juntas.

*Nota: Los usuarios pueden seleccionar varios pronósticos de árboles como pronóstico final, que agregarán las cantidades de pronóstico mensuales; sin embargo, los usuarios no pueden seleccionar múltiples pronósticos de consumo o una combinación de pronósticos de consumo y de árboles.*

**<u>Consejos sobre el uso del gráfico y la tabla de datos detallados:</u>**

* Un usuario puede ver el gráfico en Unidad de planificación, Unidad de pronóstico, [Unidad de equivalencia] (10-módulo-de-pronóstico-program-data.md#e-equivalency-units) y durante un período de tiempo específico. Si un usuario elige "Mostrar solo el período de pronóstico", el gráfico mostrará solo el período de tiempo que el usuario eligió como período de pronóstico en la pantalla Configuración de versión.

* De forma predeterminada, QAT mostrará en el gráfico todos los pronósticos disponibles por unidad de planificación y cualquier valor real ingresado o importado desde el módulo de planificación de suministro de QAT; sin embargo, un usuario puede anular la selección de "¿Mostrar?" casilla de verificación para cualquier pronóstico en la tabla superior si no desean verlo en el gráfico.

* Al igual que el gráfico en la pantalla de Extrapolación del consumo, el usuario puede optar por mostrar el pronóstico "hacia atrás". Tenga en cuenta que si elige esta opción, volverá a aparecer la línea "Actuales (ajustados)".

## B. Pronóstico mensual

**Propósito:** Permitir a los usuarios ver los pronósticos finales (seleccionados) para un solo programa y mostrar el pronóstico por unidad de planificación y mes. Este resultado agrega todos los pronósticos regionales en un pronóstico total. Para ver pronósticos regionales desglosados, los usuarios pueden exportar el resultado como CSV. Este informe es excelente para verificar todas las unidades de planificación en un solo lugar, ya que tiene múltiples opciones de visualización de informes:

* Unidad de Planificación o Unidad de Previsión
* Agregado por Unidad de Equivalencia
* Gráficos y datos tabulares mensuales o anuales

<img src={require('@site/static/img/media/image321.png').default} alt="Monthly forecast Displayed with Y-axis in EUs" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 188: Monthly forecast Displayed with Y-axis in EUs</p>

<img src={require('@site/static/img/media/image322.png').default} alt="Monthly Forecast Tabular Data" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 189: Monthly Forecast Tabular Data</p>

**<u>Usando esta pantalla:</u>**

* En este resultado solo se mostrarán pronósticos seleccionados. Para seleccionar un pronóstico para un producto, vaya a la pantalla [Comparar y seleccionar pronóstico] (#9a-comparar-y-seleccionar). Para ver los pronósticos totales de todos los productos, vaya a la pantalla [Resumen de pronósticos](#9c-forecast-summary).

* El **Período del informe** se utilizará para determinar el período de tiempo que se mostrará en la salida gráfica/tabular y debe estar dentro del período de pronóstico.

* Utilice los parámetros para ver los datos gráficos/tabulares, ya sea por unidades de pronóstico o unidades de planificación, además de mostrar el eje y en unidades de equivalencia.

* **Unidades de equivalencia** (UE) permiten a los usuarios agregar datos entre unidades de planificación o unidades de pronóstico que son diferentes pero que tienen la misma unidad de equivalencia. Consulte [Unidades de equivalencia](10-forecasting-module-program-data.md#e-equivalency-units) para obtener más información.

* El filtro 'Agregado por año del eje X' le permite ver los datos agregados por año en lugar de por mes.

* Para la vista de gráfico, hay 3 formas de ocultar qué unidades de planificación se muestran:
  1. Utilice el filtro en la parte superior para seleccionar la(s) unidad(es) de planificación.
  2. Haga clic en una unidad de planificación en la leyenda del gráfico.
  3. Desmarque la casilla de verificación 'Mostrar' en el extremo izquierdo de la vista tabular.

## C. Resumen del pronóstico

**Propósito:** Permitir a los usuarios ver un resumen de sus pronósticos finales (seleccionados) para todo el período de pronóstico. Para ver los pronósticos por mes, utilice la pantalla 'Pronóstico mensual'.

* **Vista regional:** Utilice esta vista para ver su pronóstico en todas las unidades de planificación y regiones. Actualice directamente el método de pronóstico para cada combinación de unidad de planificación de región y agregue notas en la tabla, si lo desea. Las selecciones de pronóstico también se pueden actualizar en la pantalla [Comparar y seleccionar pronóstico] (#9a-comparar-y-seleccionar).

* **Vista nacional:** Utilice esta vista para ver su pronóstico a nivel nacional y evaluar su [superávit o brechas de adquisiciones](#c2-national-view).

### C1. Vista regional

1. Utilice los menús desplegables en la parte superior de la pantalla para seleccionar el programa y la versión.

2. Asegúrese de que el botón de opción "Vista regional" en Pantalla.

3. Vea un resumen de todas las unidades de planificación, su cantidad de pronóstico seleccionada y las notas, por región.

4. (si se selecciona una versión local), el usuario puede actualizar el pronóstico seleccionado haciendo doble clic en cualquiera de las celdas debajo de la columna "Pronóstico seleccionado", así como en cualquier nota en la columna "Notas".

<img src={require('@site/static/img/media/image323.png').default} alt="Forecast Summary - Regional View" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 190 Forecast Summary - Regional View</p>

### C2. Vista Nacional

<img src={require('@site/static/img/media/image324.png').default} alt="Forecast Summary - National View" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 191 forecast Summary - National View</p>

1. Utilice los menús desplegables en la parte superior de la pantalla para seleccionar el programa y la versión.

2. Asegúrese de que el botón de opción "Vista nacional" en Pantalla.

3. Ver el análisis de la brecha de superávit resultante. *Nota: Este no es un plan de suministro completo, sino un análisis de excedente/déficit de adquisiciones de alto nivel. Recomendamos importar su pronóstico al módulo de planificación de suministro para una planificación de suministro granular.*

4. Haga clic en la casilla de verificación "ocultar cálculos" para ver una versión simplificada de la tabla.

5. Para que los datos se muestren aquí correctamente, ingrese los siguientes datos:

   un. En [Actualizar unidad de planificación](10-forecasting-module-program-data.md#d-planning-units):

      yo. **Stock** – al comienzo de su período de pronóstico

      ii. **Envíos existentes**: durante el período de pronóstico

      III. **Meses de existencias deseados**: al final de su período de pronóstico

      IV. **Tipo de precio** y **Precios unitarios**

   B. En [Actualizar configuración de versión] (10-forecasting-module-program-data.md#c-version-settings):

      yo. **% de flete**: el costo del flete se calcula como un porcentaje del costo del producto.

**Fórmulas utilizadas para calcular el superávit/brecha de adquisiciones**

* Stock del proyecto al final del pronóstico = (Stock inicial) + (Envíos existentes) - (Cantidad pronosticada)
* Existencias deseadas al final del pronóstico = (Cantidad pronosticada * Meses de existencias deseados) / (Número de meses en el período de pronóstico)
* Superávit/brecha de adquisiciones = (Stock proyectado al final del pronóstico) - (Stock deseado al final del pronóstico)

Por ejemplo, un pronóstico de enero de 2021 a diciembre de 2023 (pronóstico de 36 meses)

| Cantidad total prevista | Stock (finales de diciembre de 2020) | Envíos existentes (enero de 2021 - diciembre de 2023) | Stock (finales de diciembre de 2023) | Meses de stock deseados (finales de diciembre de 2023) | Stock deseado (finales de diciembre de 2023) | Superávit/brecha de adquisiciones |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 360.000 | 5.000 | 20.000 | 5.000 + 20.000<br />- 360.000<br />= -335.000 | 5 | (360.000 * 5) /<br />36<br />= 50.000 | -335.000 - 50.000<br />= -385.000 |

**Fórmulas utilizadas para calcular los costos de adquisición**

*Nota: el costo solo se calcula si hay un déficit de adquisiciones, no si hay un excedente*

* Costo del producto = Brecha de adquisiciones * Costo unitario
* Costo de flete = Costo del producto * Porcentaje de flete
* Costo Total = Costo del Producto + Costo de Flete

Para el ejemplo anterior, suponiendo un costo unitario de 0,10 USD y un porcentaje de flete del 7%:

* Costo del producto = -385.000 * 0,10 = $38.500
* Costo de flete = $38,500 * 7% = $2,695
* Costo total = $38,500 + $2,695 = $41,195