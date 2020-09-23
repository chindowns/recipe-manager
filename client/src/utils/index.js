import React from 'react'

// Hook to capitalize the first letter of each word
export const cap1stLetter = (str) => {
    return str.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}