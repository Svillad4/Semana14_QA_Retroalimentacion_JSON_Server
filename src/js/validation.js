export function validateVisitor(data) {
  const errors = {};

  if (!data.nombre || data.nombre.trim().length < 3) {
    errors.nombre = "El nombre debe tener al menos 3 caracteres.";
  }

  // RETO QA: verifica si esta validacion de correo es suficientemente estricta.
  if (!data.correo || !data.correo.includes("@")) {
    errors.correo = "Escribe un correo electronico valido.";
  }

  // RETO QA: revisa si la longitud esperada del telefono es adecuada para el caso colombiano.
  const onlyNumbers = data.telefono.replace(/\D/g, "");
  if (!onlyNumbers || onlyNumbers.length < 7) {
    errors.telefono = "El telefono debe tener suficientes digitos numericos.";
  }

  if (!data.interes) {
    errors.interes = "Selecciona un interes principal.";
  }

  // RETO QA: considera si el comentario deberia tener una longitud minima.
  if (!data.comentario) {
    errors.comentario = "Escribe un comentario breve.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function clearValidation(form) {
  form.querySelectorAll(".is-invalid").forEach((input) => input.classList.remove("is-invalid"));
  form.querySelectorAll(".invalid-feedback").forEach((feedback) => {
    feedback.textContent = "";
  });
}

export function showValidationErrors(errors) {
  const map = {
    nombre: ["nombre", "errorNombre"],
    correo: ["correo", "errorCorreo"],
    telefono: ["telefono", "errorTelefono"],
    interes: ["interes", "errorInteres"],
    comentario: ["comentario", "errorComentario"]
  };

  Object.entries(errors).forEach(([field, message]) => {
    const [inputId, errorId] = map[field];
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);

    if (input && error) {
      input.classList.add("is-invalid");
      error.textContent = message;
    }
  });
}
