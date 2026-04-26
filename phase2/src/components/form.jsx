function Form({ taille, poids, setTaille, setPoids, onCalculer }) {
  return (
    <div className="imc-body">
      <div className="imc-input-flex">
        <InputTaille value={taille} onChange={(e) => setTaille(e.target.value)} />
        <InputPoids value={poids} onChange={(e) => setPoids(e.target.value)} />
      </div>
      <Button label="Calculer" onClick={onCalculer} />
    </div>
  );
}
