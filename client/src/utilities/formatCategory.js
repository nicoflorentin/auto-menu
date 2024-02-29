export const formatCategory = (category) => {
	// Dividir la cadena en palabras separadas por mayúsculas
	const words = category.split(/(?=[A-Z])/);
	
	// Capitalizar la primera letra de cada palabra y unirlas con un espacio
	const formattedCategory = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
	
	return formattedCategory;
}