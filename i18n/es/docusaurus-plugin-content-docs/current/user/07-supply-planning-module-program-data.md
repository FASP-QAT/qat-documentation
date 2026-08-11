---
id: supply-planning-module-program-data
title: "4. Supply Planning Module: Program Data"
sidebar_label: "   4. Supply Plan Program Data"
sidebar_position: 5
---
# Sección 4. Módulo de planificación de suministros: datos del programa

Como se definió anteriormente en [Conceptos y términos importantes de QAT] (./04-overview.md#e-important-qat-concepts-and-terms), un programa en QAT está definido por un país, una o más áreas técnicas, una región (generalmente, a nivel nacional, pero puede ser subnacional) y una organización (generalmente el Ministerio de Salud). 

Hay dos grandes categorías de datos del programa: datos de fondo (editables por los administradores del programa) y datos transaccionales (los "tres grandes" (consumo, inventario, envíos) que son editables por los administradores y usuarios del programa).

<table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc', margin: '20px 0' }}>
  <thead>
    <tr>
      <th style={{ border: 'none', backgroundColor: 'transparent', width: '20%' }}></th>
      <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left', fontWeight: 'bold', width: '25%', backgroundColor: '#eaeaea' }}>Data Category</th>
      <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left', fontWeight: 'bold', width: '55%', backgroundColor: '#eaeaea' }}>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan="3" style={{ border: '1px solid #ccc', padding: '10px', verticalAlign: 'middle', textAlign: 'center', backgroundColor: '#eaeaea', fontWeight: 'normal', color: '#000' }}>
        Background Data
      </td>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Program Info</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>Program Manager, Freight %, Lead Times</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Product Info</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>Planning units – min, reorder interval, alternate reporting units</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Budget</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>Funding source, amounts, beginning and ending dates, etc.</td>
    </tr>
    <tr>
      <td rowSpan="3" style={{ border: '1px solid #ccc', padding: '10px', verticalAlign: 'middle', textAlign: 'center', backgroundColor: '#eaeaea', fontWeight: 'normal', color: '#000' }}>
        Transactional Data<br/>(“Big 3”)<br/>for each product
      </td>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Consumption</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>
        Forecasted consumption<br/>
        And actual consumption, as it becomes available
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Stock</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>Inventory counts & Adjustments</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', color: '#000' }}>Shipments</td>
      <td style={{ border: '1px solid #ccc', padding: '10px', color: '#000' }}>
        Quantities, receive date, status, procurement agent, funder & associated budget<br/>
        (if available) batch #s & expiry dates
      </td>
    </tr>
  </tbody>
</table>

*Tabla 7: Datos a nivel de programa*

## A. Antecedentes

Cada programa dentro del ámbito de Salud Global se rige por los mismos datos maestros estandarizados, como catálogo de productos, agentes de adquisiciones, fuentes de financiamiento, fuentes de datos, etc. Sin embargo, los administradores del programa pueden seleccionar un subconjunto de datos maestros del ámbito para usar en su programa y proporcionar parámetros adicionales. 

**Notas:** 
- Todos los datos de antecedentes deben actualizarse mientras el usuario está en línea. Se recomienda que los usuarios hagan clic en "sincronización de datos maestros" después de realizar actualizaciones de datos en segundo plano para que se reflejen en toda la herramienta.
- Para obtener más información sobre las funciones de los usuarios, consulte el [Anexo 3: Matriz de funciones de los usuarios](./15-annex-3-user-role-matrix.md)). 

### A1. Configuración del programa

Los administradores de programas en QAT pueden definir los parámetros generales de su programa, seleccionando de una lista desplegable que contiene datos maestros a nivel de dominio para cada campo. Estos parámetros generales para el módulo de planificación de suministros incluyen el nombre del programa, el administrador del programa, los porcentajes de flete predeterminados para transporte aéreo, marítimo y por carretera, los plazos de entrega por estado del envío y las notas. Los parámetros generales para el módulo de pronóstico incluyen el nombre del programa, el administrador del programa y las notas. **Los usuarios del programa** podrán enumerar/ver todos los programas a los que tienen acceso, mientras que solo los **Administradores del programa** pueden actualizar cualquiera de los parámetros generales del programa.

Actualizar información del programa:
1. Haga clic en "Administración de programas" y luego seleccione "Actualizar información del programa".
2. Haga clic en el programa que necesita actualizarse<br />
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li>Program Admins can add/remove procurement agents and funding sources that already exist<br/>in QAT to their program. This will in turn, add/remove the procurement agents to the<br/>dropdown fields in the [Shipment Data entry](#b3-shipment-data) screens. If a user would like to add a<br/>procurement agent to their program that does not exist in QAT, they can take out a ticket<br/>with the [QAT HelpDesk](./05-getting-started.md#i-qat-helpdesk-and-tickets) system.</li>
    </ol>

<div style={{textAlign: 'center'}}>

![Update Program Info - Supply Planning Module](/img/media/image113.png)

Figure 67: Update Program Info - Supply Planning Module

</div>

![Update Program Info - Supply Planning Module](/img/media/image114.png)

3. Los administradores del programa pueden desplazarse hacia abajo para ver una lista de usuarios que tienen acceso a su programa. Se recomienda a los administradores del programa que revisen esta lista periódicamente para asegurarse de que todos los usuarios que figuran en la lista tengan el propósito comercial de ver, editar o administrar ese plan de suministro.

4. Actualice los campos como desee y haga clic en "Enviar".

**Nota:** QAT solo permite que los administradores de nivel de reino o de aplicación actualicen los campos que están en gris en la pantalla Actualizar información del programa. Si un usuario requiere que se actualicen estos campos, puede obtener un ticket con el sistema [QAT HelpDesk](./05-getting-started.md#i-qat-helpdesk-and-tickets).

### A2. Unidades de Planificación

La unidad de planificación es el producto utilizado en QAT como base para planificar adquisiciones y mostrar consumo, envíos, inventario y ajustes. El nombre de una unidad de planificación suele incluir una descripción completa hasta el embalaje primario; por tanto, su nomenclatura sigue fielmente el tamaño del envase en el que se realiza la dispensación, es decir, un frasco de 30 comprimidos, un blister de 10x10 cápsulas, etc.

El catálogo de unidades de planificación QAT se considera datos maestros a nivel de dominio, lo que significa que cualquier adición, edición o resta de ese catálogo se administra a nivel de dominio y se aplica a todos los programas dentro de ese dominio.

Cada programa debe tener al menos una unidad de planificación que los **Administradores de programas** puedan seleccionar del catálogo a nivel de dominio para agregar a sus programas o desactivarlos. **Los administradores del programa** también pueden actualizar cualquier parámetro relacionado con una unidad de planificación en particular, incluida la frecuencia de reorden, los meses mínimos de existencias, el cálculo del consumo mensual promedio, el tiempo de entrega del agente de compras local, la vida útil y el precio. Las unidades de planificación se pueden desactivar del programa si ya no se utilizan, lo que permite a los administradores del programa conservar todos los datos heredados. Si la unidad de planificación no existe en el catálogo QAT, genere un ticket a través del servicio de asistencia técnica de QAT para que se pueda crear para todo el ámbito. Vea más sobre emisión de boletos en la sección [QAT Helpdesk and Tickets](./05-getting-started.md#i-qat-helpdesk-and-tickets).

<div style={{textAlign: 'center'}}>

![Parameters to update per planning unit](/img/media/image115.png)

Figure 69: Parameters to update per planning unit.

</div>

**Parámetros de la unidad de planificación:**
- **Factor de conversión (FU:PU):** Un campo no editable que proporciona información sobre el factor de conversión entre la UP elegida y su FU asociada.
- **Planificar por:** elija entre “MOS” para aquellas unidades de planificación que se consumen en grandes cantidades o “Cantidad” para aquellas unidades de planificación que se consumen en bajas cantidades, o para fines de emergencia con vencimientos elevados.
- **Intervalo de reorden (en meses):** el número de meses entre envíos. Intervalo de reorden + MOS mínimo = MOS máximo
- **Meses mínimos de existencias (MOS):** la cantidad mínima de inventario, en meses, que debe estar disponible para satisfacer la demanda y evitar desabastecimientos.
- **Cantidad mínima:** la cantidad mínima de inventario disponible que se determina que se necesita
- **Cálculo del consumo mensual promedio (AMC):** que es la cantidad promedio que se usa un producto durante un período de tiempo seleccionado, tomará un promedio de los valores ingresados por el administrador del programa para “Meses en el futuro (incluido el mes actual)” y “Meses en el pasado”
- **Plazo de entrega de adquisiciones locales:** el tiempo de entrega completo (“planificado hasta recibir”), en meses, para las unidades de planificación adquiridas localmente. Idealmente, en las adquisiciones locales, el plazo de entrega sería mucho más corto que el de las internacionales.
- **Tiempo de entrega de distribución:** Número de meses entre la recepción del envío y la distribución del producto hasta el nivel más bajo. Se utiliza para envíos sugeridos antes de falta de existencias.
- **Vida útil:** número de meses desde la recepción del envío (estado = recibido) hasta su vencimiento. Este es un número promedio de meses para la unidad de planificación; para ingresar datos de lote exactos, incluidas las fechas de vencimiento, consulte [Planificación de suministro: stock vencido del proyecto e información de lote](./08-supply-planning-module-supply-planning.md#e-supply-planning-project-expired-stock-and-batch-information)
- **Umbral de error de pronóstico (%):** un valor utilizado en los informes de consumo de Error de pronóstico (mensual) y Error de pronóstico (por PU) como una demarcación de si un error de pronóstico se considera demasiado alto
- **Precio de catálogo:** precio promedio de una sola unidad de planificación, que se utilizará en el cálculo de los costos de envío. El precio por programa y agente de adquisiciones se puede actualizar de manera más granular en Información específica del programa/agente de adquisiciones o los precios de envío específicos se pueden actualizar en la pantalla de ingreso de datos de envío.
- **Notas:** un campo de texto libre para agregar información relevante de la unidad de planificación (es decir, cronogramas de entrada/salida gradual, si la unidad de planificación son datos a nivel central/nacional, etc.). Estas notas están disponibles para su visualización en el informe del plan de suministro, la versión del plan de suministro y la pantalla de planificación de suministro de revisión, la pantalla de planificación de suministro y la pantalla de planificación de escenario.

**Actualizar unidades de planificación dentro de un programa:**
1. Asegúrese de estar trabajando en modo "en línea". Seleccione "Gestión de programas" y luego "Actualizar unidades de planificación"
2. Seleccione el programa para mostrar las unidades de planificación actualmente administradas<br />
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li>If intending to update or reactivate a deactivated planning unit, choose “Inactive” from the planning unit Status dropdown</li>
    </ol>
3. Haga doble clic en la celda (parámetro) que necesita actualización.
4. Haga clic en "Enviar" para guardar los cambios.

**Agregar unidades de planificación a un programa:**
1. Asegúrese de estar trabajando en modo "en línea". Seleccione "Gestión de programas" y luego "Actualizar unidades de planificación".
2. Seleccione el programa para mostrar las unidades de planificación administradas actualmente.
3. Haga clic en el botón azul "Agregar fila" en la parte inferior derecha de la pantalla y aparecerá una nueva fila en la parte superior de la tabla.<br />
    <ol style={{ listStyleType: 'lower-alpha' }}>
        <li>Alternatively, right-click on any row in the table and select “Insert new row before” or “Insert new row after”.</li>
    </ol>
4. Comience escribiendo las primeras tres letras de la unidad de planificación que desea agregar.
5. Complete todas las celdas (parámetros) de esa fila.
6. Haga clic en "Enviar" para guardar los cambios.

**Nota:** Si una unidad de planificación requerida no está disponible en el menú desplegable y, por lo tanto, en el catálogo QAT,<br />presente un ticket a través del servicio de asistencia técnica de QAT para que se pueda crear para todo el ámbito. Vea más sobre<br />emisión de boletos en la sección <a href="./05-getting-started.md#i-qat-helpdesk-and-tickets">Servicio de asistencia y boletos de QAT</a>.

### A3. Información específica del programa/agente de adquisiciones

Los usuarios de QAT pueden gestionar detalles específicos (costos de flete, plazos de entrega, costos unitarios) para agentes de adquisiciones y unidades de planificación dentro de un plan de suministro. Los precios específicos de los agentes de adquisiciones del programa se pueden establecer para cada unidad de planificación en sus programas, además de los precios predeterminados (de catálogo) del programa o los precios del catálogo de agentes de adquisiciones a nivel de dominio. Por ejemplo, un usuario puede querer ingresar el precio del PNUD para las pruebas de diagnóstico rápido de malaria (mRDT) en el programa FASPonia-Malaria, si el catálogo del PNUD no está disponible a nivel de reino. Los usuarios también tienen la capacidad de designar porcentajes de flete, plazos de entrega (incluidos los plazos de entrega locales) y precios unitarios para unidades de planificación específicas, agentes de adquisiciones o una combinación de ambos.

**Características y reglas:**
- **Combinación de programa + agente de adquisiciones:** Si se crea una combinación de programa y agente de adquisiciones, la columna de precio no será editable si la unidad de planificación está configurada en "Todos", ya que el precio ya existe en una pantalla diferente.
- **Costos de flete, plazos de entrega y precios unitarios:** Al menos una de estas columnas debe tener un valor numérico al agregar o editar filas.
- **Campos obligatorios:** Solo las primeras tres columnas (Programa, Unidad de planificación y Agente de adquisiciones) son obligatorias para agregar una fila.
- **Restricciones:**
  - Sólo se permite una fila por combinación de programa/unidad de planificación/agente de adquisiciones.
  - Si una fila de agente de adquisiciones incluye "Todas" las unidades de planificación, la columna de precio unitario no será editable.

**Uso en el módulo de planificación de suministros:**
Estos detalles específicos del programa/agente de adquisiciones/unidad de planificación afectarán el módulo de planificación de suministros de la siguiente manera:
- **Porcentajes de flete:** Priorizado por la configuración del programa/agente de adquisiciones/unidad de planificación y luego la configuración del programa.
- **Tiempos de entrega:** Priorizado por la configuración del programa/agente de adquisiciones/unidad de planificación, luego la configuración del programa y, finalmente, la configuración del agente de adquisiciones a nivel de dominio.
- **Precios unitarios:** Priorizados por la configuración del programa/agente de adquisiciones/unidad de planificación, luego la configuración del agente de adquisiciones a nivel de reino y, finalmente, la configuración del programa.

**Pasos para agregar o editar información específica del programa/agente de adquisiciones:**
1. Seleccione “Gestión de programas” y luego “Actualizar unidades de planificación”.
2. Seleccione el programa para mostrar las unidades de planificación administradas actualmente.
3. Haga clic derecho en la fila de la unidad de planificación para agregar el precio del agente de adquisiciones y haga clic en "Agregar precios de programa/agente de adquisiciones" para mostrar una nueva pantalla.

<div style={{textAlign: 'center'}}>

![Accessing the Program/Procurement Agent Prices screen](/img/media/image116.png)

Figure 70. Accessing the Program/Procurement Agent Prices screen

</div>

4. O seleccione “Programa/Información del agente de adquisiciones” en el menú de la izquierda para ir directamente a la pantalla.
5. Seleccione los programas y las unidades de planificación para ingresar información.
6. Complete los campos obligatorios y los campos adicionales. Algunos recordatorios desde arriba:<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If creating a program and procurement agent combination, the price column will become non-editable if the planning unit is set to ‘All’ since the price already exists in a different screen.</li>
       <li>At least one of these columns must have a numeric value when adding or editing rows.</li>
       <li>Only the first three columns (Program, Planning Unit, and Procurement Agent) are required to add a row.</li>
       <li>Only one row is allowed per program/planning unit/procurement agent combination.</li>
   </ol>


<div style={{textAlign: 'center'}}>

![Adding Program/Procurement Agent Info for a planning unit](/img/media/image117.png)

*Figura 71: Agregar información del programa/agente de adquisiciones para una unidad de planificación*

</div>

7. Haga clic en "Enviar" para guardar los cambios.
8. Haga clic en Master Data Sync después de realizar cambios (se aplica a cualquier elemento en Administración de programas).

### A4. Unidades de informes alternativas

Una unidad de información alternativa (ARU) es el producto y la unidad en la que se informan los datos del país (consumo, inventario y ajustes) y podría tener la misma descripción que la unidad de planificación, unidad de pronóstico, unidad de adquisición o en una descripción de empaque completamente diferente. La ARU se define dentro de un país en particular y requiere ingresar un factor de conversión de la ARU a la unidad de planificación a la que está asociada (podría ser 1). De todos los productos maestros, el ARU es el único que administran los administradores de programas, porque son específicos de cada país. **Los administradores de aplicaciones, dominios y programas** pueden agregar/editar ARU para un país y programa. Las unidades de informes alternativas son útiles cuando:
1. Las fuentes de datos informan datos en diferentes unidades (por ejemplo, piezas frente a paquetes)
2. Hay otro nombre común en el país (por ejemplo, nombre de marca)

**Para ver la lista de todas las unidades de informes alternativas en un país:**
1. Seleccione “Gestión de programas” y luego “Unidad de informes alternativa”.
2. Seleccione el programa del menú desplegable.

**Para agregar unidades de informes alternativas a un país:**
1. Seleccione “Gestión de programas” y luego “Unidad de informes alternativa”.
2. Seleccione el programa del menú desplegable.
3. Haga clic en el botón "Agregar fila" en la esquina inferior derecha de la pantalla, o haga clic derecho en cualquier fila para agregar otra.
4. Ingrese los detalles en la fila recién creada y haga clic en "Enviar".<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Note: the conversion factor can be ‘divide’ or ‘multiply’.</li>
   </ol>
<div style={{textAlign: 'center'}}>

![ARUs](/img/media/image118.png)

Figure 72: ARUs

</div>

*Tenga en cuenta que para cada unidad de planificación agregada a un programa, QAT creará automáticamente una unidad de informes alternativa con un factor de conversión de 1:1. QAT utilizará la descripción de la Unidad de planificación como descripción de la Unidad de informes alternativa.

### A5. Plazos de entrega predeterminados

QAT utiliza seis estados de envío para rastrear la progresión de un envío desde la planificación hasta la recepción del producto. Cada uno de esos pasos en el ciclo de vida del pedido tiene un tiempo de entrega asociado que se utiliza para estimar cuándo debe ocurrir la siguiente acción en cada paso. Los plazos de entrega se expresan en meses y pueden ser meses parciales o incluso cero. El orden de prioridad para la configuración de los plazos de entrega es el siguiente: la configuración de **Información del programa/agente de adquisiciones** tiene la prioridad más alta, seguida de la configuración de **nivel de programa** y luego la configuración de **nivel de dominio**.

<div style={{textAlign: 'center'}}>

<div style={{textAlign: 'center', overflowX: 'auto', margin: '20px 0'}}>
<svg viewBox="0 0 760 80" style={{ minWidth: '600px', width: '100%', maxWidth: '800px', height: 'auto' }}>
  <g transform="translate(10, 10)">
    <g transform="translate(0, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="3,3 98,3 115,30 98,57 3,57" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="55" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Planned</text>
    </g>
    <g transform="translate(125, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Submitted</text>
    </g>
    <g transform="translate(250, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Approved</text>
    </g>
    <g transform="translate(375, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Shipped</text>
    </g>
    <g transform="translate(500, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Arrived</text>
    </g>
    <g transform="translate(625, 0)">
      <polygon points="0,0 100,0 120,30 100,60 0,60 20,30" fill="#fff" stroke="#5b9bd5" strokeWidth="2.5" />
      <polygon points="6,3 98,3 115,30 98,57 6,57 23,30" fill="none" stroke="#5b9bd5" strokeWidth="1.5" />
      <text x="65" y="30" fontFamily="system-ui, sans-serif" fontSize="14px" fontWeight="bold" textAnchor="middle" dominantBaseline="central" fill="#000">Received</text>
    </g>
  </g>
</svg>
</div>

*Figura 73: Estados de envío QAT*

</div>

Existe una lógica de plazos de entrega diferente dependiendo de si la adquisición está etiquetada como internacional o local.

- **Para adquisiciones internacionales:**
  - **Administradores del programa** gestionan los plazos de entrega específicos del programa/país (por ejemplo, tiempo de planificación, tiempos de envío, tiempos de despacho de aduana, períodos de cuarentena, etc.)
  - **Realm Admins** gestiona los plazos de entrega específicos de cada agente de adquisiciones (más información sobre esto en la siguiente tabla).
  - También puede establecer configuraciones de plazos de entrega específicos para programas y/o agentes de adquisiciones por unidad de planificación (PU).
- **Para adquisiciones locales:**
  - El plazo de entrega completo (“planificado hasta recibir”) está determinado por lo que se ingresa en el nivel del programa, por unidad de planificación. Todos los pasos de la contratación local suelen ser más cortos que los de la contratación internacional.

| Plazo de entrega (de – a) | Definición | Configuración |
| :--- | :--- | :--- |
| **Previsto para enviar** | Número de meses desde que se identifica la necesidad de adquisición hasta que se realiza un pedido a un agente de adquisiciones | Siempre configurado a nivel de programa por los administradores del programa |
| **Enviado para aprobado** | Número de meses entre la realización del pedido y su aprobación. Este plazo de entrega se puede definir para cada agente de adquisiciones. | Valor predeterminado establecido a nivel del programa por los administradores del programa. Sin embargo, se sobrescribe mediante la configuración del agente de adquisiciones a nivel de dominio, si el agente de adquisiciones está asignado a un envío. |
| **Aprobado para envío** | Número de meses entre la aprobación del pedido y el envío por parte del agente de adquisiciones/proveedor. Este plazo de entrega se puede definir para cada agente de adquisiciones. | Valor predeterminado establecido a nivel del programa por los administradores del programa. Sin embargo, se sobrescribe mediante la configuración del agente de adquisiciones a nivel de dominio, si el agente de adquisiciones está asignado a un envío. |
| **Enviado a llegada por vía aérea** | Tiempo de tránsito vía aérea desde el despacho del pedido hasta su llegada al puerto de entrada -en número de meses. | Siempre configurado a nivel de programa por los administradores del programa |
| **Enviado a llegada por mar** | Tiempo de tránsito marítimo desde el despacho del pedido vía aérea hasta su llegada al puerto de entrada -en número de meses. | Siempre configurado a nivel de programa por los administradores del programa |
| **Enviado a llegada por carretera** | Tiempo de tránsito por carretera desde el envío del pedido por carretera hasta la llegada al punto de entrega solicitado –en número de meses. | Siempre configurado a nivel de programa por los administradores del programa |
| **Llegó a recibido** | Número de meses desde la llegada al puerto de entrada hasta la recepción en almacén. | Siempre configurado a nivel de programa por los administradores del programa |

*Tabla 8: Plazos de entrega por etapa de envío - definiciones*

**Orden de prioridad para la configuración de plazos de entrega:**
El orden de prioridad para las configuraciones de plazos de entrega es el siguiente:
1. **Información del programa/agente de adquisiciones:** Estas configuraciones tienen la máxima prioridad. Si los plazos de entrega se definen en este nivel, anularán otras configuraciones. Estos se pueden actualizar en la pantalla "Información del programa/agente de adquisiciones".
2. **Nivel de programa:** Si no se define ningún plazo de entrega a nivel de programa/agente de adquisiciones, se utilizarán los valores predeterminados a nivel de programa. Estos se pueden actualizar en las pantallas "Actualizar información del programa" y "Actualizar unidades de planificación".
3. **Nivel de dominio:** Se aplicarán plazos de entrega a nivel de dominio si no se establece un plazo de entrega específico a nivel de programa.

**Ingrese/actualice los plazos de entrega predeterminados a nivel de programa:**
1. Vaya a "Administración del programa" y luego haga clic en "Actualizar información del programa" (consulte [Actualización de la información del programa](#a1-información-del-programa)).
2. Desplácese hacia abajo hasta la segunda mitad de la página donde están todos los campos de plazo de entrega.
3. Ingrese los plazos de entrega predeterminados del programa por paso.
4. Haga clic en "Actualizar" para guardar los cambios.

Consulte [Información del programa/agente de adquisiciones](#a3-programprocurement-agent-specific-information) para obtener instrucciones sobre cómo agregar/editar configuraciones a nivel de programa/agente de adquisiciones.

**Ingrese/actualice los plazos de entrega predeterminados del agente de adquisiciones local:**
1. Vaya a "Gestión de programas" y luego haga clic en "Actualizar unidades de planificación" (consulte [Actualización de unidades de planificación](#a2-planning-units))
2. Seleccione el programa en el menú desplegable de la parte superior izquierda.
3. Ingrese el plazo de entrega del programa predeterminado para adquisiciones locales.
4. Haga clic en "Enviar" para guardar los cambios.


4. Haga clic en "Enviar" para guardar los cambios.

<div style={{textAlign: 'center'}}>

![](/img/media/image119.png)

</div>


### A6. Presupuestos

<div style={{float: 'right', marginLeft: '15px', width: '250px'}}>

![Budget sidebar](/img/media/image120.png)

</div>

Un presupuesto representa una cantidad (estimada o real) de capital durante un período determinado que se gastará en la compra de productos básicos para el programa.

Vaya a "Gestión de programas" y luego a "Presupuesto" para ver una lista de todos los presupuestos de su(s) programa(s).

Un presupuesto se puede etiquetar para uno o varios programas. Por ejemplo, si FSP-Lab-A tiene un presupuesto x, FSP-Lab-B también puede vincular su programa al presupuesto x. Si un programa se desvincula de un presupuesto, el usuario se verá obligado a desetiquetar todos los envíos de ese presupuesto antes de cargar la versión en el servidor. Cualquier administrador de programa que tenga acceso a un programa puede editar un presupuesto asociado con el programa; sin embargo, sólo podrá agregar o eliminar programas a los que tenga acceso.

Para agregar o eliminar programas de un presupuesto, haga clic en el presupuesto y luego seleccione o anule la selección en el primer menú desplegable.

<div style={{textAlign: 'center', clear: 'both'}}>

![Multiple Program](/img/media/image121.png)

Figure 75: Multiple Program ⊗

</div>

Si un presupuesto está resaltado en rojo, indica que el presupuesto pasó la "Fecha de finalización" y/o que el "Cantidad utilizada" superó el "Cantidad del presupuesto".

**Agregar un presupuesto**
1. En la pantalla "Presupuesto", vaya a la esquina superior derecha y haga clic en el icono azul "+". ![icon](/img/media/image122.png)
2. Aparecerá una nueva pantalla titulada "Agregar presupuesto".
3. Ingrese los detalles requeridos.
4. Haga clic en el botón "Enviar".<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** <em>A Program cannot have multiple budgets with the same Funding Source and Budget Display Name. An error message will pop up if this is the case.</em></li>

   </ol>
**Actualizar un presupuesto**
1. Vaya a la pantalla Presupuesto.
2. Haga clic izquierdo en el presupuesto que desea actualizar.
3. Aparecerá una nueva pantalla titulada "Actualizar presupuesto".
4. Actualizar los detalles del presupuesto seleccionado según corresponda.
5. Haga clic en "Enviar" para guardar los cambios.

<div style={{textAlign: 'center'}}>

![Budget Screen](/img/media/image123.png)

Figure 76: Budget Screen

</div>

<br />

<div style={{textAlign: 'center'}}>

![Update Budget](/img/media/image124.png)

Figure 77: Update Budget

</div>

## B. Datos del plan de suministro transaccional

Hay 3 requisitos de datos principales al crear o actualizar un plan de suministro: consumo, inventario y envíos. La siguiente sección definirá cada uno de los elementos de datos y cómo agregar/actualizar esos elementos en QAT.

1. **Consumo:** Stock dispensado por el programa a los clientes.
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Actual Consumption:** The reported quantity of a product dispensed to clients in a given time period for a specific program at a specific supply chain level or combination of levels.</li>
       <li>**Forecasted Consumption:** The quantity predicted to be consumed by clients in a given time period which has been agreed upon by the program.</li>
   </ol>
2. **Inventario:** La cantidad disponible de producto utilizable en un nivel específico de la cadena de suministro o una combinación de niveles, en una fecha específica, para un producto específico.
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Stock count:** A check of how much stock a program has at a particular time in a specific supply chain level or combination of levels.</li>
       <li>**Stock adjustments:** Positive or negative modifications to usable inventory quantities for a specific date, categorized by reason for the adjustment, if possible (e.g. damage, expiry, quarantine, transfer to another implementing partner, etc.). Rebalancing transfers between locations in the same supply chain are excluded.</li>
   </ol>
3. **Envíos:** La cantidad de cantidades financiadas o planificadas que se enviarán en el mes actual o futuro o que se enviaron en un mes anterior o que se recibieron. Expresado en envíos individuales, con número de envío y fecha prevista de recepción.

### B1. Datos de consumo

**Agregar datos de consumo:**
<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<b>Notes on Consumption Data:</b>
<ul style={{paddingLeft: '20px', margin: 0}}>
<li>For each month and each region, user may enter <u>one</u> forecasted consumption record, and <u>one</u> actual consumption record.</li>
<li>Users may <u>not</u> enter actual consumption for months in the future</li>
<li>Users may <u>not</u> edit forecasted consumption more than nine (9) months in the past and may <u>not edit</u> actual consumption more than nine (9) months in the past.</li>
</ul>
</div>

1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en "Datos de consumo".
2. Una vez que aparezca la pantalla “Datos de consumo”, seleccione los filtros deseados usando los menús desplegables en la parte superior.
3. La pantalla mostrará todos los datos actuales para el período seleccionado, las unidades de planificación y otros filtros seleccionados en el paso 2.
4. Para agregar un nuevo registro de consumo, haga clic derecho en cualquier celda y seleccione "Agregar nuevo consumo" O seleccione el botón azul "+ Agregar fila" en la parte inferior.
5. Ingrese la información requerida y haga clic en "Enviar".<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Any cell that is greyed out (e.g. Quantity (PU)) indicates that it is a QAT generated cell and cannot be manually entered/edited.<ol style={{ listStyleType: 'lower-roman' }}><li>Reminder that [Alternate Reporting Unit](#a4-alternate-reporting-units) (ARU) is the product and the unit that the country’s data is reported in. This could be the same as the planning unit or may be different. QAT users can define an alternate reporting unit and a conversion factor (multiply or divide) to the planning unit.</li></ol></li>
       <li>Any cell that is highlighted yellow indicates that it is a required field and has not yet been entered by the user.</li>
   </ol>

<div style={{textAlign: 'center', clear: 'both'}}>

![Add Consumption Data](/img/media/image125.png)

Figure 78: Add Consumption Data

</div>

**Actualizar datos de consumo:**
1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en "Datos de consumo".
2. Una vez que aparezca la pantalla “Datos de consumo”, seleccione los filtros deseados usando los menús desplegables en la parte superior.
3. La pantalla mostrará todos los datos actuales para el período del informe, las unidades de planificación y otros filtros seleccionados en el paso 2.
4. Para actualizar los datos de consumo existentes, el usuario debe hacer doble clic en la(s) celda(s). Un usuario puede actualizar tantas celdas para tantas filas como necesite antes de guardar, siempre que sea para los mismos filtros desplegables seleccionados en el paso 2.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** Users may <u>not</u> edit forecasted consumption more than nine (9) months in the past and may <u>not edit</u> actual consumption more than nine (9) months in the past. The non-editable data is identified by greyed out rows.</li>
   </ol>
5. Una vez guardado un registro de consumo en QAT, no se puede eliminar. Por lo tanto, si un usuario desea eliminar ese registro del plan de suministro, debe desactivarlo marcando la casilla de verificación azul en la columna del extremo derecho o puede reutilizarlo para los datos de un mes diferente.
6. Una vez realizadas las actualizaciones, haga clic en "Enviar".

**Agregar/actualizar detalles del lote:**
Agregar información de lote a los registros de consumo solo se puede aplicar al consumo real.

<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<b>Notes on Inventory Data:</b>
<ul style={{paddingLeft: '20px', margin: 0}}>
<li>For each month, data source, and region, users may enter <u>one</u> inventory record but may enter <u>multiple</u> adjustments.</li>
<li>Users can <u>not</u> enter inventory for months in the future</li>
<li>Users may <u>not</u> edit inventory or adjustment records more than nine (9) months in the past.</li>
</ul>
</div>

1. Haga clic derecho en la fila "Consumo real" y haga clic en "Mostrar información de lote".
2. Aparecerá una pantalla emergente con los detalles del lote para ese registro de consumo real.
3. El usuario puede editar el número y/o la cantidad de lote existente haciendo doble clic en la celda.
4. El usuario también puede agregar nuevos lotes haciendo clic derecho y seleccionando "Agregar nuevo lote" o haciendo clic en el botón "+Agregar fila".
5. La cantidad total de los lotes debe ser igual a la cantidad de ese registro de consumo real.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If the batch quantity/batch quantities are less than the actual consumption quantity, QAT will create a batch, using FEFO to calculate the difference.</li>
       <li>If the batch quantity/batch quantities are greater than the actual consumption quantity, QAT will have a validation error and not let the user submit.</li>
   </ol>
6. Haga clic en "Enviar".

<div style={{textAlign: 'center', clear: 'both'}}>

![Batch Details](/img/media/image126.png)

Figure 79: Batch Details

</div>

### B2. Datos de inventario

**Agregar datos de inventario/ajuste:**
1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en "Datos de inventario".
2. Una vez que aparezca la pantalla "Datos de inventario", seleccione los filtros deseados usando los menús desplegables en la parte superior.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If the user is entering inventory data, select “Inventory” in the Inventory Type drop-down. If the user is entering adjustment data, select “Adjustment”.</li>
   </ol>
3. La pantalla mostrará todos los datos actuales para el período seleccionado, las unidades de planificación y otros filtros seleccionados en el paso 2.
4. Para agregar un nuevo registro de inventario/ajuste, haga clic derecho en cualquier celda y seleccione "Agregar nuevo recuento de inventario"/ "Agregar nuevos ajustes" O seleccione el botón azul "+ Agregar fila" en la parte inferior.
5. Ingrese la información requerida.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Any cell that is greyed out (e.g., Conversion Factor) indicates that it is a QAT generated cell and cannot be manually entered/edited.</li>
       <li>Any cell that is highlighted yellow indicates that it is a required field and has not yet been entered by the user.</li>
       <li>If entering an adjustment, a note in the “Notes” field is required. Notes for inventory records are optional.</li>
   </ol>
6. Haga clic en "Enviar".

<div style={{textAlign: 'center'}}>

![Add Inventory](/img/media/image127.png)

Figure 80: Add Inventory

</div>

**Actualizar datos de inventario/ajuste:**
1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en "Datos de inventario".
2. Una vez que aparezca la pantalla "Datos de inventario", seleccione los filtros deseados usando los menús desplegables en la parte superior.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If the user is updating inventory data, select “Inventory” in the Inventory Type drop-down. If the user is updating adjustment data, select “Adjustment”.</li>
   </ol>
3. La pantalla mostrará todos los datos actuales para el período del informe, las unidades de planificación y otros filtros seleccionados en el paso 2.
4. Para actualizar los datos de inventario/ajuste existentes, el usuario debe hacer doble clic en la(s) celda(s). Un usuario puede actualizar tantas celdas para tantas filas como necesite antes de guardar, siempre y cuando sea para los mismos filtros desplegables seleccionados en el paso 2. Un usuario tampoco puede actualizar los datos de ajuste y de inventario al mismo tiempo sin guardar primero.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** Users may <u>not</u> edit adjustment or inventory records more than nine (9) months in the past. The non-editable data is identified by greyed out rows.</li>
   </ol>
7. Una vez que se ha guardado un registro de inventario en QAT, no se puede eliminar. Por lo tanto, si un usuario desea eliminar ese registro del plan de suministro, debe desactivarlo marcando la casilla de verificación azul en la columna del extremo derecho o puede reutilizarlo para los datos de un mes diferente.
5. Una vez realizadas las actualizaciones, haga clic en "Enviar".

**Agregar/actualizar detalles del lote – Ajustes**
(para obtener más información sobre los cálculos por lotes de QAT, consulte el [Anexo 2: Reglas comerciales](./14-annex-2-business-rules.md) o la Sección 5.E).
1. Haga clic derecho en la fila Ajuste y haga clic en "Mostrar información de lote".
2. Aparecerá una pantalla emergente con los detalles del lote para ese registro.
3. El usuario puede editar el número y/o la cantidad de lote existente haciendo doble clic en la celda.
4. El usuario también puede agregar nuevos lotes haciendo clic derecho y seleccionando "Agregar nuevo lote" o haciendo clic en el botón "+Agregar fila".
5. La cantidad total de los lotes debe ser igual a la cantidad de ese registro de ajuste.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If the batch quantity/batch quantities are less than the adjustment quantity, QAT will create a batch, using Best Case Scenario logic to calculate the difference.</li>
       <li>If the batch quantity/batch quantities are greater than the adjustment quantity, QAT will have a validation error and not let the user submit.</li>
       <li><em>**Note:** there is no user override for auto-adjustments, only manual adjustments.</em></li>
   </ol>
6. Haga clic en "Enviar".

<div style={{textAlign: 'center'}}>

![Batch Details Adjustments Top](/img/media/image128.png)
<br/>
![Batch Details Adjustments Bottom](/img/media/image129.png)

Figure 81: Batch Details

</div>

**Agregar/actualizar detalles del lote – Inventario:**
1. Haga clic derecho en la fila de Inventario y haga clic en "Mostrar información de lote".
2. Aparecerá una pantalla emergente con los detalles del lote para ese registro en la pantalla de planificación de suministro. Consulte la Sección 5.E para obtener detalles sobre cómo actualizar.

### B3. Datos de envío

**Agregar datos de envío:**
1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en "Datos de envío".
2. Una vez que aparezca la pantalla "Datos de envío", seleccione los filtros deseados usando los menús desplegables en la parte superior.
3. La pantalla mostrará todos los datos actuales para el período del informe, las unidades de planificación y otros filtros seleccionados en el paso 2.
4. Para agregar un nuevo registro de envío, haga clic derecho en cualquier celda y seleccione "Agregar nuevo envío" O seleccione el botón azul "+ Agregar fila" en la parte inferior.
5. Ingrese la información requerida.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Any cell that is greyed out (e.g. Planning Unit Cost) indicates that it is a QAT generated cell and cannot be manually entered/edited.</li>
       <li>Any cell that is highlighted yellow indicates that it is a required field and has not yet been entered by the user.</li>
       <li>Certain cells will not be available to enter data into until other cells have been filled in. For example, “Budget” cannot be selected until the user has selected a “Funding Source”.</li>
       <li>“QAT Shipment ID” will display as blank or ‘0’ until the program is uploaded.</li>
       <li>Shipments cannot be marked as ‘Received’ if the Receive Date is in the future.</li>
       <li>In the shipment data screen, the user may select the desired currency from a drop-down list by clicking in the appropriate cell in the currency column. Based on the currency selected, the user will get the catalog price.<ol style={{ listStyleType: 'lower-roman' }}><li>That price can be changed during data entry/updating.</li><li>Freight cost is based on shipment mode and procurement agent but can also be modified manually.</li></ol></li>
       <li>If a shipment row is in red text, this means that the shipment is identified as an “Emergency Shipment”. QAT will automatically mark the shipment as an emergency shipment if the receive date falls inside the predefined lead time, meaning the shipment will most likely need to be expedited. <em>Note: QAT will only auto-flag the emergency shipment when the shipment is first created, but QAT will stop auto-flagging after first time the shipment row is submitted.</em></li>
       <li>If a shipment is highlighted in grey, this means that the shipment is not included in the ending balance of the supply plan. Shipments can be excluded by either changing the status of the shipment to “Cancelled” OR by de-activating the shipment using the blue check box on the far left.</li>
   </ol>
6. Haga clic en "Enviar".

**Actualizar datos de envío:**
1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en "Datos de envío".
2. Una vez que aparezca la pantalla "Datos de envío", seleccione los filtros deseados usando los menús desplegables en la parte superior.
3. La pantalla mostrará todos los datos actuales para el período del informe, las unidades de planificación y otros filtros seleccionados en el paso 2.
4. Para actualizar los datos de envío existentes, el usuario debe hacer doble clic en la(s) celda(s). Un usuario puede actualizar tantas celdas para tantas filas como necesite antes de guardar, siempre que sea para los mismos filtros desplegables seleccionados en el paso 2 (es decir, no puede editar los envíos de un producto y luego editar los envíos de un producto diferente sin guardar primero).
5. Cuando se cambia cualquiera de los siguientes elementos (cantidad, ARU, modo de envío, agente de adquisiciones y costo unitario de planificación), el comportamiento del campo de costo de flete dependerá del estado de la casilla de verificación “Costo de flete calculado automáticamente”:<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Checked:**<ol style={{ listStyleType: 'lower-roman' }}><li>The freight cost will be automatically recalculated based on the program/planning unit settings.</li><li>This calculation uses the formula: Planning Unit cost * Freight %.</li></ol></li>
       <li>**Unchecked:**<ol style={{ listStyleType: 'lower-roman' }}><li>The freight cost cell with have a red triangle in the right corner appear recommending the user to update the freight cost the first time the checkbox is unchecked.</li><li>To facilitate manual entry, the user can input a formula directly into the cell by typing an ‘=’ first. The formula will disappear upon saving, but the resulting value will remain. The user can also input a number directly.</li></ol></li>
   </ol>
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

<div style={{textAlign: 'center'}}>

![Shipment Batch Details](/img/media/image131.png)

*Figure 82: Shipment Batch Details*

</div>

**Calculadora de orden estratégico:**

Para combinaciones específicas de unidad de planificación y agente de adquisiciones, puede aparecer una **calculadora de pedidos estratégicos** para el usuario al ingresar la cantidad de un envío. El propósito de la calculadora es asesorar a los usuarios sobre la cantidad de pedido adecuada para un envío en función de uno o más de los siguientes elementos: a) Cantidad mínima de pedido (MOQ); b) Carga del contenedor; c) palet Euro 1; d) Palet Euro 2. La calculadora ayudará a los usuarios a planificar los envíos para maximizar la eficiencia de la logística de entrega (por ejemplo, utilizar un contenedor lleno en lugar del 20 % del contenedor). Los productos estratégicos los define a nivel de dominio una aplicación o un administrador de dominio. Para obtener más información sobre cómo definir productos estratégicos, consulte la [sección sobre cómo agregar unidades de planificación para agentes de adquisiciones] (./13-annex-1-application-realm-administrator-manual.md#k-procurement-agent).
1. Para ver la Calculadora de cantidad de un producto estratégico, haga doble clic en la celda debajo de la columna "Cantidad del pedido" y aparecerá la pantalla "Calculadora de cantidad". <em>Nota: Si el producto es un producto no estratégico, el usuario puede modificar directamente la cantidad del pedido en la celda después de hacer doble clic y no aparecerá una ventana emergente.</em>
2. La cantidad original del envío aparecerá en la celda "Cantidad de pedido manual".
3. Si no desea utilizar la calculadora estratégica y desea utilizar la "Cantidad de pedido manual" original, seleccione "Ninguno" en el menú desplegable de "Embalaje basado en" y haga clic en "Guardar cantidad de envío".
4. Si deseas utilizar la calculadora estratégica:<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Select how you wish to use the calculator by choosing an option from the “Packaging Based On” drop-down as well as the “Rounding Option” drop-down.</li>
       <li>Depending on your selections in step 4a, the quantity in “Final Order Quantity” cell will show you QAT’s calculated shipment quantity. The bottom table summarizes the key information around the different packaging modes.</li>
       <li>After confirming you are happy with the Final Order Quantity, click “Save Shipment Quantity”.</li>

   </ol>
<div style={{textAlign: 'center'}}>

![Strategic Order Calculator](/img/media/image131.png)

*Figure 83: Strategic Order Calculator*

</div>

**Ver fechas de envío:**
Se puede ver la estimación de cada estado y las fechas reales se pueden ingresar manualmente en la pantalla Envío. Esto permitirá al usuario identificar si el envío está a tiempo o retrasado/adelantado en función de los plazos de entrega. El usuario también puede usar esta pantalla para comparar las fechas reales con las fechas estimadas de ese envío y usar esa información para actualizar los tiempos de entrega que pueden no ser precisos.
1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en "Datos de envío".
2. Una vez que aparezca la pantalla "Datos de envío", seleccione los filtros deseados usando los menús desplegables en la parte superior.
3. La pantalla mostrará todos los datos actuales para el período del informe, la unidad de planificación y otros filtros seleccionados en el paso 2.
4. Haga clic derecho en el envío cuyas fechas desea ver y seleccione "Mostrar fechas de envío". Aparecerá una pantalla emergente con la etiqueta "Fechas de envío".
5. La fila denominada "Estimada" de la pantalla "Fechas de envío" mostrará una fecha para cada estado del envío según los plazos de entrega ingresados ​​para el programa, así como la fecha de recepción estimada. El usuario solo puede editar la fecha de recepción estimada.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If a user changes the estimated receive date, the other estimated dates will also change based on the program’s lead times.</li>
   </ol>
6. La fila denominada "Actual" permitirá al usuario ingresar la fecha real en que ocurrió cada estado para ese envío. Si una celda aparece atenuada en esta fila, significa que el envío aún no ha alcanzado ese estado y no se puede ingresar una fecha.
7. Si el usuario realiza un cambio en la fecha de recepción estimada o en una de las fechas reales, haga clic en "Guardar fechas de envío".

<div style={{textAlign: 'center'}}>

![Show Shipment Dates](/img/media/image131.png)

*Figure 84: Show Shipment Dates*

</div>

### B4. Vinculación de envíos de ERP

La funcionalidad de vinculación de envíos de ERP permite a los planificadores de suministros vincular envíos seleccionados (actualmente GHSC-PSM) con el sistema ERP del agente de adquisiciones correspondiente (actualmente ARTMIS). Una vez que un envío está vinculado en el plan de suministro, todos los detalles del pedido (estado, fecha de recepción, costos, cantidad, lotes, etc.) coincidirán con los que están en el ERP y el usuario ya no necesitará actualizar manualmente el envío. Si el empaque del producto en el ERP no coincide con el empaque de la unidad de planificación en QAT, el usuario tendrá la capacidad de corregirlo a través de un atributo de factor de conversión en QAT. El usuario podrá desvincular el envío si desea realizar un seguimiento manual. Los detalles de envío para estos envíos vinculados aparecerán en QAT (entrada de datos de envío, planificación de suministro, informes, etc.). El usuario recibirá una alerta si se realizan cambios clave en el ERP, como la cancelación de un pedido o el cambio del SKU de un producto. Los usuarios solo podrán etiquetar envíos que hayan pasado la aprobación de la fuente de financiamiento en ERP.

Al administrar la vinculación de envíos de ERP, los usuarios seleccionarán las opciones de menú "Vincular envíos de ERP" o "Notificaciones de envío de ERP". Dentro de la pantalla ‘Link ERP Shipments’ hay 3 subpantallas:
1) **No vinculado (QAT)**: utilice esta pantalla para vincular envíos QAT con pedidos de ERP por primera vez. Los usuarios verán una lista de envíos QAT y, cuando un usuario haga clic en un único envío QAT, podrá elegir con qué pedidos de ERP se debe vincular ese envío QAT.
2) **Vinculado**: los usuarios verán una lista de los envíos actualmente vinculados y podrán actualizar el factor de conversión o las notas de los envíos ya vinculados, agregar líneas ERP a envíos QAT ya vinculados o desvincular líneas ERP del envío QAT.
3) **No vinculado (ERP)**: utilice esta pantalla para vincular pedidos de ERP a QAT por primera vez. Los usuarios verán una lista de envíos de ERP y, cuando un usuario haga clic en un único envío de ERP, podrá elegir con qué envío QAT se debe vincular ese envío de ERP. Para cualquier pedido que esté en el ERP y que aún no esté en QAT, puede crear un nuevo envío QAT en esta pantalla.

<div style={{textAlign: 'center'}}>

![ERP Linking Screens](/img/media/image133.png)

*Figure 85: ERP Linking Screens*

</div>

**Reglas para la vinculación de envíos de ERP:**

A continuación se detallan las reglas para la vinculación de envíos de ERP. El botón de detalles en la esquina superior derecha de la pantalla "Vincular envíos de ERP" resumirá estas reglas.
1. La vinculación de ERP solo se puede editar para las versiones locales descargadas. Las pantallas de vinculación de ERP mostrarán las versiones del servidor, pero esos datos son de solo lectura. Para guardar los cambios de vinculación, el usuario debe cargar esa versión.
2. Actualmente, los envíos QAT solo se pueden vincular si el agente de adquisiciones es GHSC-PSM.
3. Los envíos QAT no se pueden vincular si se encuentran en estado de planificado, cancelado o sugerido.
4. Los envíos QAT inactivos no se pueden vincular.
5. Los envíos QAT en estado "recibido" solo se pueden vincular si la fecha de recepción se encuentra dentro de los últimos 6 meses.
6. Los pedidos de ERP solo se pueden vincular si ya pasaron el estado de aprobación de la fuente de financiamiento (por ejemplo, aprobado por USAID).
7. Los pedidos de ERP en estado "entregado" solo se pueden vincular si la fecha de entrega cae dentro de los últimos 6 meses.
8. La fecha de recepción del ERP utiliza la lógica: 1) Fecha de entrega real 2) Fecha de entrega estimada 3) Fecha de entrega acordada 4) Fecha de entrega solicitada. Por lo tanto, si el número 1 no está disponible, QAT utilizará el número 2. Si el n.º 2 no está disponible, QAT utilizará el n.º 3 y si el n.º 3 no está disponible, QAT utilizará el n.º 4.

**No vinculado (QAT):**

Los planificadores de suministros utilizan esta pantalla para vincular los envíos QAT con los pedidos de ERP. A continuación se detallan los pasos sobre cómo vincular un envío QAT con uno o varios pedidos de ERP:
1. Seleccione el botón de opción en la parte superior con la etiqueta "No vinculado (QAT)".
2. Seleccione el programa y la(s) unidad(es) de planificación desde donde desea elegir el envío QAT. Una vez seleccionado, aparecerá una lista de envíos QAT. La vinculación de ERP solo se puede realizar en versiones locales; sin embargo, los envíos vinculados se pueden ver en versiones de servidor.
3. Haga clic izquierdo en un solo envío QAT. Aparecerá una ventana emergente llamada "Buscar envíos vinculados a ERP". Esta ventana permitirá al usuario elegir con qué pedidos de ERP se debe vincular el envío QAT.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>The top half of the window will show the QAT shipment details. This information is non-editable.</li>
       <li>The middle half of the window will show 2 dropdowns that will allow the user to filter the list of ERP orders to link the QAT shipment with.</li>
       <li>The bottom half of the window will list all ERP shipments based on the dropdowns in the middle section. This is where the user will link 1 or more orders as well as provide the Alternate Reporting Unit (ARU) and note (optional). The ARU will automatically populate the conversion factor.<ol style={{ listStyleType: 'lower-roman' }}><li>**To change/add a conversion factor, the user can do so in the ‘Alternate Reporting Unit’ screen.**</li></ol></li>
   </ol>
4. En la sección central, el usuario puede filtrar los envíos de ERP seleccionando la unidad de planificación de ERP, el RO/N.º de pedido o ambos. QAT completará previamente el menú desplegable RO/N.º de pedido una vez que aparezca esta ventana seleccionando el N.º de pedido del Agente de procesamiento del envío de QAT. Si este campo está en blanco, QAT mostrará un mensaje debajo de ambos menús desplegables en rojo que muestra "Complete la unidad de planificación ERP o RO/Nº de pedido para completar los datos".
5. Para vincular un envío de ERP, el usuario marcará la casilla en la columna del extremo izquierdo que dice "¿Enlace?". Una vez que el usuario haga esto, se le pedirá que ingrese el ARU.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If a user wants to link multiple ERP lines to the same QAT shipment, he/she should check the box for multiple rows.</li>
       <li>If a user wants to link multiple QAT shipments to 1 or multiple ERP lines, he/she should check the box at the top that says ‘Show all shipments for ______’ and then select each of the QAT shipments to link.</li>
   </ol>
6. El factor de conversión es útil cuando la unidad de planificación QAT y el producto ERP son diferentes (paquete de 10 barras de chocolate versus paquete de 100 barras de chocolate). El factor de conversión se utiliza para calcular cuál es la cantidad de envío QAT convertida. La cantidad de envío QAT convertida es la cantidad del pedido que se utilizará en su plan de suministro para el envío vinculado.

<div style={{textAlign: 'center'}}>

![Conversion Factor Formula](/img/media/image134.png)

</div>

7. Si hay una nota en el envío QAT, esta se trasladará a cada uno de los pedidos de ERP cuando se vincule. En esta ventana emergente, el usuario puede editar o eliminar esa nota.
8. La parte inferior de la ventana mostrará cuál es el pedido de cantidad QAT original y cuál será la nueva cantidad QAT convertida.

<div style={{textAlign: 'center'}}>

![ERP Converted Quantity](/img/media/image135.png)

*Figure 86: ERP Converted Quantity*

</div>

9. Por último, haga clic en "Vincular envío".

**No vinculado (ERP):**

Los planificadores de suministros utilizan esta pantalla para vincular los pedidos de ERP a QAT por primera vez. Para cualquier pedido que esté en el ERP y que aún no esté en QAT, puede crear un nuevo envío QAT en esta pantalla. A continuación se detallan los pasos sobre cómo vincular un pedido de ERP con un envío QAT:
1. Seleccione el botón de opción en la parte superior con la etiqueta "No vinculado (ERP)".
2. Seleccione el país Y la categoría de unidad de planificación o unidad de planificación desde la que desea elegir el pedido de ERP. Una vez seleccionado, aparecerá una lista de pedidos de ERP.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note: This list is showing ERP data whereas the Not Linked (QAT) screen shows QAT data.**</li>
   </ol>
3. Haga clic izquierdo en un único pedido de ERP. Aparecerá una ventana emergente llamada "Buscar envíos vinculados a ERP". Esta ventana permitirá al usuario vincular 1 o más pedidos de ERP con un envío QAT nuevo o preexistente.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>The top half of the window will show the QAT shipment details. This area will allow the user to either select a pre-existing QAT shipment or create a new one. Steps 4 and 5 will detail how to do so.</li>
       <li>The middle half of the window will show 2 dropdowns that will allow the use to filter the list of ERP orders to link the QAT shipment with.</li>
       <li>The bottom half of the window will list all ERP shipments based on the dropdowns in the middle section. This is where the user will link 1 or more orders as well as provide the conversion factor and note. This section is pre-populated based on the ERP order number that was selected on the previous screen.</li>
   </ol>
4. Para seleccionar un envío QAT existente, haga clic en el botón "Seleccionar envío existente" en la sección superior.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Select the program that you want to search the QAT shipment(s) from. The dropdown will be filtered to show only the country that was selected in step 2.</li>
       <li>Next, either search the list of QAT shipments by planning unit (default) or by QAT shipment ID. If you want to search by QAT shipment ID, you will need to check the box that is labeled ‘Filter by QAT shipment id?’. To go back to searching by planning unit, you will uncheck the box.</li>
       <li>Once you find the desired QAT shipment, select the button in the far-left column labeled ‘Select shipment id’.</li>
   </ol>
5. Para crear un nuevo envío QAT, haga clic en el botón "Crear nuevo envío" en la sección superior.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>The user will need to fill in 4 dropdowns (Program, Planning Unit, Funding Source, Budget) to provide required information for creating the shipment. The rest of the shipment details will come from the ERP order that is selected in step 7.<ol style={{ listStyleType: 'lower-roman' }}><li>The program dropdown is filtered to show only the country that was selected in step 2.</li><li>The budget dropdown is filtered based on the selection in the funding source dropdown.</li><li>If there is no applicable budget, the user will need to leave the screen and add a budget in master data. If the user adds a budget, he/she must master data sync before seeing that option appear in this screen.</li></ol></li>
   </ol>
6. En la sección central, QAT completará previamente el menú desplegable RO/Nº de pedido una vez que aparezca esta ventana según el pedido de ERP seleccionado realizado en el paso 3.
7. Para vincular un envío de ERP, el usuario marcará la casilla en la columna del extremo izquierdo que dice "¿Enlace?". Una vez que el usuario haga esto, se le pedirá que ingrese el ARU.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>If a user wants to link multiple ERP lines to the same QAT shipment, he/she should check the box for multiple rows.</li>
       <li>If a user wants to link multiple QAT shipments to 1 or multiple ERP lines, he/she should check the box at the top that says ‘Show all shipments for ______’ and then select each of the QAT shipments to link.</li>
   </ol>
8. El factor de conversión es útil cuando la unidad de planificación QAT y el producto ERP son diferentes (paquete de 10 barras de chocolate versus paquete de 100 barras de chocolate). El factor de conversión se utiliza para calcular cuál es la cantidad de envío QAT convertida. La cantidad de envío QAT convertida es la cantidad del pedido que se utilizará en su plan de suministro para el envío vinculado.

<div style={{textAlign: 'center'}}>

![Conversion Factor Formula](/img/media/image134.png)

</div>

9. El usuario puede agregar una nota al envío editando la columna del extremo derecho denominada "Notas".
10. La parte inferior de la ventana mostrará cuál es el pedido de cantidad QAT original y cuál será la nueva cantidad QAT convertida.
11. Por último, haga clic en "Vincular envío".

<div style={{textAlign: 'center'}}>

![Create New Shipment](/img/media/image136.png)

*Figure 87: Create New Shipment*

</div>

**Pantalla vinculada:**

Los planificadores de suministros utilizan esta pantalla para ver la lista de envíos de ERP actualmente vinculados y actualizar la Unidad de informe alternativa (ARU) o notas, agregar pedidos de ERP a envíos QAT ya vinculados o desvincular líneas de ERP del envío QAT.
1. Seleccione el botón de opción en la parte superior con la etiqueta "Vinculado".
2. Seleccione el programa y las unidades de planificación para las que desea ver la lista de envíos vinculados. Una vez seleccionado, aparecerá una lista de envíos. La información de estos envíos se extrae del ERP.
3. Para realizar cualquiera de las actualizaciones enumeradas en el paso 2, haga clic izquierdo en un solo envío.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>To edit ARU and/or notes, double-click on the cell and type or select from dropdown.</li>
       <li>To de-link an ERP order, uncheck the box in the ‘Link?’ column.</li>
       <li>To add an ERP order, check the box for that order under ‘Link?’ column. The user can clear the search dropdowns in the middle section to look up a different planning unit or order number and the originally linked orders will remain linked.</li>
   </ol>
4. Los usuarios también podrán ver los detalles del historial de pedidos desde el ERP. Para hacerlo, desde la pantalla original "Vinculado", haga clic derecho en un solo envío y haga clic en "Ver historial de pedidos de ERP". Aparecerá una ventana emergente con la etiqueta "Historial de pedidos de ERP". Esta pantalla mostrará cualquier detalle que haya cambiado con el tiempo en el pedido de ERP. Cada fila indica que una o más columnas han cambiado. La columna más alejada a la derecha, denominada "Datos recibidos el", es cuando QAT recibió el registro.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>To view batch details, click on the icon.</li>

       <li>**Note:** Certain fields from the ERP are not captured on this screen so there may be some instances where 1 or more rows have the same details. This means that a column in the backend was changed.</li>
   </ol>

**Nota:** Una vez que haya vinculado los envíos QAT con los pedidos de ERP, los datos se reflejarán en su plan de suministro sin tener que sincronizar los datos maestros. Los datos del ERP recién vinculados se reflejarán en los informes locales, en la pantalla de planificación de suministros y en la pantalla de ingreso de datos de envío. El usuario necesita cargar una versión en el servidor para que otros usuarios puedan ver estos cambios.

Para ver los envíos vinculados a ERP en la pantalla de ingreso de datos de envío, el usuario debe seleccionar "Envíos vinculados a ERP" en el menú desplegable Tipo de envío. El usuario puede mostrar solo esta opción o combinarla con los envíos manuales para mostrar todos los envíos. Los envíos vinculados al ERP aparecerán atenuados para indicar que no son editables.

<div style={{textAlign: 'center'}}>

![View ERP Shipments in Data Entry](/img/media/image138.png)

*Figure 88: View ERP Shipments in Data Entry*

</div>

En la pantalla de planificación de suministro, los envíos vinculados a ERP tendrán un ícono de vínculo en la parte superior izquierda de la celda. El usuario puede hacer clic en un envío específico para ver los detalles, pero esas celdas también aparecerán atenuadas para indicar que no son editables. Sin embargo, el usuario aún puede hacer clic derecho en los detalles del envío para ver las fechas de envío y la información del lote.

<div style={{textAlign: 'center'}}>

![View ERP Shipments in Supply Plan](/img/media/image139.png)

*Figure 89: View ERP Shipments in Supply Plan*

</div>

**Notificaciones de envío de ERP**

El propósito de la pantalla "Notificaciones de envío de ERP" es alertar a los planificadores de suministro sobre cualquier cambio clave realizado en los envíos vinculados a ERP, como la cancelación de un pedido o el cambio de SKU de un producto. Se alentará a los planificadores de suministros a "abordar" cada una de las notificaciones para confirmar que están al tanto del cambio y las implicaciones que tiene en el plan de suministro. Para cambios de producto, el usuario volverá a confirmar el factor de conversión, cambie o no.

En la parte superior de la pantalla, hay un ícono ![Truck Icon](/img/media/image140.png). Este icono mostrará un número rojo que indica cuántas notificaciones sin dirección hay en la pantalla de notificaciones de envío del ERP. Si no hay ningún número rojo, significa que no hay ninguno.

Para acceder a la pantalla "Notificaciones de envío de ERP", haga clic en el ícono del camión en la parte superior de QAT o seleccione "Notificaciones de envío de ERP" en "Datos del plan de suministro" en el menú de la barra lateral izquierda.

Para ver las notificaciones, el usuario deberá seleccionar entre los 3 menús desplegables (Programa, Unidad de planificación, Dirigida). El usuario también tiene la opción de seleccionar directamente desde la tabla encima de los menús desplegables. Cuando un usuario hace clic izquierdo en una fila de la tabla, los 3 menús desplegables se completarán automáticamente según el programa que el usuario seleccionó. El menú desplegable de unidades de planificación se completará con todas las unidades de planificación y el menú desplegable dirigido seleccionará "No abordado".

<div style={{textAlign: 'center'}}>

![ERP Shipment Notifications Filtering](/img/media/image141.png)

*Figure 90: ERP Shipment Notifications Filtering*

</div>

Para enviar una notificación, el usuario debe marcar la casilla en la columna "¿Abordado?" y luego presionar el botón "Enviar". Si el usuario se dirige a una notificación de cambio de producto de ERP, primero debe ingresar el factor de conversión. El campo del factor de conversión no se puede editar hasta que se marca la casilla con la dirección.

Al igual que en la pantalla "Vinculado", el usuario puede ver el historial de pedidos de ERP. Para hacerlo, haga clic derecho en la fila de notificación y haga clic en "Ver historial de pedidos de ERP". Consulte la sección Pantalla vinculada para obtener más información.

## C. Importación de datos para la planificación de suministros

### C1. Plantillas de importación de datos del plan de suministro en Excel

<div style={{ border: '2px solid black', padding: '15px', float: 'right', width: '35%', marginLeft: '15px', marginBottom: '15px', backgroundColor: '#fcfcfc' }}>

**Notes on Excel Templates:**<br/>
Each of the four data types (Inventory, Adjustment, Consumption and Shipment) have their own Excel template so it is important that you click on “Download Template” from the proper screen. For inventory and adjustment, make sure the drop-down menu has selected the type of data you want the template for.

</div>

Los datos de consumo, inventario y envío se pueden ingresar a través de las pantallas de ingreso de datos de QAT, a través de la pantalla de Planificación de suministro o mediante Quantimed Import (solo consumo pronosticado). QAT también brinda a los usuarios la posibilidad de ingresar estos datos directamente desde Microsoft Excel. Este método de entrada de datos está destinado a entradas masivas que contienen una gran cantidad de datos. Los pasos a continuación mostrarán cómo ingresar datos de Excel en QAT:

1. En la barra lateral del menú, vaya a "Datos del plan de suministro" y haga clic en el tipo de datos que desea ingresar (por ejemplo, "Datos de consumo").

<div style={{textAlign: 'center', margin: '20px 0'}}>

![Download Template Location](/img/media/image142.png)

</div>

2. Una vez en la pantalla de entrada de datos, vaya a la esquina superior derecha y haga clic en "Descargar plantilla".
3. Se descargará un archivo de Microsoft Excel directamente a la carpeta **'Descargas'** de su computadora.
4. Vaya a la carpeta Descargas de su computadora y abra el archivo Excel. El formato del nombre debe ser **ConsumptionDataEntryTemplate.xlsx** y la primera parte depende del tipo de datos que ingresa.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li><u><i>Each of the four data types (Inventory, Adjustment, Consumption and Shipment) have their own Excel template so it is important that you click on “Download Template” from the proper screen. For inventory and adjustment, make sure the drop-down menu has selected the type of data you want the template for.</i></u></li>
   </ol>
5. Una vez en la plantilla de Excel, haga clic en "Habilitar edición" en la parte superior si se le solicita.

<div style={{textAlign: 'center'}}>

![Enable Editing](/img/media/image144.png)

*Figure 91: Enable Editing*

</div>

<div style={{ float: 'right', marginLeft: '20px', marginBottom: '15px', width: '20%' }}>

![Downloads Folder Sidebar](/img/media/image143.png)

</div>

6. Ingrese datos para todos los campos obligatorios.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Any cell highlighted in grey (e.g. Conversion Factor) is non-editable and does not need to be filled in.</li>
       <li>Certain fields (e.g. Data Source) will have drop down menus pre-populated from QAT. Therefore, it is important to download a new template if it has been a while since the last time the user used the template.</li>
       <li>Certain fields have built in data validations (e.g. letters cannot be entered in cost cells). If the validation is not met, a pop-up error message will appear.</li>

   </ol>
<div style={{textAlign: 'center'}}>

![Excel Template](/img/media/image145.png)

*Figure 92: Excel Template*

</div>

7. Una vez que se hayan ingresado todos los datos en la plantilla de Excel, vuelva a abrir la ventana QAT.
8. Vaya a la pantalla de Entrada de Datos (Consumo, Inventario, Ajuste, Envío).
9. Haga clic en el botón azul “+Agregar fila” en la parte inferior.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** You only need to add 1 row in QAT regardless of how many rows there are in the Excel template.</li>
   </ol>
10. En la plantilla de Excel, seleccione todos los datos y presione Ctrl + C en su teclado para copiar los datos.
11. Vaya a la fila agregada en QAT, haga clic izquierdo en la celda más a la izquierda de esa fila y presione Ctrl + V en su teclado para pegar los datos.
12. QAT creará automáticamente nuevas filas para los datos que se importan desde Excel.
13. Haga clic en "Enviar".

### C2. Importación de pronósticos cuantificados

Quantimed es un software diseñado para facilitar el proceso de determinación de las cantidades de medicamentos e insumos médicos necesarios para un programa de salud. El resultado de Quantimed son los datos de consumo previstos de los programas de salud. Esos datos de consumo previstos pueden ser un aporte clave para los planes de suministro de los usuarios de QAT. QAT permite a los usuarios importar pronósticos Quantimed a QAT para incluirlos en su plan de suministro.

<div style={{textAlign: 'center'}}>

![Quantimed Sidebar](/img/media/image146.png)

</div>

**Paso 1: Importar datos Quantimed a QAT**
1. Vaya a "Datos del plan de suministro" en el menú de la barra lateral.
2. Seleccione "Importación cuantificada"
3. Importar archivo de datos Quantimed<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>Choose the Quantimed .xml forecast file from your local computer system.</li>
       <li>Select the QAT program that you want the Quantimed data to import into.</li>
       <li>Click on “Import”.</li>

   </ol>
<div style={{textAlign: 'center'}}>

![Quantimed File Import](/img/media/image147.png)

*Figure 93: Quantimed File Import*

</div>

**Paso 2: Unidades de planificación del mapa**
1. Para asignar un producto Quantimed a una unidad de planificación QAT, seleccione la unidad de planificación QAT usando el menú desplegable.
2. Si no desea importar un producto Quantimed específico, seleccione la opción "No importar" para esa fila.
3. Si no hay una unidad de planificación QAT asociada con el producto Quantimed, el menú desplegable mostrará "Unidad de planificación no encontrada". Deberá seleccionar manualmente una unidad de planificación del menú desplegable o volver al programa y agregar una unidad de planificación para ese producto Quantimed antes de continuar. No puede hacer clic en "Siguiente" si una o más de las celdas dicen "Unidad de planificación no encontrada".<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>**Note:** to minimize instances where a planning unit is not found, it is recommended that Quantimed users select products from the GHSC-PSM product catalog .xml file.</li>
   </ol>
4. Una vez que cada fila tenga una unidad de planificación seleccionada o diga "No importar", haga clic en "Siguiente" en la parte inferior de la pantalla.

<div style={{textAlign: 'center'}}>

![Map Planning Units](/img/media/image148.png)

*Figure 94: Map Planning Units*

</div>

**Paso 3: Región**
1. En este paso, seleccione la región a la que desea importar los datos de consumo previsto. Si solo hay una región, debe seleccionar esa región para continuar.
2. Luego, ingrese el porcentaje de esos datos de consumo que desea importar a QAT. Este porcentaje deberá oscilar entre 0-100% y se aplicará a todas las unidades de planificación previamente seleccionadas.
3. Haga clic en "Siguiente".

**Paso 4: Mes de Consumo**
1. Seleccione el rango de fechas para los datos de Quantimed que desea importar a QAT.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>The period you select is the period of data that you will be able to import and will apply to all planning units previously selected.</li>
   </ol>
2. Haga clic en "Siguiente".

<div style={{textAlign: 'center'}}>

![Consumption Month Screen](/img/media/image149.png)

*Figure 95: Consumption Month Screen*

</div>

**Paso 5: Importar datos**
1. El último paso es confirmar los datos que se importarán de Quantimed a QAT según lo que se ingresó en los pasos 1 a 4.<br />
   <ol style={{ listStyleType: 'lower-alpha' }}>
       <li>“Quantimed Forecasted Consumption” is the amount that is being pulled in from Quantimed for the associated product and month-year.</li>
       <li>“Converted Quantimed Forecasted Consumption” is the amount that will be pulled into QAT for the associated product and month-year after applying the import percentage and conversion factor.</li>
       <li>“Current QAT Forecasted Consumption” is the forecasted consumption amount currently in QAT for that planning unit and month-year. Once you import the Quantimed data, this amount will be overwritten by the “Converted Quantimed Forecasted Consumption” amount.</li>
   </ol>
2. Esta pantalla mostrará todos los datos que se importarán a QAT. Si no desea importar ciertos registros, haga clic en la casilla de verificación en la columna "¿Importar?" en el extremo derecho. Esto evitará que QAT importe los datos de Quantimed y mantendrá el consumo previsto de QAT actual para esa unidad de planificación y mes-año.
3. Haga clic en "Enviar" para importar los datos.

<div style={{textAlign: 'center'}}>

![Confirm Data Import Screen](/img/media/image150.png)

*Figure 96: Confirm Data Import Screen*

</div>

### C3. Importación de pronóstico QAT

**<u>Propósito</u>:** Permitir a los usuarios importar pronósticos creados por QAT en programas de planes de suministro. Los pronósticos solo están disponibles para importar si 1) se cargan como una versión final y 2) hay un pronóstico seleccionado para cada unidad de planificación.

**<u>Usando esta pantalla</u>:**

**(Paso 1)**

- Seleccione desde qué programa de pronóstico importar (solo están disponibles los pronósticos finales)
- Seleccione a qué programa de plan de suministro importar. Sólo se pueden utilizar versiones del plan de suministro local. Para descargar un programa, vaya a la pantalla "Descargar/Eliminar programa" en "Administración de programas".
  - Seleccione el rango de fechas de los datos de pronóstico a importar, que deben estar dentro del período de pronóstico.
- En la tabla que aparece, seleccione y mapee las unidades de planificación.
  - Para cada Unidad de Planificación de Previsión, QAT requiere una Unidad de Planificación de Plan de Suministro y un factor de conversión correspondientes. QAT asigna automáticamente coincidencias exactas de unidades de planificación, pero los usuarios pueden anular tanto la asignación de unidades de planificación como el factor de conversión.
  - No es necesario importar todas las unidades de planificación de pronóstico; sin embargo, todas las unidades de planificación de pronóstico deben tener una selección en la tabla de mapeo. Puede seleccionar manualmente "No importar" para cada PU de pronóstico que no desee importar o puede hacer clic en la casilla de verificación "No importar todas las PU no asignadas", lo que permitirá una selección masiva de No importar para todas las PU no asignadas.
  - Si para una PU no se seleccionó ningún pronóstico, aparecerá en gris con “static.importintoSP.forecastBlank”
  - Si una unidad de planificación no aparece en el menú desplegable, deberá agregarla al programa del plan de suministro en la pantalla "Actualizar unidades de planificación".

<div style={{textAlign: 'center'}}>

![Forecast Import Screen](/img/media/image151.png)

*Figure 97: Forecast Import Screen*

</div>

**(Paso 2)**

Para cada región de pronóstico, ingrese cuánto (%) del pronóstico de esa región importará y a qué región se importará el consumo pronosticado. A continuación se muestran algunos casos de uso:
- Previsión nacional al plan nacional de suministro.

  | Región (es) de pronóstico | % de Previsión | Región del Plan de Abastecimiento |
  | :--- | :--- | :--- |
  | Nacional | 100 | Nacional |

- Previsión multirregional para plan de suministro multirregional

  | Región (es) de pronóstico | % de Previsión | Región del Plan de Abastecimiento |
  | :--- | :--- | :--- |
  | Norte | 100 | Norte |
  | Este | 100 | Este |
  | Sur | 100 | Sur |

- Previsión multirregional para el plan de suministro nacional –

  | Región (es) de pronóstico | % de Previsión | Región del Plan de Abastecimiento |
  | :--- | :--- | :--- |
  | Norte | 100 | Nacional |
  | Este | 100 | Nacional |
  | Sur | 100 | Nacional |

- Pronóstico nacional para el plan de suministro multirregional: tenga en cuenta que el proceso de importación debe repetirse para cada región del plan de suministro.

  | Región (es) de pronóstico | % de Previsión | Región del Plan de Abastecimiento |
  | :--- | :--- | :--- |
  | Nacional | 20 | Norte |

  <br />

  | Región (es) de pronóstico | % de Previsión | Región del Plan de Abastecimiento |
  | :--- | :--- | :--- |
  | Nacional | 45 | Sur |

  <br />

  | Región (es) de pronóstico | % de Previsión | Región del Plan de Abastecimiento |
  | :--- | :--- | :--- |
  | Nacional | 35 | Este |

**(Paso 3)**

QAT enumerará cada registro de pronóstico que se importará (una fila para cada combinación de unidad de planificación, región y mes).
- QAT calcula el Consumo Pronosticado a importar de la siguiente manera:

  _Consumo previsto (Módulo Pronóstico)_ &nbsp;&nbsp;x&nbsp;&nbsp; _% del pronóstico_ &nbsp;&nbsp;x&nbsp;&nbsp; _Factor de conversión (previsión a plan de suministro)_ &nbsp;&nbsp;=&nbsp;&nbsp; _Consumo previsto redondeado* convertido_

Por ejemplo:
  - Una previsión nacional que se dividirá en dos regiones del 50% cada una.
  - La Unidad de Planificación de Previsión está en paquetes de 3 y la Unidad de Planificación del Plan de Suministro está en paquetes de 1 (Factor de conversión = 3)
  - La previsión nacional para el Mes N era 100 (paquetes de 3)
  - Se importará un pronóstico de 100 x 50 % x 3 = 150,00 redondeados (paquetes de 1) a cada región para el mes N
- **\*Método de redondeo:** Debido a que la planificación de suministro de QAT requiere números enteros sin decimales, QAT convierte el consumo previsto en números enteros redondeando hacia abajo y sumando los "residuales" a lo largo del tiempo. Cada mes, QAT suma el total de residuos del mes pasado y el pronóstico de este mes, antes de redondear hacia abajo, y cualquier residuo no redondeado hacia abajo se suma a un total residual acumulado, llamado Total Acumulado. De esta manera, no se pierden cantidades durante el proceso de redondeo.
  - Fórmulas:
    - **Total acumulado del mes N** = (Residual del mes N - 1) + Pronóstico convertido del mes N
    - **Residual del mes N** = Cuánto se perdió en el redondeo = (Total acumulado del mes N) – (Pronóstico convertido redondeado del mes N)
    - **Pronóstico convertido redondeado para el mes N** = Total acumulado para el mes N, redondeado hacia abajo al número entero más cercano
  - Por ejemplo, se prevé que un pronóstico nacional consuma 0,25 paquetes de la Unidad de Planificación de Pronósticos por mes, durante 12 meses. La Unidad de Planificación de Previsión y la Unidad de Planificación del Plan de Suministro son iguales (Factor de conversión = 1)
    - En enero, el Consumo Convertido es 0,25, y como es el primer mes, el 0,25 también es el Total Acumulado de enero. 0,25 se redondea hacia abajo a un número entero que es 0 y el número redondeado de 0 se importa al módulo de planificación de suministro. El residuo de enero del redondeo es 0,25 – 0 = 0,25.
    - En febrero, el Consumo Convertido es 0,25, sumado al Residual de enero de 0,25 hace que el Total Acumulado de febrero sea 0,25 + 0,25 = 0,5. Luego, 0,5 se redondea hacia abajo a un número entero de 0, que se importa al módulo de planificación de suministro. El residuo de febrero del redondeo es 0,5 – 0 = 0,5.
    - En marzo, el Consumo Convertido es 0,25, sumado al Residual de febrero de 0,5 hace que el Total Acumulado de marzo sea 0,25 + 0,5 = 0,75. Luego, 0,75 se redondea hacia abajo a un número entero de 0, que se importa al módulo de planificación de suministro. El residuo de marzo del redondeo es 0,75 – 0 = 0,75.
    - En abril, el Consumo Convertido es 0,25, sumado al Residual de Marzo de 0,75 hace que el Total Acumulado de Abril sea 0,25 + 0,75 = 1,00. Luego, 1,00 se redondea hacia abajo a un número entero de 1,00, que se importa al módulo de planificación de suministro. El residuo de abril del redondeo es 1,00 – 1,00 = 0.
    - A partir de mayo el ciclo se repite.

| | enero | febrero | marzo | abril | mayo | junio | julio | agosto | septiembre | octubre | noviembre | diciembre |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Pronóstico convertido** <br /> _(Después de aplicar el factor de conversión)_ | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 | 0,25 |
| _Total acumulado_ | 0,25 | 0,5 | 0,75 | 1 | 0,25 | 0,5 | 0,75 | 1 | 0,25 | 0,5 | 0,75 | 1 |
| _Residual_ | 0,25 | 0,5 | 0,75 | 0 | 0,25 | 0,5 | 0,75 | 0 | 0,25 | 0,5 | 0,75 | 0 |
| **Pronóstico convertido redondeado** <br /> _(Para importar al módulo de planificación de suministro)_ | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 |

- Si existe un consumo previsto existente en el plan de suministro, la celda "Consumo previsto actual" estará <mark style={{backgroundColor: 'yellow', padding: '0 4px', color: 'black'}}>resaltada en amarillo</mark>.
- Si existe un consumo previsto en el plan de suministro y los datos de consumo previsto que el usuario intenta importar tienen más de 4 meses, la celda "Consumo previsto actual" estará <mark style={{backgroundColor: 'lightgray', padding: '0 4px', color: 'black'}}>resaltada en gris</mark> y NO se importará.
- Utilice la opción "¿Importar?" para anular la selección de cualquier pronóstico que NO desee importar al plan de suministro. Si está marcado, el Consumo pronosticado convertido anulará el pronóstico del Plan de suministro. Si no se marca, se mantendrá el pronóstico del Plan de suministro actual.

<div style={{textAlign: 'center'}}>

![QAT Forecast Import Screen](/img/media/image152.png)

*Figure 98: QAT Forecast Import Screen*

</div>