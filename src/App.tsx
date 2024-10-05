import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Accounting from './pages/Accounting'
import TaxManagement from './pages/TaxManagement'
import HumanResources from './pages/HumanResources'
import CRM from './pages/CRM'
import Ecommerce from './pages/Ecommerce'
import Invoicing from './pages/Invoicing'
import Inventory from './pages/Inventory'
import POS from './pages/POS'
import Communication from './pages/Communication'
import Notes from './pages/Notes'

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/tax" element={<TaxManagement />} />
            <Route path="/hr" element={<HumanResources />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/invoicing" element={<Invoicing />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/pos" element={<POS />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App