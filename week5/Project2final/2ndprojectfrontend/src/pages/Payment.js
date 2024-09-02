import Field from '../components/Field';
import { Form } from '../components/Form/Form';
import Button from "../components/button/button";
import { useHistory } from 'react-router';

const Payment = (e) => {
      const {state} = e.location;
      const history = useHistory();
      const onSubmit = (l) => {
          history.push({
              pathname:"/redirect",
              state: state
          })
          l.preventDefault();
      }
    
      return(
        <div>
          <nav className= 'HPNav'>
        <h2 className= 'HPHotelName'>Hotel California</h2>
        </nav>
      <div className="paymentBgr">
        <div className='paymentFlex'>
          <div className='paymentPosition'>
            <div className="column1">
              <h4>Please enter your credit card information</h4>
              <Form onSubmit={onSubmit} class='justifyRight'>
                <div className='padField'>
                  <Field text='Name on card: '/>
                </div>
                
                <div className='padField'>
                  <Field text='CC Number: '/>
                </div>
    
                <div className='padField'>
                  <label>CCV: </label>
                  <input type='text' 
                  pattern='[0-9]{3}' 
                  placeholder='3-digit CCV' 
                  maxlength='3' title='3 digit number'/>
                </div>
    
                <div className='padField'>
                  <Field text='Exp. Date: ' type='text'/>
                </div>
    
                <div className='padField'>
                  <Field text='Address: ' type='text'/> 
                </div>
    
                  <Button class ='paymentBtn' text='Submit Payment'/>
              </Form>
            </div>
            
          </div>
        </div>
      </div>
      </div>);
    }
    
    export default Payment;