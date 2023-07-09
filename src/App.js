import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {orginals,action, ComedyMovies, Horrormovies, RomanceMovies, Documentaries} from './urls'

function App() {
  return (
   <div className="App">
       <NavBar/>
       <Banner/>
       <RowPost url={orginals} title='Netflix Orginals'/>
       <RowPost url={action} title='Action' isSmall/>
       <RowPost url={ComedyMovies} title='Comedy' isSmall/>
       <RowPost url={Horrormovies} title='Horror' isSmall/>
       <RowPost url={RomanceMovies} title='Romance' isSmall/>
       <RowPost url={Documentaries} title='Documentary' isSmall/>
   </div>
  );
}

export default App;
