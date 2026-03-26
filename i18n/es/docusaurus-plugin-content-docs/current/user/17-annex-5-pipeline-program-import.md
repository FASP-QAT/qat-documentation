---
id: annex-5-pipeline-program-import
title: "Anexo 5: Importación del programa PipeLine"
sidebar_label: "Anexo 5: Importación del programa PipeLine"
sidebar_position: 17
---
# Anexo 5: Importación del programa PipeLine

Este anexo detalla el proceso para migrar bases de datos heredadas **PipeLine** a QAT. Este es un proceso de tres etapas: conversión, carga y mapeo de datos.

> [!IMPORTANTE]
> **Requisitos previos:**
> - **Software:** Java JDK 1.8 o superior debe estar instalado en su máquina.
> - **Calidad de los datos:** Su base de datos de PipeLine (.accdb) no debe contener valores de inventario negativos. Asegúrese de que todos los datos de envío, stock y consumo estén finalizados antes de comenzar.

---

## Paso 1: Convertir .accdb a JSON
QAT requiere datos en formato JSON. Utilice la **Herramienta de conversión PipeLine** para esta conversión.

1. Vaya a **Administración de programas > Importación de programas PipeLine**.
2. Haga clic en el botón **Agregar (+)**, luego haga clic en el ícono **Descargar (↓)** en la parte superior derecha.
3. Seleccione su sistema operativo (Windows o Linux) y descargue el archivo `.zip`.
4. Extraiga y ejecute el convertidor (archivo ejecutable o `.jar`).
5. **En el Convertidor:**
   - **Fuente:** Busque y seleccione su archivo `.accdb`.
   - **Destino:** Seleccione la carpeta donde se debe guardar el archivo `.json` resultante.
   - Haga clic en **Convertir**. Aparecerá una notificación en caso de éxito.

---

## Paso 2: cargar en QAT
Una vez que tengas el archivo `.json`, deberás subirlo al servidor QAT.

1. En QAT, regrese a **Administración de programas > Importación de programas PipeLine**.
2. Haga clic en **Agregar (+)**.
3. Busque y seleccione su archivo `.json` convertido.
4. Haga clic en **Enviar**. Recibirá un mensaje de éxito y el nuevo programa aparecerá en la lista de importación.

---

## Paso 3: Asistente de asignación de datos
La etapa final implica mapear campos PipeLine heredados a los datos maestros a nivel de dominio de QAT.

Haga clic en la fila de su programa importado para iniciar el **Asistente de asignación**. Navegará por las siguientes pantallas:
1. **Información del Programa**: Mapa de Áreas Técnicas y Organizaciones.
2. **Unidades de planificación**: vincule los productos PipeLine a las unidades de planificación QAT.
3. **Fuentes de datos y financiación**: Mapear socios logísticos y financieros.
4. **Envíos e Inventario**: Revisión final de registros importados.

> [!CONSEJO]
> Utilice los botones **Siguiente** y **Atrás** para navegar. Si el sistema detecta inventario negativo durante el paso final, aparecerá una advertencia; debe resolver estas discrepancias en los datos de origen o durante el mapeo.

Una vez completado, el programa estará completamente activo en **Administración del programa > Actualizar información del programa**, donde se puede descargar para una planificación activa del suministro.