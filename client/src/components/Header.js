import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
						<li><a href="/auth/google">Login With Google</a></li>
				);
			default:
				return [
					<li key="Payments"><Payments/></li>,
					<li key="Credits"><a href="#"><strong>Credits:</strong> {this.props.auth.credits}</a></li>,
					<li key="DisplayName"><a href="#">{this.props.auth.displayName}</a></li>,
					<li key="Logout"><a href="/api/logout">Logout</a></li>
				];
		}
	}

	render() {
		console.log(this.props);
		return (
				<nav>
					<div className="nav-wrapper">
						<Link
								to={this.props.auth ? '/surveys' : '/'}
								className="left brand-logo"
						>
							Emaily
						</Link>
						<ul className="right">
							{this.renderContent()}
						</ul>
					</div>
				</nav>
		)
	}
}

function mapStateToProps({auth}) {
	return {auth};
}

export default connect(mapStateToProps)(Header);