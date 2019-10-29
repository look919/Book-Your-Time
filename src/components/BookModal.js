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
            <h1 className="modal__heading-primary">Thats what I found for you!</h1>
            <div className="modal__content">
                <div className="modal__info">
                { props.bookDrawn !== undefined && <h2 className="modal__info__title">{props.bookDrawn.title}</h2> }
                    <div className="modal__info__subtitle">
                        { props.bookDrawn !== undefined && <p className="modal__info__subtitle--author">Author: {props.bookDrawn.author}</p> }
                        { props.bookDrawn !== undefined && <p className="modal__info__date">Release year: {props.bookDrawn.releaseDate}</p> }
                    </div>
                    <div className="modal__info__description">
                        { props.bookDrawn !== undefined && <p className="modal__info__date">{props.bookDrawn.description}</p> }
                    </div>
                </div>
                <div className="modal__photo">
                { props.bookDrawn !== undefined && <img src={props.bookDrawn.url} alt="book's photo"/> }
                </div>
            </div>
            
            
            

            
            </Modal>
        )
    
}





export default BookModal