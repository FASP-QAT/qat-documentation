---
id: managing-programs-and-versions
title: "3. Managing Programs and Versions"
sidebar_label: "3. Managing Programs and Versions"
sidebar_position: 3
---
# Sección 3. Gestión de programas y versiones

## A. Trabajar con datos del programa

|                      | En línea | Sin conexión |
| :------------------ | :------- | :------ |
| Datos de otros | Descargar | Importar |
| Datos de los usuarios | Subir | Exportar |


![Left Menu Bar](/img/media/image87.png)

Los datos del programa se pueden descargar, cargar, importar y exportar en QAT.

- Tenga en cuenta que los programas de previsión son completamente diferentes de los programas de planificación de suministros. Asegúrese de estar en el módulo correcto antes de descargar, cargar, importar o exportar.
- Los usuarios deben **Descargar** los datos del programa para comenzar a planificar o pronosticar el suministro y deben **Cargar** sus datos nuevamente al servidor para compartir su trabajo con otros.
- La carga puede ser como "borrador" o como "final". Cargar un programa de plan de suministro como "final" inicia el proceso de revisión del plan de suministro. El estado de las versiones del plan de suministro se puede ver en la pantalla **Versión y revisión del plan de suministro**; esta es la única función descrita en esta sección que está disponible para los lectores de informes. Cargar un programa de pronóstico como "final" permite a los usuarios importar ese pronóstico directamente al módulo del plan de suministro. Consulte [Importación de pronósticos QAT](07-supply-planning-module-program-data.md#importing-forecasts-into-supply-plans) para obtener más instrucciones sobre cómo importar un pronóstico a un plan de suministro.
- Cuando no hay Internet disponible, la función **Exportar** permite a los usuarios compartir sus datos con otros usuarios a través de dispositivos externos como un pendrive/unidad flash, quienes luego pueden usar la función **Importar** datos para abrir ese archivo en su computadora.
- Se puede acceder a estas funciones desde la barra de menú izquierda en **Administración de programas**.
- Además, se puede acceder a Descargar y cargar desde la barra de menú superior.

<div style={{textAlign: 'center'}}>

![Top Menu Bar](/img/media/image88.png)

_Top Ribbon Menu Bar_

</div>

## B. Descargar/Eliminar

- <u>¿Quién?</u> Esta función está disponible para **Administradores de ámbito/programa, usuarios de programas y revisores de planes de suministro.** No está disponible ni es necesaria para **Visores de informes**
- <u>¿Cuándo?</u> El usuario debe estar en línea para descargar un programa.
- <u>¿Por qué?</u> Los usuarios deben descargar un programa si desean ingresar o actualizar datos, o pronosticar o suministrar activamente un plan (en lugar de simplemente ver informes). Los usuarios pueden descargar un programa cuando notan que su versión local no es la más reciente (es decir, cuando el ícono de descarga es rojo en lugar del azul habitual). La descarga de programas permite al usuario trabajar sin conexión. Sin embargo, tenga en cuenta que los programas <u>deben</u> descargarse para completar las siguientes funciones, <u>incluso</u> si el usuario está en línea:
  - Planificación de Suministros:
    - Ingresar/actualizar datos (consumo, inventario/ajustes, envíos). Por ejemplo, si el usuario está trabajando en "Detalles de consumo", debe seleccionar un programa de la lista proporcionada. La lista mostrará datos sólo para aquellos "Programas" que se hayan descargado en la base de datos del índice local.
    - Plan de suministro/escenario
    - Ver lista de problemas QAT
    - En informes, ver los datos en la computadora local (en lugar de en el servidor)
  - Previsión:
    - Ingresar/actualizar datos (ingresar/importar consumo real, agregar/editar árboles de pronóstico, extrapolar, etc.)
    - En informes de validación o análisis de pronóstico, ver los datos en la computadora local (en lugar de en el servidor)

- <u>¿Qué sucede cuando un usuario descarga un programa?</u> Cuando el usuario descarga un programa, se almacena en la base de datos de índice local en formato JSON.

- <u>Cómo descargar un programa:</u>
  1. Determine si desea descargar desde el módulo de pronóstico o de planificación de suministro y navegue hasta el módulo correcto (consulte <u>Sección 2.J Navegación y barra de menús</u>). Si solo tiene acceso a un módulo, puede ignorar este paso.
  2. Vaya a "Administración de programas" &gt; "Descargar/eliminar programa". (Como alternativa, acceda a esta pantalla haciendo clic en el ícono ![download icon](/img/media/image89.png) en la barra superior derecha en QAT). La pantalla mostrará los datos del programa como se muestra en la siguiente figura.
     - <span style={{color: 'red'}}>El texto rojo</span> indica que el programa descargado no es la última versión. <span style={{color: 'green'}}>El texto verde</span> indica que el programa descargado es la última versión. El texto negro indica que el programa no se ha descargado.

<div style={{textAlign: 'center'}}>

![Load Program Screen](/img/media/image91.png)

_Load Program Screen_

</div>

3. Para descargar
   un. Seleccione la casilla de verificación junto al programa que desea descargar. De forma predeterminada, QAT descargará la última versión del programa seleccionado.
   b. *(opcional)* Haga clic en el botón triangular ![triangle button](/img/media/image90.png) al lado del programa para ver todas las versiones del programa. Se mostrarán las cinco últimas versiones. Haga clic en "ver más" para ver versiones anteriores. Utilice la casilla de verificación para seleccionar qué versiones específicas desea descargar.

<div style={{textAlign: 'center'}}>

![Version Tree – how to expand](/img/media/image92.png)

_Version Tree – how to expand_

</div>

   c. Haga clic en el botón **Descargar** para descargar el programa a su sistema.

4. Para eliminar o limpiar:
   un. Haga clic en el botón triangular al lado del programa para ver todas las versiones del programa.
   b. Seleccione el ícono de la papelera ![trashcan icon](/img/media/image93.png) junto a la versión del programa que desea eliminar. Si tiene varias versiones, también tiene la opción de hacer clic en el icono de limpieza ![clean-up icon](/img/media/image94.png) para eliminar todas las versiones excepto la última versión local.

<div style={{textAlign: 'center'}}>

![Download Screen Version Tree – clean up and delete icons](/img/media/image95.png)

_Download Screen Version Tree – clean up and delete icons_

</div>

5. *(opcional)* En el módulo de planificación de suministro, los usuarios pueden descargar un subconjunto de sus planes de suministro a medida que sus programas comienzan a tener más datos históricos.
   - Para ello, el usuario hace clic en “Descargar rango específico de datos del plan de suministro” y selecciona el mes/año de inicio de los datos que descargará.
   - Si se marca “Descargar rango específico de datos del plan de suministro”, la versión del programa seleccionada solo mostrará datos a partir de la fecha deseada (mínimo 18 meses atrás).

<div style={{textAlign: 'center'}}>

![Download specific range of data](/img/media/image96.png)

_Download specific range of data_

</div>

   - La selección del rango de fechas se aplicaría a TODOS los programas seleccionados para descargar. Si el usuario desea descargar un programa completo (programa A) y un programa truncado (programa B), debe completar el proceso de descarga dos veces: una para el programa completo y otra para el programa truncado.
   - Los datos más antiguos no descargados siempre existen en el servidor y no se pueden eliminar ni sobrescribir.
   - Cuando el usuario descarga un programa truncado (v1), lo actualiza y sube una nueva versión (v2), la versión del servidor incluirá la totalidad de los datos, mientras que la nueva versión local permanecerá truncada con la fecha de inicio previamente seleccionada. El usuario puede eliminar esa versión y descargar la versión 2 completa del servidor, o la versión 2 con un rango diferente de datos, según sea necesario.

**Nota**: Si descarga una versión anterior, o si otro usuario carga una versión posterior en el servidor después de la descarga, verá un mensaje como el siguiente en la Figura 36 cada vez que se realice la sincronización de datos maestros (al iniciar sesión, al descargar un nuevo programa o si el usuario lo solicita manualmente).
- Si selecciona "Aceptar", se descargará la última versión del servidor y su versión local se eliminará permanentemente. Seleccione "Aceptar" únicamente si está de acuerdo con descartar los cambios o si no ha realizado ningún cambio.
- Si seleccionas “cancelar”, no se realizará ninguna acción y permanecerás con tu versión local.

<div style={{textAlign: 'center'}}>

![More recent server warning](/img/media/image97.png)

_“More recent server” warning on user login_

</div>

## C. Subir

- <u>¿Quién?</u>
  - **Planificación de suministro:** Administradores de aplicaciones/reinos/programas y usuarios del programa. No disponible o necesario para los visores de informes
  - **Previsión:** Aplicación/Reino/Administradores de programa y usuarios de programa. No disponible o necesario para los visualizadores de pronósticos
- <u>¿Por qué?</u>
  - **Subiendo como borrador:**
    - **Planes/Previsiones de suministro:** Comparta la versión local de los datos del programa con el servidor y otros usuarios (cargando como borrador)
  - **Subiendo como final:**
    - **Planificación de suministro:** Indicar a todos los usuarios que el plan de suministro ha sido completamente actualizado, y también iniciar el proceso de revisión del plan de suministro.
    - **Previsiones:** Permitir que las previsiones finales se importen al plan de suministro.
- <u>¿Qué sucede cuando un usuario carga un programa?</u> Cuando el usuario carga un programa, se convierte en la última versión en el servidor y está disponible para que todos los demás usuarios lo descarguen o lo vean.
  - Tenga en cuenta que si se descargó una versión truncada del programa del plan de suministro (por ejemplo, v10), cuando el usuario cargue su versión local (convirtiéndose en v11), la nueva versión en el servidor contendrá todos los datos, no solo el subconjunto con el que trabajó el usuario.
- <u>¿Cuándo?</u> El usuario debe estar en línea para cargar un programa

**Módulo del plan de suministro** - Cómo cargar un programa:

1. Asegúrese de estar en el Módulo del Plan de Suministros

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li>Go to "Program Management" > "Upload Version."</li>
<li>Or, Click the <img src="/img/media/image98.png" alt="upload icon" style={{ verticalAlign: 'middle' }} /> icon in the top right bar in QAT</li>
</ol>

<div style={{ display: 'flex', flexDirection: 'row', gap: '2%', flexWrap: 'wrap' }}>

<div style={{ flex: '1 1 50%', minWidth: '300px' }}>

2. Use **Program** dropdown to select the appropriate program, if it is not already selected (only downloaded programs will be visible)
3. Select a **Version Type** using the dropdown:

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li><b>Draft Version:</b> Indicates the supply plan is a work in progress. Use this to share a supply plan with others, but not ready to be submitted into the supply plan review process.</li>
<li><b>Final Version:</b> Indicates that the supply plan has reached a final status, and is being submitted to the supply plan review process. Note that QAT will not allow the user to upload as final with any “Open” issues in the QAT Problem List. Please use the QAT problem list (see <a href="08-supply-planning-module-supply-planning.md#closing-and-addressing-problems">Closing and Addressing Problems</a>) to mark any open issue as "Addressed" with an explanatory note, or move issue to "in compliance" via data entry first.</li>
</ol>
</div>

<div style={{ flex: '1 1 45%', minWidth: '300px' }}>

<div style={{textAlign: 'center'}}>

![Upload Version](/img/media/image99.png)

_Supply Planning - Upload Version_

</div>

| Característica | BORRADOR | FINAL |
| :----------------------------------------------- | :---: | :---: |
| Debe estar en línea para cargar la versión local al servidor |   ✓ |   ✓ |
| Datos enviados a los sistemas ERP vinculados |   ✕ |   ✓ |
| Problemas 'abiertos' permitidos en la lista de problemas QAT |   ✓ |   ✕ |
| Se informará al revisor del plan de suministro |   ✕ |   ✓ |

<div style={{textAlign: 'center'}}>

_Uploading Supply Plan as Draft vs Final_

</div>

</div>

</div>

4. En **Notas**, escriba cualquier nota general sobre esta versión, como un resumen de los principales cambios realizados en el plan de suministro y el razonamiento detrás de esos cambios.
5. En las 4 pestañas (Consumo, Inventario, Envío, Lista de problemas QAT), QAT mostrará una comparación detallada de los detalles del plan de suministro entre la "Versión local" y la "Versión del servidor". Revise cada pestaña para ver si hay registros resaltados. Los registros <span style={{backgroundColor: '#ffff00'}}>amarillos</span> requieren su acción antes de que pueda cargar el plan de suministro

<div style={{ marginLeft: '20px', marginTop: '10px' }}>
     <b>Legend Explanation:</b>

<ul style={{ marginTop: '5px', listStyleType: 'disc' }}>
<li><span style={{backgroundColor: '#c2e0c6'}}>Green</span>: represents changes that have been made in the local version; by uploading your program, these changes will save to the online server as a new version.</li>
<li><span style={{backgroundColor: '#cfe2f3'}}>Light blue</span>: represents changes made by another user that has already been uploaded to the live/online version - because this is a data point that you did not edit, the server version will persist for this/these records.</li>
<li><span style={{backgroundColor: '#ffff00'}}>Yellow</span>: represents a conflict in data between the local version and the server version for the same data cell. You must resolve all yellow conflicts before the Upload button appears. To resolve a conflict, right click on the relevant row, and select "Resolve Conflict." In the pop-up screen, choose whether to keep the <span style={{backgroundColor: '#c2e0c6'}}>local version of the data</span> or the <span style={{backgroundColor: '#cfe2f3'}}>server version of the data</span>.</li>
</ul>
</div>

<div style={{textAlign: 'center'}}>

![Resolving Conflict while uploading supply plan](/img/media/image100.png)

_Resolving Conflict while uploading supply plan_

</div>

6. Después de revisar todas las actualizaciones y resolver todos los conflictos, haga clic en el botón "Cargar". QAT proporcionará un mensaje de confirmación.
7. **(Para final)** Los planificadores de suministros y los revisores del plan de suministro recibirán una notificación por correo electrónico confirmando que su plan de suministro se ha cargado como final.
8. **(Para la versión final)** Los planificadores de suministros, los administradores de programas y los revisores de planes de suministros, los administradores de dominio, los usuarios de programas, los visualizadores de datos y los visualizadores de planes de suministros recibirán una notificación por correo electrónico cuando se rechace su plan de suministros. También pueden verificar el estado de la revisión de su plan de suministro en el Informe [Versión y revisión del plan de suministro](06-managing-programs-and-versions.md#d-supply-plan-version-and-review-supply-plan-module-only).

**Módulo de pronóstico** – Cómo cargar un programa:

1. Asegúrese de estar en el módulo de pronóstico.

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li>Go to “Program Management” > “Upload Version.”</li>
<li>Or, Click the <img src="/img/media/image102.png" alt="upload icon" style={{ verticalAlign: 'middle' }} /> or <img src="/img/media/image103.png" alt="upload icon alternative" style={{ verticalAlign: 'middle' }} /> icon in the top right bar in QAT</li>
</ol>

<div style={{ display: 'flex', flexDirection: 'row', gap: '2%', flexWrap: 'wrap' }}>

<div style={{ flex: '1 1 50%', minWidth: '300px' }}>

2. Use **Program** dropdown to select the appropriate program, if it is not already selected (only downloaded programs will be visible)
3. Select a **Version Type** using the dropdown:

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li><b>Draft Version:</b> Indicates the forecast is a work in progress. Use this to share a forecast with others.</li>
<li><b>Final Version:</b> Indicates that the forecast has reached a final status and can be imported into the supply plan. Note that QAT will not allow the user to upload as final if no there are no changes between the latest server version and the version being uploaded.</li>
</ol>

</div>

<div style={{ flex: '1 1 45%', minWidth: '300px' }}>

<div style={{textAlign: 'center'}}>

![Upload Version](/img/media/image101.png)

_Forecasting - Upload Version_

</div>

| | BORRADOR | FINAL |
| :--- | :---: | :---: |
| Debe estar en línea para cargar la versión local al servidor | ✓ | ✓ |
| El consumo previsto se puede importar al módulo de planificación de suministro | ✕ | ✓ |

<div style={{textAlign: 'center'}}>

_Uploading Forecast as Draft vs Final_

</div>

</div>

</div>

4. En **Notas**, escriba cualquier nota general sobre esta versión, como resumir los principales cambios realizados en el pronóstico y el razonamiento detrás de esos cambios.
5. En las 5 pestañas (Configuración de versión, Unidad de planificación, Consumo, Árbol, Pronóstico seleccionado), QAT mostrará una comparación detallada de los detalles entre la "Versión local" y la "Versión del servidor". Revise cada pestaña para ver si hay registros resaltados. Los registros <span style={{backgroundColor: '#ffff00'}}>amarillos</span> requieren su acción antes de que pueda cargar su versión.

<div style={{ marginLeft: '20px', marginTop: '10px' }}>
     <b>Legend Explanation:</b>

<ul style={{ marginTop: '5px', listStyleType: 'disc' }}>
<li><span style={{backgroundColor: '#c2e0c6'}}>Green</span>: represents changes that have been made in the local version; by uploading your program, these changes will save to the online server as a new version.</li>
<li><span style={{backgroundColor: '#cfe2f3'}}>Light blue</span>: represents changes made by another user that has already been uploaded to the live/online version - because this is a data point that you did not edit, the server version will persist for this/these records.</li>
<li><span style={{backgroundColor: '#ffff00'}}>Yellow</span>: represents a conflict in data between the local version and the server version for the same data cell. You must resolve all yellow conflicts before the Upload button appears. To resolve a conflict, right click on the relevant row, and select "Resolve Conflict." In the pop-up screen, choose whether to keep the <span style={{backgroundColor: '#c2e0c6'}}>local version of the data</span> or the <span style={{backgroundColor: '#cfe2f3'}}>server version of the data</span>.</li>
</ul>
</div>

<div style={{textAlign: 'center'}}>

![Resolving Conflict while uploading forecast](/img/media/image104.png)

_Resolving Conflict while uploading forecast_

</div>

6. Después de revisar la tabla y confirmar los pronósticos seleccionados, haga clic en el botón "Cargar". Esto abrirá una ventana emergente separada (“Validación de pronóstico”). La pantalla **Validación de pronóstico** brinda a los usuarios la posibilidad de verificar su trabajo y cualquier cosa que se hayan perdido al crear y seleccionar los pronósticos. El usuario tiene la opción de ver las diferentes validaciones solo para los pronósticos <u>seleccionados</u> para cada unidad de planificación, o ver las validaciones para <u>todos</u> pronósticos en el programa. Para cambiar esta configuración, marque/desmarque la casilla en la parte superior de la pantalla. Para facilitar el acceso, las validaciones que están en fuente <span style={{color: 'blue'}}>azul</span> están vinculadas a la página en QAT donde se marca la validación. Por ejemplo, si no se selecciona un pronóstico para una de las unidades de planificación, al hacer clic en la unidad de planificación en la página de validación, accederá a la pantalla Comparar y seleccionar, donde podrá seleccionar un pronóstico.

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li><b>Section 1</b> flags any active planning units that do not have a selected forecast.</li>
<li><b>Section 2</b> looks at all active planning units that use consumption-based forecasting. 2a will flag if any of the consumption forecasts are missing actual consumption values (gap). 2b will flag any planning units that do not have at least 24 months of consumption data. If the checkbox at the top is selected, then only the planning units with a selected consumption forecast will be flagged. Planning units with a selected tree forecast will not be flagged in this section.</li>
<li><b>Section 3</b> looks at all active planning units that use tree forecasting. Planning units with a selected consumption forecast will not be flagged in this section. 3a flags any planning units that do not appear on any tree. 3b flags any tree branches that are missing a planning unit. 3c flags any tree nodes where the parent’s child nodes don’t add up to exactly 100%. In section 3c, clicking on the + icon will expand a table with details on which nodes and % are being flagged.</li>
<li><b>Section 4</b> compiles all of the notes across the different screens in the forecasting module. 4a will display notes from the Data Entry & Adjustment screen. 4b will display notes from the ‘Manage Tree’ screen. These notes include both tree specific notes and scenario specific notes. 4c will display notes from the ‘Manage Tree’ screen, specifically the notes in each node.</li>
</ol>

<div style={{textAlign: 'center'}}>

![Forecast Validation](/img/media/image105.png)

_Forecast Validation_

</div>

7. Después de revisar todas las validaciones y resolver todos los problemas, haga clic en el botón "Aceptar" para cargar. QAT proporcionará un mensaje de confirmación.

## D. Versión y revisión del plan de suministro (solo módulo del plan de suministro)

- <u>¿Quién?</u> Esta función está disponible para **Administradores de aplicaciones/reinos/programas, usuarios de programas, revisores de planes de suministro y visualizadores de planes de suministro**
- <u>¿Cuándo?</u> El usuario debe estar en línea. Los revisores del plan de suministro recibirán un correo electrónico de QAT cada vez que se cargue un plan de suministro como final (es decir, listo para revisión).
- <u>¿Por qué?</u> Esta función permite a los usuarios **revisar el estado de revisión del plan de suministro.**
  - **Los planificadores de suministros** (administradores y usuarios del programa) pueden verificar el estado de su revisión
  - **Los revisores del plan de suministro** pueden ver la cola de revisión
  - **Los visitantes del plan de suministro** pueden comprobar el estado de las revisiones del plan de suministro.
- <u>¿Cómo?</u>
  1. Vaya a “Administración del programa” &gt; “Versión y revisión del plan de suministro” y se mostrará la siguiente pantalla. Seleccione el período del informe, el país, el programa, el tipo de versión y el estado. En esta tabla, los usuarios pueden ver el estado de todos los planes de suministro y los comentarios de versión. Los usuarios también pueden usar las opciones de búsqueda, filtrado y clasificación (consulte [Navegación y barra de menú](05-getting-started.md#j-navigation-and-menu-bar)) para encontrar programas específicos.

<div style={{textAlign: 'center'}}>

![Supply Plan Versions and Review](/img/media/image106.png)

_Supply Plan Versions and Review_

</div>

2. Haga clic en cualquier fila de la tabla para abrir los detalles de ese plan de suministro.
   _**SOLO para revisores del plan de suministros –**_

<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li>Use the first tab “Supply Planning” to review the stock status and data elements of any given planning unit</li>
<li>
       Use the second tab “QAT Problem List” to review any issues within the supply plan.

<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Use the “Reviewed” column and check the checkbox in each row as you review them. All issues other than “in compliance” or “resolved” must be checked as “reviewed” in order for you to approve or reject the plan.</li>
<li>Use the “Enter Reviewer Notes” column to note any feedback for the supply planner.</li>
<li>Update the “Problem Status” as needed – Leave issues as “Addressed” if you want the supply planner to review them again in the next review cycle (the issue will become “open” in the next version). Mark issues as “Resolved” if they don’t need to be reviewed again even in future review cycles. Mark issues as “Open” if you want to communicate to the reviewer that they need to update their comments.</li>
<li>
           If there is a problem that should be addressed by the supply planner, but is not automatically flagged by the QAT Problem List, the reviewer can add a manual problem by clicking the “+” symbol <img src="/img/media/image103.png" alt="plus symbol" style={{ verticalAlign: 'middle' }} /> in the top right of the screen.

<ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
<li>Manual problems must have an associated planning unit, criticality, description, and suggestion. These problems will be added as a separate row in the QAT Problem List for supply planners to address.</li>
</ol>
</li>
</ol>
</li>
<li>
Después de revisar, cambie el estado del Plan de suministro a Aprobado o Necesita revisión, proporcione notas (obligatorio) y haga clic en "Actualizar".
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>
Utilize the Version Notes History to view overall notes on the supply plan through time.

<div style={{textAlign: 'center'}}>

![View Notes History Button](/img/media/image107.png)

_View Notes History Button_

</div>

<div style={{textAlign: 'center'}}>

![Version Notes History Example](/img/media/image108.png)

_Version Notes History Example_

</div>
</li>
<li>
<b>Note:</b> There is an additional status for “No Review Needed” that can be used when a duplicate supply plan is uploaded or a supply plan is uploaded outside of the submission period window.

<div style={{textAlign: 'center'}}>

![Supply Plan Version and Review (second screen)](/img/media/image109.png)

_Supply Plan Version and Review (second screen)_

</div>
</li>
</ol>
</li>
</ol>

3. El usuario que envió el plan de suministro para revisión será notificado por correo electrónico cuando su envío sea Aprobado, Necesita revisión o No se necesita revisión. Las reglas para las notificaciones por correo electrónico de revisión del plan de suministro son las siguientes:
<ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px' }}>
<li>
Notification of <b>Uploaded</b> final supply plan
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Sent to: All supply plan reviewers with access to that program.</li>
<li>Cc'd: User who uploaded the version</li>
<li>Bcc'd: All program admins with access to that program.</li>
</ol>
</li>
<li>
Notificación de <b>Necesita revisión</b> plan de suministro:
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Sent to: The user who uploaded the supply plan.</li>
<li>Cc'd: Reviewer who requested revisions to the version</li>
<li>Bcc'd: All reviewers with access to that program as well as admins with access to that program.</li>
</ol>
</li>
<li>
Notificación de plan de suministro <b>aprobado</b>:
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Sent to: The user who uploaded the plan.</li>
<li>Cc'd: All users who have access to that program except for app admins and reports viewer.</li>
</ol>
</li>
<li>
Notificación de <b>No se necesita revisión</b> plan de suministro:
<ol style={{ listStyleType: 'lower-roman', paddingLeft: '20px' }}>
<li>Sent to: The user who uploaded the plan</li>
<li>Cc'd: The supply plan reviewer</li>
</ol>
</li>
</ol>

## E. Exportar

- <u>¿Quién?</u> Esta función está disponible para **Administradores de aplicaciones/reinos/programas, usuarios de programas y revisores de planes de suministro.** Esta función no está disponible ni es necesaria para **Visores de informes.**
- <u>¿Por qué?</u> La función “Exportar Programa” se utiliza cuando el usuario desea exportar el programa a su máquina local. Al utilizar la función Exportar, los datos del programa se pueden compartir con otras personas sin conexión. Por ejemplo, el usuario A puede exportar un programa y guardar ese archivo en una unidad USB para compartirlo con el usuario B, que está desconectado.
- <u>¿Qué?</u> El archivo de datos del programa se exportará en formato zip. El archivo zip contiene todos los datos de esa versión del programa. Los usuarios pueden optar por exportar en formato cifrado o no cifrado. Posteriormente, este archivo se puede compartir con otras personas para importarlo a QAT o, si no está cifrado, analizarlo fuera de QAT.
  - **Nota:** si el usuario descargó una versión con un rango de datos seleccionado, la exportación también será para ese rango de datos seleccionado)

<div style={{textAlign: 'center'}}>

![Export Program Screen](/img/media/image110.png)

_Export Program Screen_

</div>

- <u>Cómo exportar un programa:</u>
<ol style={{ paddingLeft: '20px' }}>
<li>Determine whether you would like to export from the forecasting or the supply planning module, and navigate to the correct module (See [Section 2.J Navigation and Menu Bar](05-getting-started.md#j-navigation-and-menu-bar)). If you only have access to one module, you can ignore this step.</li>
<li>Go to “Program Management” > “Export Program”</li>
<li>
Select the program to be exported using the dropdown. Programs must be first downloaded before exporting is available. (See [Section 3.B Download/Delete Program](06-managing-programs-and-versions.md#b-downloaddelete-program)).
<ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
<li>If the program was downloaded with a subset of data, the export will also be limited to that same subset.</li>
</ul>
</li>
<li>
Determine whether or not you need an unencrypted version.
<ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
<li>For importing back into QAT, leave the “Do you want to encrypt” checkbox checked</li>
<li>For analyzing data outside of QAT, uncheck the “Do you want to encrypt” checkbox</li>
</ul>
</li>
<li>Click on the “Submit” button to save the changes.</li>
<li>A browse window will pop up. Select the folder you want to save the exported file in. Then click “Save.”</li>
<li>The .zip file will now be saved in the selected folder.</li>
<li>Share the .zip file with others as needed.</li>
</ol>

## F. Importar

<ul>
<li><u>Who?</u> This function is available for <b>Application/Realm/Program Admins, Program Users and Supply Plan Reviewers.</b> Not available or needed for <b>Report Viewers</b></li>
<li>
<u>¿Por qué?</u> La función “Importar programa” se utiliza cuando el usuario está trabajando en el programa en modo fuera de línea y desea abrir un programa que ha sido exportado a un archivo .zip.
<ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
<li><b>Note:</b> The program data file must be saved in the zip format). For example, user B can (while offline) import a program that user A exported and saved to an external device</li>
<li><b>Note:</b> If the user exported a version with a selected range of data, the import will also be for that selected range of data.</li>
</ul>
</li>
<li><u>When?</u> This function can be used when offline or online.</li>
</ul>

<div style={{textAlign: 'center'}}>

![Import Program Screen](/img/media/image111.png)

_Import Program Screen_

</div>

- <u>Cómo importar un programa:</u>
<ol style={{ paddingLeft: '20px' }}>
<li>Determine whether you would like to export from the forecasting or the supply planning module, and navigate to the correct module (See [Section 2.J Navigation and Menu Bar](05-getting-started.md#j-navigation-and-menu-bar)). If you only have access to one module, you can ignore this step.</li>
<li>Go to “Program Management” > “Import Program”</li>
<li>Click “Browse”. Choose the required file that needs to be imported. The selected file must be in the zip format. The zip file may have multiple programs.</li>
<li>Click “Next”</li>
<li>Select the required program to import. (if only one program is in the file, it will be auto selected)</li>
<li>Click on the “Import” button to import the program into the local machine.</li>
</ol>

## G. Comparación de versiones

**Propósito:** Permitir a los usuarios ver y comparar 2 versiones diferentes del mismo programa de pronóstico. En esta pantalla, los usuarios seleccionarán un programa de pronóstico para ver y desde allí seleccionarán 2 versiones de ese programa para comparar. El usuario puede seleccionar tanto la versión local como la del servidor, así como la versión borrador y final. Si la versión tiene un \* al lado, esto indica que la versión es definitiva. Una vez que el usuario haya seleccionado todos los menús desplegables, aparecerá una tabla comparando las dos versiones de pronóstico. Para cada combinación de unidad de planificación y región, la tabla mostrará el pronóstico seleccionado, la cantidad de pronóstico y notas para cada una de las 2 versiones de pronóstico. Esta pantalla es sólo para fines de visualización y no se pueden realizar cambios en los pronósticos seleccionados en esta pantalla.

<div style={{textAlign: 'center'}}>

![Version Comparison Interface](/img/media/image112.png)

_Version Comparison_

</div>

<u>**Usando esta pantalla:**</u>

1. Primero, seleccione entre los filtros de salida de los menús desplegables. Esta pantalla solo compara 1 programa a la vez, pero permite al usuario comparar múltiples versiones de ese programa. El usuario tiene la capacidad de comparar cualquier combinación de versiones finales y borradores, así como versiones locales y de servidor. Si la versión tiene un \* al lado, esto indica que la versión es definitiva. Las notas de la versión y el período de pronóstico aparecerán atenuados ya que son campos no editables. Para actualizar estos campos, vaya a "Configuración de versión".
2. Una vez que se seleccionen todos los menús desplegables, aparecerá una tabla con datos de ambas versiones de pronóstico que se seleccionaron. Para cada combinación de unidad de planificación y región, la tabla mostrará el pronóstico seleccionado, la cantidad total de pronóstico para el período de pronóstico y cualquier nota de pronóstico para ese pronóstico seleccionado. Cada lado de la tabla representa 1 de las 2 versiones de pronóstico seleccionadas. La fila superior de la tabla muestra para qué versión muestra datos el lado.
3. Esta pantalla se puede exportar en formato PDF y CSV haciendo clic en los iconos en la parte superior derecha de la página.