import React from 'react'
import './nav-item-animation.css'

export interface INavItem {
  children: string;
  to: string;
}

export const NavItem: React.FC<INavItem> = (props) => {
  return (
    <li className=''>
      <a className='text-decor-link' href={ props.to }>{ props.children }</a>
    </li>
  )
}
