import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Form, Todos } from './components';
import {useDispatch, useSelector} from 'react-redux';

function App() {

  return (
    <div className="App">
      <Form/>
      <Todos/>
    </div>
  )
}

export default App
