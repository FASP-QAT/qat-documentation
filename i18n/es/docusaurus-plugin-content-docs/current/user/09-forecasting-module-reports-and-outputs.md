---
id: forecasting-module-reports-and-outputs
title: "Forecasting Module: Reports and Outputs"
sidebar_label: "Forecasting Module: Reports and Outputs"
sidebar_position: 9
---
# Módulo de Previsión: Informes y Resultados

## Comparar y seleccionar

**<u>Propósito</u>:** Permitir a los usuarios comparar todos los pronósticos disponibles (de árboles y métodos de consumo) y seleccionar su pronóstico final. En esta pantalla, los usuarios seleccionan sus pronósticos una unidad de planificación y una región a la vez. Para seleccionar pronósticos en múltiples unidades de planificación y regiones, use la pantalla Resumen de pronóstico. Los usuarios deben utilizar todas las tablas y gráficos de esta pantalla para comparar datos y elegir un pronóstico final.

**<u>Usando esta pantalla</u>:**

1. **Verifique que todos los pronósticos esperados aparezcan en la tabla Comparar y seleccionar. Para agregar pronósticos, navegue hasta la pantalla** [Administrar árbol](08-forecasting-module-forecasting.md#tree-forecasts) **para crear un pronóstico de árbol o la pantalla [Extrapolación](08-forecasting-module-forecasting.md#extrapolation)** **para crear un pronóstico basado en el consumo.** Es posible que los usuarios también deban volver a verificar la pantalla [Actualizar unidades de planificación](07-forecasting-module-program-data.md#planning-units) para asegurarse de que los métodos de Pronóstico de consumo o Pronósticos de árbol se hayan marcado o desmarcado para cada unidad de planificación.
    1. Nota: Las filas se resaltan en gris y no se pueden editar cuando no hay nada que mostrar o seleccionar.

2. **Revise los pronósticos disponibles para cada unidad de planificación utilizando la siguiente información en la pantalla:**
    1. **Error de pronóstico (%):** este error se calcula utilizando el cálculo del error porcentual absoluto ponderado (WAPE) de la misma manera que se calcula en la pantalla de extrapolación de consumo. Si el error de pronóstico está resaltado en texto verde, este pronóstico tiene el error de pronóstico más bajo de los pronósticos disponibles.

> _Nota: el error de pronóstico no siempre es confiable para los pronósticos de árboles; a menos que un pronóstico de árbol tenga una superposición significativa con los datos reales pasados, es posible que no haya datos de pronósticos anteriores disponibles para comparar._

2. **Comparar con el pronóstico de consumo:** QAT compara los pronósticos de consumo y los pronósticos de árboles disponibles. Para cualquier pronóstico de árbol, QAT marcará el porcentaje por encima del pronóstico de consumo más alto o por debajo del más bajo. La comparación se resaltará en texto rojo si está fuera de los porcentajes de umbral establecidos por el usuario en la pantalla [Configuración de versión](07-forecasting-module-program-data.md#version-settings). Suponiendo datos de consumo real confiables, esta comparación ayuda a los usuarios a determinar si sus pronósticos de árboles son comparables al consumo histórico. Esta estadística no estará disponible para las previsiones de consumo.

3. **Gráfico: compare visualmente los diferentes pronósticos.** El pronóstico seleccionado en la tabla superior aparecerá **en negrita** en el gráfico.

4. **Tabla de datos detallada: compare los datos entre pronósticos uno al lado del otro haciendo clic en el botón "Mostrar datos" debajo del gráfico. Cualquier dato en negrita**/**_negrita, cursiva y violeta_** **se encuentra dentro del período de pronóstico.**

5. **Ver los pronósticos en agregaciones de año calendario o año fiscal: de forma predeterminada, QAT muestra el pronóstico en cifras mensuales, pero los usuarios tienen la opción de ver una agregación de esas cifras por año calendario o por año fiscal (y definir el inicio/final del año fiscal que funcione en su contexto).**
    1. **Al elegir ver por año calendario/fiscal, aparece una nueva tabla entre el gráfico y la tabla de datos detallados. Esta nueva tabla muestra los valores de pronóstico agregados por año calendario o fiscal e indica la cantidad de meses utilizados en el cálculo para ese año.**

<!-- finalizar lista -->

3. **Seleccione el pronóstico final en la tabla Comparar y Seleccionar. Si hay un símbolo** ![Warning with solid fill](/img/media/image319.png) **al lado de la Unidad de planificación, no hay ningún pronóstico seleccionado. Si hay un símbolo** ![Checkbox Checked with solid fill](/img/media/image320.png) **al lado de la Unidad de planificación, hay un pronóstico seleccionado.**

4. **Repita los pasos 1 a 3 para cada unidad de planificación y región hasta que no queden más** ![Warning with solid fill](/img/media/image319.png) **símbolos. Una vez completado, continúe hasta** [Pronósticos mensuales](#pronóstico-mensual) **para verificar todas las unidades de planificación juntas.**

**_Nota: Los usuarios pueden seleccionar varios pronósticos de árboles como pronóstico final, lo que agregará las cantidades de pronóstico mensuales; sin embargo, los usuarios no pueden seleccionar múltiples pronósticos de consumo o una combinación de pronósticos de consumo y de árboles._**

**<u>Consejos sobre el uso del gráfico y la tabla de datos detallada:</u>**

- Un usuario puede ver el gráfico en Unidad de planificación, Unidad de pronóstico, [Unidad de equivalencia] (#unidades-equivalencia) y durante un período de tiempo específico. Si un usuario elige "Mostrar solo el período de pronóstico", el gráfico mostrará solo el período de tiempo que el usuario eligió como período de pronóstico en la pantalla Configuración de versión.

- De forma predeterminada, QAT mostrará en el gráfico todos los pronósticos disponibles por unidad de planificación y cualquier valor real ingresado o importado desde el módulo de planificación de suministro de QAT; sin embargo, un usuario puede anular la selección de "¿Mostrar?" casilla de verificación para cualquier pronóstico en la tabla superior si no desean verlo en el gráfico.

- Al igual que el gráfico en la pantalla de Extrapolación del consumo, el usuario puede optar por mostrar el pronóstico "hacia atrás". Tenga en cuenta que si elige esta opción, volverá a aparecer la línea “Actuales (ajustados).

## Pronóstico mensual

**<u>Propósito</u>**: permitir a los usuarios ver los pronósticos finales (_seleccionados_) para un solo programa y muestra el pronóstico por unidad de planificación y mes. Este resultado agrega todos los pronósticos regionales en un pronóstico total. Para ver pronósticos regionales desglosados, los usuarios pueden exportar el resultado como CSV. Este informe es excelente para verificar todas las unidades de planificación en un solo lugar, ya que tiene múltiples opciones de visualización de informes:

- Unidad de Planificación o Unidad de Previsión

- Agregados por Unidad de Equivalencia

- Gráficos y datos tabulares mensuales o anuales

![P3495#yIS1](/img/media/image321.png)

Figura 188: Pronóstico mensual mostrado con el eje Y en UE

![P3497#yIS1](/img/media/image322.png)

Figura 189: Datos tabulares de pronóstico mensual

**<u>Usando esta pantalla</u>**:

- _En este resultado solo se mostrarán los pronósticos seleccionados. Para seleccionar un pronóstico para un producto, vaya a la pantalla '_[Comparar y seleccionar pronóstico](#compare-and-select)'. Para ver los pronósticos totales de todos los productos, vaya a la pantalla '[Resumen de pronóstico](#forecast-summary)'.

- *El **Período del informe** se utilizará para determinar el período de tiempo que se mostrará en la salida gráfica/tabular y debe estar dentro del período de pronóstico.

- Utilice los parámetros para ver los datos gráficos/tabulares, ya sea por unidades de pronóstico o unidades de planificación, además de mostrar el eje y en unidades de equivalencia.

- Las **Unidades de equivalencia** (UE) permiten a los usuarios agregar datos entre unidades de planificación o unidades de pronóstico que son diferentes pero que tienen la misma unidad de equivalencia. Consulte [Unidades de equivalencia](#unidades-equivalencia) para obtener más información.

- El filtro "Agregado por año del eje X" le permite ver los datos agregados por año en lugar de por mes.

- Para la vista de gráfico, hay 3 formas de ocultar qué unidades de planificación se muestran:
  1. Utilice el filtro en la parte superior para seleccionar la(s) unidad(es) de planificación.

  2. Haga clic en una unidad de planificación en la leyenda del gráfico.

  3. Desmarque la casilla de verificación "Mostrar" en el extremo izquierdo de la vista tabular.

## Resumen de pronóstico

**<u>Propósito</u>**: Permitir a los usuarios ver un resumen de sus pronósticos finales (seleccionados) para todo el período de pronóstico. Para ver los pronósticos por mes, utilice la pantalla '[Pronóstico mensual](#pronóstico-mensual)'.

- **Vista regional:** Utilice esta vista para ver su pronóstico en las unidades de planificación <u></u> y <u>regiones</u>. Actualice directamente el método de pronóstico para cada combinación de unidad de planificación de región y agregue notas en la tabla, si lo desea. Las selecciones de pronóstico también se pueden actualizar en la pantalla '[Comparar y seleccionar pronóstico](#compare-and-select)'.

- **Vista nacional:** Utilice esta vista para ver su pronóstico a nivel nacional <u></u> y evaluar su excedente o brechas de adquisiciones <u></u>.

### Vista regional

1. **Utilice los menús desplegables en la parte superior de la pantalla para seleccionar el programa y la versión**

2. **Asegúrese de que esté activado el botón de opción "Vista regional" en Pantalla.**

3. **Ver un resumen de todas las unidades de planificación, su cantidad de pronóstico seleccionada y las notas, por región.**

4. **(si se selecciona una versión local), el usuario puede actualizar el pronóstico seleccionado haciendo doble clic en cualquiera de las celdas debajo de la columna "Pronóstico seleccionado", así como en cualquier nota en la columna "Notas".**

![P3518#yIS1](/img/media/image323.png)

Figura 190 Resumen de pronóstico: vista regional

### Vista Nacional

![P3521#yIS1](/img/media/image324.png)

Figura 191 Resumen de pronóstico: vista nacional

1. **Utilice los menús desplegables en la parte superior de la pantalla para seleccionar el programa y la versión**

2. **Asegúrese de que esté activado el botón de opción "Vista nacional" en Pantalla.**

3. **Ver el análisis de brecha de superávit resultante. _Nota: Este no es un plan de suministro completo, sino un análisis de excedente/déficit de adquisiciones de alto nivel. Recomendamos importar su pronóstico al módulo de planificación de suministro para una planificación de suministro granular._**

4. **Haga clic en la casilla de verificación "ocultar cálculos" para ver una versión simplificada de la tabla.**

5. Para que los datos se muestren aquí correctamente, ingrese los siguientes datos:
    1. En [Actualizar unidad de planificación](07-forecasting-module-program-data.md#planning-units):
        1. **Stock** – al comienzo de su período de pronóstico

        2. **Envíos existentes**: durante el período de pronóstico

        3. **Meses de existencias deseados**: al final de su período de pronóstico

        4. **Tipo de precio** y **Precios unitarios**

    2. En [Actualizar configuración de versión] (#version-settings):
        1. **% de flete**: el costo del flete se calcula como un porcentaje del costo del producto.

**Fórmulas utilizadas para calcular el superávit/brecha de adquisiciones**

- Stock del proyecto al final del pronóstico = (Stock inicial) + (Envíos existentes) - (Cantidad pronosticada)

- Stock deseado al final del pronóstico = (Cantidad pronosticada \* Meses de stock deseados) / (Número de meses en el período de pronóstico)

- Superávit/brecha de adquisiciones = (Stock proyectado al final del pronóstico) - (Stock deseado al final del pronóstico)

Por ejemplo, un pronóstico de enero de 2021 a diciembre de 2023 (pronóstico de 36 meses)

<table>
  <thead>
    <tr class="header">
      <th>
        <strong>Tantidad total prevista</strong>
      </th>
      <th>
        <strong> Stock <br /> (finales de diciembre de 2020) </strong>
      </th>
      <th>
        <strong>Envíos existentes (enero de 2021 - diciembre de 2023)</strong>
      </th>
      <th>
        <strong> Stock <br /> (finales de diciembre de 2023) </strong>
      </th>
      <th>
        <strong> Meses deseados de existencias <br /> (finales de diciembre de 2023) </strong>
      </th>
      <th>
        <strong> Stock deseado <br /> (finales de diciembre de 2023) </strong>
      </th>
      <th>
        <strong>Superávit/brecha en adquisiciones</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>360,000</td>
      <td>5,000</td>
      <td>20,000</td>
      <td>
        <p>5.000 + 20.000</p>
        <p>- 360,000</p>
        <p>= -335,000</p>
      </td>
      <td>5</td>
      <td>
        <p>(360.000 * 5) / 36</p>
        <p>= 50,000</p>
      </td>
      <td>
        <p>-335.000 -50.000</p>
        <p>= -385,000</p>
      </td>
    </tr>
  </tbody>
</table>

**Fórmulas utilizadas para calcular los costos de adquisición**

_Nota: el costo solo se calcula si hay un déficit de adquisiciones, no si hay un excedente_

- Costo del producto = Brecha de adquisiciones \* Costo unitario

- Costo de flete = Costo del producto \* Porcentaje de flete

- Costo Total = Costo del Producto + Costo de Flete

Para el ejemplo anterior, suponiendo un costo unitario de 0,10 USD y un % de flete del 7%:

- Costo del producto = -385.000 \* 0,10 = $38.500

- Costo de flete = $38,500 \* 7% = $2,695

- Costo Total = $38,500 + $2,695 = $41,195