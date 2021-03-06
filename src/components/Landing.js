import React, { Component } from 'react';
import Login from './Login'
import logo from '../assets/HappyHopsLogo.png'

class Landing extends Component {
	render() {
		return (
			<div id="landing">
				<section className="hero is-fullheight is-primary is-bold">
					<div className="hero-body">
						<div className="container">
			 				<img src={logo} alt="hopslogo"/>
							<h1 className="title"> Happy Hops </h1>
							<h2 className="subtitle"> barhopping. simplified. </h2>
							<Login/>
						</div>
					</div>
			  </section>
			</div>
		);
	}
}

export default Landing;
