import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'mdbreact';

import Form from '../form/form';
import Header from '../header/header';
import Footer from '../footer/footer';
import { createMessage } from '../../actions/messagesActions';


class Message extends Component {

	// constructor
    constructor(props) {

		super(props);

		// default state
		this.state = {
			successDiv: false,
			errorDiv: false,
			errors: {}
		};

		// create a refrence on the 'form' child component to exceute function from it
		this.form = React.createRef();
    }

	// handle form submission
    handleSubmit = (data) => {

		// hide error and success divs
		this.setState({
			successDiv: false,
			errorDiv: false
		});

		// call the create message api
		createMessage(data).then(
			(result) => {

				// reset the form and return the send button to the original state
				this.form.current.resetForm();
				this.form.current.notifServiceCallEnded();

				this.setState({
					successDiv: true
				});

				// hide the success div after 5s
				setTimeout(() => {
					this.setState({
						successDiv: false
					});
				}, 5000);

				// remove errors
				this.setState({
					errors: {}
				});
			},
			(error) => {

				// return the send button to the original state
				this.form.current.notifServiceCallEnded();

				// check if it's a validation error
				if (error.hasOwnProperty('errors')) {

					// set them
					this.setState({
						errors: error.errors
					});
				} else {

					// show the generic error div + reset the errors object
					this.setState({
						errorDiv: true,
						errors: {}
					});
				}
			}
		);
    }

	// show the success div
    showSuccessDiv = () => {

		return (
			<Card color="success-color" text="white" className="text-center">
				<CardBody>
					Votre message a été envoyé avec succès.
				</CardBody>
			</Card>
		);
    }

	// show the error div
    showErrorDiv = () => {

		return (
			<Card color="red lighten-1" text="white" className="text-center">
				<CardBody>
					Une erreur est survenue. Veuillez réessayer dans quelques minutes.
				</CardBody>
			</Card>
		);
    }

	// render the component
	render() {

		return (
			<Container>
				<Header />
				<Row>
					<Col className="col-md-6 ml-md-auto mr-md-auto mt-4">
						<Card>
							<CardBody>
								<Form ref={this.form} errors={this.state.errors} onSubmit={this.handleSubmit}></Form>
								{this.state.successDiv ? this.showSuccessDiv() : null}
								{this.state.errorDiv ? this.showErrorDiv() : null}
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Footer />
			</Container>
		);
    }
}

export default Message;
