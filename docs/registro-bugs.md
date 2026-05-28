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
| BUG-001 |  |  | Alta / Media / Baja |  |  |  | evidencias/antes/ |  | Pendiente / Corregido |
| BUG-002 |  |  | Alta / Media / Baja |  |  |  | evidencias/antes/ |  | Pendiente / Corregido |
| BUG-003 |  |  | Alta / Media / Baja |  |  |  | evidencias/antes/ |  | Pendiente / Corregido |
| BUG-004 |  |  | Alta / Media / Baja |  |  |  | evidencias/antes/ |  | Pendiente / Corregido |
| BUG-005 |  |  | Alta / Media / Baja |  |  |  | evidencias/antes/ |  | Pendiente / Corregido |
| BUG-006 |  |  | Alta / Media / Baja |  |  |  | evidencias/antes/ |  | Pendiente / Corregido |

## Ejemplo de redaccion

| ID | Titulo del bug | Area | Prioridad | Pasos para reproducir | Resultado esperado | Resultado obtenido | Evidencia | Correccion aplicada | Estado |
|---|---|---|---|---|---|---|---|---|---|
| BUG-EJEMPLO | La tabla no se actualiza despues de guardar un visitante | JavaScript / Datos | Alta | Completar el formulario con datos validos y presionar Guardar visitante | El nuevo visitante debe aparecer inmediatamente en la tabla | El registro se guarda en JSON Server, pero la tabla no cambia hasta recargar | evidencias/antes/tabla-no-actualiza.png | Se llamo de nuevo la funcion de carga de visitantes despues del POST | Corregido |
