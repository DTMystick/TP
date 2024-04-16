import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from 'yup';

const FastForm = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        number: "",
        road: "",
        city: "",
        zipCode: "",
        phone: "",
        email: ""
    }

    const submit = (values) => {
        console.log(values);
    }

    const validationSchema = yup.object().shape({
        firstName: yup.string().required("Champs requis"),
        lastName: yup.string().required("Champs requis"),
    })

    return (
        <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validationSchema}>

            <Form className='w-50'>
            
                <div className='row'>
                    <h1 className='text-center'>Informations</h1> <hr />
                    <div className='col-5'>
                        <Field name="gender" type="radio" />
                        <label htmlFor="male" className='me-2'>M.</label>
                        <Field name="gender" type="radio" />
                        <label htmlFor="female" className='me-2'>Mme</label>
                        <Field name="gender" type="radio" />
                        <label htmlFor="other" className='me-2'>Autre</label>


                        <Field name="firstName" placeholder="Firstname" className="my-2" />
                        <ErrorMessage name="firstName" />
                        <Field name="lastName" placeholder="Lastname" className="my-2" />
                        <ErrorMessage name="lastName" />
                        <label htmlFor="birthday">Birthday</label><br />
                        <Field name="birthday" type="date" className="my-1" />
                        <ErrorMessage name="firstName" />
                    </div>
                    <span className='vertical col-1 '></span>
                    <div className='col-5'>
                        <label htmlFor="adress">Adress</label>

                        <Field name="Number" type="number" placeholder="Number" className="my-2" />
                        <ErrorMessage name="firstName" />
                        <Field name="Road" placeholder="Road" className="my-2" />
                        <ErrorMessage name="firstName" />
                        <Field name="City" placeholder="City" className="my-2" />
                        <ErrorMessage name="firstName" />
                        <Field name="Zipcode" placeholder="Zipcode" className="my-2" />
                        <ErrorMessage name="firstName" />
                    </div>
                </div> <hr />
                        <label htmlFor="contact">Contact</label><br />
                <div className='row'>
                    <div className='col-6'>
                        <Field name="Phone" type="tel" placeholder="Phone" className="my-1" />
                        <ErrorMessage name="firstName" />
                    </div>
                   
                    <div className='col-6'>

                        <Field name="Email" type="email" placeholder="Email" className="my-1" />
                        <ErrorMessage name="firstName" />
                    </div>
                </div><hr />
                <div className='row'>
                    <div className='col-12'>

                        <Field type="submit" value="Submit" className="w-100 bg-primary text-white" />
                    </div>
                </div>
             
            </Form>
        </Formik>
    )
}

export default FastForm