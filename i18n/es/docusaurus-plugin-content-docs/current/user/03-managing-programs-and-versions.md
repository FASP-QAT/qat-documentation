---
id: managing-programs-and-versions
title: "Managing Programs and Versions"
sidebar_label: "Managing Programs and Versions"
sidebar_position: 3
---
# Gestión de programas y versiones

## ![](/img/media/image87.png)Trabajando con datos de programa

|                  |            |             |
| ---------------- | ---------- | ----------- |
|                  | **En línea** | **Sin conexión** |
| Datos de otros | Descargar | Importar |
| Datos de los usuarios | Subir | Exportar |

Tabla 6 - Trabajar con datos del programa

Los datos del programa se pueden descargar, cargar, importar y exportar en QAT.

- > Tenga en cuenta que los programas de previsión son completamente diferentes de los programas de planificación de suministros. Asegúrese de estar en el módulo correcto antes de descargar, cargar, importar o exportar.

- > Los usuarios deben **Descargar** los datos del programa para comenzar a planificar o pronosticar el suministro y deben **Cargar** sus datos nuevamente al servidor para compartir su trabajo con otros.

- > La carga puede ser como “borrador” o como “final”. Cargar un programa de plan de suministro como "final" inicia el proceso de revisión del plan de suministro. El estado de las versiones del plan de suministro se puede ver en la pantalla **Versión y revisión del plan de suministro**; esta es la única función descrita en esta sección que está disponible para los lectores de informes. Cargar un programa de pronóstico como "final" permite a los usuarios importar ese pronóstico directamente al módulo del plan de suministro. Consulte [Importación de pronóstico QAT](04-supply-planning-module-program-data.md#qat-forecast-import) para obtener más instrucciones sobre cómo importar un pronóstico a un plan de suministro.

- > Cuando no hay Internet disponible, la función **Exportar** permite a los usuarios compartir sus datos con otros usuarios a través de dispositivos externos como un pendrive/unidad flash, quienes luego pueden usar la función **Importar** datos para abrir ese archivo en su computadora.

- > Se puede acceder a estas funciones desde la barra de menú izquierda en **Administración de programas.**

- > Además, se puede acceder a Descargar y cargar desde la barra de menú superior (consulte la Figura 32)

![A blue circle with a arrow Description automatically generated](/img/media/image88.png)

Figura 47 Barra de menú

## Descargar/Eliminar

- <u>¿Quién?</u> Esta función está disponible para **Reino/Programa
Administradores, usuarios de programas y revisores de planes de suministro. No disponible o necesario para el informe
Espectadores**

- <u>¿Cuándo?</u> El usuario debe estar en línea para descargar un programa.

- <u>¿Por qué</u>? Los usuarios deben descargar un programa si
desea ingresar o actualizar datos, o pronosticar activamente o planificar el suministro (en lugar de
simplemente viendo informes). Los usuarios pueden descargar un programa cuando notan que
su versión local no es la más reciente (es decir, cuando el ícono de descarga está en rojo)
![P1040\#yIS1](/img/media/image89.png) en lugar del azul habitual
![P1040\#yIS2](/img/media/image90.png)). La descarga de programas permite
usuario para trabajar sin conexión. Sin embargo, tenga en cuenta que los programas <u> deben descargarse </u> para completar las siguientes funciones, <u> incluso </u> si el usuario está en línea:
  - Planificación de Suministros:
    - Ingresar/actualizar datos (consumo, inventario/ajustes, envíos). Por ejemplo, si el usuario está trabajando en "Detalles de consumo", debe seleccionar un programa de la lista proporcionada. La lista mostrará datos sólo para aquellos "Programas" que se hayan descargado en la base de datos del índice local.

    - Plan de suministro/escenario

    - Ver lista de problemas QAT

    - En informes, ver los datos en la computadora local (en lugar de en el servidor)

  - Previsión:
    - Ingresar/actualizar datos (ingresar/importar consumo real, agregar/editar árboles de pronóstico, extrapolar, etc.)

    - En informes de validación o análisis de pronóstico, ver los datos en la computadora local (en lugar de en el servidor)

- <u> ¿Qué sucede cuando un usuario descarga un programa </u>?
Cuando el usuario descarga un programa, se almacena en la base de datos del índice local.
en formato JSON.

- <u>Cómo descargar un programa</u>:

<!-- finalizar lista -->

1. > Determine si desea realizar la descarga desde el módulo de previsión o de planificación de suministro y navegue hasta el módulo correcto (consulte la [Sección 2.J Navegación y barra de menú](#barra-de-menú-y-navegación)). Si solo tiene acceso a un módulo, puede ignorar este paso.

2. > Vaya a “Administración de programas” \> “Descargar/Eliminar programa”. (Como alternativa, acceda a esta pantalla haciendo clic en el icono ![P1055#yIS1](/img/media/image89.png) en la barra superior derecha en QAT). La pantalla mostrará los datos del programa como se muestra en la siguiente figura.
    - > El texto rojo indica que el programa descargado no es la última versión. El texto verde indica que el programa descargado es la última versión. El texto negro indica que el programa no se ha descargado.

![A screenshot of a computer Description automatically generated](/img/media/image91.png)

Figura 48: Pantalla Cargar programa

3. > Para Descargar
    1. > Seleccione la casilla de verificación junto al programa que desea descargar. De forma predeterminada, QAT descargará la última versión del programa seleccionado.

    2. > _(opcional)_ Haga clic en el botón triangular al lado del programa para ver todas las versiones del programa. Se mostrarán las cinco últimas versiones. Haga clic en "ver más" para ver versiones anteriores. Utilice la casilla de verificación para seleccionar qué versiones específicas desea descargar.

![P1063#yIS1](/img/media/image92.png)

Figura 49: Árbol de versiones: cómo expandirlo

3. > Haga clic en el botón “**Descargar**” para descargar el programa a su sistema.

<!-- finalizar lista -->

4. > Para eliminar o limpiar:
    1. > Haga clic en el botón triangular al lado del programa para ver todas las versiones del programa.

    2. > Seleccione el ícono de la papelera ![P1068#yIS1](/img/media/image93.png) junto a la versión del programa que desea eliminar. Si tiene varias versiones, también tiene la opción de hacer clic en el ícono de limpieza ![P1068#yIS2](/img/media/image94.png) para eliminar todas las versiones excepto la última versión local.

> ![P1069#yIS1](/img/media/image95.png)

Figura 50: Árbol de versión de la pantalla de descarga: iconos de limpieza y eliminación

5. > _(opcional)_ En el módulo de planificación de suministro, los usuarios pueden descargar un subconjunto de sus planes de suministro a medida que sus programas comienzan a tener más datos históricos.

<!-- finalizar lista -->

- > **Para hacer esto, el usuario hace clic en “Descargar un rango específico de datos del plan de suministro” y selecciona el mes/año inicial para los datos que descargará.**

- > Si se marca “**Descargar rango específico de datos del plan de suministro**”, la versión del programa seleccionado solo mostrará datos a partir de la fecha deseada (mínimo 18 meses en el pasado).

![A screenshot of a computer Description automatically generated](/img/media/image96.png)

Figura 51 Descargar un rango específico de datos

- > **La selección del rango de fechas se aplicaría a TODOS los programas seleccionados para descargar. Si el usuario desea descargar un programa completo (programa A) y un programa truncado (programa B), debe completar el proceso de descarga dos veces: una para el programa completo y otra para el programa truncado.**

- > **Los datos más antiguos no descargados siempre existen en el servidor y no se pueden eliminar ni sobrescribir.**

- > **Cuando el usuario descarga un programa truncado (v1), lo actualiza y carga una nueva versión (v2), la versión del servidor incluirá la totalidad de los datos, mientras que la nueva versión local permanecerá truncada con la fecha de inicio previamente seleccionada. El usuario puede eliminar esa versión y descargar la versión 2 completa del servidor, o la versión 2 con un rango de datos diferente, según sea necesario**

Nota: Si descarga una versión anterior, o si otro usuario carga una versión posterior en el servidor después de la descarga, verá un mensaje como el siguiente en la Figura 36 cada vez que se produzca la sincronización de datos maestros (al iniciar sesión, al descargar un nuevo programa o si el usuario lo solicita manualmente).

- > Si selecciona "Aceptar", se descargará la última versión del servidor y su versión local se eliminará permanentemente. Seleccione "Aceptar" únicamente si está de acuerdo con descartar los cambios o si no ha realizado ningún cambio.

- > Si selecciona “cancelar”, no se realizará ninguna acción y permanecerá con su versión local.

![P1074#yIS1](/img/media/image97.png)

Figura 52: Advertencia de “servidor más reciente” al iniciar sesión

## Subir

- <u>¿Quién?</u>
  - **<u>Planificación de suministro</u>: administradores de aplicaciones/reinos/programas y usuarios de programas. No disponible o necesario para los visores de informes**

  - **<u>Forecasting</u>: administradores de aplicaciones/reinos/programas y usuarios de programas. No disponible ni necesario para los visualizadores de pronósticos**

- <u>¿Por qué</u>?
  - > **Subiendo como <u>draft</u>:**
    - **Planes/Previsiones de suministro:** Comparta la versión local de los datos del programa con el servidor y otros usuarios (cargando como borrador)

  - > **Subiendo como <u>final</u>:**
    - **Planificación de suministro:** Indicar a todos los usuarios que el plan de suministro ha sido completamente actualizado, y también iniciar el proceso de revisión del plan de suministro.

    - **Previsiones:** Permitir que las previsiones finales se importen al plan de suministro.

- <u> ¿Qué sucede cuando un usuario sube un programa </u>?
Cuando el usuario carga un Programa, se convierte en la última versión en el servidor.
y está disponible para que todos los demás usuarios lo descarguen o vean
  - Tenga en cuenta que si se descargó una versión truncada del programa del plan de suministro (por ejemplo, v10), cuando el usuario cargue su versión local (convirtiéndose en v11), la nueva versión en el servidor contendrá todos los datos, no solo el subconjunto con el que trabajó el usuario.

- <u>¿Cuándo?</u> El usuario debe estar en línea para cargar un programa

**Módulo del Plan de Suministros -** Cómo cargar un programa:

1. Asegúrese de estar en el Módulo del Plan de Suministros
    1. Vaya a "Administración de programas" \> "Cargar versión".

    2. O haga clic en el ícono ![P1097#yIS1](/img/media/image98.png) en la barra superior derecha en QAT

2. ![](/img/media/image99.png)Uuse el menú desplegable **Programa** para seleccionar el programa apropiado, si aún no está seleccionado (solo serán visibles los programas descargados)

3. Seleccione un **Tipo de versión** usando el menú desplegable:
    1. **Versión borrador**: Indica que el plan de suministro es un trabajo en progreso. Utilícelo para compartir un plan de suministro con otras personas, pero que no esté listo para enviarse al proceso de revisión del plan de suministro.

    2. **Versión final**: Indica que el plan de suministro ha alcanzado un estado final y se está enviando al proceso de revisión del plan de suministro. Tenga en cuenta que QAT no permitirá que el usuario cargue como final ningún problema "abierto" en la Lista de problemas de QAT. Utilice la lista de problemas QAT (consulte [Cerrar y abordar problemas](#cerrar-y-abordar-problemas)) para marcar cualquier problema abierto como "Abordado" con una nota explicativa, o mueva el problema a "cumplido" mediante la entrada de datos primero.

4. En **Notas**, escriba cualquier nota general sobre esta versión, como un resumen de los principales cambios realizados en el plan de suministro y el razonamiento detrás de esos cambios.

5. En las 4 pestañas (Consumo, Inventario, Envío, Lista de problemas QAT), QAT mostrará una comparación detallada de los detalles del plan de suministro entre la “Versión local” y la “Versión del servidor”. Revise cada pestaña para ver si hay registros resaltados. Los registros amarillos requieren su acción antes de poder cargar el plan de suministro

> **Explicación de la leyenda**:

- > Verde: representa cambios que se han realizado en la versión local; Al cargar su programa, estos cambios se guardarán en el servidor en línea como una nueva versión.

- > Azul claro: representa cambios realizados por otro usuario que ya se ha subido a la versión en vivo/en línea; debido a que se trata de un punto de datos que usted no editó, la versión del servidor persistirá para este/estos registros.

- > Amarillo: representa un conflicto en los datos entre la versión local y la versión del servidor para la misma celda de datos. Debe resolver todos los conflictos amarillos antes de que aparezca el botón Cargar. Para resolver un conflicto, haga clic derecho en la fila correspondiente y seleccione "Resolver conflicto". En la pantalla emergente, elija si desea conservar la versión local de los datos o la versión del servidor de los datos. (ver Figura 32)

![P1109#yIS1](/img/media/image100.png)

Figura 55 Resolución de conflictos al cargar el plan de suministro

6. Después de revisar todas las actualizaciones y resolver todos los conflictos, haga clic en el botón "Cargar". QAT proporcionará un mensaje de confirmación.

7. **(Para final)** Los planificadores de suministros y los revisores del plan de suministro recibirán una notificación por correo electrónico confirmando que su plan de suministro se ha cargado como final.

8. **(Para la versión final)** Los planificadores de suministros, los administradores de programas y los revisores de planes de suministros, los administradores de dominio, los usuarios de programas, los visualizadores de datos y los visualizadores de planes de suministros recibirán una notificación por correo electrónico cuando se rechace su plan de suministros. También pueden verificar el estado de la revisión de su plan de suministro en el Informe [Versión y revisión del plan de suministro](#supply-plan-version-and-review-supply-plan-module-only).

**Módulo de Pronósticos –** Cómo cargar un programa:

1. Asegúrese de estar en el módulo de pronóstico.
    1. Vaya a "Administración de programas" \> "Cargar versión".

    2. ![](/img/media/image101.png)O, haga clic en el ícono ![P1119#yIS1](/img/media/image102.png) o ![P1119#yIS2](/img/media/image103.png) en la barra superior derecha en QAT

2. Utilice el menú desplegable **Programa** para seleccionar el programa apropiado, si aún no está seleccionado (solo serán visibles los programas descargados)

3. Seleccione un **Tipo de versión** usando el menú desplegable:
    1. **Versión borrador**: Indica que el pronóstico es un trabajo en progreso. Utilice esto para compartir un pronóstico con otros.

    2. **Versión final**: Indica que el pronóstico ha alcanzado un estado final y se puede importar al plan de suministro. Tenga en cuenta que QAT no permitirá que el usuario cargue como final si no hay cambios entre la última versión del servidor y la versión que se está cargando.

4. En **Notas**, escriba cualquier nota general sobre esta versión, como resumir los principales cambios realizados en el pronóstico y el razonamiento detrás de esos cambios.

<!-- finalizar lista -->

9. En las 5 pestañas (Configuración de versión, Unidad de planificación, Consumo, Árbol, Pronóstico seleccionado), QAT mostrará una comparación detallada de los detalles entre la "Versión local" y la "Versión del servidor". Revise cada pestaña para ver si hay registros resaltados. Los registros amarillos requieren su acción antes de que pueda cargar su versión

> **Explicación de la leyenda**:

- > Verde: representa cambios que se han realizado en la versión local; Al cargar su programa, estos cambios se guardarán en el servidor en línea como una nueva versión.

- > Azul claro: representa cambios realizados por otro usuario que ya se ha subido a la versión en vivo/en línea; debido a que se trata de un punto de datos que usted no editó, la versión del servidor persistirá para este/estos registros.

- > Amarillo: representa un conflicto en los datos entre la versión local y la versión del servidor para la misma celda de datos. Debe resolver todos los conflictos amarillos antes de que aparezca el botón Cargar. Para resolver un conflicto, haga clic derecho en la fila correspondiente y seleccione "Resolver conflicto". En la pantalla emergente, elija si desea conservar la versión local de los datos o la versión del servidor de los datos. (consulte la Figura 42 Resolución de conflictos al cargar el pronóstico)

![P1131#yIS1](/img/media/image104.png)

Figura 58 Resolución de conflictos al cargar el pronóstico

5. Después de revisar la tabla y confirmar los pronósticos seleccionados, haga clic en el botón "Cargar". Esto abrirá una ventana emergente separada (“Validación de pronóstico”). La pantalla **Validación de pronóstico** brinda a los usuarios la posibilidad de verificar su trabajo y cualquier cosa que se hayan perdido al crear y seleccionar los pronósticos. El usuario tiene la opción de ver las diferentes validaciones solo para los pronósticos <u>seleccionados</u> para cada unidad de planificación, o ver las validaciones para los pronósticos <u>all</u> en el programa. Para cambiar esta configuración, marque/desmarque la casilla en la parte superior de la pantalla. Para facilitar el acceso, las validaciones que están en fuente azul están vinculadas a la página en QAT donde se marca la validación. Por ejemplo, si no se selecciona un pronóstico para una de las unidades de planificación, al hacer clic en la unidad de planificación en la página de validación, accederá a la pantalla Comparar y seleccionar, donde podrá seleccionar un pronóstico.
    1. **La Sección 1** marca cualquier unidad de planificación activa que no tenga un pronóstico seleccionado.

2. **La Sección 2** analiza todas las unidades de planificación activas que utilizan pronósticos basados ​​en el consumo. 2a señalará si a alguno de los pronósticos de consumo le faltan valores de consumo reales (brecha). 2b señalará cualquier unidad de planificación que no tenga al menos 24 meses de datos de consumo. Si se selecciona la casilla de verificación en la parte superior, solo se marcarán las unidades de planificación con un pronóstico de consumo seleccionado. Las unidades de planificación con un pronóstico de árbol seleccionado no se marcarán en esta sección.

    3. **La Sección 3** analiza todas las unidades de planificación activas que utilizan pronósticos de árboles. Las unidades de planificación con una previsión de consumo seleccionada no se marcarán en esta sección. 3a señala cualquier unidad de planificación que no aparece en ningún árbol. 3b señala cualquier rama de árbol a la que le falta una unidad de planificación. 3c marca cualquier nodo del árbol donde los nodos secundarios del padre no suman exactamente el 100%. En la sección 3c, al hacer clic en el ícono + se expandirá una tabla con detalles sobre qué nodos y porcentajes se están marcando.

    4. **La Sección 4** recopila todas las notas en las diferentes pantallas del módulo de pronóstico. 4a mostrará notas de la pantalla Ajuste y entrada de datos. 4b mostrará notas de la pantalla "Administrar árbol". Estas notas incluyen notas específicas de árboles y notas específicas de escenarios. 4c mostrará notas de la pantalla "Administrar árbol", específicamente las notas en cada nodo.

![P1139#yIS1](/img/media/image105.png)

Figura 59: Validación del pronóstico

6. Después de revisar todas las validaciones y resolver todos los problemas, haga clic en el botón "Aceptar" para cargar. QAT proporcionará un mensaje de confirmación.

## Versión y revisión del plan de suministro (solo módulo del plan de suministro)

- <u>¿Quién?</u> Esta función está disponible para **Aplicación/Reino/Programa
Administradores, usuarios del programa, revisores del plan de suministro y visualizadores del plan de suministro**

- <u>¿Cuándo?</u> El usuario debe estar en línea. Revisores del plan de suministro
Recibirá un correo electrónico de QAT cada vez que se cargue un plan de suministro como final (es decir,
listo para revisión).

- <u>¿Por qué</u>? Esta función permite a los usuarios **revisar la
estado de revisión del plan de suministro de los planes de suministro.**
  - **Los planificadores de suministros** (administradores y usuarios del programa) pueden verificar el estado de su revisión

  - **Los revisores del plan de suministro** pueden ver la cola de revisión

  - **Los visitantes del plan de suministro** pueden verificar el estado de las revisiones del plan de suministro.

- <u>¿Cómo</u>?

<!-- finalizar lista -->

1. > Vaya a “Gestión del programa” \> “Versión y revisión del plan de suministro” y se mostrará la siguiente pantalla. Seleccione el período del informe, el país, el programa, el tipo de versión y el estado. En esta tabla, los usuarios pueden ver el estado de todos los planes de suministro y cualquier comentario de versión. Los usuarios también pueden utilizar las opciones de búsqueda, filtrado y clasificación (consulte [Navegación y barra de menú](#navigación-y-barra-de-menú)) para encontrar programas específicos.

![A screenshot of a computer Description automatically generated](/img/media/image106.png)

Figura 60: Versiones y revisión del plan de suministro

2. > Haga clic en cualquier fila de la tabla para abrir los detalles de ese plan de suministro.

> **_Para revisores del plan de suministro_** **SÓLO** –

1. Utilice la primera pestaña "Planificación de suministro" para revisar el estado del stock y los elementos de datos de cualquier unidad de planificación determinada.

2. Utilice la segunda pestaña "Lista de problemas QAT" para revisar cualquier problema dentro del plan de suministro.
    1. Utilice la columna “**Revisado**” y marque la casilla de verificación en cada fila mientras los revisa. Todos los problemas que no sean “en cumplimiento” o “resueltos” deben marcarse como “revisados” para que usted apruebe o rechace el plan.

    2. Utilice la columna “**Ingresar notas del revisor**” para anotar cualquier comentario para el planificador de suministros.

    3. Actualice el “**Estado del problema**” según sea necesario: deje los problemas como “**Abordados**” si desea que el planificador de suministros los revise nuevamente en el siguiente ciclo de revisión (el problema quedará “abierto” en la próxima versión). Marque los problemas como "**Resueltos**" si no es necesario volver a revisarlos ni siquiera en futuros ciclos de revisión. Marque los problemas como "**Abiertos**" si desea comunicar al revisor que necesita actualizar sus comentarios.

4. Si hay un problema que el planificador de suministros debe abordar, pero que la Lista de problemas QAT no marca automáticamente, el revisor puede agregar un problema manual haciendo clic en el símbolo “+” en la parte superior derecha de la pantalla.
        1. Los problemas manuales deben tener asociada una unidad de planificación, criticidad, descripción y sugerencia. Estos problemas se agregarán como una fila separada en la Lista de problemas de QAT para que los solucionen los planificadores de suministros.

3. Después de revisar, cambie el estado del Plan de suministro a **Aprobado** o Necesita revisión, proporcione notas (obligatorio) y haga clic en "Actualizar".
    1. Utilice el Historial de notas de versión para ver notas generales sobre el plan de suministro a lo largo del tiempo.

![A screenshot of a computer Description automatically generated](/img/media/image107.png)

Figura 61: Botón Ver historial de notas

> ![A screenshot of a computer Description automatically generated](/img/media/image108.png)

Figura 62: Ejemplo del historial de notas de versión

2. **\*Nota:** Existe un estado adicional para "No se necesita revisión" que se puede utilizar cuando se carga un plan de suministro duplicado o cuando se carga un plan de suministro fuera del período de envío.\*

![A screenshot of a computer Description automatically generated](/img/media/image109.png)

Figura 63: Versión y revisión del plan de suministro (segunda pantalla)

3. > El usuario que envió el plan de suministro para revisión será notificado por correo electrónico cuando su envío sea Aprobado, Necesita revisión o No se necesita revisión. Las reglas para las notificaciones por correo electrónico de revisión del plan de suministro son las siguientes:
    1. Notificación del plan de suministro final **Subido**
        1. Enviado a: Todos los revisores del plan de suministros con acceso a ese programa.

        2. Cc’d: Usuario que subió la versión

        3. Cco: todos los administradores del programa con acceso a ese programa.

    2. Notificación del plan de suministro de **Necesidad de revisión**:
        1. Enviado a: El usuario que subió el plan de suministro.

        2. Cc'd: Revisor que solicitó revisiones de la versión.

        3. Cco: todos los revisores con acceso a ese programa, así como los administradores con acceso a ese programa.

    3. Notificación de plan de suministro **Aprobado**:
        1. Enviado a: El usuario que subió el plan.

        2. En copia: todos los usuarios que tienen acceso a ese programa, excepto los administradores de aplicaciones y el visor de informes.

    4. Notificación del plan de suministro **No se necesita revisión**:
        1. Enviado a: El usuario que subió el plan.

        2. Cc'd: el revisor del plan de suministro

## Exportar

- <u>¿Quién?</u> Esta función está disponible para **Aplicación/Reino/Programa
Administradores, usuarios de programas y revisores de planes de suministro. Esta función no está disponible
o necesario para los visores de informes.**

- <u>¿Por qué?</u> La función “Exportar programa” se utiliza cuando
el usuario desea exportar el programa a su máquina local. Usando la Exportación
función, los datos del programa se pueden compartir con otras personas sin conexión. Por ejemplo, el usuario A puede
exportar un programa y guardar ese archivo en una unidad USB para compartirlo con el usuario B, que es
fuera de línea.

- <u>¿Qué?</u> El archivo de datos del programa se exportará en
el formato zip. El archivo zip contiene todos los datos de esa versión del programa.
Los usuarios pueden optar por exportar en formato cifrado o no cifrado. Este archivo puede posteriormente
compartirse con otros para importarlo a QAT o, si no está cifrado, analizarse fuera
de QAT.

<!-- finalizar lista -->

- **Nota:** si el usuario descargó una versión con un rango de datos seleccionado, la exportación también será para ese rango de datos seleccionado)

![P1190#yIS1](/img/media/image110.png)

Figura 64: Pantalla Exportar programa

- <u>Cómo exportar un programa:</u>

<!-- finalizar lista -->

1. > Determine si desea exportar desde el módulo de previsión o de planificación de suministro y navegue hasta el módulo correcto (consulte la [Sección 2.J Navegación y barra de menú](#barra-de-menú-y-navegación)). Si solo tiene acceso a un módulo, puede ignorar este paso.

2. > Vaya a “Gestión de programas” \> “Programa de exportación”

3. > Seleccione el programa que desea exportar usando el menú desplegable. Los programas deben descargarse primero antes de que esté disponible la exportación. (Consulte la [Sección 3.B Descargar/eliminar programa](#downloaddelete)).
    - Si el programa se descargó con un subconjunto de datos, la exportación también se limitará a ese mismo subconjunto.

4. > Determine si necesita o no una versión sin cifrar.
    - Para volver a importar a QAT, deje marcada la casilla de verificación "¿Desea cifrar?"

    - Para analizar datos fuera de QAT, desmarque la casilla de verificación "¿Desea cifrar?"

5. > Haga clic en el botón “Enviar” para guardar los cambios.

6. > Aparecerá una ventana de exploración. Seleccione la carpeta en la que desea guardar el archivo exportado. Luego haga clic en "Guardar".

7. > El archivo .zip ahora se guardará en la carpeta seleccionada.

8. > Comparta el archivo .zip con otras personas según sea necesario.

## Importar

- <u>¿Quién?</u> Esta función está disponible para **Aplicación/Reino/Programa
Administradores, usuarios de programas y revisores de planes de suministro. No disponible o necesario para el informe
Espectadores**

- <u>¿Por qué?</u> La función “Importar programa” se utiliza cuando
el usuario está trabajando en el programa en modo fuera de línea y desea abrir un programa
que ha sido exportado a un archivo .zip
  - **Nota**: El archivo de datos del programa debe guardarse en formato zip). Por ejemplo, el usuario B puede (sin conexión) importar un programa que el usuario A exportó y guardó en un dispositivo externo.

  - **Nota**: Si el usuario exportó una versión con un rango de datos seleccionado, la importación también será para ese rango de datos seleccionado.

- <u>¿Cuándo</u>? Esta función se puede utilizar sin conexión o
en línea.

![](/img/media/image111.png)

Figura 65: Pantalla Importar programa

- <u>Cómo importar un programa:</u>

<!-- finalizar lista -->

1. > Determine si desea exportar desde el módulo de previsión o de planificación de suministro y navegue hasta el módulo correcto (consulte la [Sección 2.J Navegación y barra de menú](#barra-de-menú-y-navegación)). Si solo tiene acceso a un módulo, puede ignorar este paso.

2. > Vaya a “Gestión de programas” \> “Importar programa”

3. > Haga clic en "Examinar". Elija el archivo requerido que debe importarse. El archivo seleccionado debe estar en formato zip. El archivo zip puede tener varios programas.

4. > Haga clic en "Siguiente"

5. > Seleccione el programa requerido para importar. (si solo hay un programa en el archivo, se seleccionará automáticamente)

6. > Haga clic en el botón "Importar" para importar el programa a la máquina local.

## Comparación de versiones

**<u>Propósito</u>:** Permitir a los usuarios ver y comparar 2 versiones diferentes del mismo programa de pronóstico. En esta pantalla, los usuarios seleccionarán un programa de pronóstico para ver y desde allí seleccionarán 2 versiones de ese programa para comparar. El usuario puede seleccionar tanto la versión local como la del servidor, así como la versión borrador y final. Si la versión tiene un \* al lado, esto indica que la versión es definitiva. Una vez que el usuario haya seleccionado todos los menús desplegables, aparecerá una tabla comparando las dos versiones de pronóstico. Para cada combinación de unidad de planificación y región, la tabla mostrará el pronóstico seleccionado, la cantidad de pronóstico y notas para cada una de las 2 versiones de pronóstico. Esta pantalla es sólo para fines de visualización y no se pueden realizar cambios en los pronósticos seleccionados en esta pantalla.

![P1227#yIS1](/img/media/image112.png)

Figura 66: Comparación de versiones

**<u>Usando esta pantalla</u>:**

1. **Primero, seleccione entre los filtros de salida de los menús desplegables. Esta pantalla solo compara 1 programa a la vez, pero permite al usuario comparar múltiples versiones de ese programa. El usuario tiene la capacidad de comparar cualquier combinación de versiones finales y borradores, así como versiones locales y de servidor. Si** la versión tiene un \* al lado, esto indica que la versión es definitiva. Las notas de la versión y el período de pronóstico aparecerán atenuados ya que son campos no editables. Para actualizar estos campos, vaya a "Actualizar configuración de versión".

2. Una vez que se seleccionen todos los menús desplegables, aparecerá una tabla con datos de ambas versiones de pronóstico que se seleccionaron. Para cada combinación de unidad de planificación y región, la tabla mostrará el pronóstico seleccionado, la cantidad total de pronóstico para el período de pronóstico y cualquier nota de pronóstico para ese pronóstico seleccionado. Cada lado de la tabla representa 1 de las 2 versiones de pronóstico seleccionadas. La fila superior de la tabla muestra para qué versión muestra datos el lado.

3. Esta pantalla se puede exportar en formato PDF y CSV haciendo clic en los iconos en la parte superior derecha de la página.