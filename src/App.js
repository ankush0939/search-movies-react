import React from 'react';

import Footer from './Components/Footer';
import './App.css';
import SearchForm from './Components/SearchForm';

const App = () => {
  return (
    <>
    <div className='container'>

      <h1 className='title' id='startShow'>Movie Search</h1>
      
      <SearchForm />
    </div>
      <Footer name='Ankush Mishra'/>
    </>
  )
}

export default App;