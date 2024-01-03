import React, { useState, useEffect } from "react";

// export interface ButtonProps {
//   label: string;
// }

// const ContactUs = (props: ButtonProps) => {
//   return <button>{props.label}</button>;
// };

// export default ContactUs;

// import './contactus.css';

interface Errors {
  name: string;
  email: string;
  message: string;
}

export default function ContactUs() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [allErrors, setAllErrors] = useState<Errors | null>(null);
  const [isFormValid, setIsFormValid] = useState(true);

  // useEffect(() => {
  //   validateForm();
  // }, [name, email, message]);

  const validateForm = () => {
    let errors: Errors = {
      name: "",
      email: "",
      message: ""
    };

    if (!name) {
      errors.name = 'Name is required.';
    }

    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }

    if (!message) {
      errors.message = 'message is required.';
    } else if (message.length < 6) {
      errors.message = 'message must be at least 6 characters.';
    }

    setAllErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Sending');
    validateForm();
    if (isFormValid) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form has errors. Please correct them.');
    }
    // let data = {
    //     name,
    //     email,
    //     message
    //   }
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json, text/plain, */*',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   }).then((res) => {
    //     console.log('Response received')
    //     if (res.status === 200) {
    //       console.log('Response succeeded!')
    //       setSubmitted(true)
    //       setName('')
    //       setEmail('')
    //       setBody('')
    //     }
    //   })
    //   .catch((error)=>{console.log(error)})
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h3 className="text-4xl mb-10">Contact Us</h3>
        < form className="" >
          <div className="h-1/2 w-full flex flex-col mt-2 mb-2" >
            < label htmlFor='name'>Name</label>
            < input type='text' name='name' onChange={(e) => { setName(e.target.value) }} className="h-7 text-black" />
          </div>
          < div className="h-1/2 w-full flex flex-col mt-2 mb-2" >
            < label htmlFor='email'>Email</label>
            < input type='email' name='email' onChange={(e) => { setEmail(e.target.value) }} className="h-7 text-black" />
          </div>
          < div className="h-1/2 w-full flex flex-col mt-2 mb-2" >
            < label htmlFor='message'>Message</label>
            < input type='text' name='message' onChange={(e) => { setMessage(e.target.value) }} className="h-14 text-black" />
          </div>
          {
            !isFormValid &&
            <>
              <h6 className="text-red-500 text-md">{allErrors?.name}</h6>
              <h6 className="text-red-500 text-md">{allErrors?.email}</h6>
              <h6 className="text-red-500 text-md">{allErrors?.message}</h6>
            </>
          }
          < button className="rounded-md bg-white text-black text-xl font-bold px-5 py-1 mt-5" onClick={(e) => { handleSubmit(e) }} type='submit'>Submit</button>
        </form >
      </div>
    </main>
  )
}
