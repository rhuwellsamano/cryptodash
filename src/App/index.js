import React from 'react';
import './App.css';
import Welcome from './WelcomeMessage';
import styled from 'styled-components';
import AppLayout from './AppLayout';

const MyButton = styled.div`
  color: green;
  `

function App() {
  return (
    <AppLayout>
      <Welcome/>
    </AppLayout>
  ); 
}

export default App;
