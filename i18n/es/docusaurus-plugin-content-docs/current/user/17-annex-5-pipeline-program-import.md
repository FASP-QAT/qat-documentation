---
id: annex-5-pipeline-program-import
title: "Annex 5: PipeLine Program Import"
sidebar_label: "Annex 5: PipeLine Program Import"
sidebar_position: 17
---
# Anexo 5: Importación del programa PipeLine

En ciertos casos, a los usuarios se les otorgará un conjunto especial de credenciales que pueden importar bases de datos de PipeLine si desean configurar su programa de esta manera (consulte Configuración de un nuevo programa en el Anexo 1).

## Paso 1: Convierta el archivo .accdb en un archivo JSON:

*Acerca de la herramienta de conversión PipeLine Access DB a JSON:* Dado que el sistema QAT solo puede importar datos de programas en formato JSON y las bases de datos de PipeLine están en formato .accdb, QAT tiene una herramienta descargable para convertir el archivo .accdb en un archivo JSON, permitiendo así la importación a QAT. Una vez instalada, esta herramienta no requiere acceso a Internet para ejecutarse. Además, esta herramienta permite al usuario elegir su idioma preferido.

1. Confirme que tiene los requisitos de configuración del sistema adecuados:
   - Sistema operativo: *Windows/Linux/Ubuntu*
   - Otro software: *Java JDK 1.8 y superior.*
2. Confirme que sus datos de PipeLine estén completamente actualizados:
   - La base de datos no puede tener valores de inventario negativos.
   - Todos los datos de envío, stock, consumo deben estar actualizados.
3. Vaya a "Administración de programas" y haga clic en "Importar programa PipeLine".
4. En la esquina superior derecha, haga clic en el botón "Agregar". Conducirá a una pantalla de entrada de archivos.
5. Haga clic en el botón de flecha hacia abajo en la esquina superior derecha.
6. Haga clic en "Descargar PipeLine Converter" en la pantalla, luego seleccione el sistema operativo de su computadora (Windows o Linux). El convertidor se descargará en un archivo zip.
7. Abra el archivo convertidor y ejecute la herramienta (archivo .exe / archivo ejecutable .java), se mostrará la siguiente pantalla:

<div style={{textAlign: 'center'}}>

![Caution Message during PipeLine Import](/img/media/image406.png)

*Figure 251: Caution Message during PipeLine Import*

</div>

<div style={{textAlign: 'center'}}>

![PipeLine Import Screen](/img/media/image407.jpg)

*Figure 252: PipeLine Import Screen*

</div>

8. Haga clic en el primer botón Examinar para buscar el archivo .accdb que desea importar.

<div style={{textAlign: 'center'}}>

![PipeLine Import Screen – Browse](/img/media/image408.png)

*Figure 253: PipeLine Import Screen – Browse*

</div>

9. Haga clic en el segundo botón Examinar para seleccionar la ubicación donde se almacenará el archivo convertido en la máquina local del usuario.
10. Haga clic en Convertir. Cuando el archivo se convierta al formato .json, recibirá la siguiente notificación:

<div style={{textAlign: 'center'}}>

![Successful Import PipeLine Screen](/img/media/image409.jpg)

*Figure 254: Successful Import PipeLine Screen*

</div>

## Paso 2: Cargue el archivo JSON en QAT:

11. En QAT, vaya al elemento de menú "Administración de programas" &gt; "Importación de programas PipeLine".
12. Haga clic en el botón "Agregar" y se abrirá una nueva pantalla. Busque el archivo JSON convertido (del paso 1) en la máquina local. Haga clic en "Enviar".
13. Después de completar el proceso, el usuario recibirá un mensaje indicando que el programa se importó correctamente.
14. Este programa se mostrará como una fila en la lista de programas. Haga clic en esa fila para continuar con el Paso 3.

Nota: Mientras configura el programa, el usuario de QAT puede seleccionar varias áreas técnicas de la lista desplegable de áreas técnicas.

<div style={{textAlign: 'center'}}>

![PipeLine program import, multiple technical areas](/img/media/image410.png)

*Figure 255: PipeLine program import, multiple technical areas*

</div>

## Paso 3: Configurar datos para importar a QAT

Después de importar datos de PipeLine, el usuario navegará a través de una serie de pantallas donde se le solicitará que ingrese datos. Después de editar datos en una pantalla, el usuario debe hacer clic en "Siguiente" para pasar a la siguiente pantalla de entrada de datos. Si es necesario, navegue a las pantallas anteriores haciendo clic en "Atrás". El usuario debe navegar por las siguientes pantallas: Información del programa, Unidades de planificación, Fuente de datos, Fuente de financiamiento, Agente de adquisiciones, Consumo, Inventario y Envíos.

<div style={{textAlign: 'center'}}>

![PipeLine Import - Country](/img/media/image411.jpg)

*Figure 256: PipeLine Import - Country*

</div>

Cada una de estas pantallas principales tiene subpantallas donde los usuarios deben ingresar datos y asignar datos actuales de PipeLine a datos maestros a nivel de dominio QAT; por ejemplo, los productos PipeLine deben asignarse a las unidades de planificación de QAT. En el último paso (pantalla de Envío), se mostrará una ventana emergente si algún programa contiene inventario negativo.

<div style={{textAlign: 'center'}}>

![Pipeline Import - Planning Units](/img/media/image412.jpg)

*Figure 257: Pipeline Import - Planning Units*

</div>

## Después de que el archivo se importe correctamente a QAT:

1. Los usuarios pueden ir a "Gestión de programas".
2. Haga clic en el elemento del menú "Programas".
3. La lista de programas mostrará el programa importado.
4. Ahora el usuario puede "Descargar", "Importar" y "Exportar" ese programa.