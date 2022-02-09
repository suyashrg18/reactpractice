import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  const [usersList, setusersList] = useState([])

  const addUserHandler = (uname, uage) => {
    setusersList((prevState) => {
      return [...prevState, { name: uname, age: uage, id: Math.random().toString() }]
    })
  }

  return (
    <div>
      <AddUser onSubmit={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
