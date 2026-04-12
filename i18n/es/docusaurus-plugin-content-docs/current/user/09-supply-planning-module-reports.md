---
id: supply-planning-module-reports
title: "Supply Planning Module: Reports"
sidebar_label: "Supply Planning Module: Reports"
sidebar_position: 9
---
# Módulo de Planificación de Suministros: Informes

Los informes QAT permiten al usuario extraer y ver sus datos de planificación de suministro en gráficos, tablas y otros formatos visuales. El usuario también podrá navegar, ordenar, filtrar y ver los datos para necesidades específicas. Los informes QAT producen visualizaciones y muestran datos de una manera que puede respaldar la toma de decisiones.

Los informes se dividen en **Informes globales** e **Informes específicos del programa**. Los informes específicos del programa se muestran tanto en línea como fuera de línea. Sin embargo, los informes globales se muestran solo en modo en línea y solo están disponibles para los usuarios globales, como el administrador del reino y el administrador de la aplicación.

**Nota:** Todos los informes QAT se pueden exportar a un archivo CSV de Excel y a formato PDF. Además, todos los gráficos permiten al usuario pasar el cursor sobre un objeto visual para obtener información sobre herramientas con más información.

## Lista de problemas QAT
La **Lista de problemas QAT** es una herramienta de control de calidad incorporada. Identifica inconsistencias en los datos y problemas de planificación de suministro que deben abordarse antes de poder finalizar y cargar un plan de suministro.

**Características clave:**
- **Recalcular:** Actualiza la lista después de realizar cambios en la entrada de datos.
- **Niveles de criticidad:** Los elementos se marcan como **Alto (rojo)**, **Medio (naranja)** o **Bajo (amarillo)**.
- **Pista de auditoría:** Haga clic derecho en un problema para ver notas internas y revisar el historial.

### Estados de problemas
| Estado | Definición | Acción requerida |
| :--- | :--- | :--- |
| **Abierto** | Estado predeterminado para problemas nuevos o marcados automáticamente. | Requiere entrada de datos o una nota. |
| **En cumplimiento** | Problema resuelto automáticamente mediante la entrada de datos. | Ninguno (cerrado automáticamente). |
| **Abordado** | Asunto reconocido con nota explicativa. | La nota es obligatoria. |
| **Resuelto** | El revisor confirma que el problema se soluciona de forma permanente. | Estado de solo revisor. |
| **Revisado** | El revisor ha inspeccionado la entrada. | Estado de solo revisor. |

### Problemas y soluciones comunes
- **Datos faltantes:** Faltan recuentos de inventario o consumo real en los últimos 3 meses. *Solución: Ingrese los datos faltantes.*
- **Brechas de pronóstico:** Valores de pronóstico faltantes dentro de los próximos 18 meses. *Solución: ingrese el pronóstico o ceros si se elimina gradualmente.*
- **Envíos anteriores:** Envíos con fechas de "Recibido" anteriores que todavía están marcados como "Pedido" o "Enviado". *Solución: Actualizar el estado a "Recibido".*
- **Infracciones de plazos de entrega:** Envíos que deberían haberse enviado antes de una fecha determinada. *Solución: Actualizar el estado o posponer la fecha de recepción.*
- **Infracciones de acciones:** El plan cae por debajo del mínimo o por encima de los parámetros máximos. *Solución: Ajustar envíos o consumos.*

![QAT Problem List Interface](/img/media/image198.png)
*Figura 1: Vista de alto nivel de la Lista de problemas*

## Catálogo de programas
El **Catálogo de programas** proporciona una lista estandarizada de todas las unidades de planificación y unidades de pronóstico dentro de un programa, incluidos sus atributos correspondientes.

**Navegación:** **Reportes** > **Catálogo de programas**.

## Informes de estado de existencias
Estos informes brindan diferentes perspectivas sobre la salud de las poblaciones a lo largo del tiempo.

### Estado del stock a lo largo del tiempo
Visualiza los niveles de inventario para una o más unidades de planificación durante un período definido.
- **Consejo:** Limite la selección a menos de 10 productos para mantener la claridad del gráfico.

### Matriz de estado de existencias
Proporciona un "mapa de calor" de alto nivel del estado del stock (MOS o Cantidad) en formato de cuadrícula.
- **Codificación visual:**
  - **Rojo:** Agotado.
  - **Naranja:** Falta de existencias.
  - **Verde:** Ideal.
  - **Amarillo:** Exceso de existencias.
  - **Gris:** N/A (Faltan datos).

### Instantánea del estado del stock
Una vista de un momento determinado (un solo mes) de todas las unidades de planificación de un programa.

### Instantánea del estado del stock (global)
Similar a Snapshot pero permite comparaciones entre programas (acceso a nivel de reino).

![Stock Status Matrix](/img/media/image209.png)
*Figura 2: Mapa de calor de la matriz de estado de existencias*

## Informes de consumo
Estos informes analizan cómo se utilizan los productos en comparación con las previsiones.

### Consumo (Global)
Visualiza el consumo en varios países para identificar tendencias regionales.

### Error de pronóstico (mensual y por unidad de planificación)
Analiza la precisión del pronóstico utilizando el método **Porcentaje de error promedio ponderado (WAPE)**.

**Métricas y características clave:**
- **Imágenes visuales:** Barras rojas (real), barras azules (pronóstico), línea verde (% de error).
- **Umbrales:** Los porcentajes de error que exceden el umbral establecido por el administrador del programa se resaltan en **Rojo**.
- **Consumo ajustado:** Alternar para ver el consumo ajustado por días de desabastecimiento.
- **Fórmula WAPE:** Mide la desviación absoluta del pronóstico respecto del real, ponderada por el volumen total.

![Forecast Error Report](/img/media/image213.png)
*Figura 3: Error de pronóstico (mensual) con umbral*

## Informes de envío
Estos informes rastrean el volumen de adquisiciones, los costos y la logística.

### Envío (global y descripción general)
Agrega datos de adquisiciones por fuente de financiamiento, agente y país.
- **Global:** Vista transversal de cantidades y costos.
- **Descripción general:** Resumen de alto nivel utilizando gráficos circulares para la distribución de fuentes de financiación.

### Detalles de envío y detalles de costos
Proporciona listas granulares de envíos con estado y desgloses financieros.
- **Tabla Resumen:** Costos por fuente de financiamiento para el período seleccionado.
- **Tabla detallada:** Desagregado por unidad de planificación y estado de envío.

### Informe de presupuesto
Realiza un seguimiento del gasto en comparación con presupuestos de programas predefinidos.
- **Imágenes:** Muestra los fondos asignados frente a los restantes.
- **Multiprograma:** Admite presupuestos compartidos entre múltiples programas.

### Plazo de entrega del agente de adquisiciones
Un informe de referencia que muestra los plazos de entrega establecidos para cada combinación de agente/unidad de planificación.

![Shipment Details Report](/img/media/image221.png)
*Figura 4: Seguimiento detallado del envío*

## Informes de inventario
Estos informes monitorean el stock disponible, los riesgos de vencimiento y la capacidad del almacén.

### Informe de vencimientos
Proporciona cantidades estimadas de productos que caducan en el futuro según el lote/vida útil.
- **Proyección:** Calcula el vencimiento en función de las proyecciones de stock y el consumo previsto.
- **Interactivo:** Haga clic en una cantidad vencida para abrir el **Libro mayor de lotes**.

### Costo del inventario
Calcula el valor estimado del stock disponible (real o proyectado) en función de los precios del catálogo.

### Turnos de inventario
Mide la velocidad de la cadena de suministro (efectividad de la gestión).
- **Giros planificados:** Giros objetivo según la configuración MIN e Intervalo de reorden.
- **Giros reales:** Calculados en base al stock y consumo promedio.
- **Interpretación:** Los giros altos generalmente indican una cadena de suministro más saludable y con mayor capacidad de respuesta.

### Informe de ajuste de existencias
Enumera todos los ajustes de stock ingresados manualmente.
> [!NOTA]
> Los ajustes calculados automáticamente (a partir de discrepancias en el recuento de inventario) no se muestran aquí.

### Capacidad de almacén
Muestra la utilización del volumen de almacenamiento (m³) por región o país. Requiere acceso a nivel de reino para la vista global.

![Warehouse Capacity Report](/img/media/image232.png)
*Figura 5: Utilización de la capacidad del almacén regional*