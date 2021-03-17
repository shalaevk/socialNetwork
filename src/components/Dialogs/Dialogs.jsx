import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AddMessageAC} from "../../redux/state"

const Dialogs = (props) => {
    console.log(props.state.messages)
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    let newMessage = React.createRef();
    let showNewMessage = () => {
        props.dispatch(AddMessageAC(newMessage.current.value))
        newMessage.current.value = ''
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessage}></textarea>
                <button onClick={showNewMessage}>Новое сообщение</button>
            </div>

        </div>
    )
}

export default Dialogs;