---
id: forecasting-module-program-data
title: "Módulo de pronóstico: datos del programa"
sidebar_label: "Módulo de pronóstico: datos del programa"
sidebar_position: 10
---
# Módulo de pronóstico: datos del programa

## Introducción
Un pronóstico es una estimación de las cantidades de productos requeridas por los clientes durante un período futuro. En QAT, la previsión sigue un flujo de trabajo estructurado: **Configuración** → **Selección de metodología** → **Entrada de datos** → **Análisis y selección**.

### Metodologías de previsión
QAT admite dos metodologías principales, que pueden usarse individualmente o combinadas para cada producto:

| Metodología | Lo mejor para... | Requisitos |
| :--- | :--- | :--- |
| **Basado en el consumo** | Programas maduros y estables con datos confiables. | Más de 24 meses de datos históricos de consumo. |
| **Basado en árbol** | Nuevos programas, ampliaciones o demanda variable. | Morbilidad, servicio o datos demográficos; tendencias demográficas. |

Una vez preparados los pronósticos, se comparan en la sección **Análisis de pronóstico** para seleccionar el plan final.

## Información del programa
Los administradores del programa pueden actualizar los metadatos básicos (Nombre, Administrador, Notas) y alternar el estado del programa (Activo/Desactivado).
> [!NOTA]
> Los cambios en el área técnica, la organización o el nombre para mostrar requieren un [ticket de asistencia técnica] (05-getting-started.md#qat-helpdesk-and-tickets).

## Configuración de versión
La pantalla **Configuración de versión** permite a los usuarios definir los parámetros del pronóstico actual y revisar versiones anteriores. Sólo la **Versión local** es editable; Las versiones del servidor son de sólo lectura.

### Parámetros técnicos
- **Período de pronóstico:** Defina la **Fecha de inicio** y el **Número de meses**. QAT calcula automáticamente la **Fecha de finalización**.
- **Días del mes:** Establecido entre 15 y 31 días (predeterminado: días calendario). Útil para ajustar el consumo en función de los días de servicio.
- **Porcentaje de flete:** Estimación opcional para cálculos de costos de adquisición.
- **Umbral de pronóstico:** Se utiliza en la pantalla **Comparar y seleccionar**. QAT señala los pronósticos de árbol que se desvían significativamente (alto/bajo) de los pronósticos de consumo. Los valores fuera del umbral están resaltados en **Rojo**.

### Historial de versiones
Los usuarios pueden ver el ciclo de vida histórico del programa y hacer clic con el botón derecho en cualquier versión para ver el resumen de **Validación de pronóstico** (que enumera los datos faltantes y las notas de validación) sin descargar esa versión específica.

![Version Settings Interface](/img/media/image235.png)
*Figura 1: Conjunto de versiones de pronóstico## Unidades de planificación
La pantalla **Unidades de planificación** es donde define los productos que se pronosticarán. Los productos se pueden agregar manualmente o copiar desde el módulo de planificación de suministros.

### Configuración de la unidad de planificación
Configure estos ajustes para habilitar metodologías y cálculos financieros específicos:

| Configuración | Descripción | Impacto |
| :--- | :--- | :--- |
| **Factor de conversión** | Relación entre Unidad de Planificación (PU) y Unidad de Previsión (FU). | Estandariza la entrada de datos entre unidades. |
| **Metodología de Previsión** | Alternar metodología de **Consumo** y/o **Árbol**. | Determina qué pantallas de entrada de datos están activas. |
| **Existencias disponibles** | Saldo inicial al inicio del período de pronóstico. | Se utiliza para calcular la brecha de adquisiciones. |
| **Envíos existentes** | Cantidades totales comprometidas para el período de pronóstico. | Reduce el hueco total a cubrir. |
| **MOS deseado** | Nivel de inventario objetivo (meses de existencias) al final del período. | Establece el objetivo para el cálculo de la brecha. |
| **Precio y tipo** | Precio de catálogo o precio personalizado por agente de adquisiciones. | Estima el costo total del déficit de adquisiciones. |

> [!CONSEJO]
> Realice siempre una **Sincronización de datos maestros** después de actualizar estas configuraciones para asegurarse de que se propaguen a las pantallas de Análisis.
 Configuración de la unidad de planificación

## Unidades de equivalencia
**Unidades de equivalencia (UE)** le permiten agregar datos de productos diferentes pero relacionados (por ejemplo, diferentes tamaños de envase o concentraciones). Esto permite una vista unificada del pronóstico en la sección **Informes y resultados**.

### Mapeo y conflictos
- **Asignaciones de nivel de reino:** Asignaciones universales proporcionadas por QAT.
- **Asignaciones de nivel de programa:** Anulaciones creadas por administradores de programa para necesidades específicas. Las asignaciones a nivel de programa siempre tienen prioridad.

### Ejemplos de equivalencia
Si un régimen de tratamiento requiere 14 comprimidos de un producto O 1 tubo de otro, ambos se pueden asignar a un UE denominado "Régimen de tratamiento".

| Unidad de Equivalencia | Unidad de Previsión | Factor de conversión |
| :--- | :--- | :---: |
| Tratamiento de régimen | 1 tableta del Producto A | 14 |
| Tratamiento de régimen | 1 tubo de Producto B | 1 |

### Gestión de UE
1. **Verificar datos maestros:** Busque UE existentes en **Realm Masters** > **Unidades de equivalencia**.
2. **Agregar UE personalizada:** Si no se encuentra, use **Administrar unidad de equivalencia** para crear una unidad específica del programa.
3. **Unidades de mapa:** Haga clic en **Agregar fila** en la pantalla principal para vincular sus unidades de pronóstico a la UE.
4. **Sincronización:** Haga clic en **Enviar** y realice una **Sincronización de datos maestros**.

### Uso en informes
- **Comparar y seleccionar:** Muestra la demanda total en UE en lugar de unidades individuales.
- **Monthly Forecast:** Aggregate disparate products into a single "total requirement" line.
- **Planificación de suministro:** Vea el consumo real y previsto en la UE para identificar tendencias de alto nivel.