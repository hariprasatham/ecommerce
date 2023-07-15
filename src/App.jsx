import React from 'react'
import '../src/index.css'
import { Analytics } from '@vercel/analytics/react'

import { Header, Products } from './components'

function App() {
  return (
    <div>
      <Header />
      <Products />
      <Analytics />
    </div>
  )
}

export default App