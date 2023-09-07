import { useState } from 'react'
import './App.css'
import Contador from './components/Contador'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <main>
      <Navbar />
      <h1>Proyecto: Tienda de servicios</h1>
      <Contador />
      
    </main>
  )
}

export default App
