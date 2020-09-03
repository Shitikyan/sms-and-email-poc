import React from 'react';
import './App.scss';
import SMS from '../components/sms-service/sms-service';
import EMAIL from '../components/email-service/email-service';

function App() {
  return (
    <div className="App">
      <SMS></SMS>
      <EMAIL></EMAIL>
    </div>
  );
}

export default App;
