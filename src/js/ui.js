import Swal from "sweetalert2";

export function getFormData(form) {
  const formData = new FormData(form);
  return {
    nombre: String(formData.get("nombre") || "").trim(),
    correo: String(formData.get("correo") || "").trim(),
    telefono: String(formData.get("telefono") || "").trim(),
    interes: String(formData.get("interes") || "").trim(),
    comentario: String(formData.get("comentario") || "").trim()
  };
}

export function renderVisitorsTable(visitors, onDelete) {
  const table = document.getElementById("visitorsTable");
  const emptyState = document.getElementById("emptyState");

  if (!table || !emptyState) return;

  if (!visitors.length) {
    table.innerHTML = "";
    emptyState.classList.remove("d-none");
    return;
  }

  emptyState.classList.add("d-none");

  table.innerHTML = visitors
    .map(
      (visitor) => `
      <tr>
        <td>
          <strong>${escapeHtml(visitor.nombre)}</strong><br>
          <small class="text-muted">${escapeHtml(visitor.correo)}</small>
        </td>
        <td>${escapeHtml(visitor.interes)}</td>
        <td>${escapeHtml(visitor.telefono)}</td>
        <td>
          <button class="btn btn-outline-danger btn-sm" data-delete-id="${visitor.id}" aria-label="Eliminar registro de ${escapeHtml(visitor.nombre)}">
            <i class="bi bi-trash"></i> Eliminar
          </button>
        </td>
      </tr>
    `
    )
    .join("");

  table.querySelectorAll("[data-delete-id]").forEach((button) => {
    button.addEventListener("click", () => onDelete(button.dataset.deleteId));
  });
}

export async function confirmDelete() {
  // RETO QA: revisa si el texto de confirmacion ayuda a prevenir errores del usuario.
  const result = await Swal.fire({
    title: "Eliminar registro",
    text: "Esta accion no se puede deshacer.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar"
  });

  return result.isConfirmed;
}

export function showSuccess(message) {
  Swal.fire({
    icon: "success",
    title: "Operacion completada",
    text: message,
    timer: 1800,
    showConfirmButton: false
  });
}

export function showError(message) {
  Swal.fire({
    icon: "error",
    title: "Hay un problema",
    text: message
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
