---
id: overview
title: "Descripción general"
sidebar_label: "Descripción general"
sidebar_position: 4
---
# Descripción general

## Introducción

El programa Cadena de Suministro de Salud Global – Gestión de Adquisiciones y Suministros (GHSC-PSM) es un proyecto oficial de la Agencia de los Estados Unidos para el Desarrollo Internacional (USAID). Implementado por Chemonics International y los miembros de su consorcio, GHSC-PSM garantiza el suministro ininterrumpido de productos sanitarios para apoyar las iniciativas de salud pública financiadas por el gobierno de EE. UU. en todo el mundo.

La iniciativa de modernización de la herramienta de Previsión y Planificación de Suministros (FASP) contó con el apoyo del Plan de Emergencia del Presidente de los Estados Unidos para el Alivio del SIDA (PEPFAR), la Iniciativa del Presidente de los Estados Unidos contra la Malaria (PMI), el programa de Planificación Familiar y Salud Reproductiva (FP/RH) de la USAID y el programa de Salud Materna e Infantil (MCH) de la USAID.

### Antecedentes y objetivos
Proyectos anteriores financiados por USAID, como Supply Chain Management Systems (SCMS) y DELIVER, implementaron con éxito un conjunto de herramientas FASP. Sin embargo, estas herramientas a menudo estaban aisladas, tenían interfaces de usuario inconsistentes y requerían el intercambio de datos manual.

El objetivo principal de esta iniciativa fue construir una plataforma FASP de próxima generación que sea:
- **Escalable y modular**: construido sobre una arquitectura moderna e independiente del sistema operativo.
- **Basado en web con capacidades sin conexión**: garantiza la accesibilidad incluso en entornos de baja conectividad.
- **Interoperable**: Diseñado para compartir datos sin problemas entre las partes interesadas y los sistemas de salud pública.
- **Centrado en el usuario**: centrado en la usabilidad y la automatización para impulsar la visibilidad de los datos de un extremo a otro y la toma de decisiones basada en evidencia.

## Previsión versus planificación de suministro

- **Previsión**: Estimación o predicción de las cantidades de productos que consumirán los clientes o consumidores en un período futuro.
- **Planificación de Suministro**: El componente de la gestión de la cadena de suministro enfocado en cumplir con los requisitos del plan de demanda. El objetivo es equilibrar la oferta y la demanda para cumplir con los objetivos financieros y de prestación de servicios del programa de salud.

## ¿Qué es QAT y qué puede hacer por usted?

La herramienta de análisis de cuantificación (QAT) es una solución modernizada para la previsión y la planificación del suministro dirigidas por los países. QAT aprovecha tecnologías avanzadas para mejorar la funcionalidad de herramientas heredadas como PipeLine y Quantimed al proporcionar:
- **Previsión flexible**: Estructuras de árbol personalizables y metodologías de extrapolación avanzadas (ARIMA, Holt-Winters, etc.).
- **Planificación de escenarios**: herramientas sólidas para modelar y comparar diferentes escenarios de la cadena de suministro.
- **Funcionalidad sin conexión**: entrada y administración de datos confiables sin una conexión de red constante.
- **Estandarización**: gestión de datos maestros para impulsar la coherencia en todos los programas.

### Funciones principales
- **Predicción**: pronósticos multimétodo, comparación de resultados visuales y herramientas de consenso de las partes interesadas.
- **Monitoreo**: Seguimiento en tiempo real de los saldos de stock, parámetros de stock mínimo/máximo e identificación automatizada de problemas (por ejemplo, déficits pendientes).
- **Planificación de adquisiciones**: cálculos de déficit, seguimiento de acciones basado en plazos de entrega y modelado de costos estimados de envío/flete.

## ¿Quién debería utilizar QAT?

QAT permite a los gerentes de programas locales hacerse cargo de sus propios pronósticos y planificación de adquisiciones. Si bien los administradores de programas son los usuarios principales, el sistema proporciona información vital para los encargados de formular políticas, los directores de país, los compradores y los donantes.

| Término | Definición |
| :--- | :--- |
| **Unidad de informes alternativa (ARU)** | El producto y la unidad en la que se reportan los datos de un país (consumo o existencias). Esto puede diferir de la unidad de planificación. QAT permite a los usuarios definir una ARU y un factor de conversión (multiplicador) para la unidad de planificación. Por ejemplo, si la unidad de planificación es un frasco de 30 tabletas y el inventario se reporta en cajas de 20 frascos, el multiplicador es 20. Consulte la Sección 4.A3 (Unidad de informe alternativa) para obtener más detalles. |
| **Consumo Promedio Mensual (CMM)** | Un valor dinámico calculado mes a mes en función del uso promedio del producto durante un período específico. De forma predeterminada, QAT calcula el AMC utilizando los últimos tres meses, el mes actual y los dos meses siguientes. Los datos mensuales faltantes se tratan como "nulos" en lugar de cero. Los administradores pueden ajustar la ventana de cálculo hasta 12 meses en el pasado y en el futuro.<br/>![AMC Formula](/img/media/image6.png) |
| **Fuente de datos** | El origen de los datos ingresados ​​en QAT. Las fuentes de datos deben aplicarse a todos los registros transaccionales (Consumo, Inventario, Ajustes y Envíos). La selección depende del tipo de fuente de datos específico del registro. |
| **Planificación de recursos empresariales (ERP)** | QAT está diseñado para interactuar con varios sistemas de gestión de adquisiciones (ERP). Actualmente, una interfaz con ARTMIS permite la importación directa de datos de productos y envíos de USAID, lo que reduce los esfuerzos de planificación manual al actualizar automáticamente las fechas y estados de entrega. |
| **Fuente de financiación** | Cualquier institución o entidad financiera que proporcione instalaciones o financiación para el programa. A cada envío se le debe asignar una fuente de financiamiento. |
| **Plazos de entrega** | Los plazos de entrega, asignados a los estados de planificación de suministro, se ingresan por producto, agente de adquisiciones o programa. Los cálculos incluyen:<br/>- **Planificado hasta enviado**: tiempo desde la identificación de una necesidad hasta el ingreso al sistema de adquisiciones.<br/>- **Enviado hasta aprobado**: tiempo desde el ingreso hasta la aprobación de la adquisición.<br/>- **Aprobado hasta enviado**: Tiempo desde la aprobación hasta el envío del proveedor.<br/>- **Enviado hasta llegada (marítimo/aéreo)**: Tiempo de tránsito hasta el puerto de entrada.<br/>- **Llegado a Recibido**: Tiempo para el despacho de aduana y entrega al destino final. |
| **Niveles de stock mínimos y máximos** | **El nivel de stock mínimo** (en meses) se determina por unidad de planificación a nivel de programa. <br/>![Min Stock Formula](/img/media/image7.png)<br/>**El nivel de stock máximo** se calcula dinámicamente como el nivel de stock mínimo más el intervalo de reorden.<br/>![Max Stock Formula](/img/media/image8.png) |
| **Cantidad mínima de pedido (MOQ)** | El número mínimo de unidades en las que se debe pedir un producto. |
| **Meses de existencias (MOS)** | Una medida de los niveles de inventario en relación con el consumo, conceptualmente similar a PipeLine pero que utiliza la metodología QAT AMC actualizada.<br/>![MOS Formula](/img/media/image9.png) |
| **Plan por MOS** | Más adecuado para productos de alto consumo con vencimientos mínimos donde los envíos reemplazan principalmente el stock consumido. La planificación se centra en mantener los parámetros de existencias mensuales. Consulte la Sección 4.A2 para la configuración. |
| **Planificar por cantidad** | Más adecuado para productos de bajo consumo con altas tasas de caducidad (por ejemplo, medicamentos de emergencia). La planificación se centra en mantener una cantidad fija de existencias (por ejemplo, 2 unidades por instalación) en lugar de meses de existencias. Consulte la Sección 4.A2 para la configuración. |
| **Intervalo de reorden** | El número de meses definido por el usuario entre envíos (el valor predeterminado es 1 mes). Este valor se utiliza para calcular los niveles máximos de stock tanto para MOS como para la planificación basada en cantidad. |
| **Estados de envío** | Seguimiento de un envío a lo largo de su ciclo de vida a través de nueve estados: sugerido (advertencia automática), planificado (confirmado para proyección), enviado (ordenado), aprobado, enviado, llegado (al puerto), recibido (en destino), cancelado y en espera. |
| **Demanda insatisfecha** | Cantidades que se habrían consumido si hubiera existencias disponibles. QAT rastrea la demanda insatisfecha por separado cuando:<br/>a) El consumo previsto excede el stock disponible.<br/>b) El consumo real incluye períodos de desabastecimiento.<br/>c) Un ajuste negativo

El pago excede el saldo final proyectado. |
| **Volumetría** | Característica que permite a los usuarios definir volúmenes de productos para estimar el tamaño físico total y los requisitos logísticos de los pedidos. |

| Grupo de usuarios | Propósito |
| :--- | :--- |
| **Planificadores de suministros / Gerentes de programas** | Gestione las adquisiciones a través de múltiples fuentes de financiación y agentes de adquisiciones. QAT proporciona visibilidad del estado de las existencias a largo plazo y reduce el riesgo de desequilibrios de existencias. |
| **Planificadores de previsión/demanda** | Calcule la demanda utilizando plantillas flexibles y validaciones integradas. Compare metodologías y seleccione pronósticos de productos finales utilizando visualizaciones integradas. |
| **Responsables/directores de políticas** | Compare visualmente pronósticos y analice las implicaciones de restricciones presupuestarias o nuevos objetivos de programas. |
| **Compradores y Donantes** | Obtenga una visibilidad clara del estado actual del suministro y de los requisitos de adquisición futuros. |

*Tabla 1: Usuarios recomendados de QAT y propósito*

## Conceptos y términos importantes de QAT

### Términos transversales

| Término | Definición |
| :--- | :--- |
| **Unidad de previsión** | La unidad base utilizada para un período de pronóstico específico (por ejemplo, una tableta, un mililitro). |
| **Datos maestros (sincronización)** | Un conjunto estandarizado de datos (por ejemplo, listas de productos, nombres de financiadores) compartido en todo el sistema. Los usuarios pueden solicitar actualizaciones a través de un mecanismo de emisión de tickets. QAT sincroniza los datos maestros durante el inicio de sesión o los activadores manuales. Tenga en cuenta que los conjuntos de datos completos de pronóstico o plan de suministro deben descargarse para uso local. |
| **Unidad de Planificación** | El producto previsto en QAT, descrito hasta el nivel de embalaje primario (por ejemplo, un frasco de 30 comprimidos). |
| **Programas** | Similar a una "base de datos de planes de suministro" en herramientas heredadas. Cada programa consta de un país, áreas técnicas específicas, una región (por ejemplo, a nivel nacional) y una organización (por ejemplo, el Ministerio de Salud). |
| **Reino** | Una subdivisión de alto nivel en QAT (por ejemplo, Salud Global) regida por sus propios datos maestros. |
| **Región** | Niveles subnacionales utilizados para estructurar los datos del programa. Para definir una región, se deben ingresar datos tanto de consumo como de inventario en ese nivel para la agregación nacional. |
| **Área Técnica** | Sinónimo de grupos de productos básicos (p. ej., ARV, malaria, planificación familiar) utilizados para categorizar programas. |
| **Entradas** | El mecanismo para informar errores o solicitar actualizaciones de datos maestros. Los tickets los resuelven los administradores del sistema. |
| **Funciones de usuario** | Asignaciones dedicadas que definen el acceso a datos y permisos funcionales dentro de la aplicación. |

### Términos de planificación de suministro

### Términos de previsión

| Término | Definición |
| :--- | :--- |
| **Pronóstico basado en el consumo** | Una predicción de la demanda futura basada en datos históricos de consumo real utilizando metodologías de extrapolación lineal y no lineal. |
| **Pronóstico de árbol** | Se utilizan estructuras de pronóstico flexibles para convertir diversos tipos de datos (demográficos, morbilidad, servicios) en necesidades de productos básicos mediante el modelado de rutas de servicios. |
| **Plantilla de árbol** | Árboles de pronóstico predefinidos que se pueden descargar y personalizar según el contexto de un usuario específico. |
| **Plantilla de uso** | Tasas de uso predefinidas para productos específicos que se pueden aplicar de manera consistente en diferentes árboles y programas. |
| **Uso continuo y discreto** | Al definir las tasas de uso, los usuarios pueden elegir entre aplicaciones **Continuas** (continuas) o **Discretas** (período específico o de un solo uso). |

### Acrónimos

Para obtener una lista completa de acrónimos utilizados en la aplicación y la documentación QAT, consulte la página [Acrónimos](18-acronyms.md).