import React,{useState} from 'react'

const App = ()=> {
  const [inp, setInp] = useState("");
  const [name, setName] = useState(()=>{
    return ["트럼프","바이든"];
  });

  const changeInp = (e)=>{
    setInp(e.target.value);
  }

  const uploading = ()=>{
    setName((prev)=>{
      return ([...prev,inp]);
    })
  }
  
  const allDelete = ()=>{
    setName((prev)=>{
      return([])
    })
  }

  return (
    <div>
      <input type='text'onChange={changeInp}></input>
      <button onClick={uploading}>업로드</button>  
      <button onClick={allDelete}>전체 삭제</button>
      {name.map((v,i)=>{
        return(
          <p key={i}>{i+1}.  {v}
          </p>
        )
      })}
    </div>
  )
}

export default App