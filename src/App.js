import React from 'react';

import './App.css';
import SearchForm from './Components/SearchForm';

const App = () => {
  return (
    <div className='container'>

      <h1 className='title' id='startShow'>Movie Search</h1>
      
      <SearchForm />
    </div>
  )
}

export default App;