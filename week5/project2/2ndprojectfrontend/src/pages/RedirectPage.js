import Table from 'react-bootstrap/Table';
import { useHistory } from "react-router";
import Button from '../components/button/button';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";



const RedirectPage = (props) => {
    let {state} = props.location;
    const history = useHistory();
    const [val,setVal] = useState([]);

    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [EndDate, setEndDate] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(state === undefined);
    console.log(state);
 
    const onClick = () => {
        history.push('/');
    }

    useEffect(() => {
        state.userdata.hotel.map(items => {
            return setVal(prevval => {
                 return [...prevval,items];
            })
        })
    },[]);

    const deleteItem = (id) => {
        console.log(state.userdata.email,id);
        const deleteDate = {
            email:state.userdata.email,
            id:id
        }
        axios.post('http://localhost:8080/delhotel',deleteDate);
        setVal(prevval => {
            return prevval.filter((items,index) => {
                return index != id;
            })
        })   
    }


     return ( 
         <div>
             {state===undefined ? 
             <div>
                 <h1>404 Page not found</h1>
             </div>:
             <div>
                 <h1>Welcome {state.userdata.username} </h1>
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
                                    <button onClick={handleShow}>Update</button>
                                    <Modal show={show} onHide={handleClose}> 
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal Heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body> 
                                        <div className='HPReserveOptions'>
                                                <div>
                                                <label for='location'>Select Hotel: </label>
                                                <select name='location' className='HPDropdown'>
                                                    <option value='Hotel 1'>East Side</option>
                                                    <option value='Hotel 2'>West Side</option>
                                                    <option value='Hotel 3'>North Side</option>
                                                </select>
                                                </div>
                                                <div>
                                                <DatePicker selected={startDate}
                                                onChange={date => setStartDate(date)}
                                                className='HPDateSelect'
                                                placeholderText='Start Date'>
                                                </DatePicker>
                                                </div>
                                                <div>
                                                <DatePicker selected={EndDate}
                                                onChange={date => setEndDate(date)}
                                                minDate={new Date(startDate)}
                                                className='HPDateSelect'
                                                placeholderText='End Date'>
                                                </DatePicker>
                                                </div>
                                                <div>
                                                <label for='roomType'>Room Type: </label>
                                                <select name='roomType' className='HPDropdown'>
                                                    <option value='Hotel 1'>One Bedroom Suite</option>
                                                    <option value='Hotel 2'>Two Bedroom Suite</option>
                                                    <option value='Hotel 3'>Deluxe Suite</option>
                                                </select>
                                                </div>
                                                </div>
                                         </Modal.Body>
                                        <Modal.Footer>
                                            <button onClick={handleClose}>Close</button>
                                            <button onClick={handleClose}>Save Change</button>
                                        </Modal.Footer>
                                    </Modal>
                               </>
                            </td>
                            <td>
                                <button onClick={() => {
                                    deleteItem(index);
                                }}>Delete</button>
                            </td>
                        </tr>
                    )
                     
                 })}
                 </tbody>
                 </Table>
             </div>}
             <Button clickClass={onClick} text="Log Out" />
         </div>
     )
     
 }
 
 
 export default RedirectPage;