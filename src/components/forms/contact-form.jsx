import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import { contact_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";
import NiceSelect from "@ui/niceSelect";
import Link from "next/link";
import axios from "axios";

const ContactForm = () => {

  // const selectHandler = (value) => {};

  // const handleSelectChange = (value) => {
  //   if (value === "Select Subject") {
  //     setFieldValue('selectedValue', '');
  //   } else {
  //     setFieldValue('selectedValue', value);
  //     selectHandler(value);
  //   }
  // };


  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus()
  },[])
 

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched , isSubmitting } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        msg: "",
      },
     
      validationSchema: contact_schema,

      onSubmit: async (values, { resetForm, setSubmitting }) => {

        setSubmitting(true);
  
        try {
          const response = axios.post('/api/send-email', {
            to: 'info@goldenmileinc.com',
            subject: 'Golden Mile New Lead',
            data: values,
            type:'CONTACTFORM'
          })
          alert('Form Submitted successfully!');
          resetForm();
        }
        catch (error) {
          console.error(error);
        }
        finally {
          setSubmitting(false);
        }
      },
    });

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field">
            <input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={inputRef}
              type="text"
              placeholder="First Name"
              id="firstName"
              autofocus
            />
            <i className="fas fa-user"></i>
            {touched.firstName && errors.firstName && <ErrorMsg error={errors.firstName} />}
          </div>
        </div>

        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field">
            <input
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Last name"
              id="lastName"
            />
            <i className="fas fa-user"></i>
            {touched.lastName  && errors.lastName &&  <ErrorMsg error={errors.lastName} />}
          </div>
        </div>
        
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Email Adress"
              id="email"
            />
            <i className="fas fa-envelope"></i>
            {touched.email && errors.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field">
            <input
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Phone"
              id="phone"
            />
            <i className="fas fa-phone-alt"></i>
            {touched.phone && errors.phone &&  <ErrorMsg error={errors.phone} />}
          </div>
        </div>
        {/* <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field select">
          <NiceSelect
              options={[
                { value: "Select Subject", text: "Select Subject" },
                { value: "Subject One", text: "Subject One" },
                { value: "Subject Two", text: "Subject Two" },
                { value: "Subject Three", text: "Subject Three" },
              ]}
              defaultCurrent={0}
              name="selectSubject"
              defaultValue={values.selectedValue}
              onChange={handleSelectChange}
            />
            {touched.selectedValue && values.selectedValue === "" && (
              <ErrorMsg error={errors.selectSubject} />
            )}
          </div>
        </div> */}
        <div className="col-xxl-12 col-xl-12 col-lg-12">
          <div className="single-input-field textarea">
            <textarea
              name="msg"
              rows="10"
              cols="10"
              value={values.msg}
              onChange={handleChange}
              onBlur={handleBlur}
              id="msg"
              placeholder="Write Massage"
            ></textarea>
            <i className="fas fa-edit"></i>
            {touched.msg && errors.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
        <p style={{fontSize:"12px"}}>
        On Submitting this form, you agree to Golden Mile Enterprise&apos;s Terms of Use and Privacy Policy. You consent to receive phone calls and SMS messages from Golden Mile Enterprise to provide updates and information regarding your business with Golden Mile Enterprise. Message frequency may vary. Message & data rates may apply. Reply STOP to opt-out of further messaging. Reply HELP for more information. See our <Link href="/privacy-policy" style={{color:"blue"}}>Privacy Policy</Link>.
        </p>
        <div className="col-xxl-12 col-xl-12">
          <button type="submit" disabled={isSubmitting} aria-disabled={isSubmitting} className="fill-btn clip-btn">Send a message</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
