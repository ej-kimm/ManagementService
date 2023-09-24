import React from 'react'
import Logo from './Logo'
import GnbMenuItem from './GnbMenuItem'

export default function GnbLeft({
  onLogoClick,
  activeGnbMenu,
  onMenuItemClick,
}) {
  return (
    <div className="gnb-left">
      <Logo onClick={onLogoClick} />

      <nav className="gnb-nav lg-only">
        <h2 className="visually-hidden">메뉴</h2>
        <ul className="gnb-nav-list">
          <GnbMenuItem
            isActive={activeGnbMenu === 'inventory'}
            onClick={() => onMenuItemClick('inventory')}
            label="재고관리"
          />
          <GnbMenuItem
            isActive={activeGnbMenu === 'equipment'}
            onClick={() => onMenuItemClick('equipment')}
            label="비품목록"
          />
          <GnbMenuItem
            isActive={activeGnbMenu === 'business-trips'}
            onClick={() => onMenuItemClick('business-trips')}
            label="출장일자"
          />
          <GnbMenuItem
            isActive={activeGnbMenu === 'setting'}
            onClick={() => onMenuItemClick('setting')}
            label="설정"
          />
        </ul>
      </nav>
    </div>
  )
}
