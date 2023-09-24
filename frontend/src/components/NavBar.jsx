import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from './SideBar'
import GnbLeft from './GnbLeft'
import GnbRight from './GnbRight'

export default function NavBar() {
  const [activeGnbMenu, setActiveGnbMenu] = useState('inventory')
  const [activeMyMenu, setActiveMyMenu] = useState(false)
  const navigate = useNavigate()

  const handleNavigate = (menuName) => {
    setActiveGnbMenu(menuName)
    navigate('/admin') // `/admin/${menuName}` 변경!!
  }

  return (
    <>
      <header className="gnb">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="gnb-wrapper">
                <GnbLeft
                  onLogoClick={() => handleNavigate('inventory')}
                  activeGnbMenu={activeGnbMenu}
                  onMenuItemClick={handleNavigate}
                />
                <GnbRight
                  onMyMenuClick={() => setActiveMyMenu((prev) => !prev)}
                  activeMyMenu={activeMyMenu}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <SideBar />
    </>
  )
}
