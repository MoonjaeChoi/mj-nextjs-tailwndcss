import React, { useRef,useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
    const form = useRef();
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(e.target[2].value)
        console.log(e.target[3].value)
    
        emailjs.sendForm('service_xpu8ody', 'template_vothe5p', form.current, 'gO7_zotQ-wYN2GYjh')
          .then((result) => {
              console.log(result.text);
              setName('')
              setEmail('')
              setSubject('')
              setMessage('')
          }, (error) => {
              console.log(error.text);
          });

        console.log('result: '+e.target[0].value)
        console.log('result: '+e.target[1].value)
        console.log('result: '+e.target[2].value)
        console.log('result: '+e.target[3].value)
      };

    const inputHandler = (e) => {
        const controlName = e.target.name
        const controlValue = e.target.value

        switch(controlName) {
            case 'user_name':
                setName(controlValue)
                break
            case 'user_email':
                setEmail(controlValue)
                break
            case 'subject':
                setSubject(controlValue)
                break
            case 'message':
            default:
                setMessage(controlValue)
                break
        }
    }

  return (
    <section id="contact" className='pb-16'>
        <div className="container">
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>
                Get in touch
            </h2>
            <div className="md:flex justify-between items-center">
                <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4889.71861945013!2d127.00317141008658!3d37.37586792710673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5f6c44086951%3A0xe4609ec6585a5994!2z66Gv642w7ZSE66as66-47JeE7JWE7Jq466CbIO2DgOyehOu5jOudvOyKpA!5e0!3m2!1sko!2skr!4v1684502108078!5m2!1sko!2skr"
                        className='border-0 w-full h-full'
                        allowFullScreen='' 
                        loading='lazy' 
                        referrerPolicy='no-referrer-when-downgrade'>
                </iframe>
                </div>

                <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                    <form
                        ref={form} onSubmit={sendEmail} 
                        className='w-full'>
                        <div className="mb-5">
                            <input
                                type='text'
                                name="user_name"
                                onChange={inputHandler} 
                                value={name}
                                placeholder='Enter your name'
                                className='w-full p-3 focus:outline-none rounded-[5px]'
                                />
                        </div>
                        <div className="mb-5">
                            <input
                                type='email'
                                name="user_email"
                                onChange={inputHandler}
                                value={email}
                                placeholder='Enter your email'
                                className='w-full p-3 focus:outline-none rounded-[5px]'
                                />
                        </div>
                        <div className="mb-5">
                            <input
                                type='text'
                                name="subject"
                                onChange={inputHandler}
                                value={subject}
                                placeholder='Subject'
                                className='w-full p-3 focus:outline-none rounded-[5px]'
                                />
                        </div>
                        <div className="mb-5">
                            <textarea
                                type='text'
                                name="message"
                                onChange={inputHandler}
                                value={message}
                                rows={3}
                                placeholder='Write your message'
                                className='w-full p-3 focus:outline-none rounded-[5px]'
                                />
                        </div>

                        <button
                            type="submit" 
                            value="Send" 
                            className='w-full p-3 focus:outline-none rounded-[5px] bg-smalltextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>
                            Send Message</button>
                    </form>
                </div>

            </div>
        </div>

    </section>
  )
}

export default Contact