import { useParams, useNavigate } from 'react-router-dom'
import AppShell from '../components/AppShell'
import Dashboard from '../components/Dashboard'
import { ApiKeys, Playground, Logs, Billing, SettingsAccount } from '../components/AppScreens'

const screens = {
  dashboard: Dashboard,
  keys: ApiKeys,
  playground: Playground,
  logs: Logs,
  billing: Billing,
  settings: SettingsAccount,
}

const meta = {
  dashboard:  { title: 'Dashboard',  breadcrumb: "Jordan's workspace" },
  keys:       { title: 'API Keys',   breadcrumb: 'Settings / API Keys' },
  playground: { title: 'Playground', breadcrumb: 'Tools / Playground' },
  logs:       { title: 'Logs',       breadcrumb: 'Tools / Logs' },
  billing:    { title: 'Billing',    breadcrumb: 'Account / Billing' },
  settings:   { title: 'Account',    breadcrumb: 'Settings / Account' },
}

export default function AppPage() {
  const { section = 'dashboard' } = useParams()
  const navigate = useNavigate()

  const Screen = screens[section] || Dashboard
  const { title, breadcrumb } = meta[section] || meta.dashboard

  return (
    <div style={{ height: '100vh' }}>
      <AppShell active={section} onNav={(id) => navigate(`/app/${id}`)} title={title} breadcrumb={breadcrumb}>
        <Screen />
      </AppShell>
    </div>
  )
}
