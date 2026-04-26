function Home() {
  const [poids, setPoids] = React.useState("");
  const [taille, setTaille] = React.useState("");
  const [resultat, setResultat] = React.useState(null);

  const tranches = [
    { max: 18.5,     classe: "imc-result-maigreur", texte: "Insuffisance pondérale : Le poids est considéré comme trop bas." },
    { max: 25,       classe: "imc-result-normal",   texte: "Corpulence normale : Le poids est proportionnel à la taille." },
    { max: 30,       classe: "imc-result-surpoids",  texte: "Surpoids : Il y a un léger surpoids." },
    { max: 35,       classe: "imc-result-modere",    texte: "Obésité modérée (stade 1) : Une perte de poids est conseillée." },
    { max: 40,       classe: "imc-result-severe",    texte: "Obésité sévère (stade 2) : Un suivi médical est recommandé." },
    { max: Infinity, classe: "imc-result-morbide",   texte: "Obésité morbide (stade 3) : Risques importants pour la santé." }
  ];

  const calculerIMC = () => {
    const p = parseFloat(poids);
    const t = parseFloat(taille) / 100;
    if (!p || !t || t <= 0) { alert("Veuillez entrer des valeurs valides."); return; }
    const imcValue = (p / (t * t)).toFixed(2);
    const info = tranches.find(tr => imcValue < tr.max);
    setResultat({ valeur: imcValue, ...info });
  };

  return (
    <Layout>
      <Form taille={taille} poids={poids} setTaille={setTaille} setPoids={setPoids} onCalculer={calculerIMC} />
      <ResultDisplay resultat={resultat} />
    </Layout>
  );
}
