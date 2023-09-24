import React from 'react'

export default function GnbRight({ onMyMenuClick, activeMyMenu }) {
  return (
    <div className="gnb-right">
      <div className="input-group lg-only">
        <i className="ic-search" aria-hidden></i>
        <input className="form-input" type="text" placeholder="검색" />
      </div>

      <div className="button-group">
        <button className="gnb-icon-button sm-only" type="button">
          <i className="ic-search"></i>
        </button>

        <div className="my-menu">
          <button
            className={`gnb-icon-button is-user lg-only ${
              activeMyMenu ? 'is-active' : ''
            }`}
            type="button"
            onClick={onMyMenuClick}
          >
            <i className="ic-user" />
          </button>

          <div
            className={`my-menu-content lg-only ${
              activeMyMenu ? 'is-active' : ''
            }`}
          >
            <ul className="my-menu-list">
              <li className="my-menu-item">
                <button type="button">로그아웃</button>
              </li>
            </ul>
          </div>
        </div>

        <button className="gnb-icon-button is-menu sm-only" type="button">
          <i className="ic-menu" />
        </button>
      </div>
    </div>
  )
}
