import React, {useState, useEffect} from 'react';
import useCourse from '../CustomHooks/useCourse';
const Course = ({ match }) => {
    const [comment, setComment] = useState("Sin Comentario")
    const myComment = (e) => {
        setComment(e.target.value)
    }
    const state = useCourse(match.params.id)
    // Boton de ejemplo
    // const changeTitle = (text) => {
    //     setState({
    //         ...state,
    //         title: text
    //     })
    // }
    return (
        <div className="ed-grid m-grid-3">
            {
                state ? (
                    <>
                        <div className="l-block">
                            <h1 className="m-cols-3">
                                {state.title}
                            </h1>
                            <img src={state.image} alt={state.title} />
                            <h2 className="m-cols-3">
                                {state.teacher}
                            </h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste praesentium corporis quo aut quia! Maiores voluptas consequatur perspiciatis dicta libero neque nam cumque eligendi tempore. Quod molestias voluptates dolorum. Quos?
                            </p>
                        </div>
                        <div>
                            <h2>Escribe tu cometario</h2>
                            <input type="text" placeholder="Tu comentario" onChange={myComment.bind(this)}/>
                            <p>{comment}</p>
                        </div>
                    </>
                )
                : (
                    <>
                        <h1 className="m-cols-4">No se encontro el curso</h1>
                        <span>Error</span>
                    </>
                )
            }
        </div>
    );
}

export default Course;