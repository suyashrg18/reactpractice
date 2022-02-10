import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Button from './Button'

import classes from './ErrorModal.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay = props => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>OKAY</Button>
        </footer>
    </Card>
}

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root'))}

            {ReactDOM.createPortal(
                <ModalOverlay
                    message={props.message}
                    title={props.title}
                    onConfirm={props.onConfirm} />,
                document.getElementById('modal-root'))}
        </React.Fragment>
    )
}

export default ErrorModal;