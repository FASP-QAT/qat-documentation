---
id: forecasting-module-forecasting
title: "8. Forecasting Module: Forecasting"
sidebar_label: "8. Forecasting"
sidebar_position: 11
---
# Sección 8. Módulo de Previsión: Previsión

## A. Previsiones de consumo

Los pronósticos basados en el consumo, que se basan en datos de consumo históricos, son más útiles en programas maduros y estables que cuentan con un suministro completo de unidades de planificación y datos confiables. Este método puede ser el predictor más fiable del consumo futuro si se prevé que el uso futuro será muy similar al pasado. Por lo tanto, un usuario debe poder extrapolar datos históricos (idealmente, hay disponibles más de 24 meses de datos de consumo real mensual) y los datos deben ser una serie de datos a lo largo del tiempo (es decir, consumo real **mensual ajustado**).

Hay cuatro componentes básicos para un pronóstico de consumo:

<div style={{ textAlign: 'center', margin: '20px 0', fontFamily: 'serif', fontSize: '1.2em', fontStyle: 'italic' }}>
  Forecast ≅ Base + Trend + Season + Random
</div>

Diferentes modelos de extrapolación utilizarán diferentes métodos estadísticos para estimar estos diferentes componentes y producir un pronóstico. En QAT, los usuarios seguirán tres pasos para producir un pronóstico basado en el consumo:

1. **[Importar/entrada](#a1-importinputting-actuals)** datos de consumo real. Esto se puede hacer importando datos del módulo de planificación de suministro QAT o ingresando datos manualmente.
2. **[Ajustar](#a2-adjustments)** datos de consumo real agregando la tasa de informes y los desabastecimientos, y/o interpolando los datos faltantes.
3. **[Extrapolar](#a3-extrapolación)** datos de consumo real para producir un pronóstico. QAT tiene cinco métodos de extrapolación diferentes para elegir: medias móviles, semimedias, regresión lineal, suavizado exponencial triple (TES, Holt-Winters) y media móvil integrada autorregresiva (ARIMA).

### A1. Importar/Introducir datos reales

Hay dos formas en que un usuario puede agregar datos de consumo real a su programa:
1. Importar datos de consumo real de un programa existente en el módulo de planificación de suministro QAT, o
2. Ingrese datos manualmente en la pantalla "Ingreso de datos y ajustes" en el módulo de pronóstico QAT

**Pasos para importar datos desde el módulo de planificación de suministro QAT:**
1. Navegue hasta la pantalla "Pronóstico basado en el consumo" -&gt; "Importar desde plan de suministro QAT"
2. Elija el Programa de Pronóstico, Rango de datos de Consumo Real a importar, el programa Plan de Suministro y luego la versión del Plan de Suministro. Nota: solo los programas de pronóstico que hayan sido ***descargados*** en la computadora local del usuario estarán disponibles en el menú desplegable de "Programa de pronóstico". Consulte [Descargar/eliminar programa](06-managing-programs-and-versions.md#download-or-delete-program) para saber cómo descargar un programa a la computadora local.
3. Luego, los usuarios asignarán la Unidad de planificación del plan de suministro a la Unidad de planificación de pronósticos. Nota: *solo las unidades de planificación que se hayan agregado al Programa de pronóstico en la pantalla "Actualizar unidades de planificación" y para las cuales hayamos marcado la casilla de verificación para el pronóstico de consumo estarán disponibles en el menú desplegable de "Unidad de planificación de pronóstico". * Consulte el Módulo de pronóstico [Unidades de planificación] (10-forecasting-module-program-data.md#d-planning-units) para saber cómo agregar unidades de planificación a un programa de pronóstico.
4. Elija "No importar" en el menú desplegable para cualquier PU que no coincida automáticamente. En caso de que tenga muchas PU y desee seleccionar "No importar" para todas las no asignadas, puede marcar la casilla "No importar todas las unidades de planificación no asignadas".

     <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image239.png').default} alt="Figure 157: Step 1 for Importing Actual Consumption Data from the Supply Planning Module" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 157: Step 1 for Importing Actual Consumption Data from the Supply Planning Module</p>
     </div>

5. Los usuarios eligen qué región se debe importar al programa de pronóstico y también proporcionan información sobre el porcentaje del consumo real que se debe importar al programa de pronóstico.

     <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image240.png').default} alt="Figure 158: Step 2 for Importing Actual Consumption Data from the Supply Planning Module" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 158: Step 2 for Importing Actual Consumption Data from the Supply Planning Module</p>
     </div>

6. El último paso permitirá a los usuarios volver a verificar los datos de consumo real del plan de suministro para asegurarse de que están importando la unidad de medida y los meses de datos correctos. Si los datos ya existen en el programa de pronóstico, estarán <span style={{ backgroundColor: '#FFFF00' }}>resaltados en amarillo</span>. Si un usuario importa datos resaltados en amarillo, esta nueva importación anulará los datos que ya existen en el programa de pronóstico. Los usuarios pueden desmarcar manualmente los meses de datos que no se importarán, si lo desean.

     <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image241.png').default} alt="Figure 159: Step 3 for Importing Actual Consumption Data from the Supply Planning Module" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 159: Step 3 for Importing Actual Consumption Data from the Supply Planning Module</p>
     </div>

7. Haga clic en "Importar".

**Pasos para ingresar datos de consumo real manualmente**
1. Navegue hasta la pantalla "Pronóstico basado en el consumo" -&gt; "Ingreso de datos y ajustes".
2. Seleccione el programa de pronóstico y el período de revisión deseado. De forma predeterminada, QAT preselecciona un rango de fechas de 36 meses antes del inicio del período de pronóstico. Se muestra una tabla no editable y todos los productos relacionados con este programa de pronóstico, junto con sus datos de consumo ajustados si previamente ha ingresado esos datos; de lo contrario, verás <span style={{ backgroundColor: '#FFFF00' }}>celdas amarillas</span> indicando que no se han ingresado datos de consumo. Por defecto, los productos y el consumo se muestran en unidades de planificación. El usuario también puede expandir cada fila de la tabla para mostrar el consumo por región, si administra un programa multirregional.

     <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image242.png').default} alt="Figure 160: Top Table in Data Entry & Adjustments Screen" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 160: Top Table in Data Entry & Adjustments Screen</p>
     </div>

3. En la tabla superior, haga clic en una unidad de planificación para mostrar la tabla de datos detallada a continuación para esa unidad de planificación. La tabla de datos detallada tendrá una sección para cada región de su programa.
4. La tabla de datos detallada permite a los usuarios agregar, editar, ajustar o eliminar registros históricos de consumo.

   a. Si desea ingresar datos manualmente, ingrese el consumo histórico para cada región y mes en la fila "Consumo real".

   b. Si ha importado datos de QAT, verá su consumo histórico importado en la fila "Consumo real".

        <div style={{ margin: '20px 0' }}>
        <img src={require('@site/static/img/media/image243.png').default} alt="Figure 161: Manual Data Entry Table for Actual Consumption" style={{ width: '100%' }} />
        <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 161: Manual Data Entry Table for Actual Consumption</p>
        </div>

   c. Por defecto, se supone que los datos se ingresan en la Unidad de Planificación. Sin embargo, el usuario puede especificar la unidad apropiada para los datos detallados haciendo clic en el enlace "cambiar" debajo del nombre de la Unidad de planificación y, en la ventana emergente siguiente, eligiendo ingresar datos usando la unidad de planificación, las cantidades de las unidades de pronóstico (aplicando un factor de conversión administrado por el reino) u otra unidad ingresada por el usuario (y factor de conversión).

        <div style={{ margin: '20px 0' }}>
        <img src={require('@site/static/img/media/image244.png').default} alt="Figure 162: Button for Changing How Data is Manually Entered for Actual Consumption" style={{ width: '100%' }} />
        <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 162: Button for Changing How Data is Manually Entered for Actual Consumption</p>
        </div>

        <div style={{ margin: '20px 0' }}>
        <img src={require('@site/static/img/media/image245.png').default} alt="Figure 163: Pop-up for Choosing How Data is Entered" style={{ width: '100%' }} />
        <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 163: Pop-up for Choosing How Data is Entered</p>
        </div>

5. Una vez que un usuario ingresa datos en la fila "Consumo real" en la tabla de datos inferior, haga clic en "Enviar" para guardar las entradas y visualizarlas en el gráfico.

   a. Los usuarios también pueden copiar y pegar datos de Excel u otros formatos tabulares en la fila "Consumo real".

        <div style={{ margin: '20px 0' }}>
        <img src={require('@site/static/img/media/image246.png').default} alt="Figure 164: Graphical Display of Manually Entered Actual Consumption Data" style={{ width: '100%' }} />
        <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 164: Graphical Display of Manually Entered Actual Consumption Data</p>
        </div>

### A2. Ajustes

**Propósito:** Permitir a los usuarios preparar datos históricos de consumo antes de pasar a la pantalla 'Extrapolación'. El consumo real histórico puede ser cantidades vendidas, cantidades dispensadas al usuario o cantidades emitidas por las instalaciones de almacenamiento. En esta pantalla, los usuarios pueden ajustar los datos de consumo históricos que se ingresaron manualmente en esta pantalla o que se importaron desde un programa de plan de suministro QAT (si desea importar, primero vaya a la pantalla "Importar desde el plan de suministro QAT").

**Usando esta pantalla:**
1. Hay tres formas de ajustar los datos:

   un. **Ajuste para informes insuficientes:** El valor predeterminado es 100% de informes cada mes. El usuario puede cambiar esto al valor correcto. QAT calculará el consumo ajustado debido a la subregistro. El cálculo supone que las instalaciones que no reportaron ningún consumo tuvieron la misma tasa de consumo que las que sí lo hicieron.

   b. **Ajuste por desabastecimiento:** Para los datos importados, la cantidad de días de desabastecimiento se extrae del programa del plan de suministro QAT, si se recopilan datos. El valor predeterminado para los días de desabastecimiento es cero días (se supone que el producto siempre está en stock). El usuario puede cambiar esto al valor correcto y QAT calculará el consumo ajustado debido a desabastecimientos. El cálculo supone que los días que el producto estuvo agotado habrían tenido el mismo ritmo de consumo que el resto del tiempo que el producto estuvo en stock. El valor predeterminado para la cantidad de días en un mes se basa en los días del calendario, pero los usuarios pueden ajustar la cantidad de días utilizados para el cálculo del desabastecimiento en 'Actualizar configuración de versión'.

      **_Tasa de agotamiento = Desabastecimiento (días)/ (n.° de días en el mes)._**<br />
      **_Consumo ajustado = Consumo real / Tasa de informes / (1 - Tasa acumulada)_**

Por ejemplo, para un mes determinado, un producto tuvo un consumo de 1000 unidades, estuvo agotado durante 5 de los 31 días del mes y la tasa de informe fue del 98%:

      **_Tasa de agotamiento = 5 días agotados / 31 días en un mes = 16,1%:_**<br />
      **_Consumo ajustado = 1000 unidades / 98 % de informes / (1 - 16,1 %) = 1217 unidades._**

   c. **Ajustar para valores faltantes:** Haga clic en el botón verde 'Interpolar' en el centro derecho de la pantalla para buscar períodos donde el valor de consumo está en blanco y reemplazarlos con un valor interpolado. QAT interpola encontrando los valores más cercanos en cada lado (antes o después del espacio en blanco), calcula la línea recta entre ellos y usa esa fórmula de línea recta para calcular el valor de los espacios en blanco. Tenga en cuenta que QAT no interpolará para los meses en los que el consumo real sea cero. QAT solo interpolará si hay al menos un punto de datos antes y un punto de datos después de los valores en blanco. Matemáticamente:

      - Donde las x representan meses y las y representan el consumo real,

      - Donde los valores de datos conocidos son (x0, y0) y (x1, y1)

      - Donde los valores de datos desconocidos son (x, y)

      - La fórmula de la línea interpolada es:

  <div style={{ margin: '20px 0' }}>
     <img src={require('@site/static/img/media/image247.png').default} alt="Figure 162: Formula for Interpolation" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 162: Formula for Interpolation</p>

     <img src={require('@site/static/img/media/image248.png').default} alt="Figure 162: Formula for Interpolation" style={{ width: '100%' }} />
     <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 162: Formula for Interpolation</p>
     
     </div>

2. Utilice la tabla de Datos detallados para revisar el consumo ajustado.
3. Haga clic en "Enviar" para guardar los datos ingresados/ajustados. Una vez que se guarden los ajustes, el gráfico se actualizará (tenga en cuenta que es necesario hacer clic en Enviar para que esto suceda)
4. Repita los pasos 1 a 3 para cada unidad de planificación que deba ajustarse.

### A3. Extrapolación

**Propósito:** Permitir a los usuarios crear un pronóstico identificando tendencias y temporadas a partir de datos de series de tiempo históricas ingresados por el usuario en la pantalla "Ingreso y ajuste de datos". Hay varias opciones de extrapolación estadística disponibles y se describirán a continuación. Las extrapolaciones de los datos de consumo se realizan unidad de planificación por unidad de planificación.

**Usando esta pantalla:**

**1) Comenzando con la extrapolación:**

   - Antes de utilizar esta pantalla, asegúrese de haber completado la pantalla "Ingreso y ajuste de datos" para cada unidad de planificación y región que desee extrapolar.

   - Utilice los filtros en la parte superior de esta pantalla para seleccionar la unidad de planificación, la región a extrapolar y el rango de fechas para utilizar los datos históricos.

   - El usuario puede seleccionar uno o varios de los métodos de extrapolación disponibles en QAT, según corresponda al patrón general de consumo y a los datos disponibles, como se explicará más adelante. Consulte las secciones 2 a 4 a continuación para obtener una explicación de los métodos de extrapolación y cómo elegir mejor los métodos para su pronóstico.

   - Tenga en cuenta que los cambios en esta pantalla son opcionales: QAT aplica automáticamente los parámetros de extrapolación predeterminados a todas las unidades de planificación después de que se haya completado la pantalla Ajustes. Luego, el usuario realiza la selección final del pronóstico en la [pantalla Comparar y Seleccionar] (12-módulo-de-pronóstico-informes-y-salidas.md#9a-compare-and-select).

**2) Métodos de extrapolación disponibles en QAT**

   Los métodos de pronóstico en QAT están organizados de simples a sofisticados.

   a. **Promedio móvil:** El promedio móvil es un promedio que se mueve a lo largo del tiempo, eliminando datos más antiguos a medida que incorpora datos más nuevos. Para que QAT calcule el promedio móvil, ingrese el número de meses pasados ​​que le gustaría usar en el cálculo del promedio. El usuario puede seleccionar cualquier número entero positivo para este campo. Introducir 5, por ejemplo, significaría que la proyección para el siguiente mes de la serie sería el promedio del consumo de los cinco meses anteriores. Este método es más útil para pronósticos a corto plazo y es sensible a las tendencias. No es apropiado para datos estacionales.

b. **Semipromedios:** Estimaciones de tendencias semipromedias basadas en dos mitades de una serie. QAT divide los datos reales en dos partes iguales (mitades) y la media aritmética de los valores de cada parte (mitad) se calcula como los valores "y" de dos puntos en una línea. La pendiente de la línea de tendencia está determinada por la diferencia entre estos valores "y" a lo largo del tiempo, según lo definido por la diferencia de los puntos medios de las dos mitades de la serie, o valores "x", de los puntos. Este método es sensible a las tendencias y útil para pronósticos a corto y mediano plazo, pero no es apropiado para datos estacionales.

   do. **Regresión lineal:** La regresión lineal modela la relación entre dos variables ajustando una ecuación lineal a los datos observados. Intervalo de confianza: entre 0 % y 100 % (exclusivo); por ejemplo, un nivel de confianza del 90 % indica que el 90 % de los posibles puntos futuros caerán dentro de este radio de la predicción representada por la línea de regresión. Este método no es apropiado para datos estacionales.

   d. **Suavizado triple exponencial (Holt-Winters):** En estadística, se utilizan diferentes tipos de suavizado para filtrar el ruido de modo que podamos ver patrones en un conjunto de datos de series temporales con mayor claridad. El suavizado exponencial utiliza datos más antiguos con pesos que disminuyen exponencialmente a lo largo del tiempo. Los parámetros de suavizado en el suavizado exponencial se establecen entre 0 y 1, donde los valores cercanos a 1 favorecen los valores recientes y los valores cercanos a 0 favorecen los valores más antiguos. Los usuarios que utilizan suavizado exponencial triple pueden elegir cuatro parámetros:

      - alfa, se aplica al nivel o línea base del conjunto de datos. Los valores alfa más altos dan más peso a los datos más recientes. El parámetro predeterminado QAT para alfa es 0,2

      - beta, determina con qué intensidad se deben valorar las tendencias recientes en comparación con las tendencias más antiguas. El parámetro predeterminado QAT para beta es 0,2.

      - gamma, refleja el componente estacional del pronóstico. Estacional generalmente se refiere a patrones que se repiten dentro de un año. Cuanto mayor sea la gamma, más ponderación se aplicará al componente estacional más reciente de los datos. El parámetro predeterminado QAT para gamma es 0,2.

      - Intervalo de confianza: entre 0% y 100% (exclusivo), p.e. El nivel de confianza del 90% indica que el 90% de los puntos futuros estarán dentro de este radio de predicción. El intervalo de confianza predeterminado de QAT es del 85%.

      QAT solo calculará pronósticos de TES para conjuntos de datos con 24 o más meses de datos.

   mi. **ARIMA:** ARIMA o media móvil integrada autorregresiva permite integrar dos modelos estadísticos diseñados para series temporales estacionarias y aplicarlas a series temporales no estacionarias, es decir, series temporales que tienen tendencias o estaciones. A menudo se aplica a pronósticos a corto plazo. "Auto-regresivo" significa que cada punto de la regresión está influenciado por sus valores anteriores y "promedio móvil" implica que cada punto es un promedio, una combinación lineal de uno o más puntos adyacentes. Tanto la autorregresión como la media móvil se "integran" juntas para ajustarse al mejor modelo para la serie mediante la diferenciación o, literalmente, utilizando la diferencia entre puntos de una serie temporal para el análisis en lugar de los valores brutos. Los modelos ARIMA tienen tres parámetros:

      - p o AR (orden de retraso): el número de observaciones de retraso en el modelo. El parámetro predeterminado QAT para p es 0.

      - d o I (grado de diferenciación): el número de veces que se diferencian las observaciones brutas. Este valor normalmente es 1 (si hay tendencia) o 0 (sin tendencia). Otros valores más altos son posibles pero no esperados. El parámetro predeterminado QAT para d es 1.

      - q o MA (orden de la media móvil): el tamaño de la ventana de media móvil o el número de observaciones diferenciadas que se van a promediar. El parámetro predeterminado QAT para q es 1.

      - Intervalo de confianza: entre 0% y 100% (exclusivo), p.e. El nivel de confianza del 90% indica que el 90% de los puntos futuros estarán dentro de este radio de predicción. El intervalo de confianza predeterminado de QAT es del 85%.

El cálculo de ARIMA puede ser estacional o no estacional, según la elección del usuario y la comprensión de sus datos y expectativas sobre si el consumo de un producto en particular está sujeto o no a influencias estacionales. La selección predeterminada de QAT es para ARIMA estacional. QAT solo calculará pronósticos ARIMA para conjuntos de datos con 13 o más meses de datos.

**3) ¿Qué método de extrapolación debo utilizar?**

   A continuación se presentan algunas consideraciones para seleccionar un método de pronóstico. Los métodos de pronóstico en QAT están organizados de simples a sofisticados. En general,

   - Los modelos más sofisticados son más sensibles a los problemas en los datos.
   - Si tiene datos más deficientes (puntos de datos faltantes, tasas de informes variables, &lt;12 meses de datos), es probable que los métodos de pronóstico más simples, como los promedios móviles, sean más útiles.

   La elección del método de extrapolación depende del patrón esperado en los datos. Algunos patrones típicos incluyen:

   - Estacionario, donde el rango de valores observados a lo largo del tiempo ronda un promedio. Los modelos aplicados a dichos conjuntos de datos pueden incluir:

     - Media móvil
     - ARIMA (fuera de temporada)

   - Tendencia sin componente estacional, donde los valores observados tienen una tendencia creciente o decreciente. Los modelos aplicados a dichos conjuntos de datos pueden incluir:

     - Semipromedios
     - Regresión lineal

   - Tendencia y estacional, donde los valores observados en un conjunto de datos tienen componentes tanto de tendencia como estacionales. Los modelos aplicados a dichos conjuntos de datos pueden incluir:

     - ARIMA (estacional)
     - Suavizado Triple Exponencial (Holt-Winters)

   - Estacional sin tendencia, donde los valores observados tienen componente estacional pero no tendencia. Los modelos aplicados a dichos conjuntos de datos pueden incluir:

     - Suavizado Triple Exponencial (Holt-Winters)

   Los modelos aquí sugeridos no son exhaustivos ni excluyentes. QAT permite al usuario aplicar una variedad de métodos de extrapolación y luego compararlos utilizando métricas de error de pronóstico o de mejor ajuste.
   El segundo paso es considerar si se espera que los valores de pronóstico reflejen fielmente los patrones históricos en sus datos y, por lo tanto, si utilizará las métricas de error para informar su selección. Al elegir un resultado (ya sea ignorando la métrica de error o no), será importante documentar su justificación para hacerlo para informar las discusiones o revisiones de su pronóstico y para ayudar a los futuros pronosticadores a respaldar sus decisiones.

**4) ¿Cómo interpreto los errores? <sup>1</sup>**

   QAT calcula automáticamente las métricas de error de pronóstico utilizando varios métodos. Estos incluyen:

   - **MAPE (Error porcentual absoluto medio):** se puede interpretar como la diferencia porcentual promedio entre las predicciones y sus objetivos previstos en el conjunto de datos. Por ejemplo, si MAPE es del 15%, entonces sus predicciones están en promedio un 15% lejos de los valores reales.

     - MAPE = [(1/Nº de observaciones) * ∑ (|(real – pronóstico)|/real)] x 100

   - **WAPE (Error porcentual absoluto ponderado):** WAPE es una métrica apropiada cuando el conjunto de datos utilizado tiene valores bajos o intermitentes. Un porcentaje WAPE de 5 significa que el pronóstico estuvo equivocado en un 5% en todo el conjunto de datos durante un determinado período de evaluación. Dependiendo del caso de uso, se recomienda elegir un modelo que proporcione el menor valor WAPE.

     - WAPE = [ (∑n | (real – pronóstico) | / ∑ n (actuales)] x 100

   - **RMSE (Error cuadrático medio):** El RMSE se puede interpretar como el error promedio que tienen las predicciones del modelo en comparación con las reales, con un peso adicional agregado a los errores de predicción más grandes. Generalmente, cuanto más cerca esté el RMSE de cero, más preciso será el modelo.

     - RMSE = sqrt [∑n (real – pronóstico)2] / No. de observaciones

   - **MSE (error cuadrático medio):** MSE es la media agregada de la diferencia al cuadrado entre los datos reales y las predicciones. Debido a esta cuadratura se resaltan grandes errores. MSE es útil cuando se trabaja en modelos donde se deben minimizar grandes errores ocasionales. Generalmente, cuanto más cerca esté de 0, más preciso será el modelo.

- MSE = ∑ n [(real – pronóstico)2] / No. de Observaciones)

   - **R2 (la correlación al cuadrado entre la variable dependiente y los valores ajustados):** R2 = 1 – [suma de regresión al cuadrado (SSR) / suma de cuadrados total (SST)], donde la suma al cuadrado de los residuos de la regresión (SSR) es la suma de sus residuos al cuadrado, y la suma total de cuadrados (SST) es la suma de la distancia entre los datos y la media, todo al cuadrado. El valor R2 es siempre un número entre 0 y 1. R2 es una medida del ajuste de una línea de regresión a una serie de observaciones históricas con valores más cercanos a 1 que indican una correspondencia más fuerte entre los valores reales y predichos (modelo de regresión). No es una medida de error y no debe usarse por sí sola para evaluar la idoneidad de una predicción, sino en combinación con otras métricas de error y el conocimiento del programa por parte del usuario.

     - R2 = 1 – [regresión suma de cuadrados (SSR) / suma de cuadrados total (SST)]

   Aparte de R2, cuanto menor es la puntuación, más se ajusta el resultado del método de pronóstico a los datos históricos. En los modelos en los que se espera que los patrones históricos en un conjunto de datos se reflejen en los valores futuros, se podría usar un valor de error bajo para ayudar a seleccionar un método de extrapolación preferido, y QAT resaltará estos mejores ajustes en una tabla. Sin embargo, si se anticipan cambios sustanciales que no se ajustan a los datos históricos, la extrapolación que mejor se ajusta puede no ser el pronóstico más apropiado a seleccionar. 
   
   Para hacer la mejor selección entre los métodos de extrapolación para su propósito, antes de revisar las métricas de error, lo más importante es primero comprender qué método de extrapolación es más apropiado para el patrón esperado en los datos.

<hr />
<p style={{ fontSize: '0.85em' }}><sup>1</sup> <a href="https://stephenallwright.com/mse-vs-mae/" target="_blank">https://stephenallwright.com/mse-vs-mae/</a>; <a href="https://www.obviously.ai/post/introducing-wape" target="_blank">https://www.obviously.ai/post/introducing-wape</a></p>

**5) Optimización de los parámetros de pronóstico de TES y ARIMA**

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image249.png').default} alt="Figure 165: Optimize TES & ARIMA Link" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 165: Optimize TES & ARIMA Link</p>
  </div>

Como se describe en [Extrapolación](#extrapolación), QAT ofrece a los usuarios múltiples opciones de extrapolación, incluidos TES y ARIMA estacional y no estacional. Los usuarios son libres de utilizar los valores predeterminados de QAT o ingresar parámetros de pronóstico alternativos con la intención de reducir las métricas de error, aumentando así la correspondencia entre los resultados del método de pronóstico y los puntos de datos reales en el período de datos históricos. Si el usuario está trabajando en línea, QAT puede optimizar los parámetros TES y ARIMA iterando, calculando el RMSE de cada iteración y seleccionando los parámetros que producen el RMSE más bajo.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image250.png').default} alt="Figure 166: Optimizing TES & ARIMA Pop-up" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 166: Optimizing TES & ARIMA Pop-up</p>
  </div>

Para TES, QAT calcula 125 iteraciones del pronóstico, probando cada uno de los parámetros alfa, beta y gamma en combinación con los siguientes valores: 0, 0,2, 0,4, 0,8 y 1. Cualquiera de las 125 combinaciones para un producto determinado que produzca el resultado con el RMSE más bajo se mostrará en la pantalla de extrapolación.

Para ARIMA o ARIMA estacional, QAT calcula 24 iteraciones del pronóstico, probando cada uno de los parámetros p, d y q en combinación, utilizando los siguientes valores:

- p: 0 o 1
- d: 0, 1 o 2
- q: 0, 1, 2 o 3

Cualquiera de las 24 combinaciones para un producto determinado que produzca el resultado ARIMA con el RMSE más bajo se mostrará en la pantalla de extrapolación.

**Nota:** **Las estadísticas no son mágicas. El supuesto subyacente de todos estos métodos de extrapolación es que las tendencias y patrones de los datos históricos continuarán en el futuro. Por lo tanto, las métricas de bajo error no necesariamente garantizan un mejor pronóstico.**

**6) Extrapolación masiva**

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image251.png').default} alt="Figure 167: Bulk Extrapolation Link" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 167: Bulk Extrapolation Link</p>
  </div>

En la pantalla de extrapolación QAT, el usuario puede comparar los resultados de los distintos métodos de extrapolación tanto gráficamente como en una tabla de resultados, producto por producto. Esto permite al usuario anular la selección de los métodos de extrapolación que considere que no se aplican a un producto determinado para limitar las opciones en la [pantalla Comparar y seleccionar] (12-módulo-de-pronóstico-informes-y-salidas.md#9a-compare-and-select) solo a aquellas que el usuario elige mostrar.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image252.png').default} alt="Figure 168: Bulk Extrapolation Pop-up" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 168: Bulk Extrapolation Pop-up</p>
  </div>

Si el usuario prefiere enviar todos los resultados de los métodos de extrapolación disponibles para más de un producto directamente a la pantalla Comparar y Seleccionar, el usuario puede seleccionar la extrapolación masiva. Desde la ventana emergente Extrapolación masiva, el usuario puede seleccionar un rango de fechas histórico desde el cual extrapolar el pronóstico (solo un rango de fechas por extrapolación masiva), si desea aplicar estacionalidad a su cálculo ARIMA, qué unidades de planificación y regiones (si se utilizan datos regionales) incluir en la extrapolación masiva y si optimizar o no los parámetros ARIMA y TES para la extrapolación.

Después de ejecutar la extrapolación masiva, todos los resultados se pueden ver en la pantalla de extrapolación, la pantalla de comparación y selección y el cuadro desplegable de la pantalla de resumen de pronóstico (regional). El usuario puede seleccionar su método de extrapolación preferido desde la pantalla Comparar y seleccionar o la pantalla Resumen de pronóstico (regional).

La extrapolación masiva en QAT es particularmente útil cuando se trabaja con un gran conjunto de productos para los cuales se dispone de datos de consumo oportunos, completos y precisos durante 12 meses o más.

## B. Pronósticos de árboles

Los usuarios pueden realizar un pronóstico basado en árboles si los datos necesarios para un pronóstico basado en el consumo no están disponibles o no son útiles para predecir el consumo futuro. Los pronósticos en árbol se adaptan de manera flexible a todos los demás métodos de pronóstico, como morbilidad, servicios y métodos demográficos. Los usuarios pueden especificar cambios a lo largo del tiempo en un árbol, ya sea especificando directamente la tasa de cambio o extrapolando a partir de datos pasados.

### B1. Construyendo un árbol

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image253.png').default} alt="Figure 169: Manage Tree – Tree List (Right click to access actions)" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 169: Manage Tree – Tree List (Right click to access actions)</p>
  </div>

**Propósito:** Permitir a los usuarios:
1. Ver una lista de sus árboles existentes.
2. Edite un árbol existente haciendo clic en cualquier fila.
3. Haga clic derecho en una fila para
   - **Duplicar árboles existentes:** Los usuarios también pueden duplicar un árbol existente en otro programa. Los usuarios deben tener acceso a ambos programas y haberlos descargado en su computadora local para duplicarlos.
   - **Eliminar árboles existentes:** Habrá una pantalla de confirmación, pero esta acción es irreversible a partir de entonces. Sin embargo, si elimina accidentalmente un árbol, puede volver a descargar un programa si se ha realizado una copia de seguridad del árbol eliminado en el servidor.
   - **Tabla de árbol:** Esto permite al usuario editar el árbol seleccionado en la pantalla [Tabla de árbol](#tree-table)
4. Agregue un nuevo árbol a un programa descargado haciendo clic en el menú desplegable "Crear o Seleccionar" en la esquina superior derecha de la pantalla. Se pueden construir nuevos árboles:
   - manualmente - seleccione '+ Dibuja tu propio árbol'
   - desde una plantilla de árbol - seleccione el nombre de la plantilla deseada. Si un usuario desea ver una plantilla de árbol agregada a QAT que no existe y que beneficiaría a la comunidad QAT, puede enviar una solicitud de cambio al [Sistema de asistencia técnica de emisión de tickets de QAT] (05-getting-started.md#qat-helpdesk-and-tickets).

*Nota: [Los espectadores de pronósticos](15-annex-3-user-role-matrix.md) pueden ver cualquier árbol que se haya subido al servidor y al que tengan acceso; sin embargo, solo los usuarios/administradores de Forecast podrán crear y editar/actualizar árboles.*

Acciones de nodo:
- <img src={require('@site/static/img/media/image254.png').default} alt="Delete" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Eliminar:** Elimina el nodo seleccionado y todos sus hijos.
- <img src={require('@site/static/img/media/image255.png').default} alt="Copy/Move" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Copiar/Mover:** Copia o mueve el nodo seleccionado y todos los hijos debajo del nodo. El usuario puede seleccionar el destino.
- <img src={require('@site/static/img/media/image256.png').default} alt="Add Branch Template" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Agregar plantilla de rama:** Agrega una plantilla de árbol como una rama debajo del nodo elegido.
- <img src={require('@site/static/img/media/image257.png').default} alt="Add" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Agregar:** Agrega un hijo al nodo seleccionado.
- <img src={require('@site/static/img/media/image258.png').default} alt="Collapse/Expand" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '4px' }} /> **Contraer/Expandir:** Contraer/Expandir el nodo actual y todos sus hijos. Los usuarios también pueden pasar el cursor sobre el punto para elegir qué nodo expandir y hacer clic una vez para expandir ese nodo y todos sus hijos. Además, hay una casilla de verificación "Contraer árbol" en la parte superior de la pantalla Construir árboles que colapsará todos los nodos excepto el nodo superior.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image260.png').default} alt="Figure 170: Example of a Collapsed Forecasting Tree" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 170: Example of a Collapsed Forecasting Tree</p>
  </div>

Tipos de nodos:

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Node Type</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Value</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Potential Children</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Advanced Functionality</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aggregation ∑</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sum of children nodes.</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>∑ or Number</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Number #</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Defined at this node</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>% or <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>⇅, <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle' }} />, <img src={require('@site/static/img/media/image264.png').default} alt="Extrapolation" style={{ width: '16px', verticalAlign: 'middle' }} />, <img src={require('@site/static/img/media/image270.png').default} alt="Seasonality" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Percentage %</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Percentage of the parent.</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>% or <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>⇅, <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Funnel <img src={require('@site/static/img/media/image266.png').default} alt="Funnel" style={{ width: '16px', verticalAlign: 'middle' }} /></strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sum of linked source nodes (<img src={require('@site/static/img/media/image262.png').default} alt="Link" style={{ width: '16px', verticalAlign: 'middle' }} />)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>% or <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Forecasting Unit <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '16px', verticalAlign: 'middle' }} /></strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Percentage of the parent and forecasting unit parameters. Can be two different use types:
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px', margin: '4px 0' }}>
          <li><img src={require('@site/static/img/media/image268.png').default} alt="Continuous" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /><strong>Continuous</strong></li>
          <li><img src={require('@site/static/img/media/image269.png').default} alt="Discrete" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /><strong>Discrete</strong></li>
        </ul>
      </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><img src={require('@site/static/img/media/image261.png').default} alt="PU" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>⇅, <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Planning Unit <img src={require('@site/static/img/media/image261.png').default} alt="PU" style={{ width: '16px', verticalAlign: 'middle' }} /></strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Percentage of the parent and planning unit parameters.</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>⇅, <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle' }} /></td>
    </tr>
  </tbody>
</table>

Atributos de nodo:
- **∑ Atributos específicos del nodo de agregación:** ninguno: se define por la suma de sus hijos. Por ejemplo, si hay dos nodos secundarios debajo del nodo de Agregación iguales a 50 y 100, QAT agregaría automáticamente estos números para definir el nodo de Agregación: 50 (secundario) + 100 (secundario) = 150 (padre de Agregación).
- **# Número de atributos específicos del nodo:**
  - **Unidad de nodo:** menú desplegable que consta de paciente, cliente, cliente, personas o unidad
  - **Mes:** elija el mes/año desde el que se informaron estos datos. Por ejemplo, si un usuario desea definir un nodo numérico como Población del país y los datos son de enero de 2020, el mes del nodo debe ser enero de 2020.
  - **Valor de nodo:** Defina el valor numérico para este nodo. Por ejemplo, si la población del país en enero de 2020 es 500 000, el valor del nodo debe ser 500 000. Si este valor cambia con el tiempo, los usuarios pueden utilizar la pestaña [Modelado/Transferencia](#d-modelingtransfers) para especificar el cambio.
- **% Porcentaje de atributos específicos del nodo:**
  - **Unidad de nodo:** menú desplegable que consta de paciente, cliente, cliente, personas o unidad
  - **Mes:** elija el mes/año desde el que se informaron estos datos. Normalmente, este será el mes/año de inicio del pronóstico.
  - **Porcentaje de padre:** define el porcentaje del nodo padre. Por ejemplo, si la mitad del nodo del número de padres, Población del país, son mujeres, el porcentaje de padres sería del 50 %.
  - **Valor principal por mes:** no editable y proporcionado solo como referencia.
  - **Valor de nodo:** calculado automáticamente por QAT en función del porcentaje definido por el usuario y el valor principal. Este campo no es editable.
- <img src={require('@site/static/img/media/image279.png').default} alt="FU" style={{ width: '18px', verticalAlign: 'middle', marginRight: '4px' }} /> **Atributos específicos del nodo de la unidad de pronóstico:**
  - **Mes:** elija el mes/año desde el que se informaron estos datos. Normalmente, este será el mes/año de inicio del pronóstico.
  - **Porcentaje de padre:** define el porcentaje del nodo padre.
  - **Valor principal por mes:** no editable y proporcionado solo como referencia.
  - **Porcentaje del valor principal del mes:** no editable y proporcionado únicamente como referencia.
  - **Categoría de seguimiento:** menú desplegable que se puede utilizar para ayudar a reducir las unidades de pronóstico, pero se completará automáticamente una vez que se elija la unidad de pronóstico.
  - **Copiar desde plantilla:** funcionalidad avanzada, en la que un usuario puede utilizar una [Plantilla de uso](#c-usage-templates) para ayudar a construir un árbol de manera eficiente. Este menú desplegable no es obligatorio.
  - **Unidad de pronóstico:** menú desplegable de todas las unidades de pronóstico disponibles en el programa de usuario. Si una unidad de pronóstico no está disponible en el menú desplegable, el usuario primero debe agregarla a la pantalla [Actualizar unidades de planificación] (10-forecasting-module-program-data.md#d-planning-units).
  - **Unidad de planificación:** menú desplegable filtrado según la unidad de previsión elegida. Si solo hay una unidad de planificación asociada con la unidad de pronóstico, este campo se completará automáticamente.
  - **Tipo de Uso:**
    - <img src={require('@site/static/img/media/image269.png').default} alt="Discrete" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /> **Discreto:** Cada _______ [unidad de nodo principal] requiere _________ [unidad de medida de pronóstico] __________ veces por [día/semana/mes/año] durante _____________ [día/semana/mes/año]
      - **Calcular (Todo en el primer mes/Mes a mes):** Si se selecciona "Todo en el primer mes", QAT

adelantar la cantidad total prevista al mes de inicio del nodo. Si se selecciona "Mes a mes", QAT calculará la cantidad discretamente mes a mes (consulte [Técnicas avanzadas](#f-advanced-techniques) para obtener más información).
      - **Uso único (Sí/No):** permite al usuario determinar si esta unidad de pronóstico se utiliza durante un período de tiempo específico. Si se selecciona “sí”, no es necesario el período de tiempo para los cálculos discretos.
    - <img src={require('@site/static/img/media/image268.png').default} alt="Continuous" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /> **Continuo:** Cada _______ [unidad de nodo principal] requiere _________ [unidad de medida de pronóstico] cada _______ [día/semana/mes/año]
  - **Retraso en meses:** se utiliza para detallar si una unidad de pronóstico está retrasada o tiene un uso del producto por fases. Consulte [Técnicas avanzadas](#f-advanced-techniques) para obtener más información.
- <img src={require('@site/static/img/media/image261.png').default} alt="PU" style={{ width: '18px', verticalAlign: 'middle', marginRight: '4px' }} /> **Atributos específicos del nodo de la Unidad de planificación:** el nodo se crea automáticamente cuando la unidad de previsión se agrega a un árbol. La mayoría de los atributos en la pantalla Agregar/Editar nodo no son editables y solo sirven como referencia; sin embargo, algunos se pueden actualizar según circunstancias específicas:
  - **Mes:** elija el mes/año desde el que se informaron estos datos. Normalmente, este será el mes/año de inicio del pronóstico.
  - **Anulación de cálculo:** los usuarios pueden optar por utilizar el cálculo automático de QAT para el número de unidades de planificación haciendo clic en "Sí" o ingresar manualmente un valor haciendo clic en "No". Consulte [Técnicas avanzadas](#f-advanced-techniques) para obtener más información.

**Usando esta pantalla:**
- Primero se debe descargar un programa de pronóstico para construir o editar un árbol.
- Antes de construir y editar un árbol, primero agregue las unidades de planificación del programa de pronóstico en la pantalla "Actualizar unidades de planificación".
- **¿Construir un árbol similar a un árbol existente?**
  - Misma estructura, números diferentes: cree solo un árbol y use la función [escenario](#c-scenarios).
  - Estructura ligeramente diferente: duplique un árbol existente haciendo clic derecho en una fila y seleccionando "Duplicar árbol". Nota: Si desea duplicar un árbol existente de otro programa, debe tener ambos programas descargados, luego puede duplicar de un programa a otro.
- **¿Quieres comenzar desde una plantilla?** Consulta la sección [Plantilla de árbol](#a-tree-templates)
- Los usuarios también pueden eliminar árboles haciendo clic derecho en una fila y seleccionando "Eliminar árbol".

### a. Tipos y funciones de nodos

Construyendo el árbol: El árbol de pronóstico se construye de arriba hacia abajo, utilizando diferentes tipos de "nodos". Consulte los tipos de nodos y las acciones de los nodos a continuación. Cada árbol de pronóstico debe comenzar con un nodo Agregación o un nodo Número e incluir uno o más nodos Unidad de planificación, que forman el resultado del pronóstico.

  - *Porcentaje de Padre:* define el porcentaje del nodo padre.

  - *Valor principal por mes:* no editable y proporcionado solo como referencia.

  - *Porcentaje del valor principal del mes:* no editable y proporcionado únicamente como referencia.

  - *Categoría de rastreador:* menú desplegable que se puede utilizar para ayudar a reducir las unidades de pronóstico, pero se completará automáticamente una vez que se elija la unidad de pronóstico.

  - *Copiar desde plantilla:* funcionalidad avanzada, en la que un usuario puede utilizar una plantilla de uso para ayudar a construir un árbol de manera eficiente. Este menú desplegable no es obligatorio.

  - *Unidad de pronóstico:* menú desplegable de todas las unidades de pronóstico disponibles en el programa de usuario. Si una unidad de pronóstico no está disponible en el menú desplegable, el usuario primero debe agregarla a la pantalla "Actualizar unidad de planificación".

  - *Unidad de planificación:* menú desplegable filtrado según la unidad de previsión elegida. Si solo hay una unidad de planificación asociada con la unidad de pronóstico, este campo se completará automáticamente.

  - *Tipo de Uso:*

    - **Discreto:** Cada _______ [unidad de nodo principal] requiere _________ [unidad de medida de pronóstico] __________ veces por [día/semana/mes/año] durante _____________ [día/semana/mes/año]

      - *Calcular (Todo en el primer mes/Mes a mes):* Si se selecciona "Todo en el primer mes", QAT cargará por adelantado la cantidad total pronosticada al mes de inicio del nodo. Si selecciona "Mes a mes", QAT calculará la cantidad discretamente mes a mes (consulte Técnicas avanzadas para obtener más información).

      - *Uso único (Sí/No):* permite al usuario determinar si esta unidad de pronóstico se utiliza durante un período de tiempo específico. Si se selecciona “sí”, no es necesario el período de tiempo para los cálculos discretos.

    - **Continuo:** Cada _______ [unidad de nodo principal] requiere _________ [unidad de medida de pronóstico] cada _______ [día/semana/mes/año]

      - *Retraso en meses:* se utiliza para detallar si una unidad de pronóstico está retrasada o tiene un uso del producto por fases. Consulte Técnicas avanzadas para obtener más información.

- **Atributos específicos del nodo Unidad de planificación:** el nodo se crea automáticamente cuando la unidad de previsión se agrega a un árbol. La mayoría de los atributos en la pantalla Agregar/Editar nodo no son editables y solo sirven como referencia; sin embargo, algunos se pueden actualizar según circunstancias específicas:

  - *Mes:* elija el mes/año desde el que se informaron estos datos. Normalmente, este será el mes/año de inicio del pronóstico.

  - *Anulación de cálculo:* los usuarios pueden optar por utilizar el cálculo automático de QAT para el número de unidades de planificación haciendo clic en "Sí" o ingresar manualmente un valor haciendo clic en "No". Consulte Técnicas avanzadas para obtener más información.


  - *Porcentaje de Padre:* define el porcentaje del nodo padre.

  - *Valor principal por mes:* no editable y proporcionado solo como referencia.

  - *Porcentaje del valor principal del mes:* no editable y proporcionado únicamente como referencia.

- *Categoría de rastreador:* menú desplegable que se puede utilizar para ayudar a reducir las unidades de pronóstico, pero se completará automáticamente una vez que se elija la unidad de pronóstico.

  - *Copiar desde plantilla:* funcionalidad avanzada, en la que un usuario puede utilizar una plantilla de uso para ayudar a construir un árbol de manera eficiente. Este menú desplegable no es obligatorio.

  - *Unidad de pronóstico:* menú desplegable de todas las unidades de pronóstico disponibles en el programa de usuario. Si una unidad de pronóstico no está disponible en el menú desplegable, el usuario primero debe agregarla a la pantalla "Actualizar unidad de planificación".

  - *Unidad de planificación:* menú desplegable filtrado según la unidad de previsión elegida. Si solo hay una unidad de planificación asociada con la unidad de pronóstico, este campo se completará automáticamente.

  - *Tipo de Uso:*

    - **Discreto:** Cada _______ [unidad de nodo principal] requiere _________ [unidad de medida de pronóstico] __________ veces por [día/semana/mes/año] durante _____________ [día/semana/mes/año]

      - *Calcular (Todo en el primer mes/Mes a mes):* Si se selecciona "Todo en el primer mes", QAT cargará por adelantado la cantidad total pronosticada al mes de inicio del nodo. Si selecciona "Mes a mes", QAT calculará la cantidad discretamente mes a mes (consulte Técnicas avanzadas para obtener más información).

      - *Uso único (Sí/No):* permite al usuario determinar si esta unidad de pronóstico se utiliza durante un período de tiempo específico. Si se selecciona “sí”, no es necesario el período de tiempo para los cálculos discretos.

    - **Continuo:** Cada _______ [unidad de nodo principal] requiere _________ [unidad de medida de pronóstico] cada _______ [día/semana/mes/año]

      - *Retraso en meses:* se utiliza para detallar si una unidad de pronóstico está retrasada o tiene un uso del producto por fases. Consulte Técnicas avanzadas para obtener más información.

- **Atributos específicos del nodo Unidad de planificación:** el nodo se crea automáticamente cuando la unidad de previsión se agrega a un árbol. La mayoría de los atributos en la pantalla Agregar/Editar nodo no son editables y solo sirven como referencia; sin embargo, algunos se pueden actualizar según circunstancias específicas:

  - *Mes:* elija el mes/año desde el que se informaron estos datos. Normalmente, este será el mes/año de inicio del pronóstico.

  - *Anulación de cálculo:* los usuarios pueden optar por utilizar el cálculo automático de QAT para el número de unidades de planificación haciendo clic en "Sí" o ingresar manualmente un valor haciendo clic en "No". Consulte Técnicas avanzadas para obtener más información.

### Cambios con el tiempo

Si bien la estructura de árbol permanece constante a lo largo del tiempo, los porcentajes y valores de los nodos pueden cambiar con el tiempo. Utilice el menú desplegable de fechas para ver el árbol en cualquier mes. Las tres funcionalidades siguientes están disponibles en cada nodo y permiten al usuario controlar cómo los nodos cambian con el tiempo:

- **⇅ Modelado:** Permite al usuario especificar la tasa exacta de cambio
- <img src={require('@site/static/img/media/image262.png').default} alt="Transfer" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /> **Transferencia:** Permite a los usuarios vincular dos nodos entre sí, de modo que la disminución del nodo de origen está vinculada al aumento del nodo de destino. Útil para transiciones.
- <img src={require('@site/static/img/media/image264.png').default} alt="Extrapolation" style={{ width: '16px', verticalAlign: 'middle', marginRight: '4px' }} /> **Extrapolación:** Permite a los usuarios utilizar datos históricos para extrapolar cambios futuros.

Para obtener más información y ejemplos específicos de cambios a lo largo del tiempo, consulte [Modelado/Transferencias](#d-modelingtransfers).

### b. Conceptos básicos de construcción de árboles

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image276.png').default} alt="Figure 171: Simple Forecasting Tree Example" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 171: Simple Forecasting Tree Example</p>
  </div>

Los árboles de pronóstico se construyen de arriba hacia abajo utilizando diferentes tipos de [nodos] (#a-node-types--functions). Cada árbol de pronóstico debe comenzar con un nodo Agregación o un nodo Número e incluir uno o más nodos Unidad de planificación. Los nodos de la Unidad de planificación deben ser hijos de un nodo de la Unidad de previsión. Por lo tanto, un usuario debe tener al menos tres niveles de nodos (nodo Agregación/Número, nodo Unidad de previsión y nodo Unidad de planificación) para producir un resultado de previsión.

**Pasos para construir un árbol manual:**
<ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
  <li style={{ marginBottom: '15px' }}>Download a program</li>
  <li style={{ marginBottom: '15px' }}>Navigate to the Forecasting Tree → Manage Tree screen</li>
  <li style={{ marginBottom: '15px' }}>In the top-right of the screen, click the blue ‘Create or Select’ dropdown and select ‘+ Draw your own tree’ from the dropdown</li>
  <li style={{ marginBottom: '15px' }}>
    Define the tree details, such as the forecasting method (demographic, morbidity, or services), tree name, and region.
    <ol type="a" style={{ paddingLeft: '20px', marginTop: '10px', listStyleType: 'lower-alpha' }}>
      <li style={{ marginBottom: '10px' }}>Once created, users can edit tree details by clicking on the <img src={require('@site/static/img/media/image277.png').default} alt="gear" style={{ width: '16px', verticalAlign: 'middle' }} /> icon next to the Tree dropdown.</li>
      <li>(optional) By clicking on the <img src={require('@site/static/img/media/image277.png').default} alt="gear" style={{ width: '16px', verticalAlign: 'middle' }} /> icon next to the Scenario dropdown, users can add, edit, and delete tree scenarios. For more information, see <a href="#c-scenarios">Scenarios</a> in the section below.</li>
    </ol>
  </li>
  <li style={{ marginBottom: '15px' }}>By default, QAT will begin with a number node with a value of zero on Level 0. Click on this default node to edit/update the node.</li>
  <li style={{ marginBottom: '15px' }}>
    Agregue un nuevo nodo (secundario) debajo del nodo principal haciendo clic en <img src={require('@site/static/img/media/image257.png').default} alt="Add" style={{ width: '16px', verticalAlign: 'middle' }} /> y eligiendo el tipo de nodo apropiado. Según el padre, QAT filtrará automáticamente qué <a href="#a-node-types--functions">tipos de nodos secundarios</a> están disponibles. QAT agregará el nuevo nodo bajo el mismo padre y a la derecha de cualquier nodo existente. Continúe agregando nodos según los datos disponibles hasta terminar con un nodo Unidad de pronóstico y su nodo Unidad de planificación asociado.
    <ol type="a" style={{ paddingLeft: '20px', marginTop: '10px', listStyleType: 'lower-alpha' }}>
      <li style={{ marginBottom: '10px' }}>To delete a node, simply click the <img src={require('@site/static/img/media/image254.png').default} alt="delete" style={{ width: '16px', verticalAlign: 'middle' }} /> icon, but note that this will also delete the child nodes under the one being deleted.</li>
      <li style={{ marginBottom: '10px' }}>
        To copy or move a node, click on the <img src={require('@site/static/img/media/image255.png').default} alt="copy/move" style={{ width: '16px', verticalAlign: 'middle' }} /> icon. In the pop-up, review or select where you want the node to be copied or moved to – the tree, the level of the parent, and the parent.
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '10px' }}>
          <li style={{ marginBottom: '5px' }}>For copying, QAT will select the same location as the original node by default</li>
          <li style={{ marginBottom: '5px' }}>For moving, QAT will select the same tree as the original node by default</li>
          <li style={{ marginBottom: '5px' }}>The entire branch (including all child nodes) will be moved/copied.</li>
          <li>Use the checkbox to select if you want to include modeling or not. Note: Transfers are never copied/moved.</li>
        </ul>
      </li>
      <li style={{ marginBottom: '10px' }}>
        As a validation feature, QAT will flag a Planning Unit (PU) node with a red border under two circumstances: 1) if a user has added a Forecasting Unit (FU) and PU, and later changes the FU and mistakenly forgets to also change to the correct corresponding PU, or 2) if a user creates a tree from a tree template which has PUs, but the user does not have those PUs in their program.
        <div style={{ margin: '20px 0' }}>
          <img src={require('@site/static/img/media/image280.png').default} alt="Red Border Nodes" style={{ width: '100%' }} />
        </div>
        To correct this, users can click on the PU node and choose the appropriate PU from the dropdown list.
        <div style={{ margin: '20px 0' }}>
          <img src={require('@site/static/img/media/image281.png').default} alt="PU Dropdown Selection" style={{ width: '100%' }} />
        </div>
      </li>
      <li>Tip: users can “clean-up” their tree by clicking any of the checkboxes available (Hide Planning Unit, Hide Forecasting Unit and Planning Unit, or Hide Tree Validation) at the top of the tree.</li>
    </ol>
  </li>
  <li style={{ marginBottom: '15px' }}>(optional) Users can insert a tree template within the body of their tree by clicking the <img src={require('@site/static/img/media/image256.png').default} alt="branch template" style={{ width: '16px', verticalAlign: 'middle' }} /> icon to add a branch template. This branch will be added below the current node as a child. This improves the efficiency of adding multiple batches of nodes (a branch) that are the same or similar across an existing tree or a new tree by utilizing templates. For more information on branch templates, refer to <a href="#b-branch-templates">Branch Templates</a>.</li>
  <li style={{ marginBottom: '15px' }}>
    (opcional) Haga clic en los niveles del árbol (cuadros rectangulares de color azul oscuro a la izquierda del árbol) para:
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
      <li style={{ marginBottom: '5px' }}>Name the levels of a tree. This will make a tree easier to read and will be used in the dropdowns and axis of the Modeling Validation screen.</li>
      <li>Reorder branches of your tree as desired by using the up and down arrows to indicate the left-to-right position of the branches. If the list is long, use the “see children of” dropdown to filter the nodes.</li>
    </ul>
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image282.png').default} alt="Level Details" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    Los árboles QAT se guardan automáticamente en la computadora local (para guardar un árbol en el servidor, consulte [Cargar versión](06-managing-programs-and-versions.md#c-upload)). Las cantidades que aparecen en los nodos también se calculan automáticamente a medida que cambia el árbol; sin embargo, si QAT funciona lento mientras edita el árbol, los usuarios pueden desmarcar la casilla "Calcular automáticamente" para detener los cálculos automáticos del backend. Para ver manualmente los cálculos actualizados después de cada edición, los usuarios deberán hacer clic en el icono <img src={require('@site/static/img/media/image283.png').default} alt="calculate" style={{ width: '16px', verticalAlign: 'middle' }} />.
    <ol type="a" style={{ paddingLeft: '20px', marginTop: '10px', listStyleType: 'lower-alpha' }}>
      <li style={{ marginBottom: '10px' }}>Users can download their trees as PDFs to share with stakeholders by clicking on the <img src={require('@site/static/img/media/image284.png').default} alt="PDF" style={{ width: '16px', verticalAlign: 'middle' }} /> icon.</li>
      <li>Users can download an outline form of their tree to double check the Sum of Children validation, node values, and their nodes by clicking on the <img src={require('@site/static/img/media/image285.png').default} alt="outline" style={{ width: '16px', verticalAlign: 'middle' }} /> icon.</li>
    </ol>
  </li>
  <li style={{ marginBottom: '15px' }}>
    (opcional) Para editar por lotes valores en un árbol, el usuario puede usar la pantalla Tabla de árbol, a la que se puede acceder a través de un enlace en la parte superior izquierda de la pantalla Administrar árbol - Construir árboles.
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
      <li style={{ marginBottom: '5px' }}>On the Tree Tables screen,</li>
      <li style={{ marginBottom: '5px' }}>The dropdowns at the top of the screen should be prepopulated with the same program, tree, scenario, and display date as previously selected, but users can update the dropdowns as needed before making edits.</li>
      <li style={{ marginBottom: '5px' }}>Nodes are grouped by node type on different tabs. Navigate to the node(s) you want to edit by using the tabs</li>
      <li style={{ marginBottom: '5px' }}>Made edits to any node values by editing the table cells.</li>
      <li style={{ marginBottom: '5px' }}>See the example and screenshot in Figure 172</li>
      <li style={{ marginBottom: '5px' }}>Note that while the Tree Tables screen is helpful for editing the values of multiple nodes efficiently, the Tree Tables screen does not allow for editing for the tree structure. Please use the Manage Tree – Build Trees screen to add, delete, copy or move nodes.</li>
      <li>Upon returning to the Build Tree screen, users may need to click the <img src={require('@site/static/img/media/image283.png').default} alt="calculate" style={{ width: '16px', verticalAlign: 'middle' }} /> icon to see updated values.</li>
    </ul>
  </li>
</ol>

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image286.png').default} alt="Figure 172: Accessing and Using Tree Table Screen" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 172: Accessing and Using Tree Table Screen</p>
  </div>

### c. Escenarios

**Uso de escenarios:** Los escenarios se utilizan para modelar diferentes valores para el mismo árbol. Los escenarios son útiles cuando los usuarios desean analizar el resultado de diferentes cambios a lo largo del tiempo (por ejemplo: objetivo nacional versus status quo, diferentes niveles de estacionalidad, transición de unidades de planificación a diferentes ritmos, etc.), pero desean mantener la misma estructura base. Para crear un árbol con diferentes estructuras (por ejemplo, diferentes regímenes, diferentes metodologías), se recomienda crear otro árbol (consejo: ¡utilice la función de duplicar árbol!). Para agregar, editar, eliminar o desactivar un escenario, use el ícono <img src={require('@site/static/img/media/image277.png').default} alt="gear" style={{ width: '16px', verticalAlign: 'middle' }} /> al lado del menú desplegable del escenario. Utilice el menú desplegable de escenarios para seleccionar qué escenario ver y editar.

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Fixed for All Scenarios</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Unique to each Scenario</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tree structure</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Node value</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Node Title</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Month</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Node Type</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Notes</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Modeling/Transfer/Extrapolation</td>
    </tr>
  </tbody>
</table>

*Notas:*
- Por defecto, sólo se muestran los escenarios activos. Para ver escenarios inactivos, haga clic en el ícono <img src={require('@site/static/img/media/image277.png').default} alt="gear" style={{ width: '16px', verticalAlign: 'middle' }} /> al lado del menú desplegable de escenarios, seguido de "Mostrar inactivos".
- Los usuarios pueden elegir diferentes combinaciones de árbol y escenarios para cada unidad de planificación en la pantalla [Comparar y seleccionar] (12-módulos-de-previsión-informes-y-salidas.md#9a-compare-and-select).

### d. Modelado/Transferencias

**Propósito:** Si un nodo cambia con el tiempo, un usuario puede utilizar la pestaña Modelado/Transferencia para modelar el crecimiento/pérdida dentro de un solo nodo o una transferencia de un nodo a otro. Tenga en cuenta que esta funcionalidad solo está disponible para nodos de número (#) y nodos de porcentaje (%) (incluidas las unidades de previsión y las unidades de planificación). El usuario aún puede usar la pestaña para ver los datos mensuales de los nodos de Agregación y Embudo.

**Usando esta pestaña:**
Los usuarios pueden ingresar manualmente cualquier cambio deseado a lo largo del tiempo (crecimiento/pérdida/transferencia) en la tabla superior, o pueden utilizar la Calculadora de modelos para calcular la tasa de cambio mensual (consulte la sección 'Calculadora de modelos' a continuación para obtener más información). Cada entrada debe agregarse como filas separadas por cambio en la tabla superior (es decir, un nodo no puede crecer ni transferirse en una fila de entrada de datos; deben ser dos filas separadas).

- **Reglas para nodos de transferencia:**
  - Los nodos numéricos solo pueden transferirse a otros nodos numéricos y deben pertenecer al mismo nivel.
  - Los nodos de porcentaje solo pueden transferirse a otros nodos de porcentaje y deben pertenecer al mismo padre.
  - Las transferencias son siempre negativas desde el nodo origen y positivas hacia el nodo destino.
  - No se permite la extrapolación en un nodo que también tenga una transferencia, ya sea hacia/desde otro nodo.

**Tipos de modelado:**

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Modeling Type</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong># Node Calculation</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>% Node Calculation</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>+/- a static number each month</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>N/A</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>+/- a static percentage each month, calculated based on the starting month</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>N/A</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Exponential (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>+/- a percentage each month, calculated on the previous month as a rolling percentage</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>N/A</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (% point)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>N/A</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>+/- a static percentage each month (e.g. if the starting month is 30% and the change is +1% each month, next month is 31%, the next is 32%, and so on)</td>
    </tr>
  </tbody>
</table>

**Estacionalidad y cambios manuales:**

Haga clic en **“Mostrar datos mensuales”** para mostrar una tabla y un gráfico con el valor del nodo a lo largo del tiempo.

  - Esta función es útil para ver cómo las entradas de modelado y transferencia afectan los datos mensuales tanto en forma gráfica como tabular.
  - En los datos tabulares, los usuarios pueden agregar un cambio manual para un mes específico o ingresar un porcentaje del índice de estacionalidad (solo disponible para los nodos # y %,), según sea necesario.
  - Introduzca un % positivo para un valor aumentado en este mes o un valor negativo para un valor disminuido. Por ejemplo, 20% indica que el valor de este mes está un 20% por encima del valor no estacional (o 120%), mientras que -20% indica que está un 20% por debajo del valor no estacional (o 80%).
  - Para los nodos porcentuales, QAT primero calcula el valor estacionalizado del porcentaje antes de calcular el valor del nodo multiplicando el porcentaje estacionalizado y el valor principal. En la Figura 174, el ejemplo muestra cómo el porcentaje no estacionalizado del 50 % se convierte en 60 % después de ser estacionalizado.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image288.png').default} alt="Figure 173: Seasonality in a number node" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 173: Seasonality in a number node</p>
  </div>

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image289.png').default} alt="Figure 174: Seasonality in a percentage node" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 174: Seasonality in a percentage node</p>
  </div>

  - Si un usuario marca "El cambio manual afecta el mes futuro", el monto manual agregado al final del mes se trasladará al comienzo del mes siguiente.
  - Si ninguno de estos campos es relevante, los usuarios pueden desmarcar "Mostrar cambio manual" o "Mostrar estacionalidad y cambio manual" para ocultar estas columnas.

**Ejemplos de modelado:**

<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
  <li style={{ marginBottom: '15px' }}>
    <strong>Crecimiento simple</strong> (número lineal): el siguiente ejemplo muestra un crecimiento de la población cada mes de 500 personas al mes desde enero de 2022 hasta diciembre de 2024.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image290.png').default} alt="Simple Growth (linear #)" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Pérdida simple</strong> (número lineal): el siguiente ejemplo muestra el desgaste cada mes en 100 por mes desde enero de 2022 hasta diciembre de 2024. QAT utiliza un número negativo para indicar una disminución o pérdida.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image291.png').default} alt="Simple Loss (linear #)" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Crecimiento simple</strong> (% lineal): el siguiente ejemplo muestra un crecimiento demográfico constante cada mes del 2 % desde enero de 2022 hasta diciembre de 2024. QAT ha calculado que este cambio aumenta la población en 108,64 cada mes.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image292.png').default} alt="Simple Growth (linear %)" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Crecimiento simple</strong> (%) exponencial: el siguiente ejemplo muestra un crecimiento de la población cada mes del 1 % desde enero de 2022 hasta diciembre de 2024. Debido a que el crecimiento es exponencial, el cambio difiere cada mes.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image293.png').default} alt="Simple Growth (exponential %)" style={{ width: '100%' }} />
    </div>
    <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '10px' }}>
      <li style={{ marginBottom: '5px' }}>QAT calculates this change to be 54.32 in Jan-22 month,</li>
      <li style={{ marginBottom: '5px' }}>QAT calculates this change to be 54.86 in Feb-22 month, and</li>
      <li>QAT calculates this change to be 55.41 in Mar-22</li>
    </ul>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Pérdida multianual</strong>: el siguiente ejemplo muestra una tasa diferente de deserción (pérdida) cada año. El año 1 (enero de 2022 a diciembre de 2022) disminuye la población en un 1% o 54,32 cada mes, el año 2 (enero de 2023 a diciembre de 2023) disminuye la población en un 2% o 95,6 cada mes, etc. QAT utiliza un número negativo para indicar una disminución o pérdida.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image294.png').default} alt="Multi-year Loss" style={{ width: '100%' }} />
    </div>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Transferencia</strong>: el siguiente ejemplo muestra una transferencia de 250 pacientes cada mes durante un año, de enero de 2022 a diciembre de 2022, desde el nodo actual (Adultos 1.ª línea) a otro nodo (Adultos 2.ª línea). Esta transferencia también aparecerá en gris en el otro nodo (2.ª línea de adultos) para indicar un cambio no editable.
    <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image295.png').default} alt="Transfer" style={{ width: '100%' }} />
    </div>
  </li>
</ul>

### <img src={require('@site/static/img/media/image287.png').default} alt="calculator" style={{ width: '16px', verticalAlign: 'middle', marginRight: '8px' }} /> Calculadora de modelado:

Haga clic en la calculadora de modelos <img src={require('@site/static/img/media/image287.png').default} alt="calculator" style={{ width: '16px', verticalAlign: 'middle' }} /> si necesita ayuda para calcular la tasa de cambio mensual. La calculadora de modelado **Valor final/cambio** está disponible para todos los nodos excepto **Nodos de agregación**, y la calculadora de modelado **Objetivo anual** solo está disponible para **Número de nodos**. Comience seleccionando un **Tipo de modelo** (N.° lineal, % lineal o % exponencial) y luego un **Tipo de objetivo** (Valor final/cambio u objetivo anual):

<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
  <li style={{ marginBottom: '15px' }}>
    <strong>Valor final/cambio</strong>: use esto si tiene un valor objetivo (no acumulativo) o un cambio total deseado durante un período específico, en lugar de una tasa de cambio mensual conocida.
    <ol style={{ paddingLeft: '20px', marginTop: '10px' }}>
      <li style={{ marginBottom: '10px' }}>The <strong>Start Date</strong> and <strong>Target Date</strong> will be filled in based on the original inputs for Start date and End date in the modeling table, which are by default, based on the forecast period. The user can change these if desired. These two dates will flow back into the modeling table.</li>
      <li style={{ marginBottom: '10px' }}>The <strong>Start Value</strong> is the node value at beginning of the month for the <strong>Start Date</strong>, as calculated by QAT. In other words, the <strong>Start Value</strong> is the node value before any modeling changes occur. This field is calculated and cannot be directly changed by the user. If the <strong>Start Date</strong> is the month after the “Month” on the <strong>Node Data</strong> tab, then the <strong>Start Value</strong> is equal to the "Node Value” provided by the user on the <strong>Node Data</strong> tab.</li>
      <li style={{ marginBottom: '10px' }}><strong>Period</strong> is calculated as <strong>Target Date</strong> - <strong>Start Date</strong> (in months). This value is not displayed in the front-end of QAT, but is used in the formulas below.</li>
      <li style={{ marginBottom: '10px' }}>Based on the available data or assumptions, enter data in **one** of the following fields: <strong>Target Ending Value</strong>, <strong>Target Change (%)</strong> or <strong>Target Change (#)</strong></li>
      <li style={{ marginBottom: '10px' }}>After an input is developed, the other fields will be automatically populated, as well the final <strong>'Calculated Month-on-Month Change'</strong>.</li>
      <li>When user clicks 'Accept', the <strong>Monthly Change (% or #)</strong> will be populated back in the main modeling table, based on the formulas below. All negative changes will be displayed as “decrease” and positive changes displayed as “increase”, with the number shown in absolute value.</li>
    </ol>
  </li>
</ul>

Si el usuario ingresa **Valor final objetivo:**

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '15px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (%)</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (#)</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Exponential (%)</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(Target Ending Value - Start Value) / Start Value</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Ending Value - Start Value</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Calculated Month-on-Month Change</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(Target Ending Value - Start Value) / Period</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(((Target Ending Value - Start Value) / Period) / Start Value) * 100</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>((Target Ending Value / Start Value) ^ (1 / Period) - 1) * 100</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Change (#) / Period</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
  </tbody>
</table>

Si el usuario ingresa **Cambio de objetivo (%):**

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '15px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (%)</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (#)</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Exponential (%)</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Ending Value</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Start Value + (Start Value * Target Change (%)/100)/100</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Ending Value - Start Value</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Calculated Month-on-Month Change</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(Start value * Target Change (%)) / 100 / Period</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(((Target Ending Value - Start Value) / Period) / Start Value) * 100</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>((Target Ending Value / Start Value) ^ (1 / Period) - 1) * 100</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Change (#) / Period</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>-</td>
    </tr>
  </tbody>
</table>

Si el usuario ingresa **Cambio de objetivo (#):**

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '15px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}></th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Linear (#)</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Target Ending Value</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Start Value + Target Change (#)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>(Target Ending Value - Start Value) / (Start Value * 100)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Calculated Month-on-Month Change</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Change (#)/ Period</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (#)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Target Change (#) / Period</td>
    </tr>
  </tbody>
</table>

- **Objetivo anual:** Utilice esto si tiene valores objetivo (acumulados durante un año). En lugar de simplemente dividir los objetivos anuales por 12, lo que crea un patrón escalonado, la calculadora ayudará a proporcionar un pronóstico fluido.

  <div style={{ margin: '20px 0' }}>
    <img src={require('@site/static/img/media/image297.png').default} alt="Annual Target Graph" style={{ width: '100%' }} />
  </div>

  <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
    <li style={{ marginBottom: '10px' }}>
      Select the first month of your target and the number of years of targets available.
      <ul style={{ listStyleType: 'square', paddingLeft: '20px', marginTop: '5px' }}>
        <li>QAT will autofill in the yearly rows in the table based on the chosen first month of target, assuming targets are for 12-month periods.</li>
      </ul>
    </li>
    <li style={{ marginBottom: '10px' }}>In the table, enter figures for the year before the target (the actual) and each target year.</li>
    <li style={{ marginBottom: '10px' }}>After data entry, click “Calculate” (see below for calculation approach and formulas).</li>
    <li style={{ marginBottom: '10px' }}>Review the differences between the desired targets and the QAT calculated numbers. If differences are large, consider if the rate of change follows a linear or exponential pattern and change the **Modeling Type** (Linear #, Linear %, or Exponential %) and re-calculate if needed.</li>
    <li>
      When user clicks “Accept,” QAT populates the calculated values in two places:
      <ul style={{ listStyleType: 'square', paddingLeft: '20px', marginTop: '5px' }}>
        <li style={{ marginBottom: '5px' }}>Node Value tab - Starting Month and Starting Value</li>
        <li>Modeling/Transfer tab – one row is created per 12-month period after the Starting Value. Note that these are not the same periods as the Target Years (see below).</li>
      </ul>
    </li>
  </ol>

**Enfoque de cálculo del objetivo anual:** QAT supone que 1/12 del valor real anual se logró en el punto medio del año real, y 1/12 de los objetivos anuales se alcanzará en el punto medio de cada año objetivo. Luego, QAT interpola efectivamente entre esos puntos medios calculando una tasa de cambio mensual lineal o exponencial. Esta tasa de cambio mensual se aplica luego a ambos años: la segunda mitad del primer año y la primera mitad del segundo año. Para lograr esto, QAT calcula los siguientes campos:

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Field</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Explanation / Formula</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Annual Change (%)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Change from previous year. Calculated for each year after the first year.<br/>
        = (Current Year Value - Previous Year Value) / (Previous Year Value)
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Monthly Change (%) / Monthly Change (#)*</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Exponential Rate = (Year 2 Value/Year 1 Value)^ (1/12) -1<br/>
        Linear Rate = Annual Change / 12
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Node Month**</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>= n-7, where n is the first month of the target.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Node Value**</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Assumed to be the first value (the actual value) provided by the user divided by 12, since this is assumed to be the midpoint of the year.<br/>
        = Year Value/12
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Calculated Total</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Beginning with the Node Month and Node Value, and applying the Monthly Change (% or #), QAT calculates each monthly value, then provides sums the values across 12-month periods.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Difference (Target vs Calculated, #)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Calculated for each year after the first Actual year. This difference will be large if the annual change varies significantly between years.<br/>
        = Calculated Total – Target
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Difference (Target vs Calculated, %)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
        Calculated for each year after the first Actual year. This difference will be large if the annual change varies significantly between years.<br/>
        = (Calculated Total - Target) / Target.
      </td>
    </tr>
  </tbody>
</table>

<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '5px' }}>
  * Estos valores no aparecen en la sección "Calculadora de modelado", pero se completan en la tabla superior del nodo de modelado/transferencia después de que el usuario hace clic en "aceptar".<br />
  ** Estos valores no aparecen en la sección "Calculadora de modelado", pero se completan en los campos del nodo principal después de que su uso haga clic en "aceptar".
</p>

### e. Extrapolación

**Propósito:** La pestaña de extrapolación permite a los usuarios pronosticar valores futuros de nodos extrapolando a partir de valores pasados. Esta funcionalidad solo está disponible para nodos numéricos y es similar a la pantalla "Extrapolación", pero en su lugar se realiza en un nodo de árbol. Para un nodo determinado, los usuarios deben elegir entre modelado/transferencias o extrapolación, pero no pueden usar ambos al mismo tiempo. Puede encontrar más detalles sobre los métodos de extrapolación en [Extrapolación](#extrapolación).

**Usando esta pestaña:**

1. Primero, seleccione la casilla de verificación junto a 'Extrapolar' en el nodo Agregar/Editar.
2. Seleccione 'Mostrar datos'.
3. En la tabla, ingrese los valores reales y las tasas de informe de sus datos anteriores. A partir de esta entrada, QAT calculará los valores históricos ajustados. Si necesita cambiar el período de los datos, cambie el mes de inicio y finalización en la parte superior del nodo en "Mes de inicio de datos históricos".
4. Si faltan datos, utilice el botón verde Interpolar para completar los datos faltantes. La interpolación solo se puede utilizar si faltan datos en ambos lados del mes.
5. (opcional) Seleccione qué método(s) de pronóstico desea mostrar y actualice los parámetros de extrapolación.
6. Haga clic en "Extrapolar". Todos los pronósticos seleccionados se mostrarán en la tabla principal y en los gráficos.

**NOTA:** Los valores mínimos necesarios para obtener gráficos e informes correctos para las distintas funciones se encuentran a continuación:

* TES, Holt-Winters: Necesita al menos 24 meses de datos de consumo real
*ARIMA: Necesita al menos 14 meses de datos de consumo real
* Promedio móvil, semipromedio y regresión lineal: necesita al menos 3 meses de datos de consumo real

7. (opcional) En la tabla, agregue los cambios manuales (+/-). Estos cambios se suman o restan además de los valores extrapolados.
8. Después de revisar la tabla principal, la tabla de errores y los gráficos, seleccione el método de pronóstico deseado en la parte inferior de la pantalla y haga clic en "Guardar".
9. Nota: Si cambia alguna entrada, se le pedirá que extrapola nuevamente para actualizar los cálculos, antes de seleccionar un nuevo método.

###f. Técnicas Avanzadas

**Consejos para casos de uso específicos:**

- **¿Uso del producto retrasado o escalonado?** A veces, el consumo del producto se retrasa en relación con los otros niveles superiores del árbol. En el nodo Unidad de pronóstico correspondiente, utilice el campo Retraso para indicar este retraso.

  - Por ejemplo, si el uso del producto comenzará 2 meses después de las fechas del nodo principal, ingrese "2" en este campo.
  - Este campo también se puede usar cuando el producto cambia a lo largo del tiempo; por ejemplo, si las unidades de pronóstico A, B y C se usan en secesión durante dos meses a la vez, puede configurar su árbol con la Unidad de pronóstico A (discreta durante 2 meses, desfase = 0), la Unidad de pronóstico B (discreta durante 2 meses, desfase = 2), la Unidad de pronóstico C (discreta durante 2 meses, desfase = 4).

- **¿Uso discreto del producto durante un período de tiempo más largo? (pronóstico del primer mes frente a pronóstico mes a mes):** QAT tiene la opción de calcular el uso discreto del producto en nodos de unidades de pronóstico de dos maneras:

  - anticipando la cantidad discreta consumida por paciente en el mes 1 (elija "Calcular" = "Todo en el primer mes") o
  - desagregando la cantidad discreta consumida por paciente por mes (elija "Calcular" = "Mes por mes").
  - De forma predeterminada, QAT asumirá "Todo en el primer mes" (carga anticipada); sin embargo, los usuarios tienen la opción de seleccionar "Mes a mes" como método alternativo. Este cálculo alternativo podría ser útil para Unidades de Planificación (PU) que tienen patrones de bajo consumo durante un período de tiempo o si se aplica a un grupo de pacientes recién iniciado. Por ejemplo, si una mujer embarazada debe tomar un suplemento nutricional una vez al mes durante el embarazo (nueve meses), de forma predeterminada, QAT calcularía nueve suplementos en el mes 1 (distribución anticipada). Sin la distribución anticipada, QAT calcularía un suplemento en el mes 1, un suplemento en el mes 2, un suplemento en el mes 3, y así sucesivamente.

Cálculo de ejemplo (todo en el primer mes versus mes a mes): no se aplica ningún modelo:

o **Todo en el primer mes:** Hay 10 pacientes que requieren 1 frasco para tratamiento en el transcurso de 6 meses; por lo tanto, el número de unidades de planificación por paciente = 6. Al calcular “Todo en el primer mes”, QAT anticipará la cantidad pronosticada y asumirá que los 60 frascos (10 pacientes * 6 frascos por paciente) se pronostican cada mes.

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Month</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jan</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Feb</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Mar</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Apr</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>May</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jun</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jul</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Aug</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Sep</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Oct</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Nov</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Dec</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong># of Patients</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Total Forecasted</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
  </tbody>
</table>

<p style={{ fontStyle: 'italic', marginTop: '5px' }}>Total Forecasted in 6-month Period = 360 Bottles</p>

o **Mes a mes:** Hay 10 pacientes que requieren 1 frasco para tratamiento en el transcurso de 6 meses; por lo tanto, el número de unidades de planificación por paciente = 6. Con “Mes a mes”, QAT distribuirá uniformemente la cantidad pronosticada a lo largo del período de tiempo. Por lo tanto, QAT asumirá que se pronostican 10 frascos en el mes 1 (10 pacientes * 1 frasco). En el mes 2, esos mismos 10 pacientes regresarán cada uno por otro frasco, mientras que un nuevo grupo de 10 pacientes también necesitará 1 frasco cada uno [(10 pacientes * 1 frasco) + (10 pacientes * 1 frasco)] para un total de 20 frascos previstos en el mes 2, y así sucesivamente.

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Month</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jan</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Feb</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Mar</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Apr</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>May</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jun</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jul</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Aug</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Sep</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Oct</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Nov</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Dec</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong># of Patients</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Total Forecasted</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>20</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>30</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>40</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>50</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>50</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>40</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>30</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>20</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
  </tbody>
</table>

<p style={{ fontStyle: 'italic', marginTop: '5px' }}>
  Total previsto en un período de 6 meses = 160 botellas<br />
  Total previsto en un período de 12 meses = 360 botellas
</p>

Ejemplo de cálculo (todo en el primer mes versus mes a mes): modelado aplicado:
o Hay 10 pacientes que requieren 1 frasco para tratamiento en el transcurso de 6 meses; por lo tanto, el número de unidades de planificación por paciente = 6. También se espera un aumento de 5 nuevos pacientes por mes. Utilizando la lógica anterior para calcular "Todo en el primer mes" y "Mes a mes", QAT calculará la siguiente cantidad de botellas que se dispensarán durante un período de 12 meses:

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Month</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jan</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Feb</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Mar</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Apr</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>May</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jun</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Jul</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Aug</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Sep</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Oct</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Nov</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Dec</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong># of Patients</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>15</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>20</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>25</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>30</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>35</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>All in the First Month</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>60</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>90</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>120</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>150</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>180</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>210</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Month-by-Month</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>10</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>25</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>45</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>70</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>100</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>135</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>125</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>110</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>90</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>65</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>35</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0</td>
    </tr>
  </tbody>
</table>

<p style={{ fontStyle: 'italic', marginTop: '5px' }}>
  Total previsto (todo en el primer mes) = 810 botellas<br />
  Total previsto (mes a mes) = 810 botellas
</p>

- **¿Desea un valor específico para el número de unidades de planificación por paciente?** Un usuario puede especificar un valor específico para el número de unidades de planificación por unidad* (discretas) o por unidad* por mes (continuo) seleccionando "No" en "¿Usar el cálculo automático de QAT para el número de unidades de planificación?" A menos que un usuario lo anule, QAT utilizará el cálculo automático de forma predeterminada. (*En este caso la unidad podría ser paciente, prueba, cliente, etc)

  - **Ejemplo discreto:** Si se supone que cada 1 vial de bupivacaína se debe usar cada 5 procedimientos, entonces el número de unidades de pronóstico/procedimientos es 0,2 viales. Con una unidad de planificación de 5 viales, QAT calcula que se utilizan 0,2/5 = 0,04 unidades de planificación por procedimiento. Sin embargo, un usuario puede cambiar el botón de opción a "No" y elegir anular esto con conocimiento de las tasas de uso reales e ingresar 0,05 unidades de planificación. Agregue siempre una nota cuando anule el cálculo de QAT.

    <div style={{ margin: '20px 0' }}>
    <img src={require('@site/static/img/media/image298.png').default} alt="Discrete Example Override" style={{ width: '100%' }} />
    </div>

  - **Ejemplo continuo:** Si un paciente requiere 1 tableta por día indefinidamente de un frasco de 30 tabletas TLD, QAT calculará esto como 30.4167/mes o 1.0139/día para tener en cuenta los meses que tienen 30 días, 31 días, 28 días, etc. Sin embargo, un usuario puede optar por cambiar el botón de opción a "No" y elegir anular esto a 1 unidad de planificación/mes. proporcione el valor de anulación de 1. Agregue siempre una nota cuando anule el cálculo de QAT.

    <div style={{ margin: '20px 0' }}>
    <img src={require('@site/static/img/media/image299.png').default} alt="Continuous Example Override" style={{ width: '100%' }} />
    </div>

- **¿Usos repetidos de pronóstico?** Si varios nodos de Unidad de pronóstico comparten la misma configuración, considere usar la [pantalla Plantilla de uso](#c-usage-templates) para guardar sus usos comunes y luego usar el campo "Copiar desde plantilla" para completar los campos en los nodos de la unidad de pronóstico.
- **¿Valores agregados de nodos para realizar cálculos adicionales? (Nodos de embudo):** En algunos casos, es posible que los usuarios deseen vincular el valor de un nodo a otro nodo, o agregar varios nodos en un nodo antes de agregar nodos adicionales a continuación. ¶¶Tenga en cuenta que esta función es diferente a vincular nodos mediante modelado/transferencia, que sirve para vincular cambios en un nodo con cambios en otro nodo, en lugar de agregación. Esto también es diferente del uso de nodos de agregación, que agregan solo hacia arriba y no permiten cálculos adicionales¶¶

**Casos de uso:**

  - Las **pruebas de carga viral** son utilizadas por varias poblaciones, pero todas las poblaciones utilizarán la misma combinación de instrumentos. Comience con un árbol demográfico que termine en múltiples poblaciones. Es necesario sumar las diferentes poblaciones y las distintas ramas de los instrumentos se ubican bajo la suma.
  - **Los pacientes con malaria** ingresan al sistema de salud a través de diferentes canales (trabajadores de salud comunitarios versus centros de salud públicos), que tienen diferentes algoritmos de prueba, pero una vez que un paciente da positivo, recibe la misma “combinación” de tratamientos. Las diferentes poblaciones que dan positivo deben sumarse y los distintos regímenes de tratamiento se ubican bajo la suma
  - Varios **Métodos Anticonceptivos** difieren en la forma en que se calculan, pero todos derivan de la misma población del país, que debe actualizarse en cada cuantificación y puede tener modelos a lo largo del tiempo. Se puede construir un árbol para implantes e inyectables y otro para condones, pero los dos árboles están vinculados entre sí en el nodo de población del país, por lo que sus valores permanecen consistentes.

**Cómo vincular valores**

1. Indique (en # o % nodos) que son "nodos de origen"

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image300.png').default} alt="Figure 175 Indicating source nodes" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 175 Indicating source nodes</p>
  </div>

2. Cree nuevos "nodos de embudo" y seleccione desde qué nodos de origen agregar. Nota: Los nodos de embudo pueden "ubicarse" en cualquier parte del árbol; es decir, puede convertir el primer nodo de un árbol en un nodo de embudo o crear nodos de embudo bajo cualquier agregación, número de nodo porcentual. Esto se debe a que el valor de los nodos del embudo no deriva de su padre, sino de las fuentes a las que están vinculados.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image301.png').default} alt="Figure 176 Adding funnel nodes" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 176 Adding funnel nodes</p>
  </div>

3. Agregue los nodos "secundarios" debajo de los nodos del embudo; estos probablemente serán los nodos del producto. Los nodos de embudo permiten mucha flexibilidad, ya que se pueden usar dentro de uno o varios árboles, se pueden usar en cualquier nivel y

   1. El usuario puede vincular **internamente dentro de un árbol**

      <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image302.png').default} alt="Link internally within one tree" style={{ width: '100%' }} />
      </div>

   2. Los usuarios pueden vincular **externamente entre árboles** (nodos de origen en un árbol, nodos de embudo en un árbol diferente)

      <div style={{ margin: '20px 0' }}>
      <img src={require('@site/static/img/media/image303.png').default} alt="Link externally between trees" style={{ width: '100%' }} />
      </div>

### B2. Validaciones de modelado

**Propósito:** Una vez que se ha creado un árbol, los usuarios pueden usar la pantalla Validación de modelado para ver el cambio a lo largo del tiempo. Esto es útil si el pronóstico ha aplicado modelado/transferencias en uno o nodos de modo.

**Usando esta pantalla:**
* Vaya a 'Pronóstico de árbol' y seleccione 'Validaciones de modelado'.
* Seleccione los filtros de pantalla usando los menús desplegables.
  * Programa: Debe estar en línea para ver las versiones del programa en el servidor. Cuando no está conectado, solo se pueden seleccionar los programas locales descargados.
  * Nivel:
    * Al crear un árbol, es útil cambiar el nombre de los niveles. El menú desplegable de 'niveles' en esta pantalla mostrará los diferentes nombres de niveles que ha elegido. Esto hace que sea más fácil identificar lo que muestran los datos, en lugar de usar el nivel 0,1,2,3, etc.
    * El menú desplegable de niveles agrupará automáticamente la Unidad de planificación y la Unidad de pronóstico en sus propios niveles en caso de que estos nodos estén en niveles separados de su árbol. Por lo tanto, si también tiene un nivel llamado 'Unidad de pronóstico', al seleccionar el nivel 'FU' y el nivel 'Unidad de pronóstico' se obtendrán los mismos resultados. Sin embargo, si tiene una unidad de pronóstico en el nivel 4 y otra en el nivel 5, el nivel 'FU' mostrará ambas.
  * **Visualización del eje X:** Los datos se pueden mostrar por meses (predeterminado) o agregarse por año calendario o año fiscal. (Ver Figura 154)
    * Al agregar por año, es útil utilizar la función 'Mostrar datos' para confirmar qué meses se incluyen en el gráfico agregado y si hay datos para todos los meses esperados.
    * Al agregar por años fiscales, debe seleccionar el mes en el que comienza su año fiscal. Por ejemplo, si su año fiscal 2023 es de octubre de 2022 a septiembre de 2023, puede seleccionar la opción que. QAT siempre mostrará los ejemplos utilizando el año calendario actual.
  * **Visualización del eje Y:** Los datos se pueden mostrar por número de unidades, así como por porcentaje. (Ver Figura 149 versus Figura 147)
* Para ver los datos tabulares, seleccione el botón azul 'Mostrar datos' en la parte inferior derecha de la pantalla.
* Al visualizar el gráfico, el usuario puede ocultar elementos haciendo clic en la leyenda. Para mostrarla, vuelva a hacer clic en esa parte de la leyenda.
* Esta pantalla se puede exportar en formato CSV y PDF seleccionando los íconos en la esquina superior derecha.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image304.png').default} alt="Figure 177: Modeling Validation Screen (by number and month)" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 177: Modeling Validation Screen (by number and month)</p>
  </div>

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image305.png').default} alt="Figure 178: Modeling Validation Screen (by percentage and month)" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 178: Modeling Validation Screen (by percentage and month)</p>
  </div>

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image307.png').default} alt="Figure 179: Modeling Validation Screen (by Calendar Year vs by Fiscal Year)" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 179: Modeling Validation Screen (by Calendar Year vs by Fiscal Year)</p>
  </div>

### B3. Validaciones de productos

**Propósito:** Una vez que se ha creado un árbol, los usuarios pueden usar la pantalla Validaciones de productos para verificar el uso de los productos en el árbol de pronóstico. Esto es útil para ver varios productos a la vez.

**Usando esta pantalla:**
* Vaya a 'Pronóstico de árbol' y seleccione 'Validaciones de producto'.
* Seleccione los filtros de pantalla usando los menús desplegables.
  * En esta pantalla sólo se pueden seleccionar programas locales descargados.
* Esta pantalla se puede exportar en formato CSV y PDF seleccionando los íconos en la esquina superior derecha.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image308.png').default} alt="Figure 180: Product Validations" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 180: Product Validations</p>
  </div>

### B4. Usando plantillas

#### a. Plantillas de árboles

**Propósito:** Permitir que los usuarios comiencen a diseñar su árbol de pronóstico a partir de una plantilla preestablecida. Nota: las plantillas de árbol se administran a nivel de dominio (global).

**Usando plantillas de árbol:**
El usuario puede agregar plantillas de árbol en dos ubicaciones diferentes: la pantalla "Administrar árbol" o la pantalla "Plantillas de árbol". Nota: se debe descargar un programa para crear una plantilla de árbol.

**Método 1:**

1. Navegue hasta 'Pronóstico de árboles' → 'Administrar árboles'.
2. En la parte superior derecha de la pantalla, haga clic en el menú desplegable azul "Crear o Seleccionar" y seleccione la plantilla de árbol deseada.
3. En la ventana emergente "Detalles del árbol":

   un. Confirme o actualice las secciones Programa, Método de pronóstico, Nombre del árbol, Regiones y Notas.

   b. Si hay unidades de planificación que están en la plantilla pero que faltan en el programa, QAT las marcará en una sección inferior de esta ventana emergente (consulte la Figura 150), donde una tabla muestra las unidades de planificación que faltan.

      i. Si faltan unidades de planificación en el programa (incluidas aquellas inactivas o no marcadas para Pronóstico de árbol) y se recomienda utilizar la plantilla de árbol elegida, los usuarios pueden hacer clic en el botón "Agregar/actualizar unidades de planificación seleccionadas" y QAT agregará automáticamente las unidades de planificación al programa del usuario.

      ii. Si el usuario desea crear el árbol sin las unidades de planificación recomendadas, puede hacer clic en el botón "Crear árbol sin agregar unidades de planificación" y las unidades de planificación no se agregarán al programa del usuario. Esto podría resultar útil cuando a un usuario le gustaría utilizar una estructura de árbol pero tiene diferentes unidades de planificación que le gustaría pronosticar.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image309.png').default} alt="Figure 181: Tree Details Pop-up with 'Missing Planning Units'" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 181 Tree Details Pop-up with 'Missing Planning Units'</p>
  </div>

         c. Tenga en cuenta que todos los detalles del árbol se pueden actualizar en una etapa posterior haciendo clic en el ícono de ajustes <img src={require('@site/static/img/media/image310.png').default} alt="gear icon" style={{ height: '1.2em', verticalAlign: 'middle' }} /> al lado del menú desplegable del árbol y las unidades de planificación se pueden agregar navegando a la pantalla "Actualizar unidades de planificación".

4. QAT creará automáticamente la plantilla de árbol para el programa del usuario y navegará a la pantalla "Construir árbol".

**Método 2:**

1. Navegue hasta 'Pronóstico de árbol' → 'Plantillas de árbol'.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image311.png').default} alt="Figure 182: Tree Templates Screen" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 182: Tree Templates Screen</p>
  </div>

2. Revise las diferentes opciones de plantilla de árbol, prestando especial atención al Método de pronóstico y al tipo de Nodo inicial. Los usuarios pueden hacer clic en cualquier fila para revisar la plantilla del árbol, su estructura y varios nodos.

   a. Nota: aquellos nodos que comienzan con un nodo de Porcentaje se usan específicamente para Plantillas de Rama y no se pueden usar como plantilla de árbol. Los usuarios primero deben crear un nodo inicial (Número o Agregación), antes de agregar una Plantilla de rama (para obtener más información, consulte [Plantillas de rama](#b-branch-templates)).

3. Una vez que un usuario haya revisado la plantilla de árbol, puede hacer clic en "Usar esta plantilla" en la esquina superior derecha de la pantalla.
4. Continúe siguiendo los pasos 3 y 4 del Método 1 para finalizar la creación de la plantilla de árbol.

**Recomendaciones generales sobre plantillas de árboles:**

- En general, las plantillas de árbol contienen valores de “0” y “0%” en todos los niveles excepto en los nodos de las unidades de previsión y planificación. Luego, el usuario puede personalizar el árbol según sus requisitos, por ejemplo:

  - Haga clic en cada nodo para editar los valores a valores reales.
  - Cambie el nombre de los títulos de los nodos.
  - Reemplazar cualquier producto por:

    - editar el nodo de la unidad de previsión, pero asegúrese de abrir también el nodo de la unidad de planificación secundaria y seleccionar la unidad de planificación correcta.
    - eliminar los nodos de la unidad de previsión y planificación y agregar otros nuevos.

  - Copie cualquier nodo o rama (el usuario puede copiar varios nodos copiando la parte superior de una rama de nodos).
  - Eliminar cualquier nodo o rama.
  - Agregar notas para explicar cualquier fuente de información.

- Si hay una plantilla de árbol que beneficiaría a la comunidad QAT, los usuarios pueden solicitarla a través del [Sistema de asistencia técnica de tickets QAT] (05-getting-started.md#qat-helpdesk-and-tickets).

#### b. Plantillas de sucursales

**Propósito:** Las plantillas de rama permiten a los usuarios agregar una plantilla de árbol, incluida la estructura y todos los nodos secundarios como una rama dentro de un árbol preexistente. Nota: las plantillas de rama/árbol se administran a nivel de dominio (global). Si hay una plantilla de árbol/sucursal que beneficiaría a la comunidad QAT, los usuarios pueden solicitarla a través del [Sistema de asistencia técnica de emisión de tickets QAT] (05-getting-started.md#qat-helpdesk-and-tickets).

**Usando plantillas de sucursales:**

1. Los usuarios primero deben revisar las diferentes opciones de plantilla de árbol/rama, prestando especial atención al método de pronóstico y al tipo de nodo de inicio en la pantalla 'Pronóstico de árbol' → 'Plantilla de árbol'.
2. Navegue hasta 'Predicciones de árboles' → 'Administrar árboles' y seleccione el árbol deseado.
3. Haga clic en el símbolo <img src={require('@site/static/img/media/image312.png').default} alt="branch template icon" style={{ height: '1.2em', verticalAlign: 'middle' }} />. Esto agregará la plantilla de rama como secundaria al nodo seleccionado.

   a. Según el nodo principal elegido, QAT solo mostrará plantillas de rama que se pueden agregar como hijos potenciales según el nodo de inicio en la pantalla 'Plantilla de árbol' (consulte [Tipos y funciones de nodos](#a-node-types--functions) para conocer las opciones de hijos potenciales para cada tipo de nodo).

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image313.png').default} alt="Figure 183: Adding a Branch Template" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 183: Adding a Branch Template</p>
  </div>

4. Una vez elegida una plantilla de sucursal, haga clic en "Agregar sucursal".
5. Si hay unidades de planificación que están en la plantilla de rama, pero que faltan en el programa, QAT las marcará en una sección inferior de esta ventana emergente (consulte la Figura 153), donde una tabla muestra las unidades de planificación faltantes.

   a. Si faltan unidades de planificación en el programa (incluidas aquellas inactivas o no marcadas para Pronóstico de árbol) y se recomienda utilizar la plantilla de rama elegida, los usuarios pueden hacer clic en el botón "Agregar/actualizar unidades de planificación seleccionadas" y QAT agregará automáticamente las unidades de planificación al programa del usuario.

   b. Si el usuario desea agregar la sucursal sin las unidades de planificación recomendadas, puede hacer clic en el botón "Agregar sucursal sin agregar unidades de planificación" y las unidades de planificación no se agregarán al programa del usuario. Esto podría resultar útil cuando a un usuario le gustaría utilizar una estructura de sucursales pero tiene diferentes unidades de planificación que le gustaría pronosticar.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image314.png').default} alt="Figure 184: Adding PUs from a Branch Template to a Program" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 184: Adding PUs from a Branch Template to a Program</p>
  </div>

#### c. Plantillas de uso {#c-usage-templates}

**Propósito:** Las plantillas de uso permiten al usuario completar los detalles de un nodo de unidad de pronóstico de una sola vez. Las plantillas de uso pueden ser globales o específicas del programa. Tenga en cuenta que las plantillas específicas del programa las administran los administradores del programa de pronóstico. El usuario debe estar en línea para administrar plantillas, pero puede estar fuera de línea para usarlas.

**Para utilizar plantillas de uso:**

  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', margin: '20px 0', flexWrap: 'wrap' }}>
    <div style={{ flex: '1', minWidth: '150px', maxWidth: '35%' }}>
      <img src={require('@site/static/img/media/image315.png').default} alt="Using a Usage Template in a forecasting unit node - dropdown" style={{ width: '100%' }} />
    </div>
    <div style={{ flex: '2', minWidth: '250px', maxWidth: '63%' }}>
      <img src={require('@site/static/img/media/image316.png').default} alt="Using a Usage Template in a forecasting unit node - fields" style={{ width: '100%' }} />
    </div>
  </div>
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 185: Using a Usage Template in a forecasting unit node</p>

1. Asegúrese de que el programa tenga la unidad de planificación relacionada con la plantilla de uso. Recuerde, las plantillas de uso se basan en la unidad de pronóstico, pero cada unidad de planificación está relacionada con una unidad de pronóstico específica. Por ejemplo, si el programa tiene la unidad de planificación “Lopinavir/Ritonavir 200/50 mg Tablet, 120 Tablets”, todas las plantillas de uso con la unidad de pronóstico asociada “Lopinavir/Ritonavir 200/50 mg Tablet” estarán disponibles al diseñar el árbol.
2. En la pantalla Construir árbol, cree o edite un nodo de unidad de pronóstico existente (consulte la [Sección B1](#building-a-tree) para obtener más información). Si crea un nuevo nodo, asegúrese de seleccionar primero el tipo de nodo como "unidad de pronóstico" y verifique que los campos "mes" y "porcentaje del padre" sean correctos.
3. (opcional) Seleccione una categoría de Tracer para filtrar las plantillas de uso disponibles.
4. Usando el menú desplegable "Copiar desde plantilla", seleccione las plantillas de uso deseadas.
5. Se completarán todos los campos posteriores.
6. Haga clic en "Actualizar" para guardar los cambios.

**Para administrar plantillas de uso (solo administradores de programas de pronóstico):**

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image317.png').default} alt="Figure 186: Managing Usage Templates" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 186: Managing Usage Templates</p>
  </div>

1. Asegúrese de que QAT esté en modo en línea y navegue hasta Plantillas de árbol &gt; Plantillas de uso. Las plantillas globales aparecerán atenuadas y no serán editables.
2. Para crear una nueva plantilla de uso, haga clic en "agregar fila". Para editar una plantilla de uso existente, salte al siguiente paso.
3. Complete o edite la fila de la plantilla de uso como desee

- La columna "nombre de uso" es la que aparecerá en el menú desplegable.
   - Utilice la barra de desplazamiento horizontal para acceder a todos los campos de la tabla.
   - Utilice la información sobre herramientas (pase el mouse sobre los íconos "i") para guiarse
   - Utilice la penúltima columna “Uso en palabras” para verificar que todo esté ingresado correctamente.
   - Para los productos utilizados más de una vez, hay una calculadora que le ayudará a convertir el intervalo en frecuencia. Haga clic derecho en la fila que está editando para abrir la pantalla "Calcular frecuencia de uso". Ingrese el intervalo y la unidad de frecuencia deseada (día, mes, semana o año) y el número y la unidad de frecuencia calculados se completarán en la tabla.

  <div style={{ margin: '20px 0' }}>
  <img src={require('@site/static/img/media/image318.png').default} alt="Figure 187: 'Calculate Usage Frequency' screen" style={{ width: '100%' }} />
  <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 187: "Calculate Usage Frequency" screen</p>
  </div>

4. Haga clic en "Enviar" cuando haya terminado.