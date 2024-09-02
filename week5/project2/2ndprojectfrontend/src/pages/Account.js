import Button from "../components/button/button";

const Account = () => {
    return(
        <div>
            <nav className= 'AccountNav'>
            <h2 className= 'AccountHotelName'>Hotel California</h2>
            <a className='AccountHPLink' href='#'>Home Page</a>
      </nav>
      <div className='AccountGrid'>
          <div className='GridTop'>Location</div>
          <div className='GridTop'>Date</div>
          <div className='GridTop'>Room Type</div>
          <div className='GridBody'>Place Holder</div>
          <div className='GridBody'>Place Holder</div>
          <div className='GridBody'>Place Holder</div>
      </div>
        <Button text='Sign Out' class='SignOutButton'/>
        </div>
    )
}

export default Account;