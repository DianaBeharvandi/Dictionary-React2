import React, {useState} from 'react';

export default function InsertWord(props) {

  const [newWord, setNewWord] = useState("");

  return (<>
    <div>
      <header className="InsertWord"> 
        <h1>Insert Word</h1>
      </header>
      <h2>
        <input type="text" placeholder="Write a word:"  value={newWord} onChange={e => setNewWord(e.target.value)} />
        <button onClick = {props.onInsertWordClick} value ={newWord}> Add Word </button>
      </h2>
    </div>
    </>
  );
}