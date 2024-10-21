import { useState } from "react";
import TodoList from "../TodoList";
import { FormContainer,Form } from "../CommonComponents";

function Login(){
    const [formInput,setFormInput] = useState({
        username:'',
        password:'',
    });
    const [userList,setUserList] = useState([{
        username:'thuy',
        password:'pass1'
    },{
        username:'kat',
        password:'pass2'
    }]);
    const [hasMatchingUser,setHasMatchingUser] = useState(false);
    function handleInputChange(event){
        const{name,value} = event.target;
        setFormInput({
            ...formInput,
            [name]:value,
        }   
        )
    }
    function handleOnSubmit(event){
        event.preventDefault();
        const match = userList.some(user=>user.username === formInput.username && user.password === formInput.password);
        setHasMatchingUser(match);
        if(!match){
            alert('incorrect username or password')
        }else{
            setFormInput({
                username:'',
                password:''
            })
        }  
    }
    if(hasMatchingUser){
        return <TodoList/> 
    }
    return(
        <FormContainer>
        
        <Form onSubmit={handleOnSubmit}>
            <div>
            <label htmlFor="username">Username: </label>
            <input type="text" placeholder="Username" value={formInput.username} name="username" id="username" onChange={handleInputChange}/>
            </div>
            <div>
            <label htmlFor="password">Password: </label>
            <input type="password" placeholder="Password" value={formInput.password} name="password" id="password" onChange={handleInputChange}/>
            </div>
            <button type="submit">Submit</button>
        </Form>
        
        </FormContainer>
    )
}

export default Login;