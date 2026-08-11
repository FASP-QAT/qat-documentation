---
id: forecasting-module-program-data
title: "7. Forecasting Module: Program Data"
sidebar_label: "7. Forecast Program Data"
sidebar_position: 10
---
# Sección 7. Módulo de pronóstico: datos del programa

## A. Introducción

<div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
  <div style={{ flex: 1 }}>
    A forecast is an estimate/prediction of the quantities of products to be consumed/utilized by clients or consumers over a future period of time. In QAT, the forecast process is generally conducted in a specific order (see Figure to the right).<br/><br/>
    First, set up a program using Update Program Info or select a previous program using Download or Delete Program. After downloading the program, add information on the forecast period, threshold (%), products, and other program settings in the Update Version Settings and Updating Planning Unit screens. In QAT, users can either create forecasts by designing forecasting trees (tree-based forecast) or by leveraging historical consumption (consumption-based forecast) to reach a final forecast. For each product, choose consumption or tree methodology, or both!<br/><br/>
    Consumption-based forecasts are most useful in mature, stable programs that have a full supply of products and reliable data. This method can be the most reliable predictor of future consumption if future use is predicted to be very similar to the past. Ideally, 24+ months of monthly actual consumption data is available. If the necessary data for a consumption-based forecast is not available or not helpful in predicting future consumption, conduct a tree-based forecast, which flexibly accommodates all other forecast methods, such as morbidity, services, and demographic methods. Users can specify changes over time in a tree, either by directly specifying the rate of change or extrapolating from past data.<br/><br/>
    Once the various forecasts have been created, users can navigate to the Forecast Analysis and Outputs section to view and compare forecasts, and select the final forecast.
  </div>
  <div style={{ width: '220px', flexShrink: 0, textAlign: 'center' }}>
    <img src={require('@site/static/img/media/image234.png').default} alt="QAT Forecasting High-level Process Flow" style={{ width: '100%' }} />
    <p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px' }}>Figure 156: QAT Forecasting High-level Process Flow</p>
  </div>
</div>

## B. Información del programa

**<u>Propósito:</u>** Permite a los usuarios actualizar la información básica de su programa después de la creación inicial.

**<u>Usando esta pantalla:</u>**

Los _Administradores del programa_ pueden usar la pantalla principal para:
* Actualizar el nombre del programa de pronóstico, el administrador del programa y el campo de notas. Los administradores del programa también pueden optar por desactivar o activar un programa en esta pantalla. Para cambios relacionados con el área técnica, la organización o el nombre para mostrar del programa, los administradores del programa deben solicitar el cambio a un administrador de Realm a través del [Sistema de asistencia técnica QAT.](05-getting-started.md#qat-helpdesk-and-tickets)

Los _Realm Admins_ pueden usar la pantalla principal para:
* Actualice el área técnica, la organización, el nombre del programa de pronóstico, el nombre para mostrar del programa, el administrador del programa y el campo Notas. Los administradores de Realm también pueden optar por desactivar o activar un programa en esta pantalla.

## C. Configuración de versión

<img src={require('@site/static/img/media/image235.png').default} alt="Version Settings Interface" style={{ width: '100%', marginBottom: '15px' }} />

**<u>Propósito:</u>** Permite a los usuarios actualizar la configuración de su programa y ver detalles sobre versiones anteriores. Para ver los resultados del pronóstico, use las pantallas en la sección [Resultado del análisis de pronóstico] (12-forecasting-module-reports-and-outputs.md).

**<u>Usando esta pantalla:</u>**
*Nota: Se debe descargar un programa de pronóstico para actualizar la configuración de la versión. Todas las versiones anteriores de cada programa de pronóstico estarán en formato de solo lectura; sólo la versión local está disponible para actualización y edición.*

En esta pantalla, los usuarios pueden:

<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '10px 0' }}>
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <span style={{ minWidth: '25px', flexShrink: 0 }}>1)</span>
    <div style={{ flex: 1 }}>
      Update the following program settings for the downloaded, local program:
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', paddingLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>a.</span>
          <div style={{ flex: 1 }}>
            <strong>Version Notes</strong> – a free form editable text field that allows users a place to provide general notes about a particular forecast version. It is also visible and editable when uploading a program.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>b.</span>
          <div style={{ flex: 1 }}>
            <strong>Date Uploaded/Uploaded by User</strong> – denotes the user that uploaded each version of the forecast to the server and on what date. Useful for understanding the lifecycle of each program.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>c.</span>
          <div style={{ flex: 1 }}>
            <strong>Forecast Start, Forecast Period (Months), and Forecast End</strong> – based on the start & end date, QAT will automatically calculate the forecast period in months. Alternatively, users can choose to enter a forecast start date and number of months in the forecast period, and QAT will automatically calculate the forecast end date.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>d.</span>
          <div style={{ flex: 1 }}>
            <strong># Of Days in Month</strong> – used in consumption-based forecasts for adjusting actual consumption against the number of days stocked out. A user can choose anywhere from 15 to 31 days; however, QAT will default to “calendar days.” This field could be useful if a facility only wants to use business days (~20 days) to calculate the stockout rate.
            <div style={{ border: '3px double #000', padding: '10px 20px', margin: '15px auto', width: 'fit-content', backgroundColor: '#fff', textAlign: 'center', fontFamily: 'monospace' }}>
              Stock Out Rate = Stocked Out (days) / (# of Days in Month)<br/>
              Adjusted Consumption = Actual Consumption / Reporting Rate / (1 - Stock Out Rate)
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>e.</span>
          <div style={{ flex: 1 }}>
            <strong>Freight percentage</strong> – used in forecasting output screens and reports for estimating total procurement costs. This field is not mandatory and can be updated at any time.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>a.</span>
          <div style={{ flex: 1 }}>
            <strong>Forecast Threshold</strong> – this metric is used in the Compare and Select screen. QAT compares available Consumption Forecasts and Tree Forecasts. For any Tree Forecasts, QAT will flag the percentage above the highest or below the lowest Consumption Forecast. The comparison will be highlighted in <span style={{ color: 'red' }}>red text</span> if it is outside the threshold percentages set by the user in this screen. Assuming reliable actual consumption data, this comparison helps users determine if their Tree Forecasts are realistic. These two fields, high and low, are not mandatory and can be updated at any time.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <span style={{ minWidth: '25px', flexShrink: 0 }}>2)</span>
    <div style={{ flex: 1 }}>
      See a historical lifecycle of each program through all its versions.
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', paddingLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>a.</span>
          <div style={{ flex: 1 }}>
            View all version settings above
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ minWidth: '20px', flexShrink: 0 }}>b.</span>
          <div style={{ flex: 1 }}>
            (Right click) View the <a href="06-managing-programs-and-versions.md#forecast-validation">Forecast Validation</a> screen (same screen as viewed during the Upload process) – which lists missing forecasts, missing data and all notes. This serves as an easy for users to understand previous forecasts without downloading them. Use the <a href="11-forecasting-module-forecasting.md">Monthly Forecast</a>, <a href="12-forecasting-module-reports-and-outputs.md">Forecast Summary</a> or <a href="12-forecasting-module-reports-and-outputs.md">Version Comparison</a> screens to view the forecast outputs from other versions.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## D. Unidades de Planificación

**<u>Propósito:</u>** Permite a los usuarios agregar y actualizar unidades de planificación y las configuraciones de unidades de planificación asociadas que se utilizarán en sus pronósticos y para el cálculo en las pantallas de resultados de pronóstico.

**<u>Usando esta pantalla:</u>**
*Nota: Se debe descargar un programa de pronóstico para agregar o actualizar unidades de planificación y sus configuraciones.*

1. **Agregar unidades de planificación**: los usuarios deberán agregar en esta pantalla las unidades de planificación que deseen pronosticar. Las unidades de planificación se pueden agregar manualmente o copiar y pegar desde la pantalla "Actualizar unidad de planificación" del módulo de planificación de suministro, si la unidad de planificación ya se ha agregado al plan de suministro de un usuario.
2. **Actualizar configuración de unidad de planificación**: los usuarios también pueden usar esta pantalla para actualizar cualquier unidad de planificación y su configuración asociada. Los usuarios siempre deben Master Data Sync después de actualizar cualquier configuración para poder ver los cambios en otras pantallas del módulo de pronóstico. La configuración de la unidad de planificación y sus breves explicaciones son las siguientes:

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Column Name</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Description</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Used Where?</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Conversion Factor (FU:PU)</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>A non-editable field providing information on the conversion factor between the chosen PU and it's associated FU.</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Select screens (Data Entry & Adjustment, Compare & Select, Monthly Forecast) allow data entry/viewing in PU or FU</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Consumption Forecast?</strong></td>
      <td rowSpan={2} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}>For each PU, users can choose one or both methods. If the forecast type is checked for the PU, it will appear in the Consumption and Tree screens.</td>
      <td rowSpan={2} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}>Building your forecasts and then analyzing in the Compare & Select screen</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Tree Forecast?</strong></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Stock on Hand</strong> <em>(start of forecast period)</em></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>The actual or projected stock (quantity) at the beginning of your forecast period. Users can utilize the supply planning module to determine the SOH, if desired.</td>
      <td rowSpan={3} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}>Forecast Summary to calculate the procurement gap</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Existing Shipments</strong> <em>(forecast period)</em></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Total existing shipment quantity during the forecast period. Users can utilize the supply planning module to determine the existing shipment quantity <em>(it is recommended to not include planned shipment quantities unless there is a high likelihood of ordering).</em></td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Desired Months of Stock</strong> <em>(end of forecast period)</em></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>The MOS you wish to have at the end of your forecast.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Price Type</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Choose a specific procurement agent or "Custom."</td>
      <td rowSpan={2} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}>Forecast Summary to calculate the cost of the procurement gap</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Unit Price</strong></td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Auto-filled based on procurement agent or manually entered by a user.</td>
    </tr>
  </tbody>
</table>
<p style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.9em', marginTop: '5px' }}>Table 9: Forecasting Module Planning Unit Settings</p>

## E. Unidades de equivalencia

**<u>Propósito:</u>** Permitir que los usuarios administren Unidades de Equivalencia. Las Unidades de Equivalencia (UE) permiten a los usuarios agregar datos de productos que son diferentes, pero relacionados. Permiten a los usuarios agrupar múltiples unidades de pronóstico para agregarlas en [Informes y resultados] (módulo-de-12-previsiones-informes-y-salidas.md).

**<u>Usando esta pantalla:</u>**

**Asignación de unidades de equivalencia a unidades de pronóstico**
Utilice la pantalla principal para gestionar asignaciones entre unidades de equivalencia y unidades de previsión. Las asignaciones a nivel de dominio están disponibles para todos los usuarios y se indican mediante el programa "Nivel de dominio". Sin embargo, los administradores del programa pueden crear asignaciones específicas del programa (agregando una fila y etiquetándola a una UE específica). Si hay algún conflicto, las asignaciones específicas del programa tendrán prioridad y se utilizarán en lugar de las asignaciones a nivel de dominio.

Por ejemplo, un usuario está pronosticando medicamentos para tratar la QATitis, una afección en la que las personas no pueden dejar de usar QAT. El usuario puede pronosticar mediante diferentes tratamientos (diferentes unidades de pronóstico), pero desea ver cómo se agregan. Para el siguiente ejemplo, un paciente necesitaría 14 tabletas de FASPicilina, o 1 tubo de FASPasona (crema), o 0,5 viales de FASPicaína, o 2 barras de chocolate para tratar la QATitis. Por lo tanto, si diferentes pacientes se someten a diferentes tratamientos, un usuario puede agregar estos diferentes tratamientos creando/utilizando una Unidad de Equivalencia (UE).

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Equivalency Unit</th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Forecasting Unit</th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Conversion to EU</th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Average Treatment required to cure QATitis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 tablet of FASPicillin</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>14</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 tablet a day for 2 weeks</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>5mL tube of FASPasone (cream)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>1</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>0.5mL/day applied on the forehead over 10 days (1 tube total)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2mL vial of FASPicaine (injection)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>0.5</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>One injection of 1mL (Two people can share one vial)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of white chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>2</td>
      <td rowSpan={3} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'middle' }}>2 bars of chocolate. The type of chocolate does not matter, as all chocolate contains the natural form of FASPicillin.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of dark chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>2</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of milk chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>2</td>
    </tr>
  </tbody>
</table>
<p style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.9em', marginTop: '5px' }}>Table 10: EU Example - Treatment for QATitis</p>

**Pasos para crear y gestionar unidades de equivalencia**
1. Un usuario primero debe verificar si la UE ya existe en los datos maestros de QAT navegando a "Realm Masters" → "Unidades de equivalencia".
2. Si la UE no existe, haga clic en "Administrar unidad de equivalencia" y luego en "Agregar fila" y los usuarios pueden ingresar la UE que les gustaría utilizar para su programa específico en todo QAT. Esta UE será específica del programa y no estará disponible para otros programas. Si hay una UE que beneficiaría a la comunidad QAT, los usuarios pueden solicitarla a través del [Sistema de asistencia técnica de tickets QAT.](05-getting-started.md#qat-helpdesk-and-tickets)

<div style={{ margin: '15px 0' }}>
  <img src={require('@site/static/img/media/image237.png').default} alt="Manage Equivalency Unit Button" />
</div>

3. Si la UE existe y un usuario desea asignar unidades de pronóstico a la UE existente, puede hacer clic en "Agregar fila" en la pantalla principal y asignar la unidad de pronóstico a la UE a nivel de programa. Si un usuario desea asignar la unidad de pronóstico a una UE existente a nivel de reino y cree que beneficiaría a la comunidad QAT, los usuarios pueden solicitarlo a través del [Sistema de asistencia técnica de emisión de boletos QAT.](05-getting-started.md#qat-helpdesk-and-tickets)

<div style={{ margin: '15px 0' }}>
  <img src={require('@site/static/img/media/image238.png').default} alt="Equivalency Unit Mappings Screen" />
</div>

4. Los usuarios también pueden editar EU específicos del programa en la pantalla principal.
5. El usuario debe hacer clic en "Enviar" cuando haya terminado de editar y sincronizar datos maestros, para poder ver la UE disponible en los menús desplegables en las pantallas de Informes y Salidas.

### ¿Dónde se utilizan las unidades de equivalencia?

* En la pantalla [Comparar y seleccionar] (12-forecasting-module-reports-and-outputs.md#9a-compare-and-select), el usuario puede mostrar sus pronósticos en UE. Usando el ejemplo anterior, un usuario que pronostica 10.000 barras de chocolate amargo por mes, podría optar por mostrar su pronóstico en la UE de "Tratamientos para QATitis" y mostrar su pronóstico como 5.000 "Tratamientos para QATitis" por mes.
* En la pantalla [Pronóstico mensual](12-forecasting-module-reports-and-outputs.md#9b-monthly-forecast), el usuario puede mostrar sus pronósticos seleccionados por unidades de planificación individuales o agregarlos entre unidades de planificación si están conectadas por UE. Por ejemplo, si un usuario pronosticó 10.000 barras de chocolate amargo, 10.000 barras de chocolate blanco y 14.000 tabletas de FASPicilina por mes, QAT mostraría 7.000 "Tratamientos para QATitis".
* En la pantalla del informe [Error de pronóstico (mensual)](09-supply-planning-module-reports.md#d2-forecast-error-monthly), los usuarios también pueden ver el consumo real y pronosticado en Unidades de Equivalencia.

<table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Forecast</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}><strong>Equivalent in "Treatments for QATitis"</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>10,000 bars of dark chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>5,000</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>10,000 bars of white chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>5,000</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>14,000 tablets of FASPicillin</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>1,000</td>
    </tr>
    <tr style={{ fontWeight: 'bold' }}>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>Total</td>
      <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>7,000</td>
    </tr>
  </tbody>
</table>
