import React, {useState} from 'react';
import Reactmarkdown from 'react-markdown';
import './App.css';

function App() {

  const [markdown, setMarkdown] = useState('# Supp')

  return (
    <div className="App">
      <textarea className='App__textarea' onChange={(e) => setMarkdown(e.target.value) } value={markdown} />

      <Reactmarkdown  className='App__preview' source={markdown}/>
      
    </div>
  );
}

export default App;
