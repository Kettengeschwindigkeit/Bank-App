import { FC, ReactComponentElement, memo, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRedGroup } from './useRedGroup'

const App: FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('DO')
  }, [count])

  useEffect(() => {
    setCount(prev => prev + 1)
  }, [])

  const video = useRef<HTMLVideoElement>()
  video.current?.play().then(() => {})

  const { channelName, setChannelName } = useRedGroup()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default memo(App)
