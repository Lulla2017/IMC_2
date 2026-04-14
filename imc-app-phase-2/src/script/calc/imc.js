import { slices } from '../constant/slice.js';

/**
 * Calcule l'Indice de Masse Corporelle (IMC) basé sur le poids et la taille
 * Formule : IMC = poids (kg) / (taille (m))²
 *
 * @param {string|number} poids - Le poids en kilogrammes
 * @param {string|number} taille - La taille en centimètres
 * @returns {Object|null} Objet contenant { valeur: string, classe: string, texte: string } ou null si calcul invalide
 * @example
 * const result = calculerIMC(75, 180);
 * // { valeur: "23.1", classe: "imc-result-normal", texte: "Corpulence normale" }
 */
export const calculerIMC = (poids, taille) => {
    const p = parseFloat(poids);
    const t = parseFloat(taille) / 100; // Conversion cm en mètres

    // Validation des entrées
    if (!p || !t || p <= 0 || t <= 0) {
        console.error("Veuillez entrer des valeurs valides pour le poids et la taille.");
        return null;
    }

    // Calcul de l'IMC
    const imcValue = (p / (t * t)).toFixed(1);

    // Recherche de la tranche correspondante
    const info = slices.find(tr => imcValue < tr.max) || slices[slices.length - 1];

    // Garde clause pour éviter les erreurs si la configuration est invalide
    if (!info) {
        console.error("Configuration des tranches IMC invalide");
        return null;
    }

    return {
        valeur: imcValue,
        classe: info.classe,
        texte: info.texte
    };
};

export default calculerIMC;
