import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = props => {
    const [userName, setUserName] = useState('')
    const [age, setAge] = useState('')

    const setUserNameHandler = event => {
        setUserName(event.target.value)
    }

    const setAgeHandler = event => {
        setAge(event.target.value)
    }
    const formSubmitHandler = event => {
        event.preventDefault()
        if (userName.trim().length === 0 || age.trim().length === 0) {
            return;
        }
        if (+age < 1) {
            return;
        }
        props.onSubmit(userName, age)
        setUserName('')
        setAge('')
    }
    return (
        <Card className={classes.input}>
            <form>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={userName} onChange={setUserNameHandler} />

                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number" value={age} onChange={setAgeHandler} />

                <Button type="submit" onClick={formSubmitHandler}>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;