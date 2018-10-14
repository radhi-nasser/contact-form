import React, { Component } from 'react';
import './header.css';


class Header extends Component {

    render() {
		return (
			<header>
				<a href='https://www.medgo.fr/' rel="noopener noreferrer" target="_blank">
					<img src="http://www.doctors20.com/wp-content/uploads/2018/04/medgo-logo-286x300.png" alt="medGo logo" />
				</a>
			</header>
		);
    }
}

export default Header;
