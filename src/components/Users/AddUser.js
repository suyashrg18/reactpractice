import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

import classes from './AddUser.module.css'

const AddUser = props => {
    const [userName, setUserName] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState()

    const setUserNameHandler = event => {
        setUserName(event.target.value)
    }

    const setAgeHandler = event => {
        setAge(event.target.value)
    }
    const formSubmitHandler = event => {
        event.preventDefault()
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Inavlid input',
                message: 'username and age cannot be empty'
            })
            return;
        }
        if (+age < 1) {
            setError({
                title: 'Inavlid age',
                message: 'Invalid age entered, age has be > 0'
            })
            return;
        }
        props.onSubmit(userName, age)
        setUserName('')
        setAge('')
    }

    const errorHandler = () => {
        setError(null)
    }
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={userName} onChange={setUserNameHandler} />

                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" value={age} onChange={setAgeHandler} />

                    <Button type="submit" onClick={formSubmitHandler}>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;