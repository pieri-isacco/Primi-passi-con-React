import {useState} from 'react';
export default function Bottone({testo, numero}){

const [contatore, setContatore] = useState(5);


function inc (){
   setContatore(contatore+1);
}

return (
    <div>
    {testo} {numero}
    <button onClick={inc}>
        {contatore}
    </button>

    </div>
);

}