export const toCamelCase = (inputString) => {
	// Convertir a minúsculas y eliminar espacios
	const lowerCaseString = inputString.toLowerCase().trim();

	// Dividir la cadena en palabras separadas por espacios
	const words = lowerCaseString.split(' ');

	// Convertir la primera letra de cada palabra, excepto la primera, a mayúscula
	const camelCaseWords = words.map((word, index) => {
		if (index === 0) {
			// Si es la primera palabra, no convertir a mayúscula
			return word;
		} else {
			// Convertir primera letra a mayúscula
			return word.charAt(0).toUpperCase() + word.slice(1);
		}
	});

	// Unir las palabras en una sola cadena
	const camelCaseString = camelCaseWords.join('');

	return camelCaseString;
}