import React from 'react'
import Modal from 'react-modal';
import BookForm from './BookForm';
import TableData from './TableData';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const BookDetail = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }

  return (
      <>
          <div className='flex items-center justify-center mt-[50px]'>
          <div className='flex justify-between px-[20px] w-[800px]'>
              <h2 className='text-[20px] font-[700]' >BookList</h2>
              <button className='p-3 bg-[blue] rounded-[8px]' onClick={openModal}>Add Book</button>
              </div>
              
          </div>  
          <TableData />
          <div> 
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
              >
                  <BookForm close={closeModal} />
       
      </Modal>
    </div>
     </>
  )
}

export default BookDetail