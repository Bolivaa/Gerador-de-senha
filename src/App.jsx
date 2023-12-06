import React, { useState } from 'react';
import axios from 'axios';
import logo from './assets/imagem.png';
import './App.css';

function App() { 
  const [tamanho, setTamanho] = useState(12);
  const [senha, setSenha] = useState('');

  const gerarSenha = async () => {
    try {
      const response = await axios.get(`https://www.random.org/strings/?num=1&len=${tamanho}&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new`);
      const senhaGerada = response.data.trim(); // Remove espaços em branco
      setSenha(senhaGerada);
    } catch (error) {
      console.error('Erro ao gerar senha:', error);
    }
  };

  const copiarSenha = () => {
    const textarea = document.createElement('textarea');
    textarea.value = senha;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Senha copiada para a área de transferência!');
  };

  return (
    <div>
      <h1 >GERADOR DE SENHA!!</h1>
      <img className="logo1" src={logo} alt="logo" />
      <img src={logo} alt="logo" /> 
      <div>
        <label className='tamanho'>Tamanho desejado:</label>
        <input
          className='input'
          type="number"
          value={tamanho}
          onChange={(e) => setTamanho(e.target.valueAsNumber)}
        />
      </div>
      <div>
        <button className='botao' onClick={gerarSenha}>Gerar Senha</button>
      </div>
      {senha && (
        <div>
          <h2>SUA SENHA:</h2>
          <p onClick={copiarSenha} style={{ cursor: 'pointer', userSelect: 'all' }}>{senha}</p>
          <p>CLIQUE NA SENHA E COPIE</p>
        </div>   
      )}
   
    </div>
  
  );
}

export default App;
