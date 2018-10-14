import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'mdbreact';
import { MDBDataTable } from 'mdbreact';
import Alert from 'react-s-alert';
import socketIOClient from 'socket.io-client';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import Header from '../header/header';
import Footer from '../footer/footer';
import { getMessages } from '../../actions/messagesActions';
import * as vars from '../../vars.json'; // global variables


class Messages extends Component {

	// constructor
    constructor(props) {

		super(props);

		// default state
		this.state = {
			errorDiv: false,
			columns: [ // table fields
			{
		        label: '#',
		        field: '#',
		        sort: 'asc'
		    },
			{
				label: [<i key="Lorem" className="fa fa-user mr-2" aria-hidden="true"></i>, 'Nom'],
		        field: 'name',
		        sort: 'asc'
		    },
		    {
		        label: [<i key="Lorem" className="fa fa-phone mr-2" aria-hidden="true"></i>, 'Numéro de téléphone'],
		        field: 'phone',
		        sort: 'asc'
		    },
		    {
		        label: [<i key="Lorem" className="fa fa-envelope mr-2" aria-hidden="true"></i>, 'Email'],
		        field: 'email',
		        sort: 'asc'
		    },
		    {
		        label: [<i key="Lorem" className="fa fa-pencil mr-2" aria-hidden="true"></i>, 'Message'],
		        field: 'message',
		        sort: 'asc'
		    },
		    {
		        label: [<i key="Lorem" className="fa fa-clock-o mr-2" aria-hidden="true"></i>, 'Créé à'],
		        field: 'createdAt',
		        sort: 'asc'
		    }],
			rows: [] // table rows
      	};
    }

	// when the componenet is mounted
	componentDidMount() {

		const socket = socketIOClient(vars.BACKEND_URL);
		socket.on('new-message', (message) => {

			// get the messages list, add the new message on top and set them back to in the state
			let messages = this.state.rows;
			messages.unshift(message);

			this.setState({
				rows: JSON.parse(JSON.stringify(messages))
			});

			// show an alert
			Alert.success('Un nouveau message est arrivé', {
				position: 'top-right',
				effect: 'slide',
				timeout: 3000
			});

		});

		// get messages from the service
    	getMessages().then(
        	(result) => {

				// set the messages
				this.setState({
					rows: result.messages
				});

			},
			(error) => {

				// show the generic error div
				this.setState({
					errorDiv: true
				});
			}
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
				<Alert stack = {false}/>
            	<Row>
              		<Col className="col-md-12 mb-4 mt-4">
						{this.state.errorDiv ? this.showErrorDiv() : null}
						<Card className="mt-3">
							<CardBody>
					  			<p className="h3 text-center mb-4">Liste des messages</p>

								< MDBDataTable
									borderless
									bordered
									hover
									responsive
									sortable = { false }
									searching = { false }
									entriesLabel = "Afficher les entrées"
									searchLabel = "Chercher"
									infoLabel = {["Montrant", "à", "de", "entrées"]}
									paginationLabel = {["Précédent", "Suivant"] }
									data = { { columns: this.state.columns, rows: this.state.rows } }
								/>

                  			</CardBody>
                		</Card>
              		</Col>
            	</Row>
				<Footer/>
			</Container>
        );
    }
}

export default Messages;
