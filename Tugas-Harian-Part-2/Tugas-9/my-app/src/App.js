import React from 'react'
import './App.css'
import AppContent from './Tugas-9/AppContent'
import TabelBuah from './Tugas-10/TabelBuah'
import Timer from './Tugas-11/Timer'

function App() {
  return (
    <>
      <AppContent />
      <TabelBuah />
      <Timer start={100} />
    </>
  );
}

export default App;
