import React from 'react'


const d = new Date();
let year = d.getFullYear();

export const Footer = () => {
  return (
    <footer>
        <p>Copy Right {year} </p>
    </footer>
  )
}
