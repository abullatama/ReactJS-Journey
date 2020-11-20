import React from 'react'
import AppContent from './Tugas-9/AppContent'
import TabelBuah from './Tugas-10/TabelBuah'
import Timer from './Tugas-11/Timer'
import Forms from './Tugas-12/Forms'
import FormsAPI from './Tugas-13/Forms'
import { DataBuah } from './Tugas-14/DataBuah'
import FormBuah from './Tugas-14/Forms'
import Tabel from './Tugas-14/TabelBuah'
import Nav from './Tugas-15/Nav'
import { TemaProvider } from './Tugas-15/Tema'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Tugas-14/form.css'

function App() {
  return (
    <Router>
      <TemaProvider>
        <Nav />
      </TemaProvider>
      <Switch>
        <Route exact path="/">
          <AppContent />
        </Route>
        <Route path="/Tugas-10">
          <TabelBuah />
        </Route>
        <Route path="/Tugas-11">
          <Timer start={100} />
        </Route>
        <Route path="/Tugas-12">
          <Forms />
        </Route>
        <Route path="/Tugas-13">
          <FormsAPI />
        </Route>
        <Route path="/Tugas-14">
          <DataBuah>
            <Tabel />
            <FormBuah />
          </DataBuah>
        </Route>
      </Switch>
    </Router >
  )
}

export default App;
