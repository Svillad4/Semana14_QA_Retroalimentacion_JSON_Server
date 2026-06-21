# Checklist QA antes de entregar

Marca cada punto cuando lo hayas revisado.

## Instalacion y ejecucion

- [ .] Ejecute `npm install` sin errores.
- [.] Ejecute `npm run start` correctamente.
- [.] El sitio abre en `http://localhost:5173/`.
- [. ] JSON Server abre en `http://localhost:3001/visitantes`.

## Funcionalidad

- [ .] El formulario permite guardar registros validos.
- [ .] Los registros aparecen en `db.json` o en la URL de JSON Server.
- [. ] La tabla muestra los registros guardados.
- [ ] El boton actualizar funciona.
- [. ] El buscador funciona.
- [. ] El filtro por interes funciona.
- [. ] El grafico se actualiza con los datos.
- [. ] La eliminacion de registros funciona con confirmacion.

## Validaciones

- [ .] El nombre no permite valores vacios o demasiado cortos.
- [ .] El correo debe tener formato valido.
- [. ] El telefono exige una longitud adecuada.
- [. ] El interes principal es obligatorio.
- [. ] El comentario tiene una longitud minima razonable.
- [. ] Los mensajes de error son claros.

## Usabilidad y accesibilidad

- [ .] Los botones explican su accion.
- [ .] Los campos tienen etiquetas claras.
- [ .] Las imagenes tienen atributo `alt`.
- [.] El contraste permite leer comodamente.
- [ .] El sitio se entiende en celular.
- [ .] La navegacion con teclado conserva foco visible.
- [. ] La informacion esta organizada en secciones.

## Codigo y estructura

- [. ] El HTML usa estructura semantica.
- [ .] El CSS esta organizado.
- [. ] El JavaScript esta separado por responsabilidades.
- [. ] No hay codigo innecesario evidente.
- [. ] La consola no muestra errores criticos.
- [. ] Ejecute `npm run check` y revise los resultados.

## Evidencias y documentos

- [. ] Complete `docs/registro-bugs.md`.
- [. ] Complete `docs/co-evaluacion-pares.md`.
- [. ] Complete `docs/comparacion-antes-despues.md`.
- [. ] Complete `docs/plan-mejora.md`.
- [ ] Agregue capturas en `evidencias/antes/`.
- [ ] Agregue capturas en `evidencias/despues/`.
- [.] Agregue captura de consola en `evidencias/consola/`.
- [ .] Agregue captura de JSON Server en `evidencias/json-server/`.
