import React from 'react'
import { DataBuah } from './Tugas-14/DataBuah'
import FormBuah from './Tugas-14/Forms'
import TabelBuah from './Tugas-14/TabelBuah'
// import Forms from './Tugas-12/Forms'
// import AppContent from './Tugas-9/AppContent'
// import TabelBuah from './Tugas-10/TabelBuah'
// import Timer from './Tugas-11/Timer'

function App() {
  return (
    <>
      <DataBuah>
        {/* <AppContent /> */}
        {/* <TabelBuah /> */}
        {/* <Timer start={100} /> */}
        <TabelBuah />
        <FormBuah />
      </DataBuah>
    </>
  );
}

export default App;
