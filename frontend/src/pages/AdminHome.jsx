import React from 'react'

export default function AdminHome() {
  return (
    <header className="gnb">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="gnb-left">
              <h1 className="logo">
                <a href="/">
                  <img src="" alt="" />
                </a>
              </h1>

              <nav className="gnb-nav sm-hidden">
                <h2 className="visually-hidden">메뉴</h2>
                <ul className="gnb-nav-list">
                  <li className="gnb-nav-item">
                    <a href="/">재고관리</a>
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
              <div className="input-group">
                <i className="ic-search" aria-hidden></i>
                <input className="form-input" type="text" placeholder="검색" />
              </div>

              <button className="gnb-avatar-button" type="button">
                <i className="ic-user" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
