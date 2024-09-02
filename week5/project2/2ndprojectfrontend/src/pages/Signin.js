import Form from '../components/Form/Form.jsx';
import Button from '../components/button/button.jsx';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

const Signin = () => {
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [psw, setPsw] = useState("");
    const history = useHistory();

    function onChangeName(e){
        setusername(e.target.value);
    }

    function onChangeEmail(e){
        setEmail(e.target.value);
    }

    function onChangePsw(e){
        setPsw(e.target.value);
    }

    
    function onSubmit(e){
        const userObj = {
            username:username,
            email:email,
            psw:psw
        };
        axios.post('http://localhost:8080/create',userObj);
        e.preventDefault();
        setusername("");
        setEmail("");
        setPsw(""); 
        history.push('/login'); //---->If the acount already exist dont redirect show error message
        

    }



    return (
        <div>
        <h1> SignIn page</h1>
            <Form onSubmit={onSubmit}>
               <div>
                   Name: <input onChange={onChangeName} type="text" placeholder="Name" value={username} required/> 
               </div>
               <div>
                   Email: <input onChange={onChangeEmail} type="email" placeholder="Email" value={email} required/>
                </div>
                <div>
                    Password: <input onChange={onChangePsw} type="password" placeholder="Password" value={psw} required/> 
                </div>
                <Button type="submit"> Sign In</Button>

            </Form>
           
        </div>
    )
}

export default Signin;