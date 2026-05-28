# Guia rapida de JSON Server

JSON Server permite simular una base de datos local usando un archivo llamado `db.json`.

## 1. Donde estan los datos

Los datos estan en:

```text
db.json
```

Ejemplo:

```json
{
  "visitantes": [
    {
      "id": "VIS-001",
      "nombre": "Ana Martinez",
      "correo": "ana.martinez@example.com",
      "telefono": "3001234567",
      "interes": "Productos agricolas",
      "comentario": "Deseo recibir informacion.",
      "fecha": "2026-05-01T09:00:00.000Z"
    }
  ]
}
```

## 2. Como iniciar JSON Server

Puedes iniciarlo junto con Vite usando:

```bash
npm run start
```

O solo JSON Server:

```bash
npm run db
```

## 3. URL principal

Abre:

```text
http://localhost:3001/visitantes
```

Ahi veras todos los registros.

## 4. Operaciones que hace el proyecto

| Operacion | Metodo | URL |
|---|---|---|
| Listar visitantes | GET | `/visitantes` |
| Crear visitante | POST | `/visitantes` |
| Eliminar visitante | DELETE | `/visitantes/:id` |

## 5. Errores comunes

### Error: no se pueden cargar visitantes

Posibles causas:

- No ejecutaste `npm run start`.
- JSON Server no esta activo.
- El puerto 3001 esta ocupado.
- La URL en `src/js/api.js` esta mal escrita.

### Error: el registro no aparece

Revisa:

- si el formulario realmente envio el POST;
- si `db.json` se actualizo;
- si la tabla vuelve a cargar datos despues de guardar;
- si la consola muestra errores.

## 6. Como restaurar la base

Ejecuta:

```bash
npm run reset-db
```

Esto vuelve `db.json` al estado inicial usando `db.base.json`.
