import React, { useState } from 'react'
import Input  from '../components/Input';
import Button from "../components/Button"
import {useForm} from "react-hook-form"
import toast from 'react-hot-toast';

function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register, 
    handleSubmit,
    reset
  } = useForm();
  const emailRegx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const phoneRegx = /^\d{10}$/;
  const submit = async(data) => {
    setLoading(true)
    console.log("Data : ", data)
    if(!data.name || !data.email || !data.phonenumber || !data.message){
      toast.error("All the fields are required");
    }
    if(!data.email.match(emailRegx)){
      toast.error("Enter valid email address")
      setLoading(false)
      return;
    }
    if(!data.phonenumber.match(phoneRegx)){
      toast.error("Enter valid phone number")
      setLoading(false)
      return;
    }
    try {
      const url =  String(import.meta.env.VITE_SPREADSHEET_URL);
      const formData = new FormData();
      formData.append("Name", data.name)
      formData.append("Email", data.email)
      formData.append("PhoneNumber", data.phonenumber)
      formData.append("Message", data.message)
      console.log("Form data : ", formData);
      const response = await fetch(
        url,
        {
          method : 'POST',
          body : formData,
        }
      )
      if(!response.ok){
        toast.error("Error while posting");
        console.log("Error while posting the formdata");
        setLoading(false)
        return;
      }
      // console.log("Sent the data successfully");
      toast.success("Your query has been sent, our team will contact you soon")
      reset({
        name : "",
        email : "",
        phonenumber : "",
        message : ""
      })
      // console.log("Response : " ,response);
    } catch (error) {
      toast.error(error.message);

    }
    setLoading(false)
  }


  return (
    <div className="flex mx-auto items-center justify-center m-24">
      {/* Left Container */}
      <div className="w-auto p-4 my-auto">
        <h2 className="text-[40px] font-bold mb-2">Get in Touch</h2>
        <h2 className="text-3xl font-bold mb-10">Fill out the form below, <br />our team will reach <br /> out to you soon.</h2>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Name :"
            placeholder="Enter your name"
            {...register("name")}
            
          />

          <Input
            label="Email : "
            placeholder="Enter your email"
            type="email"
            {...register("email")}
          />
          <Input
          label="Phone Number :"
          placeholder="Enter your phone number"
          type="tel"
          {...register("phonenumber")}
        />
          
          <Input
            label="Message : "
            type="text"
            placeholder="Leave your message "
            {...register("message")}
          />
          <Button
            type="submit"
            title="Submit"
            disabled = {loading}
            className="mt-2 bg-black text-white p-4"
            // onclick = {setLoading(true)}
          >
            
          </Button>
        </form>
      </div>

      {/* Right Container */}
      <div className="w-1/2 p-4">
        <img
          src="https://media.istockphoto.com/id/1037400776/photo/wood-block-symbol-telephone-mail-address-and-mobile-phone-website-page-contact-us-or-e-mail.webp?b=1&s=170667a&w=0&k=20&c=XiSbA3uMO6yjwIr56Hl4-R6DqBeCuJHptZ8Wfb7rEiA="
          alt="Placeholder Image"
          className="mx-20 w-[40vw] h-auto rounded-lg justify-center"
        />
      </div>
    </div>

  );
}

export default Contact
