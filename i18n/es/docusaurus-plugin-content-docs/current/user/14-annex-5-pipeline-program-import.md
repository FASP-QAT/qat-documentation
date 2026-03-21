---
id: annex-5-pipeline-program-import
title: "Anexo 5: Importación del programa PipeLine"
sidebar_label: "Anexo 5: Importación del programa PipeLine"
sidebar_position: 14
---
# Anexo 5: Importación del programa PipeLine

En ciertos casos, a los usuarios se les otorgará un conjunto especial de credenciales que pueden importar bases de datos de PipeLine si desean configurar su programa de esta manera (consulte [Configuración de un nuevo programa](#configuración-de-un-nuevo-programa) en el Anexo 1).

**Paso 1: convierta el archivo .accdb en un archivo JSON:**

_Acerca de la herramienta de conversión PipeLine Access DB a JSON:_ Dado que el sistema QAT solo puede importar datos de programas en formato JSON y las bases de datos de PipeLine están en formato .accdb, QAT tiene una herramienta descargable para convertir el archivo .accdb en un archivo JSON, permitiendo así la importación a QAT. Una vez instalada, esta herramienta no requiere acceso a Internet para ejecutarse. Además, esta herramienta permite al usuario elegir su idioma preferido.

1. Confirme que tiene los requisitos de configuración del sistema adecuados:

<!-- finalizar lista -->

- Sistema operativo: _Windows/Linux/Ubuntu_

- Otro software: _Java JDK 1.8 y superior._

<!-- finalizar lista -->

2. Confirme que sus datos de PipeLine estén completamente actualizados

<!-- finalizar lista -->

- La base de datos no puede tener valores de inventario negativos.

- Todos los datos de envío, stock, consumo deben estar actualizados.

<!-- finalizar lista -->

3. Vaya a "Administración de programas" y haga clic en "Importar programa PipeLine".

4. En la esquina superior derecha, haga clic en el botón "Agregar". Conducirá a una pantalla de entrada de archivos.

5. Haga clic en el botón de flecha hacia abajo en la esquina superior derecha.

6. Haga clic en "Descargar PipeLine Converter" en la pantalla, luego seleccione el sistema operativo de su computadora (Windows o Linux). El convertidor se descargará en un archivo zip.

7. Abra el archivo convertidor y ejecute la herramienta (archivo .exe / archivo ejecutable .java), se mostrará la siguiente pantalla:

![P7343#yIS1](/img/media/image406.png)

Figura 251: Mensaje de precaución durante la importación de PipeLine

![P7345#yIS1](/img/media/image407.jpg)

Figura 252: Pantalla de importación de PipeLine

8. Haga clic en el primer botón Examinar para buscar el archivo .accdb que desea importar.

![P7349#yIS1](/img/media/image408.png)

> Figura 253: Pantalla de importación de PipeLine – Explorar

9. Haga clic en el segundo botón Examinar para seleccionar la ubicación donde se almacenará el archivo convertido en la máquina local del usuario.

10. Haga clic en Convertir. Cuando el archivo se convierte a. formato json, recibirá la siguiente notificación:

![P7353#yIS1](/img/media/image409.jpg)

Figura 254: Pantalla Importación exitosa de PipeLine

**Paso 2: cargue el archivo JSON en QAT:**

11. En QAT, vaya al elemento de menú “Administración de programas” \> “Importación de programas PipeLine”.

12. Haga clic en el botón "Agregar" y se abrirá una nueva pantalla. Busque el archivo JSON convertido (del paso 1) en la máquina local. Haga clic en "Enviar".

13. Después de completar el proceso, el usuario recibirá un mensaje indicando que el programa se importó correctamente.

14. Este programa se mostrará como una fila en la lista de programas. Haga clic en esa fila para continuar con el Paso 3.

**Nota:** Mientras configura el programa, el usuario de QAT puede seleccionar varias áreas técnicas de la lista desplegable de áreas técnicas.

![P7363#yIS1](/img/media/image410.png)

Figura 255 Importación del programa Pipeline, múltiples áreas técnicas

**Paso 3: Configurar los datos para importarlos a QAT**

Después de importar datos de PipeLine, el usuario navegará a través de una serie de pantallas donde se le solicitará que ingrese datos. Después de editar datos en una pantalla, el usuario debe hacer clic en "Siguiente" para pasar a la siguiente pantalla de entrada de datos. Si es necesario, navegue a las pantallas anteriores haciendo clic en "Atrás". El usuario debe navegar por las siguientes pantallas: Información del programa, Unidades de planificación, Fuente de datos, Fuente de financiamiento, Agente de adquisiciones, Consumo, Inventario y Envíos.

![P7369#yIS1](/img/media/image411.jpg)

Figura 256: Importación de PipeLine - País

Cada una de estas pantallas principales tiene subpantallas donde los usuarios deben ingresar datos y asignar datos actuales de PipeLine a datos maestros a nivel de dominio QAT; por ejemplo, los productos PipeLine deben asignarse a las unidades de planificación de QAT. En el último paso (pantalla de Envío), se mostrará una ventana emergente si algún programa contiene inventario negativo.

![P7374#yIS1](/img/media/image412.jpg)

Figura 257: Importación de PipeLine: unidades de planificación

Después de que el archivo se importe correctamente a QAT:

1. Los usuarios pueden ir a "Gestión de programas".

2. Haga clic en el elemento del menú "Programas".

3. La lista de programas mostrará el programa importado.

4. Ahora el usuario puede "Descargar", "Importar" y "Exportar" ese programa.

<!-- finalizar lista -->