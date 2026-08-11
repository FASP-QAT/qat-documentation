---
id: supply-planning-module-supply-planning
title: "5. Supply Planning Module: Supply Planning"
sidebar_label: "   5. Supply Planning"
sidebar_position: 6
---
* <u>¿Quién?</u> **Administradores de reino**, **Administradores de programa**, **Revisores del plan de suministro** y **Usuarios del programa** pueden agregar datos/editar datos en el plan de suministro. Ciertos roles de "solo visualización" pueden ver el plan de suministro.
* <u>¿Cuándo?</u> En cualquier momento. El usuario no tiene que estar en línea. Sin embargo, deben haber descargado un programa en su computadora local mientras estaban en línea antes de comenzar.
* <u>¿Cómo?</u>
  
  **Nota:** aparte de que se requiere el paso 1, los pasos restantes no son secuenciales, sino una explicación de las funciones disponibles en la pantalla de planificación de suministro.
  
  <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '15px' }}>
    <li style={{ marginBottom: '20px' }}>
      On the left menu bar, go to Supply Planning &gt; “Supply Planning”
      <ol type="a" style={{ paddingLeft: '20px', marginTop: '10px', listStyleType: 'lower-alpha' }}>
        <li style={{ marginBottom: '10px' }}>Select the desired <b>Program</b>. The drop-down list in the supply plan screen will show all the programs that have been downloaded by the user. Refer to <a href="./06-managing-programs-and-versions.md#b-downloaddelete">Download Program</a> for details on how to download a program.</li>
        <li style={{ marginBottom: '10px' }}>Select the desired <b>QAT Planning Unit</b> or <b>Alternate Reporting Unit (ARU)</b>.</li>
      </ol>
      <br />
      <img src={require('@site/static/img/media/image156.png').default} alt="QAT Planning Unit / Alternate Reporting Unit Selectors" />
    </li>
    <li style={{ marginBottom: '20px' }}>
      La pantalla muestra dos pestañas Plan de suministro: <b>Plan de suministro local</b> y <b>Plan de suministro del servidor - VX</b>. La pestaña "Plan de suministro local" es la versión local que se seleccionó en "programa" y está disponible para ser editada. El “Plan de suministro del servidor” es la última versión disponible en el servidor y solo está disponible para visualización (no editable).
      <br /><br />
      <img src={require('@site/static/img/media/image157.png').default} alt="Local/Server Supply Plan Tabs" />
    </li>
    <li style={{ marginBottom: '20px' }}>
      De forma predeterminada, se muestran los últimos 3 meses y los 15 meses futuros a partir de la fecha actual. Utilice <b>Desplácese hacia la izquierda/derecha</b> para mostrar datos de 3 meses en el pasado/futuro
      <br /><br />
      <img src={require('@site/static/img/media/image158.png').default} alt="Scroll to left / right bar" />
      <br /><br />
      Haga clic en "Mostrar fórmulas" en la parte superior derecha de la pantalla para obtener explicaciones sobre los cálculos en esta pantalla.
      <br /><br />
      <img src={require('@site/static/img/media/image159.png').default} alt="Show Formulae button" />
    </li>
    <li style={{ marginBottom: '20px' }}>
      Haga clic en el PDF &amp; Iconos CSV para exportar este informe e incluirán todas las unidades de planificación en el programa. En PDF solo se incluirá el gráfico del producto seleccionado, pero habrá tablas para cada unidad de planificación.
      <br /><br />
      <img src={require('@site/static/img/media/image160.png').default} alt="PDF and CSV Export Icons" />
    </li>
    <li style={{ marginBottom: '20px' }}>
      Comprender los cálculos del saldo de existencias en la mitad superior de la tabla:
      <br /><br />
      <img src={require('@site/static/img/media/image161.png').default} alt="Figure 102: Ending Stock Balance Calculation" />
      <br />
      <i>Figure 102: Ending Stock Balance Calculation</i>
      <br /><br />
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '5px' }}><b>Opening Balance</b> represents the quantity of stock at the beginning of the month. It is equal to the ending balance of the previous month, except the very first month of the program, where the opening balance is zero. It can be an inventory count from the previous month (<b>bolded</b>), or a projected value (unbolded).</li>
        <li style={{ marginBottom: '5px' }}><b>Ending Balance</b> represents the quantity of stock at the end of the month. It can be an inventory count (<b>bolded</b>), or a projected value (unbolded).</li>
        <li style={{ marginBottom: '5px' }}>Follow the +/- signs besides each row to understand how the math works from opening balance to ending balance.</li>
      </ul>
    </li>
  </ol>
  
La mitad inferior de la tabla contiene más detalles para ayudar al usuario a interpretar el estado del stock.
  
  ![Figure 103 Differences in the Supply Planning Table - Plan by MOS vs Plan by Quantity](/img/media/image162.png)
  *Figura 103 Diferencias en la tabla de planificación de suministros: Planificar por MOS versus Planificar por cantidad*
  
  * **Consumo mensual promedio (AMC)** es un promedio del consumo durante los meses indicados por los parámetros AMC, que se muestran encima de la tabla. Para editar estos parámetros, consulte [Actualización de unidades de planificación] (./07-supply-planning-module-program-data.md#a2-planning-units).
    
    ![Figure 104 Differences in the Supply Planning Legend- Plan by MOS vs Plan by Quantity](/img/media/image163.png)
    *Figura 104 Diferencias en la leyenda de planificación de suministro: Planificar por MOS versus Planificar por cantidad*
    
  * **Demanda insatisfecha.** Cantidades estimadas de producto que se habrían consumido si hubiera suficiente stock disponible:
    - Cuando el consumo previsto sea superior al stock inicial disponible previsto.
    - Cuando el consumo real incluye los días de desabastecimiento
    - Cuando un ajuste manual negativo es mayor que el saldo final proyectado
    - La funcionalidad de demanda insatisfecha de QAT es lo que captura lo que habría sido un stock negativo en el software heredado PipeLine.
  * La segunda fila desde abajo.
    - **Planificado por MOS: Meses de stock** se calcula como el saldo final del mes dividido por el AMC.
    - **Planificado por cantidad: Cantidad máxima** se calcula como la Cantidad mínima + Frecuencia de reorden x AMC.
  * Codificación de colores del estado del stock
    - **Planificado por MOS:** La fila **“Meses de existencias”** está codificada por colores según el estado de las existencias utilizando el código de colores que se muestra en la leyenda. El estado del stock se determina comparando el MOS con el MIN MOS y el MAX MOS.
    - **Planificado por Quant

idad:** La fila **“Saldo final”** está codificada por colores según el estado del stock utilizando el código de colores que se muestra en la leyenda. El estado del stock se determina comparando la cantidad del "saldo final" con la cantidad mínima (proporcionada por el usuario) y la cantidad máxima (calculada).
  
  <ol start="7" style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '15px' }}>
    <li style={{ marginBottom: '20px' }}>
      Reading the stock status graph. The dates on this graph follow the table. By default, all graph elements are displayed. Click on any data element in the legend to hide a data element. The Stock Status graph has two vertical (Y) axes:
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
        <li style={{ marginBottom: '10px' }}>The <b>primary (left) axis is in units</b>, and depicts shipments, consumption, stock, and expiries. For Plan by Quantity, there minimum and maximum quantities use the primary axis.<br/><br/><img src={require('@site/static/img/media/image164.png').default} alt="Figure 105 Supply Planning Graph - Primary Axis (Plan by MOS)" /><br/><i>Figure 105 Supply Planning Graph - Primary Axis (Plan by MOS)</i><br/><br/><img src={require('@site/static/img/media/image165.png').default} alt="Figure 106 Supply Planning Graph - Primary Axis (Plan by Quantity)" /><br/><i>Figure 106 Supply Planning Graph - Primary Axis (Plan by Quantity)</i></li>
        <li style={{ marginBottom: '10px' }}>For plan by MOS, there is a <b>secondary (right) axis in months</b>, and depicts the stock parameters (minimum, maximum) and the calculated months of stock.<br/><br/><img src={require('@site/static/img/media/image166.png').default} alt="Figure 107 Supply Planning Graph - Secondary Axis (Plan by MOS)" /><br/><i>Figure 107 Supply Planning Graph - Secondary Axis (Plan by MOS)</i></li>
      </ul>
    </li>
  </ol>
  
## B. Planificación del suministro: consumo

# Sección 5. Módulo de Planificación de Suministros: Planificación de Suministros

## A. **Planificación de suministros: descripción general**

![Figure 99: Supply Planning Screen – Plan by MOS](/img/media/image153.png)
*Figura 99: Pantalla de planificación de suministros: planificación por MOS*

![Figure 100: Supply Planning Screen – Plan by Quantity](/img/media/image154.png)
*Figura 100: Pantalla de planificación de suministros: planificar por cantidad*

* <u>¿Qué?</u> Todos los puntos de datos principales (consumo, envíos, inventario) se reúnen en la pantalla de planificación de suministro, y aquí es donde la mayoría de los usuarios de QAT pasarán la mayor parte de su tiempo. Los usuarios pueden hacer clic en muchas de las celdas de la tabla para editar directamente sus datos. Se recomienda utilizar esta pantalla para la planificación activa del suministro (incluidas actualizaciones de datos y planificación de nuevos envíos), pero utilizar la pantalla de entrada de datos cuando se requiera una entrada de datos importante. Tenga en cuenta que algunas secciones varían según si la unidad de planificación está planificada por MOS o por Cantidad (según lo seleccionado en [Actualización de unidades de planificación] (./07-supply-planning-module-program-data.md#a2-planning-units)); las diferencias se indican a continuación.
  * Esta pantalla también puede ser vista por la unidad de informes alternativa (ARU) asociada con la unidad de planificación. Esto significa que los usuarios pueden ver sus planes de suministro en términos de los nombres de los productos y las unidades de medida en las que ingresan los datos, con valores en la tabla y el gráfico que cambian según el factor de conversión ARU/PU establecido por el usuario (consulte [Unidades de informes alternativas] (./07-supply-planning-module-program-data.md#a4-alternate-reporting-units)). El usuario selecciona ver por ARU haciendo clic en el botón de opción y luego seleccionando la ARU deseada para mostrar.
    
    ![Figure 101: Supply Planning Table –by Planning Unit vs by Alternate Reporting Unit](/img/media/image155.png)
    *Figura 101: Tabla de planificación de suministros: por unidad de planificación frente a unidad de informe alternativa*

En la tabla de planificación de suministro, solo se mostrará un número por mes para todo el programa en la fila de consumo. Como se indica en la leyenda, <span style={{ color: 'purple', fontStyle: 'italic' }}>el consumo previsto</span> se indica con texto en cursiva violeta, mientras que **consumo real** se indica con texto negro sin cursiva.

<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<b>Logic for Consumption Data Displayed</b>
<ul style={{paddingLeft: '20px', margin: 0, marginTop: '5px', listStyleType: 'disc'}}>
<li style={{marginBottom: '5px'}}>For single-region programs, the actual consumption will be displayed when it is available. If actual consumption is not available, the forecasted consumption will display.</li>
<li style={{marginBottom: '5px'}}>For multi-region programs, QAT will display the greater between Σ(actuals) or Σ(forecast) across regional data. (Note: this logic is being reviewed and may be updated in the future).</li>
</ul>
</div>

![Consumption Table Legend](/img/media/image167.png)

<div style={{clear: 'both'}} />

**To add or edit consumption records**

<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<div style={{textAlign: 'center', fontWeight: 'bold'}}>
Lots of data to add/update?<br/>
Go to data entry screen!
</div>
<br />
<img src={require('@site/static/img/media/image169.png').default} alt="Lots of data to add/update right-click menu" style={{width: '100%'}} />
<br /><br />
<i style={{fontSize: '11px', display: 'block', lineHeight: '1.4'}}>
En la ventana emergente de detalles de consumo, los usuarios pueden acceder directamente a la entrada de datos de consumo haciendo clic en el enlace en la esquina superior derecha (consulte <a href="./07-supply-planning-module-program-data.md#b1-consumption-data">Datos de consumo</a>). Haga clic con el botón izquierdo para abrir una pestaña en su navegador, haga clic con el botón derecho y seleccione "Abrir enlace en una nueva ventana de la herramienta de análisis de cuantificación". para abrir una ventana QAT PWA separada.
</i>
</div>

0. Haga clic en el mes y la celda de la fila Consumo en la pantalla de planificación de suministro. Aparecerá una nueva ventana llamada Detalles de consumo. En la tabla que aparece, cada fila representa una región. Los programas de una sola región solo tendrán una fila, mientras que los programas de múltiples regiones tendrán varias filas. El total muestra el consumo agregado de todas las regiones.
1. Haga clic en el registro de consumo de cualquier mes y región para mostrar más detalles. Todos los registros de ese mes y región se mostrarán a continuación.
2. Para crear un nuevo registro, haga clic derecho en la fila de detalles y seleccione "Agregar nuevo consumo" o haga clic en el botón "+ Agregar fila".
3. Para editar un registro, haga clic en cualquier celda y edite los detalles del consumo (tipo de consumo, fuente de datos, cantidad, etc.). Haga doble clic para activar cualquier menú desplegable. Consulte [Datos de consumo](./07-supply-planning-module-program-data.md#b1-consumption-data) para obtener orientación adicional sobre el ingreso de datos de consumo.
4. Haga clic en "Enviar" para guardar los cambios y regresar a la pantalla principal de planificación de suministro, donde se reflejarán sus cambios.

<img src={require('@site/static/img/media/image170.png').default} alt="Consumption Details Dialog" style={{maxWidth: '100%', margin: '15px 0'}} />


## C. Planificación de suministros: envíos

De forma predeterminada, los envíos solo se muestran como una fila en la pantalla de planificación de suministro: esta es la cantidad agregada de todos los envíos (excluidos los envíos sugeridos). Para mostrar más detalles, haga clic en el ícono + a la izquierda de la fila "+ Envíos" para expandir y mostrar las subfilas. Verá cinco filas divididas por estado del pedido (fila superior para envíos sugeridos que se calculan automáticamente).

Para ver un desglose detallado de todos los envíos en un mes, haga clic en la celda del mes correspondiente en la fila '+Envíos'. Para ver el desglose detallado de todos los envíos por estado, haga clic en la celda del mes correspondiente en la fila de estado individual.

ERP (planificación de recursos empresariales): los datos vinculados al ERP desde los agentes de adquisiciones no son editables (consulte [ERP Shipment Linking](./07-supply-planning-module-program-data.md#b4-erp-shipment-linking))

Para todas las filas de envío, los colores indican el agente de adquisiciones. Si un mes tiene varios envíos con diferentes agentes de adquisiciones, la celda será verde. Los triángulos rojos en la parte superior derecha de la celda indican que un envío es una emergencia. Si el envío es una adquisición local, habrá un ícono L en la parte inferior izquierda de la celda. Si el envío está vinculado a ERP, habrá un ícono de vínculo en la parte superior izquierda de la celda. Los envíos pueden tener varios íconos, como un pedido de emergencia vinculado al ERP local. La leyenda aparece en la parte superior de la pantalla.

![Figure 108: Shipments in Supply Planning](/img/media/image172.png)
*Figura 108: Envíos en Planificación de Suministros*


Las siguientes secciones cubrirán cómo actualizar envíos existentes y crear nuevos envíos dentro de la pantalla de planificación de suministros. Consulte [**Datos de envío**](./07-supply-planning-module-program-data.md#b3-shipment-data) para obtener más sugerencias sobre los campos de datos de envío, que se aplican en la pantalla Entrada de datos de envío y en la pantalla de planificación de suministro.

### CI. Actualización de un envío existente
1. Haga clic en la celda que representa el mes y el envío a editar. Al hacer clic en la fila "+Envíos", se abrirá una pestaña con todos los envíos de ese mes, independientemente del estado. Al hacer clic en una de las filas de estado, se abrirá una pestaña que muestra solo los envíos de ese mes con ese estado.

![Planned Shipment Highlight](/img/media/image173.png)

2. Aparecerá la ventana emergente Detalles del envío. Realice todos los cambios deseados. Para actualizar la información del lote o la fecha, haga clic derecho en la fila de envío. La parte superior de la ventana emergente permite a los usuarios navegar a un mes diferente para realizar cambios en esos envíos también.

![Shipment Details Table Columns](/img/media/image174.png)

3. Haga clic en "Enviar" para guardar los cambios y regresar a la pantalla principal de planificación de suministro, donde se reflejarán los cambios (**Nota**: el botón Enviar no aparecerá si no se completan todos los campos obligatorios).

![Shipped Shipment Table Highlight](/img/media/image175.png)

**Nota**: El envío planificado se editó como enviado, lo que muestra que los 130 000 ahora se han movido de la fila "Planificado" a la fila "Enviado y llegado".

![Shipment Parameters Tooltips](/img/media/image176.png)

**Recordatorio**: Se proporcionan sugerencias sobre herramientas para ayudar a guiar dónde actualizar parámetros específicos. Estos proporcionan claridad sobre lo que los usuarios necesitan actualizar.


### Actualización de la cantidad de envío con el botón Recalcular
Para envíos planificados en el futuro, QAT sugerirá una cantidad de envío revisada como alerta temprana para evitar bajar de los niveles mínimos de stock. Al igual que los envíos sugeridos (consulte [Crear un nuevo envío](#c2-crear-un-nuevo-envío)), QAT solo proporcionará el botón de recalcular si el envío cae en un mes que está por debajo del mínimo seguido de al menos dos meses que también están por debajo del nivel mínimo de existencias. La cantidad recomendada por el botón de recalcular seguirá la misma lógica que los envíos sugeridos por QAT (consulte **Reglas para envíos sugeridos a continuación**).

A continuación se detallan los pasos para usar el botón recalcular en la pantalla Planificación de suministros:
1. Vaya a un envío planificado en el futuro donde el mes actual y al menos los 2 meses siguientes estén por debajo del nivel mínimo de existencias.
2. Haga clic izquierdo en el envío.
3. Busque la columna 'Cantidad de pedido' y haga clic derecho.

![Suggested Shipment Highlight](/img/media/image178.png)

4. Haga clic en 'Recalcular'. Aparecerá un mensaje emergente que le indicará cuánta cantidad sugiere agregar QAT y cuánta cantidad será el envío revisado.

![Figure 109: Recalculate Button](/img/media/image177.png)
*Figura 109: Botón Recalcular*

5. Haga clic en 'Aceptar'. La ventana emergente desaparecerá y la cantidad del pedido revisada aparecerá en la columna "Cantidad del pedido". Haga clic en 'Enviar' si desea continuar con la cantidad de pedido revisada. En cualquier momento, el usuario puede anular la cantidad haciendo doble clic en la celda y escribiendo una nueva cantidad.

La cantidad revisada ahora se reflejará en el plan de suministro.



### C2. Crear un nuevo envío
Hay dos formas de crear nuevos envíos: 1) convertir un envío sugerido por QAT en un envío planificado o 2) agregar un envío manualmente.

<div style={{float: 'right', width: '300px', border: '1px solid black', padding: '10px', marginLeft: '15px', marginBottom: '15px', fontSize: '13px', backgroundColor: '#ffffff'}}>
<div style={{textAlign: 'center', fontWeight: 'bold'}}>
QAT Suggested Shipments
</div>
<br />
QAT sugiere un envío como alerta temprana para evitar bajar de los niveles mínimos de stock. Estos no son envíos reales y, como tales, no afectan las proyecciones de existencias. Solo cuando se acepte un envío sugerido y el estado cambie, se contará para sus proyecciones de existencias. QAT marcará automáticamente un envío sugerido como envío de emergencia si se encuentra dentro del plazo de entrega. Consulte las <b>Reglas para envíos sugeridos</b> a continuación.
</div>

Para **Convertir un envío sugerido** en un envío planificado:
1. Haga clic en la fila de Envío sugerido en el mes deseado.
2. Aparecerá la ventana emergente Detalles del envío. Cambie el estado al estado deseado, complete los campos obligatorios, indicados por un asterisco. Haga doble clic para activar cualquier menú desplegable. Desplácese hacia la derecha para ver todos los campos. Pase el cursor sobre la información sobre herramientas si necesita alguna aclaración (como se muestra en la imagen a continuación). La cantidad del pedido se completará previamente con la cantidad del pedido sugerida.

![Suggested Shipment](/img/media/image179.png)

3. Haga clic en "Enviar" para guardar los cambios y regresar a la pantalla principal de planificación de suministro, donde se reflejarán los cambios (**Nota**: el botón Enviar no aparecerá si no se completan todos los campos obligatorios)


**Reglas para envíos sugeridos:**

<u>Para plan por MOS:</u>

1. ¿La unidad de planificación tiene escasez de existencias (MOS&lt;Min) durante 3 meses seguidos?
   a. En caso afirmativo, el envío sugerido llevará el nivel de existencias del mes actual al **máximo**.
   b. En caso negativo, no se sugiere ningún envío.
2. Si la unidad de planificación está agotada, QAT siempre sugerirá un envío.
   a. Si los dos próximos meses son &lt;Min, el envío sugerido llevará el nivel de existencias del mes actual al **máximo**.
   b. Si 1 de los próximos 2 meses es &gt;Min, el envío sugerido llevará el nivel de existencias del mes actual al **mínimo**.
3. Si AMC = 0 o N/A, no habrá ningún envío sugerido para ese mes.

<u>Para plan por cantidad:</u>

Donde el mes N es el mes para el que se calcula QAT y X = plazo de entrega de distribución
1. Si AMC = 0 o N/A para el mes N, no se sugiere envío
2. Si el mes N está agotado (saldo final = 0), QAT siempre sugerirá un envío
   un. Si los dos próximos meses (N+1, N+2) son &lt; cantidad mínima, el envío sugerido es la cantidad que llevaría el mes N a **cantidad máxima.**
   B. Si uno o ambos de los próximos 2 meses (N+1 o N+2) es &gt; cantidad mínima, el envío sugerido es la cantidad que llevaría el mes N a **cantidad mínima**.
3. ¿Hay escasez de existencias del producto (saldo final &lt; Cantidad mínima) durante 3 meses consecutivos (Mes N, N+1, N+2)?
   a. En caso afirmativo, el envío sugerido es la cantidad que llevaría el mes N a **cantidad máxima**
   B. Si no, no se sugiere envío

*QAT coloca la cantidad sugerida en el mes N-X. En otras palabras, X meses antes del Mes N, donde X es el plazo de entrega de distribución.*

**Para crear manualmente un nuevo envío:**
1. Haga clic en la celda que representa el mes al que se debe agregar el envío. Al hacer clic en la fila '+Envíos' se abrirá una pestaña con todos los envíos de ese mes, independientemente del estado. Al hacer clic en una de las filas de estado, se abrirá una pestaña que muestra solo los envíos de ese mes con ese estado. Cualquiera de las opciones funcionará para agregar un nuevo envío.
2. Aparecerá la ventana emergente Detalles del envío. Para agregar una nueva fila, haga clic en el botón '+ Agregar fila' o haga clic derecho en cualquier fila y seleccione 'Agregar nuevo envío'. Haga doble clic para activar cualquier menú desplegable. Cambie al estado y cantidad deseados y complete los campos obligatorios indicados con un asterisco. Desplácese hacia la derecha para ver todos los campos.
3. Para crear varios envíos nuevos, haga clic derecho en cualquier fila y seleccione "Agregar nuevo envío" o haga clic en el botón "+ Agregar fila".
   a. Tenga en cuenta los íconos de información sobre herramientas para ayudar a guiar qué parámetros específicos deben actualizarse.

![Shipment Parameters Tooltip Crop](/img/media/image180.png)

![Manual Shipment Table Entry](/img/media/image179.png)

4. Haga clic en "Enviar" para guardar los cambios y regresar a la pantalla principal de planificación de suministro, donde se reflejarán los cambios (**Nota**: el botón Enviar no aparecerá si no se completan todos los campos obligatorios).

## D. **Planificación de suministros: Inventario/Ajustes**

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap', margin: '20px 0'}}>
  <div style={{flex: '1 1 450px'}}>
    <p style={{margin: '0 0 15px 0'}}>
      In the supply planning table, one number will show per month for the whole program in the <b>manual adjustments</b> row, regardless of how many manual adjustments are made. Similarly, the <b>ending balance</b> will always be one row, regardless of whether the ending balance is projected by QAT or provided by the user as an inventory count.
    </p>
    <img src={require('@site/static/img/media/image182.png').default} alt="Adjustments and Ending Balances in Table" style={{width: '100%', borderRadius: '4px', border: '1px solid #ddd'}} />
  </div>
  <div style={{flex: '1 1 350px', border: '1.5px solid #000', padding: '15px', borderRadius: '4px', backgroundColor: '#f9f9f9', fontSize: '0.9em', color: '#000'}}>
    <h4 style={{marginTop: 0, textAlign: 'center', fontWeight: 'bold'}}>Logic for Adjustments and Ending Balances</h4>
    <ul style={{paddingLeft: '20px', listStyleType: 'disc', margin: 0}}>
      <li style={{marginBottom: '10px'}}>
        When there are no inventory counts,
        <ul style={{paddingLeft: '20px', listStyleType: 'circle'}}>
          <li><b>Adjustments</b> = the sum of all manual adjustments (&Sigma;(manual adjustments))</li>
          <li><b>Ending balance</b> = projected inventory</li>
        </ul>
      </li>
      <li style={{marginBottom: '10px'}}>
        When there are inventory counts,
        <ul style={{paddingLeft: '20px', listStyleType: 'circle'}}>
          <li>For single-region programs, if there is an inventory count, that inventory count will be the ending balance.</li>
          <li>For multi-region programs where <u>not</u> all regions are reporting, QAT will use whichever is <u>greater</u>, &Sigma;(inventory count) or (projected inventory) as the ending balance</li>
          <li>For multi-region programs where all regions are reporting, QAT will use &Sigma;(inventory count) as the ending balance.</li>
        </ul>
      </li>
      <li>
        Whenever <b>QAT</b> uses inventory count as the ending balance, auto adjustments are calculated on top of manual adjustments.
      </li>
    </ul>
  </div>
</div>

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap', margin: '20px 0'}}>
  <div style={{flex: '1 1 450px'}}>
    <ol style={{paddingLeft: '20px', listStyleType: 'decimal', margin: 0}}>
      <li style={{marginBottom: '15px'}}>
        To add or edit adjustment or inventory records, click on the month and cell on the adjustments or ending balance rows in the supply planning screen.
        <ol style={{paddingLeft: '20px', listStyleType: 'lower-alpha', marginTop: '10px'}}>
          <li style={{marginBottom: '8px'}}>A new window called <b>Adjustments and Inventory Details</b> will pop up. In the table that appears, each row represents a region. Single-region programs will only have one row, while multi-region programs would have multiple rows.</li>
          <li style={{marginBottom: '8px'}}>The total shows the aggregated adjustments and inventory for all regions.</li>
          <li>Click on the record of any month and region to display further details</li>
        </ol>
      </li>
    </ol>
  </div>
  <div style={{flex: '1 1 350px', borderTop: '1px solid #000', borderBottom: '1px solid #000', padding: '15px 0', fontSize: '0.9em', color: '#000'}}>
    <h4 style={{marginTop: 0, textAlign: 'center', fontWeight: 'bold'}}>Lots of data to add/update?<br/>Go to data entry screen!</h4>
    <div style={{textAlign: 'center', margin: '10px 0'}}>
      <img src={require('@site/static/img/media/image169.png').default} alt="Lots of data to add/update" style={{width: '90%', borderRadius: '4px'}} />
    </div>
    <p style={{margin: 0, lineHeight: '1.4'}}>
      En la ventana emergente Ajustes y detalles de inventario, los usuarios pueden acceder directamente a la entrada de datos de Ajustes e inventario haciendo clic en el enlace en la esquina superior derecha (consulte <a href="./07-supply-planning-module-program-data.md#b2-inventory-data">Datos de inventario</a>). Haga clic izquierdo para abrir una pestaña en su navegador, haga clic derecho y seleccione "Abrir enlace en una nueva ventana de la herramienta de análisis de cuantificación" para abrir una ventana QAT PWA separada.
    </p>
  </div>
</div>

![Adjustment and Inventory Details](/img/media/image183.png)



<ol start="2" style={{paddingLeft: '20px', listStyleType: 'decimal', margin: '20px 0'}}>
  <li style={{marginBottom: '15px'}}>
    Any records for that month and region will display below.
    <ul style={{paddingLeft: '20px', listStyleType: 'disc', marginTop: '10px'}}>
      <li style={{marginBottom: '10px'}}>To add an adjustment or inventory record, click on add row, or right-click on the bottom table and select “Add new adjustment” or “Add new inventory”. Enter the required details. For adjustments, users can enter both positive and negative adjustments, in the past and in the future, and notes are required</li>
    </ul>
  </li>
</ol>

![Adjustment and Inventory Details Context Menu](/img/media/image184.png)

<ul style={{paddingLeft: '40px', listStyleType: 'disc', margin: '10px 0'}}>
  <li style={{marginBottom: '10px'}}>To edit a record, click on any cell to edit.</li>
</ul>

<ol start="3" style={{paddingLeft: '20px', listStyleType: 'decimal', margin: '20px 0'}}>
  <li style={{marginBottom: '15px'}}>
    <b>Note:</b> A user can review which batch is affecting their ending balance for a particular month, by clicking on “Final Inventory” in the “Adjustment and Inventory Details” screen pop-up.
  </li>
</ol>

![Figure 111: Batches included in Final Inventory Pop-up](/img/media/image185.png)
*Figura 111: Lotes incluidos en la ventana emergente Inventario final*

<ol start="4" style={{paddingLeft: '20px', listStyleType: 'decimal', margin: '20px 0'}}>
  <li style={{marginBottom: '15px'}}>
    For months with an inventory record, the user can click edit the batch quantities.
    <ul style={{paddingLeft: '20px', listStyleType: 'disc', marginTop: '10px'}}>
      <li style={{marginBottom: '10px'}}><b>Note:</b> redistributing batch quantities should be the last resort. It’s always better to update the information upstream (shipment, consumption, adjustment) instead of updating the inventory batch information.</li>
      <li style={{marginBottom: '10px'}}>
        <b>How to do it?</b>
        <ol style={{paddingLeft: '20px', listStyleType: 'lower-alpha', marginTop: '10px'}}>
          <li style={{marginBottom: '8px'}}>Ensure there is an actual/manual inventory count for the month</li>
          <li style={{marginBottom: '8px'}}>Click on “final inventory” to pull up the batches</li>
          <li style={{marginBottom: '8px'}}>Type over the actual quantity – use the dropdowns if you want to change batches</li>
          <li>Remember, the total of the batches must match the total inventory total for the month</li>
        </ol>
      </li>
      <li>Right click on any batch to view the batch ledger (learn more in <a href="#e-supply-planning-project-expired-stock-and-batch-information">Supply Planning: Project Expired Stock and Batch Information</a>)</li>
    </ul>
  </li>
</ol>

![Figure 112: Batches Affecting Final Inventory Pop-up](/img/media/image186.png)
*Figura 112: Ventana emergente Lotes que afectan el inventario final*



## E. **Planificación de suministro: stock vencido del proyecto e información de lote**

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap', margin: '20px 0'}}>
  <div style={{flex: '1 1 450px'}}>
    <p style={{margin: '0 0 15px 0'}}>
      Users can view the projected expired stock, if any, for each month in their supply plan in the **Projected Expired Stock** row. Clicking on the <u>cell</u> will bring a pop-up window with the expiry details.
    </p>
    <img src={require('@site/static/img/media/image188.png').default} alt="Projected Expired Stock row highlight" style={{display: 'block', maxWidth: '300px', margin: '15px 0', border: '1px solid #ddd'}} />
    <p style={{margin: '20px 0 15px 0'}}>From the pop-up – users can do 2 functions:</p>
    <ol style={{listStyleType: 'decimal', paddingLeft: '20px', margin: 0}}>
      <li style={{marginBottom: '20px'}}>
        <b>Edit the batch that contributed to the expiry:</b> Click on the Batch Number. QAT will automatically redirect the user to the shipment from which the batch was generated. From the shipment screen, a user can edit the Batch Name, Expiry Date, and Shipment Quantity.
        <br /><br />
        <img src={require('@site/static/img/media/image189.png').default} alt="Projected Expired Batch Details Pop-up" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
        <br />
        <i>Note: Users can also edit this information in the Shipment Data entry screen (see <a href="./07-supply-planning-module-program-data.md#b3-shipment-data">Shipment Data</a>).</i>
      </li>
      <li style={{marginBottom: '20px'}}>
        <b>View the batch ledger:</b> Click on the <u>Expired Quantity</u> cell. QAT will automatically open a pop-up screen below with the batch ledger, which shows the life of a batch month-by-month from shipment receipt to expiry.
      </li>
    </ol>
  </div>
  <div style={{flex: '1 1 350px', border: '1.5px solid #000', padding: '15px', borderRadius: '4px', backgroundColor: '#ffffff', fontSize: '0.9em', color: '#000'}}>
    <img src={require('@site/static/img/media/image187.png').default} alt="Logic for Batches & Expiries Flowchart" style={{width: '100%', display: 'block', margin: '0 auto 15px auto'}} />
    <h4 style={{marginTop: 0, textAlign: 'left', fontWeight: 'bold'}}>Logic for Batches & Expiries</h4>
    <ul style={{listStyleType: 'square', paddingLeft: '20px', margin: 0, color: '#000'}}>
      <li style={{marginBottom: '15px'}}>
        Batches start with <b>shipments</b>.
        <ul style={{listStyleType: 'circle', paddingLeft: '20px', marginTop: '5px'}}>
          <li style={{marginBottom: '5px'}}>QAT automatically generates one batch for each shipment that equals the quantity of the shipment.</li>
          <li style={{marginBottom: '5px'}}>Batch expiry dates are based on shipment <b>receive date</b> plus planning unit <b>shelf life</b> (Updatable by Program Admins in <a href="./07-supply-planning-module-program-data.md#a2-planning-units">Update Planning Units</a>).</li>
          <li>Users <u>can override</u> the batch number, expiry date, and split shipments into multiple batches.</li>
        </ul>
      </li>
      <li style={{marginBottom: '15px'}}>
        For <b>consumption</b>
        <ul style={{listStyleType: 'circle', paddingLeft: '20px', marginTop: '5px'}}>
          <li style={{marginBottom: '5px'}}>By default, QAT uses First Expired, First Out <b>(FEFO)</b> logic.</li>
          <li>Users <u>can override</u> the FEFO logic and instead, choose a specific batch from a dropdown to tag to that <u>actual</u> consumption record.</li>
        </ul>
      </li>
      <li>
        For <b>adjustments</b>
        <ul style={{listStyleType: 'circle', paddingLeft: '20px', marginTop: '5px'}}>
          <li style={{marginBottom: '5px'}}>By default, QAT uses the <b>Best-Case Scenario</b> logic: For positive adjustments (manual or automated), QAT adds to the batch that is last to expire (longest shelf life). For negative adjustments (manual or automated), QAT subtracts from the batch that is the expiring soonest (shortest shelf life).</li>
          <li style={{marginBottom: '5px'}}>Users <u>can override</u> the Best-Case Scenario logic and instead, choose a specific batch from a dropdown to tag to that <u>manual</u> adjustment record.</li>
          <li>Users <u>cannot override</u> the Best-Case Scenario logic for an <u>auto</u>-adjustment record.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<img src={require('@site/static/img/media/image190.png').default} alt="Batch Ledger details" style={{display: 'block', maxWidth: '100%', margin: '20px 0', border: '1px solid #ddd'}} />

<p style={{marginTop: '15px'}}><b>Note:</b> unless the user tags a batch to specific actual consumption or adjustment entries (see “Add/Update Batch Details” in <a href="./07-supply-planning-module-program-data.md#b1-consumption-data">Consumption Data</a> and <a href="./07-supply-planning-module-program-data.md#b2-inventory-data">Inventory Data</a>), QAT will default to monthly batch quantities being placed in the “Auto-Allocated” column in the Batch Ledger.</p>

## F. **Planificación de escenarios**

QAT proporciona a los usuarios escenarios predefinidos para la planificación del suministro. Esta funcionalidad permitirá a los usuarios realizar cambios y visualizar sus datos de diferentes maneras, sin afectar necesariamente su plan de suministro actual. Los usuarios pueden aplicar uno o más escenarios a sus datos para ver cómo esos cambios afectan las proyecciones de acciones. Los escenarios seleccionados se pueden aplicar a un plan de suministro actual, creando una nueva versión.

Actualmente hay seis escenarios predefinidos disponibles para los usuarios; Se pueden programar más en QAT según la necesidad y los casos de uso. Los usuarios de QAT pueden solicitar nuevos escenarios generando un ticket. La necesidad de nuevos escenarios será gestionada de forma centralizada por el Realm Admin.

Escenarios disponibles:
- **Aumentar el consumo previsto:** durante un porcentaje y período definidos por el usuario. Esto aplicará un aumento porcentual a los valores pronosticados para cada mes del período seleccionado.
- **Disminución del consumo previsto:** durante un porcentaje y período definidos por el usuario. Esto aplicará una disminución porcentual a los valores pronosticados para cada mes del período seleccionado.
- **Producto de entrada/salida prevista:** para un período definido por el usuario y valores de consumo previstos de inicio y finalización. QAT trazará una línea recta interpolando entre los valores inicial y final, y reemplazará los valores de consumo previstos actuales.
- **Eliminar envíos sin financiamiento:** todos los envíos sin una fuente de financiamiento asignada (es decir, fuente de financiamiento = TBD) se eliminarán del plan de suministro y las proyecciones de existencias.
- **Eliminar todos los envíos planificados:** todos los envíos con estado "planificado" se eliminarán del plan de suministro y de las proyecciones de existencias. El usuario puede marcar una casilla para eliminar solo los "envíos planificados" que no cumplan con los plazos de entrega establecidos (es decir, la fecha de recepción esperada es anterior a lo que sería factible dados los plazos de entrega).
- **Eliminar todos los envíos enviados que no estén dentro del plazo de entrega:** todos los envíos con estado “enviado” que no cumplan con los plazos de entrega establecidos serán eliminados del plan de suministro y proyecciones de stock.
- **Eliminar todos los Envíos En Espera que no estén dentro del plazo de entrega:** todos los envíos con estado “en espera” que no cumplan con los plazos de entrega establecidos serán eliminados del plan de suministro y proyecciones de stock.
- **Replanificar el plan de suministro:** durante un período de tiempo definido por el usuario, QAT elimina los envíos planificados que no mantienen correctamente el stock entre los parámetros MIN/MAX y crea nuevos envíos planificados para cumplir con los parámetros de stock, utilizando la lógica de envío sugerida que se describe en la <a href="#c2-creating-a-new-shipment">Sección 5.C2 Creación de un nuevo envío</a>.

Para acceder a estos escenarios:
1. Vaya a Planificación de suministros y haga clic en "Planificación de escenarios".
2. Seleccione un escenario predefinido en el menú desplegable y edite los campos obligatorios.
3. Haga clic en Agregar para ver los cambios.

![Figure 113 Scenario Planning Screen](/img/media/image191.png)
*Figura 113 Pantalla de planificación de escenarios*

4. El escenario se mostrará en la "Lista de escenarios".

![Figure 114 Scenario Planning Scenario List](/img/media/image192.png)
*Figura 114 Lista de escenarios de planificación de escenarios*

5. Si el usuario desea aplicar el escenario a su plan de suministro, puede hacer clic en el botón "Enviar". El nuevo plan de suministro se almacenará en la computadora de ese usuario y el usuario podrá cargarlo en el servidor como una nueva versión a través de la función Cargar.
6. Si el usuario no desea aplicar el escenario a su plan de suministro actual, puede hacer clic en el botón "Cancelar" o en el botón "Restablecer" y los cambios no tendrán efecto.

## G. **Informe del plan de suministros**

El propósito del informe del plan de suministro es permitir al usuario evaluar rápidamente el estado de existencias de uno o más programas y/o unidades de planificación seleccionados, comparando gráficamente las proyecciones de existencias con niveles dinámicos de inventario mínimo y máximo y poder ver todo el consumo (tanto real como previsto), inventario y detalles de envío en un solo lugar. El informe proporciona una representación gráfica del plan de suministro, así como una vista tabular. El informe se puede exportar en formato PDF y/o CSV.

<ul style={{listStyleType: 'disc', paddingLeft: '20px', margin: '15px 0'}}>
  <li><b>Accessible to:</b> Realm Admins, Program Admins, Program Users, and Reports Viewer</li>
  <li><b>Navigation:</b> Supply Planning &rarr; Supply Plan Report</li>
</ul>

Los usuarios pueden utilizar los diversos parámetros desplegables en la parte superior de la pantalla para generar diferentes vistas del Informe del plan de suministro. Cada vista del informe generado tendrá una representación gráfica y un equivalente tabular de los datos. Hay tres vistas principales del Informe del Plan de Suministros:

<ol style={{listStyleType: 'decimal', paddingLeft: '20px'}}>
  <li>
    <div>
      <b>Single Program View</b>
      <ol style={{listStyleType: 'lower-alpha', paddingLeft: '20px', marginTop: '5px'}}>
        <li>Single program</li>
        <li>Single Planning Unit (PU) or single Alternate Reporting Unit (ARU)</li>
        <li>Shipments disaggregated by status (i.e. planning, shipped, received, etc.)</li>
      </ol>
      <br />
      <img src={require('@site/static/img/media/image193.png').default} alt="Figure 115: Supply Plan Report: Single Program View, Graph" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 115: Supply Plan Report: Single Program View, Graph</i>
      <br /><br />
      <img src={require('@site/static/img/media/image194.png').default} alt="Figure 116: Supply Plan Report: Single Program View, Tabular Data" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 116: Supply Plan Report: Single Program View, Tabular Data</i>
    </div>
  </li>
  <br />
  <li>
    <div>
      <b>Multi-Program View</b>
      <ol style={{listStyleType: 'lower-alpha', paddingLeft: '20px', marginTop: '5px'}}>
        <li>Multiple programs</li>
        <li>Single PU or ARU</li>
        <li>Shipments disaggregated by program (i.e. FASPonia Malaria MOH & FASPonia Malaria Social Marketing)</li>
        <li><b>Notes:</b> QAT is able to aggregate the supply planning data across multiple programs if they share the <b>same</b> PU/ARU. This could be useful if a country has multiple parallel programs monitoring the same products and would like to see an aggregated or national view of the stock status over time.</li>
      </ol>
      <br />
      <img src={require('@site/static/img/media/image195.png').default} alt="Figure 117: Supply Plan Report: Multi-program View" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 117: Supply Plan Report: Multi-program View</i>
      <br /><br />
      <img src={require('@site/static/img/media/image196.png').default} alt="Figure 118: Supply Plan Report: Multi-program/EU View, Tabular Data" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 118: Supply Plan Report: Multi-program/EU View, Tabular Data</i>
    </div>
  </li>
  <br />
  <li>
    <div>
      <b>Equivalency Unit (EU) View</b>
      <ol style={{listStyleType: 'lower-alpha', paddingLeft: '20px', marginTop: '5px'}}>
        <li>Single or multiple programs</li>
        <li>Multiple PUs (<i>ARUs</i> <i>cannot</i> be used with EUs)</li>
        <li>Shipments disaggregated by program, PU, or program-PU</li>
        <li><b>Notes:</b> QAT is able to <u>aggregate</u> across PUs that are different (different pack sizes, usage rates, etc.), but related by utilizing an EU (see <a href="./07-supply-planning-module-program-data.md#a5-equivalency-units">Equivalency Units</a> for more information) and a corresponding conversion factor. This could be useful for countries or global viewers that would like to see concepts such as, Malaria Treatments, Couples Year Protection (CYP), ARV Patient Months, etc. as an aggregate.</li>
      </ol>
      <br />
      <img src={require('@site/static/img/media/image197.png').default} alt="Figure 119: Supply Plan Report: Equivalency Unit View" style={{display: 'block', maxWidth: '100%', margin: '15px 0', border: '1px solid #ddd'}} />
      <i>Figure 119: Supply Plan Report: Equivalency Unit View</i>
    </div>
  </li>
</ol>

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap', margin: '20px 0'}}>
  <div style={{flex: '1 1 450px'}}>
    <p style={{fontWeight: 'bold', margin: '0 0 10px 0'}}>Note:</p>
    <ol style={{listStyleType: 'decimal', paddingLeft: '20px', margin: 0}}>
      <li style={{marginBottom: '10px'}}>The report utilizes the Planning Unit settings set by the Program Admin for AMC, shelf life, MIN, reorder interval, and MAX</li>
      <li style={{marginBottom: '10px'}}>The Shipment Quantity column is the sum of all shipments that have a receive date in the same month for that planning unit</li>
      <li style={{marginBottom: '10px'}}>The “Shipment Quantity | Funding Source | Shipment Status | Procurement Agent | RO – Prime line No | Order No – Prime line No” column allows the user to see the disaggregated shipments that have receive date in the same month, including details of quantity, procurement agent, status, funding source, and order number assigned to that order</li>
      <li style={{marginBottom: '10px'}}>The “Consensus Consumption” column only appears if a user chooses multiple programs for aggregation</li>
      <li style={{marginBottom: '10px'}}>The PDF and CSV exports have multiple options, similar to the report dropdowns, allowing for exports of aggregated programs, multiple single product supply plans, or aggregated products (via EUs)</li>
    </ol>
  </div>
  <div style={{flex: '1 1 380px', border: '1.5px solid #000', padding: '15px', borderRadius: '4px', backgroundColor: '#eeeeee', fontSize: '0.9em', color: '#000'}}>
    <div style={{fontWeight: 'bold', textDecoration: 'underline', marginBottom: '15px'}}>Calculations for the Varying Supply Plan Report Views:</div>
    
    <div style={{fontWeight: 'bold', marginBottom: '5px'}}>Single Program</div>
    <div style={{marginBottom: '10px'}}>
      <u>Ending Balance</u> = Opening Balance – Consumption + Shipments ± Adjustments – Expiries
    </div>
    <div style={{marginBottom: '20px'}}>
      <u>MOS</u> = Ending Balance / AMC
    </div>
    
    <div style={{fontWeight: 'bold', marginBottom: '5px'}}>Multi-Program/Equivalency Unit</div>
    <div style={{fontStyle: 'italic', marginBottom: '10px'}}>Same ending balance & MOS calculation</div>
    
    <div style={{marginBottom: '15px'}}>
      <u>Forecast, Actual, Shipment, Adjustment, Expiries, MIN, MAX</u> = Σ selected programs individual data elements
    </div>
    <div>
      <u>Consensus consumption:</u> Σ selected program actuals (if available), otherwise forecasts. <i>Therefore, this could be a sum of actuals and forecasts depending on data available.</i>
    </div>
  </div>
</div>

