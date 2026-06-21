# Plan de mejora final

Un plan de mejora organiza los cambios que aun se podrian aplicar en una siguiente version del proyecto.

## Mejoras pendientes

| ID | Mejora propuesta | Por que es importante | Prioridad | Como se podria implementar | Tiempo estimado |
|---|---|---|---|---|---|
| MEJ-001 | Agregar validacion de formato para telefono con prefijo internacional | Mejora la calidad de los datos y reduce errores de ingreso | Media | Usar `pattern` en el input y validar con expresion regular en JavaScript | 1 hora |
| MEJ-002 | Mostrar mensaje de vacio cuando no hay visitantes en JSON Server | Mejora la experiencia para usuarios nuevos y evita confusiones | Baja | Añadir mensaje condicionado en `renderInterestChart` y en la tabla cuando no hay datos | 30 min |
| MEJ-003 | Añadir indicador de carga mientras se consultan los datos | Mejora la percepcion de respuesta durante fetch a JSON Server | Media | Usar un spinner de Bootstrap y mostrarlo entre la llamada `getVisitors` y `render()` | 1 hora |
| MEJ-004 | Soportar base path dinamico en `index.html` y rutas de recursos | Facilita el despliegue en subcarpetas o entornos no raiz | Media | Usar `import.meta.env.BASE_URL` en Vite o rutas relativas consistentes | 45 min |

## Reflexion individual o grupal

1. Que aprendiste al revisar bugs?
   - Aprendi a identificar problemas que no siempre se ven en la interfaz, como validaciones insuficientes, accesibilidad y dependencias de rutas.
2. Que aprendiste al recibir retroalimentacion?
   - Recibi retroalimentacion sobre la importancia de documentar cambios y priorizar correcciones que impactan datos y usabilidad.
3. Que mejora fue mas importante para el usuario?
   - La correccion que actualiza la tabla inmediatamente despues de guardar un visitante, porque hace que la aplicacion sea confiable.
4. Que harias diferente si tuvieras una semana mas?
   - Añadiria pruebas automatizadas para la logica de formulario y el filtrado, y mejoraria la experiencia movil con mensajes mas claros.
5. Como esta actividad te ayuda a entregar proyectos mas profesionales?
   - Enseña a combinar validacion, accesibilidad y documentacion de cambios, lo cual es clave para un desarrollo con calidad y facilidad de mantenimiento.
