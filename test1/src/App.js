import logo from './logo.png';
import './App.css';

function App() {
  let po = '스마트소프트웨어학과';
  function ff(){
    return 'LG전자';
  }

  return (
    <div className='App'>
      <div className="title"><h1>연암공과대학교</h1></div>
      <div className="content">
        <h3>{ po }</h3>
        <img src = {logo}></img>
        <h3>{ ff() }</h3>
      </div>
    </div>
  );
}

export default App;
