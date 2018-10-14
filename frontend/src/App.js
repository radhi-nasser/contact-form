import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Message from './components/message/message';
import Messages from './components/messages/messages';

class App extends Component {

	// render the component and handle routes
    render() {
        return (
			<Switch>
				<Route exact path='/' component={Message}/>
				<Route exact path='/messages' component={Messages}/>
			</Switch>
        );
    }
}

export default App;
