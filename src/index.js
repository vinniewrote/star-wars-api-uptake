import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import App from './components/app'
import './styles/app.scss'
import Layout from './components/Layout'
import MovieCard from './components/MovieCard'

// render app
ReactDOM.render(<Layout />, document.getElementById('main'))
