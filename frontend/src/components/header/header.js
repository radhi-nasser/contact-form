import React, { Component } from 'react';
import './header.css';


class Header extends Component {

    render() {
		return (
			<header>
				<a href='https://www.medgo.fr/' rel="noopener noreferrer" target="_blank">
					<img src="medGo.jpg" alt="medGo logo" />
				</a>
			</header>
		);
    }
}

export default Header;
