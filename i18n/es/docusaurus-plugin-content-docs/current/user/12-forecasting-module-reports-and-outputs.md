---
id: forecasting-module-reports-and-outputs
title: "Módulo de Previsión: Informes y Resultados"
sidebar_label: "Módulo de Previsión: Informes y Resultados"
sidebar_position: 12
---
# Módulo de Previsión: Informes y Resultados

Después de definir sus metodologías y parámetros, la etapa final es comparar los modelos disponibles, seleccionar el pronóstico más preciso y revisar los requisitos de adquisición resultantes.

## Comparar y seleccionar
**Navegación:** **Árbol de pronóstico** > **Comparar y seleccionar**.

Esta pantalla le permite comparar múltiples pronósticos (basados ​​en el consumo versus basados ​​en árboles) uno al lado del otro para hacer su selección final.

### Métricas clave para la selección
- **Error de pronóstico (%):** Utiliza el cálculo **WAPE**. Un resaltado verde indica el modelo con el error histórico más bajo.
- **Comparar con el consumo:** Para pronósticos de árboles, QAT marca si la producción es significativamente mayor o menor que las tendencias históricas de consumo. El texto rojo indica que la variación excede los umbrales establecidos.
- **Auditoría visual:** Utilice el **Gráfico** para ver la tendencia de los diferentes pronósticos en comparación con los datos reales históricos. La línea en negrita representa el modelo seleccionado actualmente.

### Reglas de selección
- **Una Región a la Vez:** La selección se realiza por Unidad de Planificación y Región.
- **Múltiples árboles:** Puede seleccionar y agregar múltiples pronósticos de árboles (por ejemplo, para diferentes grupos de pacientes).
- **Exclusividad mutua:** No puede combinar un pronóstico basado en el consumo con un pronóstico basado en árboles para la misma región/unidad.

> [!CONSEJO]
> Utilice el botón **Mostrar datos** debajo del gráfico para ver los datos mensuales en formato tabular. Los valores en cursiva violeta indican el período de pronóstico oficial.

---

## Pronóstico mensual
**Navegación:** **Árbol de pronóstico** > **Pronóstico mensual**.

Utilice este informe para verificar sus pronósticos finales seleccionados en conjunto. Es la herramienta principal para un control final de cordura antes de finalizar la cuantificación.

- **Agregación:** Suma automáticamente los pronósticos regionales en un total nacional.
- **Unidades de equivalencia (UE):** Vea el pronóstico en UE (por ejemplo, "Meses de tratamiento estándar") para comparar diferentes variantes de productos.
- **Vistas de análisis:** Alterne entre unidades de planificación y unidades de pronóstico, o agregue datos por año calendario/fiscal.

---

## Resumen de pronóstico
**Navegación:** **Árbol de pronóstico** > **Resumen de pronóstico**.

Esta pantalla proporciona dos vistas de alto nivel de los resultados de su cuantificación durante todo el período de pronóstico.

### 1. Vista regional
- Proporciona una descripción general estilo hoja de cálculo de todas las unidades de planificación en todas las regiones.
- Puede actualizar directamente los métodos de pronóstico o agregar notas de justificación en esta tabla.

### 2. Visión Nacional (Análisis de Brechas)
Esta vista proporciona un análisis de excedente/brecha de adquisiciones de alto nivel basado en su pronóstico y los datos de suministro existentes.

> [!ADVERTENCIA]
> Esta es una herramienta de alto nivel. Para la planificación granular del suministro (programación de envíos, seguimiento de la vida útil), debe importar este pronóstico al módulo **Planificación de suministro**.

#### Fórmulas y lógica
QAT utiliza la siguiente lógica para estimar las necesidades de adquisiciones:

1. **Stock Proyectado** = (Stock Inicial + Envíos Existentes) - Cantidad Pronosticada
2. **Stock deseado** = (Cantidad prevista × Meses de stock deseados) / Meses del período
3. **Brecha de adquisiciones** = Existencias proyectadas - Existencias deseadas

#### Estimación de costos
Si existe una brecha, QAT estima los costos en función de los precios unitarios definidos y los porcentajes de flete:
- **Costo del producto** = Brecha de adquisiciones × Precio unitario
- **Costo de flete** = Costo del producto × % de flete
- **Costo total** = Costo del producto + Costo de flete