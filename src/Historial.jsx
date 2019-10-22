import React from "react"

const Historial = ({match, location, history}) => (
    <div>
        { JSON.stringify(match) }
        <br />
        { JSON.stringify(location) }
        <br />
        { JSON.stringify(history) }
    </div>
)

export default Historial