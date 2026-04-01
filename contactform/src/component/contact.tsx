import React, { useState } from "react";

interface contactForm{
    name:string;
    email:string;
    phoneNumber:string;
    Address:string
}



const ContactForm=()=>{
    
    const[formData,setFormData]=useState<contactForm>({

        name:"",
        email:"",
        phoneNumber:"",
        Address:""
    }
    )

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name , value} =e.target;
    setFormData((prevState)=>({...prevState,[name]:value}))
    }

    

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{

    e.preventDefault();

    console.log("From submitted suceesfully",formData);
    alert(formData);
  }



    return(
    <>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        Name
                    </label>

                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="email">
                        Email
                    </label>

                    <input id="email" type="text" name="email" value={formData.email} onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="phoneNumber">
                        Phone Number
                    </label>

                    <input id="phoneNumber" type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="Address">
                        Address
                    </label>

                    <input id="Address" type="text" name="Address" value={formData.Address} onChange={handleChange}/>
                </div>
                
                <button type="submit">Submit</button>

            </form>
        </div>
           
    </>    
    )
}


export default ContactForm;