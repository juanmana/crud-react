import React, { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "./components/AddUserForm";
import EditForm from "./components/EditForm";

function App() {
  const usersData = [
    { id: uuidv4(), name: "Juan", username: "Juanmana" },
    { id: uuidv4(), name: "Pepe", username: "pepepepe" },
    { id: uuidv4(), name: "Jose", username: "Jososos" }
  ];

  //state
  const [users, setUsers] = useState(usersData);

  //add users

  const addUser = user => {
    user.id = uuidv4();

    setUsers([...users, user]);
  };

  //delete user

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  //edit

  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({id: null ,name:"", username:""});


  const editRow = (user) =>{
    setEditing(true)
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }


const updateUser = (id, updateUser)=>{

  setEditing(false);

  setUsers(users.map(user => (user.id ===id ? updateUser:user)))


}

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>

              <EditForm currentUser={currentUser} updateUser={updateUser}/>
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
