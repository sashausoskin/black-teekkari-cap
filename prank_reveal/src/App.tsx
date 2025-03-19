import './App.css'
import { useWindowSize, useVibrate } from 'react-use'
import Confetti from 'react-confetti'

function App() {
  const { width, height } = useWindowSize()

  useVibrate(true, [1000, 1])
  
  
  for(let i = 0; i < 5; i++) {
    setTimeout(async () => {
      window.open('https://youtu.be/dQw4w9WgXcQ?si=2xi2XpyoFrcXiBuK', '_blank', 'popup=true')
    }, 4000 + i * 100)
  }

  for(let i = 0; i < 5; i++) {
    setTimeout(async () => {
      window.open('https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8?si=ba79fbb2e79f4d4b', '_blank', 'popup=true')
    }, 4050 + i * 100)
  }

  return (
    <>
      <div className='mainFrame'>
        <Confetti
          width={width}
          height={height}
        />
        <h1>
          JÄYNÄ'D
        </h1>
      </div>
    </>
  )
}

export default App
