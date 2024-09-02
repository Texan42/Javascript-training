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
  <div className="paymentBgr">
    <div className='paymentFlex'>
      <h3> Payment Info:</h3>
      <div className='paymentPosition'>
        <div className="column1">
          <h4>Please enter your credit card information</h4>
          <Form onSubmit={onSubmit} >
              <Field text='Name on card: '/>
              <Field text='CC Number: '/>
              <label>CCV: </label>
              <input type='text' 
              pattern='[0-9]{3}' 
              placeholder='3-digit CCV' 
              maxlength='3' title='3 digit number'/>
              <Field text='Exp. Date: ' type='text'/>
              <Field text='Address: ' type='text'/> 
              <Button className ='buttonColumn' text='Submit Payment'/>
          </Form>
        </div>
        
        <div className="column2">
          <div className='totalPosition'>
            <h4>Total</h4>
            <p>Dynamic text for price</p>
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default Payment;