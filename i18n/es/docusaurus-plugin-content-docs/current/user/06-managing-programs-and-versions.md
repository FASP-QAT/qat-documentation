---
id: managing-programs-and-versions
title: "Gestión de programas y versiones"
sidebar_label: "Gestión de programas y versiones"
sidebar_position: 6
---
# Gestión de programas y versiones

## Trabajar con datos del programa

QAT le permite administrar los datos del programa a través de cuatro acciones principales: descargar, cargar, importar y exportar.

| Acción | Modo | Descripción |
| :--- | :---: | :--- |
| **Descargar** | En línea | Recupere los datos del programa desde el servidor a su dispositivo local. |
| **Subir** | En línea | Guarde sus cambios locales en el servidor. |
| **Exportar** | Sin conexión | Guarde los datos locales en un archivo comprimido (`.zip`) para compartirlos. |
| **Importar** | Sin conexión | Cargue datos de un archivo `.zip` exportado en QAT. |

> [!NOTA]
> Los programas de Previsión y Planificación de Suministros son módulos separados. Asegúrese de estar en el módulo correcto antes de realizar cualquier operación de datos.

### Resumen del flujo de trabajo
- **Descargar:** Necesario para comenzar a trabajar en cualquier programa.
- **Subir:** Comparte tu trabajo con el equipo. La carga como "Final" en Planificación de suministros inicia el proceso de revisión; en Previsión, hace que los datos estén disponibles para importarlos a Planificación de suministro.
- **Exportar/Importar:** Se utiliza principalmente para compartir datos en entornos fuera de línea (por ejemplo, mediante una unidad USB).

## Descargar y eliminar programas

### Descripción general
- **Quién:** Administradores, usuarios del programa y revisores. 
- **Cuándo:** Requerido para descargas en línea. Necesario incluso cuando se trabaja en línea para permitir la entrada de datos y la planificación de escenarios.
- **Indicadores de estado:** 
  - ![Red Icon](/img/media/image89.png) **Rojo:** Su versión local está desactualizada.
  - ![Blue Icon](/img/media/image90.png) **Azul:** Tienes la última versión o no has descargado ninguna versión.

### Cómo descargar un programa
1. Navegue hasta **Administración de programas** > **Descargar/Eliminar programa** (o haga clic en el icono de descarga en la parte superior derecha).
2. La pantalla muestra programas con texto codificado por colores:
   - **Verde:** Última versión descargada.
   - **Rojo:** Versión desactualizada descargada.
   - **Negro:** Aún no descargado.
3. Seleccione la casilla de verificación del programa de destino. QAT tiene por defecto la última versión.
4. (Opcional) Expanda el triángulo al lado de un programa para seleccionar una versión histórica específica.
5. Haga clic en **Descargar**.

![Load Program Screen](/img/media/image91.png)
*Figura 1: Interfaz de descarga del programa*

### Descarga de un subconjunto de datos (solo planificación de suministro)
Para mejorar el rendimiento de programas grandes, puede descargar una versión truncada de un plan de suministro.
- Marque **Descargar un rango específico de datos del plan de suministro**.
- Seleccione una fecha de inicio (mínimo 18 meses antes).
- **Nota:** Los datos más antiguos permanecen seguros en el servidor y se fusionan durante cargas futuras.

### Eliminar y limpiar
- **Eliminar:** Haga clic en el ícono de la papelera al lado de una versión específica.
- **Limpiar:** Haga clic en el ícono de la escoba para eliminar todas las versiones locales excepto la más reciente.

> [!ADVERTENCIA]
> Si ve una advertencia de "Versión más reciente del servidor" durante la sincronización, al hacer clic en **Aceptar** se sobrescribirán los cambios locales con los datos del servidor. Haga clic en **Cancelar** para conservar sus ediciones locales.

![More recent server warning](/img/media/image97.png)
*Figura 2: Advertencia de conflicto de versión del servidor*
## Cargando datos del programa

### Propósito de la carga
- **Versión borrador:** Guarde su trabajo en progreso en el servidor y compártalo con otros usuarios.
- **Versión final (Planificación de suministro):** Marca el plan de suministro como completo e inicia el proceso de revisión.
- **Versión final (pronóstico):** Hace que el pronóstico esté disponible para importarlo al módulo de planificación de suministros.

### Cómo cargar (planificación de suministro)
1. Vaya a **Administración de programas** > **Cargar versión** (o haga clic en el ícono de carga en la parte superior derecha).
2. Seleccione su programa y el **Tipo de versión** (Borrador o Final).
3. Agregue **Notas** que describan los cambios realizados.
4. Revise las pestañas de comparación (**Consumo, Inventario, Envío, QPL**).
5. Resuelva cualquier conflicto (resaltado en **Amarillo**) haciendo clic derecho en la fila y seleccionando **Resolver conflicto**.
6. Haga clic en **Subir**.

> [!IMPORTANTE]
> No puede cargar una versión "final" si hay problemas "abiertos" en la lista de problemas QAT. Primero debe abordarlos o marcarlos como "En Cumplimiento".

### Cómo cargar (pronóstico)
1. Vaya a **Administración de programas** > **Cargar versión**.
2. Seleccione el programa y el tipo de versión.
3. Revise los cambios en las pestañas (**Configuración de versión, Unidad de planificación, Consumo, Árbol, Pronóstico seleccionado**).
4. Resuelva los conflictos y haga clic en **Cargar**.
5. Complete la lista de verificación **Validación de pronóstico** para garantizar la integridad de los datos y haga clic en **Aceptar** para finalizar la carga.

![Forecast Validation](/img/media/image105.png)
*Figura 3: Pantalla de validación de pronóstico*

## Versión y revisión del plan de suministro (solo módulo del plan de suministro)

- <u>¿Quién?</u> Esta función está disponible para **Aplicación/Reino/Programa
## Versión y revisión del plan de suministro (solo planificación de suministro)

### Descripción general
- **Quién:** Administradores, usuarios del programa, revisores y espectadores.
- **Cuándo:** Se utiliza en línea para realizar un seguimiento del estado de envío y aprobación de los planes de suministro.
- **Por qué:** 
  - **Planificadores:** Supervise el estado de aprobación y los comentarios.
  - **Revisores:** Administre la cola de revisión y apruebe/rechace envíos.

### Cómo revisar un plan de suministro
1. Vaya a **Administración del programa** > **Versión y revisión del plan de suministro**.
2. Seleccione filtros (Período, País, tipo de versión) para encontrar el plan objetivo.
3. Haga clic en una fila para ver los detalles.

#### Para revisores:
- **Pestaña Planificación de suministros:** Revise el estado del stock y los datos de cada unidad de planificación.
- **Pestaña Lista de problemas de QAT:** Revise todos los problemas marcados.
- **Acción:** Marque la casilla **Revisado** para cada problema. Puede agregar **Notas del revisor** o actualizar el **Estado del problema** (por ejemplo, marcar como "Resuelto").
- **Problemas manuales:** Haga clic en el icono **+** para agregar problemas no detectados por la validación automática.
- **Aprobación:** Establezca el estado en **Aprobado** o **Necesita revisión**, agregue notas obligatorias y haga clic en **Actualizar**.

![Supply Plan Review Interface](/img/media/image106.png)
*Figura 4: Versiones del plan de suministro y pantalla de revisión*

### Notificaciones por correo electrónico
QAT notifica automáticamente a los usuarios relevantes cuando un plan es:
- **Subido (Final):** Revisores notificados.
- **Necesita revisión:** Se notificó al planificador.
- **Aprobado:** Planificador y equipo notificados.

## Exportación e importación de datos

### Exportación de programas
Utilice Exportar para guardar datos del programa en su máquina para compartirlos sin conexión (por ejemplo, a través de USB).
1. Vaya a **Administración de programas** > **Exportar programa**.
2. Seleccione el programa descargado del menú desplegable.
3. Elija cifrado:
   - **Cifrado (predeterminado):** Seguro; requerido para volver a importar a QAT.
   - **Sin cifrar:** Para análisis de datos externos (por ejemplo, Excel).
4. Haga clic en **Enviar** y seleccione una ubicación para guardar.

![Export Program Screen](/img/media/image110.png)
*Figura 5: Interfaz de exportación*

### Importación de programas
Utilice Importar para cargar un archivo `.zip` en su instancia QAT local.
1. Vaya a **Administración de programas** > **Importar programa**.
2. Haga clic en **Examinar** y seleccione el archivo `.zip`.
3. Haga clic en **Siguiente**, seleccione los programas del archivo y haga clic en **Importar**.

![Import Program Screen](/img/media/image111.png)
*Figura 6: Interfaz de importación*

## Comparación de versiones (solo pronóstico)

Utilice la pantalla **Comparación de versiones** para ver las diferencias entre dos versiones del mismo programa de pronóstico.

1. Vaya a **Administración de programas** > **Comparación de versiones**.
2. Seleccione el programa y las dos versiones que desea comparar.
   - **Nota:** Las versiones finales están marcadas con un asterisco (`*`).
   - Puede comparar versiones locales con servidores y borradores con versiones finales.
3. Revise la tabla de comparación, que resume el pronóstico seleccionado, la cantidad de pronóstico y las notas para cada combinación de unidad de planificación/región.
4. (Opcional) Haga clic en los íconos en la parte superior derecha para exportar la comparación como **PDF** o **CSV**.

![Version Comparison Interface](/img/media/image112.png)
*Figura 7: Comparación de versiones de pronóstico*