---
id: annex-2-business-rules
title: "Annex 2: Business Rules"
sidebar_label: "Annex 2: Business Rules"
sidebar_position: 14
---
# Anexo 2: Reglas de Negocio

Este anexo documenta las fórmulas matemáticas básicas y las condiciones lógicas que impulsan los cálculos de QAT, las sugerencias de planificación de suministro y las comprobaciones de calidad de los datos.

## Módulo de planificación de suministros

### 1. Conceptos básicos del inventario
- **Saldo de apertura**: `Opening Balance(t) = Ending Balance(t-1)`. (El primer mes por defecto es 0).
- **Stock caducado**: `Sum(Ending Balance of batches expiring in month t)`.
- **Envíos totales**: `Sum(Quantities where Receive Date is in month t)`.
- **Inventario Proyectado**: `Opening Balance + Total Shipments ± Total Adjustments - Final Consumption - Expired Stock`.

### 2. Stock final y consumo
- **Stock final**: suma del stock reportado en todas las regiones.
- **Ajustes totales**: suma de ajustes manuales de regiones que *no* informaron un recuento de existencias.
- **Consumo final**:
  - *Si todas las regiones informaron datos reales:* `Sum(Actual Consumption)`.
  - *Si faltan datos reales en alguna región:* `MAX(Sum(Actual Consumption), Sum(Forecasted Consumption))`.

### 3. Parámetros del plan de suministro
- **AMC (Consumo Promedio Mensual)**: `[Sum(Full Demand in Past Window) + Sum(Full Demand in Future Window)] / Total Months`.
- **MOS mínimo**: `MAX(Program Min MOS, Realm Min MOS Guardrail)`.
- **MOS máx.**: `MIN(MAX(Min MOS + Reorder Interval, Realm Min Max Guardrail), Realm Max Max Guardrail)`.
- **Stock mínimo**: `AMC × Min MOS`.
- **Stock máximo**: `AMC × Max MOS`.
- **Saldo final**: 
  - Si todas las regiones informaron stock: `Final Stock`.
  - En caso contrario: `Projected Inventory + Auto Adjustment`.

### 4. Sugerencias de envío (Planificar por MOS)
QAT sugiere un envío cuando `MOS` para el mes actual y los dos meses siguientes sean inferiores a `Min MOS`.
- **Cantidad sugerida**: `Max Stock - Ending Balance + Unmet Demand`.

---

## Lógica de asignación de lotes (FEFO/LEFO)

### FEFO (primer vencimiento, primero en salir)
Se utiliza para consumir existencias según las fechas de vencimiento más tempranas.
1. Ordene todos los lotes por **Fecha de vencimiento** (asc).
2. Calcular **Consumo no asignado** (Consumo final - Ajustes).
3. Recorrer lotes:
   - `Batch Ending Balance = MAX(0, Batch Temp Balance - Unallocated Consumption)`.
   - Reste la cantidad consumida del total del grupo `Unallocated Consumption`.

### LEFO (Último vencimiento, primero en salir)
Se utiliza principalmente para distribuir ajustes negativos (pérdidas).
1. Ordene los lotes por **Fecha de vencimiento** (desc).
2. Deduzca primero las cantidades de los lotes más nuevos hasta que el ajuste se asigne por completo.

---

## Lógica de la lista de problemas QAT (QPL)

### Calidad de los datos
| Problema | Sugerencia | Lógica |
| :--- | :--- | :--- |
| **Datos reales faltantes** | Introduzca el consumo real. | Se marca si faltan datos reales durante más de 3 meses consecutivos. |
| **Falta inventario** | Introduzca el recuento de existencias. | Marcado si no se informa ningún recuento de existencias durante más de 3 meses consecutivos. |
| **Envíos anteriores** | Actualizar fecha de recepción. | Marcado si la fecha prevista de un envío es >14 días en el pasado. |

### Planificación de suministros
| Problema | Sugerencia | Lógica |
| :--- | :--- | :--- |
| **Falta pronóstico** | Ampliar el período de previsión. | Se marca si alguno de los próximos 18 meses carece de pronóstico. |
| **Pronóstico no dinámico** | Revisar la estacionalidad. | Marcado (para ARV/Malaria) si más de 4 meses consecutivos tienen valores idénticos. |
| **Infracción mínima/máxima** | Reevaluar el plan de suministro. | Se marca si MOS cae fuera de los parámetros mínimos/máximos dentro de los 18 meses. |

---

## Metodología de previsión

### Ajustes estadísticos
- **Tasa de desabastecimiento**: `(Stockout Days / Days in Month) × 100`.
- **Consumo Ajustado**: `(Actual Consumption / Reporting Rate) / (1 - Stockout Rate)`.
- **Interpolación**: `y = y0 + (x - x0) * (y1 - y0) / (x1 - x0)`. (Línea recta entre dos puntos conocidos).

### Métricas de error
- **WAPE**: `Sum(ABS(Actual - Forecast)) / Sum(Actual)`. (Calculado en un período de 6 meses).
- **RMSE**: `SQRT(Sum((Forecast - Actual)²) / N)`.
- **R²**: `1 - (SSR / SST)`. Mide qué tan cerca el modelo sigue los patrones históricos (0 a 1).

---

## Resolución de conflictos de versión
Al cargar una versión local, QAT compara:
- **Servidor (antiguo)**: la versión descargada originalmente.
- **Local**: tu versión editada.
- **Servidor (más reciente)**: versión actual en el servidor (puede que otros la hayan actualizado).

### Estados en conflicto
- **Verde (Local más reciente)**: los datos existen solo en la versión local o se modificaron solo localmente.
- **Azul (Último servidor)**: los datos se modificaron solo en el servidor desde que los descargó.
- **Amarillo (Conflicto)**: El *mismo* registro fue modificado tanto en la versión local como en la del servidor. Debes elegir cuál conservar.
- **Sin resaltar**: no se detectaron cambios entre las versiones.