import React from 'react'
import ReactDom from 'react-dom'
import LoginForm from './components/LoginForm'

window.React = React

ReactDom.render(
    <LoginForm />,
    document.getElementById('react-container')
)