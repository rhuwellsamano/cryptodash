import React from 'react';
import './App.css';
import Welcome from './WelcomeMessage';
import styled from 'styled-components';

const MyButton = styled.div`
  color: green;
  `

function App() {
  return (
    <div>
      <Welcome/>
      <MyButton>Hello there!</MyButton>
    </div>
  ); 
}

export default App;
