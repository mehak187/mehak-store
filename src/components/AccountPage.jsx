import { useState } from 'react';

const orders = [
  { id: 'LX10248', date: 'Jul 18, 2026', items: 3, total: 574.44, status: 'Delivered' },
  { id: 'LX10193', date: 'Jul 02, 2026', items: 1, total: 189.0, status: 'Shipped' },
  { id: 'LX10087', date: 'Jun 21, 2026', items: 2, total: 448.0, status: 'Delivered' },
];

const addresses = [
  { label: 'Home', line: '123 Fashion Avenue, New York, NY 10001', default: true },
  { label: 'Office', line: '500 Business Park, Suite 12, New York, NY 10018', default: false },
];

const tabs = ['Profile', 'Orders', 'Addresses', 'Settings'];

export default function AccountPage({ onNavigate, onNotify }) {
  const [tab, setTab] = useState('Profile');

  return (
    <div className="max-w-6xl mx-auto px-6 py-14 min-h-screen">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-16 h-16 rounded-full bg-brand-500 text-white flex items-center justify-center text-2xl font-serif font-bold">
          M
        </div>
        <div>
          <h1 className="text-3xl font-serif font-bold">Hello, Mehak</h1>
          <p className="text-ink-500 text-sm">mehak@example.com · Member since 2024</p>
        </div>
      </div>

      <div className="grid md:grid-cols-[220px_1fr] gap-8">
        {/* Sidebar */}
        <aside className="space-y-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition ${
                tab === t ? 'bg-ink-900 text-white' : 'hover:bg-ink-100'
              }`}
            >
              {t}
            </button>
          ))}
          <button
            onClick={() => onNotify('You have been signed out (demo).')}
            className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition"
          >
            Sign Out
          </button>
        </aside>

        {/* Content */}
        <div>
          {tab === 'Profile' && (
            <Panel title="Profile Details">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="First Name" defaultValue="Mehak" />
                <Input label="Last Name" defaultValue="Amir" />
                <Input label="Email" defaultValue="mehak@example.com" />
                <Input label="Phone" defaultValue="+1 (555) 123-4567" />
              </div>
              <button
                onClick={() => onNotify('Profile saved!')}
                className="btn-primary text-white px-6 py-3 rounded-lg font-medium mt-6"
              >
                Save Changes
              </button>
            </Panel>
          )}

          {tab === 'Orders' && (
            <Panel title="Order History">
              <div className="space-y-3">
                {orders.map((o) => (
                  <div key={o.id} className="border border-ink-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold">#{o.id}</p>
                      <p className="text-xs text-ink-500">{o.date} · {o.items} item(s)</p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${o.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-brand-100 text-brand-700'}`}>
                      {o.status}
                    </span>
                    <p className="font-semibold">${o.total.toFixed(2)}</p>
                    <button onClick={() => onNavigate('track')} className="text-sm underline hover:text-brand-500">
                      Track
                    </button>
                  </div>
                ))}
              </div>
            </Panel>
          )}

          {tab === 'Addresses' && (
            <Panel title="Saved Addresses">
              <div className="space-y-3">
                {addresses.map((a) => (
                  <div key={a.label} className="border border-ink-200 rounded-xl p-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold flex items-center gap-2">
                        {a.label}
                        {a.default && <span className="text-xs bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full">Default</span>}
                      </p>
                      <p className="text-sm text-ink-500 mt-1">{a.line}</p>
                    </div>
                    <button onClick={() => onNotify('Edit address (demo).')} className="text-sm underline hover:text-brand-500">Edit</button>
                  </div>
                ))}
              </div>
              <button onClick={() => onNotify('Add new address (demo).')} className="btn-secondary px-6 py-3 rounded-lg font-medium mt-6">
                + Add New Address
              </button>
            </Panel>
          )}

          {tab === 'Settings' && (
            <Panel title="Account Settings">
              <div className="space-y-4">
                <Toggle label="Email notifications" defaultChecked onNotify={onNotify} />
                <Toggle label="SMS order updates" onNotify={onNotify} />
                <Toggle label="Marketing & promotions" defaultChecked onNotify={onNotify} />
              </div>
              <button onClick={() => onNotify('Password reset link sent (demo).')} className="btn-secondary px-6 py-3 rounded-lg font-medium mt-6">
                Change Password
              </button>
            </Panel>
          )}
        </div>
      </div>
    </div>
  );
}

const Panel = ({ title, children }) => (
  <div className="bg-white border border-ink-100 rounded-2xl p-6 md:p-8 shadow-sm">
    <h2 className="text-xl font-serif font-bold mb-6">{title}</h2>
    {children}
  </div>
);

const Input = ({ label, defaultValue }) => (
  <div>
    <label className="text-xs text-ink-500 mb-1 block">{label}</label>
    <input defaultValue={defaultValue} className="w-full border border-ink-200 rounded-lg px-3 py-2.5 text-sm" />
  </div>
);

const Toggle = ({ label, defaultChecked, onNotify }) => {
  const [on, setOn] = useState(!!defaultChecked);
  return (
    <div className="flex items-center justify-between border-b border-ink-100 pb-4">
      <span className="text-sm">{label}</span>
      <button
        onClick={() => {
          setOn((v) => !v);
          onNotify?.('Preference updated.');
        }}
        className={`w-11 h-6 rounded-full transition relative ${on ? 'bg-brand-500' : 'bg-ink-300'}`}
      >
        <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all ${on ? 'left-[22px]' : 'left-0.5'}`} />
      </button>
    </div>
  );
};
