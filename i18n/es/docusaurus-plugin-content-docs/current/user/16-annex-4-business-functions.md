---
id: annex-4-business-functions
title: "Annex 4: Business Functions"
sidebar_label: "Annex 4: Business Functions"
sidebar_position: 16
---
# Anexo 4: Funciones Empresariales

Las funciones comerciales son capacidades granulares asignadas a roles. Definen exactamente qué acciones puede realizar un usuario dentro del sistema.

## Verbos de permiso
Al configurar roles, los siguientes verbos determinan el nivel de acceso:
- **Lista**: Permite ver únicamente la tabla de datos; sin adiciones ni ediciones.
- **Agregar**: Permite crear nuevos registros.
- **Editar**: Permite actualizar registros existentes. (Nota: Las entidades no se pueden eliminar, solo deshabilitarlas).
- **Administrar**: un acceso directo para Listar + Agregar + Editar.

---

## 1. Traducciones y paneles de administración
| Categoría | Función empresarial | Descripción |
| :--- | :--- | :--- |
| **Traducciones** | Traducciones de etiquetas | Actualice las "Etiquetas estáticas" (encabezados de la interfaz de usuario) en todos los idiomas. |
| | Traducciones de bases de datos | Actualice las "Etiquetas dinámicas" (elementos desplegables) inmediatamente. |
| | Ver Traducciones | Acceso de solo lectura a todas las cadenas de UI. |
| **Paneles** | Panel de aplicaciones | Acceda a la descripción general del administrador global. |
| | Panel de control del reino | Acceda a la descripción general del administrador específico del dominio. |
| | Panel de control del programa | Acceda al panel operativo para programas específicos. |

---

## 2. Gestión de datos maestros
| Categoría | Función empresarial | Descripción |
| :--- | :--- | :--- |
| **Maestros de aplicaciones** | Administrar país/moneda | Configuración global de unidades geográficas y monetarias. |
| | Administrar usuario/rol | Crea usuarios y define sus permisos funcionales. |
| | Crear/Editar Reino | Configuración global de ámbitos administrativos. |
| **Maestros del Reino** | Administrar país/región del dominio | Asigne países globales a territorios de reinos específicos. |
| | Administrar fuente de financiamiento | Definir entidades que brindan apoyo financiero para los envíos. |
| | Administrar organización | Gestionar organismos asociados y gubernamentales dentro del ámbito. |
| | Administrar productos | Control total sobre las unidades de previsión, planificación y adquisiciones. |
| | Unidades de Equivalencia | Definir lógica de agregación para productos relacionados. |

---

## 3. Operaciones de programa y cadena de suministro
| Categoría | Función empresarial | Descripción |
| :--- | :--- | :--- |
| **Programas** | Programa de configuración | Crear y configurar nuevos programas de Planificación de Suministros o Previsión. |
| | Gestionar unidades de planificación | Configure plazos de entrega y niveles de existencias específicos del programa. |
| | Administrar presupuesto | Seguimiento y asignación de recursos financieros a nivel de programa. |
| **Control de versiones** | Cargar versión | Sincronice las ediciones del programa local con el servidor central. |
| | Revisar/Aprobar | Auditar y finalizar formalmente las presentaciones del plan de suministro. |
| | Reglas de notificación | Configure activadores de correo electrónico para eventos de carga/aprobación/rechazo. |
| **Envíos** | Vinculación ERP | Vincule los envíos QAT a sistemas de adquisiciones externos. |
| | Etiquetado manual | Clasifique los envíos para un seguimiento avanzado. |

---

## 4. Previsión e informes
| Categoría | Función empresarial | Descripción |
| :--- | :--- | :--- |
| **Metodologías** | Pronóstico de árboles | Construya y administre modelos de demanda escalonados (Agregación/Porcentaje/Número). |
| | Previsión de consumo | Acceda a las pantallas de ingreso, ajuste y extrapolación de datos. |
| | Plantillas | Administre plantillas de uso y árbol para una configuración rápida. |
| **Informes** | Ver informes | Acceda al conjunto completo de resultados analíticos. |
| | Lista de problemas QAT | Acceda y administre la calidad de los datos y los problemas de planificación. |
| | Informes globales | Vea datos agregados de todos los países y programas. |