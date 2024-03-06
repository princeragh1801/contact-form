import React from 'react'
import Input  from '../components/Input';
import Button from "../components/Button"
import {useForm} from "react-hook-form"

function Contact() {
  const {register, handleSubmit} = useForm();

  const submit = async(data) => {
    console.log("Data : ", data)
    try {
      const formData = new FormData();
      formData.append("Name", data.name)
      formData.append("Email", data.email)
      formData.append("PhoneNumber", data.phonenumber)
      formData.append("Message", data.message)
      console.log("Form data : ", formData);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzVCaNVtVOWcyVo4Xu2aSYT-TdFdLrqF8Bua7vlKSF-utZQ_Vjikany_9k0mgyYOl0_rA/exec",
        {
          method : 'POST',
          body : formData,
        }
      )
      if(!response.ok){
        console.log("Error while posting the formdata");
      }
      console.log("Sent the data successfully");
      console.log("Response : " ,response);
    } catch (error) {
      console.log(error.message)
    }
  }

  
  return (
    <div>
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
      
      <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        veritatis voluptates neque itaque repudiandae sint, explicabo assumenda
        quam ratione placeat?
      </p>
    </div>
    <div className="mx-auto max-w-7xl py-12 md:py-24">
      <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="px-2 md:px-12">
            <p className="text-2xl font-bold text-gray-900 md:text-4xl">
              Get in touch
            </p>
            <p className="mt-4 text-lg text-gray-600">
            Fill out the form below, <br /> and our team will reach out to you soon..
            </p>
            <form onSubmit={handleSubmit(submit)} className="mt-4 space-y-4">
              <div className="grid w-full md:gap-x-4 lg:grid-cols-1">
                <div className="grid w-full  items-center">
                  <Input 
                  label = "Name" 
                  placeholder = "Enter your name" 
                  {...register("name", {
                    required : true,
                  })}
                  />
                </div>
                <div className="grid w-full  items-center">
                <Input
                  label="Email: "
                  placeholder="Enter your email"
                  type="email"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    },
                  })}
                />
                </div>
                <div className="grid w-full  items-center">
              <Input 
                label = "Phone Number" 
                placeholder = "Enter your phone number" 
                {...register("phonenumber",{
                  required : true,
                })}
              />
              </div>

              <div className="grid w-full  items-center gap-1">
                <Input 
                  label = 'Message' 
                  placeholder = 'Leave your message'
                  {...register("message", {
                    required : true
                  })}
                />
              </div>
              <Button title={"Submit"} type='submit' className='bg-black text-white '/>
              </div>
              
            </form>
          </div>
        </div>
        <img
          alt="Contact us"
          className="hidden max-h-full w-full rounded-lg object-cover lg:block"
          src="https://media.istockphoto.com/id/1037400776/photo/wood-block-symbol-telephone-mail-address-and-mobile-phone-website-page-contact-us-or-e-mail.webp?b=1&s=170667a&w=0&k=20&c=XiSbA3uMO6yjwIr56Hl4-R6DqBeCuJHptZ8Wfb7rEiA="
        />
      </div>
    </div>
  </div>

</div>

  );
}


export default Contact
