
import React, { useState } from "react";

function Contact() {
const [data,setdata] = useState({
  fullName:"",
  phone:"",
  email:"",
  message:""

});

const InputEvent=(e)=>{
  const {name,value} = e.target;
  setdata((preval)=>{
    return{
      ...preval,
      [name]:value,
    }
  })
}

const formSubmit=((e)=>{
  e.preventDefault();
  setdata({
  fullName:"",
  phone:"",
  email:"",
  message:""
  });
})

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container container_div">
        <div classname="row">
          <div ClassName="col-md-6 col-10 mx-auto">
          <form>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="fullName"
                value={data.fullName}
                onChange={InputEvent}
                placeholder="John Cena"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
               Phone
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                placeholder="123 456 7890"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="message"
                value={data.message}
                onChange={InputEvent}
                rows="3"
              ></textarea>
            </div>
            <div className="col-12">
            <button  type="button" onClick={formSubmit} className="btn btn-outline-primary">Submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
