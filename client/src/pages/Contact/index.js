import React from 'react';
import "./style.css";
import Nav from "../../components/Nav"
import ChatBox from "../../components/ChatBox"

// gather other componets
//import otherComponent from "../otherComponent";

const Contact = (props) => {
	return(
		<div>
			<Nav
				brand= {["Welcome ", props.auth.username]}
				logout= {props.handleLogout}
			/>
			<div className = "container">
				<div className = "row">
					<div className = "col">
						<ul>
							<li>
								<a href="https://github.com/Gwenchy">
									<img className="Icon" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail_logo.max-2800x2800.png" alt="Gmail Icon"/>
									Gwenchy15@gmail.com
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/in/edgardo-mendez-soto-b8966a145/">
									<img className="Icon" src="assets/images/Linkden.png" alt="Linkden Icon"/>
								</a>
							</li>
							<li>
								<a href="https://stackoverflow.com/users/8747890/eddie-meso?tab=profile">
									<img className="Icon" src="assets/images/Stackoverflow.png" alt="Stackoverflow Icon"/>
								</a>
							</li>
						</ul>
					</div>
					<div className = "col">
						
					</div>
				</div>
				<div className = "row">
					<ChatBox/>
				</div>
			</div>
		</div>
	);
}

export default Contact;