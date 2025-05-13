import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Garfish from 'garfish'
import './index.css'
import App from './App.tsx'
import { fetchMicroApps } from './utils/fetchApps.ts'

const startApp = async () => {
  const apps = await fetchMicroApps()
  console.log('apps:',apps)

  // 初始化 Garfish
  await Garfish.run({
    basename: '/',
    domGetter: '#root',
    apps: apps.map((app: any) => ({
      name: app.name,
      entry: app.entry,
      activeWhen: app.activeWhen,
      sandbox: false
    })),
  })

  // 渲染主应用
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )

}


startApp()

