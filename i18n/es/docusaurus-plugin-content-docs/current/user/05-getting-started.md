---
id: getting-started
title: "Empezando"
sidebar_label: "Empezando"
sidebar_position: 5
---
# Empezando

## Requisitos del sistema

QAT es una aplicación basada en web a la que se puede acceder a través de computadoras portátiles y de escritorio que ejecutan **Windows, Linux/Ubuntu o macOS**. 

- **Navegador recomendado:** Google Chrome.
- **Navegadores compatibles:** Chromium, Microsoft Edge, Mozilla Firefox y Safari.

### Espacio en disco y caché
Recomendamos tener suficiente espacio libre en su unidad principal (por ejemplo, unidad C:) para los datos de caché del navegador. Chrome y otros navegadores comparten un grupo de almacenamiento entre todas las aplicaciones web, que puede representar hasta 1/3 del espacio disponible en disco. QAT puede utilizar hasta el 20% de este fondo compartido. Por ejemplo, con 60 GB de espacio libre, el grupo compartido es de 20 GB, lo que permite a QAT almacenar hasta 4 GB de datos locales.

## Jerarquía de datos en QAT

El sistema QAT está organizado en tres niveles jerárquicos:

1. **Nivel de aplicación:** El nivel más alto, que cubre datos maestros globales que se aplican a todos los ámbitos y programas. Restringido a administradores de aplicaciones.
2. **Nivel de ámbito:** Cubre datos maestros específicos de un ámbito (por ejemplo, país, áreas técnicas, unidades de planificación). Gestionado por administradores de reino.
3. **Nivel de programa:** El tercer nivel, donde los usuarios administran pronósticos específicos o datos de planificación de suministro (por ejemplo, consumo, inventario, envíos).

Para funciones administrativas detalladas, consulte el [Anexo 1: Manual del administrador de dominios y aplicaciones](13-anexo-1-application-realm-administrator-manual.md#annex-1-application-realm-administrator-manual).

> **Nota:** Un **Programa** es una combinación de un país, un área técnica, una organización y una región (p. ej., *FASPonia–ARV-MOH-Nacional*).

## Roles y permisos de usuario

El acceso a QAT se rige por roles y permisos definidos en el nivel de Aplicación o Reino. A un usuario se le pueden asignar múltiples roles, que pueden variar según el programa.

- **Nivel de programa:** La mayoría de los usuarios (gerentes y funcionarios) interactúan en este nivel como **Administradores de programa** o **Usuarios de programa**.
- **Nivel de dominio:** **Administradores de dominio** administran los datos maestros y tienen acceso a todos los programas dentro de su dominio.
- **Nivel de aplicación:** **Los administradores de aplicaciones** tienen acceso exclusivo a estructuras globales, roles y configuraciones del sistema.

Para obtener una lista completa de roles y funciones comerciales, consulte el [Anexo 4: Funciones comerciales](16-annex-4-business-functions.md#annex-4-business-functions).

## Inicio de sesión e instalación de PWA

### Inicio de sesión inicial (en línea)
Si no tiene un perfil de usuario, comuníquese con su administrador de Realm para crear una cuenta. Una vez creada, recibirás un correo electrónico para restablecer tu contraseña.

1. Haga clic en el enlace **Restablecer contraseña** en el correo electrónico (válido por 24 horas, de un solo uso).
2. Cree su nueva contraseña y haga clic en **Enviar**.
3. Inicie sesión con su dirección de correo electrónico y la nueva contraseña.

> **Requisitos de contraseña:**
> - Mínimo 6 caracteres, comenzando por una letra.
> - Debe incluir al menos una letra mayúscula, un número y un carácter especial.
> - No puede ser el mismo que su nombre de usuario o contraseña anterior.

### Instalación de la aplicación web progresiva (PWA) QAT
La PWA proporciona una experiencia independiente similar a una aplicación en su escritorio y admite el modo fuera de línea. Es compatible con **Google Chrome** y **Microsoft Edge**.

#### Instalación estándar
1. Vaya al [sitio web de Quantification Analytics](https://www.quantificationanalytics.org/).
2. Haga clic en el icono **Instalar** (signo más) en la barra de direcciones del navegador.
3. Seleccione **Instalar** en la ventana emergente de confirmación.

![Installing QAT PWA](/img/media/image10.png)
*Figura 1: Instalación de PWA*

#### Instalación alternativa (si falta el botón)
1. En Chrome, haga clic en **tres puntos verticales** (arriba a la derecha).
2. Seleccione **Transmitir, guardar y compartir** > **Crear acceso directo**.
3. Aparecerá un icono QAT en su escritorio.

![PWA Alternate Method](/img/media/image12.png)
*Figura 2: Instalación de PWA alternativa*

## Acceso a QAT para usuarios existentes

1. Navegue a [https://www.quantificationanalytics.org/](https://www.quantificationanalytics.org/) o abra la PWA desde su escritorio.
2. Ingrese sus credenciales en la pantalla de inicio de sesión.
3. (Opcional) Marque la casilla **Sin conexión** para trabajar sin conexión a Internet.

![Login Screen](/img/media/image13.png)
*Figura 3: Pantalla de inicio de sesión*

### Seguridad y Mantenimiento
- **Cerrar sesión:** Haga clic en el icono de cerrar sesión en la cinta superior derecha.
- **Cambiar contraseñas:** Dentro de QAT, vaya a su **Perfil** > **Cambiar contraseña**.
- **¿Olvidé mi contraseña?** Haga clic en el enlace **¿Olvidé mi contraseña?** en la pantalla de inicio de sesión para recibir un enlace de restablecimiento por correo electrónico.

> **Nota:** Las contraseñas QAT caducan un año después de su creación o actualización.

## Trabajar sin conexión

QAT es una herramienta híbrida que funciona tanto en modo online como offline. Puede cambiar manualmente al modo fuera de línea a través de la página de inicio de sesión o dentro de la configuración de su perfil. Esto es particularmente útil en entornos con poco ancho de banda de Internet.

![Offline Toggle (Profile)](/img/media/image18.png) ![Offline Toggle (Login)](/img/media/image19.png)

*Figura 9: Alternancia sin conexión en la configuración del perfil y Figura 10: Alternancia sin conexión en la página de inicio de sesión*

El ícono de Perfil en la esquina superior derecha indica el estado de tu conexión: un **círculo verde** para en línea y un **círculo rojo** para sin conexión.

![Status Icons](/img/media/image20.png)

*Figura 11: Iconos de estado en línea (verde) frente a fuera de línea (rojo)*

### Capacidades en línea versus fuera de línea

| Característica | Sin conexión | En línea |
| :--- | :---: | :---: |
| Planes y previsiones de suministro de importación/exportación | [x] | [x] |
| Ver datos maestros | [x] | [x] |
| Construir árboles y escenarios | [x] | [x] |
| Ingrese datos transaccionales y de consumo | [x] | [x] |
| Extrapolar (Promedio Móvil / Semipromedio) | [x] | [x] |
| Ver informes y resultados a nivel de programa | [x] | [x] |
| Restablecer contraseña | [ ] | [x] |
| Sincronizar datos maestros | [ ] | [x] |
| Actualizar información del programa / presupuestos | [ ] | [x] |
| Importar datos entre módulos | [ ] | [x] |
| Extrapolar (Regresión Lineal / TES / ARIMA) | [ ] | [x] |
| Crear tickets de asistencia técnica | [ ] | [x] |
| Descargar/Cargar programas | [ ] | [x] |
| Ver informes a nivel global | [ ] | [x] |

*\*Nota: La mayoría de las funciones sin conexión requieren que el programa específico se haya descargado previamente en su dispositivo local. Consulte la Sección 3 para obtener más detalles.*

## Solución de problemas y actualizaciones de software

### Lanzamientos regulares de software
QAT recibe actualizaciones periódicas de la versión para corregir errores, optimizar el rendimiento y nuevas funciones. Cuando haya una nueva versión disponible, se le pedirá en la pantalla de inicio de sesión que actualice la aplicación.

![New QAT Version Prompt](/img/media/image22.png)
*Figura 4: Notificación de actualización de software*

> [!IMPORTANTE]
> Para evitar la pérdida de datos durante actualizaciones estructurales importantes, asegúrese de que todos los programas locales se carguen en el servidor antes del lanzamiento. El equipo de soporte de QAT le notificará con anticipación si es necesario realizar una carga.

### Resolver problemas comunes
Si encuentra dificultades técnicas, siga estos pasos de solución de problemas en orden:

#### 1. Actualización de la aplicación
Solucione la mayoría de los fallos menores realizando una actualización completa. Presione **Ctrl + Shift + R** simultáneamente. Esto recarga el software y elimina fallos temporales, a diferencia de una actualización estándar del navegador (**Ctrl + R**).

#### 2. Sincronización completa de datos maestros
Si una actualización no funciona, intente una **Sincronización completa de datos maestros**. Mientras que una MDS normal solo recupera cambios incrementales, una MDS completa recarga todos los datos maestros desde cero. 
- *Ubicación:* Haga clic en el enlace en la parte inferior de la aplicación.
- *Requisito:* Se requiere una conexión a Internet estable.

![Full Master Data Sync](/img/media/image24.png)
*Figura 5: Enlace completo de sincronización de datos maestros*

#### 3. Borrar datos del sitio
Como paso final para la solución de problemas, puede borrar todos los datos almacenados localmente. 

> [!ADVERTENCIA]
> Esto borrará todos los cambios locales y programas descargados. Asegúrese de haber **cargado todos los datos** al servidor antes de continuar.

1. Presione **Ctrl + Shift + I** para abrir las Herramientas de desarrollo del navegador.
2. Navegue hasta la pestaña **Aplicación**.
3. Seleccione **Almacenamiento** a la izquierda y haga clic en **Borrar datos del sitio**.
4. Vuelva a iniciar sesión y vuelva a descargar sus programas.

![Clear Site Data](/img/media/image26.png)
*Figura 6: Borrar datos del sitio*

### Solución de problemas de errores de red
Si ve un mensaje de "Error de red", generalmente se debe a:
- **Internet inestable:** Pruebe una conexión más rápida o espere una mejor señal.
- **Restricciones del firewall:** La política de TI de su organización puede bloquear QAT. Solicite que su departamento de TI incluya en la lista blanca las siguientes URL:
    - `api.quantificationanalytics.org`
    - `www.quantificationanalytics.org`

## Servicio de asistencia técnica y tickets de QAT

### Tickets para Agregar/Actualizar Usuarios y Datos Maestros

Cuando un usuario necesita agregar o actualizar un usuario o datos maestros por cualquier motivo, puede hacerlo solicitando un ticket de asistencia técnica. Antes de solicitar adiciones o cambios a los datos maestros en QAT, el usuario primero debe verificar los datos maestros a nivel de dominio (Realm Level Masters \>\> Producto) y el Informe del catálogo de programas para asegurarse de que la información no exista ya. Para obtener más información sobre cómo acceder y utilizar datos maestros, consulte [Gestión de programas](06-managing-programs-and-versions.md#working-with-program-data) y [Realm Masters](13-anexo-1-application-realm-administrator-manual.md#realm-masters). Para obtener información sobre cómo acceder al catálogo de programas, consulte [Catálogo de programas](13-anexo-1-application-realm-administrator-manual.md#product). Para acceder al servicio de asistencia técnica de QAT:

1. > Los usuarios pueden acceder al servicio de asistencia técnica de QAT desde dos ubicaciones diferentes en QAT:
    1. > En la página de inicio de sesión, y

    2. > desde la cinta superior derecha en QAT

![A screenshot of a login screen Description automatically generated](/img/media/image27.png)

![A red line with numbers and circles Description automatically generated](/img/media/image28.png)

Figura 18: Tres ubicaciones para acceder al servicio de asistencia técnica de QAT

2. > Aparecerán cuatro opciones para sacar un ticket: Agregar/Actualizar Usuario, Agregar/Actualizar Datos Maestros, Solicitud de Cambio e Informar un Error. Consulte las secciones siguientes sobre [Solicitudes de cambio](#requesting-a-change) y [Reportar un error](#reporting-a-bug).

![P772#yIS1](/img/media/image29.png)

Figura 19: Menú de la mesa de ayuda de QAT

3. > Elija Agregar/Actualizar usuario o Agregar/Actualizar datos maestros. Cualquiera de las opciones lo llevará a diferentes pantallas para obtener más información.

4. > Ingrese la información requerida en el formulario y haga clic en "Enviar".

![P778#yIS1](/img/media/image30.png)

Figura 20: Pantalla Agregar/Actualizar Usuario

![A screenshot of a computer Description automatically generated](/img/media/image31.png) ![P781#yIS2](/img/media/image32.png)

Figura 21: Pantalla Agregar datos maestros Figura 22: Pantalla Agregar datos maestros del agente de adquisiciones

Después de enviar un ticket, al usuario se le asignará un número de código de ticket (por ejemplo, QAT-570). El usuario también recibirá una notificación por correo electrónico y aumentará la cantidad de "Tickets abiertos" en la cinta superior en rojo. Este número de ticket corresponde al número de ticket almacenado en la herramienta de gestión de software JIRA. Para obtener más información sobre la gestión de tickets y la herramienta de gestión de software JIRA, consulte [Administración de tickets](#managing-tickets).

### Solicitar un cambio

Cuando un usuario tiene una idea para una nueva característica, funcionalidad o elemento de diseño que haría de QAT una mejor aplicación para todos los usuarios, como un nuevo informe, eliminar una columna innecesaria, etc., puede solicitar un cambio a través del servicio de asistencia técnica de QAT. Todos los tickets de solicitud de cambio requerirán una descripción detallada y capturas de pantalla. Una vez que el equipo técnico reciba el ticket de solicitud de cambio del usuario, se revisará para determinar su viabilidad y utilidad para todos los usuarios de QAT. Si se acepta la solicitud de cambio, no estará disponible en QAT de inmediato, sino que se colocará en una cola según la prioridad comercial del ámbito, la criticidad y los requisitos de LOE. Para solicitar un cambio en QAT:

1. > Haga clic en el icono del servicio de asistencia técnica de QAT.

![A red line with numbers and circles Description automatically generated](/img/media/image28.png)

Figura 23: Icono del servicio de asistencia técnica de QAT

2. > Haga clic en "Solicitar un cambio" en las opciones del menú de QAT Helpdesk.

3. > Complete el formulario completando la información requerida y haga clic en "Enviar".

![A screenshot of a computer Description automatically generated](/img/media/image33.png)

Figura 24: Ticket de solicitud de cambio

4. > Después de enviar un ticket, al usuario se le asignará un número de código de ticket (por ejemplo, QAT-570). El usuario también recibirá una notificación por correo electrónico y aumentará la cantidad de "Tickets abiertos" en la cinta superior en rojo. Este número de ticket corresponde al número de ticket almacenado en la herramienta de gestión de software JIRA. Para obtener más información sobre la gestión de tickets y la herramienta de gestión de software JIRA, consulte [Administración de tickets](#managing-tickets).

### Informar de un error

Cuando un usuario se encuentra con un posible problema del sistema con QAT, debe intentar solucionarlo mediante una [actualización de la aplicación](#1-application-refresh) y/o [borrando datos del sitio](#3-clear-site-data). Si ninguno de estos pasos resuelve el problema, el usuario debe enviar un ticket al servicio de asistencia técnica para informar el error.

El equipo de desarrollo abordará el ticket de error según la prioridad empresarial, la criticidad y la "capacidad" disponible a través de las versiones incrementales. Los pasos para generar un ticket en QAT se muestran a continuación:

1. Abra la pantalla del servicio de asistencia técnica de QAT y haga clic en "Informar un error".

2. Ingrese un resumen del error, así como una descripción del error. Sea descriptivo y proporcione tantos detalles como sea posible (por ejemplo, en qué programa/versión/funcionalidad estaba trabajando, pasos que siguió para obtener el error, etc.).

3. Cargue una captura de pantalla del error haciendo clic en el botón "Examinar" y extrayendo un archivo de captura de pantalla guardado desde su computadora.
    1. También es útil proporcionar la exportación del programa, si es posible (consulte [Exportaciones de programas](06-managing-programs-and-versions.md#export) sobre cómo exportar un programa local)

    2. **\*Nota**: Si desea cargar varios archivos, coloque las múltiples capturas de pantalla en una carpeta en su computadora y comprímalas antes de navegar en QAT. Luego, sube la carpeta comprimida.\*

4. Elija una prioridad (Máxima, Alta, Media o Baja) para el error según la urgencia y cómo afecta el trabajo diario en QAT.
    1. Los tiempos de respuesta y resolución de errores se basarán en el nivel de prioridad.

5. Haga clic en el botón "Enviar" para generar el ticket.

![A screenshot of a computer Description automatically generated](/img/media/image34.png)

Figura 25: Informar un error

### Gestión de tickets

Para mejorar la visibilidad, QAT brindará a los usuarios la opción de administrar y verificar el estado de sus tickets, ya sea que estén agregando/editando un usuario o datos maestros, solicitando un cambio o informando un error. Cuando un usuario envía un ticket, se le asignará un número de código de ticket (por ejemplo, QAT-570). El usuario también recibirá una notificación por correo electrónico y aumentará la cantidad de "Tickets abiertos" en la cinta superior en rojo. Este número de ticket corresponde al número de ticket almacenado en la herramienta de gestión de software JIRA.

![P815#yIS1](/img/media/image35.png) ![A red line with numbers and circles Description automatically generated](/img/media/image28.png)

Figura 26: Número de código de ticket del servicio de asistencia Figura 27: Número de tickets en la cinta superior

Desde la notificación por correo electrónico, los usuarios pueden hacer clic en "Ver solicitudes" para ver el estado de su ticket. Los usuarios también pueden agregar comentarios y capturas de pantalla adicionales a su solicitud, si lo desean. **Los usuarios siempre recibirán una notificación por correo electrónico una vez que se haya completado el ticket.**

**Nota**: Para poder acceder completamente al ticket a través de la herramienta de administración de software JIRA, los usuarios deben crear una cuenta con un nombre de usuario y contraseña en JIRA. Crear una cuenta en JIRA es **opcional**. JIRA es una herramienta de administración de software externa a la que se puede acceder a través del enlace proporcionado en el correo electrónico, **haciendo clic en el ícono de HelpDesk y luego eligiendo "Administrar mis tickets" en la esquina superior derecha de la ventana emergente**, o directamente a través de [https://qathelpdesk.atlassian.net/servicedesk/customer/portals](https://qathelpdesk.atlassian.net/servicedesk/customer/portals).

![P821#yIS1](/img/media/image36.png)

Figura 28: Notificación por correo electrónico para el ticket QAT

![A screenshot of a computer Description automatically generated](/img/media/image37.png)

Figura 29: Opción para navegar a JIRA

![P823#yIS1](/img/media/image38.png)

Figura 30: Gestión de tickets JIRA

## Barra de navegación y menú

**Navegación básica**

## Servicio de asistencia técnica y tickets de QAT

El servicio de asistencia técnica de QAT es su principal punto de contacto para soporte técnico, administración de usuarios y solicitudes de funciones.

### Enviar un ticket
Puede acceder al servicio de asistencia técnica desde la **Página de inicio de sesión** o la **Cinta superior** dentro de la aplicación.

1. Haga clic en el ícono **QAT Helpdesk**.
2. Seleccione una de las siguientes opciones:
   - **Agregar/Actualizar usuario:** Solicitar nuevas cuentas o cambios de rol.
   - **Agregar/Actualizar datos maestros:** Solicitar adiciones a productos, agentes de adquisiciones, etc.
   - **Solicitar un cambio:** Proponer nuevas funciones o mejoras de diseño.
   - **Informar un error:** Informar problemas técnicos (incluya capturas de pantalla y pasos para reproducirlos).
3. Complete los campos obligatorios y haga clic en **Enviar**.

![QAT Helpdesk Menu](/img/media/image29.png)
*Figura 7: Opciones de tickets de la mesa de ayuda*

### Gestionar tus entradas
Después del envío, recibirá un **Código de boleto** (por ejemplo, QAT-570) y una notificación por correo electrónico. 
- **Seguimiento:** Haga clic en **Ver solicitudes** en el correo electrónico de notificación para verificar el estado o agregar comentarios.
- **Integración JIRA:** QAT utiliza JIRA para la gestión de tickets. Si bien es opcional, puede crear una cuenta JIRA para realizar un seguimiento de todas sus solicitudes en un solo lugar.

## Navegación e interfaz

### Página de inicio y panel de control
Al iniciar sesión, verá el Panel principal. 
- **Módulo de planificación de suministros:** Presenta visualizaciones y análisis mejorados.
- **Módulo de pronóstico:** Muestra mosaicos para cada programa descargado. Haga clic en la flecha de un mosaico para administrar versiones, árboles o entrada de datos.

Para regresar al Panel de control en cualquier momento, haga clic en el ícono **Inicio** en la cinta superior o en el **Logotipo de QAT** en la esquina superior izquierda.

![Supply Planning Dashboard](/img/media/image39.png)
*Figura 8: Pantalla de inicio de planificación de suministros*

### Diseño de interfaz
La interfaz consta de tres áreas principales:
1. **Cinta superior:** Acceso rápido a funciones globales (Perfil, Servicio de asistencia técnica, Sincronización).
2. **Menú de la barra lateral:** Navegación a pantallas específicas del módulo (Datos maestros, Informes, etc.).
3. **Área de contenido principal:** Donde se realiza la entrada y el análisis de datos.

**Cinta superior para planificación de suministro frente a previsión:**
![Supply Planning Ribbon](/img/media/image44.png)
![Forecasting Ribbon](/img/media/image45.png)

### Funciones principales de la cinta

| Icono | Función |
| :--- | :--- |
| ![Logout](/img/media/image46.png) | **Cerrar sesión:** Cierra tu sesión en la aplicación QAT. |
| ![Profile](/img/media/image47.png) | **Perfil de usuario:** Verde cuando está en línea, rojo cuando está fuera de línea. Haga clic para ver el nombre de usuario/roles, cambiar el idioma, restablecer la contraseña o alternar el modo en línea/fuera de línea. |
| ![Home](/img/media/image42.png) | **Panel de control:** Te regresa a la pantalla de inicio principal. |
| ![Download Manual](/img/media/image48.png) | **Manual de usuario:** Descarga el manual de QAT a su dispositivo local. |
| ![Refresh](/img/media/image49.png) | **Actualizar página:** Vuelve a cargar la pantalla actual. |
| ![Upload Alert](/img/media/image50.png) | **Estado de carga:** El azul indica que no hay cambios pendientes. El rojo indica que los cambios locales están listos para cargarse; el número muestra los programas afectados. |
| ![Version Alert](/img/media/image51.png) | **Sincronización de versiones:** El color rojo indica que hay una versión más reciente disponible en el servidor; haga clic para sincronizar su programa local. |
| ![Helpdesk](/img/media/image52.png) | **QAT Helpdesk:** Abre el portal de emisión de tickets para obtener soporte, actualizaciones de datos o informes de errores. El número rastrea sus tickets abiertos. |
| ![ERP Notification](/img/media/image53.png) | **Actualizaciones de ERP:** (solo planificación de suministro) Le alerta sobre actualizaciones de sistemas ERP vinculados (por ejemplo, ARTMIS). |
| ![Guidance](/img/media/image54.png) | **Guía de flujo de trabajo:** (solo pronósticos) Muestra una guía de alto nivel para el proceso de pronóstico. |

Además, los usuarios pueden utilizar el ícono de perfil para verificar sus roles de usuario actuales, así como:

- Cambiar su contraseña,

- Estar [fuera de línea/en línea,](#working-offline)  
  ![A close up of words Description automatically generated](/img/media/image55.png)

- [Cambiar el idioma preferido,](#cambiando-idioma)

- Cambie al modo de tema oscuro/claro, y  
  ![A black and white text Description automatically generated](/img/media/image56.png)

- Mostrar decimales en las pantallas de planificación de suministros.  
  ![A black text on a white background Description automatically generated](/img/media/image57.png)

### Menú de la barra lateral

El menú de la barra lateral le permite navegar a través de las distintas pantallas de QAT. Las opciones disponibles dependen de su rol y permisos asignados.

#### Módulos clave

- **Módulo de planificación de suministros:** Administre los datos del plan de suministros, realice revisiones y vea informes de planificación de suministros.
- **Módulo de pronóstico:** Cree árboles de pronóstico, importe datos de consumo y analice los resultados del pronóstico.
- **Sincronización de datos maestros:** Sincronice manualmente los datos maestros actualizados sin cerrar sesión.
- **Application & Realm Masters:** (solo administradores) Administre estructuras de datos de alto nivel y configuraciones específicas del reino.

#### Iconos de navegación de la barra lateral

| Icono | Acción |
| :---: | :--- |
| ![Collapse](/img/media/image58.png) | **Colapso completo:** Oculta el menú de la barra lateral por completo para obtener más espacio en la pantalla. |
| ![Minimize](/img/media/image59.png) | **Minimizar:** Reduce la barra lateral a solo íconos. |
| ![Expand](/img/media/image60.png) | **Expandir:** Restaura la barra lateral completa o expande un submenú. |
| ![Collapse Sub-menu](/img/media/image61.png) | **Contraer submenú:** Oculta elementos de menú anidados. |
| ![Module Toggle](/img/media/image62.png) | **Alternar módulo:** Cambia entre los módulos de Previsión y Planificación de suministros. |

*Tabla 4: Íconos del menú de la barra lateral*

### Botones de acción comunes

| Botón | Acción |
| :--- | :--- |
| ![Submit](/img/media/image63.png) | **Enviar:** Guarda los cambios y actualiza la base de datos. |
| ![Cancel](/img/media/image64.png) | **Cancelar:** Descarta los cambios no enviados. |
| ![Revert](/img/media/image65.png) | **Revertir:** Devuelve los datos no enviados a su estado anterior. |
| ![Add](/img/media/image66.png) | **Agregar:** Crea un nuevo registro. |
| ![Update](/img/media/image67.png) | **Actualización:** Modifica un registro existente. |
| ![Search](/img/media/image68.png) | **Buscar:** Filtra la tabla actual por palabras clave específicas. |
| ![Clear](/img/media/image69.png) | **Borrar:** Restablece todos los filtros y campos de búsqueda activos. |
| ![Mandatory](/img/media/image70.png) | **Campo obligatorio:** Indica que la entrada de datos es obligatoria. |
| ![Help](/img/media/image71.png) | **Información sobre herramientas:** Muestra definiciones, fórmulas o contexto para términos específicos. |
| ![Guidance](/img/media/image72.png) | **Guía de página:** Proporciona instrucciones de alto nivel para la pantalla actual. |
| ![Export Logs](/img/media/image73.png) ![Export Reports](/img/media/image74.png) | **Exportar:** Descarga datos/informes como archivos PDF, CSV o Word. |

## Cambiar idioma

Para garantizar que QAT se adapte a usuarios de todo el mundo, la aplicación muestra texto en cuatro idiomas diferentes: inglés, francés, portugués y español. Se anima a los usuarios a enviar tickets si desean que se mejore la traducción de una etiqueta en particular. (_Nota: Las traducciones de las etiquetas de las aplicaciones solo pueden ser editadas por **administradores de aplicaciones**. Las instrucciones sobre cómo hacerlo se pueden encontrar en la [sección de traducción](13-anexo-1-application-realm-administrator-manual.md#database-translation)._)

Hay dos formas de cambiar el idioma que se muestra al usuario:

1. **Pantalla de inicio de sesión:**

En la esquina superior derecha de la pantalla de inicio de sesión, hay un menú desplegable desde el cual los usuarios pueden seleccionar su idioma preferido antes de iniciar sesión. Esto no solo cambiará el texto una vez que haya iniciado sesión en QAT, sino que también cambiará el texto que se muestra en la pantalla de inicio de sesión.

![P1001#yIS1](/img/media/image75.png)

Figura 34: Cambio de idioma de la pantalla de inicio de sesión

2. **Dentro de QAT:**

Una vez que haya iniciado sesión en QAT, el usuario puede cambiar el idioma de visualización haciendo clic en el ícono de perfil de usuario en la esquina superior derecha de la pantalla, seleccionando el idioma preferido y luego la herramienta actualizará automáticamente su texto/etiquetas.

![](/img/media/image76.png)

Figura 35: Cambio de idioma en la herramienta

## Panel de control QAT

El panel de planificación de suministros proporciona una interfaz completa para análisis visuales. Está dividido en tres secciones principales: **Ticker**, **Descripción general** y **Programa destacado**.

![QAT Dashboard](/img/media/image77.jpeg)

*Figura 36: Panel de planificación de suministro de QAT*

### 1. Teletipo
El Ticker muestra métricas de alto nivel a través de tres mosaicos de desplazamiento automático:
- **Reino:** Muestra recuentos globales de países, usuarios y programas.
- **Mi acceso:** Enumera los planes de suministro disponibles para usted.
- **Vinculación ERP:** Muestra el recuento de envíos vinculados entre sus programas.

![Dashboard Ticker](/img/media/image78.png)

*Figura 37: Paneles de teletipo del tablero*

### 2. Descripción general
La tabla Descripción general resume varios programas según su nivel de acceso.

![Dashboard Overview Section](/img/media/image79.png)

*Figura 38: Tabla de descripción general del panel*

- **Selección de programa:** Elija entre programas basados en servidor o locales (descargados). Se admite la selección múltiple.
- **Columna de acción:** (solo programas locales) Proporciona enlaces rápidos para eliminar, cargar o descargar programas.
- **Lista de problemas (QPL):** (solo programas locales) Haga clic en el número de esta columna para saltar a la lista de problemas QAT para ese programa.
- **Notas y estado:** Revise el estado actual y las notas históricas de cada plan de suministro.

![Version Notes](/img/media/image80.png)

*Figura 39: Notas sobre la versión del programa*

### 3. Programa destacado
Esta sección proporciona métricas detalladas para un único programa seleccionado.

- **Estado de existencias:** Un gráfico de barras que muestra el porcentaje de meses por categoría de existencias (por ejemplo, en existencias, en exceso de existencias, sin existencias).
- **Error de pronóstico:** (solo programas de servidor) Destaca las unidades de planificación con altas tasas de error (predeterminado >50%).
- **Envíos:** Un gráfico circular que muestra las fuentes de financiación y el estado de las adquisiciones para los próximos envíos.
- **Calidad de los datos:** Muestra métricas en tiempo real de la Lista de problemas QAT (QPL), como datos de consumo faltantes o envíos vencidos.
- **Vencimientos:** Resume la cantidad y el costo total de los productos que vencen dentro del período del informe.

![Stock Status](/img/media/image82.png) ![Shipment Status](/img/media/image84.png)  
*Figura 40: Estado del stock y Figura 41: Análisis de envíos*

![Data Quality Dials](/img/media/image85.png) ![Expiries Table](/img/media/image86.png)  
*Figura 42: Calidad de los datos y Figura 43: Caducidad del producto*