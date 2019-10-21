import React from "react";
import PropTypes from 'prop-types';

const Curso = ({image, title, price, teacher}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            {<h3 className="t5 s-mb-2 s-center">{title}</h3>}
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img
                                src="https://api.ed.team/files/avatars/747dea4d-4438-4a7e-904a-427a5cd6aac7.jpg"
                                alt="Tío Alexys"
                            />
                        </div>
                    </div>
                    <span className="small">{`${teacher}`}</span>
                </div>
            </div>
            <div className="s-main-center">
                <a
                    className="button--ghost-alert button--tiny"
                    href="/"
                >{`$ ${price} USD`}</a>
            </div>
        </div>
    </article>
);
Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    teacher: PropTypes.string
}
Curso.defaultProps = {
    title: "No se encontro un titulo",
    image: "https://s2.best-wallpaper.net/wallpaper/1920x1080/1703/China-city-Shanghai-night-lights-blurry_1920x1080.jpg",
    price: "No establecido",
    teacher: "No asignado"
}
export default Curso;
