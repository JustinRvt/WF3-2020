// Je crée une fonction réutilisable afin de convertir les minutes en heures
const minutesToHoursConversion = (totalMinutes) => {
    // on utilise l'opérateur modulo % afin de récupérer les minutes restantes
    const minutes = totalMinutes % 60;
    // on récupère le nombre d'heures pleines en arrondissant au nombre entier
    const hours = Math.floor(totalMinutes / 60);
    // J'appelle ma fonction de formatage
    return `${hours}h${string2Digits(minutes)}`;
}
// Cette fonction sert à ajouter un 0 si jamais le nombre retourné est inférieur à 10
const string2Digits = (number) => {
    return number.toString().padStart(2, '0');
}