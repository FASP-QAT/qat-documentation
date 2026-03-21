---
id: getting-started
title: "Empezando"
sidebar_label: "Empezando"
sidebar_position: 2
---
# Empezando

## Requisitos del sistema

Se espera que se acceda principalmente al QAT a través de computadoras portátiles y de escritorio con sistemas operativos estándar como MS Windows, Linux/Ubuntu e iOS. El navegador web recomendado es Google Chrome, pero se pueden utilizar Chromium, Edge, Mozilla Firefox o Safari.

También se sugiere que cada usuario de QAT tenga suficiente espacio en su unidad C: para permitir almacenar correctamente los datos de la caché del navegador. La cantidad de espacio necesario depende del tamaño del programa QAT que se está descargando y de cuántas aplicaciones se están ejecutando actualmente y utilizando datos del navegador. El almacenamiento temporal se comparte entre todas las aplicaciones web que se ejecutan en el navegador. Este grupo compartido puede ocupar hasta 1/3 del espacio disponible en disco. Luego, cada aplicación puede tener hasta el 20% del grupo compartido. Por ejemplo, si el espacio total disponible en la unidad C: es de 60 GB, el grupo compartido es de 20 GB; por lo tanto, QAT puede utilizar potencialmente hasta 4 GB. Esto se calcula a partir del 20% (hasta 4 GB) de 1/3 (hasta 20 GB) del espacio disponible en la unidad C: (60 GB).

## Niveles de jerarquía en QAT

El sistema QAT tiene **tres niveles de jerarquía** para realizar operaciones. Los niveles de jerarquía son los siguientes:

- **Aplicación** Masters es el nivel de jerarquía de datos más alto en QAT. Los datos maestros de la aplicación se aplican a todos los ámbitos y programas dentro de QAT. La mayor parte solo es accesible para los administradores de aplicaciones, aunque algunas de las funciones de la aplicación están disponibles para los administradores de Realm, como agregar y actualizar usuarios y asignar roles a los usuarios. Los administradores de aplicaciones pueden seleccionar los datos maestros específicos de toda la aplicación que desean agregar o actualizar.

- **Realm** Level Masters cubre todos los datos maestros de ese Reino que se aplican a sus programas de previsión y planificación de suministros. El administrador de Realm podrá ver, crear y editar estos datos maestros. Programas, áreas técnicas, unidades de planificación, agentes de adquisiciones y plantillas de árbol son algunos ejemplos de datos maestros de dominio que el administrador de dominio puede agregar y mantener. Los administradores del programa pueden acceder a muchos de los archivos maestros a nivel de dominio; sin embargo, no tienen la capacidad de agregar/actualizar estos datos.

- **Programa** Level Masters es el tercer nivel de jerarquía en QAT. Si bien los administradores de programas no pueden agregar programas, pueden actualizar la información del programa (por ejemplo, plazos de entrega, costos de flete, etc.) dentro de sus programas asignados. Los administradores y usuarios del programa también pueden agregar y actualizar los datos del programa, como ajustes de consumo, extrapolación y gestión de árboles (en pronóstico); y consumo, inventario, envíos (en la planificación de suministros).

Para obtener más información sobre la funcionalidad para administradores a nivel de aplicación y dominio, consulte el [Anexo 1: Manual del administrador de aplicación y dominio.](#anexo-1-application-realm-administrator-manual)

**Programas** son una combinación de País, Área Técnica (1 o más), Organización y Región. Por ejemplo, **FASPonia**–ARV-MOH-National, es un programa de planificación de suministros en el ámbito de la salud global para la gestión y planificación de **antirretrovirales** para el ministerio de salud del país ficticio FASPonia, y los datos de consumo e inventario se capturan a nivel nacional (región).

## Roles y permisos de usuario

A los usuarios se les puede asignar uno de los muchos roles disponibles en QAT que definen a qué nivel de datos tienen acceso los usuarios y cómo interactúan con esos datos, de acuerdo con la siguiente jerarquía:

Los usuarios tendrán acceso a uno o más niveles de datos según los roles y permisos que se les asignen. Los roles se definen centralmente en el nivel de aplicación o ámbito. Un rol puede tener varios permisos asignados. Estos permisos definen a qué acciones tiene derecho un usuario. A un usuario se le pueden asignar múltiples roles y puede variar el rol según el acceso al programa. Por ejemplo, un usuario podría ser administrador del programa del plan de suministro para el programa A y visor de informes del plan de suministro para el programa B. (NOTA: Las funciones se pueden asignar solo a aquellos usuarios que estén registrados en QAT).

La gran mayoría de los usuarios de QAT (gerentes y funcionarios de programas de salud en los países) interactuarán con la aplicación a nivel de programa. por lo tanto, este manual se centrará principalmente en las tareas y funciones que se aplican a este grupo. Los roles de Administrador del programa y Usuario del programa generalmente están configurados para tener acceso a uno o varios programas dentro de una jurisdicción geográfica, es decir, un Administrador del programa solo puede administrar los programas asignados en su país, pero no un dominio.

Un administrador de **Reino** gestiona los datos maestros y puede tener acceso a todos los programas dentro de ese ámbito.

En el nivel de **Aplicación**, existe una función de Administrador de aplicaciones. Este rol tiene acceso exclusivo para crear estructuras de datos para toda la aplicación, incluida la adición de idiomas, roles, creación de dominios, actualización de etiquetas estáticas y dinámicas, entre otras funciones comerciales.

Consulte el [Anexo 4: Funciones comerciales](#annenex-4-business-functions) para obtener una tabla con la lista completa de funciones comerciales QAT disponibles por función de usuario.

## Cómo iniciar sesión en QAT e instalar la aplicación web progresiva (PWA)

**Cómo iniciar sesión en QAT** **por primera vez** (**en línea**)

1. > Si no tiene un perfil de usuario, comuníquese con el administrador del dominio para crear una nueva cuenta de usuario y la función correspondiente en su nombre.

2. > Una vez creada la cuenta, el nuevo usuario recibe un correo electrónico para "Restablecer contraseña".

3. > El enlace "Restablecer contraseña" redirigirá al usuario al sitio web de QAT para crear la nueva contraseña. Una vez completado, haga clic en "Enviar".
    1. > **Nota**: el enlace “Restablecer contraseña” será válido durante 24 horas y podrá usarse solo una vez. Si es necesario, el usuario puede generar el enlace nuevamente para restablecer la contraseña haciendo clic en "Olvidé mi contraseña" en la pantalla de inicio de sesión.

4. > Luego, el usuario será redirigido a la pantalla de inicio de sesión. Usando el correo electrónico de ID de usuario y la contraseña creada, inicie sesión en QAT.

**Nota:** La contraseña debe: tener al menos seis caracteres, comenzar con una letra, no ser la misma que su nombre de usuario o su última contraseña y debe incluir al menos un carácter especial, un número y una letra mayúscula.

**Instalación de la aplicación web progresiva QAT**

Las aplicaciones web progresivas (PWA) son navegadores independientes que ofrecen una apariencia similar a una aplicación y se instalan en el escritorio. Los usuarios solo pueden instalar QAT PWA a través de Google Chrome y Edge. La PWA se puede utilizar en modo en línea o fuera de línea.

1. > Vaya al [sitio web de Quantification Analytics](https://www.quantificationanalytics.org/).

2. > Haga clic en el botón Agregar en la barra de direcciones.

3. > Haga clic en "instalar" cuando aparezca la pequeña ventana emergente.

![P602#yIS1](/img/media/image10.png)

Figura 1: Instalación de QAT PWA

4. > Aparecerá un icono en su escritorio como una aplicación independiente. Los usuarios pueden abrir directamente desde el escritorio o escribir **chrome://apps/** en el navegador.

> ![P605#yIS1](/img/media/image11.png)

Figura 2: Íconos de QAT PWA

**Nota:** Los usuarios pueden utilizar la PWA y las versiones del navegador simultáneamente; sin embargo, al realizar cambios en uno, se necesita una actualización en el otro para que los cambios se hagan efectivos (consulte [Cuándo y cómo realizar una actualización de la aplicación](#cuándo-y-cómo-realizar-una-actualización-de-la-aplicación)).

**Pasos para instalar PWA cuando el botón Instalar no está disponible**

1. > En su navegador Chrome, navegue hasta [<u>https://www.quantificationanalytics.org/</u>](https://www.quantificationanalytics.org/)

2. > Haga clic en los tres puntos verticales en la esquina superior derecha del navegador.

3. > Seleccione "Transmitir, guardar y compartir".

4. > Haga clic en "Crear acceso directo"

5. > Se mostrará un icono QAT en su escritorio.

6. > Haga clic en el icono “QAT” para abrir la aplicación PWA de QAT.

![A screenshot of a computer Description automatically generated](/img/media/image12.png)

Figura 3: Instalar el método alternativo de PWA

## Cómo iniciar sesión en QAT para usuarios existentes

**Iniciar sesión**

1. Para iniciar sesión, escriba la URL [<u>https://www.quantificationanalytics.org/</u>](https://www.quantificationanalytics.org/) en la barra del navegador y presione Intro, o abra la PWA desde su escritorio.

2. Se mostrará una pantalla de inicio de sesión.

![A screenshot of a computer Description automatically generated](/img/media/image13.png)

Figura 4: Pantalla de inicio de sesión

1. > Escriba el nombre de usuario y la contraseña en los campos obligatorios.

2. > Haga clic en el botón “Iniciar sesión”.
    1. > Nota: Un usuario puede optar por iniciar sesión "en línea" o "fuera de línea" usando la casilla de verificación encima del botón "Iniciar sesión". Para obtener más información sobre cómo trabajar en QAT sin conexión, consulte la Sección F. [Trabajar sin conexión](#working-offline).

    2. > Al iniciar sesión en el modo "en línea", QAT se sincronizará con los datos maestros. Si ve un mensaje sobre una “versión de servidor más reciente”, consulte la Figura 36 en la Sección 3.B para obtener más información.

**Cerrar sesión**

1. > Vaya a la esquina superior derecha de la pantalla.

2. > Haga clic en el ícono del botón de cerrar sesión a la derecha del ícono de perfil.

![A screenshot of a computer Description automatically generated](/img/media/image14.png)

Figura 5: Icono de cierre de sesión

3. > Aparecerá una ventana emergente que preguntará "¿Está seguro de que desea cerrar sesión?" – haga clic en “sí” para cerrar sesión

**Cambiar contraseña**

1. Dentro de QAT, haga clic en el ícono Perfil en la esquina superior derecha de la pantalla.

2. Haga clic en "Cambiar contraseña".

![A screenshot of a login screen Description automatically generated](/img/media/image15.png)

Figura 6: Icono de perfil

3. Una vez en la pantalla "Cambiar contraseña", ingrese su contraseña anterior seguida de la nueva contraseña que desee.

4. La nueva contraseña debe cumplir los siguientes criterios:
    - La contraseña debe tener al menos 6 caracteres.

    - La contraseña no debe contener la palabra "contraseña"

    - La contraseña debe contener al menos 1 carácter especial

    - La contraseña debe contener al menos 1 número

    - La contraseña debe contener al menos 1 letra mayúscula

    - La contraseña debe comenzar con una letra.

    - La nueva contraseña no debe ser la misma que su nombre de usuario.

    - La nueva contraseña no debe ser la misma que la última.

5. Confirme la nueva contraseña escribiéndola nuevamente.

6. Haga clic en "Enviar".

**Si el usuario olvida su contraseña**

1. Un usuario que haya olvidado su contraseña, puede hacer clic en "¿Olvidó su contraseña?" enlace para restablecerlo.

2. Escriba la dirección de correo electrónico con la que el usuario está registrado en QAT y haga clic en "Enviar".

![P662#yIS1](/img/media/image16.png)

Figura 7: Pantalla de Contraseña olvidada

3. El usuario recibirá un enlace por correo electrónico para restablecer su contraseña.

![P666#yIS1](/img/media/image17.png)

Figura 8: Restablecer correo electrónico de contraseña

4. El enlace "Restablecer contraseña" lo redireccionará a QAT, donde ingresará su nueva contraseña. Una vez completado, haga clic en "Enviar".

5. Después de hacer clic en "Enviar", el usuario será redirigido a la pantalla de inicio de sesión. Con el correo electrónico de ID de usuario y la contraseña recién creada, inicie sesión en QAT.

**_Nota: una contraseña de usuario QAT será válida por hasta un año a partir de la fecha de creación/actualización._**

## Trabajar sin conexión

QAT es una herramienta híbrida y puede funcionar tanto en modo online como offline. Hay dos formas de forzar el modo fuera de línea de QAT: en la página de inicio de sesión antes de iniciar sesión en QAT o en la configuración del perfil después de iniciar sesión en QAT. Puede resultar útil cambiar al modo fuera de línea de QAT cuando el ancho de banda de Internet sea bajo.

![A screenshot of a login page Description automatically generated](/img/media/image18.png) ![A screenshot of a login page Description automatically generated](/img/media/image19.png)

> Figura 9: Botón sin conexión en la página de perfil Figura 10: Botón sin conexión en la página de inicio de sesión

El ícono de Perfil en la esquina superior derecha muestra un círculo de color verde cuando se trabaja en modo en línea. Cuando el usuario cambia al modo fuera de línea, el color cambia a rojo, como se muestra en la captura de pantalla siguiente.

![P677#yIS1](/img/media/image20.png)

Figura 11: Íconos sin conexión versus en línea

La siguiente tabla detalla _algunas_ de las funcionalidades clave que se pueden realizar en QAT sin conexión, así como _algunas_ de las funcionalidades que se deben realizar en línea:

| ¿Qué puede hacer un usuario sin conexión?\* | ¿Qué debe hacer un usuario en línea?                                                               |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Planes/previsiones de suministro de importación/exportación | Restablecer contraseña |
| Ver datos maestros | Sincronizar datos maestros |
| Construir árboles/escenarios | Actualizar información del programa, unidades de planificación, configuración de versión o presupuestos |
| Ingresar/actualizar datos transaccionales del plan de suministro e ingresar/ajustar manualmente datos de consumo | Importar datos de pronóstico hacia/desde el Módulo de planificación de suministros hacia/desde el Módulo de pronóstico |
| Extrapolar utilizando medias móviles o semimedias | Extrapolar utilizando métodos de regresión lineal, suavizado triple exponencial (TES) o ARIMA |
| Plan de suministro/escenario | Crear entradas |
| Ver lista de problemas QAT | Descargar/Subir planes/previsiones de suministro |
| Ver informes <u>program</u> y resultados de pronóstico | Ver informes <u>global</u> |

\*Nota: Incluso cuando está en línea, las funciones en la columna "fuera de línea" requieren que se descargue un programa; consulte la Sección 3 para obtener más información.

Tabla 2: Capacidades en línea y fuera de línea

## Actualizaciones de la versión QAT

Para mantener la aplicación QAT, las versiones regulares se envían automáticamente a la aplicación QAT y a todos los usuarios del dominio. Estos lanzamientos de versiones podrían ocurrir debido a lo siguiente:

- Mantenimiento programado periódicamente para corrección de errores y optimización de aplicaciones.

- Mantenimiento de emergencia no planificado para correcciones de errores urgentes o de alta prioridad

- Actualizaciones periódicas relacionadas con mejoras o nuevas funciones.

![A screenshot of a computer Description automatically generated](/img/media/image21.png)

Figura 12: Lanzamientos de la versión QAT

La mayoría de los lanzamientos de versiones no requerirán ninguna acción significativa por parte del usuario, excepto actualizar la aplicación QAT antes de iniciar sesión. QAT le indicará al usuario que hay una nueva versión de QAT en la página de inicio de sesión:

![P721#yIS1](/img/media/image22.png)

Figura 13: Aviso publicado sobre la nueva versión de QAT para los usuarios

Si hay un cambio importante en la estructura de la arquitectura backend de QAT, es posible que se solicite a los usuarios que carguen su última versión en el servidor (consulte la sección [Cargar](03-managing-programs-and-versions.md#upload) para obtener más información) para evitar la pérdida de datos una vez que se lance la nueva versión de QAT. El equipo de soporte de QAT ([support@quantificationanalytics.org](mailto:support@quantificationanalytics.org)) informará a los usuarios con suficiente antelación si es necesario cargar un programa.
## Solución de problemas

Cuando un usuario se encuentra con un posible problema del sistema con QAT, debe intentar solucionar el problema probando las soluciones descritas en esta sección, en el orden en que se describen (es decir, intente primero con H1 y, si eso no funciona, luego intente con H2 y luego con H3). Si ninguno de estos pasos resuelve el problema, el usuario debe enviar un ticket al servicio de asistencia técnica para informar el error (consulte la sección sobre '[Reportar un error](#reportar-un-error)').

### Cuándo y cómo realizar una actualización de la aplicación

El equipo de desarrollo de QAT implementa versiones de software incrementales para solucionar los errores y cambios necesarios para la aplicación. QAT solicita a los usuarios que lo hagan en la pantalla de inicio de sesión después de cada lanzamiento (consulte la Figura 12). Para realizar una actualización de la aplicación, los usuarios deben presionar "Ctrl" + "Shift" + "R" al mismo tiempo en su teclado.

![P721#yIS1](/img/media/image22.png) ![P721#yIS2](/img/media/image23.png)

Figura 14: Mantenga presionada la tecla Ctrl + Shift + R (las 3 teclas) para realizar una actualización de la aplicación

La actualización de la aplicación también se puede utilizar para ayudar a solucionar cualquier problema experimentado al usar QAT. Después de mantener presionadas las 3 teclas, el software debería recargarse automáticamente. Tenga en cuenta que actualizar la aplicación es diferente a simplemente actualizar el navegador (“Ctrl” + “R”).

### Cuándo y cómo realizar una sincronización completa de datos maestros (MDS)

Si una actualización de la aplicación (“Ctrl” + “Shift” + “R”) no resuelve su problema de software, puede intentar realizar una “Sincronización completa de datos maestros”. Para hacerlo, asegúrese de tener una conexión a Internet estable y luego haga clic en el enlace "Sincronización completa de datos maestros" en la parte inferior de la aplicación (consulte la Figura 13). Es probable que esta solución funcione si tiene problemas con los datos maestros que pueden ser el resultado de una Internet inestable que perturbó la sincronización de datos maestros (MDS) normal descrita en la Sección 2.J Navegación y barra de menús.

- En una **MDS normal**, solo se sincronizan los cambios incrementales entre el servidor y su computadora local en función de la última vez que se completó una MDS.

- En un **MDS completo**, todos los datos maestros se cargan independientemente de la última vez que se sincronizó QAT, como si fuera la primera vez que se cargan datos maestros. Por lo tanto, esto llevará más tiempo que una MDS normal.

![A screenshot of a computer Description automatically generated](/img/media/image24.png)

Figura 15: Haga clic en "Sincronización completa de datos maestros"

### Cuándo y cómo borrar los datos del sitio

Si actualizar QAT (Ctrl + Shift + R) y una sincronización completa de datos maestros no resuelven el problema, el usuario debe intentar borrar los datos del sitio para solucionar el problema. Siga los pasos a continuación para borrar los datos del sitio en su QAT:

**\*Advertencia**: Al borrar los datos del sitio en QAT se borran todos los datos locales en la PWA y el navegador web, incluidos los cambios que haya realizado desde la última vez que los cargó. Asegúrese de haber subido todos los programas no guardados <u> antes de que </u> borre los datos del sitio.\*

1. > Haga clic en las teclas “Ctrl”+”Shift”+”I” al mismo tiempo en su teclado.

> ![P739#yIS1](/img/media/image25.png)
>
> Figura 16: Ctrl + Mayús + I

2. > Vaya a “Aplicación”.

3. > En el lado izquierdo de la pantalla, haz clic donde dice “Almacenamiento”.

4. > Una vez en la pantalla "Almacenamiento", seleccione "Borrar datos del sitio". Esto borrará cualquier dato que no se haya cargado.

5. > Inicie sesión nuevamente en QAT y vuelva a descargar los programas que necesite. (Al borrar los datos del sitio se borran todos los programas de su máquina local, por lo que deberá volver a descargarlos).

![P746#yIS1](/img/media/image26.png)

Figura 17: Borrar datos del sitio

### Solución de problemas de errores de red

Los usuarios pueden ver el siguiente mensaje de error al iniciar sesión o mientras usan QAT:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Error de red. Verifique su conexión a Internet o comuníquese con el departamento de TI de su organización para asegurarse [api.quantificationanalytics.org/\#](https://nam02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fapi.quant ificationanalytics.org%2F%23&data=05%7C01%7Clgu%40ghsc-psm.org%7C9490a6cee80d4de5c62608dabd019412%7C7c1f24a67d39 452c82370726e3b19a73%7C0%7C0%7C638030111727715513%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiL CJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=4heIFYQR9sA%2FqkifKvp2y9V00BIPmMKX35Wi5Am4jXk%3D&reserved=0) y [www.quantificationanalytics.org/\#](https://nam02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fwww.quant ificationanalytics.org%2F%23&data=05%7C01%7Clgu%40ghsc-psm.org%7C9490a6cee80d4de5c62608dabd019412%7C7c1f24a67d39 452c82370726e3b19a73%7C0%7C0%7C638030111727715513%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiL CJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=cW0d%2B1AnhHVpuclTsFqM6KwhliqBT1y82X5OD5ZUrmc%3D&reserved=0) están en la lista blanca para el acceso al firewall”. |

Este mensaje aparece por dos motivos: 1) Internet inestable o 2) Internet restringido.

**Internet inestable**: utilice otra Internet con una conexión estable o más rápida, o vuelva a intentarlo más tarde.

**Internet restringido**: Se puede acceder a QAT mediante la mayoría de las conexiones privadas a Internet, pero a veces los sistemas de TI de las organizaciones tienen un control de seguridad más estricto y, por lo tanto, señalan a QAT como una amenaza potencial. En este caso, los usuarios tienen dos opciones:

1. Usar otra conexión a Internet sin restricciones, o

2. Habilite el acceso al firewall incluyendo en la lista blanca las dos URL de sitios siguientes. Es posible que el usuario necesite comunicarse con el personal de TI de su organización para obtener ayuda.

> •        [api.quantificationanalytics.org/\#](https://nam02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fapi.quant ificationanalytics.org%2F%23&data=05%7C01%7Clgu%40ghsc-psm.org%7C9490a6cee80d4de5c62608dabd019412%7C7c1f24a67d39 452c82370726e3b19a73%7C0%7C0%7C638030111727715513%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiL CJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=4heIFYQR9sA%2FqkifKvp2y9V00BIPmMKX35Wi5Am4jXk%3D&reserved=0)
>
> •        [www.quantificationanalytics.org/\#](https://nam02.safelinks.protection.outlook.com/?url=http%3A%2F%2Fwww.quant ificationanalytics.org%2F%23&data=05%7C01%7Clgu%40ghsc-psm.org%7C9490a6cee80d4de5c62608dabd019412%7C7c1f24a67d39 452c82370726e3b19a73%7C0%7C0%7C638030111727715513%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiL CJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=cW0d%2B1AnhHVpuclTsFqM6KwhliqBT1y82X5OD5ZUrmc%3D&reserved=0)

## Servicio de asistencia técnica y tickets de QAT

### Tickets para Agregar/Actualizar Usuarios y Datos Maestros

Cuando un usuario necesita agregar o actualizar un usuario o datos maestros por cualquier motivo, puede hacerlo solicitando un ticket de asistencia técnica. Antes de solicitar adiciones o cambios a los datos maestros en QAT, el usuario primero debe verificar los datos maestros a nivel de dominio (Realm Level Masters \>\> Producto) y el Informe del catálogo de programas para asegurarse de que la información no exista ya. Para obtener más información sobre cómo acceder y utilizar datos maestros, consulte [Gestión de programas](03-managing-programs-and-versions.md#working-with-program-data) y [Realm Masters](10-annex-1-application-realm-administrator-manual.md#realm-masters). Para obtener información sobre cómo acceder al catálogo de programas, consulte [Catálogo de programas](#producto). Para acceder al servicio de asistencia técnica de QAT:

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

Cuando un usuario se encuentra con un posible problema del sistema con QAT, debe intentar solucionarlo mediante una [actualización de la aplicación](#cuándo-y-cómo-realizar-una-actualización-de-la-aplicación) y/o [borrando datos del sitio](#cuándo-y-cómo-borrar-datos-del-sitio). Si ninguno de estos pasos resuelve el problema, el usuario debe enviar un ticket al servicio de asistencia técnica para informar el error.

El equipo de desarrollo abordará el ticket de error según la prioridad empresarial, la criticidad y la "capacidad" disponible a través de las versiones incrementales. Los pasos para generar un ticket en QAT se muestran a continuación:

1. Abra la pantalla del servicio de asistencia técnica de QAT y haga clic en "Informar un error".

2. Ingrese un resumen del error, así como una descripción del error. Sea descriptivo y proporcione tantos detalles como sea posible (por ejemplo, en qué programa/versión/funcionalidad estaba trabajando, pasos que siguió para obtener el error, etc.).

3. Cargue una captura de pantalla del error haciendo clic en el botón "Examinar" y extrayendo un archivo de captura de pantalla guardado desde su computadora.
    1. También es útil proporcionar la exportación del programa, si es posible (consulte [Exportaciones de programas](03-managing-programs-and-versions.md#export) sobre cómo exportar un programa local).

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

Una vez que haya iniciado sesión en QAT, aparecerá la siguiente pantalla:

![A screenshot of a computer Description automatically generated](/img/media/image39.png)

Figura 31: Pantalla de inicio del módulo de planificación de suministros

![P830#yIS1](/img/media/image40.png)

Figura 32: Pantalla de inicio del módulo de pronóstico

<table>
  <thead>
    <tr class="header">
      <th>Scaptura de pantalla</th>
      <th>Función</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image46.png"
          style={{width: '0.36111in', height: '0.3724in'}}
          alt="P873C3T10#yIS1"
        />
      </td>
      <td>
        <strong>L cierra la sesión del usuario en QAT.</strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image47.png"
          style={{width: '0.55917in', height: '0.45833in'}}
          alt="P876C5T10#yIS1"
        />
      </td>
      <td>
        <p>
          <strong> El ícono de perfil es verde cuando se trabaja en línea y rojo cuando se trabaja sin conexión. Cuando el usuario hace clic en el icono, puede: </strong>
        </p>
        <ul>
          <li>
            <p>
              <strong> Ver el nombre de usuario y las funciones asociadas que se les asignaron </strong>
            </p>
          </li>
          <li>
            <p>
              <strong>Cambiar su idioma preferido</strong>
            </p>
          </li>
          <li>
            <p>
              <strong>Cambiar su contraseña</strong>
            </p>
          </li>
          <li>
            <p>
              <strong>Sin conexión/en línea</strong>
            </p>
          </li>
        </ul>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image42.png"
          style={{width: '0.42361in', height: '0.34774in'}}
          alt="P883C7T10#yIS1"
        />
      </td>
      <td>
        <strong>Regresa al usuario al tablero/pantalla de inicio.</strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image48.png"
          style={{width: '0.39468in', height: '0.42287in'}}
          alt="P886C9T10#yIS1"
        />
      </td>
      <td>
        <strong> Descarga el manual de usuario de QAT a la computadora del usuario. El archivo se puede encontrar en la carpeta Descargas de la computadora del usuario. </strong>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image49.png"
          style={{width: '0.34722in', height: '0.33482in'}}
          alt="P889C11T10#yIS1"
        />
      </td>
      <td>
        <strong>Actualiza la página actual en la que está trabajando un usuario.</strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image50.png"
          style={{width: '0.63584in', height: '0.60507in'}}
        />
      </td>
      <td>
        <strong> Informa al usuario cuando un programa almacenado en el servidor local tiene cambios no cargados y debe cargar ese programa en el servidor. Si el ícono es azul, no hay programas no cargados. Si el ícono es rojo, hay programas que deben cargarse en el servidor. El número en el cuadro rojo indica la cantidad de programas que se deben cargar. </strong>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image51.png"
          style={{width: '0.45521in', height: '0.49514in'}}
          alt="P895C15T10#yIS1"
        />
      </td>
      <td>
        <strong> Informa al usuario cuando hay una versión más reciente en el servidor de uno de sus programas descargados localmente. Si el ícono es azul, el usuario tiene la versión más actualizada de todos los programas descargados. Si el ícono es rojo, hay programas que están desactualizados en comparación con el servidor. El número en el cuadro rojo indica la cantidad de programas que tienen versiones desactualizadas. </strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image52.png"
          style={{width: '0.59937in', height: '0.43898in'}}
        />
      </td>
      <td>
        <strong> Abre el servicio de asistencia técnica de QAT donde los usuarios pueden crear tickets para agregar/actualizar datos maestros, proponer solicitudes de cambio e informar un error. El número en el cuadro rojo indica la cantidad de tickets abiertos que tiene un usuario. Para obtener más información sobre la mesa de ayuda, consulte <a href="#qat-helpdesk-and-tickets">QAT Mesa de ayuda y Tickets</a>. </strong>
      </td>
    </tr>
    <tr class="odd">
      <td>
        <img
          src="/img/media/image53.png"
          style={{width: '0.44063in', height: '0.32639in'}}
          alt="P901C19T10#yIS1"
        />
      </td>
      <td>
        <strong> Dirige al usuario a la página de notificación de envío de ERP. Esta página informará a los usuarios si hay actualizaciones importantes que deban revisarse para un envío de ERP vinculado. Para obtener más información sobre estas notificaciones y cuáles se marcarán, consulte <a href="#erp-shipment-linking">.Vinculación de envíos ERP</a>. <em> Nota: este icono solo está disponible en el Módulo de planificación de suministro QAT. </em> </strong>
      </td>
    </tr>
    <tr class="even">
      <td>
        <img
          src="/img/media/image54.png"
          style={{width: '0.36111in', height: '0.38889in'}}
          alt="P904C21T10#yIS1"
        />
      </td>
      <td>
        <strong> Abre una página web Mostrar orientación sobre una introducción a la previsión QAT. Este documento proporciona una descripción general de alto nivel sobre el flujo del proceso de pronóstico QAT. <em> Nota: Este icono solo está disponible en el módulo de pronóstico QAT. </em> </strong>
      </td>
    </tr>
  </tbody>
</table>

En el área principal de la página de inicio habrá un panel de aplicación. El módulo de planificación de suministros tiene un panel mejorado con visualizaciones y análisis sobre los programas descargados y basados ​​en servidor a los que tiene acceso un usuario. Para obtener información específica sobre el panel del Módulo de planificación de suministros, consulte [Panel QAT] (#qat-dashboard). Para el Módulo de Pronóstico, la cantidad de mosaicos y tipos de mosaicos dependerán del acceso según el rol asignado al usuario. Los usuarios verán un mosaico por el programa que descargaron (es decir, cuando estén en el módulo de pronóstico, los usuarios verán un mosaico por cada programa de pronóstico que hayan cargado). Al hacer clic en la flecha hacia abajo en el mosaico del programa de pronóstico, un usuario puede 1) eliminar el programa de su computadora local, 2) continuar con la configuración de la versión del programa, 3) continuar con la lista de árboles de pronóstico o 4) continuar con la pantalla de ajuste y entrada de datos de consumo.

![P838C3T9#yIS1](/img/media/image41.png)

Figura 33: Mosaico del programa del módulo de pronóstico

Además del panel de la aplicación, la pantalla consta de la cinta superior y una barra lateral de menú en el lado izquierdo. El usuario podrá acceder a todas las funciones disponibles en la cinta y la barra lateral a través de la herramienta sin importar qué pantalla esté viendo.

Para regresar a la pantalla del Panel, el usuario puede hacer clic en el ícono de inicio en la cinta superior o en el logotipo de QAT en la esquina superior izquierda de la pantalla.

![P860#yIS1](/img/media/image42.png) o ![P860#yIS2](/img/media/image43.png)

**Cinta superior para el módulo de planificación de suministros**

![](/img/media/image44.png)

**Cinta superior para el módulo de pronóstico**

![](/img/media/image45.png)

Además, los usuarios pueden utilizar el ícono de perfil para verificar sus roles de usuario actuales, así como:

- Cambiar su contraseña,

- Estar [fuera de línea/en línea,](#working-offline)  
  ![A close up of words Description automatically generated](/img/media/image55.png)

- [Cambiar el idioma preferido,](#cambiando-idioma)

- Cambie al modo de tema oscuro/claro, y  
  ![A black and white text Description automatically generated](/img/media/image56.png)

- Mostrar decimales en las pantallas de planificación de suministros.  
  ![A black text on a white background Description automatically generated](/img/media/image57.png)

**Menú de la barra lateral:**

El menú de la barra lateral es donde el usuario puede navegar a las diferentes pantallas dentro de QAT. Las opciones disponibles en la barra lateral variarán en función del acceso según el rol asignado al usuario. Dentro de la barra lateral hay elementos de menú. Al hacer clic en uno de esos elementos, se expandirá para mostrar una lista de elementos del submenú. A medida que el usuario selecciona diferentes elementos del menú, los datos respectivos se mostrarán en QAT.

Dentro del menú de la barra lateral, encontrará los siguientes elementos de menú:

- **<u>Módulo de planificación de suministro</u>**
  - **Sincronización de datos maestros**: al hacer clic en este botón, se sincronizarán los datos maestros actualizados con su versión local. Esta función se realiza automáticamente al iniciar sesión en QAT, pero este botón le permite al usuario hacerlo sin cerrar sesión y volver a iniciarla.

  - **Application Masters** (solo disponible para administradores de aplicaciones y dominios): ver/agregar/editar datos a nivel de aplicación.

  - **Maestros de nivel de reino**: ver/agregar/editar datos de nivel de reino.

  - **Gestión de programas**: ver/agregar/editar datos a nivel de programa. Descargar/Cargar/Eliminar/Importar/Exportar programas. Realizar revisiones del plan de suministro.

  - **Datos del plan de suministro**: agregar/editar datos del plan de suministro.

  - **Planificación de suministro**: ver/editar el plan de suministro. Plan de escenario.

  - **Informes** – Ver informes. Editar la lista de problemas QAT.

- **<u>Módulo de previsión</u>**
  - **Sincronización de datos maestros**: al hacer clic en este botón, se sincronizarán los datos maestros actualizados con su versión local. Esta función se realiza automáticamente al iniciar sesión en QAT, pero este botón le permite al usuario hacerlo sin cerrar sesión y volver a iniciarla.

  - **Application Masters** (solo disponible para administradores de aplicaciones y dominios): ver/agregar/editar datos a nivel de aplicación.

  - **Maestros de nivel de reino**: ver/agregar/editar datos de nivel de reino.

  - **Gestión de programas**: ver/agregar/editar datos a nivel de programa. Descargar/Cargar/Eliminar/Importar/Exportar programas.

  - **Previsiones basadas en el consumo – <u> </u>**Importar/agregar/ajustar y extrapolar datos de consumo.

  - **Previsiones de árbol:** Cree y administre un árbol de previsión. Ver modelos y validaciones de productos.

- **Resultados del análisis de pronósticos:** Compare y seleccione pronósticos finales. Ver otros informes de salida.

| Captura de pantalla | Función |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![P934C3T11#yIS1](/img/media/image58.png) | Contrae completamente el menú de la barra lateral para crear más espacio en la pantalla. Al hacer clic en el icono una vez, el menú desaparecerá. Al hacer clic nuevamente, volverá a aparecer. |
| ![P937C5T11#yIS1](/img/media/image59.png) | Minimiza el menú de la barra lateral sin hacerlo desaparecer por completo. Crea algo más de espacio en la pantalla.                                                              |
| ![P940C7T11#yIS1](/img/media/image60.png) | Se muestra cuando el menú de la barra lateral está minimizado. Haga clic para expandir y mostrar el menú de la barra lateral completo. También se utiliza para expandir y mostrar elementos del submenú debajo de los elementos del menú.                      |
| ![P943C9T11#yIS1](/img/media/image61.png) | Se muestra cuando se muestran elementos del submenú. Haga clic para contraer los elementos del submenú.                                                                                               |
| ![P946C11T11#yIS1](/img/media/image62.png) | Botones que permiten a los usuarios alternar entre el módulo de previsión y planificación de suministros en QAT, si su acceso de usuario lo permite.                                               |

Tabla 4: Iconos del menú de la barra lateral

**Botones encontrados en todo QAT**

Los siguientes botones se encuentran frecuentemente en las diferentes pantallas QAT:

|                                                                                                  |                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| **Botones** | **Acción** |
| ![P956C3T12#yIS1](/img/media/image63.png) | Presenta y realiza cambios.                                                                            |
| ![P959C5T12#yIS1](/img/media/image64.png) | Cancela los cambios no enviados.                                                                      |
| ![P962C7T12#yIS1](/img/media/image65.png) | Devuelve los datos no enviados al formato anterior.                                                     |
| ![P965C9T12#yIS1](/img/media/image66.png) | Agrega un nuevo registro a la base de datos.                                                                    |
| ![P968C11T12#yIS1](/img/media/image67.png) | Actualiza registros.                                                                                      |
| ![P971C13T12#yIS1](/img/media/image68.png) | Ayuda a los usuarios a buscar la información deseada. Busca todos los campos de la tabla mostrada.            |
| ![P974C15T12#yIS1](/img/media/image69.png) | Permite al usuario borrar los campos de búsqueda.                                                                 |
| ![P977C17T12#yIS1](/img/media/image70.png) | Indica campos de entrada de datos obligatorios.                                                                |
| ![P980C19T12#yIS1](/img/media/image71.png) | Muestra explicaciones/definiciones y fórmulas sobre términos de uso común en la ventana/informe especificado. |
| ![P984C21T12#yIS1](/img/media/image72.png) | Proporciona orientación de alto nivel sobre cómo utilizar mejor la página actual.                                     |
| ![P987C23T12#yIS1](/img/media/image73.png)![P987C23T12#yIS2](/img/media/image74.png) | Exporta el informe a PDF, CSV o Word (las opciones dependen de la pantalla).                                       |

Tabla 5: Botones de uso común

## Cambiar idioma

Para garantizar que QAT se adapte a usuarios de todo el mundo, la aplicación muestra texto en cuatro idiomas diferentes: inglés, francés, portugués y español. Se anima a los usuarios a enviar tickets si desean que se mejore la traducción de una etiqueta en particular. (_Nota: Las traducciones de las etiquetas de las aplicaciones solo pueden ser editadas por **administradores de aplicaciones**. Las instrucciones sobre cómo hacerlo se pueden encontrar en la [sección de traducción](10-annex-1-application-realm-administrator-manual.md#database-translation)._)

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

El panel de planificación de suministros proporciona una interfaz integral con visualizaciones y análisis mejorados. Está estructurado en tres secciones principales: Ticker, Descripción general y Programa destacado.

![No alt text provided for this image](/img/media/image77.jpeg)

Figura 36: Panel de control

1. **Ticker –** Esta sección muestra información clave a través de tres mosaicos que se desplazan automáticamente. Para navegar manualmente por los mosaicos, haga clic en los puntos en la parte inferior de los mosaicos. Cada mosaico enlaza con pantallas relevantes. Haga clic en el nombre del mosaico para ser dirigido a esa pantalla (si no tiene acceso, aparecerá un mensaje apropiado). Por ejemplo, al hacer clic en el mosaico "Vinculación de ERP" accederá a la pantalla de Vinculación de ERP.
    1. **Reino:** Proporciona métricas globales, como la cantidad de países, usuarios, programas de planificación de suministro y programas de pronóstico.

    2. **Mi acceso:** Destaca los planes de suministros a los que tiene acceso, incluidos los planes de suministros descargados.

    3. **Vinculación ERP:** Muestra el número de envíos vinculados por reino y programas descargados.

![](/img/media/image78.png)

Figura 37: Ticker del panel

2. **Descripción general:** Esta tabla ofrece un resumen de alto nivel de uno o más programas según su acceso.

![A screenshot of a computer Description automatically generated](/img/media/image79.png)

Figura 38: Sección de descripción general

> **Selección de programas:**

- Los programas pueden estar basados en servidor o descargarse, pero no se pueden mezclar.

- Puede seleccionar 1 para "todos" los programas. Selección múltiple.

- El modo sin conexión limita la selección solo a los programas descargados, con la casilla de verificación de los programas del servidor atenuada.

- Para los programas de servidor, algunas columnas/características (por ejemplo, la columna Acción y los enlaces QPL) no se muestran, pero todos los demás detalles permanecen consistentes.

> **Características de la tabla de descripción general**
>
> Cada columna está diseñada para presentar datos procesables:

- **Información sobre herramientas:** Pase el cursor sobre el icono de información sobre herramientas en cada columna para obtener más detalles.

- **Clasificación:** Los programas se ordenan alfabéticamente, con un asterisco que indica las versiones finales y aprobadas.

- **Enlaces e íconos:**
  - La columna "Acción" permite a los usuarios eliminar un programa local y hacer clic en los íconos de la nube para ser redirigidos a las pantallas de carga o descarga. El icono de la nube aparecerá en rojo si la versión descargada no está actualizada. La columna "Acción" no aparece en la tabla de descripción general de los programas de servidor.

  - Al hacer clic en el número en la columna "Abrir problemas de QAT", se dirigirá al usuario a la Lista de problemas de QAT (QPL) para ese programa. Esto no aparece para los programas de servidor.

  - Al hacer clic en el estado en la columna "Estado de revisión" se dirigirá al usuario a la pantalla Versión y revisión del plan de suministro, mientras que al hacer clic en el ícono del cuaderno en la misma celda se abrirá el historial de notas para ese programa.

![](/img/media/image80.png)

Figura 40: Notas de versión

3. **Programa destacado:** Esta sección proporciona información detallada sobre las métricas clave de un solo programa. Asegúrese de utilizar información sobre herramientas y enlaces integrados para una navegación y exploración de datos eficientes. Las 5 secciones tienen información sobre herramientas junto al encabezado y cada encabezado está vinculado a una pantalla QAT a la que puede acceder haciendo clic en el encabezado.

> **Seleccionando un programa:**

- Admite servidor o programas descargados (solo selección única)

- Los programas de servidor tienen por defecto la última versión (borrador o final)

- El modo sin conexión limita la selección a los programas descargados.

> **Periodo del informe:**

- **Programas de servidor:** El valor predeterminado es 6 meses pasados y 18 meses futuros (editable)

- ![](/img/media/image81.png)**Programas descargados:** El valor predeterminado es 6 meses pasados y 18 meses futuros (no editables en el tablero). Los administradores pueden establecer valores predeterminados personalizados por programa a través de la pantalla Actualizar información del programa.

> **<u>Sétricas destacadas</u>**
>
> **Estado de existencias:**

- El gráfico de barras muestra el porcentaje de meses en el período del informe por categoría de acciones. Puede pasar el cursor sobre el gráfico para ver desgloses detallados.

- Personalización visual: puede ocultar elementos de leyenda o copiar y pegar gráficos.

- La tabla adjunta muestra los detalles de desabastecimiento por unidad de planificación (PU).

![A screen shot of a chart Description automatically generated](/img/media/image82.png)

Figura 42: Sección Estado de existencias

**Error de pronóstico (solo versiones de servidor):**

- Error porcentual medio calculado para el período del informe.

- Los errores por encima de un umbral establecido (predeterminado 50%) se resaltan en rojo. Los administradores pueden ajustar los umbrales por PU y programa en la pantalla "Actualizar unidades de planificación".

- Los datos faltantes muestran un icono de precaución con una nota explicativa.

![A screenshot of a computer screen Description automatically generated](/img/media/image83.png)

Figura 43: Sección de error de pronóstico

> **Envíos:**

- Gráfico circular de envíos por fuente de financiación, agente de adquisiciones o estado utilizando el menú desplegable para designar cuál.

- Pase el cursor sobre el gráfico circular para ver los desgloses de costos. El desglose de costos utiliza como denominador el valor total de los envíos en ese período del informe.

- La tabla adjunta muestra el número de envíos con financiación por determinar en el período del informe.

![A screenshot of a computer Description automatically generated](/img/media/image84.png)

Figura 44: Sección de envío

> **Calidad de los datos:**

- Refleja las métricas de la lista de problemas QAT, independientemente del período del informe. Esta es la única sección de las 5 secciones del programa destacado que no utiliza el período del informe que se muestra en el panel.

- Se actualiza dinámicamente con los cambios realizados en QPL si el usuario ha actualizado el QPL. De lo contrario, el usuario puede hacer clic en el icono de actualización junto al encabezado Calidad de datos para actualizar los datos mostrados.

- Diales para:
  - Consumo previsto: Cuenta el número de UP a las que les falta al menos un mes de consumo previsto en los próximos 18 meses.

  - Inventario Actual: Cuenta el número de UP que no tienen datos recientes de inventario real en los últimos 3 meses.

  - Consumo real: Cuenta el número de UP que no tienen datos de consumo real en los últimos 3 meses o una brecha en los datos de consumo real en los últimos 6 meses.

  - Envíos: cuenta la cantidad de PU que tienen envíos con fechas de recepción anteriores o envíos que deberían haber sido "enviados" según los plazos de entrega del programa.

![](/img/media/image85.png)

**Vence:**

- Muestra los vencimientos dentro del período del informe, incluida la cantidad y el costo total.

- El valor de vencimiento total en todas las unidades de planificación para el programa seleccionado aparece en la parte superior derecha de la sección.

![](/img/media/image86.png)