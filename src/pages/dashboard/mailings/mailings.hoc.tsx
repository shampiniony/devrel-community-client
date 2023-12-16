import React from 'react'
import { useParams } from 'react-router'
import { DefaultWindow } from './default-window'
import { Sender } from './sender'

export const MailingsHoc = () => {
  const { subsection } = useParams() 

  let component = <DefaultWindow/>

  switch(subsection) {
    case 'sender':
      component = <Sender/>
      break;
    default:
      component = <DefaultWindow/>
      break;
  }

  return component;
}
