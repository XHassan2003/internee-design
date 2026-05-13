// Backend API base URL. Override in .env with VITE_API_URL=https://your-api.com
/// <reference types="vite/client" />

export const API_URL =
  (import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:5173";

export const AUTH_API = `${API_URL}/api/auth`;

type AuthResponse = {
  _id: string;
  fullName: string;
  email: string;
  token: string;
};

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${AUTH_API}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error((data as { message?: string }).message || `Request failed (${res.status})`);
  }
  return data as T;
}

export const authApi = {
  signup: (body: { fullName: string; email: string; password: string }) =>
    request<AuthResponse>("/signup", { method: "POST", body: JSON.stringify(body) }),
  login: (body: { email: string; password: string }) =>
    request<AuthResponse>("/login", { method: "POST", body: JSON.stringify(body) }),
  me: () =>
    request<{ _id: string; fullName: string; email: string }>("/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token") ?? ""}` },
    }),
};

export function saveSession(data: AuthResponse) {
  localStorage.setItem("token", data.token);
  localStorage.setItem(
    "user",
    JSON.stringify({ _id: data._id, fullName: data.fullName, email: data.email })
  );
}

export function clearSession() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

export function getCurrentUser() {
  const raw = localStorage.getItem("user");
  return raw ? (JSON.parse(raw) as { _id: string; fullName: string; email: string }) : null;
}
