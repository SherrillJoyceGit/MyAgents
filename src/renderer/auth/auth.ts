const AUTH_KEY = 'myagents.login';
const AUTH_VALUE = 'ok';

export function isLoggedIn(): boolean {
  try {
    return window.localStorage.getItem(AUTH_KEY) === AUTH_VALUE;
  } catch {
    return false;
  }
}

export function login(username: string, password: string): boolean {
  if (username !== 'admin' || password !== '123456') return false;
  try {
    window.localStorage.setItem(AUTH_KEY, AUTH_VALUE);
  } catch {
    // Keep the in-memory login flow usable when storage is unavailable.
  }
  return true;
}

export function logout(): void {
  try {
    window.localStorage.removeItem(AUTH_KEY);
  } catch {
    // Nothing else to clear for the static gate.
  }
}
