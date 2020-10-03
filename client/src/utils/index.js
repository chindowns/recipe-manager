import axios from 'axios';

// Hook to capitalize the first letter of each word
export const cap1stLetter = (str) => {
    return str.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

// Hook to identify current year
export const currentYear = new Date().getFullYear();

export const sort = (list) => {
    return list.sort((a, b) => (a.color > b.color) ? 1 : -1)
}

export const removeDups = (arr) => {
    return [...new Map(arr.map(item => [item.id, item])).values()]
}

export const getCurrentUser = (email) => {
    axios.get(`/api/user/${email}`)
    .then(result => {return result.data})
    .catch(err => console.log(err));
}