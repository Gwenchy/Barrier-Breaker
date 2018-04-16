import React from 'react';
import "./style.css";
import Nav from "../../components/Nav";
import Card from "../../components/Card";

const Home = (props) =>{
	return (
		<div>
			<Nav
				brand= {["Welcome ", props.auth.username]}
				logout= {props.handleLogout}
			/>
			<h1 className = "text-center">What Are you going to practice today?</h1>
			<div className = "container-fluid">
				<div className = "row">
					<div className = "col">
					<img src="https://qph.fs.quoracdn.net/main-qimg-671e6dfc3bbe62c2c50f53325fd04943" className = " colSize" alt="Chinese"/>
					</div>
					<div className = "col">
					<img src="http://spanishwexford.com/wp-content/uploads/2014/06/want-to-learn-spanish.jpg" className = " colSize" alt="Spanish"/>
					</div>
					<div className = "col">
					<img src="http://pennesignum.com/wp-content/uploads/2017/11/LEARN-FRENCH.jpg" className = " colSize" alt="French"/>
					</div>
					<div className = "col">
					<img src="https://qph.fs.quoracdn.net/main-qimg-671e6dfc3bbe62c2c50f53325fd04943" className = " colSize" alt="Stuff"/>
					</div>
				</div>
				<div className="row">
				</div>
				<div className="row">
					<div className="col">
					<Card
					cardHeader={<h2>Learn New Language</h2>}
					cardTitle="Few courses that will help you harness your skills"
					cardText="But you got to put the effort ar the time"
					/>
					</div>
					<div className="col">
					<Card
					cardHeader={<h2>Conect With People</h2>}
					cardTitle="With chatrooms you can talk to others around the world"
					cardText="And you dont have to know their language"
					/>
					</div>
					<div className="col">
					<Card
					cardHeader={<h2>Know The World</h2>}
					cardTitle="By communicating you will learn about other cultures"
					cardText="Maybe find a person to travle with"
					/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;