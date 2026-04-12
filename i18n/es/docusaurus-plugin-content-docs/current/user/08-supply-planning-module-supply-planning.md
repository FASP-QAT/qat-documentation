---
id: supply-planning-module-supply-planning
title: "Supply Planning Module: Supply Planning"
sidebar_label: "Supply Planning Module: Supply Planning"
sidebar_position: 8
---
# Módulo de planificación de suministros: planificación de suministros

## Planificación del suministro: descripción general
La pantalla Planificación de suministros es el eje central donde el consumo, el inventario y los envíos convergen para los niveles de existencias del proyecto.

**Quién:** Administradores, revisores y usuarios del programa de ámbito/programa.
**Cuándo:** En cualquier momento (soporte sin conexión a través de PWA).

**Características clave de la interfaz:**
- **Pestañas Local vs. Servidor:** Edite el **Plan de suministro local**; el **Plan de suministro de servidores** es de solo lectura para fines de comparación.
- **Tabla interactiva:** Haga clic en las celdas para editar datos directamente o ver ventanas emergentes detalladas.
- **Leyenda dinámica:** alterna elementos de datos en el gráfico haciendo clic en los elementos de la leyenda.

### Cálculos del saldo de existencias
QAT utiliza una lógica estándar para calcular la progresión mensual:

| Componente | Descripción | Indicador visual |
| :--- | :--- | :--- |
| **Saldo de apertura** | Stock de inicio de mes. | **Negrita** = Real; Regular = Proyectado. |
| **Saldo final** | Stock de fin de mes. | **Negrita** = Real; Regular = Proyectado. |
| **Demanda insatisfecha** | Se necesita stock pero no está disponible. | Capta escenarios bursátiles "negativos". |

### Leyenda del estado del stock
El estado del stock está codificado por colores según el método de planificación:
- **Plan por MOS:** Transiciones: **Agotado (Rojo)** → **Falta de existencias (Amarillo)** → **Ideal (Verde)** → **Exceso de existencias (Azul)**.
- **Planificar por cantidad (mín./máx.):** Codificado por colores según las cantidades mínimas definidas por el usuario y máximas calculadas.

![Supply Planning Interface](/img/media/image153.png)
*Figura 1: Vista del plan por meses de existencias (MOS)*

## Planificación del suministro: consumo y envíos
La tabla de planificación de suministros permite un control granular de las transacciones.

### Consumo
- **Consumo previsto:** Texto en cursiva morada.
- **Consumo real:** Texto negro sin cursiva.

**Para editar el consumo:**
1. Haga clic en la celda del mes en la fila **Consumo**.
2. En la ventana emergente, edite las cantidades por región.
3. Haga clic en **Enviar** para actualizar el plan.

### Envíos
Los envíos se agregan de forma predeterminada. Haga clic en **+** junto a **Envíos** para expandirse a:
- **Sugerido:** Calculado automáticamente por QAT para mantener los niveles de stock.
- **Planificado, enviado, enviado, llegado, recibido:** Hitos rastreados.

#### Indicadores visuales
| Icono | Significado |
| :--- | :--- |
| **Triángulo Rojo** | Envío de emergencia (dentro del plazo de entrega). |
| **Icono de enlace** | Envío vinculado a ERP (solo lectura). |
| **Icono L** | Contratación Local. |
| **Célula verde** | Múltiples envíos en el mismo mes. |

#### Lógica de envíos sugeridos
QAT sugiere envíos para mantener el plan entre los niveles **Mínimo** y **Máximo**.
- **Activador:** Si el stock cae por debajo del mínimo durante 3 meses consecutivos.
- **Cantidad:** Calcula la cantidad necesaria para alcanzar el nivel **Máximo**.

**Para convertir una sugerencia en un pedido planificado:**
1. Haga clic en la celda de la fila **Sugerida**.
2. Actualice el estado y haga clic en **Enviar**.

![Shipment Details Pop-up](/img/media/image174.png)
*Figura 2: Edición de detalles del envío*

## Planificación de suministros: inventario y ajustes
El inventario y los ajustes se pueden gestionar directamente desde la tabla de planificación de suministros.

**Para agregar/editar registros:**
1. Haga clic en la celda del mes en la fila **Ajustes** o **Saldo final**.
2. En la ventana emergente, ajuste las cantidades por región.
3. **Recuento de inventario:** Al ingresar un recuento de inventario, el saldo final estará en **negrita** y se anularán las proyecciones.
4. **Ajustes:** Se requieren notas para todas las entradas de ajuste.

### Proyección de vencimientos
La fila **Existencias vencidas proyectadas** resalta las pérdidas potenciales.
- **Acción:** Haga clic en una celda para ver los **Detalles de vencimiento**.
- **Corrección:** Haga clic en el número de lote para ir al envío de origen y actualizar la fecha de vencimiento o la cantidad.
- **Libro mayor de lotes:** Haga clic en la celda **Cantidad vencida** para ver el historial completo mes a mes de ese lote.

![Expiry Management Pop-up](/img/media/image189.png)
*Figura 3: Detalles de vencimiento del lote*

## Planificación de escenarios
La planificación de escenarios permite a los usuarios simular cambios en su plan de suministro sin alterar la versión actual.

**Escenarios disponibles:**
- **Cambios de consumo:** Aumentar o disminuir el consumo previsto en un porcentaje fijo.
- **Phase In/Out:** Interpolación lineal entre dos valores de consumo durante un período definido.
- **Limpieza de envíos:** Elimina en masa los envíos no financiados, planificados o enviados que infrinjan los plazos de entrega.
- **Replanificar:** Genera automáticamente nuevos envíos para resolver violaciones del nivel de existencias.

**Para usar escenarios:**
1. Vaya a **Planificación de suministros** > **Planificación de escenarios**.
2. Seleccione un escenario del menú desplegable y configure los parámetros.
3. Haga clic en **Agregar** para visualizar el impacto.
4. Si está satisfecho, haga clic en **Enviar** para guardar el escenario como una nueva versión del plan de suministro.

![Scenario Planning interface](/img/media/image191.png)
*Figura 4: Comparación de escenarios*

## Informe del plan de suministro
El Informe del plan de suministro proporciona una visión integral del estado de las existencias en uno o varios programas.

### Vistas de informes
- **Programa único:** Vista detallada de un programa y unidad de planificación.
- **Multiprograma:** Agrega datos para la misma unidad de planificación en múltiples programas.
- **Unidad de equivalencia (UE):** Agrega diferentes unidades de planificación utilizando factores de conversión estandarizados (p. ej., meses de paciente con CYP o ARV).

**Navegación:** **Planificación de suministro** > **Informe del plan de suministro**.

**Características clave:**
- **Vistas tabulares y gráficas:** Los datos se presentan como un gráfico interactivo y una tabla de datos detallada.
- **Envíos desagregados:** Vea los detalles de los envíos individuales (Fuente de financiamiento, Estado, Agente de adquisiciones) directamente en la tabla.
- **Exportación:** Admite exportaciones de PDF y CSV con varias opciones de agregación.

![Supply Plan Report](/img/media/image193.png)
*Figura 5: Informe del plan de suministro del programa único*