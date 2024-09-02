import Field from "../components/Field";
import { Form } from '../components/Form/Form';
import Button from "../components/button/button";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
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
        history.push('/'); //---->If the acount already exist dont redirect show error message
        

    }


  return(
  <div className="loginBgr">
    <nav className= 'HPNav'>
        <h2 className= 'HPHotelName'>Hotel California</h2>
      </nav>
  <div className='loginPosition'>
    <h3>Create Account</h3>
    <Form onSubmit={onSubmit}>
      Name:
      <Field type='text' onChange={onChangeName} value={username} />
      Email:
      <Field type='email' onChange={onChangeEmail} value={email}/>
      Password:
      <Field type='password' onChange={onChangePsw} value={psw}/>
      <Button class='signUpBtn' text='Sign Up'></Button>
    </Form>
  
  </div>
  </div>
)}

export default Login;