const API_URL = "http://localhost:3001";

export async function getVisitors() {
  const response = await fetch(`${API_URL}/visitantes`);
  if (!response.ok) {
    throw new Error("No se pudieron cargar los visitantes desde JSON Server.");
  }
  return response.json();
}

export async function createVisitor(visitor) {
  const response = await fetch(`${API_URL}/visitantes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(visitor)
  });

  if (!response.ok) {
    throw new Error("No se pudo guardar el visitante.");
  }

  return response.json();
}

export async function deleteVisitor(id) {
  const response = await fetch(`${API_URL}/visitantes/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("No se pudo eliminar el registro.");
  }

  return true;
}
