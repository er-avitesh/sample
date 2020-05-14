import React, { Component } from "react";

export default class UserLanding extends Component {
	render() {
		return (
			<div className="auth-wrapper">
				<div className="auth-inner">
		<h2>{this.props.location.value}</h2>
					<p>Page Under Construction</p>
				</div>
			</div>


		);
	}
}