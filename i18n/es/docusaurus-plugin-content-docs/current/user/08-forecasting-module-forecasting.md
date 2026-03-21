---
id: forecasting-module-forecasting
title: "Módulo de pronóstico: pronóstico"
sidebar_label: "Módulo de pronóstico: pronóstico"
sidebar_position: 8
---
# Módulo de pronóstico: pronóstico

## Previsiones de consumo

Los pronósticos basados en el consumo, que se basan en datos de consumo históricos, son más útiles en programas maduros y estables que cuentan con un suministro completo de unidades de planificación y datos confiables. Este método puede ser el predictor más fiable del consumo futuro si se prevé que el uso futuro será muy similar al pasado. Por lo tanto, un usuario debe poder extrapolar datos históricos (idealmente, hay disponibles más de 24 meses de datos de consumo real mensual) y los datos deben ser una serie de datos a lo largo del tiempo (es decir, consumo <u> mensual ajustado </u> real).

Hay cuatro componentes básicos para un pronóstico de consumo:

𝐹𝑜𝑟𝑒𝑐𝑎𝑠𝑡 ≅ 𝐵𝑎𝑠𝑒 + 𝑇𝑟𝑒𝑛𝑑 + 𝑆𝑒𝑎𝑠𝑜𝑛 + 𝑅𝑎𝑛𝑑𝑜𝑚

Diferentes modelos de extrapolación utilizarán diferentes métodos estadísticos para estimar estos diferentes componentes y producir un pronóstico. En QAT, los usuarios seguirán tres pasos para producir un pronóstico basado en el consumo:

1. > [**Importar/entrar**](#importinputting-actuals) datos de consumo real. Esto se puede hacer importando datos del módulo de planificación de suministro QAT o ingresando datos manualmente.

2. > [**Ajustar**](#ajustes) datos de consumo real agregando la tasa de informes y los desabastecimientos, y/o interpolando los datos faltantes.

3. > [**Extrapolar**](#extrapolación) datos de consumo real para producir un pronóstico. QAT tiene cinco métodos de extrapolación diferentes para elegir: medias móviles, semimedias, regresión lineal, suavizado exponencial triple (TES, Holt-Winters) y media móvil integrada autorregresiva (ARIMA).

### Importar/Introducir datos reales

Hay dos formas en que un usuario puede agregar datos de consumo real a su programa:

1. Importar datos de consumo real de un programa existente en el módulo de planificación de suministro QAT, o

2. Ingrese datos manualmente en la pantalla "Ingreso de datos y ajustes" en el módulo de pronóstico QAT

**Pasos para importar datos desde el módulo de planificación de suministro QAT:**

1. > Navegue hasta la pantalla “Pronóstico basado en el consumo” à “Importar desde plan de suministro QAT”

2. > Elija el Programa de Pronóstico, Rango de datos de Consumo Real a importar, el programa Plan de Suministro y luego la versión del Plan de Suministro. _Nota: solo los programas de pronóstico que hayan sido **descargados** en la computadora local del usuario estarán disponibles en el menú desplegable de "Programa de pronóstico". Consulte [Descargar/Eliminar programa](03-managing-programs-and-versions.md#downloaddelete) para saber cómo descargar un programa a la computadora local._

3. > Los usuarios luego asignarán la Unidad de planificación del plan de suministro a la Unidad de planificación de pronósticos. _Nota: solo las unidades de planificación que se hayan agregado al Programa de pronóstico en la pantalla "Actualizar unidades de planificación" y para las cuales hayamos marcado la casilla de pronóstico de consumo estarán disponibles en el menú desplegable de "Unidad de planificación de pronóstico". Consulte el Módulo de pronóstico [Unidades de planificación](07-forecasting-module-program-data.md#planning-units) para saber cómo agregar unidades de planificación a un programa de pronóstico._

4. > _Elija "No importar" en el menú desplegable para cualquier PU que no coincida automáticamente. En caso de que tenga muchas PU y desee seleccionar "No importar" para todas las no asignadas, puede marcar la casilla "No importar todas las unidades de planificación no asignadas"_

> ![A screenshot of a computer Description automatically generated](/img/media/image239.png)

Figura 157: Paso 1 para importar datos de consumo real desde el módulo de planificación de suministro

5. > Los usuarios eligen qué región se debe importar al programa de pronóstico y también proporcionan información sobre el porcentaje del consumo real que se debe importar al programa de pronóstico.  
    > ![A screenshot of a computer Description automatically generated](/img/media/image240.png)

Figura 158: Paso 2 para importar datos de consumo real desde el módulo de planificación de suministro

6. > El último paso permitirá a los usuarios volver a verificar los datos de consumo real del plan de suministro para asegurarse de que están importando la unidad de medida y los meses de datos correctos. Si los datos ya existen en el programa de pronóstico, se resaltarán en amarillo. Si un usuario importa datos resaltados en amarillo, esta nueva importación anulará los datos que ya existen en el programa de pronóstico. Los usuarios pueden desmarcar manualmente los meses de datos que no se importarán, si lo desean.  
    > ![P2868#yIS1](/img/media/image241.png)

Figura 159: Paso 3 para importar datos de consumo real desde el módulo de planificación de suministro

7. > Haga clic en "Importar".

**Pasos para ingresar datos de consumo real manualmente**

1. Navegue hasta la pantalla “Pronóstico basado en el consumo” à “Ingreso de datos y ajustes”.

2. Seleccione el programa de pronóstico y el período de revisión deseado. De forma predeterminada, QAT preselecciona un rango de fechas de 36 meses antes del inicio del período de pronóstico. Se muestra una tabla no editable y todos los productos relacionados con este programa de pronóstico, junto con sus datos de consumo ajustados si previamente ha ingresado esos datos; de lo contrario, verás celdas amarillas indicando que no se han ingresado datos de consumo. Por defecto, los productos y el consumo se muestran en unidades de planificación. El usuario también puede expandir cada fila de la tabla para mostrar el consumo por región, si administra un programa multirregional.

> ![P2876#yIS1](/img/media/image242.png)

Figura 160: Tabla superior en la pantalla Ajustes y entrada de datos

3. En la tabla superior, haga clic en una unidad de planificación para mostrar la tabla de datos detallada a continuación para esa unidad de planificación. La tabla de datos detallada tendrá una sección para cada región de su programa.

4. La tabla de datos detallada permite a los usuarios agregar, editar, ajustar o eliminar registros históricos de consumo.
    1. Si desea ingresar datos manualmente, ingrese el consumo histórico para cada región y mes en la fila "Consumo real".

    2. Si ha importado datos de QAT, verá su consumo histórico importado en la fila "Consumo real".

![P2882#yIS1](/img/media/image243.png)

Figura 161: Tabla de entrada manual de datos para el consumo real

3. Por defecto, se supone que los datos se ingresan en la Unidad de Planificación. Sin embargo, el usuario puede especificar la unidad apropiada para los datos detallados haciendo clic en el enlace "cambiar" debajo del nombre de la Unidad de planificación y, en la ventana emergente siguiente, eligiendo ingresar datos usando la unidad de planificación, las cantidades de las unidades de pronóstico (aplicando un factor de conversión administrado por el reino) u otra unidad ingresada por el usuario (y factor de conversión).

![P2885#yIS1](/img/media/image244.png)

Figura 162: Botón para cambiar cómo se ingresan manualmente los datos para el consumo real

![P2887#yIS1](/img/media/image245.png)

Figura 163: Ventana emergente para elegir cómo se ingresan los datos

5. Una vez que un usuario ingresa datos en la fila "Consumo real" en la tabla de datos inferior, haga clic en "Enviar" para guardar las entradas y visualizarlas en el gráfico.
    1. Los usuarios también pueden copiar y pegar datos de Excel u otros formatos tabulares en la fila "Consumo real".

![P2891#yIS1](/img/media/image246.png)

Figura 164: Visualización gráfica de datos de consumo real ingresados manualmente

### Ajustes

**<u>Propósito</u>:** Permitir a los usuarios preparar datos históricos de consumo antes de pasar a la pantalla "Extrapolación". El consumo real histórico puede ser cantidades vendidas, cantidades dispensadas al usuario o cantidades emitidas por las instalaciones de almacenamiento. En esta pantalla, los usuarios pueden ajustar los datos de consumo históricos que se ingresaron manualmente en esta pantalla o que se importaron desde un programa de plan de suministro QAT (si desea importar, primero vaya a la pantalla "Importar desde el plan de suministro QAT").

**<u>Usando esta pantalla</u>:**

1. Hay tres formas de ajustar los datos:
    1. **Ajuste para informes insuficientes**: el valor predeterminado es 100% de informes cada mes. El usuario puede cambiar esto al valor correcto. QAT calculará el consumo ajustado debido a la subregistro. El cálculo supone que las instalaciones que no reportaron ningún consumo tuvieron la misma tasa de consumo que las que sí lo hicieron.

2. **Ajuste por desabastecimiento**: para los datos importados, la cantidad de días de desabastecimiento se extrae del programa del plan de suministro QAT, si se recopilan datos. El valor predeterminado para los días de desabastecimiento es cero días (se supone que el producto siempre está en stock). El usuario puede cambiar esto al valor correcto y QAT calculará el consumo ajustado debido a desabastecimientos. El cálculo supone que los días que el producto estuvo agotado habrían tenido el mismo ritmo de consumo que el resto del tiempo que el producto estuvo en stock. El valor predeterminado para la cantidad de días en un mes se basa en los días del calendario, pero los usuarios pueden ajustar la cantidad de días utilizados para el cálculo del desabastecimiento en "Actualizar configuración de versión".

> **\*Tasa de desabastecimiento** = Desabastecimiento (días)/ (\# de días en el mes).\*
>
> **\*Consumo ajustado** = Consumo real / Tasa de informe / (1 – Tasa de desabastecimiento)\*
>
> Por ejemplo, para un mes determinado, un producto tuvo un consumo de 1000 unidades, estuvo agotado durante 5 de los 31 días del mes y la tasa de notificación fue del 98%:
>
> **\*Tasa de desabastecimiento** = 5 días desabastecidos / 31 días en un mes = 16,1%.\*
>
> **\*Consumo ajustado** = 1000 unidades / 98 % de informes / (1 – 16,1 %) = 1217 unidades.\*

3. **Ajustar los valores faltantes**: haga clic en el botón verde 'Interpolar' en el centro derecho de la pantalla para buscar períodos donde el valor de consumo está en blanco y reemplazarlos con un valor interpolado. QAT interpola encontrando los valores más cercanos en cada lado (antes o después del espacio en blanco), calcula la línea recta entre ellos y usa esa fórmula de línea recta para calcular el valor de los espacios en blanco. Tenga en cuenta que QAT no interpolará para los meses en los que el consumo real sea cero. QAT solo interpolará si hay al menos un punto de datos antes y un punto de datos después de los valores en blanco. Matemáticamente:

<!-- finalizar lista -->

- Donde las x representan meses y las y representan el consumo real,

- Donde los valores de datos conocidos son (x<sub>0</sub>, y<sub>0</sub>) y (x<sub>1</sub>, y<sub>1</sub>)

- Donde los valores de datos desconocidos son (x, y)

- La fórmula para la línea interpolada es

![P2914#yIS1](/img/media/image247.png)

![P2915#yIS1](/img/media/image248.png)

2. Utilice la tabla de Datos detallados para revisar el consumo ajustado.

3. Haga clic en "Enviar" para guardar los datos ingresados/ajustados. Una vez que se guarden los ajustes, el gráfico se actualizará (tenga en cuenta que es necesario hacer clic en Enviar para que esto suceda)

4. Repita los pasos 1 a 3 para cada unidad de planificación que deba ajustarse.

### Extrapolación

**<u>Propósito</u>:** Permitir a los usuarios crear un pronóstico identificando tendencias y temporadas a partir de datos de series de tiempo históricas ingresados por el usuario en la pantalla "Ingreso y ajuste de datos". Hay varias opciones de extrapolación estadística disponibles y se describirán a continuación. Las extrapolaciones de los datos de consumo se realizan unidad de planificación por unidad de planificación.

**<u>Usando esta pantalla</u>:**

1. **Comenzando con la extrapolación:**

<!-- finalizar lista -->

- Antes de utilizar esta pantalla, asegúrese de haber completado la pantalla "Ingreso y ajuste de datos" para cada unidad de planificación y región que desee extrapolar.

- Utilice los filtros en la parte superior de esta pantalla para seleccionar la unidad de planificación, la región a extrapolar y el rango de fechas para utilizar los datos históricos.

- El usuario podrá seleccionar uno o varios de los métodos de extrapolación disponibles en QAT, según corresponda al patrón general de consumo y a los datos disponibles, como se explicará más adelante. Consulte las secciones 2 a 4 a continuación para obtener una explicación de los métodos de extrapolación y cómo elegir mejor los métodos para su pronóstico.

- Tenga en cuenta que los cambios en esta pantalla son opcionales: QAT aplica automáticamente los parámetros de extrapolación predeterminados a todas las unidades de planificación después de que se haya completado la pantalla Ajustes. Luego, el usuario realiza la selección final del pronóstico en la pantalla "Comparar y seleccionar".

<!-- finalizar lista -->

2. **Métodos de extrapolación disponibles en QAT**

> Los métodos de pronóstico en QAT están organizados de simples a sofisticados.

1. > **Promedio móvil:** El promedio móvil es un promedio que se mueve a lo largo del tiempo, descartando datos más antiguos a medida que incorpora datos más nuevos. Para que QAT calcule el promedio móvil, ingrese el número de meses pasados ​​que le gustaría usar en el cálculo del promedio. El usuario puede seleccionar cualquier número entero positivo para este campo. Introducir 5, por ejemplo, significaría que la proyección para el siguiente mes de la serie sería el promedio del consumo de los cinco meses anteriores. Este método es más útil para pronósticos a corto plazo y es sensible a las tendencias. No es apropiado para datos estacionales.

2. > **Semipromedios:** Estimaciones de tendencias semipromedias basadas en dos mitades de una serie. QAT divide los datos reales en dos partes iguales (mitades) y la media aritmética de los valores de cada parte (mitad) se calcula como los valores "y" de dos puntos en una línea. La pendiente de la línea de tendencia está determinada por la diferencia entre estos valores "y" a lo largo del tiempo, según lo definido por la diferencia de los puntos medios de las dos mitades de la serie, o valores "x", de los puntos. Este método es sensible a las tendencias y útil para pronósticos a corto y mediano plazo, pero no es apropiado para datos estacionales.

3. > **Regresión lineal:** La regresión lineal modela la relación entre dos variables ajustando una ecuación lineal a los datos observados. Intervalo de confianza: entre 0 % y 100 % (exclusivo); por ejemplo, un nivel de confianza del 90 % indica que el 90 % de los posibles puntos futuros caerán dentro de este radio de la predicción representada por la línea de regresión. Este método no es apropiado para datos estacionales.

4. > **Suavizado triple exponencial (Holt-Winters)**: en estadística, se utilizan diferentes tipos de suavizado para filtrar el ruido de modo que podamos ver patrones en un conjunto de datos de series temporales con mayor claridad. El suavizado exponencial utiliza datos más antiguos con pesos que disminuyen exponencialmente a lo largo del tiempo. Los parámetros de suavizado en el suavizado exponencial se establecen entre 0 y 1, donde los valores cercanos a 1 favorecen los valores recientes y los valores cercanos a 0 favorecen los valores más antiguos. Los usuarios que utilizan suavizado exponencial triple pueden elegir cuatro parámetros:

<!-- finalizar lista -->

- **alfa**, se aplica al nivel o línea base del conjunto de datos. Los valores alfa más altos dan más peso a los datos más recientes. El parámetro predeterminado QAT para alfa es 0,2

- **beta** determina con qué intensidad se deben valorar las tendencias recientes en comparación con las tendencias más antiguas. El parámetro predeterminado QAT para beta es 0,2.

- **gamma,** refleja el componente estacional del pronóstico. Estacional generalmente se refiere a patrones repetidos _dentro de un año_. Cuanto mayor sea la gamma, más ponderación se aplicará al componente estacional más reciente de los datos. El parámetro predeterminado QAT para gamma es 0,2.

- **Intervalo de confianza:** entre 0% y 100% (exclusivo), p.e. El nivel de confianza del 90% indica que el 90% de los puntos futuros estarán dentro de este radio de predicción. El intervalo de confianza predeterminado de QAT es del 85%.

> QAT solo calculará pronósticos de TES para conjuntos de datos con 24 o más meses de datos.

1. > **ARIMA:** ARIMA o media móvil integrada autorregresiva permite integrar dos modelos estadísticos diseñados para series temporales estacionarias y aplicarlas a series temporales no estacionarias, es decir, series temporales que tienen tendencias o estaciones. A menudo se aplica a pronósticos a corto plazo. "Auto-regresivo" significa que cada punto de la regresión está influenciado por sus valores anteriores y "promedio móvil" implica que cada punto es un promedio, una combinación lineal de uno o más puntos adyacentes. Tanto la autorregresión como la media móvil se "integran" juntas para ajustarse al mejor modelo para la serie mediante la diferenciación o, literalmente, utilizando la diferencia entre puntos de una serie temporal para el análisis en lugar de los valores brutos. Los modelos ARIMA tienen tres parámetros:

<!-- finalizar lista -->

- p o AR (orden de retraso): el número de observaciones de retraso en el modelo. El parámetro predeterminado QAT para p es 0.

- d o I (grado de diferenciación): el número de veces que se diferencian las observaciones brutas. Este valor normalmente es 1 (si hay tendencia) o 0 (sin tendencia). Otros valores más altos son posibles pero no esperados. El parámetro predeterminado QAT para d es 1.

- q o MA (orden de la media móvil): el tamaño de la ventana de media móvil o el número de observaciones diferenciadas que se van a promediar. El parámetro predeterminado QAT para q es 1.

- Intervalo de confianza: entre 0% y 100% (exclusivo), p.e. El nivel de confianza del 90% indica que el 90% de los puntos futuros estarán dentro de este radio de predicción. El intervalo de confianza predeterminado de QAT es del 85%.

> El cálculo de ARIMA puede ser estacional o no estacional, según la elección del usuario y la comprensión de sus datos y expectativas sobre si el consumo de un producto en particular está sujeto o no a influencias estacionales. La selección predeterminada de QAT es para ARIMA estacional. QAT solo calculará pronósticos ARIMA para conjuntos de datos con 13 o más meses de datos.

3. **¿Qué método de extrapolación debo utilizar?**

> A continuación se presentan algunas consideraciones para seleccionar un método de pronóstico. Los métodos de pronóstico en QAT están organizados de simples a sofisticados. En general,

- Los modelos más sofisticados son más sensibles a los problemas en los datos.

- Si tiene datos más deficientes (puntos de datos faltantes, tasas de presentación de informes variables, < 12 meses de datos), es probable que los métodos de pronóstico más simples, como los promedios móviles, sean más útiles.

> La elección del método de extrapolación depende del patrón esperado en los datos. Algunos patrones típicos incluyen:

- Estacionario, donde el rango de valores observados a lo largo del tiempo ronda un promedio. Los modelos aplicados a dichos conjuntos de datos pueden incluir
  - Media móvil

  - ARIMA (fuera de temporada)

- Tendencia sin componente estacional, donde los valores observados tienen una tendencia creciente o decreciente. Los modelos aplicados a dichos conjuntos de datos pueden incluir
  - Semipromedios

  - Regresión lineal

- Tendencia y estacional, donde los valores observados en un conjunto de datos tienen componentes tanto de tendencia como estacionales. Los modelos aplicados a dichos conjuntos de datos pueden incluir
  - ARIMA (estacional)

  - Suavizado Triple Exponencial (Holt-Winters)

- Estacional sin tendencia, donde los valores observados tienen componente estacional pero no tendencia. Los modelos aplicados a dichos conjuntos de datos pueden incluir
  - Suavizado Triple Exponencial (Holt-Winters)

> Los modelos aquí sugeridos no son exhaustivos ni excluyentes. QAT permite al usuario aplicar una variedad de métodos de extrapolación y luego compararlos utilizando métricas de error de pronóstico o de mejor ajuste.
>
> El segundo paso es considerar si se espera que los valores de pronóstico reflejen fielmente los patrones históricos en sus datos y, por lo tanto, si utilizará las métricas de error para informar su selección. Al elegir un resultado (ya sea ignorando la métrica de error o no), será importante documentar su justificación para hacerlo para informar las discusiones o revisiones de su pronóstico y para ayudar a los futuros pronosticadores a respaldar sus decisiones.

4. **¿Cómo interpreto los errores?**0F\[1\]

> QAT calcula automáticamente las métricas de error de pronóstico utilizando varios métodos. Estos incluyen:

- MAPE (Error porcentual absoluto medio): se puede interpretar como la diferencia porcentual promedio entre las predicciones y sus objetivos previstos en el conjunto de datos. Por ejemplo, si MAPE es del 15%, entonces sus predicciones están en promedio un 15% lejos de los valores reales.
  - _MAPE = \[(1/Nº de observaciones) \* ∑ (|(real – pronóstico)|/actual)\] x 100_

- WAPE (Error porcentual absoluto ponderado): WAPE es una métrica apropiada para cuando el conjunto de datos utilizado tiene valores bajos o intermitentes. Un porcentaje WAPE de 5 significa que el pronóstico estuvo equivocado en un 5% en todo el conjunto de datos durante un determinado período de evaluación. Dependiendo del caso de uso, se recomienda elegir un modelo que proporcione el menor valor WAPE.
  - _WAPE = \[ (∑<sup>n</sup> | (real – pronóstico) | / ∑ <sup>n</sup> (actuales)\] x 100_

- RMSE (Root Mean Squared Error): RMSE se puede interpretar como el error promedio que tienen las predicciones del modelo en comparación con las reales, con un peso extra añadido a los errores de predicción mayores. Generalmente, cuanto más cerca esté el RMSE de cero, más preciso será el modelo.
  - _RMSE = sqrt \[∑<sup>n</sup> (real – pronóstico)<sup>2</sup>\] / No. de observaciones_

- MSE (Error cuadrático medio): MSE es la media agregada de la diferencia al cuadrado entre los datos reales y las predicciones. Debido a esta cuadratura se resaltan grandes errores. MSE es útil cuando se trabaja en modelos donde se deben minimizar grandes errores ocasionales. Generalmente, cuanto más cerca esté de 0, más preciso será el modelo.
  - _MSE = ∑ <sup>n</sup> \[(real – pronóstico)<sup>2</sup>\] / No. de Observaciones)_

- _R<sup>2</sup> (la correlación al cuadrado entre la variable dependiente y los valores ajustados):_

> _R<sup>2</sup> = 1 – \[regresión suma al cuadrado (SSR) / suma total de cuadrados (SST)\], donde la suma al cuadrado de los residuos de la regresión (SSR) es la suma de sus residuos al cuadrado, y la suma total de cuadrados (SST) es la suma de la distancia entre los datos y la media, todo al cuadrado. El valor R<sup>2</sup> es siempre un número entre 0 y 1. R<sup>2</sup> es una medida del ajuste de una línea de regresión a una serie de observaciones históricas con valores más cercanos a 1 que indican una correspondencia más fuerte entre los valores reales y predichos (modelo de regresión). No es una medida de error y no debe usarse por sí sola para evaluar la idoneidad de una predicción, sino en combinación con otras métricas de error y el conocimiento del programa por parte del usuario.

- _R<sup>2</sup> = 1 – \[regresión suma de cuadrados (SSR) / suma total de cuadrados (SST)\]_

> Aparte de R<sup>2</sup>, cuanto más baja es la puntuación, más se ajusta el resultado del método de pronóstico a los datos históricos. En los modelos en los que se espera que los patrones históricos en un conjunto de datos se reflejen en los valores futuros, se podría usar un valor de error bajo para ayudar a seleccionar un método de extrapolación preferido, y QAT resaltará estos mejores ajustes en una tabla. Sin embargo, si se anticipan cambios sustanciales que no se ajustan a los datos históricos, la extrapolación que mejor se ajusta puede no ser el pronóstico más apropiado a seleccionar.
>
> Para hacer la mejor selección entre los métodos de extrapolación para su propósito, antes de revisar las métricas de error, lo más importante es primero comprender qué método de extrapolación es más apropiado para el patrón esperado en los datos.

5. **Optimización de los parámetros de pronóstico de TES y ARIMA**

![A screenshot of a computer Description automatically generated](/img/media/image249.png)

Figura 165: Optimizar enlace TES y ARIMA

> **Como se describe en la [Sección A3. Extrapolación](#extrapolación), QAT ofrece a los usuarios múltiples opciones de extrapolación, incluidos TES y ARIMA estacional y no estacional. Los usuarios son libres de utilizar los valores predeterminados de QAT o ingresar parámetros de pronóstico alternativos con la intención de reducir las métricas de error, aumentando así la correspondencia entre los resultados del método de pronóstico y los puntos de datos reales en el período de datos históricos. Si el usuario está trabajando en línea, QAT puede optimizar los parámetros TES y ARIMA iterando, calculando el RMSE de cada iteración y seleccionando los parámetros que producen el RMSE más bajo.**

![A screenshot of a computer Description automatically generated](/img/media/image250.png)

Figura 166: Optimización de la ventana emergente TES y ARIMA

> **Para TES, QAT calcula 125 iteraciones del pronóstico, probando cada uno de los parámetros alfa, beta y gamma en combinación con los siguientes valores: 0, 0,2, 0,4, 0,8 y 1. Cualquiera de las 125 combinaciones para un producto determinado que produzca el resultado con el RMSE más bajo se mostrará en la pantalla de extrapolación.**
>
> **Para ARIMA o ARIMA estacional, QAT calcula 24 iteraciones del pronóstico, probando cada uno de los parámetros p, d y q en combinación, utilizando los siguientes valores:**

- **p: 0 o 1**

- **d: 0, 1 o 2**

- **q: 0, 1, 2 o 3**

> **Cualquiera de las 24 combinaciones para un producto determinado que produzca el resultado ARIMA con el RMSE más bajo se mostrará en la pantalla de extrapolación.**
>
> **Nota: Las estadísticas no son mágicas. El supuesto subyacente de todos estos métodos de extrapolación es que las tendencias y patrones de los datos históricos continuarán en el futuro. Por lo tanto, las métricas de bajo error <u> no necesariamente garantizan un mejor pronóstico </u>.**

6. **Extrapolación masiva**

![A screenshot of a computer Description automatically generated](/img/media/image251.png)

Figura 167: Enlace de extrapolación masiva

> **En la pantalla de extrapolación QAT, el usuario puede comparar los resultados de los distintos métodos de extrapolación tanto gráficamente como en una tabla de resultados, producto por producto. Esto permite al usuario anular la selección de métodos de extrapolación que considere que no se aplican a un producto determinado para limitar las opciones en la pantalla Comparar y Seleccionar solo a aquellas que el usuario elija mostrar.**

![A screenshot of a computer Description automatically generated](/img/media/image252.png)

Figura 168: Ventana emergente de extrapolación masiva

> **Si el usuario prefiere enviar todos los resultados de los métodos de extrapolación disponibles para más de un producto directamente a la pantalla Comparar y Seleccionar, el usuario puede seleccionar la extrapolación masiva. Desde la ventana emergente Extrapolación masiva, el usuario puede seleccionar un rango de fechas histórico desde el cual extrapolar el pronóstico (solo un rango de fechas por extrapolación masiva), si desea aplicar estacionalidad a su cálculo ARIMA, qué unidades de planificación y regiones (si se utilizan datos regionales) incluir en la extrapolación masiva y si optimizar o no los parámetros ARIMA y TES para la extrapolación.**
>
> **Después de ejecutar la extrapolación masiva, todos los resultados se pueden ver en la pantalla de extrapolación, la pantalla de comparación y selección y el cuadro desplegable de la pantalla de resumen de pronóstico (regional). El usuario puede seleccionar su método de extrapolación preferido desde la pantalla Comparar y seleccionar o la pantalla Resumen de pronóstico (regional).**
>
> **La extrapolación masiva en QAT es particularmente útil cuando se trabaja con un gran conjunto de productos para los cuales se dispone de datos de consumo oportunos, completos y precisos durante 12 meses o más.**

## Pronósticos de árboles

Los usuarios pueden realizar un pronóstico basado en árboles si los datos necesarios para un pronóstico basado en el consumo no están disponibles o no son útiles para predecir el consumo futuro. Los pronósticos en árbol se adaptan de manera flexible a todos los demás métodos de pronóstico, como **morbilidad, servicios y métodos demográficos**. Los usuarios pueden especificar cambios a lo largo del tiempo en un árbol, ya sea especificando directamente la tasa de cambio o extrapolando a partir de datos pasados.

### Construyendo un árbol

![A screenshot of a computer Description automatically generated](/img/media/image253.png) Figura 169: Administrar árbol – Lista de árboles (haga clic derecho para acceder a las acciones)

**<u>Propósito</u>:** Permitir a los usuarios:

1. Ver una lista de sus árboles existentes.

2. Edite un árbol existente haciendo clic en cualquier fila.

3. Haga clic derecho en una fila para
    - > **Duplicar árboles existentes:** Los usuarios también pueden duplicar un árbol existente en otro programa. Los usuarios deben tener acceso a ambos programas y haberlos descargado en su computadora local para duplicarlos.

    - > **Eliminar árboles existentes:** Habrá una pantalla de confirmación, pero esta acción es irreversible a partir de entonces. Sin embargo, si elimina accidentalmente un árbol, puede volver a descargar un programa si se ha realizado una copia de seguridad del árbol eliminado en el servidor.

    - > **Tabla de árbol:** Esto permite al usuario editar el árbol seleccionado en la pantalla [Tabla de árbol](#técnicas-avanzadas)

4. Agregue un nuevo árbol a un programa descargado haciendo clic en el menú desplegable "Crear o Seleccionar" en la esquina superior derecha de la pantalla. Se pueden construir nuevos árboles:

<!-- finalizar lista -->

- manualmente - seleccione '+ Dibuja tu propio árbol'

- desde una plantilla de árbol - seleccione el nombre de la plantilla deseada. Si un usuario desea ver una plantilla de árbol agregada a QAT que no existe y que beneficiaría a la comunidad QAT, puede enviar una solicitud de cambio al [Sistema de asistencia técnica de tickets de QAT] (#qat-helpdesk-and-tickets).

**\*Nota**: [Los espectadores del pronóstico](12-annex-3-user-role-matrix.md#annex-3-user-role-matrix) pueden ver cualquier árbol que se haya subido al servidor y al que tengan acceso; sin embargo, solo los usuarios/administradores de Forecast podrán crear y editar/actualizar árboles.\*

**<u>Usando esta pantalla</u>:**

- Primero se debe descargar un programa de pronóstico para construir o editar un árbol.

- Antes de construir y editar un árbol, primero agregue las unidades de planificación del programa de pronóstico en la pantalla "Actualizar unidades de planificación".

- **¿Construir un árbol similar a un árbol existente?**
  - <u> Misma estructura, diferentes números </u>: solo compilación
un árbol y utilice la función [escenario](#escenarios).

  - <u>Sestructura ligeramente diferente</u>: Duplicar un
árbol existente haciendo clic derecho en una fila y seleccionando "Duplicar árbol".
Nota: Si desea duplicar un árbol existente de otro programa, debe
Debes tener ambos programas descargados, luego puedes duplicar desde un programa.
a otro programa.

- **¿Quieres comenzar desde una plantilla?** Consulte la sección [Plantilla de árbol](#tree-templates)

- Los usuarios también pueden eliminar árboles haciendo clic derecho en una fila y seleccionando "Eliminar árbol".

#### Tipos y funciones de nodos

**Construcción del árbol:** El árbol de pronóstico se construye de arriba hacia abajo, utilizando diferentes tipos de "nodos". Consulte los tipos de nodos y las acciones de los nodos a continuación. Cada árbol de pronóstico debe comenzar con un nodo Agregación o un nodo Número e incluir uno o más nodos Unidad de planificación, que forman el resultado del pronóstico.

**Acciones de nodo:**

- ![P3021L144#yIS1](/img/media/image254.png) Eliminar: Elimina el nodo seleccionado y todos sus hijos.

- ![](/img/media/image255.png) Copiar/Mover: Copia o mueve el nodo seleccionado y todos los hijos bajo el nodo. El usuario puede seleccionar el destino.

- ![P3023#yIS1](/img/media/image256.png) Agregar plantilla de rama: agrega una plantilla de árbol como una rama debajo del nodo elegido.

- ![](/img/media/image257.png) Agregar: Agrega un hijo al nodo seleccionado.

- ![P3025#yIS1](/img/media/image258.png)/![P3025#yIS2](/img/media/image259.png) Contraer/Expandir: Contraer/expandir el nodo actual y todos sus hijos. Los usuarios también pueden pasar el cursor sobre el punto para elegir qué nodo expandir y hacer clic una vez para expandir ese nodo y todos sus hijos. Además, hay una casilla de verificación "Contraer árbol" en la parte superior de la pantalla Construir árboles que colapsará todos los nodos excepto el nodo superior.

> ![](/img/media/image260.png)

Figura 170: Ejemplo de un árbol de pronóstico colapsado

**Tipos de nodos:**

<table>
  <thead>
    <tr class="header">
      <th>
        <strong>Tipo de nodo</strong>
      </th>
      <th>
        <strong>Valor</strong>
      </th>
      <th>
        <strong>Niños potenciales</strong>
      </th>
      <th>
        <strong>Afuncionalidad avanzada</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        <strong>Aggregación ∑</strong>
      </td>
      <td>Suma de nodos secundarios.</td>
      <td>
        <strong>∑</strong> o Número
      </td>
      <td>-</td>
    </tr>
    <tr class="even">
      <td>
        <strong>Número #</strong>
      </td>
      <td>Definido en este nodo</td>
      <td>
        % o 
        <img
          src="/img/media/image261.png"
          style={{width: '0.17721in', height: '0.15435in'}}
          alt="P3041C11T27#yIS1"
        />
      </td>
      <td>
        ⇅, 
        <img
          src="/img/media/image262.png"
          style={{width: '0.15574in', height: '0.15574in'}}
          alt="P3042C12T27#yIS1"
        />
        , 
        <img
          src="/img/media/image264.png"
          style={{width: '0.15152in', height: '0.12266in'}}
          alt="P3042C12T27#yIS2"
        />
        , 
        <img
          src="/img/media/image265.png"
          style={{width: '0.25466in', height: '0.16149in'}}
        />
      </td>
    </tr>
    <tr class="odd">
      <td>
        <strong>Porcentaje %</strong>
      </td>
      <td>Porcentaje del padre.</td>
      <td>
        % o 
        <img
          src="/img/media/image261.png"
          style={{width: '0.17721in', height: '0.15435in'}}
          alt="P3046C15T27#yIS1"
        />
      </td>
      <td>
        ⇅, 
        <img
          src="/img/media/image262.png"
          style={{width: '0.15574in', height: '0.15574in'}}
          alt="P3047C16T27#yIS1"
        />
        , 
        <img
          src="/img/media/image265.png"
          style={{width: '0.25466in', height: '0.16149in'}}
        />
      </td>
    </tr>
    <tr class="even">
      <td>
        <strong>Embudo</strong> 
        <img
          src="/img/media/image266.png"
          style={{width: '0.14783in', height: '0.16957in'}}
        />
      </td>
      <td>
        Suma de nodos de origen vinculados (
        <img
          src="/img/media/image267.png"
          style={{width: '0.24997in', height: '0.15623in'}}
        />
        )
      </td>
      <td>
        % o
        <img
          src="/img/media/image261.png"
          style={{width: '0.17721in', height: '0.15435in'}}
          alt="P3046C15T27#yIS1"
        />
      </td>
      <td>-</td>
    </tr>
    <tr class="odd">
      <td>
        <strong>Unidad de previsión</strong> 
        <img
          src="/img/media/image261.png"
          style={{width: '0.17721in', height: '0.15435in'}}
          alt="P3049C17T27#yIS1"
        />
      </td>
      <td>
        <p>
          Porcentaje de los parámetros de la unidad matriz y de previsión. pueden ser dos
          diferentes tipos de uso:
        </p>
        <ul>
          <li>
            <blockquote>
              <p>
                <img src="/img/media/image268.png" />: Continuo
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                <img
                  src="/img/media/image269.png"
                  style={{width: '0.1375in', height: '0.175in'}}
                  alt="P3052C18T27#yIS1"
                />
                : Discreto
              </p>
            </blockquote>
          </li>
        </ul>
      </td>
      <td>
        <img
          src="/img/media/image270.png"
          style={{width: '0.20816in', height: '0.17563in'}}
          alt="P3053C19T27#yIS1"
        />
      </td>
      <td>
        ⇅, 
        <img
          src="/img/media/image262.png"
          style={{width: '0.15574in', height: '0.15574in'}}
          alt="P3054C20T27#yIS1"
        />
      </td>
    </tr>
    <tr class="even">
      <td>
        <strong>Unidad de planificación</strong> 
        <img
          src="/img/media/image270.png"
          style={{width: '0.20816in', height: '0.17563in'}}
          alt="P3056C21T27#yIS1"
        />
      </td>
      <td>Porcentaje de los parámetros de la unidad principal y de planificación.</td>
      <td>-</td>
      <td>
        ⇅, 
        <img
          src="/img/media/image262.png"
          style={{width: '0.15556in', height: '0.15556in'}}
          alt="P3059C24T27#yIS1"
        />
      </td>
    </tr>
  </tbody>
</table>

- > **∑ Atributos específicos del nodo de agregación:** ninguno: se define por la suma de sus hijos. _Por ejemplo, si hay dos nodos secundarios debajo del nodo de Agregación iguales a 50 y 100, QAT agregaría automáticamente estos números para definir el nodo de Agregación: 50 (secundario) + 100 (secundario) = 150 (padre de Agregación)._

- > **\# Número de atributos específicos del nodo:**
  - > <u>Node Unit</u>: menú desplegable que consta de
paciente, cliente, cliente, personas o unidad

  - > <u>Month:</u> elija el mes/año en que se informaron estos datos
de*. Por ejemplo, si un usuario desea definir un nodo numérico como Población del país
y los datos son de enero de 2020, el mes del nodo debe ser enero de 2020.*

- > <u>Valor de nodo:</u> Defina el valor numérico para este
nodo. *Por ejemplo, si la población del país en enero de 2020 es 500.000, la
El valor del nodo debe ser 500.000.* Si este valor cambia con el tiempo, los usuarios pueden utilizar
la pestaña [Modelado/Transferencia](#modelingtransfers) para especificar el cambio.
    - > **% Porcentaje de atributos específicos del nodo:**
      - > <u>Node Unit:</u> menú desplegable que consta de
paciente, cliente, cliente, personas o unidad

      - > <u>Month:</u> elige el mes/año en el que se obtuvieron estos datos
informado desde*.* Normalmente, este será el mes/año de inicio del pronóstico.

      - > <u>Percentaje de Padre:</u> define el porcentaje
del nodo padre. *Por ejemplo, si la mitad del nodo del número principal, País
Población, son mujeres, el porcentaje de padres sería del 50%.*

      - > <u>Valor principal para el mes:</u> no editable y
proporcionado sólo como referencia.

      - > <u>Valor de nodo</u>**:** calculado automáticamente por QAT
basado en el porcentaje definido por el usuario y el valor principal. esto
El campo no es editable.

    - > ![](/img/media/image271.png) **Atributos específicos del nodo Unidad de pronóstico:**
      - > <u>Month:</u> elige el mes/año en el que se obtuvieron estos datos
reportado desde. Normalmente, este será el mes/año de inicio del pronóstico.

      - > <u>Percentaje de Padre:</u> define el porcentaje
del nodo padre.

      - > <u>Valor principal para el mes:</u> no editable y
proporcionado sólo como referencia.

      - > <u> Porcentaje del valor principal del mes: </u> no editable
y se proporciona sólo como referencia.

      - > <u>Tracer Categoría: menú desplegable </u> que se puede utilizar
para ayudar a reducir las unidades de pronóstico, pero se completará automáticamente una vez que
Se elige la unidad de pronóstico.

      - > <u>Copiar de Plantilla:funcionalidad avanzada </u>,
en el que un usuario puede utilizar una [Plantilla de uso](#usage-templates) para ayudar
con la construcción de un árbol de manera eficiente. Este menú desplegable no es obligatorio.

      - > Unidad de pronóstico <u>: menú desplegable </u> de todos los disponibles
unidad de previsión en el programa de usuario. Si una unidad de pronóstico no está disponible
en el menú desplegable, el usuario primero debe agregarlo a '[Actualizar unidad de planificación](07-forecasting-module-program-data.md#planning-units)'
pantalla.

      - > Unidad de planificación <u>: menú desplegable </u> filtrado según
unidad de pronóstico elegida. Si solo hay una unidad de planificación asociada
con la unidad de pronóstico, este campo se completará automáticamente.

      - > <u>Tipo de Uso:</u>
        - > ![](/img/media/image272.png) <u>Discrete</u>: Cada \_\_\_\_\_\_\_ \[unidad de nodo principal\] requiere \_\_\_\_\_\_\_\_\_ \[unidad de medida de pronóstico\] \_\_\_\_\_\_\_\_\_\_ veces por \[día/semana/mes/año\] para \_\_\_\_\_\_\_\_\_\_\_\_\_ \[día/semana/mes/año\]
          - > Calcular <u> (Todo en el primer mes/mes a mes) </u>
: Si selecciona "Todo en el primer mes", QAT cargará por adelantado el total
cantidad prevista al mes de inicio del nodo. Si es seleccionado
“Mes a mes”, QAT calculará la cantidad de forma discreta
mes a mes (ver [Técnicas avanzadas](#técnicas-avanzadas)
para más información).

          - > <u>Uso único (Sí/No):</u> permite al usuario
determinar si esta unidad de pronóstico se utiliza durante un período específico de
tiempo. Si se selecciona “sí”, el período de tiempo para los cálculos discretos
no es necesario.

        - > ![](/img/media/image268.png) <u>Continuo</u>: Cada \_\_\_\_\_\_\_ \[unidad de nodo principal\] requiere \_\_\_\_\_\_\_\_\_ \[unidad de medida de pronóstico\] cada \_\_\_\_\_\_\_ \[día/semana/mes/año\]

      - > <u>Lag en meses:</u> se utiliza para detallar si se realiza una previsión
La unidad está retrasada o tiene un uso del producto en fases. Ver [Técnicas avanzadas](#técnicas-avanzadas)
para más información.

- > ![](/img/media/image273.png) **Atributos específicos del nodo Unidad de planificación:** el nodo se crea automáticamente cuando la unidad de previsión se agrega a un árbol. La mayoría de los atributos en la pantalla Agregar/Editar nodo no son editables y solo sirven como referencia; sin embargo, algunos se pueden actualizar según circunstancias específicas:
      - > <u>Month:</u> elige el mes/año en el que se obtuvieron estos datos
reportado desde. Normalmente, este será el mes/año de inicio del pronóstico.

      - > Anulación de cálculo de <u>C: los usuarios de </u> pueden elegir
utilice el cálculo automático de QAT para el número de unidades de planificación haciendo clic en "Sí"
o ingrese manualmente un valor haciendo clic en "No". Ver [Técnicas avanzadas](#técnicas-avanzadas)
para más información.

**Cambios con el tiempo**

Si bien la estructura de árbol permanece constante a lo largo del tiempo, los porcentajes y valores de los nodos pueden cambiar con el tiempo. Utilice el menú desplegable de fechas para ver el árbol en cualquier mes. Las tres funcionalidades siguientes están disponibles en cada nodo y permiten al usuario controlar cómo los nodos cambian con el tiempo:

- **⇅ Modelado:** Permite al usuario especificar la tasa exacta de cambio

- ![P3094#yIS1](/img/media/image274.png "Link with solid fill")**Transferir**: permite a los usuarios vincular dos nodos entre sí, de modo que la disminución del nodo de origen está vinculada al aumento del nodo de destino. Útil para transiciones.

- ![P3095#yIS1](/img/media/image275.png) **Extrapolación:** Permite a los usuarios utilizar datos históricos para extrapolar cambios futuros.

Para obtener más información y ejemplos específicos de cambios a lo largo del tiempo, consulte [Modelado/Transferencias](#modelingtransfers)<u>.</u>

#### Conceptos básicos de construcción de árboles

![](/img/media/image276.png)

Figura 171: Ejemplo de árbol de pronóstico simple

Los árboles de pronóstico se construyen de arriba hacia abajo usando diferentes tipos de [nodos.](#node-types-functions) Cada árbol de pronóstico debe comenzar con un nodo de Agregación o un nodo de Número, e incluir uno o más nodos de Unidad de Planificación. Los nodos de la Unidad de planificación deben ser hijos de un nodo de la Unidad de previsión. Por lo tanto, un usuario debe tener al menos tres niveles de nodos (nodo Agregación/Número, nodo Unidad de previsión y nodo Unidad de planificación) para producir un resultado de previsión.

**Pasos para construir un árbol manual:**

1. > Descargar un programa

2. > Navegue hasta la pantalla Árbol de pronóstico à Administrar árbol

3. > En la parte superior derecha de la pantalla, haga clic en el menú desplegable azul "Crear o Seleccionar" y seleccione "+ Dibujar su propio árbol" en el menú desplegable.

4. > Defina los detalles del árbol, como el método de pronóstico (demográfico, de morbilidad o servicios), el nombre del árbol y la región.
    1. Una vez creado, los usuarios pueden editar los detalles del árbol haciendo clic en el ícono ![P3108#yIS1](/img/media/image277.png) al lado del menú desplegable Árbol.

    2. (opcional) Al hacer clic en el ícono ![P3109#yIS1](/img/media/image277.png) al lado del menú desplegable Escenario, los usuarios pueden agregar, editar y eliminar escenarios de árbol. Para obtener más información, consulte [Escenarios](#escenarios) en la sección siguiente.

5. > De forma predeterminada, QAT comenzará con un nodo numérico con un valor de cero en el Nivel 0. Haga clic en este nodo predeterminado para editar/actualizar el nodo.

6. > Agregue un nuevo nodo (secundario) debajo del nodo principal haciendo clic en ![P3111#yIS1](/img/media/image278.png) y eligiendo el tipo de nodo apropiado. Según el padre, QAT filtrará automáticamente qué [tipos de nodos secundarios](#node-types-functions) están disponibles. QAT agregará el nuevo nodo bajo el mismo padre y a la derecha de cualquier nodo existente. Continúe agregando nodos según los datos disponibles hasta terminar con un nodo Unidad de pronóstico y su nodo Unidad de planificación asociado.
    1. Para eliminar un nodo, simplemente haga clic en el ícono ![P3112#yIS1](/img/media/image254.png), pero tenga en cuenta que esto también eliminará los nodos secundarios debajo del que se está eliminando.

    2. Para copiar o mover un nodo, haga clic en el icono ![](/img/media/image279.png). En la ventana emergente, revise o seleccione dónde desea copiar o mover el nodo: el árbol, el nivel del padre y el padre.
        - Para copiar, QAT seleccionará la misma ubicación que el nodo original de forma predeterminada

        - Para mover, QAT seleccionará el mismo árbol que el nodo original de forma predeterminada.

        - Se moverá/copiará toda la rama (incluidos todos los nodos secundarios).

- Utilice la casilla de verificación para seleccionar si desea incluir modelado o no. Nota: Las transferencias nunca se copian ni se mueven.

    3. Como característica de validación, QAT marcará un nodo de Unidad de planificación (PU) con un borde rojo en dos circunstancias: 1) si un usuario ha agregado una Unidad de pronóstico (FU) y una PU, y luego cambia la FU y olvida por error cambiar también a la PU correspondiente correcta, o 2) si un usuario crea un árbol a partir de una plantilla de árbol que tiene PU, pero el usuario no tiene esas PU en su programa.

![](/img/media/image280.png)

> Para corregir esto, los usuarios pueden hacer clic en el nodo PU y elegir la PU apropiada de la lista desplegable.

![P3117#yIS1](/img/media/image281.png)

4. _Consejo: los usuarios pueden “limpiar” su árbol haciendo clic en cualquiera de las casillas de verificación disponibles (Ocultar unidad de planificación, Ocultar unidad de previsión y unidad de planificación u Ocultar validación de árbol) en la parte superior del árbol._

<!-- finalizar lista -->

7. > _(opcional)_ Los usuarios pueden insertar una plantilla de árbol dentro del cuerpo de su árbol haciendo clic en el icono ![P3119#yIS1](/img/media/image256.png) para agregar una plantilla de rama. Esta rama se agregará debajo del nodo actual como hijo. Esto mejora la eficiencia de agregar múltiples lotes de nodos (una rama) que son iguales o similares en un árbol existente o en un árbol nuevo mediante el uso de plantillas. Para obtener más información sobre las plantillas de sucursales, consulte [Plantillas de sucursales](#branch-templates)

8. > _(opcional)_ Haga clic en los niveles del árbol (cuadros rectangulares de color azul oscuro a la izquierda del árbol) para:
    - > Nombra los niveles de un árbol. Esto hará que el árbol sea más fácil de leer y se usará en los menús desplegables y en el eje de la pantalla [Validación de modelado](#validaciones de modelado).

    - > Reordene las ramas de su árbol como desee utilizando las flechas hacia arriba y hacia abajo para indicar la posición de izquierda a derecha de las ramas. Si la lista es larga, utilice el menú desplegable "ver hijos de" para filtrar los nodos.

![A screenshot of a computer Description automatically generated](/img/media/image282.png)

9. > Los árboles QAT se **guardan automáticamente** en la computadora local (para guardar un árbol en el servidor, consulte [Cargar versión](03-managing-programs-and-versions.md#upload). Las cantidades que aparecen en los nodos también se calculan automáticamente a medida que cambia el árbol; sin embargo, si QAT funciona con lentitud mientras editan el árbol, los usuarios pueden desmarcar la casilla "Calcular automáticamente" para detener los cálculos automáticos del backend. Para ver manualmente los cálculos actualizados después de cada edición, los usuarios deberán hacer clic en ![P3121#yIS1](/img/media/image283.png) icono.
    1. > Los usuarios pueden descargar sus árboles en formato PDF para compartirlos con las partes interesadas haciendo clic en el ícono ![P3122#yIS1](/img/media/image284.png).

    2. > Los usuarios pueden descargar un formulario de esquema de su árbol para verificar la validación de la suma de niños, los valores de los nodos y sus nodos haciendo clic en el ícono ![P3123#yIS1](/img/media/image285.png).

10. > _(opcional)_ Para editar valores por lotes en un árbol, el usuario puede usar la pantalla **Tabla de árbol**, a la que se puede acceder a través de un enlace en la parte superior izquierda de la pantalla Administrar árbol - Crear árboles.
    - > En la pantalla Tablas de árbol,

    - > Los menús desplegables en la parte superior de la pantalla deben completarse previamente con el mismo programa, árbol, escenario y fecha de visualización que se seleccionaron anteriormente, pero los usuarios pueden actualizar los menús desplegables según sea necesario antes de realizar modificaciones.

    - > Los nodos se agrupan por tipo de nodo en diferentes pestañas. Navegue hasta los nodos que desea editar usando las pestañas

    -> Realicé ediciones en los valores de cualquier nodo editando las celdas de la tabla.

    - > Vea el ejemplo y la captura de pantalla en la Figura 157

    - > Tenga en cuenta que si bien la pantalla Tablas de árbol es útil para editar los valores de múltiples nodos de manera eficiente, la pantalla Tablas de árbol <u>not</u> permite editar la estructura de árbol. Utilice la pantalla Administrar árbol - Construir árboles para agregar, eliminar, copiar o mover nodos.

    - > Al regresar a la pantalla Construir árbol, es posible que los usuarios deban hacer clic en el icono ![P3121#yIS1](/img/media/image283.png) para ver los valores actualizados.

> ![A screenshot of a computer Description automatically generated](/img/media/image286.png)

Figura 172 Acceso y uso de la pantalla de tabla de árbol

#### Escenarios

**Uso de escenarios:** Los escenarios se utilizan para modelar diferentes valores para el mismo árbol. Los escenarios son útiles cuando los usuarios desean analizar el resultado de diferentes cambios a lo largo del tiempo (por ejemplo: objetivo nacional versus status quo, diferentes niveles de estacionalidad, transición de unidades de planificación a diferentes ritmos, etc.), pero les gustaría mantener la estructura base <u>same</u>. Para crear un árbol con estructuras <u> diferentes </u> (por ejemplo, diferentes regímenes, diferentes metodologías), se recomienda crear otro árbol (consejo: utilice la función duplicar árbol\!). Para agregar, editar, eliminar o desactivar un escenario, use el ícono ![P3125#yIS1](/img/media/image277.png) al lado del menú desplegable del escenario. Utilice el menú desplegable de escenarios para seleccionar qué escenario ver y editar.

<table>
  <thead>
    <tr class="header">
      <th>
        <strong>Fegido para todos los escenarios</strong>
      </th>
      <th>
        <strong>Unico para cada Escenario</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        <p>estructura de árbol</p>
        <p>Título de nodo</p>
        <p>Tipo de nodo</p>
      </td>
      <td>
        <p>Valor de nodo</p>
        <p>Mes</p>
        <p>Notas</p>
        <p>Modelado/Transferencia/Extrapolación</p>
      </td>
    </tr>
  </tbody>
</table>

_Notas_

- _De forma predeterminada, solo se muestran_ _escenarios activos. Para ver escenarios inactivos, haga clic en el icono_ ![P3125#yIS1](/img/media/image277.png) _al lado del menú desplegable de escenarios, seguido de "Mostrar inactivos"_

- _Los usuarios pueden elegir diferentes combinaciones de árbol-escenario para cada unidad de planificación en la pantalla [Comparar y seleccionar] (#compare-and-select)._

#### Modelado/Transferencias

**<u>Propósito</u>:** Si un nodo cambia con el tiempo, un usuario puede utilizar la pestaña Modelado/Transferencia para modelar el crecimiento/pérdida dentro de un solo nodo o una transferencia de un nodo a otro. Tenga en cuenta que esta funcionalidad solo está disponible para nodos de número (\#) y nodos de porcentaje (%) (incluidas las unidades de previsión y las unidades de planificación). El usuario aún puede usar la pestaña para ver los datos mensuales de los nodos de Agregación y Embudo.

**<u>Usando esta pestaña</u>:**

Los usuarios pueden **manualmente** ingresar cualquier cambio deseado a lo largo del tiempo (crecimiento/pérdida/transferencia) en la tabla superior, o pueden utilizar la **Calculadora de modelado** ![P3144#yIS1](/img/media/image287.png) para calcular la tasa de cambio mensual (consulte la sección "Calculadora de modelado" a continuación para obtener más información). Cada entrada debe agregarse como filas separadas por cambio en la tabla superior (es decir, un nodo no puede crecer ni transferirse en una fila de entrada de datos; deben ser dos filas separadas).

- **Reglas para nodos de transferencia:**
  - Los nodos numéricos solo pueden transferirse a otros nodos numéricos y deben pertenecer al mismo nivel.

  - Los nodos de porcentaje solo pueden transferirse a otros nodos de porcentaje y deben pertenecer al mismo padre.

  - Las transferencias son siempre negativas desde el nodo origen y positivas hacia el nodo destino.

  - No se permite la extrapolación en un nodo que también tenga una transferencia, ya sea hacia/desde otro nodo.

<!-- finalizar lista -->

- **Tipos de modelado:**

| **Tipo de modelado** | **\# Cálculo de nodo** | **% Cálculo de nodo** |
| ----------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lineal (\#) | \+/- un número estático cada mes | N/A |
| Lineal (%) | \+/- un porcentaje estático cada mes, calculado en base al mes inicial | N/A |
| Exponencial (%) | \+/- un porcentaje cada mes, calculado sobre el mes anterior como porcentaje móvil | N/A |
| Lineal (puntos porcentuales) | N/A | \+/- un porcentaje estático cada mes (por ejemplo, si el mes inicial es 30% y el cambio es +1% cada mes, el mes siguiente es 31%, el siguiente es 32%, y así sucesivamente) |

- Haga clic en "**Mostrar datos mensuales"** para mostrar una tabla y un gráfico con el valor del nodo a lo largo del tiempo.
  - Esta función es útil para ver cómo las entradas de modelado y transferencia afectan los datos mensuales tanto en forma gráfica como tabular.

  - En los datos tabulares, los usuarios pueden agregar un cambio manual para un mes específico o ingresar un porcentaje del índice de estacionalidad (solo disponible para los nodos \# y %), según sea necesario.
    - Introduzca un % positivo para un valor aumentado en este mes o un valor negativo para un valor disminuido. Por ejemplo, 20% indica que el valor de este mes está un 20% por encima del valor no estacional (o 120%), mientras que -20% indica que está un 20% por debajo del valor no estacional (o 80%).

    - Para los nodos porcentuales, QAT primero calcula el valor estacionalizado del porcentaje antes de calcular el valor del nodo multiplicando el porcentaje estacionalizado y el valor principal. En la Figura 159, el ejemplo muestra cómo el porcentaje no estacionalizado del 50 % se convierte en 60 % después de ser estacionalizado.

> ![](/img/media/image288.png)
>
> Figura 173 Estacionalidad en un nodo numérico
>
> ![](/img/media/image289.png)
>
> Figura 174 Estacionalidad en un nodo porcentual

- Si un usuario marca "El cambio manual afecta el mes futuro", el monto manual agregado al final del mes se trasladará al comienzo del mes siguiente.

- Si ninguno de estos campos es relevante, los usuarios pueden desmarcar "Mostrar cambio manual" o "Mostrar estacionalidad y cambio manual" para ocultar estas columnas.

**<u>Ejemplos de modelado:</u>**

- **Crecimiento simple** (lineal \#): el siguiente ejemplo muestra un crecimiento de la población cada mes de 500 personas al mes desde enero de 2022 hasta diciembre de 2024.

![P3182#yIS1](/img/media/image290.png)

- **Pérdida simple** (lineal \#): el siguiente ejemplo muestra la deserción cada mes en 100/mes desde enero de 2022 hasta diciembre de 2024. QAT utiliza un número negativo para indicar una disminución o pérdida.

![P3184#yIS1](/img/media/image291.png)

- **Crecimiento simple** (%) lineal: el siguiente ejemplo muestra un crecimiento demográfico constante cada mes del 2 % desde enero de 2022 hasta diciembre de 2024. QAT ha calculado que este cambio aumenta la población en 108,64 cada mes.

![P3186#yIS1](/img/media/image292.png)

- **Crecimiento simple** (%) exponencial: el siguiente ejemplo muestra un crecimiento de la población cada mes del 1 % desde enero de 2022 hasta diciembre de 2024. Debido a que el crecimiento es exponencial, el cambio difiere cada mes. ![P3187#yIS1](/img/media/image293.png)
  - QAT calcula que este cambio será 54,32 en el mes del 22 de enero.

  - QAT calcula que este cambio fue 54,86 en el mes del 22 de febrero, y

- QAT calcula que este cambio fue 55,41 el 22 de marzo.

- **Pérdida multianual**: el siguiente ejemplo muestra una tasa diferente de desgaste (pérdida) cada año. El año 1 (enero de 2022 a diciembre de 2022) disminuye la población en un 1% o 54,32 cada mes, el año 2 (enero de 2023 a diciembre de 2023) disminuye la población en un 2% o 95,6 cada mes, etc. QAT utiliza un número negativo para indicar una disminución o pérdida.

![P3192#yIS1](/img/media/image294.png)

- **Transferencia**: el siguiente ejemplo muestra una transferencia de 250 pacientes cada mes durante un año, de enero de 2022 a diciembre de 2022, desde el nodo actual (Línea Adultos 1<sup>st</sup>) a otro nodo (Línea Adultos 2<sup>nd</sup>). Esta transferencia también aparecerá en el otro nodo (Línea Adultos 2<sup>nd</sup>) atenuado para indicar un cambio no editable.

![P3194#yIS1](/img/media/image295.png)

![](/img/media/image296.png)**<u>Calculadora de modelado:</u>**

Haga clic en el icono de la calculadora de modelado si necesita ayuda para calcular la tasa de cambio mensual. La calculadora de modelado **Valor final/cambio** está disponible para todos los nodos excepto los nodos de agregación, y la calculadora de modelado **Objetivo anual** solo está disponible para los nodos numéricos. Comience seleccionando un **Tipo de modelo** (Lineal \#, % lineal o % exponencial) y luego un **Tipo de objetivo** (Valor final/cambio u objetivo anual):

- **Valor/cambio final:** Utilice esto si tiene un valor objetivo (no acumulativo) o un cambio total deseado durante un período específico, en lugar de una tasa de cambio mensual conocida.

<!-- finalizar lista -->

1. La **Fecha de inicio** y la **Fecha objetivo** se completarán según las entradas originales para Fecha de inicio y Fecha de finalización en la tabla de modelado, que de forma predeterminada se basan en el período de pronóstico. El usuario puede cambiarlos si lo desea. Estas dos fechas volverán a fluir a la mesa de modelado.

2. El **Valor inicial** es el valor del nodo al comienzo del mes para la Fecha de inicio, según lo calculado por QAT. En otras palabras, el valor inicial es el valor del nodo _antes_ de que se produzca cualquier cambio en el modelado. Este campo se calcula y el usuario no puede modificarlo directamente. Si la fecha de inicio es el mes posterior al "Mes" en la pestaña Datos del nodo, entonces el Valor de inicio es igual al "Valor del nodo" proporcionado por el usuario en la pestaña Datos del nodo.

3. El **Período** se calcula como Fecha objetivo - Fecha de inicio (en meses). Este valor no se muestra en la interfaz de QAT, pero se utiliza en las fórmulas siguientes.

4. Según los datos o suposiciones disponibles, ingrese los datos en <u>one</u> de los siguientes campos: **Valor final objetivo**, **Cambio objetivo (%)** o **Objetivo** **Cambio (\#)**

5. Después de proporcionar una entrada, los demás campos se completarán automáticamente, así como el **'Cambio mes a mes calculado'** final.

6. Cuando el usuario haga clic en "Aceptar", el **Cambio mensual (% o \#)** se completará nuevamente en la tabla de modelado principal, según las fórmulas siguientes. Todos los cambios negativos se mostrarán como "disminución" y los cambios positivos se mostrarán como "aumento", y el número se mostrará en valor absoluto.

> Si el usuario ingresa **Valor final objetivo**:

|                                      | **Lineal (%)** | **Lineal (\#)** | **Exponencial (%)** |
| ------------------------------------ | -------------------------------------------------------------- | --------------------------------- | --------------------------------------------------------------- |
| **Cambio objetivo (%)** | (Valor final objetivo - Valor inicial) / Valor inicial |                                   |                                                                 |
| **Cambio de objetivo (\#)** | \- | Valor final objetivo - Valor inicial | \- |
| **Cambio mes a mes calculado** | (Valor final objetivo - Valor inicial) / Periodo |                                   |                                                                 |
| **Cambio mensual (%)** | (((Valor final objetivo - Valor inicial)/ Período) / Valor inicial) \* 100 | \- | ((Valor final objetivo / Valor inicial) ^ (1 / Período) - 1) \* 100 |
| **Cambio mensual (\#)** | \- | Cambiar (\#) / Periodo | \- |

> Si el usuario ingresa **Cambio de objetivo (%)**:

|                                      | **Lineal (%)** | **Lineal (\#)** | **Exponencial (%)** |
| ------------------------------------ | --------------------------------------------------------------- | --------------------------------- | -------------------------------------------------------------- |
| **Valor final objetivo** | Valor inicial + (Valor inicial \* Cambio objetivo (%)/100)/100 |                                   |                                                                |
| **Cambio de objetivo (\#)** | \- | Valor final objetivo - Valor inicial | \- |
| **Cambio mes a mes calculado** | (Valor inicial \* Cambio objetivo (%)) / 100 / Período |                                   |                                                                |
| **Cambio mensual (%)** | (((Valor final objetivo - Valor inicial) / Período) / Valor inicial) \* 100 | \- | (Valor final objetivo / Valor inicial) ^ (1 / Período) - 1) \* 100 |
| **Cambio mensual (\#)** | \- | Cambio de objetivo (\#)/Período | \- |

> Si el usuario ingresa **Cambio de destino (\#)**:

|                                      | **Lineal (\#)** |
| ------------------------------------ | ---------------------------------------------------------- |
| **Valor final objetivo** | Valor inicial + Cambio de objetivo (\#) |
| **Cambio (%)** | (Valor final objetivo - Valor inicial) / (Valor inicial \* 100) |
| **Cambio mes a mes calculado** | Cambio de objetivo (\#)/Período |
| **Cambio mensual (\#)** | Cambio de objetivo (\#)/Período |

- **Objetivo anual:** Utilice esto si tiene valores objetivo (acumulados durante un año). En lugar de simplemente dividir los objetivos anuales por 12, lo que crea un patrón escalonado, la calculadora ayudará a proporcionar un pronóstico fluido.

![P3279#yIS1](/img/media/image297.png)

1. Seleccione el primer mes de su objetivo y la cantidad de años de objetivos disponibles.
    - QAT completará automáticamente las filas anuales de la tabla según el primer mes del objetivo elegido, asumiendo que los objetivos son para períodos de 12 meses.

2. En la tabla, ingrese las cifras del año anterior al objetivo (el real) y de cada año objetivo.

3. Después de ingresar los datos, haga clic en "Calcular" (consulte a continuación el método de cálculo y las fórmulas).

4. Revise las diferencias entre los objetivos deseados y los números calculados de QAT. Si las diferencias son grandes, considere si la tasa de cambio sigue un patrón lineal o exponencial y cambie el **Tipo de modelado** (Lineal \#, % lineal o % exponencial) y vuelva a calcular si es necesario.

5. Cuando el usuario hace clic en "Aceptar", QAT completa los valores calculados en dos lugares:
    - Pestaña Valor de nodo - Mes inicial y valor inicial

    - Pestaña Modelado/Transferencia: se crea una fila por período de 12 meses después del Valor inicial. **Tenga en cuenta que estos no son los mismos períodos que los años objetivo** (ver más abajo).

> <u>Enfoque de cálculo del objetivo anual:</u> QAT supone
que 1/12<sup>th</sup> del valor real anual se alcanzó en el punto medio
del año real, y se alcanzará 1/12<sup>th</sup> de los objetivos anuales
para el punto medio de cada año objetivo. QAT luego interpola efectivamente entre esos
puntos medios calculando una tasa de cambio mensual lineal o exponencial. este mensual
Luego se aplica la tasa de cambio a ambos años: la segunda mitad del primer año.
y la primera mitad del segundo año. Para lograr esto, QAT calcula lo siguiente
campos:

<table>
  <thead>
    <tr class="header">
      <th>
        <strong>Campo</strong>
      </th>
      <th>
        <strong>Eplicación/fórmula</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>Cambio anual (%)</td>
      <td>
        <p>
          Cambio respecto al año anterior. Calculado para cada año después del primer
          año.
        </p>
        <p>
          = (Valor del año actual - Valor del año anterior) / (Valor del año anterior)
        </p>
      </td>
    </tr>
    <tr class="even">
      <td>Cambio mensual (%) / Cambio mensual (#)*</td>
      <td>
        <p>Tasa exponencial = (Valor del año 2/Valor del año 1)^ (1/12) -1</p>
        <p>Tasa lineal = Cambio anual / 12</p>
      </td>
    </tr>
    <tr class="odd">
      <td>Nodo Mes**</td>
      <td>= n-7, donde n es el primer mes del objetivo.</td>
    </tr>
    <tr class="even">
      <td>Valor de nodo**</td>
      <td>
        <p>
          Se supone que es el primer valor (el valor real) proporcionado por el usuario.
          dividido por 12, ya que se supone que es el punto medio del año.
        </p>
        <p>= Valor del año/12</p>
      </td>
    </tr>
    <tr class="odd">
      <td>Ctotal calculado</td>
      <td>
        Comenzando con el Mes del Nodo y el Valor del Nodo, y aplicando el Mensual
        Cambio (% o #), QAT calcula cada valor mensual y luego proporciona sumas
        los valores en períodos de 12 meses.
      </td>
    </tr>
    <tr class="even">
      <td>Diferencia (objetivo versus calculado, #)</td>
      <td>
        <p>
          Calculado para cada año después del primer año real. esta diferencia
          será grande si el cambio anual varía significativamente entre años.
        </p>
        <p>= Total calculado – Objetivo</p>
      </td>
    </tr>
    <tr class="odd">
      <td>Diferencia (objetivo frente a calculado,%)</td>
      <td>
        <p>
          Calculado para cada año después del primer año real. esta diferencia
          será grande si el cambio anual varía significativamente entre años.
        </p>
        <p>= (Total calculado - Objetivo) / Objetivo.</p>
      </td>
    </tr>
  </tbody>
</table>

> \* Estos valores no aparecen en la sección 'Calculadora de modelado', pero se completan en la tabla superior del nodo de modelado/transferencia después de que el usuario hace clic en "aceptar".  
> \*\* Estos valores no aparecen en la sección 'Calculadora de modelado', pero se completan en los campos del nodo principal después de que su uso haga clic en "aceptar".

#### Extrapolación

**<u>Propósito</u>:** La pestaña de extrapolación permite a los usuarios pronosticar valores futuros de nodos extrapolando a partir de valores pasados. Esta funcionalidad solo está disponible para nodos numéricos y es similar a la pantalla "Extrapolación", pero en su lugar se realiza en un nodo de árbol. Para un nodo determinado, los usuarios deben elegir entre modelado/transferencias o extrapolación, pero no pueden utilizar ambos al mismo tiempo. Puede encontrar más detalles sobre los métodos de extrapolación en [Extrapolación](#extrapolación).

**<u>Usando esta pestaña</u>:**

1. Primero, seleccione la casilla de verificación junto a 'Extrapolar' en el nodo Agregar/Editar.

2. Seleccione 'Mostrar datos'.

3. En la tabla, ingrese los valores reales y las tasas de informe de sus datos anteriores. A partir de esta entrada, QAT calculará los valores históricos ajustados. Si necesita cambiar el período de los datos, cambie el mes de inicio y finalización en la parte superior del nodo en "Mes de inicio de datos históricos".

<table>
  <thead>
    <tr class="header">
      <th>Mes</th>
      <th>Jan</th>
      <th>Feb</th>
      <th>Mar</th>
      <th>Apr</th>
      <th>mayo</th>
      <th>Jun</th>
      <th>Jul</th>
      <th>Aug</th>
      <th>Sep</th>
      <th>Oct</th>
      <th>Nov</th>
      <th>Dec</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        # de
        <br />
        Pacientes
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
    </tr>
    <tr class="even">
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
    </tr>
    <tr class="even">
      <td>
        totales
        <br />
        Pronosticado
      </td>
      <td>60</td>
      <td>60</td>
      <td>60</td>
      <td>60</td>
      <td>60</td>
      <td>60</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

4. Si faltan datos, utilice el botón verde Interpolar para completar los datos faltantes. La interpolación solo se puede utilizar si faltan datos en ambos lados del mes.

5. (opcional) Seleccione qué método(s) de pronóstico desea mostrar y actualice los parámetros de extrapolación.

6. Haga clic en "Extrapolar". Todos los pronósticos seleccionados se mostrarán en la tabla principal y en los gráficos.

> _NOTA: Los valores mínimos necesarios para obtener gráficos e informes correctos para las distintas funciones se encuentran a continuación:_
>
> _\* TES, Holt-Winters: Necesita al menos 24 meses de datos de consumo real_
>
> _\* ARIMA: Necesita al menos 14 meses de datos de consumo real_
>
> _\* Media móvil, semipromedios y regresión lineal: necesita al menos 3 meses de datos de consumo real_

7. (opcional) En la tabla, agregue los cambios manuales (+/-). Estos cambios se suman o restan además de los valores extrapolados.

8. Después de revisar la tabla principal, la tabla de errores y los gráficos, seleccione el método de pronóstico deseado en la parte inferior de la pantalla y haga clic en "Guardar".

9. Nota: Si cambia alguna entrada, se le pedirá que extrapola nuevamente para actualizar los cálculos, antes de seleccionar un nuevo método.

#### Técnicas avanzadas

**<u>Consejos para casos de uso específicos</u>**:

- **¿Uso del producto retrasado o escalonado?** A veces, el consumo del producto se retrasa en relación con los otros niveles superiores del árbol. En el nodo **Unidad de pronóstico** correspondiente, utilice el campo **Retraso** para indicar este retraso.
  - Por ejemplo, si el uso del producto comenzará 2 meses después de las fechas del nodo principal, ingrese "2" en este campo.

  - Este campo también se puede utilizar cuando el producto cambia a lo largo del tiempo; por ejemplo, si las unidades de pronóstico A, B y C se usan en secesión durante dos meses a la vez, puede configurar su árbol con la Unidad de pronóstico A (discreta durante 2 meses, desfase = 0), la Unidad de pronóstico B (discreta durante 2 meses, desfase = 2), la Unidad de pronóstico C (discreta durante 2 meses, desfase = 4).

- **¿Uso discreto del producto durante un período de tiempo más largo? (pronóstico del primer mes frente a pronóstico mes a mes):** QAT tiene la opción de calcular el uso discreto del producto en nodos de unidades de pronóstico de dos maneras:
  - anticipando la cantidad discreta consumida por paciente en el mes 1 (elija "Calcular" = "Todo en el primer mes") o

  - desagregando la cantidad discreta consumida por paciente por mes (elija "Calcular" = "Mes por mes").

  - De forma predeterminada, QAT asumirá "Todo en el primer mes" (carga anticipada); sin embargo, los usuarios tienen la opción de seleccionar "Mes a mes" como método alternativo. Este cálculo alternativo podría ser útil para Unidades de Planificación (PU) que tienen patrones de bajo consumo durante un período de tiempo o si se aplica a un grupo de pacientes recién iniciado. Por ejemplo, si una mujer embarazada debe tomar un suplemento nutricional una vez al mes durante el embarazo (nueve meses), de forma predeterminada, QAT calcularía nueve suplementos en el mes 1 (distribución anticipada). Sin la distribución anticipada, QAT calcularía un suplemento en el mes 1, un suplemento en el mes 2, un suplemento en el mes 3, y así sucesivamente.

Ejemplo de cálculo (todo en el primer mes versus mes a mes) – **Modelado <u>no</u> aplicado**:

- <u>Todos en el primer mes</u>: Hay 10 pacientes
que requieren 1 frasco para el tratamiento durante 6 meses; por lo tanto, el \#
de unidades de planificación por paciente = 6. Al calcular “Todo en el primer mes”,
QAT anticipará la cantidad pronosticada y asumirá que las 60 botellas (10
pacientes \* 6 botellas por paciente) se pronostican cada mes.

**Total previsto en un período de 6 meses = 360 botellas**

<table>
  <thead>
    <tr class="header">
      <th>Mes</th>
      <th>Jan</th>
      <th>Feb</th>
      <th>Mar</th>
      <th>Apr</th>
      <th>mayo</th>
      <th>Jun</th>
      <th>Jul</th>
      <th>Aug</th>
      <th>Sep</th>
      <th>Oct</th>
      <th>Nov</th>
      <th>Dec</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        # de
        <br />
        Pacientes
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
    </tr>
    <tr class="even">
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
      <td></td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td></td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="even">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="odd">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>0</td>
    </tr>
    <tr class="even">
      <td>
        totales
        <br />
        Pronosticado
      </td>
      <td>10</td>
      <td>20</td>
      <td>30</td>
      <td>40</td>
      <td>50</td>
      <td>60</td>
      <td>50</td>
      <td>40</td>
      <td>30</td>
      <td>20</td>
      <td>10</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

- <u>Mes a Mes</u>: Hay 10 pacientes que
requiere 1 frasco para el tratamiento durante 6 meses; por lo tanto, el \# de
Unidades de planificación por paciente = 6. Con “Mes a mes”, QAT se distribuirá uniformemente
distribuir la cantidad pronosticada a lo largo del período de tiempo. Por lo tanto, QAT
Supongamos que se pronostican 10 frascos en el mes 1 (10 pacientes \* 1 frasco). en
mes 2, esos mismos 10 pacientes regresarán cada uno por otra botella, mientras que un
El nuevo grupo de 10 pacientes también necesitará 1 frasco cada uno \[(10 pacientes \* 1
botella) + (10 pacientes \* 1 botella)\] para un total de 20 botellas previstas en
mes 2, y así sucesivamente.

**Total previsto en un período de 6 meses = 160 botellas**

**Total previsto en un período de 12 meses = 360 botellas**

> Ejemplo de cálculo (todo en el primer mes versus mes a mes) – **modelado aplicado**:

- Hay 10 pacientes que requieren 1 frasco para tratamiento en el transcurso de 6 meses; por lo tanto, el número de unidades de planificación por paciente = 6. También se espera un aumento de 5 nuevos pacientes por mes. Utilizando la lógica anterior para calcular "Todo en el primer mes" y "Mes a mes", QAT calculará la siguiente cantidad de botellas que se dispensarán durante un período de 12 meses:

<table>
  <thead>
    <tr class="header">
      <th>Mes</th>
      <th>Jan</th>
      <th>Feb</th>
      <th>Mar</th>
      <th>Apr</th>
      <th>mayo</th>
      <th>Jun</th>
      <th>Jul</th>
      <th>Aug</th>
      <th>Sep</th>
      <th>Oct</th>
      <th>Nov</th>
      <th>Dec</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        # de
        <br />
        Pacientes
      </td>
      <td>
        <strong>10</strong>
      </td>
      <td>
        <strong>15</strong>
      </td>
      <td>
        <strong>20</strong>
      </td>
      <td>
        <strong>25</strong>
      </td>
      <td>
        <strong>30</strong>
      </td>
      <td>
        <strong>35</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
      <td>
        <strong>0</strong>
      </td>
    </tr>
    <tr class="even">
      <td>Todo en el primer mes</td>
      <td>60</td>
      <td>90</td>
      <td>120</td>
      <td>150</td>
      <td>180</td>
      <td>210</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr class="odd">
      <td>Mes-a-mes</td>
      <td>10</td>
      <td>25</td>
      <td>45</td>
      <td>70</td>
      <td>100</td>
      <td>135</td>
      <td>125</td>
      <td>110</td>
      <td>90</td>
      <td>65</td>
      <td>35</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

**Total previsto (todo en el primer mes) = 810 botellas**

**Total previsto (mes a mes) = 810 botellas**

- **¿Desea un valor específico para la cantidad de unidades de planificación por paciente?** Un usuario puede especificar un valor específico para la cantidad de unidades de planificación por unidad\* (discreta) o por unidad\* por mes (continuo) seleccionando "No" en "¿Usar el cálculo automático de QAT para \# de unidades de planificación?" A menos que un usuario lo anule, QAT utilizará el cálculo automático de forma predeterminada. (\* En este caso, la unidad podría ser paciente, prueba, cliente, etc.)
  - **Ejemplo discreto:** Si se supone que cada 1 vial de bupivacaína se debe usar cada 5 procedimientos, entonces el número de unidades de pronóstico/procedimientos es 0,2 viales. Con una unidad de planificación de 5 viales, QAT calcula que se utilizan 0,2/5 = 0,04 unidades de planificación por procedimiento. Sin embargo, un usuario puede cambiar el botón de opción a "No" y elegir anular esto con conocimiento de las tasas de uso reales e ingresar 0,05 unidades de planificación. Agregue siempre una nota cuando anule el cálculo de QAT.

> ![](/img/media/image298.png)

- **Ejemplo continuo:** Si un paciente requiere 1 tableta por día indefinidamente de un frasco de 30 tabletas TLD, QAT calculará esto como 30.4167/mes o 1.0139/día para tener en cuenta los meses que tienen 30 días, 31 días, 28 días, etc. Sin embargo, un usuario puede optar por cambiar el botón de opción a "No" y elegir anular esto a 1 unidad de planificación/mes. proporcione el valor de anulación de 1. Agregue siempre una nota cuando anule el cálculo de QAT.

> ![](/img/media/image299.png)

- **¿Usos repetidos de pronóstico?** Si varios nodos de Unidad de pronóstico comparten la misma configuración, considere usar la [pantalla Plantilla de uso](#usage-templates) para guardar sus usos comunes y luego usar el campo "Copiar desde plantilla" para completar los campos en los nodos de la unidad de pronóstico.

- ** ¿Valores agregados de nodos para realizar cálculos adicionales? (Nodos de embudo):** En algunos casos, es posible que los usuarios deseen vincular el valor de un nodo a otro nodo, o agregar varios nodos en un nodo antes de agregar nodos adicionales a continuación. \*\*Tenga en cuenta que esta característica es diferente a vincular nodos mediante modelado/transferencia, que sirve para vincular cambios en un nodo con cambios en otro nodo, en lugar de agregación. Esto también es diferente del uso de nodos de agregación, que agregan solo hacia arriba y no permiten cálculos adicionales\*\*

> Casos de uso:

- <u>Las pruebas de carga viral</u> son utilizadas por varias poblaciones,
pero todas las poblaciones utilizarán la misma combinación de instrumentos. Comience con un grupo demográfico
Árbol que termina en múltiples poblaciones. Es necesario sumar las diferentes poblaciones.
y las distintas ramas de instrumentos se encuentran bajo la suma.

- <u>Mapacientes de Malaria</u> ingresan al sistema de salud a través
diferentes canales (trabajadores de salud comunitarios versus establecimientos de salud públicos), que
tienen diferentes algoritmos de prueba, pero una vez que un paciente da positivo, recibe
la misma “mezcla” de tratamientos. Las diferentes poblaciones que dan positivo deben
se suman y los diversos regímenes de tratamiento se encuentran bajo la suma

- Varios <u>Métodos Anticonceptivos</u> difieren en cómo se calculan, pero todos derivan de la misma población del país, la cual debe actualizarse en cada cuantificación, y puede tener modelaciones a lo largo del tiempo. Se puede construir un árbol para implantes e inyectables y otro para condones, pero los dos árboles están vinculados entre sí en el nodo de población del país, por lo que sus valores permanecen consistentes.

Cómo vincular valores

1. Indique (en \# o % nodos) que son "**nodos de origen**" ![](/img/media/image300.png)

> Figura 175 Indicando nodos de origen

2. Cree nuevos "**nodos de embudo**" y seleccione desde qué nodos de origen agregar.

> Nota: Los nodos de embudo pueden “ubicarse” en cualquier parte del árbol; es decir, puede convertir el primer nodo de un árbol en un nodo de embudo o crear nodos de embudo bajo cualquier agregación, número de nodo porcentual. Esto se debe a que el valor de los nodos del embudo no deriva de su padre, sino de las fuentes a las que están vinculados.
>
> ![](/img/media/image301.png)

Figura 176 Agregar nodos de embudo

3. Agregue los nodos "secundarios" debajo de los nodos del embudo; estos probablemente serán los nodos del producto.

> Los nodos de embudo permiten mucha flexibilidad, ya que se pueden usar dentro de uno o varios árboles, se pueden usar en cualquier nivel y

1. El usuario puede vincular **internamente dentro de un árbol**

![](/img/media/image302.png)

2. Los usuarios pueden vincular **externamente entre árboles** (nodos de origen en un árbol, nodos de embudo en un árbol diferente)

> ![](/img/media/image303.png)

### Validaciones de modelado

**<u>Propósito:</u>** Una vez que se ha creado un árbol, los usuarios pueden usar la pantalla Validación de modelado para ver el cambio a lo largo del tiempo. Esto es útil si el pronóstico ha aplicado modelado/transferencias en uno o nodos de modo.

**<u>Usando esta pantalla:</u>**

- Vaya a "Pronóstico de árbol" y seleccione "Validaciones de modelado".

- Seleccione los filtros de pantalla usando los menús desplegables.
  - **Programa**: Debe estar en línea para ver las versiones del programa en el servidor. Cuando no está conectado, solo se pueden seleccionar los programas locales descargados.

  - **Nivel**:
    - Al crear un árbol, es útil cambiar el nombre de los niveles. El menú desplegable de "niveles" en esta pantalla mostrará los diferentes nombres de niveles que ha elegido. Esto hace que sea más fácil identificar lo que muestran los datos, en lugar de usar el nivel 0,1,2,3, etc.

    - El menú desplegable de niveles agrupará automáticamente la Unidad de planificación y la Unidad de pronóstico en sus propios niveles en caso de que estos nodos estén en niveles separados de su árbol. Por lo tanto, si también tiene un nivel llamado "Unidad de pronóstico", al seleccionar el nivel "FU" y el nivel "Unidad de pronóstico" se obtendrán los mismos resultados. Sin embargo, si tiene una unidad de pronóstico en el nivel 4 y otra en el nivel 5, el nivel 'FU' mostrará ambas.

  - **Visualización del eje X:** Los datos se pueden mostrar por meses (predeterminado) o agregarse por año calendario o año fiscal. (Ver Figura 154)
    - Al agregar por año, es útil utilizar la función "Mostrar datos" para confirmar qué meses se incluyen en el gráfico agregado y si hay datos para todos los meses esperados.

    - Al agregar por años fiscales, debe seleccionar el mes en el que comienza su año fiscal. Por ejemplo, si su año fiscal 2023 es de octubre de 2022 a septiembre de 2023, puede seleccionar la opción que. QAT siempre mostrará los ejemplos utilizando el año calendario actual.

  - **Visualización del eje Y**: Los datos se pueden mostrar por número de unidades, así como por porcentaje. (Ver Figura 149 versus Figura 147)

- Para ver los datos tabulares, seleccione el botón azul '**Mostrar datos**' en la parte inferior derecha de la pantalla.

- Al visualizar el **gráfico**, el usuario puede ocultar elementos haciendo clic en la leyenda. Para mostrarla, vuelva a hacer clic en esa parte de la leyenda.

- Esta pantalla se puede **exportar** en formato CSV y PDF seleccionando los íconos en la esquina superior derecha.

![P3366#yIS1](/img/media/image304.png)

Figura 177: Pantalla de Validación de Modelado (por número y mes)

![P3368#yIS1](/img/media/image305.png)

Figura 178: Pantalla de Validación de Modelado (por porcentaje y mes)

![](/img/media/image306.png)![P3371#yIS1](/img/media/image307.png)

Figura 179: Pantalla de validación de modelos (por año calendario versus por año fiscal)

### Validaciones de productos

**<u>Propósito:</u>** Una vez que se ha creado un árbol, los usuarios pueden usar la pantalla Validaciones de productos para verificar el uso de los productos en el árbol de pronóstico. Esto es útil para ver varios productos a la vez.

**<u>Usando esta pantalla:</u>**

- Vaya a "Pronóstico de árbol" y seleccione "Validaciones de producto".

- Seleccione los filtros de pantalla usando los menús desplegables.
  - En esta pantalla sólo se pueden seleccionar programas locales descargados.

- Esta pantalla se puede exportar en formato CSV y PDF seleccionando los íconos en la esquina superior derecha.

![P3382#yIS1](/img/media/image308.png)

Figura 180: Validaciones de productos

### Uso de plantillas

#### Plantillas de árboles

**<u>Propósito</u>:** Permitir que los usuarios comiencen a diseñar su árbol de pronóstico a partir de una plantilla preestablecida. _Nota: las plantillas de árbol se administran a nivel de dominio (global)._

**<u>Usando plantillas de árbol:</u>**

**El usuario puede agregar plantillas de árbol en dos ubicaciones diferentes: la pantalla "Administrar árbol" o la pantalla "Plantillas de árbol". Nota: se debe descargar un programa para crear una plantilla de árbol.**

**Método 1:**

1. **Navegue hasta 'Pronóstico de árboles'** a **'Administrar árboles'.**

2. **En la parte superior derecha de la pantalla, haga clic en el menú desplegable azul "Crear o Seleccionar" y seleccione la plantilla de árbol deseada.**

3. **En la ventana emergente "Detalles del árbol":**
    1. **Confirme o actualice las secciones Programa, Método de pronóstico, Nombre del árbol, Regiones y Notas.**

    2. **Si hay unidades de planificación que están en la plantilla pero que faltan en el programa, QAT las marcará en una sección inferior de esta ventana emergente (ver** Figura 150**), donde una tabla muestra las unidades de planificación faltantes.**
        1. **Si faltan unidades de planificación en el programa (incluidas aquellas inactivas o sin marcar para Pronóstico de árbol) y se recomienda utilizar la plantilla de árbol elegida, los usuarios pueden hacer clic en el botón "Agregar/actualizar unidades de planificación seleccionadas" y QAT agregará automáticamente las unidades de planificación al programa del usuario.**

        2. **Si el usuario desea crear el árbol sin las unidades de planificación recomendadas, puede hacer clic en el botón "Crear árbol sin agregar unidades de planificación" y las unidades de planificación no se agregarán al programa del usuario. Esto podría resultar útil cuando a un usuario le gustaría utilizar una estructura de árbol pero tiene diferentes unidades de planificación que le gustaría pronosticar.**

![P3400#yIS1](/img/media/image309.png)

Figura 181 Ventana emergente de detalles del árbol con 'Unidades de planificación faltantes'

3. **Tenga en cuenta que todos los detalles del árbol se pueden actualizar en una etapa posterior haciendo clic en el ícono de ajustes** ![P3402#yIS1](/img/media/image310.png) **al lado del menú desplegable del árbol y las unidades de planificación se pueden agregar navegando a la pantalla 'Actualizar [Unidades de planificación](07-forecasting-module-program-data.md#planning-units)'.**

<!-- finalizar lista -->

4. **QAT creará automáticamente la plantilla de árbol para el programa del usuario y navegará a la pantalla "Construir árbol".**

**Método 2:**

1. > **Navegue hasta 'Pronóstico de árbol'** a **'Plantillas de árbol'**

> ![P3407#yIS1](/img/media/image311.png)

Figura 182: Pantalla de plantillas de árbol

2. > **Revise las diferentes opciones de plantilla de árbol, prestando especial atención al Método de Pronóstico y al tipo de Nodo Inicial. Los usuarios pueden hacer clic en cualquier fila para revisar la plantilla del árbol, su estructura y varios nodos.**
    1. > **Nota: aquellos nodos que comienzan con un nodo de Porcentaje se usan específicamente para Plantillas de Rama y no se pueden usar como plantilla de árbol. Los usuarios primero deben crear un nodo inicial (Número o Agregación), antes de agregar una Plantilla de sucursal (para obtener más información, consulte [Plantillas de sucursal](#branch-templates)).**

3. > **Una vez que un usuario haya revisado la plantilla de árbol, puede hacer clic en "Usar esta plantilla" en la esquina superior derecha de la pantalla.**

4. > **Continúe con los pasos 3 y 4 del Método 1 para finalizar la creación de la plantilla de árbol.**

**Recomendaciones generales sobre plantillas de árboles:**

- **En general, las plantillas de árbol contienen valores de “0” y “0%” en todos los niveles excepto en los nodos de unidades de previsión y planificación. Luego, el usuario puede personalizar el árbol según sus requisitos, por ejemplo:**
  - **Haga clic en cada nodo para editar los valores a valores reales.**

  - **Cambie el nombre de los títulos de los nodos.**

  - **Reemplace cualquier producto por:**
    - **editar el nodo de la unidad de previsión, pero asegúrese de abrir también el nodo de la unidad de planificación secundaria y seleccionar la unidad de planificación correcta.**

    - **eliminar los nodos de la unidad de previsión y planificación y agregar otros nuevos.**

  - **Copia cualquier nodo o rama (el usuario puede copiar varios nodos copiando la parte superior de una rama de nodos).**

  - **Eliminar cualquier nodo o rama.**

  - **Agregue notas para explicar cualquier fuente de información.**

- Si hay una plantilla de árbol que beneficiaría a la comunidad QAT, los usuarios pueden solicitarla a través del [Sistema de asistencia técnica de tickets QAT] (#tickets-for-addingupdating-users-and-master-data).

#### Plantillas de sucursales

**<u> Propósito: Las plantillas de rama </u> permiten a los usuarios agregar una plantilla de árbol, incluida la estructura y todos los nodos secundarios como una rama** <u> dentro de </u> **un árbol preexistente.** _Nota: las plantillas de rama/árbol se administran a nivel de reino (global)._ Si hay una plantilla de árbol/rama que beneficiaría a la comunidad QAT, los usuarios pueden solicitarla a través del [Sistema de asistencia técnica de tickets QAT] (#tickets-for-addingupdating-users-and-master-data).

**<u>Usando plantillas de rama:</u>**

1. > **Los usuarios deben revisar primero las diferentes opciones de plantilla de árbol/rama, prestando especial atención al método de pronóstico y al tipo de nodo de inicio en la pantalla 'Pronóstico de árbol'** a **'Plantilla de árbol'.**

2. > **Navegue hasta 'Predicciones de árboles'** à **'Administrar árboles' y seleccione el árbol deseado.**

3. > **Haga clic en el símbolo** ![P3431#yIS1](/img/media/image312.png) **. Esto agregará la plantilla de rama como secundaria al nodo seleccionado.**
    1. > **Según el nodo principal elegido, QAT solo mostrará plantillas de rama que se pueden agregar como hijos potenciales según el nodo de inicio en la pantalla 'Plantilla de árbol' (consulte [Tipos y funciones de nodo](#node-types-functions) para conocer las opciones de hijos potenciales para cada tipo de nodo).**

![P3433#yIS1](/img/media/image313.png)

Figura 183: Agregar una plantilla de rama

4. > **Una vez elegida una plantilla de sucursal, haga clic en "Agregar sucursal".**

5. > **Si hay unidades de planificación que están en la plantilla de rama, pero que faltan en el programa, QAT las marcará en una sección inferior de esta ventana emergente (ver** Figura 153**), donde una tabla muestra las unidades de planificación faltantes.**
    1. > **Si faltan unidades de planificación en el programa (incluidas aquellas inactivas o sin marcar para Pronóstico de árbol) y se recomienda utilizar la plantilla de rama elegida, los usuarios pueden hacer clic en el botón "Agregar/actualizar unidades de planificación seleccionadas" y QAT agregará automáticamente las unidades de planificación al programa del usuario.**

    2. > **Si el usuario desea agregar la sucursal sin las unidades de planificación recomendadas, los usuarios pueden hacer clic en el botón "Agregar sucursal sin agregar unidades de planificación" y las unidades de planificación no se agregarán al programa del usuario. Esto podría resultar útil cuando a un usuario le gustaría utilizar una estructura de sucursales pero tiene diferentes unidades de planificación que le gustaría pronosticar.**

![P3440#yIS1](/img/media/image314.png)

Figura 184: Agregar PU desde una plantilla de sucursal a un programa

#### Plantillas de uso

**<u>Propósito</u>:** Las plantillas de uso permiten al usuario completar los detalles de un nodo de unidad de pronóstico de una sola vez. Las plantillas de uso pueden ser globales o específicas del programa. Tenga en cuenta que las plantillas específicas del programa las administran los administradores del programa de pronóstico. El usuario debe estar en línea para administrar plantillas, pero puede estar fuera de línea para usarlas.

**<u>Para usar plantillas de uso</u>**

![P3446#yIS1](/img/media/image315.png) ![P3446#yIS2](/img/media/image316.png)

Figura 185: Uso de una plantilla de uso en un nodo de unidad de pronóstico

1. **Asegúrese de que el programa tenga la unidad de planificación relacionada con la plantilla de uso. Recuerde, las plantillas de uso se basan en la unidad de pronóstico, pero cada unidad de planificación está relacionada con una unidad de pronóstico específica. Por ejemplo, si el programa tiene la unidad de planificación “_Lopinavir/Ritonavir 200/50 mg Tablet, 120 Tablets_”, todas las plantillas de uso con la unidad de pronóstico asociada “_Lopinavir/Ritonavir 200/50 mg Tablet_” estarán disponibles al diseñar el árbol.**

2. **En la pantalla Crear árbol, cree o edite un nodo de unidad de pronóstico existente (consulte la Sección** **B1 para obtener más información). Si crea un nuevo nodo, asegúrese de seleccionar primero el tipo de nodo como "unidad de pronóstico" y verifique que los campos "mes" y "porcentaje del padre" sean correctos.**

3. **(opcional) Seleccione una categoría de Tracer para filtrar las plantillas de uso disponibles**

4. **Usando el menú desplegable "Copiar desde plantilla", seleccione las plantillas de uso deseadas**

5. **Se completarán todos los campos siguientes**

6. **Haga clic en "Actualizar" para guardar los cambios.**

**<u>Para administrar plantillas de uso</u> (**solo administradores de programas de pronóstico)

> ![P3456#yIS1](/img/media/image317.png)

Figura 186: Gestión de plantillas de uso

1. **Asegúrese de que QAT esté en modo en línea y navegue hasta Plantillas de árbol \> Plantillas de uso. Las plantillas globales aparecerán atenuadas y no serán editables.**

2. **Para crear una nueva plantilla de uso, haga clic en "agregar fila". Para editar una plantilla de uso existente, salte al siguiente paso.**

3. **Rellene o edite la fila de la plantilla de uso como desee**
    - > **La columna "nombre de uso" es lo que aparecerá en el menú desplegable.**

    - > **Utilice la barra de desplazamiento horizontal para acceder a todos los campos de la tabla.**

    - > **Utilice la información sobre herramientas (pase el mouse sobre los iconos "i") para guiarse**

    - > **Utilice la penúltima columna “Uso en palabras” para verificar que todo esté ingresado correctamente.**

    - > **Para productos usados más de una vez, hay una calculadora que le ayudará a convertir el intervalo en frecuencia. Haga clic derecho en la fila que está editando para abrir la pantalla "Calcular frecuencia de uso". Ingrese el intervalo y la unidad de frecuencia deseada (día, mes, semana o año) y el número y la unidad de frecuencia calculados se completarán en la tabla.**

> ![P3467#yIS1](/img/media/image318.png)

Figura 187: **Pantalla “Calcular frecuencia de uso”**

4. **Haga clic en "Enviar" cuando haya terminado.**