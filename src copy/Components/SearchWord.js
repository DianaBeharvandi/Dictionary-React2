import React, { useState } from 'react';

 export default function SearchWord(props) {
    const [message, setMessage] = useState("");
    const [word, setWord] = useState("");

    function handleSearchClick(event) {
        event.preventDefault();
        if(props.dictionary.includes(word)) {
          setMessage(`The word "${word}" IS in the dictionary`);
        } else {
          setMessage(`The word "${word}" is NOT in the dictionary`);
        }
        setWord("");
    }    

   return (<>
        <div className="Search">
            <h2>
                <input type="text" placeholder="Write a word:" value={word} onChange={e => setWord(e.target.value)} />
                <button  onClick={handleSearchClick}>Search</button>
            </h2>
        </div>
        <div>{message}</div>
    </>
    );
 }