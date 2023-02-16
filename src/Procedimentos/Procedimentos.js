import React from 'react'
import './Procedimentos.css'
import { ProcedimentosItems } from "./ProcedimentosItems"
import ModalImg from '../Assets/ProcedimentosBg.jpg'
import Aos from "aos"
import "aos/dist/aos.css"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Procedimentos = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1700 })
  }, [])

  const [open, setOpen] = React.useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [activeModal, setActiveModal] = React.useState({})

  let procedId

  function handleClick(event) {
    procedId = Number(event.currentTarget.id)
    setModal(procedId - 1)
    onOpenModal()
  }


  const setModal = (id) => setActiveModal(ProcedimentosItems[id])

  return (
    <>
      <div className='proced-bg'>
        <div className='container proced-box'>
          <div data-aos="fade-down" data-aos-once="true" className="proced-header">
            <h1 className='title'>Nossos Procedimentos</h1>
            <h2 className='subtitle'><i className='fa-regular fa-hand-pointer'></i> Clique no procedimento para saber mais</h2>
          </div>
          <div className='proced-area' data-aos="fade-up" data-aos-once="true">
            {ProcedimentosItems.map((proced) => {
              return (
                <div key={proced.id} onClick={handleClick} id={proced.id} className='proced-card'>
                  <div className='proced-card-bg' style={{ backgroundImage: `url(${proced.img})` }}>
                  </div>
                  <div className='proced-card-text'>
                    <p>{proced.resume}</p>
                  </div>
                  <div className='proced-card-name'>
                    <h3>{proced.name}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>



      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: 'customModal'
        }}
      >
        <div className="modal-box">
          <div className='modal-slide'>
            <img src={activeModal.img} alt="" />
          </div>
          <div className='modal-description'>
            <h2 className='modal-title'>{activeModal.name}</h2>
            <p>{activeModal.description}</p>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Procedimentos