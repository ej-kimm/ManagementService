import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom'

export default function AdminHome() {
  const [activeMenu, setActiveMenu] = useState('inventory')
  const navigate = useNavigate()

  const handleNavigate = (menuName) => {
    setActiveMenu(menuName)
    navigate('/admin') // navigate(menuName) 변경!!
  }

  return (
    <header className="gnb">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="gnb-wrapper">
              <div className="gnb-left">
                <h1 className="logo">
                  <button type="button" onClick={() => handleNavigate('')}>
                    <img src={logo} alt="Management" />
                  </button>
                </h1>

                <nav className="gnb-nav lg-only">
                  <h2 className="visually-hidden">메뉴</h2>
                  <ul className="gnb-nav-list">
                    <li
                      className={`gnb-nav-item ${
                        activeMenu === 'inventory' ? 'is-active' : ''
                      }`}
                      onClick={() => handleNavigate('inventory')}
                    >
                      <button type="button">재고관리</button>
                    </li>
                    <li
                      className={`gnb-nav-item ${
                        activeMenu === 'equipment' ? 'is-active' : ''
                      }`}
                      onClick={() => handleNavigate('equipment')}
                    >
                      <button type="button">비품목록</button>
                    </li>
                    <li
                      className={`gnb-nav-item ${
                        activeMenu === 'business-trips' ? 'is-active' : ''
                      }`}
                      onClick={() => handleNavigate('business-trips')}
                    >
                      <button type="button">출장일자</button>
                    </li>
                    <li
                      className={`gnb-nav-item ${
                        activeMenu === 'setting' ? 'is-active' : ''
                      }`}
                      onClick={() => handleNavigate('setting')}
                    >
                      <button type="button">설정</button>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="gnb-right">
                <div className="input-group lg-only">
                  <i className="ic-search" aria-hidden></i>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="검색"
                  />
                </div>

                <div className="button-group">
                  <button className="gnb-icon-button sm-only" type="button">
                    <i className="ic-search"></i>
                  </button>

                  <button className="gnb-icon-button is-user" type="button">
                    <i className="ic-user" />
                  </button>

                  <button
                    className="gnb-icon-button is-menu sm-only"
                    type="button"
                  >
                    <i className="ic-menu" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
