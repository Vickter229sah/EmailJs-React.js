import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
const EmailForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_qybxg5c';
        const templateId = 'template_7h7r77h';
        const publicKey = 'Pgl_3Naj6qTeYqhAV';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name : 'Vickter',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response)=> {
             console.log('Email sent successfully to ', + serviceId +  response);
             setName('');
             setEmail('');
             setMessage('');
         
        })
        .catch((error) => {
             console.error('Error sending email', error);
         });



    }




    return (
        <div>
            <form onSubmit={handleSubmit} className='emailform' >
                <input
                type = 'text'
                placeholder = 'Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input
                type = 'email'
                placeholder = 'Your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <textarea 
                cols ="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                >

                </textarea>
                <button
                type ='submit'
                
                >Send Email</button>
                
            </form>
        </div>
    );
}
export default EmailForm;