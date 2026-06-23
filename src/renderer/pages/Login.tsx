import { useState, type FormEvent } from 'react';
import { LockKeyhole } from 'lucide-react';

import { login } from '@/auth/auth';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!login(username.trim(), password)) {
      setError('账号或密码不正确');
      return;
    }
    setError('');
    onLogin();
  };

  return (
    <main className="flex h-screen items-center justify-center bg-[var(--paper)] px-6 text-[var(--ink)]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg border border-[var(--line)] bg-[var(--paper-elevated)] p-6 shadow-sm"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-warm-subtle)] text-[var(--accent-warm)]">
            <LockKeyhole className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-[var(--ink)]">登录 MyAgents</h1>
            <p className="text-sm text-[var(--ink-muted)]">请输入账号密码继续使用客户端</p>
          </div>
        </div>

        <label className="mb-4 block">
          <span className="mb-1.5 block text-sm font-medium text-[var(--ink-secondary)]">账号</span>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            autoComplete="username"
            autoFocus
            className="h-10 w-full rounded-lg border border-[var(--line)] bg-[var(--paper)] px-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent-warm)]"
          />
        </label>

        <label className="mb-4 block">
          <span className="mb-1.5 block text-sm font-medium text-[var(--ink-secondary)]">密码</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            className="h-10 w-full rounded-lg border border-[var(--line)] bg-[var(--paper)] px-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent-warm)]"
          />
        </label>

        {error && <p className="mb-4 text-sm text-[var(--error)]">{error}</p>}

        <button
          type="submit"
          className="h-10 w-full rounded-lg bg-[var(--button-primary-bg)] text-sm font-medium text-[var(--button-primary-text)] transition hover:bg-[var(--button-primary-bg-hover)]"
        >
          登录
        </button>
      </form>
    </main>
  );
}
