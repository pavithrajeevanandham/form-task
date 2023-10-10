import { useState } from "react"
import Table from "./table"
import Modal from 'react-modal';
import AddItem from "./AddItem";

const customStyles = {
    content: {
      width: '60rem',
      height: '40rem',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


const Container = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
    setIsOpen(false);
    }
    return(
        <>
        <div className="">
            <div className="d-flex justify-content-between mx-5 mb-2">
                <button className="btn btn-outline-secondary" type='button'>Filters</button>
                <button className="btn btn-outline-info"  type='button' onClick={openModal}>New</button>
            </div>
            <div>
                <Table />
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    style={customStyles}
                    contentLabel="Example Modal">
                <div className="d-flex justify-content-between bg-info-subtle">
                    <span>Add Item</span>
                    <button className="btn"  type='button' onClick={closeModal}>x</button>
                </div>
                <AddItem/>
                </Modal>
            </div>
        </div>
        </>
    )
}


export default Container