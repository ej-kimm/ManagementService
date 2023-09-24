import React from 'react'
import Logo from './Logo'

export default function SideBar() {
  return (
    <aside className="sidebar sm-only">
      <header className="sidebar-header">
        <Logo onClick={() => {}} />

        <div className="sidebar-user">
          <div className="sidebar-user-info">
            <i className="ic-user" />
            <strong className="username">{`닉네임`}</strong>
          </div>

          <div className="sidebar-auth">
            <button className="btn-outlined btn-40" type="button">
              로그아웃
            </button>
          </div>
        </div>
      </header>

      <nav className="sidebar-nav">
        <h2 className="visually-hidden">메뉴</h2>

        <div className="drawer-menu">
          <button className="drawer-menu-button" type="button">
            <i className="ic-business"></i>
            출장일자
            <i className="ic-chevron"></i>
          </button>

          <div className="drawer-menu-content">
            <ul className="drawer-menu-list">
              <li className="drawer-menu-item">
                <a href="/admin">휴가</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/admin">프로젝트</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  )
}
