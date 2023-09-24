import React from 'react'
import logo from '../assets/images/logo.svg'

export default function Logo({ onClick }) {
  return (
    <h1 className="logo">
      <button type="button" onClick={onClick}>
        <img src={logo} alt="Management" />
      </button>
    </h1>
  )
}
