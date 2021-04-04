import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Character from './components/Character';

const App = () => {
  const [character,setCharacter] = useState([]);
  const [loading,setLoading] = useState(true);
  const [search,setSearch] = useState('');

useEffect(() => {
  const fetchData = async () => {
    const result = await axios (`https://www.breakingbadapi.com/api/characters?name=${search}`);
    setCharacter(result.data);
    setLoading(false);
  }
  fetchData();
},[search]);

  return (
    <div className="App">
      <div className='header-div'>
        <Header />
        <Search setSearch={setSearch}/>
      </div>
      <Character character={character} loading={loading}/>
    </div>
  );
}

export default App;
