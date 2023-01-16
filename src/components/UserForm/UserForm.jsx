
import { useState } from "react"
import "./UserForm.css"
export const UserForm =({onAddUser})=>{
    const [inputValueName,setInputValueName]= useState('')

    const OnChangeInputName=(event)=>{
       setInputValueName(event.target.value)
    }
    const [inputValueAge,setInputValueAge]=useState(0)
    const onChangeInputAge=(event)=>{
       setInputValueAge(event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault()
       
       onAddUser(inputValueName,inputValueAge)
        setInputValueAge('')
        setInputValueName('')
       
        
       
    }
    let disabledBtn = inputValueName.trim().length>0 ? true : false

    
  return(
    <div className="form-box">
    <form className="form" >
        <label htmlFor="Username">Username</label>
        <input type="text" id="Username"  onChange={OnChangeInputName} value={inputValueName}/>
        <label htmlFor="Age(Years)">Age(Years)</label>
        <input type="number" id="Age(Years)" onChange={onChangeInputAge} value={inputValueAge} />
        <button disabled={!disabledBtn} className={disabledBtn ?"add-btn" : 'disabled'}  onClick={submitHandler}>Add User</button>
    </form>
    </div>

  )
}