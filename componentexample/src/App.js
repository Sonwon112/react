import './App.css';

function Header(){
  return(
    <h1><a href = "">React</a></h1>
  )
}

function Listcontent(){
  let contentText = "기본";
  return(
    <p><a hreft = "">{contentText}</a></p>
  )
}

function Content(){
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr/>
      <dl>
        <dt>개요</dt>
        <dd><Listcontent></Listcontent></dd>
        <dd></dd>
        <dd></dd>
      </dl>
      <Content></Content>      
    </div>
  );
}

export default App;
