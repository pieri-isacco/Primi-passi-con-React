
import './App.css';
import Bottone from './Bottone.js';
import {useState, useEffect} from 'react';



function App() {
  const [alunni, setAlunni]= useState([]);
  const [inCaricamento, setInCaricamento]= useState(false);

  useEffect(() => {
    loadAlunni();
  }, [])

  async function loadAlunni(){
    setInCaricamento(true);
    const response= await fetch('http://localhost:8080/alunni' , {method:"GET"});
    const a= await response.json();
    setAlunni(a);
    setInCaricamento(false);
  };
  


  return (
    <div className="App">
      <button onClick={loadAlunni}>CARICA ALUNNI</button>
   <hr />
  {
  inCaricamento ?
   <div>in caricamento...</div>
   :

alunni.map((alunno)=> (

<Bottone alunno={alunno} loadAlunni={loadAlunni} key= {alunno.id}/>

))
}
    </div>

);

}

export default App;
