---
id: supply-planning-module-supply-planning
title: "Supply Planning Module: Supply Planning"
sidebar_label: "Supply Planning Module: Supply Planning"
sidebar_position: 5
---
# Módulo de planificación de suministros: planificación de suministros

## Planificación del suministro: descripción general

![](/img/media/image153.png)

Figura 99: Pantalla de planificación de suministros: planificación por MOS

![](/img/media/image154.png)

Figura 100: Pantalla de planificación de suministros: planificación por cantidad

- <u>¿Qué</u>? Todos los puntos de datos principales (consumo,
envíos, inventario) se juntan en la pantalla de planificación de suministro, y esto es
donde la mayoría de los usuarios de QAT pasarán la mayor parte de su tiempo. Los usuarios pueden hacer clic en
muchas de las celdas de la tabla para editar directamente sus datos. se recomienda
utilizar esta pantalla para la planificación activa del suministro (incluidas actualizaciones de datos y
planificación de nuevos envíos), pero utilizar la pantalla de entrada de datos cuando sea importante
se requiere la entrada de datos. Tenga en cuenta que algunas secciones varían **según si el
La unidad de planificación está planificada por MOS o por Cantidad (según se seleccione en
[Actualización de unidades de planificación](04-supply-planning-module-program-data.md#planning-units)) – las diferencias se indican a continuación.**
  - Esta pantalla también puede ser vista por la unidad de informes alternativa (ARU) asociada con la unidad de planificación. Esto significa que los usuarios pueden ver sus planes de suministro en términos de los nombres de los productos y las unidades de medida en las que ingresan los datos, con valores en la tabla y el gráfico que cambian según el factor de conversión ARU/PU establecido por el usuario (consulte Unidades de informe alternativas). El usuario selecciona ver por ARU haciendo clic en el botón de opción y luego seleccionando la ARU deseada para mostrar.

![A screenshot of a calendar Description automatically generated](/img/media/image155.png)

Figura 101: Tabla de planificación de suministros: por unidad de planificación frente a unidad de informes alternativa

- <u>¿Quién?</u> **Administradores de reino, Administradores de programa**, **Suministro
Los revisores del plan** y los **usuarios del programa** pueden agregar datos/editar datos en el plan de suministro.
Ciertos roles de "solo visualización" pueden ver el plan de suministro.

- <u>¿Cuándo?</u> En cualquier momento. El usuario no tiene que ser
en línea. Sin embargo, deben haber descargado un programa en su computadora local.
mientras está en línea antes de comenzar.

- <u>¿Cómo</u>?

> **Nota:** aparte de que se requiere el paso 1, los pasos restantes no son secuenciales, sino una explicación de las funciones disponibles en la pantalla de planificación de suministro.

1. > En la barra de menú de la izquierda, vaya a Planificación de suministros \> “Planificación de suministros”
    1. Seleccione el **Programa** deseado. La lista desplegable en la pantalla del plan de suministro mostrará todos los programas que ha descargado el usuario. Consulte [Descargar programa](03-managing-programs-and-versions.md#downloaddelete) para obtener detalles sobre cómo descargar un programa.

    2. Seleccione la **Unidad de planificación QAT o la Unidad de informes alternativa (ARU)** que desee.

![](/img/media/image156.png)

2. > La pantalla muestra dos pestañas de Plan de suministro: **Plan de suministro local** y **Servidor** **Plan de suministro - VX.** La pestaña "Plan de suministro local" es la versión local que se seleccionó en "programa" y está disponible para ser editada. El “Plan de suministro del servidor” es la última versión disponible en el servidor y solo está disponible para visualización (no editable).

![P2040#yIS1](/img/media/image157.png)

3. > De forma predeterminada, se muestran los últimos 3 meses y los 15 meses futuros a partir de la fecha actual. Utilice **Desplazarse hacia la izquierda/derecha** para mostrar datos de 3 meses en el pasado/futuro

![P2044#yIS1](/img/media/image158.png)

> Haga clic en "Mostrar fórmulas" en la parte superior derecha de la pantalla para obtener explicaciones sobre los cálculos en esta pantalla.

![](/img/media/image159.png)

4. > Haga clic en los íconos PDF y CSV para exportar este informe e incluirá todas las unidades de planificación en el programa. En PDF solo se incluirá el gráfico del producto seleccionado, pero habrá tablas para cada unidad de planificación.

![P2050#yIS1](/img/media/image160.png)

5. > Comprender los cálculos del saldo de existencias en la mitad superior de la tabla:

![](/img/media/image161.png)

Figura 102: Cálculo del saldo final de existencias

- > **Saldo de apertura** representa la cantidad de stock al comienzo del mes. Es igual al saldo final del mes anterior, excepto el primer mes del programa, donde el saldo inicial es cero. Puede ser un recuento de inventario del mes anterior (**en negrita**) o un valor proyectado (sin negrita).

- > **Saldo final** representa la cantidad de stock al final del mes. Puede ser un recuento de inventario (**en negrita**) o un valor proyectado (sin negrita).

- > Siga los signos +/- al lado de cada fila para comprender cómo funcionan las matemáticas desde el saldo inicial hasta el saldo final.

<!-- finalizar lista -->

6. > La mitad inferior de la tabla contiene más detalles para ayudar al usuario a interpretar el estado del stock.

![](/img/media/image162.png)

Figura 103 Diferencias en la tabla de planificación de suministros: Planificar por MOS versus Planificar por cantidad

- > **Consumo medio mensual (AMC)** es un promedio del consumo durante los meses indicados por los parámetros AMC, que se muestran encima de la tabla. **Para editar estos parámetros, consulte [Actualización de unidades de planificación](04-supply-planning-module-program-data.md#planning-units).**

![](/img/media/image163.png)

Figura 104 Diferencias en la leyenda de planificación de suministro: planificar por MOS frente a planificar por cantidad

- > **Demanda insatisfecha.** Cantidades estimadas de producto que se habrían consumido si hubiera suficiente stock disponible:
  - > Cuando el consumo previsto sea mayor que el stock inicial disponible proyectado.

  - > **Cuando el consumo real incluye los días de desabastecimiento**

  - > **Cuando un ajuste manual negativo es mayor que el saldo final proyectado**

  - > La funcionalidad de demanda insatisfecha de QAT es lo que captura lo que habría sido un stock negativo en el software heredado PipeLine.

- > **La segunda fila desde abajo**
  - > **Planificado por MOS: Meses de existencias** se calcula como el saldo final del mes dividido por el AMC.

  - > **Planificado por cantidad: la cantidad máxima se calcula como la cantidad mínima + frecuencia de reorden x AMC.**

- > Codificación de colores del estado del stock
  - > **Planificado por MOS: la fila “Meses de existencias”** está codificada por colores según el estado de las existencias utilizando el código de colores que se muestra en la leyenda. El estado del stock se determina comparando el MOS con el MIN MOS y el MAX MOS.

  - > **Planificado por cantidad: la fila "Saldo final" está codificada por colores según el estado del stock** utilizando el código de colores que se muestra en la leyenda. El estado del stock se determina comparando la cantidad del "saldo final" con la cantidad mínima (proporcionada por el usuario) y la cantidad máxima (calculada).

<!-- finalizar lista -->

7. > **Lectura del gráfico de estado de existencias.** Las fechas de este gráfico siguen a la tabla. De forma predeterminada, se muestran todos los elementos del gráfico. Haga clic en cualquier elemento de datos en la leyenda para ocultar un elemento de datos. El gráfico de Estado del stock tiene dos ejes verticales (Y):

<!-- finalizar lista -->

- > El **eje principal (izquierda) está en unidades** y representa envíos, consumo, existencias y vencimientos. Para Planificar por cantidad, las cantidades mínimas y máximas utilizan el eje principal.

![](/img/media/image164.png)

Figura 105 Gráfico de planificación de suministros: eje primario (planificado por MOS)

![](/img/media/image165.png)

Figura 106 Gráfico de planificación de suministros: eje primario (planificar por cantidad)

- > Para el plan por MOS, hay un **eje secundario (derecho) en meses** y muestra los parámetros de stock (mínimo, máximo) y los meses de stock calculados.

![](/img/media/image166.png)

Figura 107 Gráfico de planificación de suministros: eje secundario (planificado por MOS)

## Planificación del suministro: consumo

En la tabla de planificación de suministro, solo se mostrará un número por mes para todo el programa en la fila de consumo. Como se indica en la leyenda, **_consumo previsto_** se indica con texto en cursiva violeta, mientras que **consumo real** se indica con texto negro sin cursiva.

![P2093#yIS1](/img/media/image167.png)

> ![P2094#yIS1](/img/media/image168.png)

![](/img/media/image169.png)**Para agregar o editar registros de consumo**

1. Haga clic en el mes y la celda de la fila Consumo en la pantalla de planificación de suministro. Aparecerá una nueva ventana llamada Detalles de consumo. En la tabla que aparece, cada fila representa una región. Los programas de una sola región solo tendrán una fila, mientras que los programas de múltiples regiones tendrán varias filas. El total muestra el consumo agregado de todas las regiones.

2. Haga clic en el registro de consumo de cualquier mes y región para ver más detalles*.* Cualquier registro de ese mes y región se mostrará a continuación.

3. Para crear un nuevo registro, haga clic derecho en la fila de detalles y seleccione “Agregar nuevo consumo” <u>or</u> haga clic en el botón “+ Agregar fila”.

4. Para editar un registro, haga clic en cualquier celda y edite los detalles del consumo (tipo de consumo, fuente de datos, cantidad, etc.). Haga doble clic para activar cualquier menú desplegable. Consulte [Datos de consumo](04-supply-planning-module-program-data.md#consumption-data) para obtener orientación adicional sobre el ingreso de datos de consumo.

5. Haga clic en "Enviar" para guardar los cambios y regresar a la pantalla principal de planificación de suministro, donde se reflejarán sus cambios. ![A screenshot of a computer Description automatically generated](/img/media/image170.png)

## Planificación de suministro: envíos

De forma predeterminada, los envíos solo se muestran como una fila en la pantalla de planificación de suministro: esta es la cantidad agregada de todos los envíos (excluidos los envíos sugeridos). Para mostrar más detalles, haga clic en el ícono + a la izquierda de la fila “+ Envíos” para expandir y mostrar las subfilas. Verá cinco filas divididas por estado del pedido (fila superior para envíos sugeridos que se calculan automáticamente).

**Para ver un desglose detallado de todos los envíos en un mes, haga clic en la celda del mes correspondiente en la 'fila +Envíos'. Para ver el desglose detallado de todos los envíos por estado, haga clic en la celda del mes correspondiente en la fila de estado individual.**

**ERP (planificación de recursos empresariales)**: los datos vinculados al ERP desde los agentes de adquisiciones no son editables (consulte [Vinculación de envíos de ERP](04-supply-planning-module-program-data.md#erp-shipment-linking))

Para todas las filas de envío, los colores indican el agente de adquisiciones. Si un mes tiene varios envíos con diferentes agentes de adquisiciones, la celda será verde. Los triángulos rojos en la parte superior derecha de la celda indican que un envío es una emergencia. Si el envío es una adquisición local, habrá un ícono L en la parte inferior izquierda de la celda. Si el envío está vinculado a ERP, habrá un ícono de vínculo en la parte superior izquierda de la celda. Los envíos pueden tener varios íconos, como un pedido de emergencia vinculado al ERP local. La leyenda aparece en la parte superior de la pantalla.

![](/img/media/image171.png)

![](/img/media/image172.png)

Figura 108 Envíos en planificación de suministros

Las siguientes secciones cubrirán cómo actualizar envíos existentes y crear nuevos envíos dentro de la pantalla de planificación de suministros. Consulte <u>**Datos de envío**</u> para obtener más sugerencias sobre los campos de datos de envío, que se aplican en la pantalla Entrada de datos de envío y en la pantalla de planificación de suministro.

### Actualización de un envío existente

1. Haga clic en la celda que representa el mes y el envío a editar. Al hacer clic en la fila '+Envíos' se abrirá una pestaña con todos los envíos de ese mes, independientemente del estado. Al hacer clic en una de las filas de estado, se abrirá una pestaña que muestra solo los envíos de ese mes con ese estado.

![A screenshot of a computer Description automatically generated](/img/media/image173.png)

2. Aparecerá la ventana emergente Detalles del envío. Realice todos los cambios deseados. Para actualizar la información del lote o la fecha, haga clic derecho en la fila de envío. La parte superior de la ventana emergente permite a los usuarios navegar a un mes diferente para realizar cambios en esos envíos también.

![](/img/media/image174.png)

3. Haga clic en "Enviar" para guardar los cambios y regresar a la pantalla principal de planificación de suministro, donde se reflejarán los cambios (**Nota:** El botón Enviar no aparecerá si no se completan todos los campos obligatorios).

![A screenshot of a computer screen Description automatically generated](/img/media/image175.png)

**Nota:** El envío planificado se editó como enviado, lo que muestra que los 130 000 ahora se han movido de la fila "Planificado" a la fila "Enviado y llegado".

![](/img/media/image176.png)

**Recordatorio:** Se proporcionan sugerencias sobre herramientas para ayudar a guiar dónde actualizar parámetros específicos. Estos proporcionan claridad sobre lo que los usuarios necesitan actualizar.

**Actualización de la cantidad de envío con el botón Recalcular**

Para envíos planificados en el futuro, QAT sugerirá una cantidad de envío revisada como alerta temprana para evitar bajar de los niveles mínimos de stock. Al igual que los envíos sugeridos (consulte [Crear un nuevo envío](#creating-a-new-shipment)), QAT solo proporcionará el botón de recalcular si el envío cae en un mes que está por debajo del mínimo seguido de al menos dos meses que también están por debajo del nivel mínimo de existencias. La cantidad recomendada por el botón de recalcular seguirá la misma lógica que los envíos sugeridos por QAT (consulte **Reglas para envíos sugeridos** a continuación).

A continuación se detallan los pasos para usar el botón recalcular en la pantalla Planificación de suministros:

Vaya a un envío planificado en el futuro donde el mes actual y al menos los 2 meses siguientes estén por debajo del nivel mínimo de existencias.

Haga clic izquierdo en el envío.

Busque la columna "Cantidad de pedido" y haga clic derecho.

Haga clic en "Recalcular". Aparecerá un mensaje emergente que le indicará cuánta cantidad sugiere agregar QAT y cuánta cantidad será el envío revisado.

![P2155#yIS1](/img/media/image177.png)

Figura 109: Botón Recalcular

Haga clic en "Aceptar". La ventana emergente desaparecerá y la cantidad del pedido revisada aparecerá en la columna "Cantidad del pedido". Haga clic en "Enviar" si desea continuar con la cantidad de pedido revisada. En cualquier momento, el usuario puede anular la cantidad haciendo doble clic en la celda y escribiendo una nueva cantidad.

La cantidad revisada ahora se reflejará en el plan de suministro.

### Creando un nuevo envío

Hay dos formas de crear nuevos envíos: 1) convertir un envío sugerido por QAT en un envío planificado o 2) agregar un envío manualmente.

Para **Convertir un** **Envío sugerido** en un envío planificado:

1. Haga clic en la fila de Envío sugerido en el mes deseado.

2. Aparecerá la ventana emergente Detalles del envío. Cambie el estado al estado deseado, complete los campos obligatorios, indicados por un asterisco. Haga doble clic para activar cualquier menú desplegable. Desplácese hacia la derecha para ver todos los campos. Pase el cursor sobre la información sobre herramientas si necesita alguna aclaración (como se muestra en la imagen a continuación). La cantidad del pedido se completará previamente con la cantidad del pedido sugerida.

![](/img/media/image178.png)

![A screenshot of a computer Description automatically generated](/img/media/image179.png)

3. Haga clic en "Enviar" para guardar los cambios y regresar a la pantalla principal de planificación de suministro, donde se reflejarán los cambios (**Nota**: el botón Enviar no aparecerá si no se completan todos los campos obligatorios)

**Reglas para envíos sugeridos:**

> <u>Para plano por MOS:</u>

1. ¿La unidad de planificación no tiene existencias suficientes (MOS\<Min) for 3 straight months?
    1.  If yes, suggested shipment will bring the current month’s stock level to **maximum**.

    2.  If no, no suggested shipment.

2.  If the planning unit is stocked out, QAT will always suggest a shipment.
    1.  If both of the next 2 months are \<Min, the suggested shipment will bring the current month’s stock level to **maximum.**

    2.  If 1 of the next 2 months is \>Min)? El envío sugerido llevará el nivel de existencias del mes actual al **mínimo.**

3. Si AMC = 0 o N/A, no habrá ningún envío sugerido para ese mes.

> <u>Para planificar por cantidad:</u>
>
> Donde el mes N es el mes para el que se calcula QAT y X = plazo de entrega de distribución

1. > Si AMC = 0 o N/A para el mes N, no se sugiere envío

2. > Si el mes N está agotado (saldo final = 0), QAT siempre sugerirá un envío

<!-- finalizar lista -->

1. > Si los dos meses siguientes (N+1, N+2) son \< cantidad mínima, el envío sugerido es la cantidad que llevaría el mes N a **cantidad máxima.**

2. > Si uno o ambos de los próximos 2 meses (N+1 o N+2) es \> cantidad mínima, el envío sugerido es la cantidad que llevaría el mes N a **cantidad mínima.**

<!-- finalizar lista -->

3. > ¿Hay escasez de existencias del producto (saldo final \< Cantidad mínima) durante 3 meses consecutivos (Mes N, N+1, N+2)?

<!-- finalizar lista -->

1. > En caso afirmativo, el envío sugerido es la cantidad que llevaría el mes N a **cantidad máxima**

2. > Si no, no se sugiere envío

_QAT coloca la cantidad sugerida en el mes N-X. En otras palabras, X meses antes del Mes N, donde X es el plazo de entrega de distribución._

**Para crear manualmente un nuevo envío:**

1. Haga clic en la celda que representa el mes al que se debe agregar el envío. Al hacer clic en la fila '+Envíos' se abrirá una pestaña con todos los envíos de ese mes, independientemente del estado. Al hacer clic en una de las filas de estado, se abrirá una pestaña que muestra solo los envíos de ese mes con ese estado. Cualquiera de las opciones funcionará para agregar un nuevo envío.

2. Aparecerá la ventana emergente Detalles del envío. Para agregar una nueva fila, haga clic en el botón "+ Agregar fila" o haga clic derecho en cualquier fila y seleccione "Agregar nuevo envío". Haga doble clic para activar cualquier menú desplegable. Cambie al estado y cantidad deseados y complete los campos obligatorios indicados con un asterisco. Desplácese hacia la derecha para ver todos los campos.

3. Para crear varios envíos nuevos, haga clic derecho en cualquier fila y seleccione "Agregar nuevo envío" o haga clic en el botón "+ Agregar fila".
    1. Tenga en cuenta los íconos de información sobre herramientas para ayudar a guiar qué parámetros específicos deben actualizarse.

> ![A close up of a white background Description automatically generated](/img/media/image180.png)

![P2201#yIS1](/img/media/image181.png)

4. Haga clic en "Enviar" para guardar los cambios y regresar a la pantalla principal de planificación de suministro, donde se reflejarán los cambios (**Nota:** El botón Enviar no aparecerá si no se completan todos los campos obligatorios).

## Planificación de suministros: inventario/ajustes

En la tabla de planificación de suministros, se mostrará un número por mes para todo el programa en la fila **manual** **ajustes**, independientemente de cuántos ajustes manuales se realicen. De manera similar, el **saldo final** siempre será una fila, independientemente de si QAT proyecta el saldo final o lo proporciona el usuario como un recuento de inventario.

![](/img/media/image182.png)

1. ![](/img/media/image169.png) Para agregar o editar registros de ajuste o inventario, haga clic en el mes y en la celda de los ajustes o filas del saldo final en la pantalla de planificación de suministro.
    1. Aparecerá una nueva ventana llamada **Ajustes y detalles de inventario**. En la tabla que aparece, cada fila representa una región. Los programas de una sola región solo tendrán una fila, mientras que los programas de múltiples regiones tendrán varias filas.

    2. El total muestra los ajustes y el inventario agregados para todas las regiones.

    3. Haga clic en el registro de cualquier mes y región para mostrar más detalles.

![P2222#yIS1](/img/media/image183.png)

2. Todos los registros de ese mes y región se mostrarán a continuación.
    - Para agregar un registro de ajuste o inventario, haga clic en agregar fila, o haga clic derecho en la tabla inferior y seleccione "Agregar nuevo ajuste" o "Agregar nuevo inventario". Ingrese los detalles requeridos. Para los ajustes, los usuarios pueden ingresar ajustes tanto positivos como negativos, en el pasado y en el futuro, y se requieren notas.

![P2227#yIS1](/img/media/image184.png)

- Para editar un registro, haga clic en cualquier celda para editar.

<!-- finalizar lista -->

3. **Nota:** Un usuario puede revisar qué lote está afectando su saldo final para un mes en particular, haciendo clic en "Inventario final" en la pantalla emergente "Ajuste y detalles de inventario".

![P2232#yIS1](/img/media/image185.png)

Figura 111: Lotes incluidos en la ventana emergente Inventario final

4. Para los meses con un registro de inventario, el usuario puede hacer clic en editar las cantidades del lote.
    - Nota: la redistribución de las cantidades de los lotes debería ser el último recurso. Siempre es mejor actualizar la información upstream (envío, consumo, ajuste) en lugar de actualizar la información del lote de inventario.

    - ¿Cómo hacerlo?
      1. Asegúrese de que haya un recuento de inventario real/manual para el mes.

      2. Haga clic en "inventario final" para abrir los lotes.

      3. Escriba sobre la cantidad real; utilice los menús desplegables si desea cambiar los lotes.

      4. Recuerde, el total de los lotes debe coincidir con el total del inventario del mes.

    - Haga clic derecho en cualquier lote para ver el libro mayor de lotes (obtenga más información en [Planificación de suministro: stock vencido del proyecto e información de lote](#planificación-de-suministro-información-de-lote-y-stock-expirado-del-proyecto).)

> ![](/img/media/image186.png)

Figura 112: Ventana emergente Lotes que afectan el inventario final

## Planificación de suministros: stock vencido del proyecto e información de lotes

Los usuarios de ![](/img/media/image187.png)U pueden ver el stock vencido proyectado, si lo hay, para cada mes en su plan de suministro en la fila Stock vencido proyectado**. Al hacer clic en <u>cell</u>, aparecerá una ventana emergente con los detalles de vencimiento.

![](/img/media/image188.png)

Desde la ventana emergente, los usuarios pueden realizar 2 funciones:

1. **Edite el lote que contribuyó al vencimiento**: haga clic en el Número de lote. QAT redirigirá automáticamente al usuario al envío a partir del cual se generó el lote. Desde la pantalla de envío, un usuario puede editar el nombre del lote, la fecha de vencimiento y la cantidad de envío.

![P2240#yIS1](/img/media/image189.png)

> **Nota:** Los usuarios también pueden editar esta información en la pantalla de ingreso de Datos de envío (consulte [Datos de envío](04-supply-planning-module-program-data.md#shipment-data)).

2. **Ver el libro mayor de lotes:** Haga clic en la celda <u>Cantidad vencida</u>. QAT abrirá automáticamente una pantalla emergente a continuación con el libro mayor de lotes, que muestra la vida útil de un lote mes a mes desde la recepción del envío hasta su vencimiento.

![P2247#yIS1](/img/media/image190.png)

> **Nota:** a menos que el usuario etiquete un lote con entradas de ajuste o consumo real específicas (consulte “Agregar/actualizar detalles del lote” en [Datos de consumo](04-supply-planning-module-program-data.md#consumption-data) y [Datos de inventario](04-supply-planning-module-program-data.md#inventory-data)), QAT establecerá de manera predeterminada que las cantidades de lote mensuales se coloquen en la columna “Asignación automática” en el Libro mayor de lotes.

## Planificación de escenarios

QAT proporciona a los usuarios escenarios predefinidos para la planificación del suministro. Esta funcionalidad permitirá a los usuarios realizar cambios y visualizar sus datos de diferentes maneras, sin afectar necesariamente su plan de suministro actual. Los usuarios pueden aplicar uno o más escenarios a sus datos para ver cómo esos cambios afectan las proyecciones de acciones. Los escenarios seleccionados se pueden aplicar a un plan de suministro actual, creando una nueva versión.

Actualmente hay seis escenarios predefinidos disponibles para los usuarios; Se pueden programar más en QAT según la necesidad y los casos de uso. Los usuarios de QAT pueden solicitar nuevos escenarios generando un ticket. La necesidad de nuevos escenarios será gestionada de forma centralizada por el Realm Admin.

Escenarios disponibles:

- > **Aumentar el consumo previsto**: para un porcentaje y período definidos por el usuario. Esto aplicará un aumento porcentual a los valores pronosticados para cada mes del período seleccionado.

- > **Disminución del consumo previsto**: para un porcentaje y período definidos por el usuario. Esto aplicará una disminución porcentual a los valores pronosticados para cada mes del período seleccionado.

- > **Producto de entrada/salida prevista:** para un período definido por el usuario y valores de consumo previstos de inicio y finalización. QAT trazará una línea recta interpolando entre los valores inicial y final, y reemplazará los valores de consumo previstos actuales.

- > **Eliminar envíos sin financiamiento**: todos los envíos sin una fuente de financiamiento asignada (es decir, fuente de financiamiento = TBD) se eliminarán del plan de suministro y las proyecciones de existencias.

- > **Eliminar todos los envíos planificados**: todos los envíos con estado “planificado” se eliminarán del plan de suministro y de las proyecciones de stock. El usuario puede marcar una casilla para eliminar solo los "envíos planificados" que no cumplan con los plazos de entrega establecidos (es decir, la fecha de recepción esperada es anterior a lo que sería factible dados los plazos de entrega).

- > **Eliminar todos los envíos enviados que no estén dentro del plazo de entrega**: todos los envíos con estado “enviado” que no cumplan con los plazos de entrega establecidos serán eliminados del plan de suministro y proyecciones de stock.

- > **Eliminar todos los Envíos En Espera que no estén dentro del plazo de entrega**: todos los envíos con estado “en espera” que no cumplan con los plazos de entrega establecidos serán eliminados del plan de suministro y proyecciones de stock.

- > **Replanificar el plan de suministro:** para un período de tiempo definido por el usuario, QAT elimina los envíos planificados que no mantienen correctamente el stock entre los parámetros MIN/MAX y crea nuevos envíos planificados para cumplir con los parámetros de stock, utilizando la lógica de envío sugerida que se describe en <u>Sección 5.C2</u> <u>Creación de un nuevo envío</u>.

Para acceder a estos escenarios:

1. Vaya a Planificación de suministros y haga clic en "Planificación de escenarios".

2. Seleccione un escenario predefinido en el menú desplegable y edite los campos obligatorios.

3. Haga clic en Agregar para ver los cambios.

![P2270#yIS1](/img/media/image191.png)

Figura 113 Pantalla de planificación de escenarios

4. El escenario se mostrará en la "Lista de escenarios".

![P2274#yIS1](/img/media/image192.png)

Figura 114: Lista de escenarios de planificación de escenarios

5. Si el usuario desea aplicar el escenario a su plan de suministro, puede hacer clic en el botón “Enviar”. El nuevo plan de suministro se almacenará en la computadora de ese usuario y el usuario podrá cargarlo en el servidor como una nueva versión a través de la función Cargar.

6. Si el usuario no desea aplicar el escenario a su plan de suministro actual, puede hacer clic en el botón “Cancelar” o en el botón “Reiniciar” y los cambios no tendrán efecto.

## Informe del plan de suministro

El propósito del informe del plan de suministro es permitir al usuario evaluar rápidamente el estado de existencias de uno o más programas y/o unidades de planificación seleccionados, comparando gráficamente las proyecciones de existencias con niveles dinámicos de inventario mínimo y máximo y poder ver todo el consumo (tanto real como previsto), inventario y detalles de envío en un solo lugar. El informe proporciona una representación gráfica del plan de suministro, así como una vista tabular. El informe se puede exportar en formato PDF y/o CSV.

- **Accesible a:** Administradores de dominio, administradores de programas, usuarios de programas y visor de informes

- **Navegación:** Planificación de suministros  Informe del plan de suministros

**Los usuarios pueden utilizar los diversos parámetros desplegables en la parte superior de la pantalla para generar diferentes vistas del Informe del plan de suministro. Cada vista del informe generado tendrá una representación gráfica y un equivalente tabular de los datos. Hay tres vistas principales del Informe del Plan de Suministros:**

1. **Vista de programa único**
    1. **Programa único**

    2. **Unidad de planificación única (PU) o Unidad de informes alternativa única (ARU)**

    3. **Envíos desglosados por estado (es decir, planificación, envío, recepción, etc.)**

![A graph with blue and red lines Description automatically generated](/img/media/image193.png)

Figura 115: Informe del plan de suministro: vista de programa único, gráfico

![A screenshot of a computer Description automatically generated](/img/media/image194.png)

Figura 116: Informe del plan de suministro: vista de programa único, datos tabulares

2. **Vista multiprograma**
    1. **Múltiples programas**

    2. **PU individual o ARU**

    3. **Envíos desglosados por programa (es decir, FASPonia Malaria MOH y FASPonia Malaria Social Marketing)**

    4. **Notas: QAT puede agregar los datos de planificación de suministro entre múltiples programas si comparten el <u>same</u> PU/ARU. Esto podría ser útil si un país tiene múltiples programas paralelos que monitorean los mismos productos y le gustaría ver una visión agregada o nacional del estado de las existencias a lo largo del tiempo.**

![A graph with blue and red lines Description automatically generated](/img/media/image195.png)

Figura 117: Informe del plan de suministro: vista multiprograma

![A screenshot of a computer Description automatically generated](/img/media/image196.png)

Figura 118: Informe del plan de suministro: vista multiprograma/UE, datos tabulares

3. **Vista de Unidad de Equivalencia (UE)**
    1. **Programas únicos o múltiples**

    2. **Varias PU _(Las ARU no se pueden usar con EU)_**

    3. **Envíos desagregados por programa, PU o programa-PU**

    4. **Notas: QAT se puede agregar entre PU que son diferentes (diferentes tamaños de envase, tasas de uso, etc.), pero relacionadas mediante el uso de una UE (consulte [Unidades de equivalencia](#equivalencia-unidades) para obtener más información) y un factor de conversión correspondiente. Esto podría ser útil para países o espectadores globales que deseen ver conceptos como tratamientos contra la malaria, años de protección para parejas (CYP), meses de pacientes con ARV, etc. en conjunto.**

![A graph with colorful lines and numbers Description automatically generated with medium confidence](/img/media/image197.png)

Figura 119: Informe del plan de suministro: Vista de unidad de equivalencia

**Nota:**

1. > **El informe utiliza la configuración de la Unidad de planificación establecida por el administrador del programa para AMC, vida útil, MIN, intervalo de reorden y MAX**

2. > La columna Cantidad de envío es la suma de todos los envíos que tienen una fecha de recepción en el mismo mes para esa unidad de planificación.

3. > La columna "Cantidad de envío | Fuente de financiamiento | Estado del envío | Agente de adquisiciones | RO - Número de línea principal | Número de pedido - Número de línea principal" permite al usuario ver los envíos desagregados que tienen fecha de recepción en el mismo mes, incluidos detalles de cantidad, agente de adquisiciones, estado, fuente de financiamiento y número de pedido asignado a ese pedido.

4. > La columna "Consumo de consenso" solo aparece si un usuario elige varios programas para la agregación.

5. > Las exportaciones en PDF y CSV tienen múltiples opciones, similares a los menús desplegables de informes, lo que permite exportaciones de programas agregados, múltiples planes de suministro de un solo producto o productos agregados (a través de UE).

#