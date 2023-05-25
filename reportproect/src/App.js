import './App.css';
import SearchBar from './componet/SearchBar';
import ChattingBox from './componet/ChattingBox';

import React from 'react';
import { ThemeProvider } from './ThemeContext';

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <SearchBar/>
        <ChattingBox/>
      </ThemeProvider>
    </div>
  );
}

export default App;
