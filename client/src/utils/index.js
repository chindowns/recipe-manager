// import axios from 'axios';

// Hook to capitalize the first letter of each word
export const cap1stLetter = (str) => {
    return str.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

// Hook to identify current year
export const currentYear = new Date().getFullYear();

// Sorts an array of objects by a property value
// function takes two arguments "arr" Array and "property" 
export const sort = (arr, property) => {
    return arr.sort((a, b) => (a.property > b.property) ? 1 : -1)
}

// Revmoves duplicate objects from an array based on the recipe id property of 'id'
export const removeDups = (arr) => {
    return [...new Map(arr.map(item => [item.id, item])).values()]
}
