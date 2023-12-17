import React from 'react'
import { Link } from 'react-router-dom';  

export interface INavItem {
  children: string;
  to: string;
}

export const NavItem: React.FC<INavItem> = (props) => {
  return (
    <li className=''>
      <Link to={ props.to }>{ props.children }</Link>
    </li>
  )
}
