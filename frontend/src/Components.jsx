import React from 'react'
import './styles/main.scss'

export default function Components() {
  return (
    <div>
      <div className="select-group is-active">
        <select className="form-select">
          <option value="1">선택사항 1</option>
          <option value="2">선택사항 2</option>
          <option value="3">선택사항 3</option>
          <option value="4">선택사항 4</option>
          <option value="5">선택사항 5</option>
        </select>
        <i className="ic-caret" aria-hidden></i>
      </div>

      <div className="input-group">
        <i className="ic-search" aria-hidden></i>
        <input className="form-input" type="text" placeholder="검색" />
      </div>
    </div>
  )
}
