import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <section className="login-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-8">
            <div className="login-button-group">
              <Link to="/admin">
                <button className="admin-button" type="button">
                  <i className="ic-key"></i>
                </button>
              </Link>
              <Link to="/user">
                <button className="user-button" type="button">
                  <i className="ic-user"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
