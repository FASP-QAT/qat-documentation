---
id: annex-1-application-realm-administrator-manual
title: "Annex 1: Application & Realm Administrator Manual"
sidebar_label: "Annex 1: Application & Realm Administrator Manual"
sidebar_position: 13
---
# Anexo 1: Manual del administrador de aplicaciones y dominios

## Introducción
Este anexo proporciona orientación sobre las funcionalidades administrativas restringidas a **Administradores de aplicaciones** y **Administradores de dominio**.
- **Application Masters**: configuración global que afecta a todos los ámbitos (solo administrador de aplicaciones).
- **Realm Level Masters**: datos específicos de un reino, que afectan sus programas y planes de suministro (App y Realm Admins).
- **Program Level Masters**: Configuraciones administradas por los administradores del programa para programas específicos.

## Paneles administrativos
Los administradores ven mosaicos únicos en sus paneles para administrar datos globales y a nivel de dominio.

| Azulejo | Nivel de administrador | Función |
| :--- | :--- | :--- |
| **Usuario del programa** | Aplicación y reino | Administrar roles y permisos de usuarios. |
| **Reinos totales** | Aplicación | Cree y configure dominios de aplicaciones. |
| **Idioma** | Aplicación | Administre los idiomas de interfaz de usuario admitidos. |
| **País** | Reino | Asigne países globales a ámbitos específicos. |
| **Área Técnica** | Reino | Definir áreas de enfoque del programa (por ejemplo, VIH, malaria). |
| **Organización** | Reino | Gestionar entidades asociadas y gubernamentales. |
| **Programa total** | Reino | Descripción general y actualización masiva de la información del programa. |
| **Programa de configuración** | Reino | Asistente principal para incorporar nuevos programas. |

---

## Gestión de datos maestros
QAT utiliza una jerarquía de tres niveles para la gestión de datos.

### 1. Maestros de aplicaciones (global)
Estas configuraciones se aplican a toda la aplicación en todos los ámbitos.

#### Gestión de traducción
- **Traducción de bases de datos**: se utiliza para "Etiquetas dinámicas" (elementos de la lista desplegable). Se requiere inglés; Se recomiendan otros.
- **Traducción de etiquetas**: se utiliza para "Etiquetas estáticas" (encabezados de tablas, elementos de menú). Los cambios se reflejan inmediatamente.

#### Entidades Globales (CRUD)
Las siguientes entidades siguen un flujo de trabajo estándar **Lista > Agregar (+) > Actualizar**:
- **País**: gestiona la lista global de países. Nota: Utilice códigos ISO de 3 letras (p. ej., AGO) y 2 letras (p. ej., AO).
- **Moneda**: gestiona las tasas de conversión. Utilice "Sincronizar en línea" para actualizar automáticamente las tarifas con respecto al USD.
- **Idioma**: activar/desactivar los idiomas de la interfaz de usuario (inglés, francés, español, portugués).
- **Dimensión y Unidad**: Defina valores medibles (Peso, Volumen) y unidades (mL, gm, Caja).
- **Período de uso**: Defina intervalos de tiempo (mes, semana) utilizados en los cálculos de pronóstico.

#### Gestión de usuarios y roles
- **Usuarios**: agregue nuevos usuarios por correo electrónico, asignándoles un rol, ámbito e idioma principales.
- **Roles**: los administradores pueden modificar las reglas comerciales asociadas con los roles. 
  > [!NOTA]
  > Para obtener un desglose completo de los permisos, consulte el [Anexo 3: Matriz de roles de usuario](15-annex-3-user-role-matrix.md).

---

### 2. Realm Masters (lógica empresarial)
La configuración del ámbito rige los productos, los financiadores y la lógica de adquisición específicos para un grupo de programas.

#### Catálogo de productos
La jerarquía de productos es fundamental para las operaciones QAT:
1. **Unidad de pronóstico (FU)**: la unidad base (por ejemplo, 1 tableta).
2. **Unidad de planificación (PU)**: el paquete dispensador (p. ej., frasco de 30 tabletas). 
   - *Mapeo:* Muchas PU pueden asignarse a una FU.
   - *Volumetría:* Los administradores deben asignar datos de volumen/peso a las PU para los cálculos de envío.
3. **Unidad de adquisiciones**: descripción a nivel de artículo que incluye datos específicos del fabricante (GTIN, SKU) y plazos de entrega.
4. **Categoría de unidad de planificación**: agrupaciones amplias (por ejemplo, "productos farmacéuticos ARV").
5. **Categoría de seguimiento**: grupos específicos (por ejemplo, "Primera línea para adultos").

#### Unidades de equivalencia (UE)
Las UE permiten agregar productos dispares para la presentación de informes (por ejemplo, convertir botellas y tubos en "Meses de tratamiento estándar").
- **Lógica:** Las asignaciones a nivel de dominio se aplican a todos los programas a menos que las anule una asignación específica del programa.

#### Logística y socios
- **Agentes de adquisiciones**: administre plazos de entrega, códigos de colores e integración de catálogos.
- **Fuentes de Financiamiento**: Definir las entidades que pagan por los envíos.
- **Organizaciones**: Gestionar los organismos específicos (MINSA, ONG) que ejecutan programas.
- **Métodos de Pronóstico**: Definir las metodologías disponibles (ARIMA, TES, etc.) para el reino.

---

## Configuración de un nuevo programa
Los administradores inician programas a través del asistente **Programa de instalación**.

### Flujo de trabajo:
1. **Elija Reino y País**: Asigne el programa a su contexto clínico/geográfico.
2. **Definir área técnica**: seleccione una o más áreas (p. ej., VIH + TB).
3. **Seleccione Organización y Regiones**: Determine el organismo gestor y el alcance geográfico (nacional o subnacional).
4. **Configurar datos del programa**:
   - **Para planificación de suministros**: establezca plazos de entrega, niveles de existencias y unidades de planificación.
   - **Para pronósticos**: establezca las fechas de inicio/finalización del pronóstico y los períodos de revisión.
5. **Enviar**: el programa ahora está disponible para que lo administren los administradores del programa.

---

## Herramientas de utilidad
### Restablecer el QPL
Los administradores pueden restablecer de forma masiva la **Lista de problemas QAT (QPL)** para reabrir los problemas "abordados" para un nuevo ciclo de revisión.
- **Uso:** Normalmente se realiza al inicio de un nuevo período de envío de versiones aprobadas.