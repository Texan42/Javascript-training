import Field from "../components/Field";
import { Form } from '../components/Form/Form';
import Button from "../components/button/button";
import { useHistory } from "react-router";
import { useState } from "react";
import axios from 'axios';

const Login = (props) => {
  const [email,setEmail] = useState("");
  const [psw,setPsw] = useState("");
  const [data,setData] = useState([]);
  const history = useHistory();

  //Redirect from the home page after assign the hotels
  const {state} = props.location;
    console.log(state === undefined);
    console.log(state);

  const goLogin = () => {
    history.push('/signup');
  }

function onChangeEmail(e){
  
    setEmail(e.target.value);

}
function onChangePsw(e){
    setPsw(e.target.value);

}

function onSubmit(e) {
    let loginpath = '/redirect';
    if (state){
      loginpath = '/payment';
    }
    
    const userL = {
        email:email,
        psw:psw,
        state:state
    }
    console.log(email,psw);
        axios.post('http://localhost:8080/login',userL).then(res=> {
            console.log(res.data);
            if (res.data.num === 1){
               // setUname(res.data.userdata.username);
              setData(res.data); //-->Unwanted
              history.push({
                pathname:loginpath,
                state:res.data
              })
              
           }
            
        });
        e.preventDefault();
        setEmail("");
        setPsw("");
      
       
}


  return(
  <div className="loginBgr">
    <nav className= 'HPNav'>
        <h2 className= 'HPHotelName'>Hotel California</h2>
      </nav>
  <div className='loginPosition'>
    <h3>Please Log in</h3>
    <Form onSubmit={onSubmit}>
      Email:
      <Field onChange={onChangeEmail} type='email' value={email}/>
      Password:
      <Field onChange={onChangePsw} type='password' value={psw}/>
      <Button class='loginBtn' text='Login'></Button>
    </Form>
    
    <Button clickClass={goLogin} class='signUpBtn' text='Sign Up'></Button>
  </div>
  </div>
)}

export default Login;