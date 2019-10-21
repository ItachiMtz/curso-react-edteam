import React from "react";
import "./styles/styles.scss";
import Curso from './Curso'

const cursos = [
	{
		image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
		title: "React desde cero con EDTEAM",
		price: 20,
		teacher: "Carlos Martinez",
	},
	{
		image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/Vue-JS.png",
		title: "Vue desde cero con EDTEAM",
		price: 10,
		teacher: "David Martinez",
	},
	{
		image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
		title: "Drupal desde cero con EDTEAM",
		price: 0,
		teacher: "Carlos Martinez",
	},
]
function App() {
    return (
        <>
            <div
                className="main-banner img-container l-section"
                id="main-banner"
            >
                <div className="ed-grid lg-grid-6">
                    <div className="lg-cols-4 lg-x-2">
                        <img
                            className="main-banner__img"
                            alt="banner"
                            src="https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                        <div className="main-banner__data s-center">
                            <p className="t2 s-mb-0">Cursos de React.js con EDteam</p>
                            <p> Carlos Martinez</p>
                            <a href="https://ed.team" className="button">
                                ir a EDteam
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ed-grid m-grid-3">
                {
					cursos.map(curso => 
						<Curso
							title={curso.title}
							image={curso.image}
							price={curso.price}
							teacher={curso.teacher}
						/>
					)
				}
            </div>
        </>
    );
}

export default App;
