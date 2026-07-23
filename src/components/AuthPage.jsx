import { useState } from 'react';

export default function AuthPage({ onLogin, onNotify }) {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password || (mode === 'signup' && !form.name)) {
      onNotify?.('Please fill in all fields.');
      return;
    }
    onLogin?.(mode === 'signup' ? form.name : 'Mehak');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 bg-ink-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold">
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-ink-500 text-sm mt-2">
            {mode === 'login' ? 'Sign in to your LUXE account' : 'Join LUXE for a personalized experience'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex bg-ink-100 rounded-lg p-1 mb-6">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition ${mode === 'login' ? 'bg-white shadow' : 'text-ink-500'}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition ${mode === 'signup' ? 'bg-white shadow' : 'text-ink-500'}`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={submit} className="space-y-4">
          {mode === 'signup' && (
            <Field name="name" placeholder="Full name" value={form.name} onChange={change} />
          )}
          <Field name="email" type="email" placeholder="Email address" value={form.email} onChange={change} />
          <Field name="password" type="password" placeholder="Password" value={form.password} onChange={change} />

          {mode === 'login' && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-ink-500">
                <input type="checkbox" className="accent-brand-500" /> Remember me
              </label>
              <button type="button" onClick={() => onNotify?.('Password reset link sent to your email.')} className="text-brand-600 hover:underline">
                Forgot password?
              </button>
            </div>
          )}

          <button type="submit" className="w-full btn-primary text-white py-3.5 rounded-lg font-medium">
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-ink-200" />
          <span className="text-xs text-ink-400">or continue with</span>
          <div className="flex-1 h-px bg-ink-200" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => onLogin?.('Mehak')} className="border border-ink-200 rounded-lg py-2.5 text-sm font-medium hover:bg-ink-50 transition">
            Google
          </button>
          <button onClick={() => onLogin?.('Mehak')} className="border border-ink-200 rounded-lg py-2.5 text-sm font-medium hover:bg-ink-50 transition">
            Facebook
          </button>
        </div>

        <p className="text-center text-sm text-ink-500 mt-6">
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} className="text-brand-600 font-medium hover:underline">
            {mode === 'login' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
}

const Field = (props) => (
  <input
    {...props}
    className="w-full border border-ink-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-300"
  />
);
