---
id: annex-3-user-role-matrix
title: "Anexo 3: Matriz de roles de usuario"
sidebar_label: "Anexo 3: Matriz de roles de usuario"
sidebar_position: 15
---
# Anexo 3: Matriz de roles de usuario

Esta matriz define los permisos para cada rol dentro de QAT. Los permisos se clasifican por área funcional.

## Descripciones de roles

| Rol | Descripción |
| :--- | :--- |
| **Administrador de la aplicación** | Configuración global del sistema, traducción de etiquetas y creación de roles. |
| **Administrador de reino** | Gestiona datos maestros específicos del ámbito (Productos, Áreas Técnicas, Organizaciones). |
| **Administrador del programa SP** | Gestiona la configuración a nivel de programa (plazos de entrega, unidades de planificación, presupuestos). |
| **Revisor SP** | Revisa y aprueba las versiones del plan de suministro. |
| **Usuario del programa SP** | Rol de entrada de datos primarios y planificación de suministros. |
| **Visor SP** | Acceso de solo lectura a informes, datos sin procesar o estado de revisión. |
| **Administrador de pronóstico** | Gestiona parámetros y plantillas específicos de pronóstico. |
| **Usuario de pronóstico** | Crea previsiones e introduce datos de consumo. |
| **Visor de pronóstico** | Acceso de solo lectura a árboles y resultados de pronóstico. |

---

## 1. Datos administrativos y maestros
| Función empresarial | Administrador de aplicaciones | Administrador de reino | Administrador del programa | Usuarios | Espectadores |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Traducciones de etiquetas y bases de datos | **X** | - | - | - | - |
| Administrar países/usuarios globales | **X** | - | - | - | - |
| Administrar Realm Masters (PU/FU/Org) | - | **X** | V | V | V |
| Administrar países/regiones del dominio | - | **X** | - | - | V |
| Gestionar agentes de adquisiciones | - | **X** | **X** | V | V |

**Leyenda:** **X** = Acceso completo | **V** = Ver sólo | **-** = Sin acceso

---

## 2. Gestión del programa
| Función empresarial | Administrador de reino | Administrador de SP | Administrador de FC | Usuarios |
| :--- | :---: | :---: | :---: | :---: |
| Configurar/Crear nuevo programa | **X** | - | **X** | - |
| Actualizar información y configuración del programa | **X** | **X** | **X** | - |
| Gestionar unidades de planificación de programas | **X** | **X** | **X** | - |
| Gestión Presupuestaria | **X** | **X** | - | V |
| Programas de Importación/Exportación | **X** | **X** | **X** | **X** |

---

## 3. Operaciones del plan de suministro
| Función empresarial | Administrador de reino | Administrador de SP | Usuario SP | Revisor de SP | Visor SP |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Entrada de datos (Cons./Inv./Envío) | **X** | **X** | **X** | - | V¹ |
| Gestionar planes/escenarios de suministro | **X** | **X** | **X** | **X** | V² |
| Cargar versiones | **X** | **X** | **X** | - | - |
| Revisar/aprobar versiones | - | - | - | **X** | - |
| Vinculación de envíos de ERP | **X** | **X** | **X** | - | - |

*¹ Visor SP: solo datos | ² SP Viewer - Datos/Revisión*

---

## 4. Operaciones de previsión
| Función empresarial | Administrador de reino | Administrador de FC | Usuario FC | Visor de FC |
| :--- | :---: | :---: | :---: | :---: |
| Entrada de datos de consumo | **X** | **X** | **X** | V |
| Administrar/Construir árboles | **X** | **X** | **X** | V |
| Extrapolación | **X** | **X** | **X** | V |
| Plantillas de uso/árbol | **X** | **X** | **X** | V |
| Importar desde Plan de Abastecimiento | **X** | **X** | **X** | - |

---

## 5. Acceso a informes
| Tipo de informe | Administradores | Usuarios | Espectadores |
| :--- | :---: | :---: | :---: |
| Plan de suministro/Estado de existencias | **X** | **X** | **X** |
| Error de consumo/previsión | **X** | **X** | **X** |
| Informes de envío/costos | **X** | **X** | **X** |
| Rotaciones/vencimientos de inventario | **X** | **X** | **X** |
| Capacidad de almacén | **X** | **X** | **X** |