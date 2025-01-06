import React, { useEffect, useState } from 'react';

const Index = () => {
  const [status, setStatus] = useState('');
  const [tipo, setTipo] = useState('');
  const [busca, setBusca] = useState('');

  useEffect(() => {
    // Inicializa os estados apenas no lado do cliente
    setStatus('');
    setTipo('');
    setBusca('');
  }, []);

  return (
    <div className="filtro">
      <p className="text-[17px] font-semibold">Isso é o que toca e faz a diferença</p>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">Selecione o Status</option>
        <option value="ativo">Ativo</option>
        <option value="inativo">Inativo</option>
      </select>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Selecione o Tipo</option>
        <option value="residencial">Residencial</option>
        <option value="comercial">Comercial</option>
      </select>
      <input
        type="text"
        placeholder="Buscar por palavras"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
    </div>
  );
};

export default Index;
