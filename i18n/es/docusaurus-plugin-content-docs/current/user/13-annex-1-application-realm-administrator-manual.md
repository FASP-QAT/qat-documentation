---
id: annex-1-application-realm-administrator-manual
title: "Annex 1: Application & Realm Administrator Manual"
sidebar_label: "Annex 1: Admin Manual"
sidebar_position: 13
---
# Anexo I: Manual del administrador de aplicaciones y dominios

## A. Introducción

Si bien el objetivo del manual del usuario es guiar a los administradores y usuarios del programa sobre cómo suministrar un plan en QAT, el objetivo de este anexo es brindar orientación sobre las funcionalidades disponibles solo para los administradores de aplicaciones y dominios. Los maestros de aplicaciones están disponibles principalmente para el administrador de la aplicación (con algunas excepciones), mientras que los maestros de nivel de reino están disponibles tanto para los administradores de la aplicación como del reino.

## B. Panel de aplicación

Las funciones disponibles en el Panel de la aplicación de pronóstico serán visibles según el **rol del usuario**. A continuación se muestra una explicación de los mosaicos exclusivos de los administradores de nivel de aplicación y reino. Para obtener una explicación de otros mosaicos (boletos y programa), consulte [Navegación y barra de menú](05-getting-started.md#j-navigation-and-menu-bar). Consulte el [Panel QAT](05-getting-started.md#l-qat-dashboard) para obtener información sobre el panel de planificación de suministro mejorado.

En la captura de pantalla siguiente, la función asignada es **"Administrador de nivel de aplicación"**.

<img src={require('@site/static/img/media/image326.png').default} alt="App Level Admin Dashboard" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 192: App Level Admin Dashboard</p>

En la captura de pantalla siguiente, la función asignada es **"Administrador de nivel de reino"**.

<img src={require('@site/static/img/media/image327.png').default} alt="Realm Level Admin Dashboard" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 193: Realm Level Admin Dashboard</p>

### Mosaicos de administración de aplicaciones y reinos:

| ¿Qué administradores? | Captura de pantalla | Explicación |
| :--- | :---: | :--- |
| Aplicación y reino | <img src={require('@site/static/img/media/image328.png').default} alt="Program User Tile" style={{ width: '220px' }} /> | Este mosaico muestra el **número de usuarios en cada función**. Al hacer clic en el botón desplegable se muestran dos funciones ("Ir a Gestión de usuarios" y "Agregar usuario"). Ambos redirigen a los usuarios al "Usuario" "Application Masters" &gt; (consulte [Usuarios](#i-users) para obtener más información) |
| Aplicación | <img src={require('@site/static/img/media/image329.png').default} alt="Total Realms Tile" style={{ width: '220px' }} /> | Este mosaico muestra el **número total de reinos** en la aplicación. Al hacer clic en el botón desplegable se muestran dos funciones ("Ir a Gestión de dominios" y "Agregar dominio"). Ambos redirigen a los usuarios a la pantalla Realms, a la que también se puede acceder en el menú de la izquierda en Maestros de aplicaciones &gt; Realms (consulte [Realm](#h-realm) para obtener más información) |
| Aplicación | <img src={require('@site/static/img/media/image330.png').default} alt="Language Tile" style={{ width: '220px' }} /> | Este mosaico muestra el **número de idiomas** en la aplicación. Al hacer clic en el botón desplegable se muestran dos funciones ("Ir a Gestión de idiomas" y "Agregar idioma"). Ambos redirigen a los usuarios a la pantalla Idioma, a la que también se puede acceder en el menú de la izquierda en Maestros de aplicaciones &gt; Idioma (consulte [Idioma](#f-language) para obtener más información) |
| Reino | <img src={require('@site/static/img/media/image331.png').default} alt="Country Tile" style={{ width: '220px' }} /> | Este mosaico muestra el **número de países** en el reino. Al hacer clic en el botón desplegable se muestran dos funciones: "Ir a Realm Country Management" lleva a los usuarios a una tabla de países, a la que también se puede acceder en el menú de la izquierda en Realm Masters &gt; País. "Agregar país del reino" lleva a los usuarios a la pantalla Reino, a la que también se puede acceder en el menú de la izquierda en Maestros de aplicaciones &gt; Reino, donde los usuarios pueden asignar países al reino (consulte [País del reino](#c-country) para obtener más información) |
| Reino | <img src={require('@site/static/img/media/image332.png').default} alt="Technical Area Tile" style={{ width: '220px' }} /> | Este mosaico muestra el **número de áreas técnicas** en el reino. Al hacer clic en el botón desplegable se muestran dos funciones ("Ir a Gestión del Área Técnica" y "Agregar Área Técnica"). Ambos redirigen a los usuarios a la pantalla Área técnica, a la que también se puede acceder en el menú de la izquierda en Maestros de aplicaciones &gt; Área técnica (consulte [Área técnica](#j-technical-area) para obtener más información) |
| Reino | <img src={require('@site/static/img/media/image333.png').default} alt="Region Tile" style={{ width: '220px' }} /> | Este mosaico muestra el **número de regiones** en la aplicación. Al hacer clic en el botón desplegable se muestran dos funciones ("Ir a Gestión de regiones" y "Agregar región"). Ambos redirigen a los usuarios a la pantalla Idioma, a la que también se puede acceder en el menú de la izquierda en Maestros de aplicaciones &gt; Región (consulte [País del reino](#c-country) para obtener más información) |
| Reino | <img src={require('@site/static/img/media/image334.png').default} alt="Organization Tile" style={{ width: '220px' }} /> | Este mosaico muestra el **número de organizaciones** en la aplicación. Al hacer clic en el botón desplegable se muestran dos funciones ("Ir a Gestión de la organización" y "Agregar organización"). Ambos redirigen a los usuarios a la pantalla Idioma, a la que también se puede acceder en el menú de la izquierda en Maestros de aplicaciones &gt; Organización (consulte [Organización](#f-organization) para obtener más información) |
| Reino | <img src={require('@site/static/img/media/image335.png').default} alt="Total Program Tile" style={{ width: '220px' }} /> | Este mosaico muestra el **número de programas** en la aplicación. Al hacer clic en el botón desplegable aparece ("Ir a Administración de programas"), que redirige a los usuarios a la pantalla Actualizar información del programa, a la que también se puede acceder en el menú de la izquierda en Administración de programas &gt; Actualizar información del programa (consulte [Información del programa](./07-supply-planning-module-program-data.md#a1-program-information) para obtener más información) |
| Reino | <img src={require('@site/static/img/media/image336.png').default} alt="Setup Program Tile" style={{ width: '220px' }} /> | Este mosaico permite a los usuarios hacer clic en el botón desplegable para navegar a la pantalla "Programa de configuración", a la que también se puede acceder en el menú de la izquierda en Administración de programas &gt; Programa de configuración (consulte [Configurar un nuevo programa](#d-setting-up-a-new-program) para obtener más información) |

<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Table 11: App and Realm Admin Tiles</p>

## C. Gestión de datos maestros

**Application Masters** es el nivel de jerarquía de datos más alto en QAT. Los datos maestros de la aplicación se aplican a todos los ámbitos y programas dentro de QAT. La mayor parte solo es accesible para los administradores de aplicaciones, aunque algunas de las funciones de la aplicación están disponibles para los administradores de Realm, como agregar y actualizar usuarios y asignar roles a los usuarios. Los administradores de aplicaciones pueden seleccionar los datos maestros específicos de toda la aplicación que desean agregar o actualizar.

**Realm Level Masters** cubre todos los datos maestros de ese Reino que se aplican a sus programas y planes de suministro. El administrador de Realm podrá ver, crear y editar estos datos maestros. Programas, áreas técnicas, unidades de planificación y agentes de adquisiciones son algunos ejemplos de datos maestros de dominio que el administrador de dominio puede agregar y mantener. Los administradores del programa pueden acceder a muchos de los archivos maestros a nivel de dominio; sin embargo, no tienen la capacidad de agregar/actualizar estos datos.

**Program Level Masters** es el tercer nivel de jerarquía en QAT. Si bien los administradores de programas no pueden agregar programas, pueden actualizar la información del programa (por ejemplo, plazos de entrega, costos de flete, etc.) dentro de sus programas asignados. Los administradores y usuarios del programa también pueden agregar y actualizar los datos del programa (consumo, inventario, envíos).

## C1. Maestros de aplicaciones

### a. Traducción de bases de datos

<div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
  <div style={{ flex: '1 1 300px' }}>
    <p>The database translation screen, which is accessible for application admins is used to translate "Dynamic labels" that are stored in QAT. The dynamic labels are included in drop-down lists throughout QAT as well as be labels that reference other labels (e.g. QAT Problem List problems that reference shipment IDs).</p>
    <p>For every dynamic label, there must be at least an English translation as identified by the red asterisk next to 'English' in the below figure. The translations for the other software languages are highly recommended but not required to save a translation.</p>
    <p>To edit a translation, double-click that cell and input the desired text. Then click the "Submit" button. The submitted translation(s) will not be changed on the front end in QAT until the next software release.</p>
  </div>
  <div style={{ flex: '0 0 200px', margin: '0 auto' }}>
    <img src={require('@site/static/img/media/image337.png').default} alt="Database Translation Menu" style={{ width: '100%', marginBottom: '5px' }} />
    <p style={{ fontSize: '0.85em', fontStyle: 'italic', textAlign: 'center' }}>Figure 193a: Navigation to Database Translation</p>
  </div>
</div>

<img src={require('@site/static/img/media/image338.png').default} alt="Database Language Translation Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 194: Database Language Translation Screen</p>

### b. Traducción de etiquetas

La pantalla de traducción de etiquetas se utiliza para traducir "etiquetas estáticas" que no hacen referencia a otras etiquetas QAT y no forman parte de las listas desplegables. Los encabezados de las columnas de la tabla son un ejemplo de una etiqueta estática en QAT.

Para las etiquetas estáticas, debe haber al menos una traducción al inglés, como se identifica con el asterisco rojo junto a "inglés" en la siguiente figura. Las traducciones para los otros idiomas del software son muy recomendables, pero no son obligatorias para guardar una traducción.

Para editar una traducción, haga doble clic en esa celda e ingrese el texto deseado. Luego haga clic en el botón "Enviar". Después de hacer clic en enviar, la traducción se reflejará inmediatamente en QAT para todos los usuarios.

<img src={require('@site/static/img/media/image339.png').default} alt="Label Translation Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 195: Label Translation Screen</p>

### c. País

QAT muestra una tabla de países que enumera todos los países predeterminados en la aplicación, pero se pueden agregar nuevos países según sea necesario.

**Para ver una lista de los países que actualmente están en QAT:**

1. Vaya a "Application Masters" y haga clic en "País".
2. El administrador de la aplicación puede ver y filtrar los países según su estado de "Activo" o "Desactivado". Además, el usuario puede buscar un país específico utilizando la barra de búsqueda.

<img src={require('@site/static/img/media/image340.png').default} alt="List of Countries" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 196: List of Countries</p>

**Para agregar un país:**

1. En la esquina superior derecha de la lista de países, haga clic en el icono "+".
2. Se abrirá una nueva pantalla "Agregar país" como se muestra a continuación.
3. Ingrese el nuevo país, nombre para mostrar del país, nombre para mostrar del país2 y moneda y haga clic en el botón "Enviar".
   
   a. **Nota:** El nombre para mostrar del país es siempre el código de país de tres letras (por ejemplo, Angola = AGO). El nombre para mostrar del país2 es siempre el código de país de dos letras (por ejemplo, Angola = AO).*

   <img src={require('@site/static/img/media/image341.png').default} alt="Add Country Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 197: Add Country Screen</p>

**Para actualizar un país:**

1. Para actualizar un país actual, vaya a la lista de países del Administrador de aplicaciones.
2. Haga clic en el país que necesita cambiarse o actualizarse.
3. Actualice la información según sea necesario y luego haga clic en el botón "Actualizar". Esto puede incluir "deshabilitar" un país o convertirlo en "activo".

<img src={require('@site/static/img/media/image342.png').default} alt="Add Country Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 198: Add Country Screen</p>

### d. Moneda

**Para ver una lista de las monedas actuales que están en QAT:**

1. Vaya a "Application Masters" y haga clic en "Moneda".
2. A continuación se mostrará una lista de monedas y sus atributos, como la tasa de conversión.

<img src={require('@site/static/img/media/image343.png').default} alt="Add Country Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 199: Currency Screen</p>

**Para agregar una moneda:**

1. En la esquina superior derecha de la lista de monedas, haga clic en el icono "+".
2. Ingrese la nueva moneda, el nombre para mostrar de la moneda, la tasa de conversión a 1 USD y si debe sincronizarse en línea. Cuando se haya ingresado toda la información, haga clic en el botón "Enviar".
   
   a. **Nota:** La tasa de conversión a 1 USD se puede ingresar manualmente o se puede obtener a partir de la integración con la fuente pública en línea seleccionando "Sí" en "Sincronizar tasa de conversión en línea", que es la opción predeterminada.

   <img src={require('@site/static/img/media/image344.png').default} alt="Add Country Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 200: Add Currency Screen</p>

**Para actualizar una moneda existente:**

1. Vaya a la lista de monedas del Administrador de aplicaciones.
2. Haga clic en la moneda que desea cambiar o actualizar.
3. Actualice la información según sea necesario y luego haga clic en el botón "Actualizar".

### e. Dimensión

Las dimensiones denotan varios valores mensurables, como longitud, volumen, peso o altura.

**Para ver una lista de las dimensiones actuales que están en QAT:**

1. Vaya a "Application Masters" y haga clic en "Dimensión".
2. Se mostrará una lista de dimensiones a continuación.

<img src={require('@site/static/img/media/image345.png').default} alt="List of Dimensions" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 201: List of Dimensions</p>


**Para agregar una dimensión:**

1. En la esquina superior derecha de la Lista de dimensiones, haga clic en el icono "+".
2. Se abrirá una nueva pantalla "Agregar dimensión" como se muestra a continuación.
3. Ingrese la nueva dimensión y haga clic en el botón "Enviar".

<img src={require('@site/static/img/media/image346.png').default} alt="Add Dimension Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 202: Add Dimension Screen</p>



**Para actualizar una dimensión:**

1. Para actualizar una dimensión actual, vaya a la lista de dimensiones de Administrador de aplicaciones.
2. Haga clic en la dimensión que necesita cambiarse o actualizarse.
3. Actualice la información según sea necesario y luego haga clic en el botón "Actualizar".

###f. Idioma

QAT está disponible en cuatro idiomas diferentes: inglés, francés, español y portugués.

**Para ver una lista de los idiomas actuales que están en QAT:**

1. Vaya a "Application Masters" y haga clic en "Idioma".
2. Se mostrará una lista de idiomas a continuación:

<img src={require('@site/static/img/media/image347.png').default} alt="List of Languages" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>figure 203: List of Languages</p>


**Para agregar un idioma:**

1. En la esquina superior derecha de la lista de idiomas, haga clic en el icono “+”.
2. Se abrirá una nueva pantalla "Agregar idioma" como se muestra a continuación.
3. Ingrese el nuevo idioma y el nombre para mostrar del idioma y haga clic en el botón "Enviar".
4. **Nota:** Todas las bases de datos de QAT y las etiquetas de visualización deben traducirse para que aparezca un nuevo idioma en QAT. Consulte [Traducción de base de datos](#a-database-translation) y [Traducción de etiquetas](#b-label-translation) en el Apéndice I para obtener más información.

<img src={require('@site/static/img/media/image348.png').default} alt="Add Language Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 204: Add Language Screen</p>


**Para actualizar un idioma:**

1. Para actualizar un idioma actual, vaya a la lista de idiomas del Administrador de aplicaciones.
2. Haga clic en el idioma que desea cambiar o actualizar.
3. Actualice la información según sea necesario y luego haga clic en el botón "Actualizar". Esto puede incluir "deshabilitar" un idioma o hacerlo "activo".

### g. Roles

Los administradores de aplicaciones pueden crear y editar tipos de roles para toda la aplicación a medida que surge la necesidad de modificar las reglas comerciales a las que ciertos roles pueden acceder. Para obtener una lista de los roles actuales, el acceso y las funciones asociadas, consulte el [Anexo 3: Matriz de roles de usuario] (15-annex-3-user-role-matrix.md).

**Para ver una lista de los roles actuales que están en QAT:**

1. Vaya a "Application Masters" y haga clic en "Roles".
2. Se mostrará una lista de roles a continuación:

<img src={require('@site/static/img/media/image349.png').default} alt="Current list of roles" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 205: Current list of roles</p>

**Para agregar un rol:**

1. En la esquina superior derecha de la lista de funciones, haga clic en el icono "+".
2. Se abrirá una nueva pantalla "Agregar rol" como se muestra a continuación.
3. Ingrese el nuevo Rol, Función Comercial y Puede Crear Rol y haga clic en el botón "Enviar".
4. Para obtener una descripción y más información sobre las funciones comerciales individuales, consulte el [Anexo 4: Funciones comerciales] (16-anexo-4-business-functions.md).
5. "Puede crear función" permite que la nueva función cree usuarios y les asigne funciones y acceso específicos. Por ejemplo, un administrador de Realm puede crear un usuario, asignarlo como administrador de programa y determinar a qué países y programas tendrá acceso el usuario.

<img src={require('@site/static/img/media/image350.png').default} alt="Add Role Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 206: Add Role Screen</p>

**Para actualizar un rol:**

1. Para actualizar una función actual, vaya a la lista de funciones de administrador de aplicaciones.
2. Haga clic en el rol que necesita cambiarse o actualizarse.
3. Actualice la información según sea necesario y luego haga clic en el botón "Actualizar".
4. Para obtener una descripción y más información sobre las funciones comerciales individuales, consulte el [Anexo 4: Funciones comerciales] (16-anexo-4-business-functions.md).
5. "Puede crear función" permite que la nueva función cree usuarios y les asigne funciones y acceso específicos. Por ejemplo, un administrador de Realm puede crear un usuario, asignarlo como administrador de programa y determinar a qué países y programas tendrá acceso el usuario.

<img src={require('@site/static/img/media/image351.png').default} alt="Edit Role Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 207: Edit Role Screen</p>

###h. reino

QAT se subdivide en ámbitos, cada uno de los cuales se rige por sus propios datos maestros (incluidos el catálogo de productos, los nombres de los financiadores, los nombres de los agentes de adquisiciones, etc.). Se podrían configurar reinos futuros para otros campos, como cadenas de suministro educativas, cadenas de suministro agrícolas, etc. Para obtener información y funciones que puede realizar un administrador de reino, consulte [Maestros de nivel de reino](#e-realm-masters).

**Para ver una lista de los reinos actuales que están en QAT:**

1. Vaya a "Application Masters" y haga clic en "Reino".
2. Se mostrará una lista de reinos a continuación:

<img src={require('@site/static/img/media/image352.png').default} alt="List of Realms" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 208: List of Realms</p>

**Para agregar un reino:**

1. En la esquina superior derecha de la lista de dominios, haga clic en el icono "+".
2. Se abrirá una nueva pantalla "Agregar reino" como se muestra a continuación.
3. Ingrese el nuevo Reino, Nombre para mostrar del reino, Min Guardrail para MIN MOS, Min Guardrail para MAX MOS y Max Guardrail para MAX MOS. Continúe agregando todos los valores de tolerancia y restricción para el dominio y luego haga clic en el botón "Enviar".
   
   a. Al agregar un usuario a QAT, si no se le asigna un dominio, se le asignará automáticamente al dominio que se considera "predeterminado". Solo puede haber un dominio predeterminado por instancia de QAT.

   b. **Nota:** las barreras de seguridad MIN/MAX son los límites absolutos inferior y superior para configurar los parámetros MINI/MAX del programa; están establecidos a nivel de reino. Esto significa que un programa no puede tener un MIN MOS que sea menor que el "Min guardrail para MIN MOS", o un MAX MOS que sea mayor que el "Max guardrail para MAX MOS".

<img src={require('@site/static/img/media/image353.png').default} alt="Add Realm screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>figure 209: Add Realm screen</p>

**Para actualizar un reino:**

1. Para actualizar un dominio actual, vaya a la lista de dominios de administración de aplicaciones.
2. Haga clic en el dominio que necesita cambiarse o actualizarse.
3. Actualice la información según sea necesario y luego haga clic en el botón "Actualizar". Esto puede incluir "deshabilitar" un reino o hacerlo "activo".

**Para agregar un país a un reino**

1. Para agregar un país a un dominio existente, vaya a la lista de dominios de administración de aplicaciones.
2. Haga clic derecho en el reino y luego haga clic en "Asignar países a este reino" como se muestra a continuación:

<img src={require('@site/static/img/media/image354.png').default} alt="Map Countries" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 210: Map Countries</p>

3. Desde esta nueva ventana, el administrador de la aplicación puede agregar un país haciendo clic en el botón "Agregar fila" en la parte inferior de la pantalla. El nuevo país no puede existir ya en el ámbito que se va a agregar. Para obtener más información sobre cómo agregar un país, consulte Maestros de aplicaciones: [País](#c-país).
4. Desde esta nueva ventana, el administrador de la aplicación también puede hacer que un país sea "Activo" ya que los programas están incorporados a QAT, o inactivo usando la casilla de verificación en la última columna.
5. Cuando se hayan realizado todas las actualizaciones y cambios, haga clic en "Enviar".

<img src={require('@site/static/img/media/image355.png').default} alt="Map Countries" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 211: Mapping countries to a Realm</p>

### yo. Usuarios

Agregar y actualizar usuarios y sus roles/controles de acceso está disponible tanto para los administradores de aplicaciones como para los administradores de dominio.

**Para ver una lista de los usuarios actuales que están en QAT:**

1. Vaya a "Application Masters" y haga clic en "Usuario".
2. Se mostrará una lista de usuarios, junto con información como correo electrónico, fecha del último inicio de sesión y estado.

<div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
  <div style={{ flex: '1 1 300px' }}>
    <p><strong>To add a new user:</strong></p>
    <ol>
      <li>In the top right corner of the realm list, click on the "+" icon.</li>
      <li>A new screen "Add User" will be opened as shown below.</li>
      <li>Enter the new user's name, email address, organization & country, role, and language and click "Submit."</li>
      <li>For a detailed description on roles, their function, and access, see <a href="15-annex-3-user-role-matrix.md">Annex 3: User Role Matrix</a></li>
    </ol>
    <p><strong>To update an existing user or manage user access controls:</strong></p>
    <ol>
      <li>Navigate to the user list.</li>
      <li>Click on the user that needs to be changed or updated.</li>
      <li>Update the information or access controls as needed and then click on the "Update" button. This can include "disabling" a user or making one "active."</li>
    </ol>
  </div>
  <div style={{ flex: '0 0 300px', margin: '0 auto' }}>
    <img src={require('@site/static/img/media/image356.png').default} alt="Add User Screen" style={{ width: '100%', marginBottom: '5px' }} />
    <p style={{ fontSize: '0.85em', fontStyle: 'italic', textAlign: 'center' }}>Figure 212: Add User Screen</p>
  </div>
</div>

### j. Período de uso

El período de uso se utiliza en el módulo de pronóstico para que los usuarios asocien un período de tiempo con ciertos elementos del pronóstico (por ejemplo, con qué frecuencia se usa una unidad de planificación).

**Para ver una lista de las unidades actuales que están en QAT:**

1. Vaya a "Application Masters" y haga clic en "Período de uso".
2. A continuación se mostrará una lista de los períodos de uso y sus atributos, como si está activo o no:

<img src={require('@site/static/img/media/image357.png').default} alt="List of Usage Periods" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 213b: List of Usage Periods</p>

**Para agregar un período de uso:**

1. En la esquina inferior derecha de la lista de unidades, haga clic en el botón "+ Agregar fila".
2. Aparece una nueva fila.
3. Ingrese el nombre del período de uso, el factor de conversión y haga clic en el botón "Enviar".

**Para actualizar un período de uso existente:**

1. Para actualizar un período de uso existente, vaya a la lista de períodos de uso del administrador de aplicaciones.
2. Haga doble clic en el nombre del período de uso o factor de conversión que debe cambiarse o actualizarse. Para desactivar o reactivar, seleccione la casilla de verificación.
3. Actualice la información según sea necesario y luego haga clic en el botón "Enviar". Esto puede incluir "deshabilitar" un período de uso o hacer uno "activo".

### k. Unidad

La unidad es una cantidad fija (en este caso, un valor como ml, g o incluso caja) que se utiliza como estándar de medida.

**Para ver una lista de las unidades actuales que están en QAT:**

1. Vaya a "Application Masters" y haga clic en "Unidad".
2. A continuación se mostrará una lista de unidades y sus atributos, como la dimensión:

<img src={require('@site/static/img/media/image358.png').default} alt="List of Units" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 214: List of Units</p>

**Para agregar una unidad:**

1. En la esquina superior derecha de la lista de unidades, haga clic en el icono "+".
2. Se abrirá una nueva pantalla "Agregar unidad" como se muestra a continuación.
3. Ingrese la nueva unidad, el nombre para mostrar de la unidad y su dimensión correspondiente y haga clic en el botón "Enviar".

**Para actualizar una unidad existente:**

1. Para actualizar una unidad existente, vaya a la lista de unidades de administración de aplicaciones.
2. Haga clic en la unidad que necesita cambiarse o actualizarse.
3. Actualice la información según sea necesario y luego haga clic en el botón "Actualizar". Esto puede incluir "deshabilitar" a un usuario o hacerlo "activo".

<img src={require('@site/static/img/media/image359.png').default} alt="Updating a Unit Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 215: Updating a Unit Screen</p>

### l. Cargar manual de usuario

Un administrador de la aplicación puede cargar el manual de usuario en cualquier momento.

**Para cargar una nueva versión:**

1. Vaya a "Application Masters" y haga clic en "Cargar manual de usuario".
2. Haga clic en 'Seleccionar archivo' o 'Examinar'
3. Selecciona el manual de usuario que deseas cargar, desde tu computadora. Tenga en cuenta que el archivo debe estar en formato PDF.
4. Haga clic en "Enviar".

##C2. Maestros del reino

La aplicación QAT se subdivide en Reinos, cada uno con sus propios datos maestros (incluido el catálogo de productos, nombres de financiadores, nombres de agentes de adquisiciones, etc.). Reino es el segundo nivel de jerarquía en el sistema QAT.

A Realm cubre todos los programas y sus planes de oferta. Por ejemplo, "Salud Global" es un ámbito bajo el cual se gestionan varios programas. Se podrían establecer otros ámbitos para otros campos, como las cadenas de suministro de educación, las cadenas de suministro de agricultura, etc.

### a. País

El menú País en Realm Level Masters permite a los administradores de aplicaciones y reinos crear/asignar regiones a países creados previamente.

Una región podría ser "Nacional" para programas de una sola región, o podría ser cualquier número de regiones para programas de múltiples regiones. La decisión de agregar regiones depende de cómo se ingresarán los datos de inventario y consumo en QAT. Tenga en cuenta que los envíos QAT son siempre nacionales y no pueden atribuirse a regiones.

1. Vaya a "Maestros de nivel de reino".
2. Haga clic en "País" y se mostrará la siguiente pantalla.
3. Haga clic derecho en un país específico que deba actualizarse.
4. Haga clic en "Región del mapa" para mostrar la pantalla Región del país del reino.

<img src={require('@site/static/img/media/image360.png').default} alt="Mapping regions to a country within a realm" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 216: Mapping regions to a country within a realm</p>

5. Ingrese una descripción de la región, así como el volumen de almacén disponible y el número de ubicación global (GLN) de su almacén.
6. Seleccione el estado ("Activo" o "Desactivado") como se muestra en la pantalla.
   a. **Nota:** Para agregar varias regiones, haga clic en el botón azul "+ Agregar fila", o haga clic derecho en el formulario y seleccione "Insertar nueva fila antes" o "Insertar nueva fila después".
7. Haga clic en "Enviar" para guardar los cambios o "Cancelar" para cerrar el formulario sin guardar.

<img src={require('@site/static/img/media/image361.png').default} alt="Adding multiple regions to a country" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 217: Adding multiple regions to a country</p>

### b. Fuente de datos

Una fuente de datos es la ubicación desde donde se originan los datos que se ingresan en QAT. Los usuarios deben aplicar fuentes de datos a todos los registros de transacciones (consumo, inventario, ajustes y envíos) en QAT. El usuario selecciona las fuentes de datos según sea necesario en las listas desplegables. La selección de fuentes de datos para cada registro transaccional dependerá del tipo de fuente de datos que se aplique a ese tipo de registro transaccional. **Los administradores de aplicaciones y dominios** pueden agregar/editar fuentes de datos de la siguiente manera:

**Agregar una fuente de datos**

Vaya a la esquina superior derecha de la pantalla "Fuente de datos" y haga clic en el icono azul "+".
1. Aparecerá una nueva pantalla que muestra "Agregar fuente de datos".
2. Ingrese los detalles requeridos y haga clic en el botón "Enviar".
3. Haga clic en el botón "Cancelar" para no agregar la fuente de datos.

<img src={require('@site/static/img/media/image362.png').default} alt="Adding a data source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 218: Adding a data source</p>

**Actualizar fuente de datos**

1. Vaya a la pantalla "Fuente de datos".
2. Haga clic en la fila de la fuente de datos que desea actualizar.
3. Aparecerá una nueva pantalla que muestra "Actualizar fuente de datos".
4. Ingrese los detalles actualizados.
5. Si desea activar/desactivar esa fuente de datos, seleccione el círculo correspondiente.
6. Haga clic en el botón "Enviar".
7. Haga clic en el botón "Cancelar" para conservar la información existente.

### c. Tipo de fuente de datos

Se refiere al tipo de datos para los que una fuente proporciona información. Hay cuatro tipos de fuentes de datos: consumo real, consumo previsto, inventario y envíos. **Los administradores de aplicaciones y dominios** pueden agregar/editar el tipo de fuente de datos.

**Agregar tipo de fuente de datos**

1. Vaya a "Maestros de nivel de reino" y luego a "Tipo de fuente de datos" para mostrar la siguiente tabla.


<img src={require('@site/static/img/media/image363.png').default} alt="Data Source type" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 219: Data Source type</p>

2. Haga clic en el botón azul "agregar" en la esquina superior derecha. Una nueva pantalla que muestra "Agregar fuente de datos
Se abrirá Tipo”.

<img src={require('@site/static/img/media/image364.png').default} alt="Adding a Data Source Type" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 220: Adding a Data Source Type</p>

**Actualizar tipo de fuente de datos:**

1. Vaya a la Lista de tipos de fuentes de datos.
2. Haga clic en cualquier parámetro que deba cambiarse o actualizarse.
3. Haga clic en el botón "Actualizar".

### d. Fuente de financiamiento

Fuente de financiamiento se refiere a la entidad que proporciona financiamiento para las adquisiciones del programa. **Los administradores de aplicaciones y dominios** pueden agregar/editar fuentes de financiamiento

Para agregar una fuente de financiamiento:

1. Vaya a "Realm Level Masters" y haga clic en "Fuente de financiación" para mostrar la lista de financiación actual.
fuentes.

<img src={require('@site/static/img/media/image365.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 221: Adding a Funding Source</p>

4. Haga clic en el botón azul “+” (agregar) debajo del ícono de perfil.
5. Se abre una nueva pantalla "Agregar fuente de financiamiento".
6. Ingrese los detalles requeridos y haga clic en el botón "Enviar" para guardar los cambios o "Cancelar" para
cerrar el formulario sin guardar.

<img src={require('@site/static/img/media/image366.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 222: Adding a Funding Source</p>

**Para actualizar una fuente de financiamiento:**

1. Vaya a la Lista de fuentes de financiamiento.
2. Haga clic en la fuente de financiación que necesita cambiarse o actualizarse.
3. Ingrese la información requerida y haga clic en el botón "Actualizar".

<img src={require('@site/static/img/media/image367.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 223: Adding a Funding Source</p>

### e. Fabricante

El fabricante de un producto básico son datos maestros que no son accesibles/visibles para los principales usuarios de QAT.
Sin embargo, son parte de los datos de envío/pedido que pueden/se recibirán de los sistemas de gestión de pedidos.
junto con atributos de productos básicos específicos del fabricante.

**Para agregar un fabricante:**

1. Vaya a "Realm Level Masters" y luego haga clic en "Fabricante" para mostrar la siguiente tabla.

<img src={require('@site/static/img/media/image368.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 224: Adding a Funding Source</p>

2. Haga clic en el botón azul “+” para abrir una nueva pantalla “Agregar fabricante”.
3. Ingrese los detalles requeridos.
4. Haga clic en "Enviar" para guardar los cambios o "Cancelar" para cerrar el formulario sin guardar.

<img src={require('@site/static/img/media/image369.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 224: Adding a Funding Source</p>

**Actualizar fabricante**

1. Vaya a la pantalla Fabricante.
2. Haga clic en el fabricante que necesita actualizarse.
3. Ingrese la información requerida y haga clic en el botón "Actualizar".

###f. Organización

Una organización es un grupo de personas con un propósito particular, que puede ser un organismo privado o gubernamental.
**Aplicación**, **Administradores de reino**, **Administrador de programa**, **Usuario de programa** y **Usuario invitado** pueden enumerar/ver
organizaciones.

**Para agregar una organización:**

1. Vaya a "Maestros de nivel de reino" y luego haga clic en "Organización" para mostrar la siguiente tabla.

<img src={require('@site/static/img/media/image370.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

2. Haga clic en el botón azul "+" para abrir una nueva pantalla "Agregar organización".
3. Ingrese los detalles requeridos.
4. Haga clic en "Enviar" para guardar los cambios o "Cancelar" para cerrar el formulario sin guardar.

<img src={require('@site/static/img/media/image371.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

**Para actualizar una organización:**

1. Vaya a la pantalla Organización.
2. Haga clic en el registro que necesita actualizarse.
3. Ingrese la información requerida y haga clic en el botón "Actualizar".

### g. Tipo de organización

Los nombres de las organizaciones se pueden personalizar según las necesidades del usuario; Sin embargo, para mantener la estandarización
A través de datos maestros, QAT incluye un "tipo de organización" que puede ser administrado por un administrador de dominio.

El administrador del dominio asigna un tipo de organización a cada organización en QAT; por ejemplo, en el
Global Health Realm, el país A podría solicitar que el nombre de su programa incluya la organización Ministerio de
Salud y Bienestar (MOHW), mientras que el país B requiere que el nombre de su programa incluya el Ministerio de Salud.
y Bienestar Social (MOHSW). Este nivel de personalización es posible en QAT, manteniendo
estandarización a través del máster de Tipos de Organización. En el ejemplo anterior, tanto MOHW como MOHSW
se le asignaría el tipo de organización “Gobierno”, ya que cualquier ministerio de salud sería considerado un
entidad gubernamental, independientemente de cómo se llame ese ministerio de salud en cada país.

Como el tipo de organización son datos maestros a nivel de dominio, los usuarios de QAT pueden solicitar nuevos tipos de organización si no lo hacen.
ya existen, a través de la función de emisión de billetes.

<img src={require('@site/static/img/media/image373.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

**Agregar tipo de organización:**

1. Vaya a "Maestros de nivel de reino" y luego haga clic en "Tipo de organización" para mostrar una lista de organizaciones actuales.
tipos de organización.

<img src={require('@site/static/img/media/image374.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

2. Haga clic en el botón azul "+" para abrir la pantalla "Agregar tipo de organización".
3. Ingrese los detalles requeridos.
4. Haga clic en "Enviar" para guardar los cambios o "Cancelar" para cerrar el formulario sin guardar.

<img src={require('@site/static/img/media/image375.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

   **Nota:** QAT no permite poner espacios antes de comenzar el nombre del tipo de organización. Solo se permiten espacios entre palabras si el nombre del tipo de organización consta de varias palabras.*

**Para actualizar un tipo de organización:**

1. Vaya a "Maestros de nivel de reino" y luego haga clic en "Tipo de organización".
2. Haga clic en un tipo de organización existente para mostrar la siguiente pantalla.

<img src={require('@site/static/img/media/image375.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

3. Ingrese los detalles requeridos.
4. Haga clic en "Enviar" para guardar los cambios o "Cancelar" para cerrar el formulario sin guardar.

###h. Producto

QAT admite la estandarización de datos dentro de cada ámbito a través de la gestión de datos maestros. Una pieza esencial
de los datos maestros son productos. En QAT, "Producto" se refiere a los múltiples niveles de productos básicos que deben
configurado y administrado por ámbito: unidades de pronóstico, unidades de planificación, unidades de adquisiciones y alternativas
unidades de informes. Los productos en QAT pueden ser editados/agregados por los administradores de la aplicación o del reino, excepto las unidades de informes alternativas, que se administran a nivel de país/programa. Los usuarios a nivel de país pueden
También solicite que se agreguen nuevas unidades de planificación/pronóstico al catálogo QAT generando un ticket.

#### Unidad de pronóstico

La unidad de previsión es el equivalente QAT de la unidad base del producto. Se utilizará para estimar el futuro.
demanda, es decir, la previsión. Por ejemplo: una tableta, un mililitro, un condón. Estas unidades de pronóstico tienen un
relación de uno a muchos con la unidad de planificación, es decir, muchas unidades de planificación (por ejemplo, TLD, botella de 90 tabletas,
TLD, botella de 180 tabletas, etc.) pueden relacionarse con una sola unidad de pronóstico (por ejemplo, 1 tableta TLD)

**Para ver y exportar la lista de todas las unidades de pronóstico en el catálogo a nivel de dominio:**

1. Vaya a "Maestros de nivel de reino"
2. Haga clic en "Producto" y luego en "Unidad de pronóstico".
3. Seleccione la Categoría de Unidad de Planificación y luego la Categoría de Trazador y haga clic en “Buscar”
4. Al hacer clic en el icono de exportación a CSV, podrá exportar todas las unidades de pronóstico seleccionadas.

<img src={require('@site/static/img/media/image377.png').default} alt="Adding a Funding Source" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 225: Adding a Funding Source</p>

**Para agregar unidades de pronóstico:**

1. Vaya a "Maestros de nivel de reino"
2. Haga clic en "Producto" y luego en "Unidad de pronóstico".
3. Haga clic en el botón azul "agregar" en la esquina superior derecha de la pantalla Unidad de pronóstico.
4. Se abrirá una nueva pantalla llamada "Agregar unidad de pronóstico".
5. Ingrese los detalles requeridos y haga clic en "Enviar".

**Para editar/actualizar unidades de pronóstico:**

1. Vaya a "Maestros de nivel de reino".
2. Haga clic en "Producto" y luego en "Unidad de planificación".
3. Haga clic en cualquier unidad de pronóstico que deba cambiarse o actualizarse.
4. Edite la información requerida.
5. Haga clic en "Actualizar" para guardar los cambios.

#### Unidad de Planificación

<img src={require('@site/static/img/media/image232.png').default} alt="List of Planning Units" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>figure 232: List of Planning Units</p>

**Para agregar unidades de planificación:**

1. Vaya a "Maestros de nivel de reino".
2. Haga clic en "Producto" y luego en "Unidad de planificación".
3. Haga clic en el botón azul "agregar" en la esquina superior derecha de la pantalla Unidad de planificación.
4. Ingrese los detalles requeridos.
5. Haga clic en el botón "Enviar" para guardar los cambios.

**Para editar/actualizar unidades de planificación:**

1. Vaya a "Maestros de nivel de reino".
2. Haga clic en "Producto" y luego en "Unidad de planificación".
3. Haga clic en cualquier unidad de pronóstico que deba cambiarse o actualizarse.
4. Edite la información requerida.
5. Haga clic en "Actualizar" para guardar los cambios.

#### Volumen de la unidad de planificación

Como se menciona en la sección Unidad de planificación, las unidades de planificación pueden tener atribuidas volumétricas para permitir una planificación más detallada. Sin embargo, esta pantalla es vista solo por los administradores del programa y su propósito es mostrar datos volumétricos para cada unidad de planificación, no editar ni agregar. **Los administradores de aplicaciones y dominios** pueden agregar/editar datos volumétricos de la unidad de planificación en la pantalla Unidad de planificación.

**Para agregar datos volumétricos a unidades de planificación:**

Los administradores de aplicaciones y dominios pueden agregar/editar datos volumétricos de la unidad de planificación desde la pantalla Unidad de planificación.

1. Vaya a "Maestros de nivel de reino".
2. Haga clic en "Producto" y luego en "Unidad de planificación".
3. Haga clic derecho en la unidad de planificación a editar.
4. Haga clic en "Asignar volúmenes"
5. Utilice el "botón Agregar fila" azul para agregar una nueva fila si es necesario o edite los detalles de la unidad de planificación en la fila de la unidad de planificación existente.
6. Haga clic en el botón "Enviar".

<img src={require('@site/static/img/media/image380.png').default} alt="Adding volumetric data to planning units" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>FFigure 233: Adding volumetric data to planning units</p>

#### Categoría de unidad de planificación

A nivel de ámbito, las unidades de planificación deben agruparse en categorías amplias, como productos farmacéuticos para el VIH/SIDA, productos farmacéuticos y dispositivos para la salud reproductiva (en el ámbito de la salud global) para filtrar búsquedas e informes. **Los administradores de aplicaciones y dominios** pueden agregar/editar categorías de unidades de planificación.

**Para agregar categorías de unidades de planificación**

1. Vaya a "Maestros de nivel de reino"
2. Haga clic en "Producto" y luego en "Categoría de unidad de planificación".
3. Escriba el nombre de la nueva categoría a agregar, haga clic en "Agregar" y luego en "Enviar".

<img src={require('@site/static/img/media/image381.png').default} alt="Viewing/adding planning unit categories" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 234: Viewing/adding planning unit categories</p>

#### Unidad de informes alternativa

Consulte [Unidades de informes alternativas] (07-supply-planning-module-program-data.md#a4-alternate-reporting-units) para obtener más información.

#### Unidad de Adquisiciones

Una descripción a nivel de artículo de la "unidad de planificación", que incluye atributos específicos del proveedor/fabricante, como GTIN y precios de pedidos, que los **Administradores de aplicaciones y dominios** pueden agregar/editar manualmente o recibir automáticamente mediante la integración y asignación de unidades de planificación QAT a un sistema de gestión de pedidos de un agente de adquisiciones. Las unidades de adquisiciones son específicas de cada agente de adquisiciones. Las unidades de adquisición no son visibles ni editables por los usuarios a nivel de país/programa.

**Para agregar unidades de adquisición al catálogo a nivel de dominio, la aplicación o el administrador del dominio debe:**

1. Vaya a "Realm Level Masters" y haga clic en "Producto".
2. Haga clic en "Unidad de adquisiciones" y se mostrará una tabla de unidades de adquisiciones.
3. Haga clic en el botón azul "agregar" en la esquina superior derecha de la pantalla.
4. Ingrese todos los detalles requeridos en la pantalla "Agregar unidad de adquisiciones" y haga clic en "Enviar".

   a. **Nota:** Los detalles requeridos incluyen el nombre de la unidad de planificación, el fabricante, el factor de conversión, los atributos de volumen y peso, las unidades por palet y por contenedor, etc.

**Para editar/actualizar unidades de adquisición:**

1. Vaya a "Realm Level Masters" y haga clic en "Producto".
2. Haga clic en "Unidad de adquisiciones" y se mostrará una tabla de unidades de adquisiciones.
3. Haga clic en cualquier unidad de adquisición que deba cambiarse o actualizarse.
4. Edite la información requerida.

   a. **Nota:** Detalles como el nombre de la unidad de planificación y el fabricante no se pueden editar.
5. Haga clic en el botón "Actualizar" para guardar los cambios.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={require('@site/static/img/media/image382.png').default} alt="Add/Update Procurement Unit" style={{ border: '1px solid #ccc', marginBottom: '15px' }} />
</div>
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 235: Add/Update Procurement Unit</p>

#### Categoría de trazador

Las categorías de seguimiento son una agrupación de segundo nivel y menos amplia de tipos de productos específicos de un Reino. **Los administradores de aplicaciones y los administradores de reino** pueden agregar/editar categorías de Tracer. Por ejemplo, los antirretrovirales para adultos son una categoría de seguimiento que pertenece al grupo más amplio de productos farmacéuticos contra el VIH/SIDA (categoría de unidad de planificación).

<img src={require('@site/static/img/media/image383.png').default} alt="List of tracer categories" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 236: List of tracer categories</p>

**Para agregar categorías de seguimiento al catálogo a nivel de dominio:**

1. Vaya a "Realm Level Masters" y haga clic en "Producto".
2. Haga clic en "Categoría de rastreador" y se mostrará una tabla de categorías de rastreador para el reino seleccionado.
3. Haga clic en el botón azul "agregar" en la esquina superior derecha de la pantalla.
4. Ingrese todos los detalles requeridos en la pantalla "Agregar categoría de rastreador" y haga clic en "Enviar".

**Para actualizar/editar categorías de rastreadores:**

1. Vaya a "Realm Level Masters" y haga clic en "Producto".
2. Haga clic en "Categoría de rastreador" y se mostrará una tabla de categorías de rastreador para el reino seleccionado.
3. Haga clic en cualquier fila que deba cambiarse o actualizarse.
4. Actualice la información requerida y haga clic en "Actualizar" para guardar los cambios.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={require('@site/static/img/media/image384.png').default} alt="Update Tracer Category" style={{ border: '1px solid #ccc', marginBottom: '15px' }} />
</div>
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 237: Update Tracer Category</p>

### yo. Unidad de Equivalencia

La Unidad de Equivalencia permite a los usuarios gestionar datos agregados de todos los productos que son diferentes, pero relacionados. Las unidades de equivalencia se pueden utilizar en la [pantalla de comparación y selección de pronóstico] (12-forecasting-module-reports-and-outputs.md#a-compare-and-select), la [pantalla de pronóstico mensual](12-forecasting-module-reports-and-outputs.md#b-monthly-forecast), el [error de pronóstico (mensual) pantalla](09-supply-planning-module-reports.md#d2-forecast-error-monthly) y el [informe del plan de suministro](08-supply-planning-module-supply-planning.md#g-supply-plan-report).

**Para agregar una asignación de unidades de equivalencia:**

1. Vaya a "Maestros de nivel de reino" y haga clic en "Unidad de equivalencia".
2. Haga clic en el botón "+Agregar fila" en la parte inferior derecha de la pantalla. También puede hacer clic derecho en cualquier fila y seleccionar "Agregar fila".
3. Ingrese los detalles requeridos y haga clic en el botón "Enviar".

   a. Las asignaciones a nivel de reino están disponibles para todos los usuarios y están indicadas por todos. Estos son creados y administrados por Realm Admins. Los administradores del programa pueden crear y administrar asignaciones específicas del programa. Si hay algún conflicto, las asignaciones específicas del programa tendrán prioridad y se utilizarán en lugar de las asignaciones a nivel de dominio.

Por ejemplo, un usuario está pronosticando medicamentos para tratar la QATitis, una afección en la que las personas no pueden dejar de usar QAT. El usuario puede pronosticar mediante diferentes tratamientos (diferentes unidades de pronóstico), pero desea ver cómo se agregan.

<table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd', marginTop: '15px', marginBottom: '15px' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Equivalency Unit</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Forecasting Unit</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Conversion to EU</strong></th>
      <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}><strong>Average Treatment Required to cure QATitis</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 tablet of FASPicillin</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>14</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 tablet a day for 2 weeks</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>5mL tube of FASPasone (cream)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>0.5mL/day applied on the forehead over 10 days (1 tube total)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2mL vial of FASPicaine (injection)</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>0.5</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>One injection of 1mL (Two people can share one vial)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of white chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
      <td rowspan="3" style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'middle' }}>2 bars of chocolate. The type of chocolate does not matter, as all chocolate contains the natural form of FASPicillin.</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of dark chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 Treatment for QATitis</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 bar of milk chocolate</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
    </tr>
  </tbody>
</table>

**Creación y gestión de unidades de equivalencia:**

Si no ve una unidad de equivalencia que le gustaría asignar o desea editar una unidad de equivalencia existente, haga clic en el botón Administrar unidad de equivalencia en la parte superior derecha de la pantalla. Desde allí, puede editar una unidad de equivalencia preexistente o seleccionar 'Agregar fila' y agregar una nueva.

### j. Área Técnica

El área técnica es un componente clave de un programa QAT y especifica el enfoque de ese programa. Por ejemplo, en el ámbito de la salud global, las áreas técnicas están alineadas con condiciones médicas o programas de atención, tratamiento y prevención de la salud como la malaria, la planificación familiar y el VIH/SIDA, cada uno de los cuales requiere una variedad de medicamentos y suministros. **Los administradores de aplicaciones y los administradores de dominio** pueden agregar/actualizar áreas técnicas.

**Para agregar un Área Técnica:**

1. Vaya a la esquina superior derecha de la pantalla del Área técnica y haga clic en el botón azul "+". Se abrirá una nueva pantalla que muestra "Agregar área técnica":

<img src={require('@site/static/img/media/image385.png').default} alt="Add Technical Area Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 238: Add Technical Area Screen</p>

<img src={require('@site/static/img/media/image386.png').default} alt="Add Technical Area" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 239: Add Technical Area</p>

2. Ingrese los detalles requeridos y haga clic en el botón "Enviar".
   
   a. Si no desea continuar con la creación de una nueva área técnica y no ha hecho clic en enviar, haga clic en el botón "Cancelar" y QAT cerrará el formulario sin guardarlo y lo llevará de regreso a la pantalla del Área técnica.

**Para actualizar un Área Técnica:**

1. Para actualizar el área técnica, vaya a la Pantalla Área Técnica.
2. Haga clic izquierdo en el área técnica que desea actualizar.
3. Ingrese las ediciones deseadas en el área técnica y haga clic en el botón "Enviar".
4. Si desea deshabilitar o reactivar el área técnica, haga clic en el círculo al lado de esa opción y haga clic en el botón "Enviar".
   
   a. Al hacer clic en el botón "Restablecer", la información del área técnica no desaparecerá, sino que volverá a ser como estaba antes de actualizarla.

<img src={require('@site/static/img/media/image387.png').default} alt="Update Technical Area" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 240: Update Technical Area</p>

### k. Agente de adquisiciones

Un agente de adquisiciones selecciona a los proveedores, establece condiciones de pago, investigación estratégica, selección, negociación de contratos y compra real de bienes que se envían a un programa. Los agentes de adquisiciones generalmente son contratados por la agencia que financia un envío en particular (una "fuente de financiamiento" en QAT) y los identifica el usuario a nivel de programa al planificar un envío. Los agentes de adquisiciones son administrados por **Administradores de nivel de aplicación** y **Administradores de nivel de ámbito**.

**Para ver la lista de agentes de adquisiciones a nivel de reino:**

1. Vaya a "Maestros de nivel de reino" en el menú de la barra lateral.
2. Haga clic en "Agente de adquisiciones".

**Para agregar un agente de adquisiciones:**

1. En la pantalla Agente de adquisiciones, vaya a la esquina superior derecha de la pantalla y haga clic en el botón azul
Botón “+”.
2. Aparecerá una pantalla titulada "Agregar agente de adquisiciones".
3. Ingrese los detalles requeridos.
4. Haga clic en el botón "Enviar" para guardar al agente de adquisiciones.
   
   a. Antes de enviar, si no desea continuar con ese agente de adquisiciones, haga clic en el botón "Cancelar".

<img src={require('@site/static/img/media/image388.png').default} alt="Add Procurement Agent" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 241: Add Procurement Agent</p>

**Para actualizar un agente de adquisiciones:**

1. Vaya a la pantalla Agente de adquisiciones.
2. Haga clic izquierdo en el Agente de adquisiciones que necesita actualizarse.
3. Aparecerá una pantalla denominada "Actualizar agente de adquisiciones".
4. Ingrese los cambios deseados, por ejemplo modificando el código de color del agente o los plazos de entrega.
5. Si desea activar o desactivar el agente de adquisiciones, seleccione la opción correspondiente en
la parte inferior de la pantalla.
6. Haga clic en el botón "Actualizar" para guardar los cambios o cancelar para cerrar el formulario sin guardar.

**Detalles de la unidad de planificación para la asignación a un agente de adquisiciones:**

| | |
| :--- | :--- |
| **Unidad de Planificación** | La unidad de planificación es el producto a planificar en QAT. Es un producto con descripción completa hasta el embalaje primario (por ejemplo, frasco de 30 comprimidos, blister de 10x10, etc.). |
| **Unidad de Adquisiciones** | La unidad de adquisiciones es una descripción de nivel superior de la Unidad de Planificación que incluye atributos específicos del proveedor, como costos y GTIN. |
| **Código SKU** | El código de unidad de mantenimiento de existencias (SKU) es una característica que se utiliza para identificar productos específicos y, a menudo, está impresa en las etiquetas del producto y de la caja. El código SKU debe coincidir con el que figura en el catálogo del agente de adquisiciones. |
| **Precio de catálogo** | Precio incluido en el catálogo del agente de adquisiciones. |
| **Pedido mínimo** | La cantidad mínima de pedido se refiere a la cantidad mínima que se puede pedir a un agente de adquisiciones para esa unidad de planificación específica. |
| **Unidades por Contenedor** | El número máximo de unidades para una unidad de planificación que pueden caber en un contenedor utilizado por el agente de adquisiciones para enviar el producto a un programa. |
| **Unidades por Palet** | Unidades por palet define el número de unidades de planificación que se pueden embalar en un palet estándar, por dimensión de palet. Unidades por palet describe los artículos individuales de un palet en "unidades" individuales que se pueden mover fácilmente con una transpaleta o una carretilla elevadora. |
| **Volumen** | El volumen de la unidad de planificación. |
| **Peso** | El peso de la unidad de planificación. |
| **GTIN** | El Número Global de Artículo Comercial es un identificador de artículos comerciales, desarrollado por GS1. Estos identificadores se utilizan para buscar información del producto en una base de datos que puede pertenecer a un fabricante. |

<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Table 12: Procurement Agent Planning Unit Details</p>

**Para agregar una Unidad de Planificación del Agente de Adquisiciones:**

1. Vaya a la pantalla "Agente de adquisiciones".
2. Haga clic derecho en el agente de adquisiciones deseado al que desea agregar una unidad de planificación. Luego seleccione "Unidad de planificación de mapas".
3. Aparecerá una pantalla titulada "Agregar unidad de planificación del agente de adquisiciones".
4. Haga clic en el botón "Agregar fila" o haga clic derecho y seleccione "Insertar nueva fila" para agregar una fila.
5. Introduzca los detalles de la nueva unidad de planificación. Consulte la tabla anterior para ver las definiciones de cualquiera de los elementos de datos.
6. Si ingresa información para "MOQ", "Unidad por paleta" o "Unidad por contenedor", esta combinación de agente de adquisiciones/unidad de planificación se considerará un producto estratégico. (Consulte la sección Datos de envío para obtener más información sobre productos estratégicos).
7. Haga clic en el botón "Enviar".

**Para actualizar una Unidad de Planificación del Agente de Adquisiciones:**

1. Vaya a la pantalla "Agente de adquisiciones".
2. Haga clic derecho en el agente de adquisiciones deseado para el que desea actualizar una unidad de planificación. Luego seleccione "Unidad de planificación de mapas".
3. Aparecerá una pantalla titulada "Agregar unidad de planificación del agente de adquisiciones".
4. Ingrese los detalles de la unidad de planificación existente haciendo doble clic en las celdas y escribiendo la información. Consulte la tabla anterior para ver las definiciones de cualquiera de los elementos de datos.
5. Si ingresa información para "MOQ", "Unidad por paleta" o "Unidad por contenedor", esta combinación de agente de adquisiciones/unidad de planificación se considerará un producto estratégico. (Consulte la sección Datos de envío para obtener más información sobre productos estratégicos).
6. Haga clic en el botón "Enviar".

Nota: Si el catálogo del agente de adquisiciones está integrado con QAT, las unidades de planificación y los detalles asociados en QAT reflejarán automáticamente ese catálogo y cualquier cambio que realice manualmente en QAT se anulará automáticamente con los datos del catálogo del agente de adquisiciones en el momento en que se actualicen sus datos.

<img src={require('@site/static/img/media/image389.png').default} alt="Map Procurement Agent Planning Unit" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 242: Map Procurement Agent Planning Unit</p>

**Para agregar una Unidad de Adquisiciones del Agente de Adquisiciones:**

1. Vaya a la pantalla "Agente de adquisiciones".
2. Haga clic derecho en el agente de adquisiciones deseado al que desea agregar una unidad de planificación. Luego seleccione "Mapa de unidad de adquisiciones".
3. Aparecerá un formulario titulado "Agregar unidad de adquisiciones del agente de adquisiciones".
4. Haga clic en el botón "Agregar fila" o haga clic derecho y seleccione "Insertar nueva fila" para agregar una fila.
5. Ingrese los detalles de la nueva unidad de adquisiciones. Consulte la tabla anterior para ver las definiciones de cualquiera de los elementos de datos.
6. Todos los campos son obligatorios excepto el campo GTIN que es opcional.
7. Haga clic en el botón "Enviar".

**Para actualizar una Unidad de Adquisiciones del Agente de Adquisiciones:**

1. Vaya a la pantalla "Agente de adquisiciones".
2. Haga clic derecho en el agente de adquisiciones deseado para el cual desea actualizar una o más unidades de adquisiciones. Luego seleccione "Mapa de unidad de adquisiciones".
3. Aparecerá un formulario titulado "Agregar unidad de adquisiciones del agente de adquisiciones".
4. Ingrese los detalles de la unidad de adquisición existente haciendo doble clic en las celdas y escribiendo la información. Consulte la tabla anterior para ver las definiciones de cualquiera de los elementos de datos.
5. Todos los campos son obligatorios excepto el campo GTIN que es opcional.
6. Haga clic en el botón "Enviar".

Nota: Si el catálogo del agente de adquisiciones está integrado con QAT, las unidades de adquisiciones y los detalles asociados en QAT reflejarán automáticamente el catálogo de ese agente de adquisiciones y cualquier cambio que realice manualmente en QAT será anulado por la integración en el momento de la próxima actualización.

<img src={require('@site/static/img/media/image390.png').default} alt="Map Procurement Agent Procurement Unit" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 243: Map Procurement Agent Procurement Unit</p>

### l. Tipo de agente de adquisiciones

Los agentes de adquisiciones se pueden personalizar según las necesidades del programa; sin embargo, para mantener la estandarización a través de datos maestros, QAT incluye un "tipo de agente de adquisiciones" que puede ser administrado por un administrador de dominio.

El administrador del ámbito asigna un tipo de agente de adquisiciones a cada agente de adquisiciones en QAT; por ejemplo, en el ámbito de la salud global, el país A podría solicitar que los envíos de su programa incluyan el agente de adquisiciones Joint Medical Store, mientras que el país B requiere que los envíos de su programa incluyan el National Medical Store. Este nivel de personalización es posible en QAT, manteniendo la estandarización a través de los maestros de tipo de agente de adquisiciones. En el ejemplo anterior, a ambos agentes de adquisiciones se les asignaría el tipo de agente de adquisiciones "Gobierno".

Como el tipo de agente de adquisiciones son datos maestros a nivel de dominio, los usuarios de QAT pueden solicitar nuevos tipos de organización si aún no existen, a través de la función de emisión de tickets.

<img src={require('@site/static/img/media/image391.png').default} alt="Procurement agent types in the Global Health Realm" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 244 – Procurement agent types in the Global Health Realm</p>

**Agregar tipo de agente de adquisiciones**

1. Vaya a 'Maestros de nivel de reino' y luego haga clic en 'Tipo de agente de adquisiciones' para mostrar una lista de los tipos de organizaciones actuales.

<img src={require('@site/static/img/media/image392.png').default} alt="Procurement Agent Type List" style={{ width: '100%', marginBottom: '15px' }} />

2. Haga clic en el botón azul "+" para abrir la pantalla "Agregar tipo de agente de adquisiciones".
3. Ingrese los detalles requeridos.
4. Haga clic en "Enviar" para guardar los cambios o "Cancelar" para cerrar el formulario sin guardar.

<img src={require('@site/static/img/media/image393.png').default} alt="Add Procurement Agent Type Screen" style={{ width: '100%', marginBottom: '15px' }} />

Nota: QAT no permite poner espacios antes de comenzar el nombre del tipo de agente de adquisiciones. Solo se permiten espacios entre palabras si el nombre del tipo de agente de adquisiciones consta de varias palabras.

**Actualizar un tipo de agente de adquisiciones**

1. Vaya a "Realm Level Masters" y luego haga clic en "Tipo de agente de adquisiciones".
2. Haga clic en un tipo de Agente de adquisiciones existente para mostrar la siguiente pantalla.

<img src={require('@site/static/img/media/image394.png').default} alt="Update Procurement Agent Type Screen" style={{ width: '100%', marginBottom: '15px' }} />

3. Ingrese los detalles requeridos.
4. Haga clic en "Actualizar" para guardar los cambios o "Cancelar" para cerrar el formulario sin guardar.

### m. Método de pronóstico

Esta pantalla permite a los administradores del dominio agregar o editar métodos de pronóstico que los usuarios pueden utilizar al crear programas de pronóstico.

**Agregar un método de pronóstico:**

1. Vaya a "Realm Level Masters" y haga clic en "Método de pronóstico" para mostrar una lista de los métodos de pronóstico actuales.

<img src={require('@site/static/img/media/image395.png').default} alt="Forecast Method List" style={{ width: '100%', marginBottom: '15px' }} />

2. Haga clic en el botón azul "+Agregar fila".
3. Ingrese los detalles y haga clic en **Enviar**.

## D. Configuración de un nuevo programa

Un administrador de dominio o aplicación puede crear un nuevo programa cuando sea necesario. Cada programa debe constar de un país, área técnica (puede ser 1 o más), región(es) y organización. Una vez que el programa esté configurado en QAT, los administradores del programa podrán actualizar ciertas configuraciones del programa. Puede encontrar información sobre cómo actualizar estas configuraciones en la sección [Información del programa] (./07-supply-planning-module-program-data.md#a1-program-information).

Para configurar un nuevo **Programa de planificación de suministros**, siga estos pasos:

1. Vaya a "Administración de programas" en el menú de la barra lateral.
2. Haga clic en "Programa de configuración".

O

1. Vaya a "Administración de programas" en el menú de la barra lateral y seleccione "Actualizar información del programa".
2. Haga clic en el icono azul “+” en la esquina superior derecha de la pantalla. Este botón redirigirá al usuario a la pantalla "Configurar programa".

<img src={require('@site/static/img/media/image396.png').default} alt="Supply Planning Module Setup Program Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 245: Supply Planning Module Setup Program Screen</p>

3. Complete la sección Reino y haga clic en "Siguiente". Si el usuario solo tiene acceso a un reino, este se seleccionará automáticamente para el usuario.
4. A continuación, seleccione el país para el que es el programa y haga clic en "Siguiente". Si el país no aparece en la lista, el administrador de la aplicación deberá agregar o activar ese país específico para el reino.
5. Seleccione las Áreas Técnicas para las que es el programa y haga clic en "Siguiente". Si el Área técnica no aparece en la lista, el administrador de la aplicación deberá agregar o activar esa Área técnica para el reino.

Nota: Se pueden seleccionar varias áreas técnicas utilizando la lista desplegable Área técnica.

<img src={require('@site/static/img/media/image397.png').default} alt="Setting-up a program with multi-select technical areas" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 246 Setting-up a program with multi-select technical areas</p>

6. Seleccione la organización para la que es el programa y haga clic en "Siguiente". Si la organización no aparece en la lista, el administrador de la aplicación deberá agregar o activar esa organización para el dominio.
7. Seleccione las regiones para las que es el programa y haga clic en "Siguiente". Si una región que el usuario necesita no aparece en la lista, el administrador de la aplicación deberá agregar o activar esa región para el dominio. Este paso permite una o más selecciones.
8. El paso 6 es donde el usuario proporcionará los **Datos del programa**. Complete todos los detalles requeridos.

<img src={require('@site/static/img/media/image398.png').default} alt="Add Program Data" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 247: Add Program Data</p>

9. El último paso para configurar el programa es agregar las unidades de planificación. Todos los campos de este paso son obligatorios para poder continuar. Cualquier campo que quede en blanco se resaltará en amarillo hasta que se complete.
10. Haga clic en "Enviar".

Para configurar un nuevo **Programa de pronóstico**, siga estos pasos:

1. Vaya a "Administración de programas" en el menú de la barra lateral y seleccione "Actualizar información del programa".
2. Haga clic en el icono azul “+” en la esquina superior derecha de la pantalla.
3. Complete los campos obligatorios para País, Área técnica, Organización, Región, Programa de pronóstico, Administrador del programa y Configuración de la versión 1 (Inicio del pronóstico, Período de pronóstico, Fin del pronóstico). Los administradores del programa pueden actualizar la configuración de la versión en cualquier momento.
   - Inicio del pronóstico, Período de pronóstico (meses) y Fin del pronóstico: según la fecha de inicio y finalización, QAT calculará automáticamente el período de pronóstico en meses. Alternativamente, los usuarios pueden optar por ingresar una fecha de inicio del pronóstico y una cantidad de meses en el período del pronóstico, y QAT calculará automáticamente la fecha de finalización del pronóstico.
4. Haga clic en "Enviar"

<img src={require('@site/static/img/media/image399.png').default} alt="Forecasting Module Setup Program Screen" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 248: Forecasting Module Setup Program Screen</p>

## E. Restablecimiento de la lista de problemas QAT

Los administradores de Realm tienen la capacidad de restablecer la lista de problemas QAT para todos los programas, independientemente del tipo o estado de la versión. Los programas se pueden restablecer de forma masiva o individualmente por programa. Al restablecer la lista de problemas QAT de un programa, todos los problemas con un estado "solucionado" se revertirán a "abiertos". Esto sucede automáticamente cuando un revisor del plan de suministro recibe la aprobación final de un plan de suministro, pero no sucede automáticamente para ningún otro tipo o estado de versión. Restablecer la lista de problemas QAT puede ser útil al final del período de presentación de un plan de suministro para programas que se presentaron como Finales, no Aprobados, pero todos los problemas deben reabrirse para su revisión en el siguiente período de presentación.

Para restablecer la lista de problemas QAT:

1. Navegue a la pantalla Versión y revisión del plan de suministro.
2. Haga clic en el botón "Restablecer QPL" en la esquina superior derecha.

<img src={require('@site/static/img/media/image400.png').default} alt="Reset QPL Button" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 249: Reset QPL Button</p>

3. Elija el tipo de versión, el estado y el programa que se debe restablecer

<img src={require('@site/static/img/media/image401.png').default} alt="Reset QPL Dropdowns" style={{ width: '100%', marginBottom: '15px' }} />
<p style={{ fontSize: '0.85em', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>Figure 250: Reset QPL Dropdowns</p>

4. Haga clic en "Enviar"