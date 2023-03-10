import './App.css';

function Header(){
  return(
    <header>
      <h1><a href="">WEB</a></h1>
    </header>
  )
}

function Nav(){
  return(
    <nav>
        <ol>
          <li><a href = "/rr/1">html</a></li>
          <li><a href = "/rr/2">css</a></li>
          <li><a href = "/rr/3">javascript</a></li>
        </ol>
      </nav>
  )
}

function Article(){
  return(
    <article>
        <h2>환영!</h2>
        Hello WEB programming
      </article>
  )
}

function App() {
  return (
    <div className="App">
      <Header className = "First"/>
      <Header className = "Second"/>
      <hr/>
      <Nav/>
      <Article/>
            
    </div>
  );
}

export default App;
