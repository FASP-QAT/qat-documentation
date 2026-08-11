---
id: getting-started
title: "2. Getting Started"
sidebar_label: "2. Getting Started"
sidebar_position: 1
---
# Sección 2. Primeros pasos

## A. Requisitos del sistema

Se espera que se acceda principalmente al QAT a través de computadoras portátiles y de escritorio con sistemas operativos estándar como MS Windows, Linux/Ubuntu e iOS. El navegador web recomendado es Google Chrome, pero se pueden utilizar Chromium, Edge, Mozilla Firefox o Safari.

También se sugiere que cada usuario de QAT tenga suficiente espacio en su unidad C: para permitir almacenar correctamente los datos de la caché del navegador. La cantidad de espacio necesario depende del tamaño del programa QAT que se está descargando y de cuántas aplicaciones se están ejecutando actualmente y utilizando datos del navegador. El almacenamiento temporal se comparte entre todas las aplicaciones web que se ejecutan en el navegador. Este grupo compartido puede ocupar hasta 1/3 del espacio disponible en disco. Luego, cada aplicación puede tener hasta el 20% del grupo compartido. Por ejemplo, si el espacio total disponible en la unidad C: es de 60 GB, el grupo compartido es de 20 GB; por lo tanto, QAT puede utilizar potencialmente hasta 4 GB. Esto se calcula a partir del 20 % (hasta 4 GB) de 1/3 (hasta 20 GB) del espacio disponible en la unidad C: (60 GB).

## B. Niveles de jerarquía en QAT

El sistema QAT tiene **tres niveles de jerarquía** para realizar operaciones. Los niveles de jerarquía son los siguientes:

<p align="center">
  <em>Application Masters → Realm-level Masters → Program-level Masters</em>
</p>

- **Aplicación** Masters es el nivel de jerarquía de datos más alto en QAT. Los datos maestros de la aplicación se aplican a todos los ámbitos y programas dentro de QAT. La mayor parte solo es accesible para los administradores de aplicaciones, aunque algunas de las funciones de la aplicación están disponibles para los administradores de Realm, como agregar y actualizar usuarios y asignar roles a los usuarios. Los administradores de aplicaciones pueden seleccionar los datos maestros específicos de toda la aplicación que desean agregar o actualizar.
- **Realm** Level Masters cubre todos los datos maestros de ese Reino que se aplican a sus programas de previsión y planificación de suministros. El administrador de Realm podrá ver, crear y editar estos datos maestros. Programas, áreas técnicas, unidades de planificación, agentes de adquisiciones y plantillas de árbol son algunos ejemplos de datos maestros de dominio que el administrador de dominio puede agregar y mantener. Los administradores del programa pueden acceder a muchos de los archivos maestros a nivel de dominio; sin embargo, no tienen la capacidad de agregar/actualizar estos datos.
- **Programa** Level Masters es el tercer nivel de jerarquía en QAT. Si bien los administradores de programas no pueden agregar programas, pueden actualizar la información del programa (por ejemplo, plazos de entrega, costos de flete, etc.) dentro de sus programas asignados. Los administradores y usuarios del programa también pueden agregar y actualizar los datos del programa, como ajustes de consumo, extrapolación y gestión de árboles (en pronóstico); y consumo, inventario, envíos (en la planificación de suministros).

Para obtener más información sobre la funcionalidad para administradores a nivel de aplicación y dominio, consulte el [Anexo 1: Manual del administrador de aplicación y dominio.](13-anexo-1-application-realm-administrator-manual.md#annex-1-application-realm-administrator-manual)

**Programas** son una combinación de País, Área Técnica (1 o más), Organización y Región. Por ejemplo, **FASPonia**–ARV-MOH-National, es un programa de planificación de suministros en el ámbito de la salud global para la gestión y planificación de **antirretrovirales** para el ministerio de salud del país ficticio FASPonia, y los datos de consumo e inventario se capturan a nivel nacional (región).

## C. Roles y permisos de usuario

A los usuarios se les puede asignar uno de los muchos roles disponibles en QAT que definen a qué nivel de datos tienen acceso los usuarios y cómo interactúan con esos datos, de acuerdo con la siguiente jerarquía:

<p align="center">
  <em>Application-level data → Realm-level data → Program-level data</em>
</p>

Los usuarios tendrán acceso a uno o más niveles de datos según los roles y permisos que se les asignen. Los roles se definen centralmente en el nivel de aplicación o ámbito. Un rol puede tener varios permisos asignados. Estos permisos definen a qué acciones tiene derecho un usuario. A un usuario se le pueden asignar múltiples roles y puede variar el rol según el acceso al programa. Por ejemplo, un usuario podría ser administrador del programa del plan de suministro para el programa A y visor de informes del plan de suministro para el programa B. (NOTA: Las funciones se pueden asignar solo a aquellos usuarios que estén registrados en QAT).

La gran mayoría de los usuarios de QAT (gerentes y funcionarios de programas de salud en los países) interactuarán con la aplicación a nivel de programa. por lo tanto, este manual se centrará principalmente en las tareas y funciones que se aplican a este grupo. Los roles de Administrador del programa y Usuario del programa generalmente están configurados para tener acceso a uno o varios programas dentro de una jurisdicción geográfica, es decir, un Administrador del programa solo puede administrar los programas asignados en su país, pero no un dominio.

Un administrador de **Reino** gestiona los datos maestros y puede tener acceso a todos los programas dentro de ese ámbito.
En el nivel de **Aplicación**, existe una función de Administrador de aplicaciones. Este rol tiene acceso exclusivo para crear estructuras de datos para toda la aplicación, incluida la adición de idiomas, roles, creación de dominios, actualización de etiquetas estáticas y dinámicas, entre otras funciones comerciales.

Consulte el [Anexo 4: Funciones comerciales](16-annex-4-business-functions.md#annex-4-business-functions) para obtener una tabla con la lista completa de funciones comerciales QAT disponibles por función de usuario.

## D. Cómo iniciar sesión en QAT e instalar la aplicación web progresiva (PWA)

**Cómo iniciar sesión en QAT por primera vez (en línea)**
1. Si no tiene un perfil de usuario, comuníquese con el administrador del dominio para crear una nueva cuenta de usuario y la función correspondiente en su nombre.
2. Una vez creada la cuenta, el nuevo usuario recibe un correo electrónico para "Restablecer contraseña".
3. El enlace "Restablecer contraseña" redirigirá al usuario al sitio web de QAT para crear la nueva contraseña. Una vez completado, haga clic en "Enviar".
   a. Nota: el enlace “Restablecer contraseña” será válido por 24 horas y podrá usarse solo una vez. Si es necesario, el usuario puede generar el enlace nuevamente para restablecer la contraseña haciendo clic en "Olvidé mi contraseña" en la pantalla de inicio de sesión.
4. Luego, el usuario será redirigido a la pantalla de inicio de sesión. Usando el correo electrónico de ID de usuario y la contraseña creada, inicie sesión en QAT.

**Nota:** La contraseña debe: tener al menos seis caracteres, comenzar con una letra, no ser la misma que su nombre de usuario o su última contraseña y debe incluir al menos un carácter especial, un número y una letra mayúscula.

**Instalación de la aplicación web progresiva QAT**

Las aplicaciones web progresivas (PWA) son navegadores independientes que brindan una apariencia similar a una aplicación y se instalan en el escritorio. Los usuarios solo pueden instalar QAT PWA a través de Google Chrome y Edge. La PWA se puede utilizar en modo en línea o fuera de línea.

1. Vaya a https://www.quantificationanalytics.org/
2. Haga clic en el botón Agregar en la barra de direcciones.
3. Haga clic en "instalar" cuando aparezca la pequeña ventana emergente.

![Installing QAT PWA](/img/media/image10.png)

_Instalación de la PWA_

4. Aparecerá un icono en su escritorio como una aplicación independiente. Los usuarios pueden abrir directamente desde el escritorio o escribir **chrome://apps/** en el navegador.

![QAT PWA Icons](/img/media/image11.png)

_Iconos QAT PWA_

**Nota**: Los usuarios pueden utilizar la PWA y las versiones del navegador simultáneamente; sin embargo, al realizar cambios en uno, se necesita una actualización en el otro para que los cambios entren en vigor (consulte [Cuándo y cómo realizar una actualización de la aplicación](#1-application-refresh)).

**Pasos para instalar PWA cuando el botón Instalar no está disponible**
1. En su navegador Chrome, navegue hasta https://www.quantificationanalytics.org/
2. Haga clic en los tres puntos verticales en la esquina superior derecha del navegador.
3. Seleccione "Transmitir, guardar y compartir".
4. Haga clic en "Crear acceso directo"
5. Aparecerá un icono QAT en su escritorio.
6. Haga clic en el icono "QAT" para abrir la aplicación PWA de QAT.

![Install PWA alternate method](/img/media/image12.png)

_Instalar método alternativo de PWA_

## E. Cómo iniciar sesión en QAT para usuarios existentes

**Iniciar sesión**
1. Para iniciar sesión, escriba la URL https://www.quantificationanalytics.org/ en la barra del navegador y presione Intro, o abra la PWA desde su escritorio.
2. Se mostrará una pantalla de inicio de sesión.

![Log-in Screen](/img/media/image13.png)

_Pantalla de inicio de sesión_

   un. Escriba el nombre de usuario y la contraseña en los campos obligatorios.
   b. Haga clic en el botón "Iniciar sesión".
      1. Nota: Un usuario puede optar por iniciar sesión "en línea" o "fuera de línea" usando la casilla de verificación encima del botón "Iniciar sesión". Para obtener más información sobre cómo trabajar en QAT sin conexión, consulte la Sección F. [Trabajar sin conexión](#working-offline).

2. Al iniciar sesión en el modo "en línea", QAT se sincronizará con los datos maestros. Si ve un mensaje sobre una "versión de servidor más reciente", consulte la Figura 36 en la Sección 3.B para obtener más información.

**Cerrar sesión**
1. Vaya a la esquina superior derecha de la pantalla.
2. Haga clic en el ícono del botón de cerrar sesión a la derecha del ícono de perfil.

![Logout Icon](/img/media/image14.png)

_Icono de cierre de sesión_

3. Aparecerá una ventana emergente que preguntará "¿Está seguro de que desea cerrar sesión?" – haga clic en "sí" para cerrar sesión

**Cambiar contraseña**
1. Dentro de QAT, haga clic en el ícono Perfil en la esquina superior derecha de la pantalla.
2. Haga clic en "Cambiar contraseña".

![Profile Icon](/img/media/image15.png)

_Icono de perfil_

3. Una vez en la pantalla 'Cambiar contraseña', ingrese su contraseña anterior seguida de la nueva contraseña que desee.
4. La nueva contraseña debe cumplir los siguientes criterios:
   <ul style={{ listStyleType: 'disc' }}>
     <li>La contraseña debe tener al menos 6 caracteres</li>
     <li>Password should not contain the word 'password'</li>
     <li>Password must contain at least 1 special character</li>
     <li>La contraseña debe contener al menos 1 número</li>
     <li>Password must contain at least 1 uppercase letter</li>
     <li>La contraseña debe comenzar con una letra</li>
     <li>New Password should not be the same as your username</li>
     <li>New password should not be the same as your last password</li>
   </ul>
5. Confirme la nueva contraseña escribiéndola nuevamente.
6. Haga clic en "Enviar".

**Si el usuario olvida su contraseña**
1. Un usuario que haya olvidado su contraseña, puede hacer clic en "¿Olvidó su contraseña?" enlace para restablecerlo.
2. Escriba la dirección de correo electrónico con la que el usuario está registrado en QAT y haga clic en "Enviar".

![Forgot Password Screen](/img/media/image16.png)

_Pantalla de contraseña olvidada_

3. El usuario recibirá un enlace por correo electrónico para restablecer su contraseña.

![Reset Password Email](/img/media/image17.png)

_Restablecer contraseña de correo electrónico_

4. El enlace "Restablecer contraseña" lo redireccionará a QAT, donde ingresará su nueva contraseña. Una vez completado, haga clic en "Enviar".
5. Después de hacer clic en "Enviar", el usuario será redirigido a la pantalla de inicio de sesión. Con el correo electrónico de ID de usuario y la contraseña recién creada, inicie sesión en QAT.

**Nota:** *La contraseña de un usuario de QAT será válida hasta por un año a partir de la fecha de creación/actualización.*

## F. Trabajar sin conexión

QAT es una herramienta híbrida y puede funcionar tanto en modo online como offline. Hay dos formas de forzar el modo fuera de línea de QAT: en la página de inicio de sesión antes de iniciar sesión en QAT o en la configuración del perfil después de iniciar sesión en QAT. Puede resultar útil cambiar al modo fuera de línea de QAT cuando el ancho de banda de Internet sea bajo.

| ![Offline Button on Profile Page](/img/media/image18.png) | ![Offline Button on Login Page](/img/media/image19.png) |
| :---: | :---: |
| *Botón sin conexión en la página de perfil* | *Botón sin conexión en la página de inicio de sesión* |

El ícono de Perfil en la esquina superior derecha muestra un círculo de color verde cuando se trabaja en modo en línea. Cuando el usuario cambia al modo fuera de línea, el color cambia a rojo, como se muestra en la captura de pantalla siguiente.

![Offline vs. Online Icons](/img/media/image20.png)

_Icono fuera de línea versus en línea_

La siguiente tabla detalla algunas de las funcionalidades clave que se pueden realizar en QAT sin conexión, así como algunas de las funcionalidades que se deben realizar en línea:

| ¿Qué puede hacer un usuario sin conexión?* | ¿Qué debe hacer un usuario en línea? |
| :--- | :--- |
| Planes/previsiones de suministro de importación/exportación | Restablecer contraseña |
| Ver datos maestros | Sincronizar datos maestros |
| Construir árboles/escenarios | Actualizar información del programa, unidades de planificación, configuración de versión o presupuestos |
| Ingresar/actualizar datos transaccionales del plan de suministro e ingresar/ajustar manualmente datos de consumo | Importar datos de pronóstico hacia/desde el Módulo de planificación de suministros hacia/desde el Módulo de pronóstico |
| Extrapolar utilizando medias móviles o semimedias | Extrapolar utilizando métodos de regresión lineal, suavizado triple exponencial (TES) o ARIMA |
| Plan de suministro/escenario | Crear entradas |
| Ver lista de problemas QAT | Descargar/Subir planes/previsiones de suministro |
| Ver informes del programa y resultados previstos | Ver informes globales |

*\*Nota: Incluso cuando está en línea, las funciones en la columna "fuera de línea" requieren que se descargue un programa; consulte la Sección 3 para obtener más información*

## Actualizaciones de la versión G. QAT

Para mantener la aplicación QAT, las versiones regulares se envían automáticamente a la aplicación QAT y a todos los usuarios del dominio. Estos lanzamientos de versiones podrían ocurrir debido a lo siguiente:
- Mantenimiento programado periódicamente para corrección de errores y optimización de aplicaciones.
- Mantenimiento de emergencia no planificado para correcciones de errores urgentes o de alta prioridad
- Actualizaciones periódicas relacionadas con mejoras o nuevas funciones.

![QAT Version Releases](/img/media/image21.png)

_Lanzamientos de versiones QAT_

La mayoría de los lanzamientos de versiones no requerirán ninguna acción significativa por parte del usuario, excepto actualizar la aplicación QAT antes de iniciar sesión. QAT le indicará al usuario que hay una nueva versión de QAT en la página de inicio de sesión:

![New QAT Version Released Prompt for Users](/img/media/image22.png)

_Nueva versión QAT publicada para los usuarios_

Si hay un cambio importante en la estructura de la arquitectura backend de QAT, es posible que se solicite a los usuarios que carguen su última versión en el servidor (consulte la sección [Cargar](06-managing-programs-and-versions.md#upload) para obtener más información) para evitar la pérdida de datos una vez que se lance la nueva versión de QAT. El equipo de soporte de QAT (support@quantificationanalytics.org) informará a los usuarios con suficiente antelación si es necesario cargar un programa.

## H. Solución de problemas

Cuando un usuario se encuentra con un posible problema del sistema con QAT, debe intentar solucionar el problema probando las soluciones descritas en esta sección, en el orden en que se describen (es decir, pruebe primero con H1 y, si eso no funciona, luego intente con H2 y luego con H3). Si ninguno de estos pasos resuelve el problema, el usuario debe enviar un ticket al servicio de asistencia técnica para informar el error (consulte la sección sobre '[Reportar un error](#reportar-un-error)').

### H1. Cuándo y cómo realizar una actualización de la aplicación

El equipo de desarrollo de QAT implementa versiones de software incrementales para solucionar los errores y cambios necesarios para la aplicación. QAT solicita a los usuarios que lo hagan en la pantalla de inicio de sesión después de cada lanzamiento (consulte la Figura 12). Para realizar una actualización de la aplicación, los usuarios deben presionar "Ctrl" + "Shift" + "R" al mismo tiempo en su teclado.

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', textAlign: 'center', marginBottom: '10px' }}>
  <img src={require('@site/static/img/media/image22.png').default} alt="New QAT Version Released Prompt for Users" style={{ maxWidth: '48%' }} />
  <img src={require('@site/static/img/media/image23.png').default} alt="Hold Ctrl + Shift + R (all 3 keys) to conduct an Application Refresh" style={{ maxWidth: '48%' }} />
</div>

<p align="center"><em>Hold Ctrl + Shift + R (all 3 keys) to conduct an Application Refresh</em></p>

La actualización de la aplicación también se puede utilizar para ayudar a solucionar cualquier problema experimentado al usar QAT. Después de mantener presionadas las 3 teclas, el software debería recargarse automáticamente. Tenga en cuenta que actualizar la aplicación es diferente a simplemente actualizar el navegador ("Ctrl" + "R").

### H2. Cuándo y cómo realizar una sincronización completa de datos maestros (MDS)

Si una actualización de la aplicación ("Ctrl" + "Shift" + "R") no resuelve su problema de software, puede intentar realizar una "Sincronización completa de datos maestros". Para hacerlo, asegúrese de tener una conexión a Internet estable y luego haga clic en el enlace "Sincronización completa de datos maestros" en la parte inferior de la aplicación (consulte la Figura 13). Es probable que esta solución funcione si tiene problemas con los datos maestros que pueden ser el resultado de una Internet inestable que perturbó la sincronización de datos maestros (MDS) normal descrita en la Sección 2.J Navegación y barra de menús.
- En una MDS normal, solo se sincronizan los cambios incrementales entre el servidor y su computadora local en función de la última vez que se completó una MDS.
- En un MDS completo, todos los datos maestros se cargan independientemente de la última vez que se sincronizó QAT, como si fuera la primera vez que se cargan datos maestros. Por lo tanto, esto llevará más tiempo que una MDS normal.

![Click "Full Master Data Sync"](/img/media/image24.png)

_Sincronización completa de datos maestros_

### H3. Cuándo y cómo borrar los datos del sitio

Si actualizar QAT (Ctrl + Shift + R) y una sincronización completa de datos maestros no resuelven el problema, el usuario debe intentar borrar los datos del sitio para solucionar el problema. Siga los pasos a continuación para borrar los datos del sitio en su QAT:

***Advertencia:*** *Al borrar los datos del sitio en QAT se borran todos los datos locales en la PWA y el navegador web, incluidos los cambios que haya realizado desde la última vez que los cargó. Asegúrese de haber subido todos los programas no guardados <u>antes de</u> borrar los datos del sitio.*

1. Haga clic en las teclas "Ctrl"+"Shift"+"I" al mismo tiempo en su teclado.

![Ctrl + Shift + I](/img/media/image25.png)

_Ctrl + Mayús + I_

2. Vaya a "Aplicación".
3. En el lado izquierdo de la pantalla, haz clic donde dice "Almacenamiento".
4. Una vez en la pantalla "Almacenamiento", seleccione "Borrar datos del sitio". Esto borrará cualquier dato que no se haya cargado.
5. Inicie sesión nuevamente en QAT y vuelva a descargar los programas que necesite. (Al borrar los datos del sitio se borran todos los programas de su máquina local, por lo que deberá volver a descargarlos).

![Clear Site Data](/img/media/image26.png)

_Borrar datos del sitio_

### H4. Solución de problemas de errores de red
Los usuarios pueden ver el siguiente mensaje de error al iniciar sesión o mientras usan QAT:

&gt; "Error de red. Verifique su conexión a Internet o comuníquese con el departamento de TI de su organización para asegurarse de que [api.quantificationanalytics.org/#](https://api.quantificationanalytics.org/#) y [www.quantificationanalytics.org/#](https://www.quantificationanalytics.org/#) estén en la lista blanca para el acceso al firewall".

Este mensaje aparece por dos motivos: 1) Internet inestable o 2) Internet restringido.

**Internet inestable:** Utilice otro Internet con una conexión estable o más rápida, o vuelva a intentarlo más tarde.

**Internet restringido:** Se puede acceder a QAT mediante la mayoría de las conexiones privadas a Internet, pero a veces los sistemas de TI de las organizaciones tienen un control de seguridad más estricto y, por lo tanto, señalan a QAT como una amenaza potencial. En este caso, los usuarios tienen dos opciones:
1. Usar otra conexión a Internet sin restricciones, o
2. Habilite el acceso al firewall incluyendo en la lista blanca las dos URL de sitios siguientes. Es posible que el usuario necesite comunicarse con el personal de TI de su organización para obtener ayuda.
   - [api.quantificationanalytics.org/#](https://api.quantificationanalytics.org/#)
   - [www.quantificationanalytics.org/#](https://www.quantificationanalytics.org/#)

## I. Servicio de asistencia técnica y tickets de QAT

### I1. Tickets para Agregar/Actualizar Usuarios y Datos Maestros
Cuando un usuario necesita agregar o actualizar un usuario o datos maestros por cualquier motivo, puede hacerlo solicitando un ticket de asistencia técnica. Antes de solicitar adiciones o cambios a los datos maestros en QAT, el usuario primero debe verificar los datos maestros a nivel de dominio (Realm Level Masters &gt;&gt; Producto) y el Informe del catálogo de programas para asegurarse de que la información no exista ya. Para obtener más información sobre cómo acceder y utilizar datos maestros, consulte [Gestión de programas](06-managing-programs-and-versions.md#working-with-program-data) y [Realm Masters](13-anexo-1-application-realm-administrator-manual.md#realm-masters). Para obtener información sobre cómo acceder al catálogo de programas, consulte [Catálogo de programas](13-anexo-1-application-realm-administrator-manual.md#product). Para acceder al servicio de asistencia técnica de QAT:

1. Los usuarios pueden acceder al servicio de asistencia técnica de QAT desde dos ubicaciones diferentes en QAT:
   un. En la página de inicio de sesión, y
   B. desde la cinta superior derecha en QAT

![QAT Login Screen Helpdesk](/img/media/image27.png)

_Servicio de ayuda de la pantalla de inicio de sesión de QAT_

![QAT Top Ribbon Helpdesk](/img/media/image28.png)

_Servicio de asistencia técnica de QAT Top Ribbon_

2. Aparecerán cuatro opciones para sacar un ticket: Agregar/Actualizar Usuario, Agregar/Actualizar Datos Maestros, Solicitud de Cambio e Informar un Error. Consulte las secciones siguientes sobre [Solicitudes de cambio](#requesting-a-change) y [Reportar un error](#reporting-a-bug).

![QAT Helpdesk Menu](/img/media/image29.png)

_Menú de la mesa de ayuda QAT_

3. Elija Agregar/Actualizar usuario o Agregar/Actualizar datos maestros. Cualquiera de las opciones lo llevará a diferentes pantallas para obtener más información.
4. Ingrese la información requerida en el formulario y haga clic en "Enviar".

![Add/Update User Screen](/img/media/image30.png)

_Agregar/actualizar pantalla de usuario_

| ![Add Master Data Screen](/img/media/image31.png) | ![Add Procurement Agent Master Data Screen](/img/media/image32.png) |
| :---: | :---: |
| *Pantalla Agregar datos maestros* | *Agregar pantalla de datos maestros del agente de adquisiciones* |

Después de enviar un ticket, al usuario se le asignará un número de código de ticket (por ejemplo, QAT-570). El usuario también recibirá una notificación por correo electrónico y aumentará la cantidad de "Tickets abiertos" en la cinta superior en rojo. Este número de ticket corresponde al número de ticket almacenado en la herramienta de gestión de software JIRA. Para obtener más información sobre la gestión de tickets y la herramienta de gestión de software JIRA, consulte [Administración de tickets](#managing-tickets).

### I2. Solicitar un cambio
Cuando un usuario tiene una idea para una nueva característica, funcionalidad o elemento de diseño que haría de QAT una mejor aplicación para todos los usuarios, como un nuevo informe, eliminar una columna innecesaria, etc., puede solicitar un cambio a través del servicio de asistencia técnica de QAT. Todos los tickets de solicitud de cambio requerirán una descripción detallada y capturas de pantalla. Una vez que el equipo técnico reciba el ticket de solicitud de cambio del usuario, se revisará para determinar su viabilidad y utilidad para todos los usuarios de QAT. Si se acepta la solicitud de cambio, no estará disponible en QAT de inmediato, sino que se colocará en una cola según la prioridad comercial del ámbito, la criticidad y los requisitos de LOE. Para solicitar un cambio en QAT:

1. Haga clic en el icono del servicio de asistencia técnica de QAT.

![QAT Helpdesk Icon](/img/media/image28.png)

_Icono del servicio de asistencia QAT_

2. Haga clic en "Solicitar un cambio" en las opciones del menú de QAT Helpdesk.
3. Complete el formulario completando la información requerida y haga clic en "Enviar".

![Change Request Ticket](/img/media/image33.png)

_Boleto de solicitud de cambio_

4. Después de enviar un ticket, al usuario se le asignará un número de código de ticket (por ejemplo, QAT-570). El usuario también recibirá una notificación por correo electrónico y aumentará la cantidad de "Tickets abiertos" en la cinta superior en rojo. Este número de ticket corresponde al número de ticket almacenado en la herramienta de gestión de software JIRA. Para obtener más información sobre la gestión de tickets y la herramienta de gestión de software JIRA, consulte [Administración de tickets](#managing-tickets).

### I3. Informar un error
Cuando un usuario se encuentra con un posible problema del sistema con QAT, debe intentar solucionarlo mediante una [actualización de la aplicación] (#h1-cuándo-y-cómo-realizar-una-actualización-de-la-aplicación) y/o [borrando datos del sitio] (#h3-cuándo-y-cómo-borrar-los-datos-del-sitio). Si ninguno de estos pasos resuelve el problema, el usuario debe enviar un ticket al servicio de asistencia técnica para informar el error.

El equipo de desarrollo abordará el ticket de error según la prioridad empresarial, la criticidad y la "capacidad" disponible a través de las versiones incrementales. Los pasos para generar un ticket en QAT se muestran a continuación:
1. Abra la pantalla del servicio de asistencia técnica de QAT y haga clic en "Informar de un error".
2. Ingrese un resumen del error así como una descripción del error. Sea descriptivo y proporcione tantos detalles como sea posible (por ejemplo, en qué programa/versión/funcionalidad estaba trabajando, pasos que siguió para obtener el error, etc.).
3. Cargue una captura de pantalla del error haciendo clic en el botón "Examinar" y extrayendo un archivo de captura de pantalla guardado desde su computadora.
   a. También es útil proporcionar la exportación del programa, si es posible (consulte [Exportaciones de programas](06-managing-programs-and-versions.md#export) sobre cómo exportar un programa local).
   B. **Nota:** Si desea cargar varios archivos, coloque las capturas de pantalla múltiples en una carpeta en su computadora y comprímalas antes de navegar en QAT. Luego, sube la carpeta comprimida.
4. Elija una prioridad (Máxima, Alta, Media o Baja) para el error según la urgencia y cómo afecta el trabajo diario en QAT.
   un. Los tiempos de respuesta y resolución de errores se basarán en el nivel de prioridad.
5. Haga clic en el botón "Enviar" para generar el ticket.

![Report a Bug](/img/media/image34.png)

_Reportar un error_

### I4. Gestión de tickets
Para mejorar la visibilidad, QAT brindará a los usuarios la opción de administrar y verificar el estado de sus tickets, ya sea que estén agregando/editando un usuario o datos maestros, solicitando un cambio o informando un error. Cuando un usuario envía un ticket, se le asignará un número de código de ticket (por ejemplo, QAT-570). El usuario también recibirá una notificación por correo electrónico y aumentará la cantidad de "Tickets abiertos" en la cinta superior en rojo. Este número de ticket corresponde al número de ticket almacenado en la herramienta de gestión de software JIRA.

| ![Helpdesk Ticket Code Number](/img/media/image35.png) | ![Number of Tickets on Top Ribbon](/img/media/image28.png) |
| :---: | :---: |
| *Número de código del ticket del servicio de asistencia* | *Número de entradas en la cinta superior* |

Desde la notificación por correo electrónico, los usuarios pueden hacer clic en "Ver solicitudes" para ver el estado de su ticket. Los usuarios también pueden agregar comentarios y capturas de pantalla adicionales a su solicitud, si lo desean. **Los usuarios siempre recibirán una notificación por correo electrónico una vez que se haya completado el ticket.**

**Nota**: Para poder acceder completamente al ticket a través de la herramienta de administración de software JIRA, los usuarios deben crear una cuenta con un nombre de usuario y contraseña en JIRA. Crear una cuenta en JIRA es **opcional**. JIRA es una herramienta de administración de software externa a la que se puede acceder a través del enlace proporcionado en el correo electrónico, **haciendo clic en el ícono de HelpDesk y luego eligiendo "Administrar mis tickets" en la esquina superior derecha de la ventana emergente**, o directamente a través de [https://qathelpdesk.atlassian.net/servicedesk/customer/portals](https://qathelpdesk.atlassian.net/servicedesk/customer/portals).

![Email Notification for QAT Ticket](/img/media/image36.png)

_Notificación por correo electrónico para el ticket QAT_

![Option to Navigate to JIRA](/img/media/image37.png)

_Opción para navegar a JIRA_

![JIRA Ticket Management](/img/media/image38.png)

_Gestión de tickets JIRA_

## J. Navegación y barra de menús

**Navegación básica**

Una vez que haya iniciado sesión en QAT, aparecerá la siguiente pantalla:

![Supply Planning Module Home Screen](/img/media/image39.png)

_Pantalla de inicio del módulo de planificación de suministros_

![Forecasting Module Home Screen](/img/media/image40.png)

_Pantalla de inicio del módulo de pronóstico_

En el área principal de la página de inicio habrá un panel de aplicación. El módulo de planificación de suministros tiene un panel mejorado con visualizaciones y análisis sobre los programas descargados y basados ​​en servidor a los que tiene acceso un usuario. Para obtener información específica sobre el panel del Módulo de planificación de suministros, consulte [Panel QAT] (#l-qat-dashboard).

Para el Módulo de Pronóstico, la cantidad de mosaicos y tipos de mosaicos dependerán del acceso según el rol asignado al usuario. Los usuarios verán un mosaico por el programa que descargaron (es decir, cuando estén en el módulo de pronóstico, los usuarios verán un mosaico por cada programa de pronóstico que hayan cargado). Al hacer clic en la flecha hacia abajo en el mosaico del programa de pronóstico, un usuario puede 1) eliminar el programa de su computadora local, 2) continuar con la configuración de versión del programa, 3) continuar con la lista de árboles de pronóstico o 4) continuar con la pantalla de ajuste y entrada de datos de consumo.

![Forecasting Module Program Tile](/img/media/image41.png)

_Mosaico del programa del módulo de pronóstico_

Además del panel de la aplicación, la pantalla consta de la cinta superior y una barra lateral de menú en el lado izquierdo. El usuario podrá acceder a todas las funciones disponibles en la cinta y la barra lateral a través de la herramienta sin importar qué pantalla esté viendo.

Para regresar a la pantalla del Panel, el usuario puede hacer clic en el ícono de inicio en la cinta superior o en el logotipo de QAT en la esquina superior izquierda de la pantalla.

![Home icon](/img/media/image42.png) O ![QAT logo](/img/media/image43.png)

**Cinta superior para el módulo de planificación de suministros**
![Top Ribbon for Supply Planning Module](/img/media/image44.png)

**Cinta superior para el módulo de pronóstico**
![Top Ribbon for Forecasting Module](/img/media/image45.png)

| Captura de pantalla | Función |
| :---: | :--- |
| ![Logout](/img/media/image46.png) | Cierra la sesión del usuario en QAT. |
| ![Profile](/img/media/image47.png) | El ícono de perfil es verde cuando trabaja en línea y rojo cuando trabaja sin conexión. Cuando el usuario hace clic en el icono, puede:<ul><li>Ver el nombre de usuario y las funciones asociadas que se le asignaron</li><li>Cambiar su idioma preferido</li><li>Cambiar su contraseña</li><li>Desconectarse/en línea</li><li>Cambiar al modo de tema oscuro/claro</li><li>Mostrar decimales en la planificación de suministro pantallas</li></ul> |
| ![Home](/img/media/image42.png) | Devuelve al usuario al panel/pantalla de inicio. |
| ![Download Manual](/img/media/image48.png) | Descarga el manual de usuario de QAT a la computadora del usuario. El archivo se puede encontrar en la carpeta **Descargas** en la computadora del usuario. |
| ![Refresh](/img/media/image49.png) | Actualiza la página actual en la que está trabajando un usuario. |
| ![Upload Alert](/img/media/image50.png) | Informa al usuario cuando un programa almacenado en el servidor local tiene cambios no cargados y debe cargar ese programa en el servidor. Si el ícono es azul, no hay programas no cargados. Si el ícono es rojo, hay programas que deben cargarse en el servidor. El número en el cuadro rojo indica la cantidad de programas que se deben cargar. |
| ![Version Alert](/img/media/image51.png) | Informa al usuario cuando hay una versión más reciente en el servidor de uno de sus programas descargados localmente. Si el ícono es azul, el usuario tiene la versión más actualizada de todos los programas descargados. Si el ícono es rojo, hay programas que están desactualizados en comparación con el servidor. El número en el cuadro rojo indica la cantidad de programas que tienen versiones desactualizadas. |
| ![Helpdesk](/img/media/image52.png) | Abre el servicio de asistencia técnica de QAT donde los usuarios pueden crear tickets para agregar/actualizar datos maestros, proponer solicitudes de cambio e informar un error. El número en el cuadro rojo indica la cantidad de tickets abiertos que tiene un usuario. Para obtener más información sobre el servicio de asistencia técnica, consulte Servicio de asistencia técnica y tickets de QAT. |
| ![ERP Notification](/img/media/image53.png) | Dirige al usuario a la página de notificación de envío de ERP. Esta página informará a los usuarios si hay actualizaciones importantes que deban revisarse para un envío de ERP vinculado. Para obtener más información sobre estas notificaciones y cuáles se marcarán, consulte Vinculación de envíos de ERP. Nota: este ícono solo está disponible en el Módulo de planificación de suministro QAT. |
| ![Guidance](/img/media/image54.png) | Abre una página web Mostrar orientación sobre una introducción a la previsión QAT. Este documento proporciona una descripción general de alto nivel sobre el flujo del proceso de pronóstico QAT. Nota: Este ícono solo está disponible en el módulo de pronóstico QAT. |

**Menú de la barra lateral:**

El menú de la barra lateral es donde el usuario puede navegar a las diferentes pantallas dentro de QAT. Las opciones disponibles en la barra lateral variarán en función del acceso según el rol asignado al usuario. Dentro de la barra lateral hay elementos de menú. Al hacer clic en uno de esos elementos, se expandirá para mostrar una lista de elementos del submenú. A medida que el usuario selecciona diferentes elementos del menú, los datos respectivos se mostrarán en QAT.

Dentro del menú de la barra lateral, encontrará los siguientes elementos de menú:

- **Módulo de planificación de suministros**
  - **Sincronización de datos maestros**: al hacer clic en este botón, se sincronizarán los datos maestros actualizados con su versión local. Esta función se realiza automáticamente al iniciar sesión en QAT, pero este botón le permite al usuario hacerlo sin cerrar sesión y volver a iniciarla.
  - **Application Masters** (solo disponible para administradores de aplicaciones y dominios): ver/agregar/editar datos a nivel de aplicación.
  - **Maestros de nivel de reino**: ver/agregar/editar datos de nivel de reino.
  - **Gestión de programas**: ver/agregar/editar datos a nivel de programa. Descargar/Cargar/Eliminar/Importar/Exportar programas. Realizar revisiones del plan de suministro.
  - **Datos del plan de suministro**: agregar/editar datos del plan de suministro.
  - **Planificación de suministro**: ver/editar el plan de suministro. Plan de escenario.
  - **Informes** – Ver informes. Editar la lista de problemas QAT.
- **Módulo de Previsión**
  - **Sincronización de datos maestros**: al hacer clic en este botón, se sincronizarán los datos maestros actualizados con su versión local. Esta función se realiza automáticamente al iniciar sesión en QAT, pero este botón le permite al usuario hacerlo sin cerrar sesión y volver a iniciarla.
  - **Application Masters** (solo disponible para administradores de aplicaciones y dominios): ver/agregar/editar datos a nivel de aplicación.
  - **Maestros de nivel de reino**: ver/agregar/editar datos de nivel de reino.
  - **Gestión de programas**: ver/agregar/editar datos a nivel de programa. Descargar/Cargar/Eliminar/Importar/Exportar programas.
  - **Predicciones basadas en el consumo**: importar/agregar/ajustar y extrapolar datos de consumo.
  - **Previsiones de árbol**: cree y administre un árbol de previsión. Ver modelos y validaciones de productos.
  - **Resultados del análisis de pronósticos**: compare y seleccione pronósticos finales. Ver otros informes de salida.

| Captura de pantalla | Función |
| :---: | :--- |
| ![Hamburger icon](/img/media/image58.png) | Contrae completamente el menú de la barra lateral para crear más espacio en la pantalla. Al hacer clic en el icono una vez, el menú desaparecerá. Al hacer clic nuevamente, volverá a aparecer. |
| ![Left arrow icon](/img/media/image59.png) | Minimiza el menú de la barra lateral sin hacerlo desaparecer por completo. Crea algo más de espacio en la pantalla. |
| ![Right arrow icon](/img/media/image60.png) | Se muestra cuando el menú de la barra lateral está minimizado. Haga clic para expandir y mostrar el menú de la barra lateral completo. También se utiliza para expandir y mostrar elementos del submenú debajo de los elementos del menú. |
| ![Down arrow icon](/img/media/image61.png) | Se muestra cuando se muestran elementos del submenú. Haga clic para contraer los elementos del submenú. |
| ![Module toggle buttons](/img/media/image62.png) | Botones que permiten a los usuarios alternar entre el módulo de previsión y planificación de suministros en QAT, si su acceso de usuario lo permite. |

**Botones encontrados en todo QAT**

Los siguientes botones se encuentran frecuentemente en las diferentes pantallas QAT:

| Botones | Acción |
| :---: | :--- |
| ![Submit button](/img/media/image63.png) | Presenta y realiza cambios. |
| ![Cancel button](/img/media/image64.png) | Cancela los cambios no enviados. |
| ![Reset button](/img/media/image65.png) | Devuelve los datos no enviados al formato anterior. |
| ![Plus icon button](/img/media/image66.png) | Agrega un nuevo registro a la base de datos. |
| ![Update](/img/media/image67.png) | Actualiza registros. |
| ![Search](/img/media/image68.png) | Ayuda a los usuarios a buscar la información deseada. Busca todos los campos de la tabla mostrada. |
| ![Clear](/img/media/image69.png) | Permite al usuario borrar los campos de búsqueda. |
| ![Red asterisk](/img/media/image70.png) | Indica campos de entrada de datos obligatorios. |
| ![Show Formulae](/img/media/image71.png) | Muestra explicaciones/definiciones y fórmulas sobre términos de uso común en la ventana/informe especificado. |
| ![Show Guidance](/img/media/image72.png) | Proporciona orientación de alto nivel sobre cómo utilizar mejor la página actual. |
| ![PDF, CSV, Word](/img/media/image73.png) | Exporta el informe a PDF, CSV o Word (las opciones dependen de la pantalla). |

## K. Cambio de idioma
Para garantizar que QAT sea adaptable a usuarios de todo el mundo, la aplicación muestra texto en cuatro idiomas diferentes: inglés, francés, portugués y español. Se anima a los usuarios a enviar tickets si desean que se mejore la traducción de una etiqueta en particular. (*Nota: Las traducciones de las etiquetas de las aplicaciones solo pueden ser editadas por **administradores de aplicaciones**. Las instrucciones sobre cómo hacerlo se pueden encontrar en la [sección de traducción](13-anexo-1-application-realm-administrator-manual.md#a-database-translation).*)

Hay dos formas de cambiar el idioma que se muestra al usuario:
1. Pantalla de inicio de sesión:
En la esquina superior derecha de la pantalla de inicio de sesión, hay un menú desplegable desde el cual los usuarios pueden seleccionar su
idioma preferido antes de iniciar sesión. Esto no solo cambiará el texto una vez que haya iniciado sesión en QAT, sino que
también cambiará el texto que se muestra en la pantalla de inicio de sesión.

![Login Screen Language Change](/img/media/image75.png)

_Cambio de idioma de la pantalla de inicio de sesión_

**2. Dentro de QAT:**
Una vez que haya iniciado sesión en QAT, el usuario puede cambiar el idioma de visualización haciendo clic en el ícono de perfil de usuario en la esquina superior derecha de la pantalla, seleccionando el idioma preferido y luego la herramienta actualizará automáticamente su texto/etiquetas.

![In Tool Language Change](/img/media/image76.png)

_En cambio de idioma de herramienta_

## L. Panel QAT
El panel de planificación de suministros proporciona una interfaz integral con visualizaciones y análisis mejorados. Está estructurado en tres secciones principales: Ticker, Descripción general y Programa destacado.

![Dashboard](/img/media/image77.png)

_Panel de planificación de suministros_

1. **Ticker**: esta sección muestra información clave a través de tres mosaicos que se desplazan automáticamente.
Para navegar manualmente por los mosaicos, haga clic en los puntos en la parte inferior de los mosaicos. Cada mosaico enlaza con pantallas relevantes. Haga clic en el nombre del mosaico para ser dirigido a esa pantalla (si no tiene acceso, aparecerá un mensaje apropiado). Por ejemplo, al hacer clic en el mosaico "Vinculación de ERP" accederá a la pantalla de Vinculación de ERP.
    - **Reino:** Proporciona métricas globales, como el número de países, usuarios, plan de suministro.
   programas de planificación y programas de previsión.
    - **Mi acceso:** Destaca los planes de suministro a los que tiene acceso, incluidos los planes de suministro descargados.
    - **Vinculación ERP:** Muestra el número de envíos vinculados por reino y programas descargados.

![Dashboard Ticker](/img/media/image78.png)

_Ticker del panel_

2. **Descripción general**: esta tabla ofrece un resumen de alto nivel de uno o más programas según su acceso.

![Overview Section](/img/media/image79.png)

_Sección de descripción general_

  **Selección de programas:**
  - Los programas pueden estar basados en el servidor o descargarse, pero no ambos.
  - Selección múltiple disponible para programas.
  - El modo sin conexión limita la selección solo a los programas descargados, con la casilla de verificación para los programas del servidor atenuada
  - Para programas de servidor, algunas columnas/características (por ejemplo, columna de acción y enlaces QPL) no se muestran
  - *Nota: las versiones descargada y del servidor pueden mostrar datos diferentes, si los elementos se actualizaron en la versión local y no se cargaron, o si el QPL se volvió a calcular en función de la fecha de hoy.*
  
  **Características de la tabla de descripción general**
  Cada columna está diseñada para presentar datos procesables:
  - **Información sobre herramientas:** Pase el cursor sobre el icono de información sobre herramientas en cada columna para obtener más detalles.
  - **Clasificación:** Los programas se ordenan alfabéticamente, con un asterisco que indica las versiones finales y aprobadas.
  - **Enlaces e íconos:**
      - La columna 'Acción' permite a los usuarios eliminar un programa local y hacer clic en los íconos de la nube para ser redirigidos a las pantallas de carga o descarga. El icono de la nube aparecerá en rojo si la versión descargada no está actualizada. La columna 'Acción' no aparece en la tabla de descripción general de los programas de servidor.
      - Al hacer clic en el número en la columna 'Abrir problemas de QAT', se dirigirá al usuario a la Lista de problemas de QAT (QPL) para ese programa. Esto no aparece para los programas de servidor.
      - Al hacer clic en el estado en la columna 'Estado de revisión', se dirigirá al usuario a la pantalla Versión y revisión del plan de suministro, mientras que al hacer clic en el ícono del cuaderno en la misma celda se abrirá el historial de notas para ese programa.

![Version Notes](/img/media/image80.png)

_Notas de la versión_

3. **Programa destacado**: esta sección proporciona información detallada sobre las métricas clave de un único programa. Asegúrese de utilizar información sobre herramientas y enlaces integrados para una navegación y exploración de datos eficientes. Las 5 secciones tienen información sobre herramientas junto al encabezado y cada encabezado está vinculado a una pantalla QAT a la que puede acceder haciendo clic en el encabezado.

  **Seleccionando un programa:**
  - Admite servidor o programas descargados (solo selección única)
  - Los programas de servidor tienen por defecto la última versión (borrador o final)
  - El modo sin conexión limita la selección a los programas descargados.
  
  **Período del informe:**
  - Sólo afecta a las secciones Envíos, Error de Previsión y Caducidades. La sección Puntuación del plan de suministro general y Calidad de los datos se basan en los cálculos de QPL y la sección Estado del stock siempre es 18 meses en el futuro (incluido el mes actual).
  - **Programas de servidor:** El valor predeterminado es 6 meses pasados y 18 meses futuros (editable)
  - **Programas descargados:** El valor predeterminado es 6 meses pasados y 18 meses futuros (no editables en el panel). Los administradores pueden establecer valores predeterminados personalizados por programa a través de la pantalla Actualizar información del programa.

![Dashboard Default Report Period](/img/media/image81.png)

_Período de informe predeterminado del panel en la configuración del programa_

  **Métricas destacadas**
  
  **Puntuación general del plan de suministro**
  - El dial grande muestra la puntuación general del plan de suministro para un programa específico. La puntuación del plan de suministro general es un promedio de la puntuación de calidad y la puntuación del estado del stock. En general, las puntuaciones más altas indican un desempeño más sólido del plan de suministro. Para obtener más información sobre cómo se calculan las puntuaciones, consulte el Informe del cuadro de mando del plan de suministro.
  
  **Estado de existencias:**
  - El gráfico de barras muestra el porcentaje de meses en el período del informe por categoría de acciones. Puede pasar el cursor sobre el gráfico para ver desgloses detallados.
  - Personalización visual: puede ocultar elementos de leyenda o copiar y pegar gráficos.
  - La tabla adjunta muestra los detalles de desabastecimiento por unidad de planificación (PU).
  - Muestra la puntuación del estado del stock, que se basa en el número de meses (18 meses en el futuro) en que cada unidad de planificación está abastecida según lo planificado.

![Stock Status Section](/img/media/image82.png)

_Sección de estado de existencias_

  **Calidad de los datos:**
  - Refleja las métricas de la lista de problemas QAT, independientemente del período del informe.
  - Se actualiza dinámicamente con los cambios realizados en QPL si el usuario ha actualizado el QPL. De lo contrario, el usuario puede hacer clic en el icono de actualización junto al encabezado Calidad de datos para actualizar los datos mostrados.
  - Muestra el puntaje de calidad de los datos, que es un promedio del porcentaje de cumplimiento del plan de suministro según los cuatro diales de calidad de los datos.
  - Diales para:
    - Consumo previsto: Cuenta el número de UP a las que les falta al menos un mes de consumo previsto en los próximos 18 meses.
    - Inventario Actual: Cuenta el número de UP que no tienen datos recientes de inventario real en los últimos 3 meses.
    - Consumo real: Cuenta el número de UP que no tienen datos de consumo real en los últimos 3 meses o una brecha en los datos de consumo real en los últimos 6 meses.
    - Envíos: Cuenta la cantidad de PU que tienen envíos con fechas de recepción anteriores o envíos que deberían haber sido "enviados" según los plazos de entrega del programa.

![Data Quality Section](/img/media/image85.png)

_Sección de Calidad de Datos_

  **Error de pronóstico (solo versiones de servidor):**
  - Error porcentual medio calculado para el período del informe.
  - Los errores por encima de un umbral establecido (predeterminado 50%) se resaltan en rojo. Los administradores pueden ajustar los umbrales por PU y programa en la pantalla "Actualizar unidades de planificación".
  - Los datos faltantes muestran un ícono de precaución con una nota explicativa.

![Forecast Error Section](/img/media/image83.png)

_Sección de errores de pronóstico_

  **Envíos:**
  - Gráfico circular de envíos por fuente de financiación, agente de adquisiciones o estado utilizando el menú desplegable para designar cuál.
  - Pase el cursor sobre el gráfico circular para ver los desgloses de costos. El desglose de costos utiliza como denominador el valor total de los envíos en ese período del informe.
  - La tabla adjunta muestra el número de envíos con financiación por determinar en el período del informe.

![Shipment Section](/img/media/image84.png)

_Sección de Envíos_

**Vence:**
  - Muestra los vencimientos dentro del período del informe, incluida la cantidad y el costo total.
  - El valor de vencimiento total en todas las unidades de planificación para el programa seleccionado aparece en la parte superior derecha de la sección.

![Expiries Section](/img/media/image86.png)

_Sección de Vencimientos_