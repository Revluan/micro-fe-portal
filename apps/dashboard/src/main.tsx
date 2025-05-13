import React from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './router'
import { BrowserRouter } from 'react-router-dom';
import { reactBridge } from '@garfish/bridge-react-v18';
let root: ReturnType<typeof createRoot> | null = null
import './index.css'

// 独立运行时的渲染
// @ts-ignore
if (!window.__GARFISH__) {
  root = createRoot(document.getElementById('root')!)
  root.render(
    <React.StrictMode>
     <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </React.StrictMode>
  )
}

const RootComponent = ({ basename }: { basename: string }) => {
  console.log('basename', basename)
  return (
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  )
}

export const provider = reactBridge({
  el: '#root',
  rootComponent: RootComponent,
  errorBoundary: () => <div>子应用加载失败</div>,
});