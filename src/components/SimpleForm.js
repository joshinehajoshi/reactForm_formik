import React from 'react';
import {useFormik} from 'formik';
import '../App.css';
import {Col, Row} from 'react-bootstrap';

function SimpleForm() {

        const formik = useFormik({
            initialValues:{
                firstname:"",
                lastname:"",
                college:"",
                university:"",
                branch:"",
                city:"",
                email:""
            },
            onSubmit : values => {
                console.log("Form values", values)
            },
            validate: values => {
                const errors = {};
                if(!values.firstname){
                    errors.firstname = 'Required';
                }
                if(!values.lastname){
                    errors.lastname = 'Required';
                }
                if(!values.college){
                    errors.college = 'Required';
                }
                if(!values.university){
                    errors.university = 'Required';
                }
                if(!values.branch){
                    errors.branch = 'Required';
                }
                if(!values.city){
                    errors.city = 'Required';
                }
                if(!values.email){
                    errors.email = 'Required';
                }
                return errors
            }
        })
        
        
        

    return (
        <>
        <h1 className="heading">Form in React using Formik</h1>
        <form className="forms" onSubmit={formik.handleSubmit}>
        <div className="form-control">
        <Row>
            <Col><label htmlFor="firstname">First Name</label></Col>
            <Col><input type="text" id="firstname" name="firstname" {...formik.getFieldProps('firstname')}></input></Col><br />
            {formik.touched.firstname && formik.errors.firstname ?<div className="errors">{formik.errors.firstname}</div>:null}
            </Row>
            </div>


            <div className="form-control">
            <Row>
            <Col><label htmlFor="lastname">Last Name</label></Col>
            <Col><input type="text" id="lastname" name="lastname" {...formik.getFieldProps('lastname')}></input></Col><br />
            {formik.touched.lastname && formik.errors.lastname ?<div className="errors">{formik.errors.lastname}</div>:null}
            </Row>
            
            </div>

            <div className="form-control">
            <Row>
            <Col><label htmlFor="college">College</label></Col>
            <Col><input type="" id="college" name="college" o{...formik.getFieldProps('college')}></input></Col><br />
            {formik.touched.college && formik.errors.college ?<div className="errors">{formik.errors.college}</div>:null}
            </Row>
            </div>

            <div className="form-control">
            <Row>
            <Col><label htmlFor="university">University</label></Col>
            <Col><input type="text" id="university" name="university" {...formik.getFieldProps('university')} ></input></Col><br />
            {formik.touched.university && formik.errors.university ?<div className="errors">{formik.errors.university}</div>:null}
            </Row>
            </div>

            <div className="form-control">
            <Row>
            <Col><label htmlFor="branch">Branch</label></Col>
            <Col><input type="text" id="branch" name="branch" {...formik.getFieldProps('branch')}></input></Col><br/>
            {formik.touched.branch && formik.errors.branch ?<div className="errors">{formik.errors.branch}</div>:null}
            </Row>
            </div>

            <div className="form-control">
            <Row>
            <Col><label htmlFor="city">City</label></Col>
            <Col><input type="text" id="city" name="city" {...formik.getFieldProps('city')}></input></Col><br/>
            {formik.touched.city && formik.errors.city ?<div className="errors">{formik.errors.city}</div>:null}
            </Row>
            </div>

            <div className="form-control">
            <Row>
            <Col><label htmlFor="email">Email</label></Col>
            <Col><input type="email" id="email" name="email" {...formik.getFieldProps('email')}></input></Col><br/>
            {formik.touched.email && formik.errors.email ?<div className="errors">{formik.errors.email}</div>:null}
            </Row>
            </div>

            <div className="btn1">
            <button type="submit" >Submit</button>
            </div>
           
        </form>
        </>
    );
    }


export default SimpleForm;