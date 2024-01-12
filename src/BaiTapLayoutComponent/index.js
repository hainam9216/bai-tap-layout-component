/*
    -Header
    -Body
        +banner
        +item
    -Footer
 */

import React from 'react'
import Header from './header'
import Body from './body'
import Footer from './footer'

export default function BaiTapLayout() {
  return (
    <div>
        <Header/>
        <Body/>
        <Footer/>
    </div>
  )
}
