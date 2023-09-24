import React from 'react'

export default function GnbMenuItem({ isActive, onClick, label }) {
  return (
    <li
      className={`gnb-nav-item ${isActive ? 'is-active' : ''}`}
      onClick={onClick}
    >
      <button type="button">{label}</button>
    </li>
  )
}
