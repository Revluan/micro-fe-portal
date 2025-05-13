import './App.css'
import { useEffect, useState } from 'react'
import { fetchMicroApps } from './utils/fetchApps'

function App() {

  const [apps, setApps] = useState<any[]>([])

  useEffect(() => {
    fetchMicroApps().then(setApps).catch(console.error)
  }, [])

  return (
    <div>
      <h2>可用子应用列表</h2>
      <ul>
        {apps.map(app => (
          <li key={app.name}>
            <strong>{app.name}</strong>（v{app.version}）
            路由：{app.activeWhen}
            <a href={app.activeWhen}>跳转</a>
          </li>
        ))}
      </ul>
    </div>  
  )
}

export default App
