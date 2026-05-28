# Guia de pruebas manuales

Esta guia te ayuda a comprobar si el proyecto funciona correctamente.

## Prueba 1: ejecucion inicial

1. Abre la terminal.
2. Ejecuta `npm run start`.
3. Abre `http://localhost:5173/`.
4. Abre `http://localhost:3001/visitantes`.

Resultado esperado:

- El sitio carga sin errores.
- JSON Server muestra datos en formato JSON.

Evidencia sugerida:

- Captura del sitio abierto.
- Captura de JSON Server.

## Prueba 2: formulario vacio

1. Deja todos los campos vacios.
2. Presiona Guardar visitante.

Resultado esperado:

- El sistema no debe guardar.
- Deben aparecer mensajes de error claros.

## Prueba 3: correo incorrecto

1. Escribe un nombre valido.
2. Escribe un correo como `correo-invalido`.
3. Completa los demas campos.
4. Presiona Guardar visitante.

Resultado esperado:

- El sistema debe rechazar el correo.

## Prueba 4: telefono incompleto

1. Escribe un telefono como `12345`.
2. Completa los demas campos.
3. Presiona Guardar visitante.

Resultado esperado:

- El sistema debe rechazar el telefono.

## Prueba 5: registro correcto

1. Escribe datos validos.
2. Presiona Guardar visitante.
3. Revisa la tabla.
4. Revisa JSON Server.

Resultado esperado:

- El registro debe guardarse.
- La tabla debe actualizarse.
- El registro debe aparecer en `http://localhost:3001/visitantes`.

## Prueba 6: filtros y busqueda

1. Escribe parte de un nombre en el buscador.
2. Filtra por interes.

Resultado esperado:

- La tabla debe mostrar solo los registros que coincidan.

## Prueba 7: eliminacion

1. Presiona Eliminar en un registro.
2. Confirma la accion.
3. Revisa la tabla y JSON Server.

Resultado esperado:

- El registro debe desaparecer.
- JSON Server debe reflejar el cambio.

## Prueba 8: vista movil

1. Abre herramientas del desarrollador.
2. Activa vista responsive.
3. Prueba el sitio en ancho de celular.

Resultado esperado:

- El contenido debe poder leerse.
- El formulario debe ser usable.
- La tabla no debe romper completamente la interfaz.

## Prueba 9: consola

1. Abre la consola del navegador.
2. Interactua con el sitio.

Resultado esperado:

- No debe haber errores criticos en rojo.

## Prueba 10: accesibilidad basica

Revisa:

- labels asociados a inputs;
- imagenes con alt;
- foco visible al navegar con teclado;
- contraste legible;
- textos claros en botones.
