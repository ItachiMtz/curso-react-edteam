import React from "react";
import "../styles/styles.scss";
import Form from './Pages/Form';
import Courses from './Pages/Courses';
import Course from './Pages/Course';
import MainMenu from './Organisms/MainMenu';
import Home from './Pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import History from "./Pages/History";
import Users from "./Pages/Users";
function App() {
    return (
        <Router>
			<MainMenu />
			<Switch>
				<Route path="/" exact component={ Home } />
				<Route path="/cursos/:id" component={ Course } />
				<Route path="/cursos" component={ Courses } />
				<Route path="/historial" component={ History } />
				<Route path="/historial/:valor" component={ History } />
				<Route path="/usuarios" component={ Users } />
				<Route path="/formulario" component={ () => <Form title="Page contact" /> } />
				<Route 
					component={ () => (
						<div className="ed-grid">
							<h1>Error 404</h1>
							<span>Pagina no encontrada</span>
						</div>
					) } 
				/>
			</Switch>
        </Router>
    );
}

export default App;
