import "./UserItem.css"

export const UserItem =({user})=>{
   
return  <li className="user-item"><p className="name-text">{user.userName} ({user.userAge} years old)</p></li> 
}