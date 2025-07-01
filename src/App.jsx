import { useState } from 'react'
import { useDrag } from '@use-gesture/react'
import './App.scss'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Modal } from './components/Modal'
import { Back } from './components/Back'

function App() {
  const [modal, setModal] = useState(0)
  const [back, setBack] = useState(0)
  
  const [dragY, setDragY] = useState(0)
  const [dragX, setDragX] = useState(0)

  const bind = useDrag(({ movement: [mx, my], last }) => {
  setDragY(my)

  if (last && Math.abs(my) > 150) {
    setBack(prev => (prev === 0 ? 1 : 0))
    setDragY(0)
  }

  if (last && Math.abs(my) <= 150) {
    setDragY(0)
  }
}, { axis: 'y' })

  const close = ()=> {setBack(0)}

  return (
    <>
      <div className='wrap'{...bind()}   style={{
          transform: `translateY(${dragY}px)`,
        }}>
        {back === 1 ? <Back/>: null}

        <Profile/>
        <Projects modal={modal} setModal={setModal}/>
        

        {modal !== 0 && <Modal setModal={setModal} modal={modal}/>}

      </div>
    </>
  )
}

export default App
