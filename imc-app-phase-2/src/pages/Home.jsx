import React, { useCallback } from 'react';
import Form from '../components/form';
import { useIMCCalculator } from '../hooks/useIMCCalculator';
import Button from '../components/button.jsx'

const Home = () => {
    const {
        // State direct (plus lisible)
        poids,
        taille,
        resultat,
        isLoading,
        errors,
        // Setters
        setPoidsValue,
        setTailleValue,
        // Methods
        resetForm,
        calculateIMC
    } = useIMCCalculator();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        calculateIMC();
    }, [calculateIMC]);

    const handleReset = useCallback(() => {
        resetForm();
    }, [resetForm]);

    // ...existing code...

    return (
        <div className="divi-imc-wrapper">
            <div className="imc-container">
                <div className="imc-header">
                    <h2>Calculer votre IMC</h2>
                </div>
                <div className="imc-body-card">
                    <Form
                        poids={poids}
                        taille={taille}
                        onPoidsChange={(e) => setPoidsValue(e.target.value)}
                        onTailleChange={(e) => setTailleValue(e.target.value)}
                        onSubmit={handleSubmit}
                        isLoading={isLoading}
                        errors={errors}
                    />
                </div>
            </div>

            {resultat && (
                <div className={`imc-result ${resultat.classe}`}>
                    <p id="result" className="imc-value">{resultat.valeur}</p>
                    <p id="explanation" className="imc-text">{resultat.texte}</p>
                    <Button
                        onClick={handleReset}
                        className="btn-reset"
                    >
                        Réinitialiser
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Home;


