
import { useState } from 'react';
import './App.css';
import { UserForm } from './components/UserForm/UserForm';
import { UserList } from './components/UserList/UserList';

function App() {

  const [users,setUsers]=useState([])
  const addNewUser=(inputValueName,inputValueAge)=>{
        setUsers((prevUsers)=>[
          ...prevUsers,
          {userName:inputValueName,userAge:inputValueAge.toString(),id:Math.random().toString()}
        ])
       
  } 
 
 
  console.log(users);
  return (
    <div className="App">
       <UserForm onAddUser={addNewUser} />
       
          <UserList users={users} />
      
     
    
    </div>
  );
}

export default App;
