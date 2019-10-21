import React from "react";
import "./styles/styles.scss";
import Banner from './Banner';
import Formulario from './Formulario';
import CourseGrid from './CourseGrid';
function App() {
    return (
        <>
			<Banner />
			<Formulario
				titulo="EDteam"
			/>
			<CourseGrid />
        </>
    );
}

export default App;
