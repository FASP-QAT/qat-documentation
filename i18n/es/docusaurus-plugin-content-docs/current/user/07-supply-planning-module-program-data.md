---
id: supply-planning-module-program-data
title: "Módulo de planificación de suministros: datos del programa"
sidebar_label: "Módulo de planificación de suministros: datos del programa"
sidebar_position: 7
---
# Módulo de planificación de suministros: datos del programa

En QAT, un **Programa** es la unidad principal de planificación de suministros, que normalmente corresponde al área técnica de un país (por ejemplo, malaria, VIH). Los programas se rigen por datos maestros a nivel de dominio, lo que garantiza la coherencia en todo el sistema.

La gestión de datos a nivel del programa está a cargo principalmente de los **Administradores del programa** y los **Usuarios del programa**. Para obtener más detalles sobre los roles, consulte el [Anexo 3: Matriz de roles de usuario] (15-annex-3-user-role-matrix.md).

### Categorías de datos

| Categoría | Tipo de datos | Ejemplos |
| :--- | :--- | :--- |
| **Datos de referencia** | Información del programa | Plazos de entrega, flete %, responsables de programa. |
| | Información del producto | Unidades de planificación, intervalos de reorden, stock mínimo/máximo. |
| | Presupuesto | Fuentes de financiamiento, montos presupuestarios, fechas de vigencia. |
| **Datos transaccionales**| Consumo | Consumo real y previsto. |
| | Inventario | Conteos y ajustes de stock (daños, vencimientos). |
| | Envíos | Cantidades, fechas de entrega, agentes de adquisiciones. |

*Tabla 1: Jerarquía de datos del programa*

## Datos de fondo

> [!CONSEJO]
> Los datos de antecedentes deben actualizarse mientras esté en línea. Realice una **Sincronización de datos maestros** después de las actualizaciones para garantizar que los cambios se reflejen en toda la aplicación.

### Información del programa
Los administradores del programa pueden definir parámetros generales como administradores de programas, plazos de entrega y porcentajes de flete predeterminados.

**Para actualizar la información del programa:**
1. Vaya a **Administración de programas** > **Actualizar información del programa**.
2. Seleccione el programa de destino.
3. Modifique los campos según sea necesario y haga clic en **Enviar**.
4. (Opcional) Agregar o eliminar agentes de adquisiciones y fuentes de financiamiento de las listas específicas del programa.

![Update Program Info Interface](/img/media/image113.png)
*Figura 1: Gestión de la información del programa*

### Unidades de planificación
Las unidades de planificación son los productos específicos utilizados para el seguimiento de adquisiciones e inventario. Si bien el catálogo maestro se administra a nivel de dominio, los administradores de programas administran qué unidades están activas dentro de sus programas específicos.

**Parámetros clave:**
- **Planificar por:** Elija "MOS" (Meses de existencias) para artículos de gran volumen o "Cantidad" para artículos de bajo volumen/emergencia.
- **Intervalo de reorden:** Frecuencia de envíos (en meses).
- **Meses mínimos de stock (MOS):** El nivel de stock de seguridad requerido para evitar desabastecimientos.
- **Vida útil:** Meses promedio desde su recepción hasta su vencimiento.
- **Umbral de error de pronóstico:** Se utiliza para señalar grandes discrepancias en los informes de consumo.

**Para gestionar unidades de planificación:**
1. Vaya a **Gestión de programas** > **Actualizar unidades de planificación**.
2. Seleccione su programa.
3. **Para editar:** Haga doble clic en cualquier celda (por ejemplo, Min MOS, Vida útil) y haga clic en **Enviar**.
4. **Para agregar:** Haga clic en **Agregar fila**, busque la unidad de planificación por nombre, complete los parámetros y haga clic en **Enviar**.

> [!NOTA]
> Si falta una unidad de planificación en el catálogo, envíe un ticket a través del [QAT Helpdesk](05-getting-started.md#qat-helpdesk-and-tickets).

### Información específica del agente de adquisiciones/programa
Los usuarios pueden anular los plazos de entrega, los costos de flete y los precios unitarios predeterminados para agentes de adquisiciones y unidades de planificación específicos.

**Funciones y reglas clave:**
- **Priorización:** La configuración específica del agente/unidad anula la configuración del programa, que anula los valores predeterminados a nivel de dominio.
- **Restricciones:** Solo se permite una fila por combinación de programa/unidad/agente.
- **Campos obligatorios:** Programa, Unidad de planificación y Agente de adquisiciones deben agregar una fila.

**Para agregar o editar información específica:**
1. Vaya a **Administración del programa** > **Información del programa/agente de adquisiciones**.
2. Seleccione el programa y la unidad de planificación.
3. Complete los plazos de entrega, el porcentaje de flete o los precios unitarios específicos.
4. Haga clic en **Enviar** y realice una **Sincronización de datos maestros**.

![Procurement Agent Info Interface](/img/media/image117.png)
*Figura 2: Configuración específica del agente de adquisiciones*

### Unidades de informes alternativas (ARU)
Una ARU permite la entrada de datos en unidades diferentes a la unidad de planificación estándar (por ejemplo, piezas frente a paquetes).

**Reglas:**
- **Factor de conversión:** Debe definirse para convertir ARU en unidad de planificación (por ejemplo, multiplicar por 10).
- **Automatización:** QAT crea automáticamente una ARU 1:1 para cada unidad de planificación agregada.

**Para administrar ARU:**
1. Vaya a **Gestión del programa** > **Unidad de informes alternativa**.
2. Seleccione el programa.
3. Haga clic en **Agregar fila** para crear una nueva ARU, defina el factor de conversión y haga clic en **Enviar**.

![ARU Interface](/img/media/image118.png)
*Figura 3: Unidades de informes alternativas*

### Plazos de entrega
Los plazos de entrega rastrean la progresión del envío en seis estados. El sistema prioriza los tiempos de entrega de la siguiente manera: **Específico del programa/agente** > **Valores predeterminados del programa** > **Valores predeterminados del ámbito**.

#### Definiciones de plazos de entrega

| Etapa | Definición | Nivel de configuración |
| :--- | :--- | :--- |
| **Previsto para enviar** | Identificar la necesidad de realizar el pedido. | Programa |
| **Enviado para aprobación** | Realización de pedidos hasta su aprobación. | Programa (predeterminado)/Reino (Agente) |
| **Aprobado para envío** | Aprobación para despacho. | Programa (predeterminado)/Reino (Agente) |
| **Enviado a llegada** | Tiempo de tránsito (Aéreo, Marítimo o Carretera). | Programa |
| **Llegó a Recibido** | Llegada a puerto a recepción de almacén. | Programa |

**Para actualizar los plazos de entrega:**
1. Vaya a **Administración de programas** > **Actualizar información del programa**.
2. Desplácese hasta los campos de plazo de entrega e ingrese valores en meses.
3. Haga clic en **Actualizar**.

Para adquisiciones locales, todo el tiempo de entrega (planificado hasta recibido) se administra por unidad de planificación en **Actualizar unidades de planificación**.

![Shipment Status Flow](/img/media/image120.png)
*Figura 4: Ciclo de vida del plazo de entrega del envío*

### Presupuestos
Los presupuestos rastrean la asignación de capital para la compra de productos básicos. Un presupuesto puede vincularse a uno o varios programas.

- **Alerta de estado:** Los presupuestos resaltados en **Rojo** indican que la fecha de finalización pasó o que el monto utilizado excede el presupuesto.
- **Reglas:** Los envíos etiquetados a un presupuesto deben desetiquetarse antes de desvincular el programa de ese presupuesto.

**Para agregar un presupuesto:**
1. Vaya a **Gestión de programas** > **Presupuesto**.
2. Haga clic en el icono **+** (Agregar).
3. Ingrese la fuente de financiamiento, el nombre del presupuesto y los montos.
4. Haga clic en **Enviar**.

**Para actualizar un presupuesto:**
1. Seleccione el presupuesto de la lista.
2. Modifique los detalles en la pantalla **Actualizar presupuesto** y haga clic en **Enviar**.

![Budget Management Screen](/img/media/image123.png)
*Figura 5: Resumen del presupuesto*

## Datos del plan de suministro transaccional
Los datos transaccionales incluyen los "3 grandes": **Consumo**, **Inventario** y **Envíos**.

### Datos de consumo
El consumo se refiere al stock dispensado a los clientes.
- **Consumo real:** Cantidad reportada dispensada.
- **Consumo previsto:** Cantidad prevista acordada por el programa.

**Para agregar/actualizar consumo:**
1. Navegue hasta **Datos del plan de suministro** > **Datos de consumo**.
2. Seleccione el período del informe y la unidad de planificación.
3. **Agregar:** Haga clic en **+ Agregar fila** o haga clic derecho en una celda y seleccione **Agregar nuevo consumo**.
4. **Actualizar:** Haga doble clic en una celda para editarla. 

> [!ADVERTENCIA]
> Los datos históricos (hace más de 9 meses) son de solo lectura y no se pueden editar.

**Detalles del lote (solo consumo real):**
1. Haga clic derecho en una fila de "Consumo real" y seleccione **Mostrar información de lote**.
2. Edite números de lote o cantidades. La cantidad total del lote debe coincidir exactamente con la cantidad total de consumo.

![Consumption Data Entry](/img/media/image125.png)
*Figura 6: Gestión del Consumo*

### Datos de inventario
Los datos de inventario incluyen **Recuentos de existencias** y **Ajustes** (por ejemplo, daños, transferencias).

- **Recuento de existencias:** Inventario físico en una fecha específica.
- **Ajustes:** Modificaciones al inventario utilizable (se requieren notas para todos los ajustes).

**Para agregar/actualizar inventario:**
1. Navegue hasta **Datos del plan de suministro** > **Datos de inventario**.
2. Seleccione el **Tipo de inventario** (Inventario o Ajuste).
3. **Agregar:** Haga clic en **+ Agregar fila** e ingrese los detalles.
4. **Actualizar:** Haga doble clic en las celdas para editar. 

> [!IMPORTANTE]
> Al igual que los registros de consumo, inventario y ajuste de más de 9 meses en el pasado, no se pueden editar.

**Detalles del lote:**
- **Ajustes:** Haga clic derecho en una fila y seleccione **Mostrar información de lote**. QAT utiliza la lógica del "Mejor escenario" para manejar cantidades de lotes si no se proporciona explícitamente.
- **Inventario:** Los detalles de los lotes se administran dentro de la pantalla Planificación de suministros (consulte la [Sección 5.E](08-supply-planning-module-supply-planning.md#supply-planning-project-expired-stock-and-batch-information)).

![Inventory Data Entry](/img/media/image127.png)
*Figura 7: Gestión de inventario*

### Datos de envío
Los envíos se rastrean desde la planificación hasta la recepción.

**Para agregar/actualizar envíos:**
1. Navegue hasta **Datos del plan de suministro** > **Datos de envío**.
2. Seleccione filtros y haga clic en **+ Agregar fila**.
3. Complete los campos obligatorios (resaltados en **Amarillo**).
4. **Calculadora de pedidos estratégicos:** Para productos estratégicos, haga doble clic en la celda **Cantidad de pedido** para usar la calculadora para MOQ o redondeo basado en paletas.
5. **Detalles del lote:** Haga clic derecho en un envío y seleccione **Mostrar información del lote** para administrar las fechas de vencimiento y las cantidades.

**Reglas clave de envío:**
- **Envíos de emergencia:** Las filas en **Rojo** indican que la fecha de recepción está dentro del plazo de entrega.
- **Costo de flete:** Calculado automáticamente según `Cost * Freight %` a menos que se anule manualmente.
- **Fechas de envío:** Haga clic derecho en un envío y seleccione **Mostrar fechas de envío** para comparar los hitos estimados con los reales.

![Shipment Management](/img/media/image131.png)
*Figura 8: Calculadora de órdenes estratégicas*

### Vinculación de envíos de ERP
La vinculación de ERP permite a los planificadores sincronizar los envíos QAT con el sistema ERP de un agente de adquisiciones (por ejemplo, ARTMIS de GHSC-PSM). Esto automatiza las actualizaciones de estado, costos y fechas.

**Reglas para vincular:**
- **Estado:** Los envíos QAT no deben estar "Planificados", "Cancelados" ni "Sugeridos".
- **Reciente:** Los envíos "recibidos" deben realizarse dentro de los últimos 6 meses.
- **Agente:** Actualmente solo se admite para **GHSC-PSM**.
- **Modo:** Solo editable en versiones locales descargadas.

#### Vinculación de pantallas
1. **No vinculado (QAT):** Vincula los envíos QAT existentes a los pedidos de ERP. Seleccione un envío, busque el pedido de ERP y defina el factor de conversión.
2. **No vinculado (ERP):** Vincula los pedidos de ERP a QAT. Puede seleccionar un envío QAT existente o crear uno nuevo directamente desde esta pantalla.
3. **Vinculado:** Vea todos los envíos actualmente sincronizados, actualice los factores de conversión o desvincule los pedidos.

**Para vincular un envío de ERP:**
1. Navegue hasta **Datos del plan de suministro** > **Vincular envíos de ERP**.
2. Seleccione la pestaña **No vinculado (QAT)** o **No vinculado (ERP)**.
3. Elija el programa/unidad de planificación.
4. Haga clic en una fila para abrir la ventana de búsqueda/enlace.
5. Proporcione la **Unidad de informes alternativa (ARU)** para establecer el factor de conversión.
6. Haga clic en **Enlace de envío**.

![ERP Linking Screens](/img/media/image133.png)
*Figura 9: Descripción general de la vinculación de ERP*

#### Notificaciones ERP
Los planificadores recibirán alertas en la pantalla **Notificaciones de envío de ERP** si hay discrepancias entre QAT y el sistema ERP (por ejemplo, pedidos cancelados, cambios de cantidad o actualizaciones de SKU).

1. Seleccione el botón de opción en la parte superior con la etiqueta "Vinculado".

2. Seleccione el programa y las unidades de planificación para las que desea ver la lista de envíos vinculados. Una vez seleccionado, aparecerá una lista de envíos. La información de estos envíos se extrae del ERP.

3. Para realizar cualquiera de las actualizaciones enumeradas en el paso 2, haga clic izquierdo en un solo envío.
    1. Para editar ARU y/o notas, haga doble clic en la celda y escriba o seleccione en el menú desplegable.

    2. Para desvincular un pedido de ERP, desmarque la casilla en la columna "¿Vincular?".

    3. Para agregar un pedido de ERP, marque la casilla de ese pedido en la columna "¿Enlace?". El usuario puede borrar los menús desplegables de búsqueda en la sección central para buscar una unidad de planificación diferente o un número de pedido y los pedidos vinculados originalmente permanecerán vinculados.

4. Los usuarios también podrán ver los detalles del historial de pedidos desde el ERP. Para hacerlo, desde la pantalla original "Vinculado", haga clic derecho en un solo envío y haga clic en "Ver historial de pedidos de ERP". Aparecerá una ventana emergente con la etiqueta "Historial de pedidos de ERP". Esta pantalla mostrará cualquier detalle que haya cambiado con el tiempo en el pedido de ERP. Cada fila indica que una o más columnas han cambiado. La columna más alejada a la derecha, denominada "Datos recibidos el", es cuando QAT recibió el registro.
    1. Para ver los detalles del lote, haga clic en el icono ![](/img/media/image137.png).

    2. **Nota:** Ciertos campos del ERP no se capturan en esta pantalla, por lo que puede haber algunos casos en los que 1 o más filas tengan los mismos detalles. Esto significa que se cambió una columna en el backend.

> **Una vez que haya vinculado los envíos QAT con los pedidos de ERP, los datos se reflejarán en su plan de suministro sin tener que sincronizar los datos maestros.** Los datos de ERP recién vinculados se reflejarán en los informes locales, en la pantalla de planificación de suministro y en la pantalla de ingreso de datos de envío. El usuario **necesita** cargar una versión en el servidor para que otros usuarios puedan ver estos cambios.
>
> Para ver los envíos vinculados a ERP en la pantalla de ingreso de datos de envío, el usuario debe seleccionar "Envíos vinculados a ERP" en el menú desplegable Tipo de envío. El usuario puede mostrar solo esta opción o combinarla con los envíos manuales para mostrar todos los envíos. Los envíos vinculados al ERP aparecerán atenuados para indicar que no son editables.

![P1723#yIS1](/img/media/image138.png)

Figura 88: Ver envíos de ERP en Entrada de datos

En la pantalla de planificación de suministro, los envíos vinculados a ERP tendrán un ícono de vínculo en la parte superior izquierda de la celda. El usuario puede hacer clic en un envío específico para ver los detalles, pero esas celdas también aparecerán atenuadas para indicar que no son editables. Sin embargo, el usuario aún puede hacer clic derecho en los detalles del envío para ver las fechas de envío y la información del lote.

![P1727#yIS1](/img/media/image139.png)

Figura 89: Ver envíos de ERP en el plan de suministro

**Notificaciones de envío de ERP**

El propósito de la pantalla "Notificaciones de envío de ERP" es alertar a los planificadores de suministro sobre cualquier cambio clave realizado en los envíos vinculados a ERP, como la cancelación de un pedido o el cambio de SKU de un producto. Se alentará a los planificadores de suministros a "abordar" cada una de las notificaciones para confirmar que están al tanto del cambio y las implicaciones que tiene en el plan de suministro. Para cambios de producto, el usuario volverá a confirmar el factor de conversión, cambie o no.

![](/img/media/image140.png)

En la parte superior de la pantalla hay un icono. Este icono mostrará un número rojo que indica cuántas notificaciones sin dirección hay en la pantalla de notificaciones de envío del ERP. Si no hay ningún número rojo, significa que no hay ninguno.

Para acceder a la pantalla "Notificaciones de envío de ERP", haga clic en el ícono del camión en la parte superior de QAT o seleccione "Notificaciones de envío de ERP" en "Datos del plan de suministro" en el menú de la barra lateral izquierda.

Para ver las notificaciones, el usuario deberá seleccionar entre los 3 menús desplegables (Programa, Unidad de planificación, Dirigida). El usuario también tiene la opción de seleccionar directamente desde la tabla encima de los menús desplegables. Cuando un usuario hace clic izquierdo en una fila de la tabla, los 3 menús desplegables se completarán atómicamente según el programa que el usuario seleccionó. El menú desplegable de unidades de planificación se completará con todas las unidades de planificación y el menú desplegable dirigido seleccionará "No abordado".

![P1739#yIS1](/img/media/image141.png)

Figura 90: Filtrado de notificaciones de envío de ERP

Para enviar una notificación, el usuario debe marcar la casilla en la columna "¿Abordado?" y luego presionar el botón "Enviar". Si el usuario se dirige a una notificación de cambio de producto de ERP, primero debe ingresar el factor de conversión. El campo del factor de conversión no se puede editar hasta que se marca la casilla con la dirección.

Al igual que en la pantalla "Vinculado", el usuario puede ver el historial de pedidos de ERP. Para hacerlo, haga clic derecho en la fila de notificación y haga clic en "Ver historial de pedidos de ERP". Consulte la sección Pantalla vinculada para obtener más información.

## Importación de datos para la planificación de suministros

### Plantillas de importación de datos del plan de suministro en Excel

Los datos de consumo, inventario y envío se pueden ingresar a través de las pantallas de ingreso de datos de QAT, a través de la pantalla de Planificación de suministro o mediante Quantimed Import (solo consumo pronosticado). QAT también brinda a los usuarios la posibilidad de ingresar estos datos directamente desde Microsoft Excel. Este método de entrada de datos está destinado a entradas masivas que contienen una gran cantidad de datos. Los pasos a continuación mostrarán cómo ingresar datos de Excel en QAT:

1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en el tipo de datos que desea ingresar (por ejemplo, "Datos de consumo"). ![P1748L76#yIS1](/img/media/image142.png)

2. ![](/img/media/image143.png)Once en la pantalla de ingreso de datos, vaya a la esquina superior derecha y haga clic en "Descargar plantilla".

3. Se descargará un archivo de Microsoft Excel directamente a la carpeta "**Descargas"** de su computadora.

4. Vaya a la carpeta Descargas de su computadora y abra el archivo Excel. El formato del nombre debe ser **ConsumptionDataEntryTemplate.xlsx** y la primera parte depende del tipo de datos que ingresa.
    1. _<u>Eada uno de los cuatro tipos de datos (Inventario, Ajuste, Consumo y Envío) tiene su propia plantilla de Excel por lo que es importante que haga clic en “Descargar plantilla” desde la pantalla correspondiente. Para inventario y ajuste, asegúrese de que el menú desplegable haya seleccionado el tipo de datos para el que desea la plantilla.</u>_

5. Una vez en la plantilla de Excel, haga clic en "Habilitar edición" en la parte superior si se le solicita.

![P1755#yIS1](/img/media/image144.png)

Figura 91: Habilitar edición

6. Ingrese datos para todos los campos obligatorios.
    1. Cualquier celda resaltada en gris (por ejemplo, Factor de conversión) no es editable y no es necesario completarla.

    2. Ciertos campos (por ejemplo, Fuente de datos) tendrán menús desplegables completados previamente desde QAT. Por lo tanto, es importante descargar una nueva plantilla si ha pasado un tiempo desde la última vez que el usuario la utilizó.

    3. Ciertos campos tienen validaciones de datos integradas (por ejemplo, no se pueden ingresar letras en las celdas de costos). Si no se cumple la validación, aparecerá un mensaje de error emergente.

![P1762#yIS1](/img/media/image145.png)

Figura 92: Plantilla de Excel

7. Una vez que se hayan ingresado todos los datos en la plantilla de Excel, vuelva a abrir la ventana QAT.

8. Vaya a la pantalla de Entrada de Datos (Consumo, Inventario, Ajuste, Envío).

9. Haga clic en el botón azul "+Agregar fila" en la parte inferior.
    1. **Nota:** Solo necesita agregar 1 fila en QAT independientemente de cuántas filas haya en la plantilla de Excel.

10. En la plantilla de Excel, seleccione todos los datos y presione Ctrl + C en su teclado para copiar los datos.

11. Vaya a la fila agregada en QAT, haga clic izquierdo en la celda más a la izquierda de esa fila y presione Ctrl + V en su teclado para pegar los datos.

12. QAT creará automáticamente nuevas filas para los datos que se importan desde Excel.

13. Haga clic en "Enviar".

### Importación de pronóstico cuantificado

![](/img/media/image146.png)Quantimed es un software diseñado para facilitar el proceso de determinación de las cantidades de medicamentos e insumos médicos necesarios para un programa de salud. El resultado de Quantimed son los datos de consumo previstos de los programas de salud. Esos datos de consumo previstos pueden ser un aporte clave para los planes de suministro de los usuarios de QAT. QAT permite a los usuarios importar pronósticos Quantimed a QAT para incluirlos en su plan de suministro.

**Paso 1: Importar datos Quantimed a QAT**

1. Vaya a "Datos del plan de suministro" en el menú de la barra lateral.

2. Seleccionó "Importación cuantificada"

3. **Importar archivo de datos cuantificados**
    1. Elija el archivo de pronóstico Quantimed .xml de su sistema informático local.

    2. Seleccione el programa QAT al que desea importar los datos de Quantimed.

    3. Haga clic en "Importar".

![P1783#yIS1](/img/media/image147.png)

Figura 93: Importación de archivos Quantimed

**Paso 2: Unidades de planificación del mapa**

1. > Para asignar un producto Quantimed a una unidad de planificación QAT, seleccione la unidad de planificación QAT usando el menú desplegable.

2. > Si no desea importar un producto Quantimed específico, seleccione la opción "No importar" para esa fila.

3. > Si no hay una unidad de planificación QAT asociada con el producto Quantimed, el menú desplegable mostrará "Unidad de planificación no encontrada". Deberá seleccionar manualmente una unidad de planificación del menú desplegable o volver al programa y agregar una unidad de planificación para ese producto Quantimed antes de continuar. No puede hacer clic en "Siguiente", una o más de las celdas dicen "Unidad de planificación no encontrada".
    1. > **Nota**: para minimizar los casos en los que no se encuentra una unidad de planificación, se recomienda que los usuarios de Quantimed seleccionen productos del archivo .xml del catálogo de productos GHSC-PSM.

4. > Una vez que cada fila tenga una unidad de planificación seleccionada o diga "No importar", haga clic en "Siguiente" en la parte inferior de la pantalla.

![P1794#yIS1](/img/media/image148.png)

Figura 94: Unidades de planificación del mapa

**Paso 3: Región**

1. > En este paso, seleccione la región a la que desea importar los datos de consumo previsto. Si solo hay una región, debe seleccionar esa región para continuar.

2. > Luego, ingrese el porcentaje de esos datos de consumo que desea importar a QAT. Este porcentaje deberá oscilar entre 0-100% y se aplicará a todas las unidades de planificación previamente seleccionadas.

3. > Haga clic en "Siguiente".

**Paso 4: Mes de Consumo**

1. > Seleccione el rango de fechas para los datos de Quantimed que desea importar a QAT.
    1. > El período que selecciones es el período de datos que podrás importar y se aplicará a todas las unidades de planificación previamente seleccionadas.

2. > Haga clic en "Siguiente".

![P1806#yIS1](/img/media/image149.png)

Figura 95: Pantalla Mes de Consumo

**Paso 5: Importar datos**

1. > El último paso es confirmar los datos que se importarán de Quantimed a QAT según lo que se ingresó en los pasos 1 a 4.
    1. > “Consumo previsto de Quantimed” es la cantidad que se extrae de Quantimed para el producto asociado y el mes-año.

    2. > “Consumo previsto cuantificado convertido” es la cantidad que se incorporará al QAT para el producto asociado y el mes-año después de aplicar el porcentaje de importación y el factor de conversión.

    3. > “Consumo previsto QAT actual” es la cantidad de consumo previsto actualmente en QAT para esa unidad de planificación y mes-año. Una vez que importe los datos de Quantimed, esta cantidad se sobrescribirá con la cantidad del “Consumo previsto de Quantimed convertido”.

2. > Esta pantalla mostrará todos los datos que se importarán a QAT. Si no desea importar ciertos registros, haga clic en la casilla de verificación en la columna "¿Importar?" en el extremo derecho. Esto evitará que QAT importe los datos de Quantimed y mantendrá el consumo previsto de QAT actual para esa unidad de planificación y mes-año.

3. > Haga clic en "Enviar" para importar los datos.

![P1816#yIS1](/img/media/image150.png)

Figura 96: Pantalla Confirmar importación de datos

### Importación de pronóstico QAT

### Importación de pronósticos a planes de suministro
Los planificadores pueden importar pronósticos creados por QAT a sus programas de planes de suministro para impulsar las necesidades de adquisiciones.

**Requisitos previos:**
- El pronóstico debe cargarse como versión **Final**.
- Se debe seleccionar una previsión para cada unidad de planificación.

**Para importar un pronóstico:**
1. Navegue hasta **Datos del plan de suministro** > **Importar pronóstico al plan de suministro**.
2. Seleccione el **Programa de pronóstico de origen** y el **Programa de plan de suministro de destino** (solo versiones locales).
3. Seleccione el rango de fechas para la importación.
4. **Asignar unidades de planificación:** Asigna unidades de planificación de pronóstico a unidades de plan de suministro. Establezca un factor de conversión si el embalaje difiere. Utilice "No importar" para las unidades que desee excluir.
5. **Asignar regiones:** Defina el porcentaje del pronóstico que se asignará a cada región del plan de suministro (por ejemplo, 100% nacional a nacional o dividir 50/50 entre dos regiones).

![Forecast Import Screen](/img/media/image151.png)
*Figura 10: Asignación de datos de pronóstico a planes de suministro*

#### Redondeo y residuos
Dado que la planificación del suministro requiere números enteros, QAT redondea el consumo previsto al número entero más cercano. Para evitar la pérdida de datos, los "residuales" (restos) se trasladan y se suman a lo largo de los meses. Una vez que el residual acumulado alcanza 1,0, se suma a la cantidad importada del mes en curso.

**Ejemplo:**
| Mes | Pronóstico convertido | Total acumulado | Importación redondeada | Residual |
| :--- | :---: | :---: | :---: | :---: |
| enero | 0,25 | 0,25 | 0 | 0,25 |
| febrero | 0,25 | 0,50 | 0 | 0,50 |
| marzo | 0,25 | 0,75 | 0 | 0,75 |
| abril | 0,25 | 1,00 | 1 | 0,00 |

*Tabla 2: Demostración de la lógica de redondeo residual*

6. Revise la lista de conversiones final y haga clic en **Importar** para finalizar.