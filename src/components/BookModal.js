import React from 'react'
import Modal from 'react-modal'

const BookModal = (props) => {
    
    
    if(props.bookDrawn !== undefined){
        console.log(props.bookDrawn.author)
    }
    
    
        return(
            <Modal
            isOpen={!!props.bookDrawn}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel="Book choosen for you!"
            closeTimeoutMS={200}
            className="modal"
            >
            {props.bookDrawn !== undefined &&<h2> {props.bookDrawn.author}</h2>}
            
            </Modal>
        )
    
}





export default BookModal