# Registro de bugs priorizado

Completa esta tabla durante la revision del proyecto. Registra minimo 6 hallazgos y corrige minimo 4.

## Escala de prioridad

| Prioridad | Significado |
|---|---|
| Alta | Impide que una funcion importante trabaje correctamente o afecta datos |
| Media | Afecta usabilidad, accesibilidad, claridad o experiencia del usuario |
| Baja | Es una mejora visual, organizativa o de detalle |

## Tabla de bugs

| ID | Titulo del bug | Area | Prioridad | Pasos para reproducir | Resultado esperado | Resultado obtenido | Evidencia | Correccion aplicada | Estado |
|---|---|---|---|---|---|---|---|---|---|
| BUG-001 | La tabla no se actualiza despues de guardar un visitante | JavaScript / Datos | Alta | Completar el formulario con datos validos y presionar Guardar visitante | El nuevo visitante debe aparecer inmediatamente en la tabla | El registro se guardaba en JSON Server, pero la tabla no se actualizaba hasta recargar la pagina | evidencias/antes/tabla-no-actualiza.png | Se agrego `await loadVisitors()` despues de `createVisitor(visitor)` | Corregido |
| BUG-002 | Validacion de correo muy permissiva | JavaScript / Validacion | Media | Ingresar correo con sintaxis incompleta como `usuario@` and enviar | El formulario debe rechazar correos invalidos | El formulario aceptaba correos incompletos y no mostraba error | evidencias/antes/correo-invalid.png | Se aplico expresion regular `^[^\s@]+@[^\s@]+\.[^\s@]+$` | Corregido |
| BUG-003 | Validacion de telefono insuficiente | JavaScript / Validacion | Media | Ingresar telefono con menos de 10 digitos y enviar formulario | El formulario debe requerir un telefono con al menos 10 digitos | El campo aceptaba telefonos muy cortos | evidencias/antes/telefono-corto.png | Se ajusto la validacion para requerir al menos 10 digitos numericos | Corregido |
| BUG-004 | Campo telefono no tenia label `for` y foco no era visible | HTML / Accesibilidad | Media | Revisar el form con lector de pantalla o navegar con teclado | Todas las etiquetas deben estar vinculadas y el foco debe ser visible | El label del telefono era un `span` y no habia foco visible en los campos | evidencias/antes/focus-invisible.png | Se corrigieron etiquetas `for` y se añadio estilo `:focus-visible` | Corregido |
| BUG-005 | Faltaban `aria-label` en busqueda/filtro y boton eliminar | HTML / Accesibilidad | Baja | Inspeccionar accesibilidad de inputs y botones | Los controles deben tener descripciones accesibles | Los campos de busqueda/filtro no tenian `aria-label` y el boton eliminar no era accesible | evidencias/antes/aria-falta.png | Se agregaron `aria-label` y descripcion accesible al boton eliminar | Corregido |
| BUG-006 | Recursos referenciados con rutas absolutas | HTML / Configuracion | Media | Abrir la app en un entorno local o con base path relativo | La imagen y el script deben cargar con rutas relativas | El HTML usaba `/src/js/app.js` y `/src/assets-feria.svg`, lo que puede fallar en rutas no raiz | evidencias/antes/rutas-relativas.png | Se cambiaron las referencias a `./src/js/app.js` y `./src/assets-feria.svg` | Corregido |

## Ejemplo de redaccion

| ID | Titulo del bug | Area | Prioridad | Pasos para reproducir | Resultado esperado | Resultado obtenido | Evidencia | Correccion aplicada | Estado |
|---|---|---|---|---|---|---|---|---|---|
| BUG-EJEMPLO | La tabla no se actualiza despues de guardar un visitante | JavaScript / Datos | Alta | Completar el formulario con datos validos y presionar Guardar visitante | El nuevo visitante debe aparecer inmediatamente en la tabla | El registro se guarda en JSON Server, pero la tabla no cambia hasta recargar | evidencias/antes/tabla-no-actualiza.png | Se llamo de nuevo la funcion de carga de visitantes despues del POST | Corregido |
