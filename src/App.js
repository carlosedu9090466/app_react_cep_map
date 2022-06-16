import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';

import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  //mostrar na tela
  const [cep,setCep] = useState({});

  async function handleSearch(){
    
    if(input === ''){
      alert("Preencha algum cep!")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      //objeto de retorno
      setCep(response.data);
      setInput("");
      
    }catch{
      alert("Ops erro ao buscar");
      setInput("");
    }

  }

  return (
   <div className="container">
     <h1 className="title">Buscador CEP</h1>

     <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          //SALVAR NO INPUT
          onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch
            size={25}
            color="#FFF"
          />
        </button>
     </div>

      {/* Verificar se tem algo nesse object é através do Keys */}
      {Object.keys(cep).length > 0 && (
              <main className="main">
              <h2>CEP: {cep.cep}</h2>
              <span>Rua: {cep.logradouro}</span>
              <span>Complemento: {cep.complemento}</span>
              <span>Bairro: {cep.bairro}</span>
              <span>Localidade: {cep.localidade} - Estado: {cep.uf}</span>
              <span>DD: {cep.ddd}</span>
            </main>
      )}
 

   </div>
  );
}

export default App;
