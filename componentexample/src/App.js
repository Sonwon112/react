import './App.css';
import Header from './component/Header';
import List from './component/List';
import Content from './component/Content';
import Box from './component/Box'

function App() {
  const contentArr = ['개요','1장','2장']

  return (
    <div className="App">
      <Header/>
      <hr/>
      <List titile = "목차" content = {contentArr}/>
      <Content/>
      <Box name = "테스트"/>
    </div>
  );
}

export default App;
