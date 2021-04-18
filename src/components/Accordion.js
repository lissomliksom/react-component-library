import { useState } from 'react'

const Accordion = () => {

  const [ isOpen, setIsOpen ] = useState(false)

  const accordionController = () => {
    setIsOpen(!isOpen)
  }

  return(
    <section>
      <h2>Accordion</h2>
      <div className="location yellow">
        <small>
          Accordion code found in /components/Accordion.js
        </small>
      </div>
      
      <button onClick={accordionController}>
        {isOpen ? 'Hide content' : 'Reveal content'}
      </button>
      {isOpen ? 'Revealed content' : null}
    </section>
  )  
}

export default Accordion