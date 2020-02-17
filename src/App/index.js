import React from 'react';
import './App.css';
import Welcome from './WelcomeMessage';
import AppLayout from './AppLayout';

function App() {
  return (
    <AppLayout>
      <Welcome/>
    </AppLayout>
  ); 
}

export default App;
