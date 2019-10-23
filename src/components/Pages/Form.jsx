import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            mail: "",
            date: new Date()
        }
        this.changeName = this.changeName.bind(this)
        this.changeMail = this.changeMail.bind(this)
        this.changeDate = this.changeDate.bind(this)
    }
    changeName(e) { 
        this.setState({
            name: e.target.value
        }) 
    }
    changeDate() {
        this.setState({
            date: new Date()
        })
    }
    changeMail(e) { 
        this.setState({
            mail: e.target.value
        }) 
    }
    render() {
        return (
            <div className="ed-grid">
                <h1>{this.props.title}</h1>
                <h4>Date: {Math.ceil(this.state.date/1000)}</h4>
                <form id="form-element">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Firts Name:</label>
                            <input type="text" onChange={ this.changeName } />
                        </div>
                        <div className="form__item">
                            <label>Mail:</label>
                            <input type="email" onChange={ this.changeMail } />
                        </div>
                    </div>
                </form>
                <div className="center">
                    <h2>{`Hi ${this.state.name}`}</h2>
                    <span>{`Your mail: ${this.state.mail}`}</span>
                </div>
            </div>
        );
    }
    componentDidMount() {
        let element = document.getElementById("form-element")
        console.log(element);
        this.intervalDate = setInterval(() => {
            this.changeDate()
            console.log(new Date())
        }, 1000)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps)
        console.log(prevState)
        console.log("---------")
    }
    componentWillUnmount() {
        clearInterval(this.intervalDate)
    }
}

export default Form;