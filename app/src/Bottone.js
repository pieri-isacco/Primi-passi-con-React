import {useState} from 'react';
export default function Bottone({alunno, loadAlunni}){

const [contatore, setContatore] = useState(alunno.id);
const [inCancellazione, setInCancellazione] = useState(false);
const [inConferma, setInConferma] = useState(false);



function inc (){
   setContatore(contatore+1);
}
async function cancellaAlunno(){
    setInCancellazione(true);
    const response = await fetch (`http://localhost:8080/alunni/${alunno.id}`, {method: "DELETE"})
    loadAlunni();
    setInCancellazione(false);
}

return (
    <div>
    {alunno.nome} {alunno.cognome} {contatore}
    <button onClick={inc}>
        {contatore}
    </button>
    { inCancellazione ?
    <span> in cancellazione... </span>
    :
    <button onClick={cancellaAlunno}> Cancella Alunno </button>
    }
    </div>
   
);

}