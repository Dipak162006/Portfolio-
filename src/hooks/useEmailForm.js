import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const useEmailForm = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setErrorMessage('');

    // PASTE YOUR EMAILJS KEYS HERE:
    const SERVICE_ID = 'service_uq2emdf';
    const TEMPLATE_ID = 'template_w3jgxu3';
    const PUBLIC_KEY = 'Qn6ovJ35IGEChiTLF';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          setIsSubmitting(false);
          setIsSuccess(true);
          if (formRef.current) formRef.current.reset();
          setTimeout(() => setIsSuccess(false), 5000); // Clear success message after 5s
      }, (error) => {
          setIsSubmitting(false);
          setErrorMessage('Failed to send message. Please try again or email me directly.');
          console.error("EmailJS Error:", error.text);
      });
  };

  return {
    formRef,
    isSubmitting,
    isSuccess,
    errorMessage,
    sendEmail
  };
};
