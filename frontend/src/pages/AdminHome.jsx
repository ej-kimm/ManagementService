import React from 'react'
import logo from '../assets/images/logo.svg'

export default function AdminHome() {
  return (
    <header className="gnb">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="gnb-wrapper">
              <div className="gnb-left">
                <h1 className="logo">
                  <a href="/">
                    <img src={logo} alt="Management" />
                  </a>
                </h1>

                <nav className="gnb-nav lg-only">
                  <h2 className="visually-hidden">메뉴</h2>
                  <ul className="gnb-nav-list">
                    <li className="gnb-nav-item">
                      <a href="/">재고관리</a>
                    </li>
                    <li className="gnb-nav-item">
                      <a href="/">비품목록</a>
                    </li>
                    <li className="gnb-nav-item">
                      <a href="/">출장일자</a>
                    </li>
                    <li className="gnb-nav-item">
                      <a href="/">설정</a>
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
                  <button
                    className="gnb-search-button gnb-icon-button sm-only"
                    type="button"
                  >
                    <i className="ic-search"></i>
                  </button>

                  <button className="gnb-icon-button" type="button">
                    <i className="ic-user" />
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
