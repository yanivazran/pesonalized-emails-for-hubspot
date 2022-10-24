import React from 'react';
import { Formik, Form, Field } from 'formik';
import Link from 'next/link'
import * as Yup from 'yup';
import TextInput from '../../../common/components/textinput';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
		.required('No password provided.') 
		.min(8, 'Password is too short - should be 8 chars minimum.')
		.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
	passwordConfirmation: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('please confirm your password.') 
		,
  
});

export const Signup = () => (
  <div className="container w-75 my-4 ">
		<div className='row mb-3'>
      <h3 className='col d-flex justify-content-center'>Sign Up </h3>
		</div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
				email: '',
				password:'',
				passwordConfirmation:'',
        
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ handleReset,errors, touched }) => (
        <Form>
            <TextInput
                label="First Name:"
                id="firstName"
                name="firstName"
                helpText="Must be 2-12 characters."
                type="text"
            />
            <TextInput
                label="Last Name:"
                id="lastName"
                name="lastName"
                helpText="Must be 2-12 characters."
                type="text"
            />
            <TextInput
                label="Email adress:"
                id="email"
                name="email"
                helpText="Must be 2-12 characters."
                type="email"
            />
            <TextInput
                label="Choose password:"
                id="password"
                name="password"
                helpText="Must be 2-12 characters."
                type="password"
            />
						<TextInput
                label="Confirm password:"
                id="passwordConfirmation"
                name="passwordConfirmation"
                helpText="Must be 2-12 characters."
                type="password"
            />
 
						<div className='row'>
							<div className='col mb-2'>
								<button className=" btn btn-primary " type="submit">Submit form</button>
							</div>
							<div className='col  mb-2'>
								<button className="btn btn-primary " type="reset" onClick={handleReset}>Reset form</button>
							</div>
						</div>
            <div className="col form-group mt-3">
              Alredy registered ?{" "}
              <Link href="/">
									<a className="" >Login</a>
							</Link>             
             </div>
        </Form>
      )}
    </Formik>
  </div>
   );