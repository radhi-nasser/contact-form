import React from 'react';
import { Input, Button, Fa } from 'mdbreact';
import './form.css';

class Form extends React.Component {

	// constructor
    constructor(props) {

        super(props);

		// default state
        this.state = {
            fields: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            errors: {},
            sending: false
        };
    }

	// watch for errors sent by the parent which he recieved from the server
    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.errors === prevState.errors)
            return null;

        return {
            errors: nextProps.errors
        };
    }

	// function to set an error in errors or delete the old one
    setOrDeleteError = (field, error) => {

        let errors = this.state.errors;

        if (error === '')
            delete errors[field];
        else
            errors[field] = error;

        this.setState({
            errors: errors
        });
    }

	// handle the name validation
    handleNameValidation = () => {

        let name = this.state.fields['name'];
        let error = '';

        if (name.trim() === '')
            error = 'Veuillez fournir un nom';
        else if (!name.match(/^[a-zA-Z]+$/))
            error = 'Veuillez fournir un nom avec des lettres et espaces seulement';

       this.setOrDeleteError('name', error);
    }

	// handle email validation
    handleEmailValidation = () => {

        let email = this.state.fields['email'];
        let error = '';

        if (email.trim() === '')
            error = 'Veuillez fournir une adresse email';
        else if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
            error = 'Veuillez fournir une adresse email valide';

        this.setOrDeleteError('email', error);
    }

	// handle phone validation
    handlePhoneValidation = () => {

        let phone = this.state.fields['phone'];
        let error = '';

        if (phone.trim() === '')
            error = 'Veuillez fournir un numéro de téléphone';
        else if (!phone.match(/^[0-9]+$/))
            error = 'Veuillez fournir un numéro de téléphone avec des chiffres seulement';

        this.setOrDeleteError('phone', error);
    }

	// handle message validation
    handleMessageValidation = () => {

        let message = this.state.fields['message'];
        let error = '';

        if (message.trim() === '')
            error = 'Veuillez fournir un message';

        this.setOrDeleteError('message', error);
    }

	// handle the form validation
    handleValidation = () => {

        this.handleNameValidation();
        this.handleEmailValidation();
        this.handlePhoneValidation();
        this.handleMessageValidation();

		// return true if there's no error, false otherwise
        return Object.keys(this.state.errors).length === 0;
    }

	// handle input change
    handleChange = (event) => {

        let fields = this.state.fields;

        let fieldName = event.target.name;

		// set the field value in the pros
        fields[fieldName] = event.target.value;
        this.setState({
            fields: fields
        });

		// detect which validator to run base on the field name
        switch (fieldName) {
            case 'name':
                this.handleNameValidation();
                break;
            case 'email':
                this.handleEmailValidation();
                break;
            case 'phone':
                this.handlePhoneValidation();
                break;
            case 'message':
                this.handleMessageValidation();
                break;
            default:
                break;
        }
    }

	// handle form submission
    handleSubmission = (event) => {

        event.preventDefault();

		// allow it only if the form is valid
        if (this.handleValidation()) {

			// set the sending var to true to change the submit button
            this.setState({
                sending: true
            });

			// send the data to the parent
            setTimeout(() => {
                this.props.onSubmit(this.state.fields);
            }, 1000);
        }
    }

	// function called by the parent: reset the form
    resetForm = () => {

        this.setState({
            fields: {
                name: '',
                email: '',
                phone: '',
                message: ''
            }
        });
    }

	// function called by the parent: return the original send button
    notifServiceCallEnded = () => {

        this.setState({
            sending: false
        });
    }

	// render the send button
    renderSendButton = () => {

        if (this.state.sending)
            return (
                <Button type="submit" disabled gradient="blue" className="btn-block">Envoi en cours <Fa icon="circle-o-notch" spin className="ml-1" /></Button>
            );
        return (
                <Button type="submit" gradient="blue" className="btn-block">Envoyer <Fa icon="paper-plane-o" className="ml-1" /></Button>
            );
    }

	// render the error div
    showErrorDiv = (field) => {
        return (
            <div className="error">* {this.state.errors[field]}</div>
        );
    }

	// render the component
    render() {
        return (
            <form onSubmit={this.handleSubmission} noValidate>
                <p className="h3 text-center mb-4">Laissez nous un message</p>
                <div className="grey-text">

                    <Input label="Votre nom" name="name" id="name" icon="user" group type="text" value={this.state.fields.name} onChange={this.handleChange} required />
                    {this.state.errors.hasOwnProperty("name") ? this.showErrorDiv("name") : null}

                    <Input label="Votre email" name="email" id="email" icon="envelope" group type="email" value={this.state.fields.email} onChange={this.handleChange} required />
                    {this.state.errors.hasOwnProperty("email") ? this.showErrorDiv("email") : null}

                    <Input label="Votre numéro de téléphone" name="phone" id="phone" icon="phone" group type="text" value={this.state.fields.phone} onChange={this.handleChange} required />
                    {this.state.errors.hasOwnProperty("phone") ? this.showErrorDiv("phone") : null}

                    <Input type="textarea" name="message" id="message" rows="2" label="Votre message" icon="pencil" value={this.state.fields.message} onChange={this.handleChange} required />
                    {this.state.errors.hasOwnProperty("message") ? this.showErrorDiv("message") : null}

                </div>
                <div className="text-center mb-3 mt-4">
                    { this.renderSendButton() }
                </div>
            </form>
        );
    }
};

export default Form;
