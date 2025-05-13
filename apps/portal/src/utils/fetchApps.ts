// fetchApps.ts

export interface MicroAppConfig {
    name: string
    entry: string
    activeWhen: string
    version?: string
    description?: string
  }
  
  export async function fetchMicroApps(): Promise<MicroAppConfig[]> {
    const res = await fetch('http://localhost:3000/config')
    if (!res.ok) throw new Error(`Failed to fetch micro apps: ${res.statusText}`)
    return res.json()
  }
  