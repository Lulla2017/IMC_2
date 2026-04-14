import { useState, useCallback } from 'react';
import { calculerIMC } from '../script/calc/imc.js';

/**
 * Hook personnalisé pour gérer la logique de calcul de l'IMC
 * @returns {Object} { poids, taille, resultat, isLoading, errors, setPoidsValue, setTailleValue, calculateIMC, resetForm }
 */
export const useIMCCalculator = () => {
    const [poids, setPoids] = useState("");
    const [taille, setTaille] = useState("");
    const [resultat, setResultat] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    // ✅ VALIDATION
    const validateInputs = useCallback(() => {
        const newErrors = {};

        if (!taille || parseFloat(taille) <= 0) {
            newErrors.taille = "Veuillez entrer une taille valide (> 0)";
        }
        if (!poids || parseFloat(poids) <= 0) {
            newErrors.poids = "Veuillez entrer un poids valide (> 0)";
        }

        return newErrors;
    }, [poids, taille]);

    // ✅ CALCUL IMC
    const calculateIMC = useCallback(() => {
        const validationErrors = validateInputs();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return false;
        }

        setIsLoading(true);

        try {
            const result = calculerIMC(poids, taille);
            if (result) {
                setResultat(result);
                setErrors({});
                return true;
            } else {
                setResultat(null);
                setErrors({
                    taille: "Les valeurs ne sont pas valides",
                    poids: "Veuillez réessayer"
                });
                return false;
            }
        } catch (error) {
            console.error("Erreur lors du calcul:", error);
            setErrors({
                global: "Une erreur est survenue lors du calcul"
            });
            return false;
        } finally {
            setIsLoading(false);
        }
    }, [poids, taille, validateInputs]);

    // ✅ RESET
    const resetForm = useCallback(() => {
        setPoids("");
        setTaille("");
        setResultat(null);
        setErrors({});
        setIsLoading(false);
    }, []);

    return {
        // State
        poids,
        taille,
        resultat,
        isLoading,
        errors,
        // Setters
        setPoidsValue: setPoids,
        setTailleValue: setTaille,
        // Methods
        calculateIMC,
        resetForm
    };
};

