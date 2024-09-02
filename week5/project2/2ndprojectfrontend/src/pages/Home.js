import Field from '../components/Field';
import { Form } from '../components/Form/Form';
import Button from '../components/button/button';
import room1 from '../images/OneBedroom.jpg'
import room2 from '../images/TwoBedroom.jpg'
import room3 from '../images/DeluxeSuite.jpg'
import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import {useHistory} from 'react-router-dom';

// const Home = () => {
//   const [startDate, setStartDate] = useState(null);
//   const [EndDate, setEndDate] = useState(null);
//   return(
//     <div>
//       <nav className= 'HPNav'>
//         <h2 className= 'HPHotelName'>Hotel California</h2>
//         <a className='HPAccountLink' href='#'>Account</a>
//       </nav>
//       <div className='HPReserveOptions'>
//         <div>
//           <label for='location'>Select Hotel: </label>
//           <select name='location' className='HPDropdown'>
//             <option value='Hotel 1'>East Side</option>
//             <option value='Hotel 2'>West Side</option>
//             <option value='Hotel 3'>North Side</option>
//           </select>
//         </div>
//         <div>
//           <DatePicker selected={startDate}
//           onChange={date => setStartDate(date)}
//           className='HPDateSelect'
//           placeholderText='Start Date'>
//           </DatePicker>
//         </div>
//         <div>
//           <DatePicker selected={EndDate}
//           onChange={date => setEndDate(date)}
//           minDate={new Date(startDate)}
//           className='HPDateSelect'
//           placeholderText='End Date'>
//           </DatePicker>
//         </div>
//         <div>
//           <label for='roomType'>Room Type: </label>
//           <select name='roomType' className='HPDropdown'>
//             <option value='Hotel 1'>One Bedroom Suite</option>
//             <option value='Hotel 2'>Two Bedroom Suite</option>
//             <option value='Hotel 3'>Deluxe Suite</option>

const Home = () => {
  const [hotel,setHotel] = useState("Hotel 1");
  const [stayDate, setStayDate] = useState({
    startDate:"",
    endDate:""
  })
  const [startDate, setStartDate] = useState(null);
  const [EndDate, setEndDate] = useState(null);

  const [rooms,setRooms] = useState("Room 1");
  const history = useHistory();


  const onChangeHotel = (e) => {
    setHotel(e.target.value);
  }

  
  const onStaydate = (e) => {
    const {name,value} = e.target;
    setStayDate(prevdata => ({
      ...prevdata,
      [name]:value
    }))
  }

  const onChangeRoom = (e) => {
    setRooms(e.target.value);
  }

  const onSubmit = (e) => {
    const HotelData = {
      hotel:hotel,
      startDate: stayDate.startDate,
      endDate:stayDate.endDate,
      rooms:rooms
    }
    history.push({
      pathname:'/login',
      state:HotelData
    });
   
   
  }

  return(
    <div>
      <nav className= 'HPNav'>
        <h2 className= 'HPHotelName'>Hotel California</h2>
        <a className='HPAccountLink' href='/login'>Account</a>
      </nav>
      <Form onSubmit={onSubmit}>
      <div className='HPReserveOptions'>
        <div>
          <label for='location'>Select Hotel: </label>
          <select onChange={onChangeHotel} name='location' className='HPDropdown'>
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
          <select onChange={onChangeRoom} name='roomType' className='HPDropdown'>
            <option value='Hotel 1'>One Bedroom Suite</option>
            <option value='Hotel 2'>Two Bedroom Suite</option>
            <option value='Hotel 3'>Deluxe Suite</option>
          </select>
        </div>
        <div>
          <Button class='BookBtn' text='Book Room'/>
        </div>
      </div>
      </Form>
      <div className='HPCarousel'>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {room1}
      alt="First slide"
    />
    <Carousel.Caption style={{backgroundColor: 'teal', marginBottom: '20px'}}>
      <h3>One Bed Suite</h3>
      <p>Our one bed suites can accommodate two people. Perfect for couples!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {room2}
      alt="Second slide"
    />

    <Carousel.Caption style={{backgroundColor: 'teal', marginBottom: '20px'}}>
      <h3>Two Bed Suite</h3>
      <p>Our two bed suites can accommodate up to four people. Perfect for parents on the go!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {room3}
      alt="Third slide"
    />

    <Carousel.Caption style={{backgroundColor: 'teal', marginBottom: '20px'}}>
      <h3>Deluxe Suite</h3>
      <p>Our deluxe suite accommodates two people and includes complimentary room service breakfast. The ideal home away from home!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    </div>
  )}

export default Home;