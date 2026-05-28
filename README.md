# Semana 14 - QA, retroalimentacion entre pares y plan de mejora

## Proyecto: Feria Rural Digital con JSON Server

Bienvenido. Este paquete es una guia de clase y una actividad practica creada para que trabajes como si hicieras parte de un equipo real de desarrollo y aseguramiento de calidad.

En las actividades anteriores construiste, ajustaste o incrementaste una pagina web. En esta actividad vas a revisar una version funcional, detectar errores, documentarlos, recibir o entregar retroalimentacion a un companero, aplicar correcciones y preparar un plan de mejora.

La idea no es solamente que el proyecto abra en el navegador. La idea es que puedas demostrar que el sitio:

- funciona correctamente;
- guarda datos en una base de datos local simulada con JSON Server;
- tiene validaciones operativas;
- es claro para el usuario;
- cumple criterios basicos de accesibilidad;
- se ve bien en computador y celular;
- no presenta errores criticos en consola;
- tiene evidencias del antes y del despues;
- tiene un registro de bugs claro y priorizado.

---

## 1. Que vas a aprender

En esta clase vas a practicar cuatro habilidades importantes:

### 1.1 QA o aseguramiento de calidad

QA significa Quality Assurance o aseguramiento de calidad. En desarrollo de software, QA consiste en revisar si un producto cumple lo que promete. No se limita a mirar si el codigo esta bonito. Tambien implica probar formularios, botones, rutas, mensajes, almacenamiento de datos, diseno responsive, accesibilidad, rendimiento y experiencia de usuario.

En palabras sencillas: vas a comprobar si el proyecto realmente sirve para una persona que lo va a usar.

### 1.2 Registro de bugs

Un bug es un error, defecto o comportamiento inesperado del sistema. Por ejemplo:

- un formulario permite guardar datos vacios;
- un boton no hace nada;
- una tabla no se actualiza;
- una imagen no tiene texto alternativo;
- un mensaje de error no explica que debe corregir el usuario;
- la pagina se rompe en celular;
- la consola muestra errores;
- JSON Server no guarda los registros.

En esta actividad no basta con decir "hay un error". Debes documentarlo con claridad.

### 1.3 Retroalimentacion entre pares

La retroalimentacion entre pares consiste en revisar el trabajo de otro estudiante o equipo y entregar observaciones utiles. La idea no es criticar por criticar. La idea es ayudar a mejorar el proyecto con argumentos tecnicos.

Una buena retroalimentacion responde:

1. Que funciona bien.
2. Que problema encontraste.
3. Como lo probaste.
4. Que mejora recomiendas.
5. Por que esa mejora ayuda al usuario o al proyecto.

### 1.4 Plan de mejora

Un plan de mejora es una lista organizada de acciones futuras. No todo se puede corregir en una sola entrega. Por eso debes diferenciar entre:

- errores criticos que deben corregirse ahora;
- mejoras importantes que pueden quedar planeadas;
- detalles visuales que pueden resolverse despues.

---

## 2. Que contiene este proyecto

```text
semana14-qa-retroalimentacion-json-server/
│
├── index.html
├── package.json
├── db.json
├── db.base.json
├── README.md
│
├── src/
│   ├── assets-feria.svg
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── api.js
│       ├── app.js
│       ├── chart.js
│       ├── ui.js
│       └── validation.js
│
├── docs/
│   ├── checklist-qa.md
│   ├── co-evaluacion-pares.md
│   ├── comparacion-antes-despues.md
│   ├── formato-entrega-moodle.md
│   ├── guia-json-server.md
│   ├── guia-pruebas.md
│   ├── plan-mejora.md
│   ├── registro-bugs.md
│   └── rubrica.md
│
├── evidencias/
│   ├── antes/
│   ├── despues/
│   ├── consola/
│   ├── co-evaluacion/
│   └── json-server/
│
└── scripts/
    ├── qa-check.mjs
    └── reset-db.mjs
```

---

## 3. Librerias usadas

Este proyecto usa librerias porque la actividad busca acercarte a una forma mas real de trabajar proyectos web.

| Herramienta | Para que sirve |
|---|---|
| Vite | Ejecutar el proyecto web localmente con recarga rapida |
| JSON Server | Simular una API y una base de datos local usando `db.json` |
| Bootstrap | Mejorar la interfaz y facilitar diseno responsive |
| Bootstrap Icons | Agregar iconos visuales |
| SweetAlert2 | Mostrar alertas y confirmaciones mas profesionales |
| Chart.js | Crear graficos con los datos registrados |
| Concurrently | Ejecutar el servidor web y JSON Server al mismo tiempo |

---

## 4. Requisitos antes de iniciar

Necesitas tener instalado:

- Visual Studio Code.
- Node.js.
- Un navegador web como Chrome, Edge o Firefox.
- Conexion a internet solo para instalar dependencias la primera vez.

Para verificar si tienes Node.js, abre la terminal y escribe:

```bash
node -v
```

Luego verifica npm:

```bash
npm -v
```

Si ambos comandos muestran una version, puedes continuar.

---

## 5. Instalacion del proyecto

Abre esta carpeta en Visual Studio Code.

Luego abre la terminal integrada y ejecuta:

```bash
npm install
```

Ese comando descargara las librerias necesarias.

Cuando termine, ejecuta:

```bash
npm run start
```

Este comando inicia dos servicios al mismo tiempo:

- Vite para abrir el sitio web.
- JSON Server para simular la base de datos.

Normalmente veras algo parecido a esto:

```text
Local: http://localhost:5173/
JSON Server: http://localhost:3001/
```

Abre el sitio en:

```text
http://localhost:5173/
```

Y revisa la base de datos en:

```text
http://localhost:3001/visitantes
```

---

## 6. Como trabajar esta actividad

Sigue este orden. No saltes directamente a modificar codigo.

### Paso 1: ejecuta el proyecto sin cambiar nada

Primero abre el sitio y explora:

- el formulario;
- la tabla de registros;
- el filtro por interes;
- el buscador;
- el grafico;
- la eliminacion de registros;
- el diseno en pantalla pequena;
- la consola del navegador.

Toma capturas iniciales en la carpeta:

```text
evidencias/antes/
```

### Paso 2: prueba la conexion con JSON Server

Abre:

```text
http://localhost:3001/visitantes
```

Debes ver datos en formato JSON.

Luego registra un visitante desde el formulario y revisa si aparece en JSON Server.

Guarda una captura en:

```text
evidencias/json-server/
```

### Paso 3: realiza pruebas manuales

Prueba casos como estos:

| Caso | Que debes probar |
|---|---|
| Formulario vacio | El sistema debe impedir guardar datos incompletos |
| Correo incorrecto | El sistema debe mostrar error claro |
| Telefono incompleto | El sistema debe rechazar el dato |
| Comentario vacio o muy corto | El sistema debe pedir mas informacion |
| Registro correcto | El sistema debe guardar en JSON Server |
| Tabla de registros | Debe actualizarse despues de guardar |
| Buscador | Debe filtrar por nombre o interes |
| Vista movil | El diseno debe adaptarse |
| Consola | No debe mostrar errores criticos |

Usa el archivo:

```text
docs/guia-pruebas.md
```

### Paso 4: registra bugs

Cada error o mejora debe ir en:

```text
docs/registro-bugs.md
```

Debes registrar minimo 6 hallazgos.

De esos 6, debes corregir minimo 4.

Cada bug debe tener:

- ID.
- Titulo.
- Area.
- Prioridad.
- Pasos para reproducir.
- Resultado esperado.
- Resultado obtenido.
- Evidencia.
- Correccion aplicada.
- Estado.

### Paso 5: coevaluacion

Intercambia tu proyecto con un companero o equipo.

Tu companero revisa tu proyecto y tu revisas el de el.

Completa:

```text
docs/co-evaluacion-pares.md
```

La retroalimentacion debe ser respetuosa, clara y tecnica.

### Paso 6: corrige el proyecto

Aplica mejoras en HTML, CSS y JavaScript.

Algunas pistas de mejora posibles:

- asociar correctamente todos los `label` con sus campos;
- fortalecer la validacion del telefono;
- fortalecer la validacion del correo;
- validar longitud minima del comentario;
- hacer que la tabla se actualice despues de guardar;
- mejorar el estado de foco para navegacion con teclado;
- mejorar contraste y legibilidad;
- mejorar el responsive;
- mejorar mensajes de error;
- revisar consola y errores;
- organizar comentarios y codigo.

No debes limitarte a cambiar colores. Las mejoras deben tener una justificacion.

### Paso 7: compara antes y despues

Completa:

```text
docs/comparacion-antes-despues.md
```

Incluye capturas en:

```text
evidencias/antes/
evidencias/despues/
evidencias/consola/
```

### Paso 8: crea tu plan de mejora

Completa:

```text
docs/plan-mejora.md
```

Este plan debe incluir mejoras que no alcanzaste a implementar, pero que serian utiles para una siguiente version.

### Paso 9: ejecuta la revision automatica

Cuando ya hayas corregido, ejecuta:

```bash
npm run check
```

Este comando revisa algunos puntos basicos. No reemplaza la evaluacion, pero te ayuda a detectar pendientes.

### Paso 10: prepara la entrega

Antes de subir a Moodle, revisa:

```text
docs/checklist-qa.md
```

Y sigue:

```text
docs/formato-entrega-moodle.md
```

---

## 7. Entregable final

Debes entregar en Moodle una carpeta comprimida `.zip` o un enlace de repositorio, segun indique tu docente.

Tu entrega debe incluir:

1. Proyecto actualizado y funcional.
2. `db.json` con registros de prueba.
3. `docs/registro-bugs.md` completo.
4. `docs/co-evaluacion-pares.md` completo.
5. `docs/comparacion-antes-despues.md` completo.
6. `docs/plan-mejora.md` completo.
7. `docs/checklist-qa.md` marcado.
8. Evidencias en capturas.
9. Consola sin errores criticos.
10. README conservado o mejorado con instrucciones del proyecto.

---

## 8. Reglas importantes

- No borres el README.
- No borres la carpeta `docs`.
- No borres la carpeta `evidencias`.
- No entregues solo capturas: debes entregar tambien el proyecto.
- No copies correcciones sin entenderlas.
- Cada bug corregido debe tener evidencia del antes y del despues.
- Si trabajas en equipo, todos deben poder explicar las correcciones.

---

## 9. Como restaurar la base de datos

Si dañas los datos de prueba o quieres volver al estado inicial, ejecuta:

```bash
npm run reset-db
```

Esto copia el contenido de `db.base.json` hacia `db.json`.

---

## 10. Preguntas para reflexionar

Al finalizar, responde estas preguntas en tu informe o en el plan de mejora:

1. Cual fue el error mas importante que encontraste?
2. Como comprobaste que era un error real?
3. Que cambio aplicaste para corregirlo?
4. Como sabes que la correccion funciono?
5. Que recomendacion recibiste de tu companero?
6. Que mejora dejarias para una siguiente version?
7. Que aprendiste sobre usabilidad, accesibilidad y QA?

---

## 11. Consejo final

Un buen desarrollador no solo escribe codigo. Tambien prueba, escucha retroalimentacion, documenta errores, corrige con criterio y explica por que sus decisiones mejoran el producto.

Ese es el objetivo de esta actividad.
