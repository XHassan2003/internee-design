import { useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/api";

type User = { _id: string; fullName: string; email: string } | null;

const AUTH_EVENT = "auth-changed";

export function emitAuthChange() {
  window.dispatchEvent(new Event(AUTH_EVENT));
}

export function useAuth() {
  const [user, setUser] = useState<User>(() => getCurrentUser());

  useEffect(() => {
    const sync = () => setUser(getCurrentUser());
    window.addEventListener(AUTH_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(AUTH_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return { user, isAuthenticated: !!user };
}
