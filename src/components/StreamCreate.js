import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

    renderInput = (formProps) => {
        const className=`field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label > {formProps.label} </label>
                <input {...formProps.input} autoComplete="off"/>
                {this.renderError(formProps.meta)}
            </div>       
            )
    }

    renderError({error, touched}){
        if( touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );

        }
    }

    onSubmit(event) {
        // this is for doing something after submit the form
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description"  component={this.renderInput} label="Enter Description" />
            </form>
        )
    }

}

const validate = (formValues) => {
    const errors = {}
    if(!formValues.title){
        errors.title='you must enter a title';
    }
    if(!formValues.description){
        errors.description='you must enter a description';
    }

    return errors;
}

export default reduxForm({
    form:'streamCreate',
    validate
})(StreamCreate);