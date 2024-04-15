
import './App.css';
import Bottone from './Bottone.js';


const alunni=[
{id: 1, nome: 'Saad', cognome: 'Gay'},
{id: 2, nome: 'Mao', cognome: 'Bao'},
{id: 3, nome: 'Bello', cognome: 'Fighie'},

];





function App() {
  return (
    <div className="App">
   
  {

alunni.map(((alunno)=>
<Bottone testo={`${alunno.nome} ${alunno.cognome} `
}numero={alunno.id}
/>
))


  }
    </div>
  );
}

export default App;
