---
id: supply-planning-module-program-data
title: "Módulo de planificación de suministros: datos del programa"
sidebar_label: "Módulo de planificación de suministros: datos del programa"
sidebar_position: 4
---
# Módulo de planificación de suministros: datos del programa

Como se definió anteriormente en [Conceptos y términos importantes de QAT] (#conceptos-y-términos-de-qat-importantes), un programa tiene una estructura similar a una base de datos de planes de suministro de PipeLine. Cada programa consta de un solo país, una o más áreas técnicas, una región (nivel nacional, nivel central, etc.) y una organización (MINSA, solo PEPFAR, solo PMI). Cada programa dentro de un ámbito se rige por los mismos datos maestros estandarizados, como catálogo de productos, agentes de adquisiciones, fuentes de financiamiento, fuentes de datos, etc.

La gestión de datos del programa se encuentra en el tercer nivel de la jerarquía del sistema QAT y generalmente la realizan usuarios con los roles **administrador del programa y usuario del programa** (para obtener más información sobre los roles de usuario, consulte el [Anexo 3: Matriz de roles de usuario](12-annex-3-user-role-matrix.md#annex-3-user-role-matrix)). Los datos maestros a nivel de programa administrados por estos usuarios incluyen presupuestos y unidades de informes alternativas.

Un usuario puede "Descargar" o "Eliminar" programas desde su máquina local. Los programas también se pueden "importar" a la máquina local o "exportar" desde la máquina local para compartirlos con otros usuarios si hay problemas de conectividad.

Los administradores y usuarios de programas pueden manipular dos grandes categorías de datos dentro de sus programas: datos del programa y datos transaccionales (los “tres grandes”: consumo, inventario, envíos).

<table>
  <thead>
    <tr class="header">
      <th></th>
      <th>
        <strong>Categoría de datos</strong>
      </th>
      <th>
        <strong>Detalles</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>Datos de fondo</td>
      <td>
        <strong>Información del programa</strong>
      </td>
      <td>Gerente de programa, porcentaje de carga, plazos de entrega</td>
    </tr>
    <tr class="even">
      <td></td>
      <td>
        <strong>Información del producto</strong>
      </td>
      <td>Unidades de planificación: mínimo, intervalo de reorden, unidades de informes alternativas</td>
    </tr>
    <tr class="odd">
      <td></td>
      <td>
        <strong>Bpresupuesto</strong>
      </td>
      <td>Fuente de financiación, importes, fechas de inicio y finalización, etc. </td>
    </tr>
    <tr class="even">
      <td>
        <p>Datos transaccionales</p>
        <p>(“3 grandes”)</p>
        <p>para cada producto</p>
      </td>
      <td>
        <strong>Consumo</strong>
      </td>
      <td>
        <p>Consumo previsto</p>
        <p>Y consumo real, a medida que esté disponible</p>
      </td>
    </tr>
    <tr class="odd">
      <td></td>
      <td>
        <strong>Stock</strong>
      </td>
      <td>Inventario y recuentos. Ajustes</td>
    </tr>
    <tr class="even">
      <td></td>
      <td>
        <strong>Envíos</strong>
      </td>
      <td>
        <p>
          Cantidades, fecha de recepción, estado, agente de adquisiciones, financiador y cliente.
          presupuesto asociado
        </p>
        <p> (si está disponible) números de lote y número de lote. fechas de caducidad</p>
      </td>
    </tr>
  </tbody>
</table>

Tabla 7: Datos a nivel de programa

## Datos de fondo

Nota: Todos los datos de antecedentes deben actualizarse mientras el usuario está en línea. Se recomienda que los usuarios hagan clic en "sincronización de datos maestros" después de realizar actualizaciones de datos en segundo plano para que se reflejen en toda la herramienta.

### Información del programa

Los administradores de programas en QAT pueden definir los parámetros generales de sus programas, seleccionando de una lista de menús desplegables que contienen datos maestros a nivel de dominio para cada campo**.** Estos parámetros generales para el módulo de planificación de suministros incluyen el nombre del programa, el administrador del programa, los porcentajes de flete predeterminados para transporte aéreo, marítimo y por carretera, los plazos de entrega por estado de envío y las notas. Los parámetros generales para el módulo de pronóstico incluyen el nombre del programa, el administrador del programa y las notas. **Los usuarios del programa** podrán enumerar/ver todos los programas a los que tienen acceso, mientras que solo los **Administradores del programa** pueden actualizar cualquiera de los parámetros generales del programa.

**Actualizar información del programa:**

1. Haga clic en "Administración del programa" y luego seleccione "Actualizar información del programa".

2. Haga clic en el programa que necesita ser actualizado.
    1. Los administradores del programa pueden agregar o eliminar agentes de adquisiciones y fuentes de financiamiento que ya existen en QAT en su programa. Esto, a su vez, agregará/eliminará los agentes de adquisiciones en los campos desplegables en las pantallas [Entrada de datos de envío](#shipment-data). Si un usuario desea agregar un agente de adquisiciones a su programa que <u>not</u> exista en QAT, puede obtener un ticket con el sistema [QAT HelpDesk](02-getting-started.md#tickets-for-addingupdating-users-and-master-data).

![](/img/media/image113.png)

Figura 67: Información del programa de actualización – Módulo de planificación de suministros

![A screenshot of a computer Description automatically generated](/img/media/image114.png)

Figura 68: Actualizar información del programa – Módulo de pronóstico

3. Actualice los campos como desee y haga clic en "Enviar".

**\*Nota:** QAT solo permite que los administradores de nivel de reino o de aplicación actualicen los campos que están en gris en la pantalla Actualizar información del programa. Si un usuario requiere que estos campos se actualicen, puede obtener un ticket con el sistema [QAT HelpDesk](02-getting-started.md#tickets-for-addingupdating-users-and-master-data).\*

### Unidades de planificación

La unidad de planificación es el producto utilizado en QAT como base para planificar adquisiciones y mostrar consumo, envíos, inventario y ajustes. El nombre de una unidad de planificación suele incluir una descripción completa hasta el embalaje primario; por tanto, su nomenclatura sigue fielmente el tamaño del envase en el que se realiza la dispensación, es decir, un frasco de 30 comprimidos, un blister de 10x10 cápsulas, etc.

El catálogo de unidades de planificación QAT se considera datos maestros a nivel de dominio, lo que significa que cualquier adición, edición o resta de ese catálogo se administra a nivel de dominio y se aplica a todos los programas dentro de ese dominio. Cada programa debe tener al menos una unidad de planificación que los **Administradores de programas** puedan seleccionar del catálogo a nivel de dominio para **agregar a sus programas o desactivar** de sus programas. Los administradores del programa también pueden actualizar cualquier parámetro relacionado con una unidad de planificación en particular, incluida la frecuencia de reorden, los meses mínimos de existencias, el cálculo del consumo mensual promedio, el tiempo de entrega del agente de adquisiciones local, la vida útil y el precio. Las unidades de planificación se pueden desactivar del programa si ya no se utilizan, lo que permite a los administradores del programa conservar todos los datos heredados. Si la unidad de planificación no existe en el catálogo QAT, genere un ticket a través del servicio de asistencia técnica de QAT para que se pueda crear para todo el ámbito. Vea más sobre emisión de boletos en la sección [QAT Helpdesk and Tickets](02-getting-started.md#qat-helpdesk-and-tickets).

![](/img/media/image115.png)

Figura 69: Parámetros a actualizar por unidad de planificación.

**Parámetros de la unidad de planificación:**

- > **Factor de conversión (FU:PU):** Un campo no editable que proporciona información sobre el factor de conversión entre la UP elegida y su FU asociada

- > **Planificar por: elija entre “MOS” para aquellas unidades de planificación que se consumen en grandes cantidades o “Cantidad” para aquellas unidades de planificación que** se consumen en bajas cantidades, o para fines de emergencia con vencimientos elevados

- > **Intervalo de reorden (en meses): el** número de meses entre envíos**. Intervalo de reorden + MOS mínimo = MOS máximo**

- > **Meses mínimos de existencias (MOS): la cantidad mínima de inventario, en meses, que debe estar disponible para satisfacer la demanda y evitar desabastecimientos**

- > **Cantidad mínima: la cantidad mínima de inventario disponible que se determina que se necesita**

- > **El cálculo del consumo mensual promedio (AMC), que es la cantidad promedio que se usa un producto durante un período de tiempo seleccionado, tomará un promedio de los valores del administrador del programa para “Meses en el futuro (incluido el mes actual)” y “Meses en el pasado”**

<!-- finalizar lista -->

- **Plazo de entrega de adquisiciones locales: el plazo de entrega completo (“planificado hasta recibir”), en meses, para las unidades de planificación adquiridas localmente. Lo ideal sería que, en el caso de las adquisiciones locales, el plazo de entrega fuera mucho más corto que el de las adquisiciones internacionales.
  - > **Tiempo de entrega de distribución: Número de meses entre la recepción del envío y el producto a distribuir hasta el nivel más bajo. Se utiliza para envíos sugeridos antes de falta de existencias.**

  - > **Vida útil: número de meses desde la recepción del envío (estado = recibido) hasta su vencimiento. Esta es una cantidad promedio de meses para la unidad de planificación; para ingresar datos de lote exactos, incluidas las fechas de vencimiento, consulte [Planificación de suministro: información de lote y stock vencido del proyecto](#planificación-de-suministro-información-de-stock-y-lote-expirado-del-proyecto)**

  - > **Umbral de error de pronóstico (%): un valor utilizado en los informes de consumo de Error de pronóstico (mensual) y Error de pronóstico (por PU) como una demarcación de si un error de pronóstico se considera demasiado alto**

  - > **Precio de catálogo: precio medio de una única unidad de planificación, que se utilizará para calcular los costes de envío. El precio por programa y agente de adquisiciones se puede actualizar de manera más granular en [Información específica del programa/agente de adquisiciones](#programprocurement-agent-specific-information) o los precios de envío específicos se pueden actualizar en la pantalla [Ingreso de datos de envío](#shipment-data).**

  - > **Notas: un campo de texto libre para agregar información relevante de la unidad de planificación (es decir, cronogramas de incorporación/eliminación gradual, si la unidad de planificación son datos a nivel central/nacional, etc.). Estas notas están disponibles para ver en el informe del plan de suministro, en la pantalla Versión del plan de suministro y revisión de la planificación de suministro, en la pantalla de Planificación de suministro y en la pantalla de Planificación de escenario.**

**Actualizar unidades de planificación dentro de un programa:**

1. Asegúrese de estar trabajando en modo "en línea". Seleccione "Gestión de programas" y luego "Actualizar unidades de planificación"

2. Seleccione el programa para mostrar las unidades de planificación administradas actualmente.
    1. Si tiene la intención de actualizar o reactivar una unidad de planificación desactivada, elija "Inactivo" en el menú desplegable Estado de la unidad de planificación.

3. Haga doble clic en la celda (parámetro) que necesita actualización.

4. Haga clic en "Enviar" para guardar los cambios.

**Agregar unidades de planificación a un programa:**

1. Asegúrese de estar trabajando en modo "en línea". Seleccione “Gestión de programas” y luego “Actualizar unidades de planificación”.

2. Seleccione el programa para mostrar las unidades de planificación administradas actualmente.

3. Haga clic en el botón azul "Agregar fila" en la parte inferior derecha de la pantalla y aparecerá una nueva fila en la parte superior de la tabla.
    1. Alternativamente, haga clic derecho en cualquier fila de la tabla y seleccione "Insertar nueva fila antes" o "Insertar nueva fila después".

4. Comience escribiendo las primeras tres letras de la unidad de planificación que desea agregar.

5. Complete todas las celdas (parámetros) de esa fila.

6. Haga clic en "Enviar" para guardar los cambios.

> **Nota:** Si una unidad de planificación requerida no está disponible en el menú desplegable y, por lo tanto, en el catálogo QAT, genere un ticket a través del servicio de asistencia técnica de QAT para que se pueda crear para todo el ámbito. Vea más sobre emisión de boletos en la sección [QAT Helpdesk and Tickets](02-getting-started.md#qat-helpdesk-and-tickets).

### Información específica del agente de adquisiciones/programa

Los usuarios de QAT pueden gestionar detalles específicos (costos de flete, plazos de entrega, costos unitarios) para agentes de adquisiciones y unidades de planificación dentro de un plan de suministro. Los precios específicos de los agentes de adquisiciones del programa se pueden establecer para cada unidad de planificación en sus programas, además de los precios predeterminados (de catálogo) del programa o los precios del catálogo de agentes de adquisiciones a nivel de dominio. Por ejemplo, un usuario puede querer ingresar el precio del PNUD para las pruebas de diagnóstico rápido de malaria (mRDT) en el programa FASPonia-Malaria, si el catálogo del PNUD no está disponible a nivel de reino. Los usuarios también tienen la capacidad de designar porcentajes de flete, plazos de entrega (incluidos los plazos de entrega locales) y precios unitarios para unidades de planificación específicas, agentes de adquisiciones o una combinación de ambos.

**Características y reglas:**

- **Combinación de programa + agente de adquisiciones:** Si se crea una combinación de programa y agente de adquisiciones, la columna de precio no será editable si la unidad de planificación está configurada en "Todos", ya que el precio ya existe en una pantalla diferente.

- **Costos de flete, plazos de entrega y precios unitarios:** Al menos una de estas columnas debe tener un valor numérico al agregar o editar filas.

- **Campos obligatorios:** Solo se requieren las primeras tres columnas (Programa, Unidad de planificación y Agente de adquisiciones) para agregar una fila.

- **Restricciones:**
  - Sólo se permite una fila por combinación de programa/unidad de planificación/agente de adquisiciones.

  - Si una fila de agente de adquisiciones incluye "Todas" las unidades de planificación, la columna de precio unitario no será editable.

**Uso en el módulo de planificación de suministros:**

Estos detalles específicos del programa/agente de adquisiciones/unidad de planificación afectarán el módulo de planificación de suministros de la siguiente manera:

- **Porcentajes de flete:** Priorizado por la configuración del programa/agente de adquisiciones/unidad de planificación y luego la configuración del programa.

- **Tiempos de entrega:** Priorizado por la configuración del programa/agente de adquisiciones/unidad de planificación, luego la configuración del programa y, finalmente, la configuración del agente de adquisiciones a nivel de dominio.

- **Precios unitarios:** Priorizados por la configuración del programa/agente de adquisiciones/unidad de planificación, luego la configuración del agente de adquisiciones a nivel de reino y, finalmente, la configuración del programa.

**Pasos para agregar o editar información específica del programa/agente de adquisiciones**

1. Seleccione “Gestión de programas” y luego “Actualizar unidades de planificación”.

2. Seleccione el programa para mostrar las unidades de planificación administradas actualmente.

3. Haga clic derecho en la fila de la unidad de planificación para agregar el precio del agente de adquisiciones y haga clic en "Agregar precios de programa/agente de adquisiciones" para mostrar una nueva pantalla.

![P1341#yIS1](/img/media/image116.png)

Figura 70. Acceso a la pantalla Precios del programa/agente de adquisiciones

4. <u>OR</u> seleccione “Información del programa/agente de adquisiciones” en
el menú de la izquierda para ir directamente a la pantalla.

5. Seleccione los programas y las unidades de planificación para ingresar información.

6. Complete los campos obligatorios y los campos adicionales. Algunos recordatorios desde arriba:
    1. Si se crea una combinación de programa y agente de adquisiciones, la columna de precio no será editable si la unidad de planificación está configurada en "Todos", ya que el precio ya existe en una pantalla diferente.

    2. Al menos una de estas columnas debe tener un valor numérico al agregar o editar filas.

    3. Solo se requieren las primeras tres columnas (Programa, Unidad de planificación y Agente de adquisiciones) para agregar una fila.

    4. Sólo se permite una fila por combinación de programa/unidad de planificación/agente de adquisiciones.

![](/img/media/image117.png)

Figura 71. Agregar información del programa/agente de adquisiciones para una unidad de planificación

7. Haga clic en "Enviar" para guardar los cambios.

8. Haga clic en Master Data Sync después de realizar cambios (se aplica a cualquier elemento en Administración de programas).

### Unidades de informes alternativas

Una unidad de información alternativa (ARU) es el producto y la unidad en la que se informan los datos del país (consumo, inventario y ajustes) y podría tener la misma descripción que la unidad de planificación, unidad de pronóstico, unidad de adquisición o en una descripción de empaque completamente diferente. La ARU se define dentro de un país en particular y requiere ingresar un factor de conversión de la ARU a la unidad de planificación a la que está asociada (podría ser 1). De todos los productos maestros, el ARU es el único que administran los administradores de programas, porque son específicos de cada país. **Los administradores de aplicaciones, dominios y programas** pueden agregar/editar ARU para un país y programa. Las unidades de informes alternativas son útiles cuando:

1. > Las fuentes de datos informan datos en diferentes unidades (por ejemplo, piezas frente a paquetes)

2. > Hay otro nombre común en el país (por ejemplo, nombre de marca)

**Para ver la lista de todas las unidades de informes alternativas en un país:**

1. Seleccione “Gestión de programas” y luego “Unidad de informes alternativa”.

2. Seleccione el programa del menú desplegable.

**Para agregar unidades de informes alternativas a un país:**

1. Seleccione “Gestión de programas” y luego “Unidad de informes alternativa”.

2. Seleccione el programa del menú desplegable.

3. Haga clic en el botón "Agregar fila" en la esquina inferior derecha de la pantalla, o haga clic derecho en cualquier fila para agregar otra.

4. Ingrese los detalles en la fila recién creada y haga clic en "Enviar".
    1. Nota: el factor de conversión puede ser "dividir" o "multiplicar".

![](/img/media/image118.png)

Figura 72: ARU

\*Tenga en cuenta que para cada unidad de planificación agregada a un programa, QAT creará automáticamente una unidad de informes alternativa con un factor de conversión de 1:1. QAT utilizará la descripción de la Unidad de planificación como descripción de la Unidad de informes alternativa.

### Plazos de entrega predeterminados

QAT utiliza seis estados de envío para rastrear la progresión de un envío desde la planificación hasta la recepción del producto. Cada uno de esos pasos en el ciclo de vida del pedido tiene un tiempo de entrega asociado que se utiliza para estimar cuándo debe ocurrir la siguiente acción en cada paso. Los plazos de entrega se expresan en meses y pueden ser meses parciales o incluso cero. El orden de prioridad para la configuración de los plazos de entrega es el siguiente: la configuración de **Información del programa/agente de adquisiciones** tiene la mayor prioridad, seguida de la configuración de **nivel de programa** y luego la configuración de **nivel de reino**.

Figura 73: Estados de envío QAT

Existe una lógica de plazos de entrega diferente dependiendo de si la adquisición está etiquetada como internacional o local.

- **Para adquisiciones internacionales:**
  - **Administradores del programa** gestionan los plazos de entrega específicos del programa/país (por ejemplo, tiempo de planificación, tiempos de envío, tiempos de despacho de aduana, períodos de cuarentena, etc.)

  - **Realm Admins** gestiona los plazos de entrega específicos de cada agente de adquisiciones (más información sobre esto en la siguiente tabla).

  - **También puede establecer configuraciones de plazos de entrega específicos para programas y/o agentes de adquisiciones por unidad de planificación (PU).**

- **Para adquisiciones locales:**
  - El plazo de entrega completo (“planificado hasta recibir”) está determinado por lo que se ingresa en el nivel del programa, por unidad de planificación. Todos los pasos de la contratación local suelen ser más cortos que los de la contratación internacional.

|                            |                                                                                                                                                     |                                                                                                                                                                    |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Plazo de entrega (de – a)** | **Definición** | **Configuración** |
| Planeado enviar | Número de meses desde que se identifica la necesidad de adquisición hasta que se realiza un pedido a un agente de adquisiciones | Siempre configurado a nivel de programa por los administradores del programa |
| Presentado para aprobado | Número de meses entre la realización del pedido y su aprobación. Este plazo de entrega se puede definir para cada agente de adquisiciones.                           | Valor predeterminado establecido a nivel del programa por los administradores del programa. Sin embargo, se sobrescribe mediante la configuración del agente de adquisiciones a nivel de dominio, si el agente de adquisiciones está asignado a un envío. |
| Aprobado para enviar | Número de meses entre la aprobación del pedido y el envío por parte del agente de adquisiciones/proveedor. Este plazo de entrega se puede definir para cada agente de adquisiciones. | Valor predeterminado establecido a nivel del programa por los administradores del programa. Sin embargo, se sobrescribe mediante la configuración del agente de adquisiciones a nivel de dominio, si el agente de adquisiciones está asignado a un envío. |
| Enviado a llegado por vía aérea | Tiempo de tránsito vía aérea desde el despacho del pedido hasta su llegada al puerto de entrada -en número de meses.                                                    | Siempre configurado a nivel de programa por los administradores del programa |
| Enviado a llegado por mar | Tiempo de tránsito marítimo desde el despacho del pedido vía aérea hasta su llegada al puerto de entrada -en número de meses.                                          | Siempre configurado a nivel de programa por los administradores del programa |
| Enviado a llegado por carretera | Tiempo de tránsito por carretera desde el envío del pedido por carretera hasta la llegada al punto de entrega solicitado –en número de meses | Siempre configurado a nivel de programa por los administradores del programa |
| Llegó a recibido | Número de meses desde la llegada al puerto de entrada hasta la recepción en almacén.                                                                  | Siempre configurado a nivel de programa por los administradores del programa |

Tabla 8: Plazos de entrega por etapa de envío - definiciones

**Orden de prioridad para la configuración de plazos de entrega**

El orden de prioridad para las configuraciones de plazos de entrega es el siguiente:

1. **Información del programa/agente de adquisiciones:** Estas configuraciones tienen la máxima prioridad. Si los plazos de entrega se definen en este nivel, anularán otras configuraciones. Estos se pueden actualizar en la pantalla "Información del programa/agente de adquisiciones".

2. **Nivel de programa:** Si no se define ningún plazo de entrega a nivel de programa/agente de adquisiciones, se utilizarán los valores predeterminados a nivel de programa. Estos se pueden actualizar en las pantallas "Actualizar información del programa" y "Actualizar unidades de planificación".

3. **Nivel de dominio:** Se aplicarán plazos de entrega a nivel de dominio si no se establece un plazo de entrega específico a nivel de programa.

**Ingrese/actualice los plazos de entrega predeterminados a nivel de programa:**

1. > Vaya a “Administración del programa” y luego haga clic en “Actualizar información del programa” (consulte [Actualización de la información del programa] (#información del programa)).

2. > Desplácese hacia abajo hasta la segunda mitad de la página donde están todos los campos de tiempo de entrega.

3. > Introduzca los plazos de entrega predeterminados del programa por paso.

4. > Haga clic en "Actualizar" para guardar los cambios.

_Consulte [Información del programa/agente de adquisiciones](#programprocurement-agent-specific-information) para obtener instrucciones sobre cómo agregar/editar configuraciones a nivel de programa/agente de adquisiciones._

**Ingrese/actualice los plazos de entrega predeterminados del agente de adquisiciones local:**

1. > Vaya a “Gestión de programas” y luego haga clic en “Actualizar unidades de planificación” (consulte [Actualización de unidades de planificación](#planning-units))

2. > Seleccione el programa en el menú desplegable en la parte superior izquierda.

3. > Introduzca el plazo de entrega del programa predeterminado para adquisiciones locales.

4. > Haga clic en "Enviar" para guardar los cambios.

![P1428#yIS1](/img/media/image119.png)

Figura 74: Introducción de los plazos de entrega de los agentes de adquisiciones locales

### ![](/img/media/image120.png)Bpresupuestos

Un presupuesto representa una cantidad (estimada o real) de capital durante un período determinado que se gastará en la compra de productos básicos para el programa.

Vaya a "Gestión de programas" y luego a "Presupuesto" para ver una lista de todos los presupuestos de su(s) programa(s).

Un presupuesto se puede etiquetar para uno o varios programas. Por ejemplo, si FSP-Lab-A tiene un presupuesto x, FSP-Lab-B también puede vincular su programa al presupuesto x. Si un programa se desvincula de un presupuesto, el usuario se verá obligado a desetiquetar todos los envíos de ese presupuesto antes de cargar la versión en el servidor. Cualquier administrador de programa que tenga acceso a un programa puede editar un presupuesto asociado con el programa; sin embargo, sólo podrá agregar o eliminar programas a los que tenga acceso.

Para agregar o eliminar programas de un presupuesto, haga clic en el presupuesto y luego seleccione o anule la selección en el primer menú desplegable.

![P1438#yIS1](/img/media/image121.png)

Figura 75: Programa Múltiple ®

Si un presupuesto está resaltado en rojo, indica que el presupuesto pasó la "Fecha de finalización" y/o que el "Cantidad utilizada" superó el "Cantidad del presupuesto".

**Agregar un presupuesto**

1. En la pantalla "Presupuesto", vaya a la esquina superior derecha y haga clic en el icono azul "+". ![P1444L58#yIS1](/img/media/image122.png)

2. Aparecerá una nueva pantalla titulada "Agregar presupuesto".

3. Ingrese los detalles requeridos.

4. Haga clic en el botón "Enviar".
    1. **\*Nota:** Un programa no puede tener múltiples presupuestos con la misma fuente de financiamiento y nombre para mostrar del presupuesto. Aparecerá un mensaje de error si este es el caso.\*

**Actualizar un presupuesto**

1. Vaya a la pantalla Presupuesto.

2. Haga clic izquierdo en el presupuesto que desea actualizar.

3. Aparecerá una nueva pantalla titulada "Actualizar presupuesto

4. Actualizar los detalles del presupuesto seleccionado según corresponda.

5. Haga clic en "Enviar" para guardar los cambios.

![P1456#yIS1](/img/media/image123.png)

Figura 76: Pantalla de Presupuesto

![P1458#yIS1](/img/media/image124.png)

Figura 77: Actualización del presupuesto

## **Datos del plan de suministro transaccional**

Hay 3 requisitos de datos principales al crear o actualizar un plan de suministro: consumo, inventario y envíos. La siguiente sección definirá cada uno de los elementos de datos y cómo agregar/actualizar esos elementos en QAT.

1. > **Consumo**: Stock que dispensa el programa a los clientes.
    1. > **Consumo real**: La cantidad reportada de un producto dispensado a los clientes en un período de tiempo determinado para un programa específico en un nivel específico de la cadena de suministro o una combinación de niveles.

    2. > **Consumo previsto**: La cantidad prevista que consumirán los clientes en un período de tiempo determinado acordado por el programa.

2. > **Inventario**: La cantidad disponible de producto utilizable en un nivel específico de la cadena de suministro o una combinación de niveles, en una fecha específica, para un producto específico.
    1. > **Stock** **recuento**: Una verificación de cuánto stock tiene un programa en un momento particular en un nivel específico de la cadena de suministro o una combinación de niveles.

    2. > **Ajustes de stock**: Modificaciones positivas o negativas a las cantidades de inventario utilizables para una fecha específica, categorizadas por motivo del ajuste, si es posible (por ejemplo, daño, vencimiento, cuarentena, transferencia a otro socio implementador, etc.). Se excluyen las transferencias de reequilibrio entre ubicaciones de la misma cadena de suministro.

3. > **Envíos**: La cantidad de cantidades financiadas o planificadas que se enviarán en el mes actual o futuro o que se enviaron en un mes anterior o que se recibieron. Expresado en envíos individuales, con número de envío y fecha prevista de recepción.

### Datos de consumo

**Agregar datos de consumo:**

1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en "Datos de consumo".

2. Una vez que aparezca la pantalla “Datos de consumo”, seleccione los filtros deseados usando los menús desplegables en la parte superior.

3. La pantalla mostrará todos los datos actuales para el período seleccionado, las unidades de planificación y otros filtros seleccionados en el paso 2.

4. Para agregar un nuevo registro de consumo, haga clic derecho en cualquier celda y seleccione "Agregar nuevo consumo" O seleccione el botón azul "+ Agregar fila" en la parte inferior. JAJALC

5. Ingrese la información requerida y haga clic en "Enviar".
    1. Cualquier celda que esté atenuada (por ejemplo, Cantidad (PU) indica que es una celda generada por QAT y no se puede ingresar/editar manualmente.
        1. Recuerde que [Unidad de informes alternativa](#unidades-de-informes-alternativas) (ARU) es el producto y la unidad en la que se informan los datos del país. Esta podría ser la misma que la unidad de planificación o puede ser diferente. Los usuarios de QAT pueden definir una unidad de informe alternativa y un factor de conversión (multiplicar o dividir) a la unidad de planificación.

    2. Cualquier celda resaltada en amarillo indica que es un campo obligatorio y aún no ha sido ingresado por el usuario.

![](/img/media/image125.png)

Figura 78: Agregar datos de consumo

**Actualizar datos de consumo:**

1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en "Datos de consumo".

2. Una vez que aparezca la pantalla “Datos de consumo”, seleccione los filtros deseados usando los menús desplegables en la parte superior.

3. La pantalla mostrará todos los datos actuales para el período del informe, las unidades de planificación y otros filtros seleccionados en el paso 2.

4. Para actualizar los datos de consumo existentes, el usuario debe hacer doble clic en la(s) celda(s). Un usuario puede actualizar tantas celdas para tantas filas como necesite antes de guardar, siempre que sea para los mismos filtros desplegables seleccionados en el paso 2.
    1. **Nota:** Los usuarios pueden <u>not</u> editar el consumo pronosticado hace más de nueve (9) meses y <u>no editar el consumo real de </u> hace más de nueve (9) meses. Los datos no editables se identifican mediante filas atenuadas.

5. Una vez guardado un registro de consumo en QAT, no se puede eliminar. Por lo tanto, si un usuario desea eliminar ese registro del plan de suministro, debe desactivarlo marcando la casilla de verificación azul en la columna del extremo derecho o puede reutilizarlo para los datos de un mes diferente.

6. Una vez realizadas las actualizaciones, haga clic en "Enviar".

**Agregar/actualizar detalles del lote:**

Agregar información de lote a los registros de consumo solo se puede aplicar al consumo real.

1. Haga clic derecho en la fila "Consumo real" y haga clic en "Mostrar información de lote".

2. Aparecerá una pantalla emergente con los detalles del lote para ese registro de consumo real.

3. El usuario puede editar el número y/o la cantidad de lote existente haciendo doble clic en la celda.

4. El usuario también puede agregar nuevos lotes haciendo clic derecho y seleccionando "Agregar nuevo lote" o haciendo clic en el botón "+Agregar fila".

5. La cantidad total de los lotes deberá ser igual a la cantidad de ese registro de consumo real.
    1. Si la cantidad del lote o las cantidades del lote son menores que la cantidad de consumo real, QAT creará un lote y utilizará FEFO para calcular la diferencia.

    2. Si la cantidad del lote o las cantidades del lote son mayores que la cantidad de consumo real, QAT tendrá un error de validación y no permitirá que el usuario envíe.

6. Haga clic en "Enviar".

![P1507#yIS1](/img/media/image126.png)

Figura 79: Detalles del lote

### Datos de inventario

**Agregar datos de inventario/ajuste:**

1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en "Datos de inventario".

2. Una vez que aparezca la pantalla "Datos de inventario", seleccione los filtros deseados usando los menús desplegables en la parte superior.
    1. Si el usuario ingresa datos de inventario, seleccione "Inventario" en el menú desplegable Tipo de inventario. Si el usuario está ingresando datos de ajuste, seleccione "Ajuste".

3. La pantalla mostrará todos los datos actuales para el período seleccionado, las unidades de planificación y otros filtros seleccionados en el paso 2.

4. Para agregar un nuevo registro de inventario/ajuste, haga clic derecho en cualquier celda y seleccione "Agregar nuevo recuento de inventario"/ "Agregar nuevos ajustes" O seleccione el botón azul  
    “+ Agregar fila” en la parte inferior.

5. Ingrese la información requerida.
    1. Cualquier celda que esté atenuada (por ejemplo, Factor de conversión) indica que es una celda generada por QAT y no se puede ingresar ni editar manualmente.

    2. Cualquier celda resaltada en amarillo indica que es un campo obligatorio y aún no ha sido ingresado por el usuario.

    3. Si ingresa un ajuste, se requiere una nota en el campo "Notas". Las notas para los registros de inventario son opcionales.

6. Haga clic en "Enviar".

![P1523#yIS1](/img/media/image127.png)

Figura 80: Agregar inventario

**Actualizar datos de inventario/ajuste:**

1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en "Datos de inventario".

2. Una vez que aparezca la pantalla "Datos de inventario", seleccione los filtros deseados usando los menús desplegables en la parte superior.
    1. Si el usuario está actualizando datos de inventario, seleccione "Inventario" en el menú desplegable Tipo de inventario. Si el usuario está actualizando datos de ajuste, seleccione "Ajuste".

3. La pantalla mostrará todos los datos actuales para el período del informe, las unidades de planificación y otros filtros seleccionados en el paso 2.

4. Para actualizar los datos de inventario/ajuste existentes, el usuario debe hacer doble clic en la(s) celda(s). Un usuario puede actualizar tantas celdas para tantas filas como necesite antes de guardar, siempre y cuando sea para los mismos filtros desplegables seleccionados en el paso 2. Un usuario tampoco puede actualizar los datos de inventario de ajuste <u> y </u> al mismo tiempo sin guardar primero.
    1. **Nota:** Los usuarios pueden <u>not</u> editar registros de ajuste o inventario hace más de nueve (9) meses. Los datos no editables se identifican mediante filas atenuadas.

<!-- finalizar lista -->

7. Una vez que se ha guardado un registro de inventario en QAT, no se puede eliminar. Por lo tanto, si un usuario desea eliminar ese registro del plan de suministro, debe desactivarlo marcando la casilla de verificación azul en la columna del extremo derecho o puede reutilizarlo para los datos de un mes diferente.

<!-- finalizar lista -->

5. Una vez realizadas las actualizaciones, haga clic en "Enviar".

**Agregar/actualizar detalles del lote – Ajustes**

(para obtener más información sobre los cálculos por lotes de QAT, consulte el [Anexo 2: Reglas comerciales] (#anexo-2-reglas-comerciales) o la Sección 5.E).

1. Haga clic derecho en la fila Ajuste y haga clic en "Mostrar información de lote".

2. Aparecerá una pantalla emergente con los detalles del lote para ese registro.

3. El usuario puede editar el número y/o la cantidad de lote existente haciendo doble clic en la celda.

4. El usuario también puede agregar uno o varios lotes nuevos haciendo clic derecho y seleccionando "Agregar nuevo lote" o haciendo clic en el botón "+Agregar fila" para seleccionar

5. La cantidad total de los lotes deberá ser igual a la cantidad de dicho registro de ajuste.
    1. Si la cantidad del lote o las cantidades del lote son menores que la cantidad de ajuste, QAT creará un lote, utilizando la lógica del mejor escenario para calcular la diferencia.

2. Si la cantidad del lote o las cantidades del lote son mayores que la cantidad de ajuste, QAT tendrá un error de validación y no permitirá que el usuario envíe.

    3. _Nota: no hay ninguna anulación por parte del usuario para los ajustes automáticos, solo ajustes manuales._

6. Haga clic en "Enviar"

![](/img/media/image128.png)

![](/img/media/image129.png)

Figura 81: Detalles del lote

**Agregar/actualizar detalles del lote – Inventario**

1. Haga clic derecho en la fila de Inventario y haga clic en "Mostrar información de lote".

2. Aparecerá una pantalla emergente con los detalles del lote para ese registro en la pantalla de planificación de suministro. Consulte la Sección 5.E para obtener detalles sobre cómo actualizar.

### Datos de envío

**Agregar datos de envío:**

1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en "Datos de envío".

2. Una vez que aparezca la pantalla "Datos de envío", seleccione los filtros deseados usando los menús desplegables en la parte superior.

3. La pantalla mostrará todos los datos actuales para el período del informe, las unidades de planificación y otros filtros seleccionados en el paso 2.

4. Para agregar un nuevo registro de envío, haga clic derecho en cualquier celda y seleccione "Agregar nuevo envío" O seleccione el botón azul "+ Agregar fila" en la parte inferior.

5. Ingrese la información requerida.
    1. Cualquier celda que esté atenuada (por ejemplo, Costo unitario de planificación) indica que es una celda generada por QAT y no se puede ingresar/editar manualmente.

    2. Cualquier celda resaltada en amarillo indica que es un campo obligatorio y aún no ha sido ingresado por el usuario.

    3. Ciertas celdas no estarán disponibles para ingresar datos hasta que se hayan completado otras celdas. Por ejemplo, "Presupuesto" no se puede seleccionar hasta que el usuario haya seleccionado una "Fuente de financiamiento".

    4. "ID de envío QAT" se mostrará en blanco o "0" hasta que se cargue el programa.

    5. Los envíos no se pueden marcar como "Recibidos" si la Fecha de recepción es futura.

    6. En la pantalla de datos de envío, el usuario puede seleccionar la moneda deseada de una lista desplegable haciendo clic en la celda correspondiente en la columna de moneda. Según la moneda seleccionada, el usuario obtendrá el precio del catálogo.
        1. Ese precio se puede cambiar durante la entrada/actualización de datos.

        2. El costo del flete se basa en el modo de envío y el agente de adquisiciones, pero también se puede modificar manualmente.

    7. Si una fila de envío está en texto rojo, esto significa que el envío está identificado como un "Envío de emergencia". QAT marcará automáticamente el envío como un envío de emergencia si la fecha de recepción se encuentra dentro del plazo de entrega predefinido, lo que significa que lo más probable es que sea necesario acelerar el envío. _Nota: QAT solo marcará automáticamente el envío de emergencia cuando se cree el envío por primera vez, pero QAT dejará de marcar automáticamente después de enviar la fila del envío por primera vez._

    8. Si un envío está resaltado en gris, esto significa que el envío no está incluido en el saldo final del plan de suministro. Los envíos se pueden excluir cambiando el estado del envío a "Cancelado" O desactivando el envío usando la casilla de verificación azul en el extremo izquierdo.

6. Haga clic en "Enviar".

**Actualizar datos de envío:**

1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en "Datos de envío".

2. Una vez que aparezca la pantalla "Datos de envío", seleccione los filtros deseados usando los menús desplegables en la parte superior.

3. La pantalla mostrará todos los datos actuales para el período del informe, las unidades de planificación y otros filtros seleccionados en el paso 2.

4. Para actualizar los datos de envío existentes, el usuario debe hacer doble clic en la(s) celda(s). Un usuario puede actualizar tantas celdas para tantas filas como necesite antes de guardar, siempre que sea para los mismos filtros desplegables seleccionados en el paso 2 (es decir, no puede editar los envíos de un producto y luego editar los envíos de un producto diferente sin guardar primero).

5. Cuando se cambia cualquiera de los siguientes elementos (cantidad, ARU, modo de envío, agente de adquisiciones y costo unitario de planificación), el comportamiento del campo de costo de flete dependerá del estado de la casilla de verificación “Costo de flete calculado automáticamente”:
    1. **Comprobado:**
        1. El costo del flete se recalculará automáticamente según la configuración del programa/unidad de planificación.

2. Este cálculo utiliza la fórmula: Costo unitario de planificación \* % de flete.

    2. **Sin marcar:**
        1. Aparece la celda de costo de flete con un triángulo rojo en la esquina derecha, recomendando al usuario que actualice el costo de flete la primera vez que se desmarca la casilla.

        2. Para facilitar la entrada manual, el usuario puede ingresar una fórmula directamente en la celda escribiendo primero un "=". La fórmula desaparecerá al guardarla, pero el valor resultante permanecerá. El usuario también puede ingresar un número directamente.

6. A diferencia de los datos de consumo, un usuario puede eliminar un registro de envío incluso después de haberlo guardado en el programa, aunque el envío debe estar en el estado "Planificado". Para hacerlo, haga clic derecho en el envío deseado y seleccione "Eliminar fila".

7. Una vez realizadas las actualizaciones, haga clic en "Enviar".

**Agregar/actualizar detalles del lote**

La adición de información de lote a los registros de envío se puede aplicar a envíos en cualquier estado que no sea "envíos sugeridos". Una vez que se crea un envío, QAT generará automáticamente un lote. El usuario tiene la capacidad de editar ese lote y/o agregar nuevos lotes a ese envío.

1. Haga clic derecho en la fila de envío y haga clic en "Mostrar información de lote".

2. Aparecerá una pantalla emergente con los detalles del lote de ese envío.

3. El usuario puede editar el número de lote existente, la fecha de caducidad y la cantidad haciendo doble clic en la celda.

4. El usuario también puede agregar nuevos lotes haciendo clic derecho y seleccionando "Agregar nuevo lote" o haciendo clic en el botón "+Agregar fila".

5. La cantidad total de los lotes deberá ser igual a la cantidad de ese envío. En la parte inferior de la pantalla emergente se mostrará la cantidad total del envío, así como la cantidad total asignada a los lotes. Esto es para informar al usuario si la cantidad del lote es superior, inferior o igual a la cantidad del envío.

6. Haga clic en "Guardar información del lote".

7. **Nota:** Cuando el estado de un envío se cambia a "Recibido", los detalles del lote aparecerán automáticamente para que los usuarios editen o confirmen la información del lote actual.

La columna en el extremo derecho denominada "Generado automáticamente" le permitirá al usuario saber si ese lote fue generado automáticamente por QAT o si el usuario lo ingresó manualmente. Si se cambia cualquiera de los 3 campos del lote (número de lote, fecha de caducidad, cantidad), la casilla de verificación del campo generado automáticamente quedará desmarcada. Si se cambia la fecha de caducidad y/o la cantidad pero no el número de lote, el número de lote cambia automáticamente para cambiar "QAT" por "MAN" y la celda se resalta con un triángulo rojo que indica al usuario que debe cambiarse. Si el usuario no conoce el número de lote real, QAT permitirá que el lote aún se guarde sin cambiar el número.

![P1594#yIS1](/img/media/image130.png)

Figura 82: Detalles del lote de envío

**Calculadora de orden estratégico:**

Para combinaciones específicas de unidad de planificación y agente de adquisiciones, puede aparecer una **calculadora de pedidos estratégicos** para el usuario al ingresar la cantidad de un envío. El propósito de la calculadora es asesorar a los usuarios sobre la cantidad de pedido adecuada para un envío en función de uno o más de los siguientes elementos: a) Cantidad mínima de pedido (MOQ); b) Carga del contenedor; c) palet Euro 1; d) Palet Euro 2. La calculadora ayudará a los usuarios a planificar los envíos para maximizar la eficiencia de la logística de entrega (por ejemplo, utilizar un contenedor lleno en lugar del 20 % del contenedor). Los productos estratégicos los define a nivel de dominio una aplicación o un administrador de dominio. Para obtener más información sobre cómo definir productos estratégicos, consulte la [sección sobre cómo agregar unidades de planificación para agentes de adquisiciones] (#programprocurement-agent-specific-information).

1. Para ver la Calculadora de cantidad de un producto estratégico, haga doble clic en la celda debajo de la columna "Cantidad del pedido" y aparecerá la pantalla "Calculadora de cantidad". _Nota: Si el producto es un producto no estratégico, el usuario puede modificar directamente la cantidad del pedido en la celda después de hacer doble clic y no aparecerá una ventana emergente._

2. La cantidad original del envío aparecerá en la celda "Cantidad de pedido manual".

3. Si no desea utilizar la calculadora estratégica y desea utilizar la "Cantidad de pedido manual" original, seleccione "Ninguno" en el menú desplegable de "Embalaje basado en" y haga clic en "Guardar cantidad de envío".

4. Si quieres utilizar la calculadora estratégica:
    1. Seleccione cómo desea utilizar la calculadora eligiendo una opción del menú desplegable "Embalaje basado en", así como del menú desplegable "Opción de redondeo".

    2. Dependiendo de sus selecciones en el paso 4a, la cantidad en la celda "Cantidad de pedido final" le mostrará la cantidad de envío calculada por QAT. La tabla inferior resume la información clave sobre los diferentes modos de embalaje.

    3. Después de confirmar que está satisfecho con la cantidad final del pedido, haga clic en "Guardar cantidad de envío".

![P1608#yIS1](/img/media/image131.png)

Figura 83: Calculadora de órdenes estratégicas

**Ver fechas de envío:**

Se puede ver la estimación de cada estado y las fechas reales se pueden ingresar manualmente en la pantalla Envío. Esto permitirá al usuario identificar si el envío está a tiempo o retrasado/adelantado en función de los plazos de entrega. El usuario también puede usar esta pantalla para comparar las fechas reales con las fechas estimadas de ese envío y usar esa información para actualizar los tiempos de entrega que pueden no ser precisos.

1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en "Datos de envío".

2. Una vez que aparezca la pantalla "Datos de envío", seleccione los filtros deseados usando los menús desplegables en la parte superior.

3. La pantalla mostrará todos los datos actuales para el período del informe, la unidad de planificación y otros filtros seleccionados en el paso 2.

4. Haga clic derecho en el envío cuyas fechas desea ver y seleccione "Mostrar fechas de envío". Aparecerá una pantalla emergente con la etiqueta "Fechas de envío".

5. La fila denominada "Estimada" de la pantalla "Fechas de envío" mostrará una fecha para cada estado del envío según los plazos de entrega ingresados ​​para el programa, así como la fecha de recepción estimada. El usuario solo puede editar la fecha de recepción estimada.
    1. Si un usuario cambia la fecha estimada de recepción, las otras fechas estimadas también cambiarán según los plazos de entrega del programa.

6. La fila denominada "Actual" permitirá al usuario ingresar la fecha real en que ocurrió cada estado para ese envío. Si una celda aparece atenuada en esta fila, significa que el envío aún no ha alcanzado ese estado y no se puede ingresar una fecha.

7. Si el usuario realiza un cambio en la fecha de recepción estimada o en una de las fechas reales, haga clic en "Guardar fechas de envío".

![P1623#yIS1](/img/media/image132.png)

Figura 84: Mostrar fechas de envío

### Vinculación de envíos de ERP

La funcionalidad de vinculación de envíos de ERP permite a los planificadores de suministros vincular envíos seleccionados (actualmente GHSC-PSM) con el sistema ERP del agente de adquisiciones correspondiente (actualmente ARTMIS). Una vez que un envío está vinculado en el plan de suministro, todos los detalles del pedido (estado, fecha de recepción, costos, cantidad, lotes, etc.) coincidirán con los que están en el ERP y el usuario ya no necesitará actualizar manualmente el envío. Si el empaque del producto en el ERP no coincide con el empaque de la unidad de planificación en QAT, el usuario tendrá la capacidad de corregirlo a través de un atributo de factor de conversión en QAT. El usuario podrá desvincular el envío si desea realizar un seguimiento manual. Los detalles de envío para estos envíos vinculados aparecerán en QAT (entrada de datos de envío, planificación de suministro, informes, etc.). El usuario recibirá una alerta si se realizan cambios clave en el ERP, como la cancelación de un pedido o el cambio del SKU de un producto. Los usuarios solo podrán etiquetar envíos que hayan pasado la aprobación de la fuente de financiamiento en ERP.

Al administrar la vinculación de envíos de ERP, los usuarios seleccionarán las opciones de menú "Vincular envíos de ERP" o "Notificaciones de envío de ERP". Dentro de la pantalla ‘Link ERP Shipments’ hay 3 subpantallas:

1. > **No vinculado (QAT):** Utilice esta pantalla para vincular envíos QAT con pedidos de ERP por primera vez. Los usuarios verán una lista de envíos QAT y, cuando un usuario haga clic en un único envío QAT, podrá elegir con qué pedidos de ERP se debe vincular ese envío QAT.

2. > **Vinculado:** Los usuarios verán una lista de los envíos actualmente vinculados y podrán actualizar el factor de conversión o las notas de los envíos ya vinculados, agregar líneas ERP a envíos QAT ya vinculados o desvincular líneas ERP del envío QAT.

3. > **No vinculado (ERP) –** Utilice esta pantalla para vincular pedidos de ERP a QAT por primera vez. Los usuarios verán una lista de envíos de ERP y, cuando un usuario haga clic en un único envío de ERP, podrá elegir con qué envío QAT se debe vincular ese envío de ERP. Para cualquier pedido que esté en el ERP y que aún no esté en QAT, puede crear un nuevo envío QAT en esta pantalla.

![P1634#yIS1](/img/media/image133.png)

Figura 85: Pantallas de vinculación de ERP

**Reglas para la vinculación de envíos de ERP**

A continuación se detallan las reglas para la vinculación de envíos de ERP. El botón de detalles en la esquina superior derecha de la pantalla "Vincular envíos de ERP" resumirá estas reglas.

1. La vinculación de ERP solo se puede editar para las versiones locales descargadas. Las pantallas de vinculación de ERP mostrarán las versiones del servidor, pero esos datos son de solo lectura. Para guardar los cambios de vinculación, el usuario debe cargar esa versión.

2. Actualmente, los envíos QAT solo se pueden vincular si el agente de adquisiciones es GHSC-PSM.

3. Los envíos QAT no se pueden vincular si se encuentran en estado de planificado, cancelado o sugerido.

4. Los envíos QAT inactivos no se pueden vincular.

5. Los envíos QAT en estado "recibido" solo se pueden vincular si la fecha de recepción se encuentra dentro de los últimos 6 meses.

6. Los pedidos de ERP solo se pueden vincular si ya pasaron el estado de aprobación de la fuente de financiamiento (por ejemplo, aprobado por USAID).

7. Los pedidos de ERP en estado "entregado" solo se pueden vincular si la fecha de entrega cae dentro de los últimos 6 meses.

8. La fecha de recepción del ERP utiliza la lógica: 1) Fecha de entrega real 2) Fecha de entrega estimada 3) Fecha de entrega acordada 4) Fecha de entrega solicitada. Por lo tanto, si \#1 no está disponible, QAT utilizará \#2. Si \#2 no está disponible, QAT usará \#3 y si \#3 no está disponible, QAT usará \#4.

**No vinculado (QAT)**

Los planificadores de suministros utilizan esta pantalla para vincular los envíos QAT con los pedidos de ERP. A continuación se detallan los pasos sobre cómo vincular un envío QAT con uno o varios pedidos de ERP:

1. Seleccione el botón de opción en la parte superior con la etiqueta "No vinculado (QAT)".

2. Seleccione el programa y la(s) unidad(es) de planificación desde donde desea elegir el envío QAT. Una vez seleccionado, aparecerá una lista de envíos QAT. La vinculación de ERP solo se puede realizar en versiones locales; sin embargo, los envíos vinculados se pueden ver en versiones de servidor.

3. Haga clic izquierdo en un solo envío QAT. Aparecerá una ventana emergente llamada "Buscar envíos vinculados a ERP". Esta ventana permitirá al usuario elegir con qué pedidos de ERP se debe vincular el envío QAT.
    1. La mitad superior de la ventana mostrará los detalles del envío QAT. Esta información no es editable.

    2. La mitad central de la ventana mostrará 2 menús desplegables que permitirán al usuario filtrar la lista de pedidos de ERP para vincular el envío de QAT.

    3. La mitad inferior de la ventana enumerará todos los envíos de ERP según los menús desplegables de la sección central. Aquí es donde el usuario vinculará 1 o más pedidos y proporcionará la Unidad de informes alternativa (ARU) y la nota (opcional). La ARU completará automáticamente el factor de conversión.
        1. **Para cambiar/agregar un factor de conversión, el usuario puede hacerlo en la pantalla "Unidad de informe alternativa".**

4. En la sección central, el usuario puede filtrar los envíos de ERP seleccionando la unidad de planificación de ERP, el RO/N.º de pedido o ambos. QAT completará previamente el menú desplegable RO/N.º de pedido una vez que aparezca esta ventana seleccionando el N.º de pedido del Agente de procesamiento del envío de QAT. Si este campo está en blanco, QAT mostrará un mensaje debajo de ambos menús desplegables en rojo que muestra "Complete la unidad de planificación ERP o RO/Nº de pedido para completar los datos".

5. Para vincular un envío de ERP, el usuario marcará la casilla en la columna del extremo izquierdo que dice "¿Enlace?". Una vez que el usuario haga esto, se le pedirá que ingrese la ARU.
    1. Si un usuario desea vincular varias líneas de ERP al mismo envío QAT, debe marcar la casilla para varias filas.

    2. Si un usuario desea vincular varios envíos QAT a 1 o varias líneas de ERP, debe marcar la casilla en la parte superior que dice "Mostrar todos los envíos para \_\_\_\_\_\_" y luego seleccionar cada uno de los envíos QAT para vincular.

6. El factor de conversión es útil cuando la unidad de planificación QAT y el producto ERP son diferentes (paquete de 10 barras de chocolate versus paquete de 100 barras de chocolate). El factor de conversión se utiliza para calcular cuál es la cantidad de envío QAT convertida. La cantidad de envío QAT convertida es la cantidad del pedido que se utilizará en su plan de suministro para el envío vinculado.

![P1665#yIS1](/img/media/image134.png)

7. Si hay una nota en el envío QAT, esta se trasladará a cada uno de los pedidos de ERP cuando se vincule. En esta ventana emergente, el usuario puede editar o eliminar esa nota.

8. La parte inferior de la ventana mostrará cuál es el pedido de cantidad QAT original y cuál será la nueva cantidad QAT convertida.

![P1668#yIS1](/img/media/image135.png)

Figura 86: Cantidad convertida de ERP

9. Por último, haga clic en "Vincular envío".

**No vinculado (ERP)**

Los planificadores de suministros utilizan esta pantalla para vincular los pedidos de ERP a QAT por primera vez. Para cualquier pedido que esté en el ERP y que aún no esté en QAT, puede crear un nuevo envío QAT en esta pantalla. A continuación se detallan los pasos sobre cómo vincular un pedido de ERP con un envío QAT:

1. Seleccione el botón de opción en la parte superior con la etiqueta "No vinculado (ERP)".

2. Seleccione el país Y la categoría de unidad de planificación o unidad de planificación desde la que desea elegir el pedido de ERP. Una vez seleccionado, aparecerá una lista de pedidos de ERP.
    1. **Nota: esta lista muestra datos de ERP, mientras que la pantalla No vinculado (QAT) muestra datos de QAT.**

3. Haga clic izquierdo en un único pedido de ERP. Aparecerá una ventana emergente llamada "Buscar envíos vinculados a ERP". Esta ventana permitirá al usuario vincular 1 o más pedidos de ERP con un envío QAT nuevo o preexistente.
    1. La mitad superior de la ventana mostrará los detalles del envío QAT. Esta área permitirá al usuario seleccionar un envío QAT preexistente o crear uno nuevo. Los pasos 4 y 5 detallarán cómo hacerlo.

    2. La mitad central de la ventana mostrará 2 menús desplegables que permitirán filtrar la lista de pedidos de ERP para vincular el envío de QAT.

    3. La mitad inferior de la ventana enumerará todos los envíos de ERP según los menús desplegables de la sección central. Aquí es donde el usuario vinculará 1 o más pedidos y proporcionará el factor de conversión y la nota. Esta sección se completa previamente según el número de pedido de ERP que se seleccionó en la pantalla anterior.

4. Para seleccionar un envío QAT existente, haga clic en el botón "Seleccionar envío existente" en la sección superior.
    1. Seleccione el programa desde el que desea buscar los envíos QAT. El menú desplegable se filtrará para mostrar solo el país que se seleccionó en el paso 2.

    2. A continuación, busque en la lista de envíos QAT por unidad de planificación (predeterminado) o por ID de envío QAT. Si desea buscar por ID de envío QAT, deberá marcar la casilla denominada "¿Filtrar por ID de envío QAT?". Para volver a buscar por unidad de planificación, desmarcarás la casilla.

    3. Una vez que encuentre el envío QAT deseado, seleccione el botón en la columna del extremo izquierdo denominado "Seleccionar identificación de envío".

5. Para crear un nuevo envío QAT, haga clic en el botón "Crear nuevo envío" en la sección superior.
    1. El usuario deberá completar 4 menús desplegables (Programa, Unidad de planificación, Fuente de financiamiento, Presupuesto) para proporcionar la información requerida para crear el envío. El resto de los detalles del envío provendrán del pedido ERP que se seleccione en el paso 7.
        1. El menú desplegable del programa se filtra para mostrar solo el país que se seleccionó en el paso 2.

        2. El menú desplegable de presupuesto se filtra según la selección en el menú desplegable de fuente de financiamiento.

3. Si no existe un presupuesto aplicable, el usuario deberá salir de la pantalla y agregar un presupuesto en datos maestros. Si el usuario agrega un presupuesto, debe dominar la sincronización de datos antes de que esa opción aparezca en esta pantalla.

6. En la sección central, QAT completará previamente el menú desplegable RO/Nº de pedido una vez que aparezca esta ventana según el pedido de ERP seleccionado realizado en el paso 3.

7. Para vincular un envío de ERP, el usuario marcará la casilla en la columna del extremo izquierdo que dice "¿Enlace?". Una vez que el usuario haga esto, se le pedirá que ingrese la ARU.
    1. Si un usuario desea vincular varias líneas de ERP al mismo envío QAT, debe marcar la casilla para varias filas.

    2. Si un usuario desea vincular varios envíos QAT a 1 o varias líneas de ERP, debe marcar la casilla en la parte superior que dice "Mostrar todos los envíos para \_\_\_\_\_\_" y luego seleccionar cada uno de los envíos QAT para vincular.

8. El factor de conversión es útil cuando la unidad de planificación QAT y el producto ERP son diferentes (paquete de 10 barras de chocolate versus paquete de 100 barras de chocolate). El factor de conversión se utiliza para calcular cuál es la cantidad de envío QAT convertida. La cantidad de envío QAT convertida es la cantidad del pedido que se utilizará en su plan de suministro para el envío vinculado.

![P1699#yIS1](/img/media/image134.png)

9. El usuario puede agregar una nota al envío editando la columna del extremo derecho denominada "Notas".

10. La parte inferior de la ventana mostrará cuál es el pedido de cantidad QAT original y cuál será la nueva cantidad QAT convertida.

11. Por último, haga clic en "Vincular envío".

![P1703#yIS1](/img/media/image136.png)

Figura 87: Crear nuevo envío

**Pantalla vinculada**

Los planificadores de suministros utilizan esta pantalla para ver la lista de envíos de ERP actualmente vinculados y actualizar la Unidad de informe alternativa (ARU) o notas, agregar pedidos de ERP a envíos QAT ya vinculados o desvincular líneas de ERP del envío QAT.

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

**<u>Propósito</u>:** Permitir a los usuarios importar pronósticos creados por QAT en programas de planes de suministro. Los pronósticos solo están disponibles para importar si 1) se cargan como una versión final y 2) hay un pronóstico seleccionado para cada unidad de planificación.

**<u>Usando esta pantalla</u>**:

**(Paso 1)**

- Seleccione desde qué programa de pronóstico importar (solo están disponibles los pronósticos finales)

- Seleccione a qué programa de plan de suministro importar. Sólo se pueden utilizar versiones del plan de suministro local. Para descargar un programa, vaya a la pantalla "Descargar/Eliminar programa" en "Administración de programas".
  - Seleccione el rango de fechas de los datos de pronóstico a importar, que deben estar dentro del período de pronóstico.

- En la tabla que aparece, seleccione y mapee las unidades de planificación.
  - Para cada Unidad de Planificación de Previsión, QAT requiere una Unidad de Planificación de Plan de Suministro y un factor de conversión correspondientes. QAT asigna automáticamente coincidencias exactas de unidades de planificación, pero los usuarios pueden anular tanto la asignación de unidades de planificación como el factor de conversión.

  - No es necesario importar todas las unidades de planificación de pronóstico; sin embargo, todas las unidades de planificación de pronóstico deben tener una selección en la tabla de mapeo. Puede seleccionar manualmente "No importar" para cada PU de pronóstico que no desee importar o puede hacer clic en la casilla de verificación "No importar todas las PU no asignadas", lo que permitirá una selección masiva de No importar para todas las PU no asignadas.

  - > Si para una PU no se seleccionó ningún pronóstico, aparecerá en gris con “static.importintoSP.forecastBlank”

  - Si una unidad de planificación no aparece en el menú desplegable, deberá agregarla al programa del plan de suministro en la pantalla "Actualizar unidades de planificación".

![P1833#yIS1](/img/media/image151.png)

Figura 97: Pantalla de importación de pronósticos

**(Paso 2)**

Para cada región de pronóstico, ingrese cuánto (%) del pronóstico de esa región importará y a qué región se importará el consumo pronosticado. A continuación se muestran algunos casos de uso:

- Previsión nacional al plan nacional de suministro.

| **Región(es) de pronóstico** | **% del pronóstico** | **Región del plan de suministro** |
| ----------------------- | ----------------- | ---------------------- |
| Nacional | 100 | Nacional |

- Previsión multirregional para plan de suministro multirregional

| **Región(es) de pronóstico** | **% del pronóstico** | **Región del plan de suministro** |
| ----------------------- | ----------------- | ---------------------- |
| Norte | 100 | Norte |
| Este | 100 | Este |
| Sur | 100 | Sur |

- Previsión multirregional para el plan de suministro nacional –

| **Región(es) de pronóstico** | **% del pronóstico** | **Región del plan de suministro** |
| ----------------------- | ----------------- | ---------------------- |
| Norte | 100 | Nacional |
| Este | 100 | Nacional |
| Sur | 100 | Nacional |

- Pronóstico nacional para el plan de suministro multirregional: tenga en cuenta que el proceso de importación debe repetirse para cada región del plan de suministro.

| **Región(es) de pronóstico** | **% del pronóstico** | **Región del plan de suministro** |
| ----------------------- | ----------------- | ---------------------- |
| Nacional | 20 | Norte |

| **Región(es) de pronóstico** | **% del pronóstico** | **Región del plan de suministro** |
| ----------------------- | ----------------- | ---------------------- |
| Nacional | 45 | Sur |

| **Región(es) de pronóstico** | **% del pronóstico** | **Región del plan de suministro** |
| ----------------------- | ----------------- | ---------------------- |
| Nacional | 35 | Este |

**(Paso 3)**

QAT enumerará cada registro de pronóstico que se importará (una fila para cada combinación de unidad de planificación, región y mes).

- QAT calcula el consumo previsto a importar de la siguiente manera:

<table>
  <tbody>
    <tr class="odd">
      <td>
        <em>Consumo previsto (módulo de previsión)</em>
      </td>
      <td>
        <em>x</em>
      </td>
      <td>
        <em>% del pronóstico</em>
      </td>
      <td>
        <em>x</em>
      </td>
      <td>
        <p>
          <em>Factor de conversión</em>
        </p>
        <p>
          <em>(Previsión al plan de suministro)</em>
        </p>
      </td>
      <td>
        <em>=</em>
      </td>
      <td>
        <em>Rounded* Consumo previsto convertido</em>
      </td>
    </tr>
  </tbody>
</table>

> Por ejemplo:

- Una previsión nacional que se dividirá en dos regiones del 50% cada una.

- La Unidad de Planificación de Previsión está en paquetes de 3 y la Unidad de Planificación del Plan de Suministro está en paquetes de 1 (Factor de conversión = 3)

- La previsión nacional para el Mes N era 100 (paquetes de 3)

- Se importará un pronóstico de 100 x 50 % x 3 = 150,00 redondeados (paquetes de 1) a cada región para el mes N

<!-- finalizar lista -->

- **\*Método de redondeo:** Debido a que la planificación de suministro de QAT requiere números enteros sin decimales, QAT convierte el consumo previsto en números enteros redondeando hacia abajo y sumando los "residuales" a lo largo del tiempo. Cada mes, QAT suma el total de residuos del mes pasado y el pronóstico de este mes, antes de redondear hacia abajo, y cualquier residuo no redondeado hacia abajo se suma a un total residual acumulado, llamado Total Acumulado. De esta manera, no se pierden cantidades durante el proceso de redondeo.
  - > Fórmulas:
    - **Total acumulado del mes N** = (Residual del mes N - 1) + Pronóstico convertido del mes N

    - **Residual del Mes N** = Cuánto se perdió en el redondeo = (Total Acumulado del Mes N) – (Pronóstico Convertido Redondeado del Mes N)

    - **Pronóstico convertido redondeado para el mes N** = Total acumulado para el mes N, redondeado hacia abajo al número entero más cercano

- > Por ejemplo, se proyecta que un pronóstico nacional consumirá 0,25 paquetes de la Unidad de Planificación de Pronósticos por mes, durante 12 meses. La Unidad de Planificación de Previsión y la Unidad de Planificación del Plan de Suministro son iguales (Factor de conversión = 1)
    - En enero, el Consumo Convertido es 0,25, y como es el primer mes, el 0,25 también es el Total Acumulado de enero. 0,25 se redondea hacia abajo a un número entero que es 0 y el número redondeado de 0 se importa al módulo de planificación de suministro. El residuo de enero del redondeo es 0,25 – 0 = 0,25.

    - En febrero, el Consumo Convertido es 0,25, sumado al Residual de enero de 0,25 hace que el Total Acumulado de febrero sea 0,25 + 0,25 = 0,5. Luego, 0,5 se redondea hacia abajo a un número entero de 0, que se importa al módulo de planificación de suministro. El residuo de febrero del redondeo es 0,5 – 0 = 0,5.

    - En marzo, el Consumo Convertido es 0,25, sumado al Residual de febrero de 0,5 hace que el Total Acumulado de marzo sea 0,25 + 0,5 = 0,75. Luego, 0,75 se redondea hacia abajo a un número entero de 0, que se importa al módulo de planificación de suministro. El residuo de marzo del redondeo es 0,75 – 0 = 0,75.

    - En abril, el Consumo Convertido es 0,25, sumado al Residual de Marzo de 0,75 hace que el Total Acumulado de Abril sea 0,25 + 0,75 = 1,00. Luego, 1,00 se redondea hacia abajo a un número entero de 1,00, que se importa al módulo de planificación de suministros. El residuo de abril del redondeo es 1,00 – 1,00 = 0.

    - A partir de mayo el ciclo se repite.

<table>
  <thead>
    <tr class="header">
      <th></th>
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
        <p>Pronóstico convertido</p>
        <p>
          <em>(Después de aplicar el factor de conversión)</em>
        </p>
      </td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
      <td>0.25</td>
    </tr>
    <tr class="even">
      <td>
        <em>Cotal acumulado</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>1</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>1</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>1</em>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <em>Residual</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>0</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>0</em>
      </td>
      <td>
        <em>0.25</em>
      </td>
      <td>
        <em>0.5</em>
      </td>
      <td>
        <em>0.75</em>
      </td>
      <td>
        <em>0</em>
      </td>
    </tr>
    <tr class="even">
      <td>
        <p>Pronóstico redondeado convertido</p>
        <p>
          <em>(Para importar al módulo de planificación de suministros)</em>
        </p>
      </td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
    </tr>
  </tbody>
</table>

- Si existe un consumo previsto en el plan de suministro, la celda "Consumo actual previsto" se resaltará en amarillo.

- Si existe un consumo previsto en el plan de suministro y los datos de consumo previsto que el usuario intenta importar tienen más de 4 meses, la celda "Consumo previsto actual" se resaltará en gris y NO se importará.

- Utilice la opción "¿Importar?" para anular la selección de cualquier pronóstico que NO desee importar al plan de suministro. Si está marcado, el Consumo pronosticado convertido anulará el pronóstico del Plan de suministro. Si no se marca, se mantendrá el pronóstico del Plan de suministro actual.

![P2015#yIS1](/img/media/image152.png)

Figura 98: Pantalla de importación de pronóstico QAT