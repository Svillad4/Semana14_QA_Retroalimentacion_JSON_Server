# Comparacion antes y despues

Usa este documento para demostrar que aplicaste mejoras reales. Cada cambio debe tener evidencia.

| Mejora aplicada | Problema inicial | Evidencia antes | Correccion realizada | Evidencia despues | Como comprobaste que funciono |
|---|---|---|---|---|---|
| Actualizacion inmediata de tabla | La tabla no mostraba el nuevo registro despues de guardar | evidencias/antes/tabla-no-actualiza.png | Se invoco `loadVisitors()` luego de `createVisitor(visitor)` para recargar datos | evidencias/despues/tabla-actualizada.png | Se guardo un nuevo visitante y se verifico que aparecio sin recargar la pagina |
| Validacion de correo | El formulario aceptaba emails incompletos como `usuario@` | evidencias/antes/correo-invalid.png | Se aplico expresion regular de validacion de correo | evidencias/despues/correo-validado.png | Se intento enviar un correo invalido y se mostro la alerta de error |
| Validacion de telefono | El telefono aceptaba menos de 10 digitos numericos | evidencias/antes/telefono-corto.png | Se ajusto la validacion para requerir al menos 10 digitos | evidencias/despues/telefono-valido.png | Se ingreso un telefono con 9 digitos y la validacion lo rechazo |
| Accesibilidad de formulario | Las etiquetas no estaban correctamente asociadas y el foco no era visible | evidencias/antes/focus-invisible.png | Se corrigieron labels `for`, se agregó `aria-label` y estilos de `focus-visible` | evidencias/despues/accesibilidad-mejorada.png | Se navego con teclado y se verifico el enfoque visible y legible |

## Evidencia de consola

Incluye una captura en:

```text
evidencias/consola/
```

Explica aqui que muestra la consola:

- Antes de corregir: errores de ruta de recursos, advertencias de validacion y mensajes de carga incorrecta.
- Despues de corregir: sin errores criticos, solo mensajes esperados de carga o guardado.

## Evidencia de JSON Server

Incluye una captura en:

```text
evidencias/json-server/
```

Explica que datos se guardaron correctamente:

- Registro de prueba usado: {"nombre":"Prueba QA","correo":"qa@ejemplo.com","telefono":"3001234567","interes":"Talleres","comentario":"Registro de prueba QA"}
- URL revisada: http://localhost:3001/visitantes
- Resultado observado: el nuevo registro aparece en el listado y puede ser eliminado desde la interfaz.
