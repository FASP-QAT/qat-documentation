---
id: supply-planning-module-reports
title: "Supply Planning Module: Reports"
sidebar_label: "Supply Planning Module: Reports"
sidebar_position: 6
---
# Módulo de Planificación de Suministros: Informes

Los informes QAT permiten al usuario extraer y ver sus datos de planificación de suministro en gráficos, tablas y otros formatos visuales. El usuario también podrá navegar, ordenar, filtrar y ver los datos para necesidades específicas. Los informes QAT producen visualizaciones y muestran datos de una manera que puede respaldar la toma de decisiones.

Los informes se dividen en **Informes globales** e **Informes específicos del programa**. Los informes específicos del programa se muestran tanto en línea como fuera de línea. Sin embargo, los informes globales se muestran solo en modo en línea y solo están disponibles para los usuarios globales, como el administrador del reino y el administrador de la aplicación.

**Nota:** Todos los informes QAT se pueden exportar a un archivo CSV de Excel y a formato PDF. Además, todos los gráficos permiten al usuario pasar el cursor sobre un objeto visual para obtener información sobre herramientas con más información.

## Lista de problemas QAT

**Propósito:** Una revisión del plan de suministro integrada en QAT que permite un control de calidad para identificar fácilmente datos/problemas problemáticos y corregirlos antes de cargar un plan de suministro al servidor como versión "borrador" o "final".

- **Accesible para:** Administradores de reino, administradores de programas y usuarios de programas

- **Navegación:** Informes  Lista de problemas QAT

![P2309#yIS1](/img/media/image198.png)

Figura 120: Lista de problemas QAT

**Nota:** Solo el problema asociado con los programas que ha descargado el usuario en su máquina local aparecerá en la Lista de problemas de QAT. Para obtener detalles sobre cómo descargar programas y versiones específicas, consulte la sección [Descargar programa](#downloaddelete) del Manual del usuario.

### Conceptos básicos de la lista de problemas QAT

Cada problema marcado en la lista de problemas QAT tendrá una línea separada. Este tendrá la unidad de planificación asociada, una descripción del problema, una sugerencia sobre cómo solucionar el problema, el estado del problema, notas del usuario, una casilla de verificación para identificar si el problema ha sido revisado, las últimas notas del revisor (según corresponda), la fecha de la última revisión y la criticidad.

![P2315#yIS1](/img/media/image199.png)

Figura 121: Aspectos Lista de problemas QAT

Los problemas QAT se pueden subdividir en cuatro categorías principales: calidad de datos, cronograma de adquisiciones, planificación de suministros y otros. También se les asignan diferentes niveles de criticidad: Bajo (amarillo), Medio (naranja) y Alto (rojo). La criticidad informa a los usuarios en qué medida un problema afecta la calidad del plan de suministro. Sin embargo, independientemente de su importancia, todos los problemas deben estar "En cumplimiento" o "Abordados" en la Lista de problemas QAT para poder cargarlos como versión final. Hay cinco estados principales asociados con los problemas individuales en la Lista de problemas QAT:

1. **En cumplimiento**: el problema se cerró mediante la entrada de datos por parte del usuario. El estado se cambiará automáticamente y no se requieren notas.

> _Ejemplo: a una unidad de planificación le falta el consumo real en los últimos 3 meses. Un usuario ingresa datos de consumo real de los últimos 3 meses. QAT marca automáticamente esto como "en conformidad"._

2. **Resuelto**: el revisor marcó manualmente el problema como "resuelto". El revisor utiliza este estado si es poco probable que este problema se corrija mediante la entrada de datos y tampoco requiere más notas en el futuro. Sólo un revisor puede marcar un problema como "resuelto".

> _Ejemplo: se marca una unidad de planificación por no seguir la previsión dinámica. El usuario ingresa una nota de que esta unidad de planificación no sigue pronósticos dinámicos ya que no es un producto estacional. El revisor marca esto como resuelto porque lo más probable es que la explicación no cambie en el futuro._

3. **Abordado**: el revisor o el usuario marcaron manualmente el problema como "abordado". El usuario aplica este estado cuando no puede resolver el problema mediante la entrada de datos. Este estado debe ir acompañado de una nota. El revisor utiliza este estado si este problema no se puede resolver en este período de revisión, pero se resolverá en el futuro, probablemente en algunos períodos, en lugar de antes de la siguiente revisión.

> _Ejemplo: una unidad de planificación que se está eliminando solo tiene 8 meses de consumo previsto en el futuro en lugar de 18. Esto es aceptable ya que es una unidad de planificación que se está eliminando gradualmente, pero el usuario aún deberá desactivar la unidad de planificación una vez que esté completamente eliminada, razón por la cual el problema se marca como "abordado" en lugar de "resuelto"._

4. **Abierto**: QAT marcó automáticamente este problema o el revisor lo marcó manualmente como "Abierto". El revisor podría utilizar este estado al rechazar un plan de suministro para indicar que las notas no se aceptan.

> _Ejemplo: un usuario tiene una unidad de planificación a la que le faltan datos de consumo real en los últimos 3 meses. QAT lo marcará automáticamente como "Abierto". Si el problema se "solucionó" cuando se cargó y aprobó, el problema volverá al estado "Abierto" para el próximo envío._

5. **Revisado:** El problema ha sido revisado por el revisor del plan de suministro. Este campo solo lo puede editar el revisor del plan de suministro.

### Cerrar y abordar problemas

1. > **Cerrar un problema mediante la entrada de datos**: para cambiar un problema "Abierto" a uno que esté "En cumplimiento", el usuario deberá completar la sugerencia proporcionada en la columna "Sugerencia" para el problema específico. Por ejemplo, la sugerencia puede ser “proporcionar el consumo real” para meses específicos. Por tanto, el usuario deberá:

![P2340#yIS1](/img/media/image200.png)

Figura 122: Ejemplo de cierre de un problema

1. Navegue a la pantalla Entrada de datos de consumo haciendo clic directamente en el Problema (que abrirá una nueva ventana QAT) o haciendo clic en Datos del plan de suministro  Datos de consumo.

2. Desde la pantalla de ingreso de datos de consumo, el usuario agregará el consumo real de los meses solicitados. Para obtener instrucciones sobre cómo agregar el consumo, consulte [Datos de consumo](#consumption-data).

3. Vuelva a la Lista de problemas de QAT y haga clic en Recalcular para actualizar la Lista de problemas de QAT e incluir la adición más reciente de datos de consumo real. El problema anteriormente marcado ahora debería ser "Cumplimiento" y ya no estar marcado en la Lista de problemas QAT.

![P2346#yIS1](/img/media/image201.png)

Figura 123: Recalcular/actualizar la lista de problemas de QAT

1. **Abordar un problema con un comentario**: si un problema que se ha marcado en la Lista de problemas de QAT no se puede solucionar y convertirlo en "Cumplimiento" mediante la entrada de datos como se recomienda en la columna "Sugerencia", un usuario puede proporcionar un comentario y cambiar manualmente el estado a "Abordado". Por ejemplo, una unidad de planificación puede tener exceso de existencias o falta de existencias y se presenta la sugerencia de "reevaluar el plan de suministro para cumplir con los parámetros mínimos y máximos". Si un usuario no puede solucionar este problema mediante la entrada de datos, deberá solucionar el problema:
    1. Haga doble clic en el menú desplegable Estado del problema para ese problema y seleccione "Abordado". Los usuarios deben proporcionar una nota explicativa en la columna Notas para todos los problemas marcados como "Abordados".

![P2354#yIS1](/img/media/image202.png)

Figura 124: Solucionar un problema y agregar una nota

> **Nota:** el usuario también puede ver en la pantalla "Detalles de la transacción del problema" haciendo clic derecho en el Problema. Esta área mostrará al usuario notas anteriores, revisores, fechas revisadas, etc.

![P2358#yIS1](/img/media/image203.png)

Figura 125: Clic derecho en transacción problemática

![P2360#yIS1](/img/media/image204.png)

Figura 126: Detalles de la transacción problemática

2. Haga clic en "Actualizar". La lista de problemas QAT ahora incluirá la adición más reciente de notas explicativas y el estado.

### Lista de problemas QAT: explicación de problemas

- **Faltan datos de consumo real recientes (en los últimos 3 meses)**

> Si a una unidad de planificación le faltan entradas de datos de consumo real recientes dentro de los últimos tres meses, se marcará en la Lista de problemas QAT. Si se completan las entradas para cualquiera de estos últimos tres meses, ya sea un mes o los tres meses, el sistema no señalará el problema.

- **Cualquier brecha en los últimos 6 meses (consumo real)**

> QAT verifica si a una unidad de planificación le faltan uno o varios meses de entradas de consumo real recientes entre dos entradas de consumo real en el rango de 6 meses especificado. Este problema busca brechas accidentales en los insumos de consumo reales. Si hay alguna brecha en los datos de consumo real en los últimos 6 meses, la Lista de problemas QAT lo marcará como un problema. Por ejemplo, un usuario ingresa el consumo real para septiembre de 2022, diciembre de 2022 y enero de 2023. Esto será marcado por la lista de problemas QAT porque faltan datos de consumo real para octubre de 2022 y noviembre de 2022.

- **Faltan entradas de inventario recientes (en los últimos 3 meses)**

> Si a una unidad de planificación le faltan entradas de datos de inventario reales recientes dentro de los últimos tres meses, se marcará en la Lista de problemas QAT. Si se completan las entradas para cualquiera de estos últimos tres meses, ya sea un mes o los tres meses, el sistema no señalará el problema.

- **El plan de suministro carece de consumo previsto para los próximos 18 meses**

> Si a una unidad de planificación le faltan los insumos de consumo previstos para uno o más meses durante un período de 18 meses a partir del mes actual, QAT lo marcará como un problema. QAT comprobará si hay lagunas para garantizar que todos los próximos 18 meses tengan los valores de consumo previstos.
>
> **\*Nota:** Si hay una unidad de planificación que se está eliminando gradualmente, se recomienda que el usuario ponga cero como consumo previsto, hasta que se elimine por completo, momento en el cual será necesario desactivar la unidad de planificación.\*

- **Envíos con fechas de recepción anteriores**

> QAT verificará las fechas de recepción de todos los envíos para ver si alguno pertenece al pasado según la fecha actual. Si la fecha de recepción de un envío ya pasó, se marcará en la Lista de problemas QAT. Por ejemplo, hay una unidad de planificación con una fecha de recepción del 31 de diciembre<sup>st</sup> de 2022. Como esta fecha ya pasó, QAT la marcará y el usuario deberá cambiar el estado del envío a "Recibido" o cambiar la fecha de recepción a una futura.
>
> **\*Nota:** hay un tiempo de reserva de catorce días para que QAT reconozca que la fecha de recepción del envío ya pasó y para que se marque el problema.\*

- **Envíos que deberían haberse enviado antes de la fecha prevista**

> QAT comprobará las fechas estimadas de envío, que se calculan en función de los plazos de entrega predefinidos del Programa, para ver si hay algún envío con una fecha estimada de "Enviado" en el pasado. Si la fecha estimada de envío del envío ya pasó, se marcará en la Lista de problemas QAT. Por ejemplo, hay una unidad de planificación con una fecha de envío objetivo del 15 de enero<sup>th</sup> de 2023. Como esta fecha ya pasó, QAT la marcará y el usuario deberá cambiar el estado del envío a "Enviado" o cambiar la fecha de recepción a una más futura. Cambiar la fecha de recepción a una fecha futura hará que QAT vuelva a calcular automáticamente las fechas de envío previstas. Si no es posible cambiar el estado o la fecha de recepción, el usuario puede "abordar" el problema (consulte [Cerrar y abordar problemas](#cerrar-y-abordar-problemas)).
>
> **\*Nota:** Hay un tiempo de reserva de catorce días para que QAT reconozca que la fecha de envío del envío ya pasó y para que se marque el problema.\*

- **No se utiliza pronóstico dinámico (para grupos de productos Malaria, ARV, VMMC)**

> Para cualquier producto que pertenezca a las siguientes categorías de trazadores: Malaria, ARV o VMMC, QAT verificará el pronóstico dinámico. GHSC-PSM fomenta la previsión con valores mensuales dinámicos, para mostrar que se han tenido en cuenta factores como la estacionalidad, la ampliación del programa o las campañas. Si una unidad de planificación de uno de estos tres grupos de productos tiene cuatro meses consecutivos con consumo estático, se marcará en la Lista de problemas QAT.

- **El plan de suministro no sigue los parámetros mínimos/máximos**

> Si una unidad de planificación tiene exceso de existencias, falta de existencias o desabastecimiento en cualquier momento durante los próximos 18 meses, se marcará en la Lista de problemas QAT. QAT contará la cantidad de meses en que la unidad de planificación tiene **exceso de existencias y falta de existencias**, subdividiéndola en dos períodos de tiempo diferentes: aquellos meses dentro del plazo de entrega (1 a 6 meses) y aquellos dentro de la ventana de planificación (7 a 18 meses). La lista de problemas QAT también indicará la cantidad de envíos que se recibirán en los próximos 1 a 6 meses y en los próximos 7 a 18 meses. **Los desabastecimientos** se marcarán como un problema separado en la Lista de problemas de QAT. QAT indicará directamente qué meses están agotados en los períodos de tiempo subdivididos de 1 a 6 meses y de 7 a 18 meses. La lista de problemas QAT también indicará la cantidad de envíos que se recibirán en los próximos 1 a 6 meses y en los próximos 7 a 18 meses.
>
> **_Plan por MOS:_** El exceso de existencias se define por MOS \> Máximo MOS. La falta de existencias se define por MOS \< MOS mínimo. _Consulte_ a continuación un ejemplo de un problema y el gráfico del plan de suministro adjunto:

![P2396#yIS1](/img/media/image205.png)

Figura 127: El plan de suministro no sigue el ejemplo del parámetro MOS mínimo/máximo

> **\*Nota:** Si el valor de MOS para un mes determinado es “N/A”, entonces todos esos casos se excluyen al calcular los problemas de exceso de existencias, falta de existencias o desabastecimiento.\*
>
> **Ejemplo de plan por cantidad**: El exceso de existencias se define por Cantidad de saldo final \> Cantidad máxima. La falta de existencias se define por Cantidad de saldo final \< Cantidad mínima. Tenga en cuenta que QAT solo marcará el exceso de existencias si este excede el tiempo de entrega consecutivo (por ejemplo, si el tiempo de entrega es de 2 meses, entonces QAT marcará si hay un exceso de existencias durante más de 2 meses seguidos, pero no marcará el problema si el exceso de existencias ocurre cada dos meses). _Consulte_ a continuación un ejemplo de un problema y el gráfico del plan de suministro adjunto:

![P2403#yIS1](/img/media/image206.png)

Figura 128: El plan de suministro no sigue el ejemplo del parámetro de cantidad mínima/máxima

- **Otro – Manual**

> Estas son preguntas o aclaraciones específicas ingresadas manualmente por el revisor del plan de suministro que QAT no marca automáticamente. Estos problemas podrían ser elementos que el revisor del plan de suministro desea abordar ese trimestre antes de finalizar o un recordatorio para la próxima presentación trimestral. La descripción del problema, la sugerencia y la criticidad las determina el revisor del plan de suministro.

## Catálogo de programas

**Propósito**: ver una lista estandarizada de todas las unidades de planificación y unidades de pronóstico en un programa QAT y sus atributos correspondientes.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Catálogo de programas

- **Notas:** Un usuario puede seleccionar todas las categorías de unidades de planificación y categorías de seguimiento, o puede elegir una categoría específica para ver. Si un usuario desea agregar una unidad de planificación que no aparece en el Informe del catálogo de programas, consulte [Tickets para agregar/actualizar usuarios y datos maestros] (#tickets-for-addingupdating-users-and-master-data).

![P2414#yIS1](/img/media/image207.png)

Figura 129: Informe del catálogo de programas

## Informes de estado de existencias

### Estado del stock a lo largo del tiempo

**Propósito:** comparar uno o más productos y sus niveles de inventario a lo largo de un período de tiempo.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Estado del stock  Estado del stock a lo largo del tiempo

- **Notas:** La Unidad de Planificación puede ser única, de selección múltiple o de selección total. La opción "Seleccionar todo'' puede no ser ventajosa si el programa tiene muchas unidades de planificación, ya que el gráfico no podrá determinar las líneas individuales en el gráfico. Sugerimos elegir menos de diez productos a la vez. Específicamente, este informe puede ser útil para comparar categorías.

![A graph of a graph Description automatically generated with medium confidence](/img/media/image208.png)

Figura 130: Informe del estado del stock a lo largo del tiempo

### Matriz de estado de existencias

**Propósito:** proporcionar una instantánea rápida de los meses de existencias a lo largo del tiempo en un formato de tabla fácil de leer.

- **Accesible a:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Estado de stock  Matriz de estado de stock

- **Notas:**
  - Se muestra una fila para cada combinación de unidad de planificación y año, según lo seleccionado en los filtros superiores.

  - QAT mostrará el MOS o la cantidad para cada unidad de planificación en función de si el producto está planificado por cantidad o MOS, según lo seleccionado en la pantalla Actualizar unidades de planificación (consulte <u>Sección 4.A2</u>).

  - Los colores corresponden a los niveles de stock durante ese mes en particular:
    - Rojo – Agotado

    - Naranja – Falta de existencias

    - Verde: abastecido según el plan

    - Amarillo: exceso de existencias

    - Gris: N/A (QAT no puede calcular el valor debido a que faltan datos)

  - Aunque el CSV no exporta los colores con formato condicional, el PDF contiene los colores y los usuarios pueden copiar y pegar la tabla para conservar todos los colores y el formato.

![P2442#yIS1](/img/media/image209.png)

Figura 131: Informe instantáneo del estado del stock

### Instantánea del estado del stock

**Propósito:** brindar una vista de alto nivel del estado del stock de un programa en todas las unidades de planificación en un único momento (un mes).

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Estado del stock  Instantánea del estado del stock

- **Notas:**
  - Los distintos colores corresponden a los niveles de existencias durante ese mes en particular:
    - Rojo – Agotado

    - Naranja – Falta de existencias

    - Verde: abastecido según el plan

    - Amarillo: exceso de existencias

    - Gris: N/A (QAT no puede calcular el valor debido a que faltan datos)

  - Aunque el PDF y el CSV no exportan los colores con formato condicional, los usuarios pueden copiar y pegar la tabla para conservar todos los colores y el formato.

![P2459#yIS1](/img/media/image210.png)

Figura 132: Informe instantáneo del estado del stock

### Instantánea del estado del stock (global)

**Propósito:** brindar una vista de alto nivel del estado del stock de un programa en todas las unidades de planificación en un solo momento (un mes) para múltiples programas.

- **Accesible a:** Administradores de dominio, administradores de programas, usuarios de programas y visualizadores de informes

- **Navegación:** Informes  Estado del stock  Instantánea del estado del stock (Global)

- **Notas:**
  - Los distintos colores corresponden a los niveles de existencias durante ese mes en particular:
    - Rojo – Agotado

    - Naranja – Falta de existencias

    - Verde: abastecido según el plan

    - Amarillo: exceso de existencias

  - Aunque el PDF y el CSV no exportan los colores con formato condicional, los usuarios pueden copiar y pegar la tabla para conservar todos los colores y el formato.

![P2475#yIS1](/img/media/image211.png)

Figura 133: Informe instantáneo del estado del stock (global)

## Informes de consumo

### Consumo (Global)

**Propósito:** mostrar visualmente el consumo de una unidad de planificación o de varias unidades de planificación en todos los países.

- **Accesible a:** Administradores de dominio, administradores de programas, usuarios de programas y visualizadores de informes

- **Navegación:** Informes  Informes de Consumo  Consumo (Global)

- **Notas:**
  - Los distintos colores apilados en las barras horizontales representan diferentes países. Los usuarios pueden determinar qué país haciendo referencia a la leyenda del gráfico.

  - El eje x corresponde a la cantidad de consumo (en millones) de cada país.

![P2487#yIS1](/img/media/image212.png)

Figura 134: Informe de consumo (global)

### Error de pronóstico (mensual)

**Propósito:** mostrar visualmente la precisión del pronóstico utilizando el método de error porcentual promedio ponderado (WAPE), a lo largo del tiempo, mientras se compara el consumo pronosticado con el consumo real.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Informes de Consumo  Error de Previsión (Mensual)

![A graph with red and blue bars Description automatically generated](/img/media/image213.png)

> Figura 135: Informe de error de pronóstico (mensual)

- **Notas:**
  - En el gráfico, las barras verticales rojas representan el consumo real, las barras verticales azules representan el consumo previsto, la línea verde (que utiliza el eje derecho) representa el error de previsión y la línea de puntos turquesa representa el umbral de error de previsión (consulte la Figura 115: Informe de error de previsión (mensual)).

- El umbral de error de pronóstico (%) por unidad de planificación lo establece el administrador del programa en la pantalla Actualizar unidades de planificación. Si un error de pronóstico supera el umbral de error de pronóstico establecido (%), aparecerá en texto rojo en la tabla de datos.

  - La vista de informe se puede ver de varias maneras:
    - **Unidad de pronóstico.** Es posible que un usuario desee elegir una unidad de pronóstico al comparar en unidades base, como por ejemplo con medicamentos que tienen diferentes tamaños de frascos (unidades de planificación) que comparten la misma unidad de pronóstico (por ejemplo, el antirretroviral TLD30 frente a TLD90; consulte la Figura 116).

    - **Unidad de equivalencia:** Es posible que un usuario desee elegir una unidad de pronóstico al comparar productos con diferentes unidades de pronóstico, pero existe algún vínculo programático (por ejemplo, tratamientos contra la malaria AL 6x1 frente a 6x2; consulte la Figura 117).

    - **“¿Mostrar consumo ajustado por falta de existencias?”:** Si esta casilla está marcada, QAT utiliza el consumo real ajustado en lugar del consumo real. QAT calcula el total de días del mes según el calendario.

  - Datos faltantes:

  - > Si faltan datos para el consumo previsto o real, faltará un segmento de la línea o una barra en el gráfico.

  <!-- finalizar lista -->
  - > Si faltan datos para el consumo real o previsto, no será posible calcular el error de pronóstico y el usuario puede ver un espacio en el gráfico de líneas

  <!-- finalizar lista -->
  - **Fórmula:** El error de pronóstico utiliza la fórmula de error porcentual promedio ponderado (WAPE). El siguiente ejemplo utiliza ventanas de tiempo de 6 meses.
    - **Ventana de tiempo:** Para productos no estacionales con un patrón de consumo predecible, use una ventana de tiempo corta, pero considere usar una ventana de tiempo más larga para aquellos productos con un consumo más variable o aquellos con estacionalidad (use una ventana de tiempo al menos lo suficientemente larga para considerar toda la temporada).

    - Para obtener más detalles sobre la lógica que utiliza QAT para calcular este informe, consulte "Mostrar fórmulas" en la herramienta.

![P2508#yIS1](/img/media/image214.png)

Figura 136: Fórmula WAPE con ventana de tiempo de 6 meses como ejemplo

![A graph with red and blue bars Description automatically generated](/img/media/image215.png)

> Figura 137: Informe de error de pronóstico (mensual): se muestra por unidad de pronóstico

![A screenshot of a graph Description automatically generated](/img/media/image216.png)

> Figura 138: Informe de error de pronóstico (mensual): se muestra por unidad de equivalencia

### Error de previsión (por unidad de planificación)

**Propósito: **evaluar la precisión del pronóstico para productos seleccionados durante un mes específico en todos los países y programas.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Informes de Consumo  Error de Previsión (por Unidad de Planificación)

- **Notas:**
  - Para la ventana de tiempo, los productos no estacionales con un patrón de consumo predecible pueden tener una ventana de tiempo corta, pero aquellos que tienen un consumo más variable/aquellos con temporadas deben tener una ventana de tiempo larga, o al menos lo suficientemente larga como para considerar toda la temporada.

  - En la tabla, los porcentajes de error de pronóstico que están por encima del umbral de error de pronóstico (%), establecido por un administrador del programa en la pantalla Actualizar unidades de planificación, se resaltarán en rojo.

  - Si faltan datos de consumo real o previsto, no será posible calcular el error de previsión y el usuario verá un mensaje de error en la tabla.

  - El error de pronóstico utiliza la fórmula de error porcentual promedio ponderado (WAPE):

![P2529#yIS1](/img/media/image217.png)

Figura 139: Fórmula WAPE

![P2531#yIS1](/img/media/image218.png)

Figura 140: Informe de error de pronóstico (por unidad de planificación)

## Informes de envío

### Envío (Global)

**Propósito:** agregar cantidades de adquisiciones por fuente de financiamiento, agente de adquisiciones y tipo de agente de adquisiciones en todos los países y programas.

- **Accesible a:** Administradores de dominio, administradores de programas, usuarios de programas y visualizadores de informes

- **Navegación:** Informes  Informes de envío  Envíos (Global)

- **Notas:**
  - Los dos gráficos que aparecen primero en el Informe de envíos (global) representan la cantidad agregada de envíos por país y el costo de los envíos (en USD) por fuente de financiamiento para una sola unidad de planificación. Para obtener una vista tabular de los datos, el usuario puede encontrar detalles en las dos tablas inferiores.

- Si un país no adquiere la unidad de planificación seleccionada, no aparecerá en el gráfico de las tablas del informe.

![P2543#yIS1](/img/media/image219.png)

Figura 141: Informe de envío (global)

### Descripción general del envío

**Propósito:** agregar cantidades de adquisiciones por fuente de financiamiento o por tipo de agente de adquisiciones en todos los países y programas.

- **Accesible a:** Administradores de dominio, administradores/usuarios de programas y visualizadores de informes

- **Navegación:** Informes  Informes de envío  Descripción general del envío

- **Notas:**
  - Una vez que naveguen a la pantalla Descripción general del envío, los usuarios verán menús desplegables que deben completar para mostrar datos específicos. Una vez que seleccionan ciertos menús desplegables o todos, a los usuarios se les muestra un gráfico y un gráfico circular. El gráfico que aparece primero en el Informe general de envíos muestra la cantidad agregada de envíos entre países y el costo (en USD) de los envíos por fuente de financiamiento entre unidades de planificación. El chat circular muestra porcentajes de la fuente de financiación según las selecciones del usuario y al mismo tiempo puede pasar el cursor para ver el monto total (en USD). Los usuarios también pueden optar por agrupar los datos por tipo de agente de adquisiciones o tipo de fuente de financiamiento. Para obtener una vista tabular de los datos, el usuario puede encontrar detalles en la tabla inferior.

![A screenshot of a computer Description automatically generated](/img/media/image220.png)

Figura 142: Informe general del envío

### Detalles de envío

**Propósito:** brindar una vista completa de todos los envíos de un programa.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Informes de envío  Detalles de envío

- **Notas:**
  - Los gráficos superiores muestran el total de USD por mes por estado de envío.

  - Hay dos tablas debajo del gráfico: la primera proporciona un resumen y la segunda proporciona información detallada sobre los envíos.
    - La tabla de resumen muestra el número total de envíos y los costos totales por fuente de financiamiento para el período de tiempo seleccionado.

    - La tabla detallada contiene los envíos desagregados por unidad de planificación, etc.

![](/img/media/image221.png)

Figura 143: Informe de detalles del envío

### Detalles del costo de envío

**Propósito:** brindar una vista simple de todos los envíos de un programa y sus costos totales.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Informes de envío  Detalles de costos de envío

- **Notas:**
  - Puede mostrarse por fuente de financiación, agente de adquisiciones o unidad de planificación.

![P2574#yIS1](/img/media/image222.png)

Figura 144: Informe de detalles de costos de envío

### Resumen de costos de envío

**Propósito:** proporcionar una visión general de los costos totales de envío por año calendario para una unidad de programa y planificación, por fuente de financiamiento.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Informes de envío  Descripción general de costos de envío

- **Notas:**
  - Este informe se puede ver en formato PDF o Excel (CSV)

  - Este informe puede basarse en la fecha de recepción del envío o en la fecha de envío del envío.

![A screenshot of a computer Description automatically generated](/img/media/image223.png)

Figura 145: Informe general de costos de envío

### Presupuesto

**Propósito:** mostrar los diferentes presupuestos asignados a un programa(s), los montos asignados a los envíos, el monto gastado en exceso (si corresponde) y los montos restantes estimados. Este menú desplegable de programas en este informe es de selección múltiple, ya que varios programas pueden compartir el mismo presupuesto.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Informes de envío  Presupuesto

- **Notas:**
  - El gráfico muestra cada presupuesto predefinido en un programa y si está asignado a envíos (planificados o ordenados) y el monto restante.

  - La vista tabular del gráfico también proporciona información sobre la fuente de financiación de cada presupuesto, fecha de inicio y finalización, y otra información detallada.

![P2596#yIS1](/img/media/image224.png)

Figura 146: Informe de Presupuesto

### Plazo de entrega del agente de adquisiciones

**Propósito:** mostrar los plazos de entrega detallados (en meses) para todas las unidades de planificación, por agente de adquisiciones.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Informes de envío  Plazo de entrega del agente de adquisiciones

![P2604#yIS1](/img/media/image225.png)

Figura 147: Informe de tiempo de entrega del agente de adquisiciones

## Informes de inventario

### Vencimientos

**Propósito:** proporcionar a los planificadores cantidades estimadas de unidades de planificación que vencerán en el futuro según el lote o la vida útil.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Informes de Inventario  Vencimientos

- **Notas:**
  - Este informe se basa en datos ingresados previamente e incluye información de lotes sobre envíos, inventario y consumo real, y vida útil por unidad de planificación. Muestra los números de lote, la fecha de recepción del lote, la vida útil de ese lote (o unidad de planificación), la fecha de vencimiento y el costo del producto vencido.

  - El informe puede incluir cantidades en envíos planificados que se espera que lleguen y expiren durante el período de tiempo seleccionado.

  - Calculará (basándose en la vida útil, las proyecciones de existencias y el consumo previsto) qué cantidad de un lote particular se espera que caduque y cuándo.
    - Para el cálculo del vencimiento, consulte el [Anexo 2: Reglas comerciales](#anexo-2-reglas-comerciales)

  - El informe calculará el costo del producto caducado, en función de la cantidad caducada y el precio predeterminado de la unidad de planificación establecido por el usuario en la pantalla Actualizar unidades de planificación.

  - La mesa es interactiva. Cuando el usuario hace clic en la cantidad vencida, QAT abrirá una ventana emergente con el libro mayor de lotes.

![P2620#yIS1](/img/media/image226.png)

Figura 148: Informe de Vencimientos

### Costo del inventario

**Propósito**: para un mes seleccionado, proporciona un costo estimado del inventario basado en el stock disponible real o proyectado y el precio del catálogo de la unidad de planificación.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Informes de inventario  Costo de inventario

- **Notas:**
  - El informe puede incluir cantidades en envíos planificados que se espera lleguen durante el período de tiempo seleccionado.

  - La columna de existencias podría basarse en un inventario real o en un saldo final proyectado.

  - Este informe utiliza la siguiente fórmula:

![P2632#yIS1](/img/media/image227.png)

Figura 149: Fórmula del costo del inventario

![P2635#yIS1](/img/media/image228.png)

Figura 150: Informe de costo de inventario

### Turnos de inventario

**Propósito:** mostrar el número de rotaciones de inventario por unidad de planificación, programa, país o categoría de unidad de planificación en un momento determinado. Los giros de inventario son una forma de medir la velocidad de los planes de suministro. La rotación de inventario es una métrica clave de desempeño que a menudo se utiliza para señalar la eficacia de la gestión de la cadena de suministro. Por lo general, es una métrica retrospectiva, pero debido a que QAT utiliza datos de pronóstico para estimar las proyecciones de stock en el futuro, el informe también se puede usar para ver los giros de inventario estimados según los planes. En general, una mayor rotación significa una cadena de suministro más saludable: los productos se mueven hacia abajo y son reemplazados por productos frescos con mayor frecuencia. Una baja rotación implica un bajo consumo, posiblemente un exceso de inventario; podría indicar, por ejemplo, que los objetivos del programa son demasiado ambiciosos.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Informes de inventario  Turnos de inventario

- **Notas:**
  - Este informe calcula la rotación de inventario en varios niveles: a nivel de unidad de planificación individual, a nivel agregado para un programa completo (múltiples unidades de planificación) y a nivel agregado para todo un país (múltiples programas) o categoría de producto.

  - Rotaciones de Inventario Planificado: son los meses posibles de stock para cada mes durante 12 meses si las reglas de inventario funcionaran perfectamente considerando el MIN y el Intervalo de Reorden de la Unidad de Planificación.
    - A nivel de unidad de planificación, el informe utiliza el intervalo mínimo y de reorden de la configuración de la unidad de planificación para calcular las rotaciones de inventario "planificadas".

    - A nivel de programa (múltiples unidades de planificación), QAT utiliza el modo de todos los turnos de inventario planificados de todas las unidades de planificación bajo un programa específico.

- A nivel de categoría de país y/o unidad de planificación, QAT utiliza el modo de todos los giros de inventario planificados de todas las unidades de planificación bajo una categoría de país/PU específica.

  - Rotaciones reales de inventario:
    - A nivel de unidad de planificación, QAT utiliza la siguiente fórmula para cada unidad de planificación para calcular la rotación de inventario real:

![P2651#yIS1](/img/media/image229.png)

Figura 151: Fórmula de rotación de inventario a nivel de unidad de planificación

- Para cada unidad de planificación, el informe compara los turnos reales y planificados, y calcula el MAPE y MSE.

- Para calcular la rotación de inventario real a nivel de programa, QAT buscará la moda en todas las unidades de planificación de ese programa. Si no se puede encontrar ninguna moda, QAT utilizará el promedio de todas las unidades de planificación a medida que cambie el inventario real de ese programa.

- Para calcular la rotación de inventario real a nivel de país (o categoría de producto), QAT buscará la moda en todos los programas. Si no se puede encontrar ningún modo, QAT utilizará el promedio.

![P2656#yIS1](/img/media/image230.png)

Figura 152: Informe de rotación de inventario

### Ajuste de existencias

**Propósito:** mostrar una lista de todos los ajustes de stock ingresados manualmente en un programa. Nota: los ajustes calculados automáticamente no se mostrarán en este informe.

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Informes de Inventario  Ajuste de Stock

- **Notas:**
  - Los ajustes calculados automáticamente (como resultado de una diferencia entre el saldo final proyectado y un recuento de inventario) no aparecen en este informe.

![P2666#yIS1](/img/media/image231.png)

Figura 153: Informe de ajuste de existencias

### Capacidad de almacén (por programa)

**Propósito:** muestra el volumen (en metros cúbicos) de todas las regiones dentro de un país (si un usuario ingresa dicha información al configurar un programa).

- **Accesible para:** Administradores de dominio, administradores de programas, visualizadores de informes y usuarios de programas

- **Navegación:** Informes  Informes de Inventario  Capacidad de Almacén (por Programa)

- **Notas:**
  - Este informe es más útil para aquellos países con múltiples regiones.

![P2676#yIS1](/img/media/image232.png)

Figura 154: Capacidad de almacén (por programa)

### Capacidad de almacén (por país)

**Propósito:** muestra el volumen (en metros cúbicos) de todos los países y regiones dentro de un país (se requiere acceso a nivel de dominio).

- **Accesible a:** Administradores de dominio y visualizadores de informes

- **Navegación:** Informes à Informes de inventario à Capacidad de almacén (por país)

- **Notas:**
  - Este informe es más útil para aquellos países con múltiples regiones.

![P2686#yIS1](/img/media/image233.png)

Figura 155: Capacidad de almacén (por país)