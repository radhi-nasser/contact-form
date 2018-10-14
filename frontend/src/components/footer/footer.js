import React, { Component } from 'react';
import './footer.css';


class Footer extends Component {

    render() {
		return (
			<footer>
				<span> Créé par <a href='mailto:radhinasser@gmail.com'>Radhi NASSER</a> pour <a href='https://www.medgo.fr/' rel="noopener noreferrer" target="_blank">medGo</a> </span>
			</footer>
        );
    }
}

export default Footer;
