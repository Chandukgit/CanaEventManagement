import emailjs from '@emailjs/browser';

/**
 * Programmatically sends event enquiry details to canaeventselite@gmail.com using EmailJS.
 * Resolves keys from environment variables for production security.
 * 
 * @param {Object} data - Submitted form fields (firstName, lastName, email, phone/mobileNumber, eventType, customService, eventDate, message)
 * @returns {Promise} - EmailJS send promise
 */
export const sendEnquiryEmail = (data) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    const errorMsg = "EmailJS configuration keys are missing. Please configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your local .env file.";
    console.error(errorMsg);
    return Promise.reject(new Error(errorMsg));
  }

  // Map to the user's EmailJS template variables: {{name}}, {{email}}, {{phone}}, {{event_type}}, {{event_date}}, {{guest_count}}, {{message}}
  const templateParams = {
    name: `${data.firstName || ''} ${data.lastName || ''}`.trim(),
    email: data.email,
    phone: data.phone || data.mobileNumber || 'Not provided',
    event_type: data.eventType === "Custom Service" && data.customService ? `Custom Service (${data.customService})` : (data.eventType || 'General Enquiry'),
    event_date: data.eventDate || 'Not specified',
    guest_count: data.guestCount || 'Not specified',
    message: data.message
  };

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
};
