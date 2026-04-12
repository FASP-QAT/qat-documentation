---
id: forecasting-module-forecasting
title: "Forecasting Module: Forecasting"
sidebar_label: "Forecasting Module: Forecasting"
sidebar_position: 11
---
# Módulo de pronóstico: pronóstico

## Previsiones de consumo
Los pronósticos basados en el consumo utilizan datos históricos para proyectar la demanda futura. Este método es ideal para programas estables con al menos 24 meses de datos de consumo mensual confiables.

**El flujo de trabajo:**
1. **Importar/Entrada:** Traiga datos reales históricos desde el módulo de planificación de suministros o introdúzcalos manualmente.
2. **Ajustar:** Cuenta para informes insuficientes, desabastecimientos y puntos de datos faltantes.
3. **Extrapolar:** Aplicar modelos estadísticos para proyectar el "Consumo Ajustado" hacia el futuro.

### Entrada e importación de datos
Puede completar datos históricos mediante dos métodos:

#### Método 1: Importar desde el plan de suministro
**Navegación:** **Pronóstico basado en el consumo** > **Importar desde plan de suministro QAT**.
- **Mapeo:** Vincular unidades del plan de suministro a unidades de pronóstico. Puede utilizar la opción "No importar todo lo no asignado" para conjuntos de datos grandes.
- **División regional:** Seleccione qué regiones importar y el porcentaje de consumo atribuir al pronóstico.
- **Manejo de conflictos:** Los datos que ya están presentes están resaltados en **Amarillo**. La importación anulará los registros existentes.

#### Método 2: Entrada manual de datos
**Navegación:** **Pronóstico basado en el consumo** > **Ingreso de datos y ajustes**.
- **Interfaz:** Seleccione el programa y el período de revisión (predeterminado: 36 meses posteriores).
- **Expansión:** Expande las filas para profundizar en los datos regionales.
- **Conversión de unidades:** Utilice el enlace "cambiar" para alternar la entrada entre Unidades de planificación (PU) o Unidades de previsión (FU).

![Data Entry Interface](/img/media/image242.png)
*Figura 1: Tabla de ingreso de datos de consumo histórico*

### Ajustes estadísticos
Los datos sin procesar deben limpiarse para crear una serie confiable de "Consumo ajustado". QAT maneja tres tipos de ajustes:

#### 1. Subdeclaración
Si los informes son inferiores al 100%, QAT infla el consumo proporcionalmente, asumiendo que las instalaciones que no informan consumen al mismo ritmo que las que sí lo hacen.

#### 2. Desabastecimientos
QAT ajusta el consumo por los días sin existencias para estimar la demanda real.
- **Tasa de desabastecimiento** = `Stocked Out (Days)` / `Days in Month`
- **Consumo Ajustado** = `Actual Consumption` / `Reporting Rate` / (1 - `Stock Out Rate`)

#### 3. Valores faltantes (interpolación)
El botón **Interpolar** llena los espacios en sus datos usando una fórmula de línea recta entre los valores conocidos más cercanos.
> [!NOTA]
> QAT no interpolará los meses en los que el consumo real sea cero (ya que este puede ser un punto de datos válido). Sólo llena las celdas en blanco "faltantes".

### Conceptos de extrapolación
QAT ofrece varios modelos estadísticos para proyectar la demanda futura. Elija un modelo según su disponibilidad de datos y patrones de consumo:

- **Modelos simples (datos de más de 3 meses):**
  - **Promedio móvil:** Ideal para datos estables sin tendencias fuertes ni estacionalidad.
  - **Semipromedios/Regresión lineal:** Lo mejor para identificar un crecimiento o declive constante (tendencias).
- **Modelos avanzados:**
  - **ARIMA (datos de más de 13 meses):** Modelo flexible que tiene en cuenta tendencias y ciclos estacionales.
  - **Triple suavizado exponencial (datos de más de 24 meses):** Lo mejor para datos complejos con tendencias fuertes y estacionalidad anual.

### Interpretación de errores de pronóstico
QAT calcula varias métricas de error para ayudarle a seleccionar la mejor opción.

| Métrica | Definición | Mejor utilizado para... |
| :--- | :--- | :--- |
| **MAPA** | Error porcentual absoluto medio. | Comparar la precisión en diferentes escalas de datos. |
| **WAPE** | Error porcentual absoluto ponderado. | Conjuntos de datos con valores bajos o intermitentes. |
| **RMSE** | Error cuadrático medio. | Destacar y penalizar los grandes valores atípicos. |
| **R²** | Coeficiente de correlación. | Medir qué tan bien se ajusta el modelo a los patrones históricos. |

---

## Pronósticos de árboles
El pronóstico basado en árboles es un método flexible que se utiliza cuando el consumo histórico no está disponible o no es confiable. Admite metodologías de **morbilidad, servicios y demografía** al permitirle crear un "árbol" lógico de factores que resultan en la demanda de productos.

### Construcción y gestión de árboles
**Navegación:** **Árbol de pronóstico** > **Administrar árbol**.

Puedes gestionar tus árboles a través de las siguientes acciones:
- **Dibuja el tuyo propio:** Comienza desde un lienzo en blanco.
- **Plantilla:** Utilice una estructura de árbol predefinida (por ejemplo, para programas de salud específicos).
- **Duplicar:** Copia una estructura de árbol existente a otro programa (requiere descargar ambos programas).
- **Tabla de árbol:** Acceda a una vista similar a una hoja de cálculo para editar valores de nodos en masa sin cambiar la estructura.

> [!NOTA]
> Los árboles se guardan localmente primero. Debe **Cargar versión** para guardar su trabajo en el servidor.

### Tipos de nodos y jerarquía
Un árbol se construye de arriba hacia abajo utilizando tipos de nodos específicos. Cada árbol debe terminar en **Unidades de planificación** para generar un pronóstico.

| Tipo de nodo | Función | Niños permitidos | Opciones avanzadas |
| :--- | :--- | :--- | :---: |
| **∑ Agregación** | Resume a todos los niños. | Agregación, Número. | - |
| **# Número** | Un valor fijo (por ejemplo, población total). | Porcentaje, FU. | ⇅, Transferir |
| **% Porcentaje** | Un porcentaje del valor principal. | Porcentaje, FU. | ⇅, Transferir |
| **Embudo** | Suma valores de nodos de origen vinculados. | Porcentaje, FU. | - |
| **FU (Unidad de Pronóstico)** | Parámetros de uso (Continuo/Discreto). | Unidad de Planificación. | ⇅, Retraso |
| **PU (Unidad de Planificación)** | La salida del producto final. | Ninguno. | Anular |

#### Acciones de nodo
- **Eliminar:** Elimina el nodo y todos sus hijos.
- **Copiar/Mover:** Reubica una rama en un árbol o padre diferente.
- **Agregar plantilla de rama:** Inserta una rama predefinida (por ejemplo, un régimen de medicamento estándar).
- **Contraer/Expandir:** Simplifica la vista visual del árbol.

### Atributos del nodo
Cada nodo tiene campos editables que definen su valor y comportamiento:

- **# Número de Nodo:** Defina la **Unidad de Nodo** (pacientes, personas, etc.) y su **Valor** para un mes de inicio específico.
- **% Nodo Porcentaje:** Defina el porcentaje del valor principal. QAT usa esto para calcular el valor absoluto del nodo.
- **Nodo Unidad de Pronóstico (FU):**
  - **Tipo de Uso:** 
    - **Continuo:** Uso diario/semanal (p. ej., una pastilla cada día).
    - **Discreto:** Uso ocasional (p. ej., 5 viales por ciclo de tratamiento).
  - **Retraso:** Retrasa el inicio del uso del producto en relación con el controlador principal (por ejemplo, el uso del producto comienza 2 meses después del diagnóstico).
- **Nodo de unidad de planificación (PU):** El valor predeterminado es la conversión del sistema, pero se puede anular manualmente si es necesario.

### Cambios dinámicos (modelado y transferencias)
Los árboles no son estáticos; Los valores pueden cambiar con el tiempo para reflejar el crecimiento o las transiciones del programa.

#### 1. Tipos de modelado
| Tipo | Comportamiento | Mejor utilizado para... |
| :--- | :--- | :--- |
| **Lineal (#)** | Suma/resta un número fijo cada mes. | Crecimiento local sostenido. |
| **Lineal (%)** | Suma/resta un % fijo del valor *inicial*. | Tasas de crecimiento consistentes. |
| **Exponencial (%)** | Multiplica el mes *anterior* por un porcentaje. | Crecimiento compuesto. |
| **Lineal (puntos porcentuales)** | Ajusta el valor de un nodo porcentual (por ejemplo, 30 % -> 31 %). | Cambios en la cuota de mercado. |

#### 2. Transferencias
Las transferencias vinculan dos nodos del mismo nivel (para nodos de Número) o del mismo padre (para nodos de Porcentaje). A medida que el nodo "Fuente" disminuye, el nodo "Destino" aumenta proporcionalmente. Esto es esencial para las transiciones de régimen.

#### 3. Estacionalidad y cambios manuales
Puede refinar aún más los datos mensuales haciendo clic en **Mostrar datos mensuales**:
- **Índice de estacionalidad:** Ingrese un porcentaje (por ejemplo, `20%` para un aumento del 20 % con respecto al valor inicial) para reflejar la demanda cíclica.
- **Cambio manual:** Anula el valor de un mes específico para eventos únicos (por ejemplo, una campaña masiva de drogas).

### Calculadora de modelado
Si no conoce la tarifa mensual, use la **Calculadora de modelos** (⇅) para obtenerla:
- **Valor final:** Ingrese su valor inicial, fecha objetivo y valor objetivo final. QAT calcula la tarifa mensual.
- **Objetivo anual:** Introduzca un objetivo acumulativo anual (año real + objetivo). QAT interpola una transición mensual fluida para evitar patrones "escalonados".

### Técnicas Avanzadas
#### Retraso en el uso
Disponible en **Nodos FU**. Utilice el campo **Retraso** para retrasar el uso del producto en relación con el controlador principal. 
- *Ejemplo:* Si los pacientes son diagnosticados en el mes 1 pero comienzan el tratamiento en el mes 3, ingrese un desfase de `2`.

#### Métodos de cálculo (uso discreto)
- **Todo en el primer mes:** Carga anticipadamente la cantidad total del curso de tratamiento en el primer mes del paciente. (Predeterminado)
- **Mes a mes:** Distribuye el uso durante la duración del curso (p. ej., 1 pastilla al mes durante 6 meses).

#### Nodos de embudo
Los nodos de embudo le permiten agregar nodos de origen de diferentes ramas (o incluso diferentes árboles) en una única secuencia para realizar cálculos adicionales.
- *Caso de uso:* Diferentes grupos demográficos (adultos, niños) que utilizan los mismos instrumentos de prueba de carga viral.

### Validaciones y plantillas
#### Validaciones
- **Validación de modelos:** Gráficos que muestran cómo sus factores determinantes (población, pacientes) cambian con el tiempo.
- **Validación del producto:** Vista agregada de todas las unidades de planificación en el árbol para realizar comprobaciones de coherencia.

#### Plantillas
- **Plantillas de árboles:** Estructuras globales prediseñadas para programas estándar (por ejemplo, árboles de morbilidad de malaria).
- **Plantillas de sucursales:** Ramas reutilizables específicas del régimen (p. ej., "Régimen estándar de primera línea para adultos").
- **Plantillas de uso:** Ajustes preestablecidos para nodos FU (parámetros discretos/continuos) para garantizar la coherencia en todo el equipo.