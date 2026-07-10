const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000";

export async function apiGet<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Erro ao conectar com a API.");
  }

  return response.json();
}