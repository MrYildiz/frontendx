/**
 * Created by mehmetyildiz on 15-01-18.
 */

import React from 'react'
import '../stylesheets/login.css'
import axios from 'axios'

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        const url= 'http://localhost:8080/welkom';
        axios.get(url)
            .then(response => this.setState({username: response.data}))
    }
    render() {
        return (
            <div className="LoginForm">
            <span>Welkom op je dashboard</span>
        <form>
        <p>
        <input id="userName" type="text" placeholder="username" required/><br/>
        </p>
        <p>
        <input id="passWord" type="password" placeholder="Password" required/><br/>
        </p>
        <p>
        <input id="language" type="text" placeholder="select your language" />
            </p>
            <p>
            <button className="submitbutton" onClick={this.handleClick}>Log in</button>
        </p>
        <p>{this.state.username}</p>
        </form>
        </div>
    )
    }
}

export default LoginForm