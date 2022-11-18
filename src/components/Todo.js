import {useState} from 'react'
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){

    const[modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler(){
        setModalIsOpen(true); //To change that modalIsOpen state from false
    }
    function closeModalHandler(){
        setModalIsOpen(false);
    }
    return(
    <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
            <span>Checkout</span>
            <button className="btn" onClick={deleteHandler}>Remove</button>
        </div>
        {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : null}
        {modalIsOpen ? <Backdrop onCancel={closeModalHandler}/> : null}
    </div>
    )
}

export default Todo;