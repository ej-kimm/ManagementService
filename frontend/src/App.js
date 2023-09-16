import './styles/main.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  // const [hello, setHello] = useState('')

  // useEffect(() => {
  //   axios
  //     .get('/hello')
  //     .then((response) => setHello(response.data))
  //     .catch((error) => console.log(error))
  // }, [])

  return (
    <section className="login-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-8">
            {/* 백엔드에서 가져온 데이터입니다 : {hello} */}
            <div className="login-button-group">
              <button className="admin-button" type="button">
                <i className="ic-key"></i>
              </button>
              <button className="user-button" type="button">
                <i className="ic-user"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
