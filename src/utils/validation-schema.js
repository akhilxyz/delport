import * as Yup from 'yup';

// law_schema
export const law_schema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(11).label("Phone"),
  msg: Yup.string().required().min(20).label("Message"),
});


// contact_schema
export const contact_schema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required').min(2, 'First Name must be at least 2 characters').label("First Name"),
  lastName: Yup.string().required('Last Name is required').min(2, 'Last Name must be at least 2 characters').label("Last Name"),
  email: Yup.string().required('Email is required').email('Invalid email format').label("Email"),
  phone: Yup.string().required('Phone is required').min(11, 'Phone number must be at least 11 characters').label("Phone"),
  msg: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters').label("Message"),
});

export const driver_application_schema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required').min(2, 'First Name must be at least 2 characters').label("First Name"),
  lastName: Yup.string().required('Last Name is required').min(2, 'Last Name must be at least 2 characters').label("Last Name"),
  email: Yup.string().required('Email is required').email('Invalid email format').label("Email"),
  phone: Yup.string().required('Phone is required').min(11, 'Phone number must be at least 11 characters').label("Phone"),
  selectedValue: Yup.string().required('Please select a value').label("Applying for"),
  msg: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters').label("Message"),
  driverLicense: Yup.mixed().required('Driver License Number is required'),
  exp: Yup.mixed().required('Years of Exprience is required').label("Years of Exprience"),
});



// contact_schema
export const portfolio_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(11).label("Phone"),
  subject: Yup.string().required().label("Subject"),
  msg: Yup.string().required().min(20).label("Message"),
});


export const register_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export const login_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password")
});


export const blogSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  number: Yup.string().required().min(11).label("Number"),
  msg: Yup.string().required().min(20).label("Message"),
  terms: Yup.bool().oneOf([true, 'You need to accept the terms and conditions']),
});
