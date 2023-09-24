import React, { useState } from 'react'

export default function Login() {
  const [userInfo, setUserInfo] = useState({ id: '', password: '' })
  const [showLoginForm, setShowLoginForm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserInfo({ id: '', password: '' })
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserInfo({ ...userInfo, [name]: value })
    console.log(name, value)
  }
  const handleShowLoginForm = () => {
    setShowLoginForm(true)
  }
  const handleCloseLoginForm = () => {
    setShowLoginForm(false)
    setUserInfo({ id: '', password: '' })
  }

  return (
    <section className="login-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-8">
            <div className="login-button-group">
              <button
                className="admin-button"
                type="button"
                onClick={handleShowLoginForm}
              >
                <i className="ic-key"></i>
              </button>
              <button
                className="user-button"
                type="button"
                onClick={handleShowLoginForm}
              >
                <i className="ic-user"></i>
              </button>
            </div>

            <div
              className={`login-form-group ${showLoginForm ? 'is-active' : ''}`}
            >
              <header className="login-form-group-header">
                <h1 className="title">로그인</h1>

                <button
                  className="close-button"
                  type="button"
                  onClick={handleCloseLoginForm}
                >
                  <i className="ic-close"></i>
                </button>
              </header>

              <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-form-info">
                  <div className="input-group">
                    <i className="ic-user" aria-hidden></i>
                    <input
                      className="form-input"
                      type="text"
                      name="id"
                      value={userInfo.id}
                      onChange={handleChange}
                      placeholder="아이디"
                    />
                  </div>
                  <div className="input-group">
                    <i className="ic-key" aria-hidden></i>
                    <input
                      className="form-input"
                      type="password"
                      name="password"
                      value={userInfo.password}
                      onChange={handleChange}
                      placeholder="비밀번호"
                    />
                  </div>
                </div>

                <div className="login-form-button">
                  <button className="btn-primary btn-40" type="submit">
                    Log in / Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
