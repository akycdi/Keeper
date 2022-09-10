import React from 'react'


const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer>
        <p>Copy Right {year} </p>
    </footer>
  )
}
