function ResultDisplay({ resultat }) {
  if (!resultat) return null;
  return (
    <div className={`imc-result ${resultat.classe}`}>
      <p>{resultat.valeur}</p>
      <p>{resultat.texte}</p>
    </div>
  );
}
