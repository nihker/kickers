import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from './../../ui/formField';
import { validate } from '../../ui/misc';

class Enroll extends Component {

    state = {
        formError: false,
        formSubmit:'',
        formdata: {
            email:{
                element:'input',
                value:'',
                config: {
                    name:'email_input',
                    type:'email',
                    placeholder:'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:''
            }
        }
    }

    submitForm(event) {
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formdata) {
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }

        if(formIsValid) {
            
        } else {
            // have a error
            this.setState({
                formError: true
            })
        }
    }

    updateForm(element) {
        const newFormData = {...this.state.formdata}
        const newElement = {...newFormData[element.id]}

        newElement.value = element.event.target.value;


        let validData = validate(newElement);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];

        newFormData[element.id] = newElement;

        console.log(newFormData);

        newFormData[element.id] = newElement;

        this.setState({
            formdata: newFormData,
            formError: false
        })

    }

    render() {
        return (
           <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={ (event) => {this.submitForm(event)}}>
                        <div className="enroll_title">
                            Enter your email
                        </div>
                        <div className="enroll_input">
                            <FormField
                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element) => this.updateForm(element)}
                            />
                            { this.state.formError ? 
                                <div className="error_label">Something is wrong, try again!</div> 
                                : null}
                            <button onClick={(event) => this.submitForm(event)}>Enroll</button>
                        </div>
                    </form>
                </div>
           </Fade>  
        );
    }
}

export default Enroll;