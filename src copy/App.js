import React from 'react';
import './App.css';
import {useState} from 'react';
import SearchWord from './Components/SearchWord.js';
import InsertWord from './Components/InsertWord.js';

export default function App() {

    const [dictionary, setDictionary] = useState([]);

    function handleInsertWordClick(event)  {
      event.preventDefault();
      setDictionary([...dictionary, event.target.value]);
      
    };
    
  return (
  <>
    <div>
      <InsertWord dictionary={dictionary} onInsertWordClick={handleInsertWordClick}/>
    </div>
    <div> 
      <SearchWord dictionary={dictionary} />
    </div>
    </>
  );
}