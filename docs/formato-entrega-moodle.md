# Formato de entrega en Moodle

## Nombre sugerido del archivo ZIP

Usa este formato:

```text
Semana14_QA_ApellidoNombre.zip
```

Si trabajas en equipo:

```text
Semana14_QA_EquipoNombre.zip
```

## Antes de comprimir

Asegurate de incluir:

- `index.html`
- `package.json`
- `db.json`
- carpeta `src`
- carpeta `docs`
- carpeta `evidencias`
- `README.md`

No es necesario incluir la carpeta `node_modules`, porque pesa demasiado y se puede reconstruir con:

```bash
npm install
```

## Como comprimir correctamente

1. Cierra el servidor si esta activo.
2. Revisa que tus documentos esten completos.
3. Elimina `node_modules` si aparece dentro del proyecto.
4. Comprime la carpeta completa del proyecto.
5. Sube el ZIP a Moodle.

## Mensaje sugerido para Moodle

Puedes escribir:

> Entrego la actividad Semana 14 - QA, retroalimentacion entre pares y plan de mejora. El ZIP incluye el proyecto funcional con JSON Server, registro de bugs, coevaluacion, comparacion antes/despues, plan de mejora y evidencias de pruebas.
