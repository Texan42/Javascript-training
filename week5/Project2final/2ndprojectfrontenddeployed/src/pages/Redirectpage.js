import Table from 'react-bootstrap/Table';
import { useHistory } from "react-router";
import Button from '../components/button/button';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import "react-datepicker/dist/react-datepicker.css";
import Field from '../components/Field';
import { useTranslation } from 'react-i18next';


const Account = (props) => {
    const { t, i18n } = useTranslation();
    const languageHandler = lang => {
        i18n.changeLanguage(lang)
      }

    let {state} = props.location;
    const history = useHistory();
    const [val,setVal] = useState([]);

    const [show, setShow] = useState(false);

    const [hotel,setHotel] = useState("East Side");
    const [stayDate, setStayDate] = useState({
      startDate:"",
      endDate:""
    })
    const [rooms,setRooms] = useState("One Bedroom Suite");
    const [myid,setMyId] = useState("");

    const onChangeHotel = (e) => {
        setHotel(e.target.value);
      }
    
      
      const onStaydate = (e) => {
          console.log(e);
        const {name,value} = e.target;
        setStayDate(prevdata => ({
          ...prevdata,
          [name]:value
        }))
      }
    
      const onChangeRoom = (e) => {
        setRooms(e.target.value);
      }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(state === undefined);
    console.log(state);
 
    const onClick = () => {
        history.push('/');
    }

    useEffect(() => {
        const theEamil ={
            email:state.userdata.email
        }
        axios.post('https://hotelcaliforniabackend.azurewebsites.net/sendinfo', theEamil).then(res => {
            console.log('this is ',res.data.hotel);

            res.data.hotel.map(items => {
                return setVal(prevval => {
                     return [...prevval,items];
                })
            })
        });

    },[]);

    const deleteItem = (id) => {
        console.log(state.userdata.email,id);
        const deleteDate = {
            email:state.userdata.email,
            id:id
        }
        axios.post('https://hotelcaliforniabackend.azurewebsites.net/delhotel',deleteDate);
        setVal(prevval => {
            return prevval.filter((items,index) => {
                return index != id;
            })
        })   
    }

    const updateItem = (id) => {
        const updatedvalues = {
            email:state.userdata.email,
            myid:id,
            hotelName:hotel,
            startDate:stayDate.startDate,
            endDate:stayDate.endDate,
            hotelroom:rooms
        }
        axios.post('https://hotelcaliforniabackend.azurewebsites.net/updateinfo',updatedvalues);

        console.log(updatedvalues);
    }

    const updateCall = (id) => {
        setMyId(id);
        handleShow();
    }

    return(
        <div>
         {state===undefined ? 
             <div>
                 <h1>404 Page not found</h1>
             </div>:
        <div>
            <nav className= 'AccountNav'>
            <h2 className= 'AccountHotelName'>Hotel California</h2>
            <a className='AccountHPLink' href='/'>Home Page</a>
      </nav>
            <div>
      <h1>{t('Welcome')} {state.userdata.username} </h1>
      <button class='Buttons' onClick={() => languageHandler('en')}>{t('English')}</button>
      <button class='Buttons' onClick={() => languageHandler('es')}>{t('Spanish')}</button>
      </div>
                 <Table striped bordered hover> 
                 <thead>
                 <tr>
                     <th>Hotel</th>
                     <th>Room</th>
                     <th>Start Date</th>
                     <th>End Date</th>
                 </tr>
                 </thead>
                 <tbody>
                 {val.map((items,index) => {
                    return (
                        <tr>
                            <td>{items.hotelName}</td>
                            <td>{items.hotelroom}</td>
                            <td>{items.startDate}</td>
                            <td>{items.endDate}</td>
                            <td>
                               <> 
                                    <button class='Buttons' onClick={() => {
                                        updateCall(items._id);
                                    }}>Update</button>
                                    <Modal show={show} onHide={handleClose}> 
                                        <Modal.Header closeButton>
                                            <Modal.Title>Update Reservation</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body> 
                                        
                                                <div>
                                                <label for='location'>Select Hotel: </label>
                                                <select onChange={onChangeHotel} name='location' className='HPDropdown'>
                                                    <option value='East Side'>East Side</option>
                                                    <option value='West Side'>West Side</option>
                                                    <option value='North Side'>North Side</option>
                                                </select>
                                                </div>
                                                <div>

                                                <Field text="Start Date: " type='date' 
                                                onChange={onStaydate}
                                                placeholderText='Start Date'
                                                value={stayDate.startDate}
                                                name="startDate">
                                                </Field>
                                                </div>
                                                <div>
                                                <Field text="End Date: " type='date'
                                                onChange={onStaydate}
                                                placeholderText='End Date'
                                                value={stayDate.endDate}
                                                name="endDate">
                                                </Field>
                                                </div>
                                                <div>
                                                <label for='roomType'>Room Type: </label>
                                                <select onChange={onChangeRoom} name='roomType' className='HPDropdown'>
                                                    <option value='One Bedroom Suite'>One Bed Suite</option>
                                                    <option value='Two Bedroom Suite'>Two Bed Suite</option>
                                                    <option value='Deluxe Suite'>Deluxe Suite</option>
                                                </select>
                                                </div>
                                         </Modal.Body>
                                        <Modal.Footer>
                                            <button class='Buttons' onClick={handleClose}>Close</button>
                                            <button class='Buttons' onClick={() => {
                                                updateItem(myid);
                                            }}>Save</button>
                                        </Modal.Footer>
                                    </Modal>
                               </>
                            </td>
                            <td>
                                <button class='Buttons' onClick={() => {
                                    deleteItem(index);
                                }}>Delete</button>
                            </td>
                        </tr>
                    )
                     
                 })}
                 </tbody>
                 </Table>
        <Button text='Sign Out' class='SignOutButton' clickClass={onClick}/>
        </div>}
        </div>
    )
}

export default Account;