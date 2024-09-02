import Field from '../components/Field';
import { Form } from '../components/Form/Form';
import Button from '../components/button/button';
import room1 from '../images/OneBedroom.jpg'
import room2 from '../images/TwoBedroom.jpg'
import room3 from '../images/DeluxeSuite.jpg'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Home = () => {
  const [hotel,setHotel] = useState("East Side");
  const [stayDate, setStayDate] = useState({
    startDate:"",
    endDate:""
  })
  const [rooms,setRooms] = useState("One Bed Suite");
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

  const Press = () => {
    history.push({
      pathname:'/login'})
  }

  return(
    <div>
      <nav className= 'HPNav'>
        <h2 className= 'HPHotelName'>Hotel California</h2>
        <Form onSubmit={Press}>
        <Button class='BookBtn' text='Account'/>
        </Form>
      </nav>
      <Form onSubmit={onSubmit}>
      <div className='HPReserveOptions'>
        <div>
          <label for='location'>Select Hotel: </label>
          <select onChange={onChangeHotel} name='location' className='HPDropdown'>
                  <option value='East Side'>East Side</option>
                  <option value='West Side'>West Side</option>
                  <option value='North Side'>North Side</option>
          </select>
        </div>
        <div>
          <Field class='HPDateSelect' type='date' value={stayDate.startDate} onChange={onStaydate} name='startDate' />
        </div>
        <div>
          <Field class='HPDateSelect' type='date' value={stayDate.endDate} onChange={onStaydate}  name='endDate' />
        </div>
        <div>
          <label for='roomType'>Room Type: </label>
          <select onChange={onChangeRoom} name='roomType' className='HPDropdown'>
                <option value='One Bed Suite'>One Bed Suite</option>
                <option value='Two Bed Suite'>Two Bed Suite</option>
                <option value='Deluxe Suite'>Deluxe Suite</option>
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