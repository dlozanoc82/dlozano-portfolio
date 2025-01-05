import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


export const useEmail = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const name = form.current.user_name.value;
        const email = form.current.user_email.value;
        const message = form.current.message.value;

        // Validación de los campos
        if (!name || !email || !message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields.',
            });
            return;
        }

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Your message has been sent.',
                    });
                    form.current.reset();
                },
                (error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed...',
                        text: `Something went wrong. Please try again.`,
                    });
                    console.log('FAILED...', error.text);
                }
            );
    };


    return{
        form,
        sendEmail
    }


}