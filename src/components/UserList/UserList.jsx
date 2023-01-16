import "./UserList.css"
import { UserItem } from "../UserItem/UserItem";
export const UserList = ({users})=>{
   
    users.sort((a,b)=>b.userAge-a.userAge)
    return(<div className="list-box" >
        <ul>
            {users.map((user)=>(
               <UserItem key={user.id} user={user}/>
            ))}
           
        </ul>
    </div>)
}