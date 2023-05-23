import './App.css';
// import { CssModules } from './CssModules';
import { StyledJsx } from './StyledJsx';
import { StyledComponent } from './StyledComponent';
import { Emotion } from './Emotion';

function App() {
  return (
    <div className="App">
      {/* <CssModules/> */}
      <StyledJsx/>
      <StyledComponent/>
      <Emotion/>
    </div>
  );
}

export default App;
