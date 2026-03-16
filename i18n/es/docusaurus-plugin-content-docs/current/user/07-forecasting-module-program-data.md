---
id: forecasting-module-program-data
title: "Forecasting Module: Program Data"
sidebar_label: "Forecasting Module: Program Data"
sidebar_position: 7
---
# Módulo de pronóstico: datos del programa

## Introducción

El pronóstico ![](/img/media/image234.png)A es una estimación/predicción de las cantidades de productos que serán consumidos/utilizados por los clientes o consumidores durante un período de tiempo futuro. En QAT, el proceso de pronóstico generalmente se lleva a cabo en un orden específico (ver _Figura a la derecha_).

Primero, configure un programa usando Actualizar información del programa o seleccione un programa anterior usando Descargar o Eliminar programa. Después de descargar el programa, agregue información sobre el período de pronóstico, el umbral (%), los productos y otras configuraciones del programa en las pantallas Actualizar configuración de versión y Actualización de unidad de planificación. En QAT, los usuarios pueden crear pronósticos diseñando árboles de pronóstico (pronóstico basado en árboles) o aprovechando el consumo histórico (pronóstico basado en el consumo) para llegar a un pronóstico final. Para cada producto, elija consumo o metodología de árbol, ¡o ambas!

Los **pronósticos basados ​​en el consumo** son más útiles en programas maduros y estables que tienen un suministro completo de productos y datos confiables. Este método puede ser el predictor más fiable del consumo futuro si se prevé que el uso futuro será muy similar al pasado. Lo ideal sería tener disponibles más de 24 meses de datos de consumo real mensual. Si los datos necesarios para un pronóstico basado en el consumo no están disponibles o no son útiles para predecir el consumo futuro, realice un **pronóstico basado en árboles**, que se adapte de manera flexible a todos los demás métodos de pronóstico, como morbilidad, servicios y métodos demográficos. Los usuarios pueden especificar cambios a lo largo del tiempo en un árbol, ya sea especificando directamente la tasa de cambio o extrapolando a partir de datos pasados.

Una vez que se han creado los distintos pronósticos, los usuarios pueden navegar a la sección Análisis y resultados de pronósticos para ver y comparar pronósticos, y seleccionar el pronóstico final.

## Información del programa

**<u>Propósito:</u>** Permite a los usuarios actualizar la información básica de su programa después de la creación inicial.

**<u>Usando esta pantalla:</u>**

Los _Administradores del programa_ pueden usar la pantalla principal para:

- Actualizar el nombre del programa de pronóstico, el administrador del programa y el campo de notas. Los administradores del programa también pueden optar por desactivar o activar un programa en esta pantalla. Para cambios relacionados con el área técnica, la organización o el nombre para mostrar del programa, los administradores del programa deben solicitar el cambio a un administrador de Realm a través del [Sistema de asistencia técnica QAT.](#qat-helpdesk-and-tickets)

Los _Realm Admins_ pueden usar la pantalla principal para:

- Actualice el área técnica, la organización, el nombre del programa de pronóstico, el nombre para mostrar del programa, el administrador del programa y el campo Notas. Los administradores de Realm también pueden optar por desactivar o activar un programa en esta pantalla.

## Configuración de versión

![P2710#yIS1](/img/media/image235.png)

**\*<u>Propósito</u>**: permite a los usuarios actualizar la configuración de su programa y ver detalles sobre versiones anteriores. Para ver los resultados del pronóstico, use las pantallas en la sección [Resultado del análisis del pronóstico](#forecasting-module-reports-and-outputs).\*

**\*<u>Usando esta pantalla</u>**:\*

_Nota: Se debe descargar un programa de pronóstico para actualizar la configuración de la versión. Todas las versiones anteriores de cada programa de pronóstico estarán en formato de solo lectura; sólo la versión local está disponible para actualización y edición._

En esta pantalla, los usuarios pueden:

1. Actualice la siguiente configuración del programa local descargado:
    1. **Notas de la versión**: un campo de texto editable de formato libre que permite a los usuarios un lugar para proporcionar notas generales sobre una versión de pronóstico particular. También es visible y editable al cargar un programa.

    2. **Fecha de carga/Carga por usuario**: indica el usuario que cargó cada versión del pronóstico en el servidor y en qué fecha. Útil para comprender el ciclo de vida de cada programa.

    3. **Inicio del pronóstico, período de pronóstico (meses) y fin del pronóstico**: según la fecha de inicio y finalización, QAT calculará automáticamente el período de pronóstico en meses. Alternativamente, los usuarios pueden optar por ingresar una fecha de inicio del pronóstico y una cantidad de meses en el período del pronóstico, y QAT calculará automáticamente la fecha de finalización del pronóstico.

| Nombre de columna | Descripción | Usado ¿Dónde?                                                                                                       |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Factor de conversión (FU:PU)** | Un campo no editable que proporciona información sobre el factor de conversión entre la PU elegida y su FU asociada.                                                                                                                                                     | Las pantallas seleccionadas (Ingreso y ajuste de datos, Comparar y seleccionar, Pronóstico mensual) permiten la entrada/visualización de datos en PU o FU |
| **¿Previsión de consumo?** | Para cada PU, los usuarios pueden elegir uno o ambos métodos. Si se marca el tipo de pronóstico para la PU, aparecerá en las pantallas de Consumo y Árbol.                                                                                                                    | Construyendo sus pronósticos y luego analizándolos en la pantalla Comparar y Seleccionar |
| **¿Pronóstico de árbol?** |                                                                                                                                                                                                                                                                       |                                                                                                                   |
| **Existencias disponibles** _(inicio del período de pronóstico)_ | El stock (cantidad) real o proyectado al comienzo de su período de pronóstico. Los usuarios pueden utilizar el módulo de planificación de suministros para determinar el SOH, si lo desean.                                                                                                     | Resumen de pronóstico para calcular la brecha de adquisiciones |
| **Envíos existentes** _(período de previsión)_ | Cantidad total de envío existente durante el período de pronóstico. Los usuarios pueden utilizar el módulo de planificación de suministros para determinar la cantidad de envío existente (_se recomienda no incluir cantidades de envío planificadas a menos que exista una alta probabilidad de realizar un pedido)_. |                                                                                                                   |
| **Meses de existencias deseados** _(fin del período de pronóstico)_ | El MOS que deseas tener al final de tu pronóstico.                                                                                                                                                                                                                 |                                                                                                                   |
| **Tipo de precio** | Elija un agente de adquisiciones específico o "Personalizado".                                                                                                                                                                                                                      | Resumen de pronóstico para calcular el costo de la brecha de adquisiciones |
| **Precio unitario**

| Completado automáticamente según el agente de adquisiciones o ingresado manualmente por un usuario.                                                                                                                                                                                                 |                                                                                                                   |

4. **\# Of Days in Month**: se utiliza en pronósticos basados ​​en el consumo para ajustar el consumo real frente al número de días desabastecidos. Un usuario puede elegir entre 15 y 31 días; sin embargo, QAT utilizará de forma predeterminada “días calendario”. Este campo podría ser útil si una instalación solo desea utilizar días hábiles (~20 días) para calcular la tasa de desabastecimiento.

> ![P2723#yIS1](/img/media/image236.png)

5. **Porcentaje de flete**: se utiliza en pantallas de pronóstico de resultados e informes para estimar los costos totales de adquisición. Este campo no es obligatorio y puede actualizarse en cualquier momento.

<!-- finalizar lista -->

1. **Umbral de pronóstico**: esta métrica se utiliza en la pantalla Comparar y seleccionar. QAT compara los pronósticos de consumo y los pronósticos de árboles disponibles. Para cualquier pronóstico de árbol, QAT marcará el porcentaje por encima del pronóstico de consumo más alto o por debajo del más bajo. La comparación se resaltará en texto rojo si está fuera de los porcentajes umbral establecidos por el usuario en esta pantalla. Suponiendo datos de consumo real confiables, esta comparación ayuda a los usuarios a determinar si sus pronósticos de árboles son realistas. Estos dos campos, alto y bajo, no son obligatorios y pueden actualizarse en cualquier momento.

<!-- finalizar lista -->

2. Ver un ciclo de vida histórico de cada programa a través de todas sus versiones.
    1. Ver todas las configuraciones de la versión arriba

    2. (Clic derecho) Vea la pantalla [Validación de pronóstico](#upload) (la misma pantalla que se ve durante el proceso de carga), que enumera los pronósticos faltantes, los datos faltantes y todas las notas. Esto sirve para que los usuarios comprendan fácilmente los pronósticos anteriores sin descargarlos. Utilice las pantallas [Pronóstico mensual] (# pronóstico mensual), [Resumen de pronóstico] (# resumen de pronóstico) o [Comparación de versiones] (# comparación de versiones) para ver los resultados de pronóstico de otras versiones.

## Unidades de planificación

**\*<u>Propósito</u>**: permite a los usuarios agregar y actualizar unidades de planificación y las configuraciones de unidades de planificación asociadas que se utilizarán en sus pronósticos y para el cálculo en las pantallas de resultados de pronóstico.\*

**<u>Usando esta pantalla</u>**:

_Nota: Se debe descargar un programa de pronóstico para agregar o actualizar unidades de planificación y sus configuraciones._

1. **\*Agregar unidades de planificación**: los usuarios deberán agregar en esta pantalla las unidades de planificación que deseen pronosticar. Las unidades de planificación se pueden agregar manualmente o copiar y pegar desde la pantalla "Actualizar unidad de planificación" del módulo de planificación de suministros, si la unidad de planificación ya se agregó al plan de suministro de un usuario.\*

2. **\*Actualizar configuración de la unidad de planificación**: los usuarios también pueden usar esta pantalla para actualizar cualquier unidad de planificación y su configuración asociada. Los usuarios siempre deben Master Data Sync después de actualizar cualquier configuración para poder ver los cambios en otras pantallas del módulo de pronóstico. La configuración de la unidad de planificación y sus breves explicaciones son las siguientes:\*

Tabla 9: Configuración de la unidad de planificación del módulo de pronóstico

## Unidades de equivalencia

**<u>Propósito</u>**: Permitir a los usuarios administrar unidades de equivalencia. Las Unidades de Equivalencia (UE) permiten a los usuarios agregar datos de productos que son diferentes, pero relacionados. Permiten a los usuarios agrupar múltiples unidades de pronóstico para agregarlas en [Informes y resultados] (#módulo-de-previsión-informes-y-productos).

**<u>Usando esta pantalla</u>:**

**Asignación de unidades de equivalencia a unidades de pronóstico**

Utilice la pantalla principal para gestionar asignaciones entre unidades de equivalencia y unidades de previsión. Las asignaciones a nivel de dominio están disponibles para todos los usuarios y se indican mediante el programa "Nivel de dominio". Sin embargo, los administradores del programa pueden crear asignaciones específicas del programa (agregando una fila y etiquetándola a una UE específica). Si hay algún conflicto, las asignaciones específicas del programa tendrán prioridad y se utilizarán en lugar de las asignaciones a nivel de dominio.

Por ejemplo, un usuario está pronosticando medicamentos para tratar la QATitis, una afección en la que las personas no pueden dejar de usar QAT. El usuario puede pronosticar mediante diferentes tratamientos (diferentes unidades de pronóstico), pero desea ver cómo se agregan. Para el siguiente ejemplo, un paciente necesitaría 14 tabletas de FASPicilina, o 1 tubo de FASPasona (crema), o 0,5 viales de FASPicaína, o 2 barras de chocolate para tratar la QATitis. Por lo tanto, si diferentes pacientes se someten a tratamientos diferentes, un usuario puede agregar estos tratamientos diferentes creando/utilizando una Unidad de Equivalencia (UE).

| **Unidad de Equivalencia** | **Unidad de previsión** | **Conversión a la UE** | **Tratamiento promedio requerido para curar la QAtitis** |
| ----------------------- | ---------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 1 tratamiento para QATitis | 1 tableta de FASPicilina | 14 | 1 comprimido al día durante 2 semanas |
| 1 tratamiento para QATitis | Tubo de 5 ml de FASPasone (crema) | 1 | 0,5 ml/día aplicado en la frente durante 10 días (1 tubo en total) |
| 1 tratamiento para QATitis | Vial de 2 ml de FASPicaína (inyección) | 0,5 | Una inyección de 1 ml (dos personas pueden compartir un vial) |
| 1 tratamiento para QATitis | 1 barra de chocolate blanco | 2 | 2 barras de chocolate. El tipo de chocolate no importa, ya que todo el chocolate contiene la forma natural de FASPicilina. |
| 1 tratamiento para QATitis | 1 barra de chocolate amargo | 2 |                                                                                                                        |
| 1 tratamiento para QATitis | 1 barra de chocolate con leche | 2 |                                                                                                                        |

Tabla 10: Ejemplo de la UE: tratamiento para la QAtitis

**Pasos para crear y gestionar unidades de equivalencia**

1. Un usuario primero debe verificar si la UE ya existe en los datos maestros de QAT navegando a "Realm Masters" à "Unidades de equivalencia".

2. Si la UE no existe, haga clic en "Administrar unidad de equivalencia" y luego en "Agregar fila" y los usuarios pueden ingresar la UE que les gustaría utilizar para su programa específico en todo QAT. Esta UE será específica del programa y no estará disponible para otros programas. Si hay una UE que beneficiaría a la comunidad QAT, los usuarios pueden solicitarla a través del [Sistema de asistencia técnica de tickets QAT] (#tickets-for-addingupdating-users-and-master-data).

> ![P2819#yIS1](/img/media/image237.png)

3. Si la UE existe y un usuario desea asignar unidades de pronóstico a la UE existente, puede hacer clic en "Agregar fila" en la pantalla principal y asignar la unidad de pronóstico a la UE a nivel de programa. Si un usuario desea asignar la unidad de pronóstico a una UE de _nivel de reino_ existente y cree que beneficiaría a la comunidad QAT, los usuarios pueden solicitarlo a través del [Sistema de asistencia técnica de emisión de tickets QAT] (#tickets-for-addingupdating-users-and-master-data).

> ![P2821#yIS1](/img/media/image238.png)

4. Los usuarios también pueden editar EU específicos del programa en la pantalla principal.

5. El usuario debe hacer clic en "Enviar" cuando haya terminado de editar y sincronizar datos maestros, para poder ver la UE disponible en los menús desplegables en las pantallas de Informes y Salidas.

**¿Dónde se utilizan las unidades de equivalencia?**

- En la pantalla "Comparar y seleccionar" del módulo de pronóstico, el usuario puede mostrar sus pronósticos en UE. Usando el ejemplo anterior, un usuario que pronostica 10.000 barras de chocolate amargo por mes, podría optar por mostrar su pronóstico en la UE de "Tratamientos para QATitis" y mostrar su pronóstico como 5.000 "Tratamientos para QATitis" por mes.

- En la pantalla 'Pronóstico mensual' del módulo de pronóstico, el usuario puede mostrar sus pronósticos seleccionados por unidades de planificación individuales o agregarlos entre unidades de planificación si están conectadas por UE. Por ejemplo, si un usuario pronosticó 10.000 barras de chocolate negro, 10.000 barras de chocolate blanco y 14.000 por mes, QAT mostraría 7.000 "Tratamientos para QATitis".

- En la pantalla "Informe de error de previsión (mensual)" del módulo de planificación de suministro, los usuarios también pueden ver el consumo real y previsto en unidades de equivalencia.

| **Previsión** | **Equivalente en “Tratamientos para QAtitis”** |
| ------------------------------ | ------------------------------------------ |
| 10.000 barras de chocolate negro | 5.000 |
| 10.000 barras de chocolate blanco | 5.000 |
| 14.000 comprimidos de FASPicilina | 1.000 |
| **Totales** | **7.000** |