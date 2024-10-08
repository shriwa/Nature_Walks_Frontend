import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import * as yup from "yup";

const ContactUs = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Yup schema definition
  const userSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().matches(/^\d+$/, "Phone number must be numeric"),
    message: yup.string().required("Message is required"),
  });

  // Form validation function using Yup
  const validateForm = async () => {
    try {
      const formData = {
        name: form.current.user_name.value,
        email: form.current.user_email.value,
        phone: form.current.user_phone.value,
        message: form.current.message.value,
      };
      await userSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
      return false;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const isValid = await validateForm();
    if (!isValid) return;

    setLoading(true);

    emailjs
      .sendForm("service_z7ot1jm", "template_8njv5ln", form.current, {
        publicKey: "zMuSP_cSV9wW2eweW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="grid md:grid-cols-2  gap-16 items-center relative overflow-hidden p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white md:mt-32 mt-12 mb-8 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-primary before:h-full max-md:before:hidden"
    >
      <div>
        <h2 className="text-primary text-3xl font-extrabold">Get In Touch</h2>
        <p className="text-sm text-gray-500 mt-4 leading-relaxed">
          Have a specific inquiry? Our experienced team is ready to engage with
          you.
        </p>

        {!isSubmitted ? (
          <form ref={form} onSubmit={sendEmail}>
            <div className="space-y-4 mt-8">
              <input
                type="text"
                name="user_name"
                placeholder={errors.name || "Full Name"}
                className={`px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-primary focus:border-secondary outline-none ${
                  errors.name ? "border-red-500 bg-red-100" : ""
                }`}
              />
              <input
                type="text"
                name="user_phone"
                placeholder={errors.phone || "Phone Number"}
                className={`px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-primary focus:border-secondary outline-none ${
                  errors.phone ? "border-red-500 bg-red-100" : ""
                }`}
              />
              <input
                type="email"
                name="user_email"
                placeholder={errors.email || "Email"}
                className={`px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-primary focus:border-secondary outline-none ${
                  errors.email ? "border-red-500 bg-red-100" : ""
                }`}
              />
              <textarea
                name="message"
                placeholder={errors.message || "Write Message"}
                className={`px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-primary focus:border-secondary outline-none ${
                  errors.message ? "border-red-500 bg-red-100" : ""
                }`}
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-primary hover:bg-secondary transition-all duration-700 ease-in-out text-white"
              disabled={loading}
            >
              {loading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin mr-2 h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v4m0 8v4m4-4h4M8 12H4m7.707-7.707l-1.414 1.414M7.757 16.243l-1.414 1.414M16.243 16.243l1.414 1.414M16.243 7.757l1.414-1.414"
                  />
                </svg>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    className="mr-2"
                    viewBox="0 0 548.244 548.244"
                  >
                    <path
                      fillRule="evenodd"
                      d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </form>
        ) : (
          <div>
            <div class="bg-green-100 border-l-8 mt-4 mb-2 border-green-500 text-green-700 p-2 rounded-lg">
              <p className="text-lg text-green-500 ">
                ✅ Message Sent Successfully !
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-primary w-fit mt-2"
              >
                Send Another Message
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Google Maps iframe */}
      <div className="z-10 relative h-full max-md:min-h-[350px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.593465083799!2d80.97340167397684!3d6.819197819658573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae47019f5c8275d%3A0x153def40d4521cda!2sMonisha%20Villa!5e0!3m2!1sen!2slk!4v1727841638789!5m2!1sen!2slk"
          className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
