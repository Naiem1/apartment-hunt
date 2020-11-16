import React from 'react';
import { useForm } from "react-hook-form";
import img from '../../images/Rectangle 406.png';
import img1 from '../../images/Rectangle 407.png';
import img2 from '../../images/Rectangle 408.png';
import img3 from '../../images/Rectangle 409.png';
import img4 from '../../images/Rectangle 410.png';
const HomeDetails = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    console.log(data)
  };

  
  return (
    <div className="home-details">
      <section className="banner">
        <h2>APPARTMENT</h2>
      </section>

      <section className="info-section container p-4">
        <div className="row">
          <div className="left-area col-md-8">
            <div className="main-imgBx">
              <img className="img-fluid" src={img}/>
            </div>
            <div className="mini-imgBx">
              <div className="imgBx"><img src={img1}/></div>
              <div className="imgBx"><img src={img2}/></div>
              <div className="imgBx"><img src={img3}/></div>
              <div className="imgBx"><img src={img4}/></div>
              
            </div>
            <div className="text-content">
                <div className="appartment-type">
                  <div className="d-flex justify-content-between">
                  <h2 className="text-dark">Family Apartment Three</h2>
                  <h2 className="text-dark">$256</h2>
                  </div>
                  <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                </div>

                <div className="price-details my-5">
                  <h3>Price Details-</h3>
                  <p>Rent/Month: $550 (negotiable)</p>
                  <p>Service Charge : 8,000/= Tk per month, subject to change</p>
                  <p>Security Deposit : 3 month’s rent</p>
                  <p>Flat Release Policy : 3 months earlier notice required</p>
                </div>

                <div className="proparty-detials"> 
                  <h3>Property Details-</h3>
                  <p>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi  Residential Area.</p>

                  <p>Flat Size : 3000 Sq Feet.</p>

                  <p>Floor :  A5 (5th Floor) (6 storied  Building ) (South Facing Unit)</p>
                  <p>Room Category : 3  Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room,  Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.</p>
                  <p>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.</p>
                  <p>Flat Size : 3000 Sq Feet.</p>
                  <p>Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)</p>
                  <p>Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.</p>
                  <p>Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.</p>
                  <p>Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera</p>
                </div>
            </div>
          </div>
          
          <div className="right-area col-md-4 px-4">
            <div className="form-container p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                 type="text"
                 name="Fullname"
                 placeholder="Full Name" 
                 ref={register}
                />
                <input 
                 type="text"
                 name="Phone No"
                 placeholder="Phone No." 
                 ref={register}
                />

                <input 
                 type="text"
                 name="Eamil"
                 placeholder="Email Address"
                 ref={register}
                />

                <textarea 
                 type="textarea"
                 name="massage"
                 placeholder="Your message"
                 ref={register({ required: true })}
                />
                
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit"
                 value="Request Booking"
                 />
              </form>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default HomeDetails;