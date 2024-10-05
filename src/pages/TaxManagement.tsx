import React, { useState } from 'react'
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '../components/ui/table'

const TaxManagement = () => {
  const [taxRecords, setTaxRecords] = useState([
    { id: 1, year: 2023, quarter: 'Q1', income: 50000, expenses: 30000, taxDue: 5000 },
    { id: 2, year: 2023, quarter: 'Q2', income: 60000, expenses: 35000, taxDue: 6250 },
  ])

  const [newRecord, setNewRecord] = useState({
    year: 2023,
    quarter: 'Q1',
    income: 0,
    expenses: 0,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewRecord({ ...newRecord, [name]: name === 'year' ? parseInt(value) : value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const taxDue = (newRecord.income - newRecord.expenses) * 0.25 // Simple tax calculation
    setTaxRecords([...taxRecords, { id: taxRecords.length + 1, ...newRecord, taxDue }])
    setNewRecord({ year: 2023, quarter: 'Q1', income: 0, expenses: 0 })
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Tax Management</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Tax Record</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="number"
              name="year"
              value={newRecord.year}
              onChange={handleInputChange}
              placeholder="Year"
              className="border p-2 rounded"
              required
            />
            <select
              name="quarter"
              value={newRecord.quarter}
              onChange={handleInputChange}
              className="border p-2 rounded"
              required
            >
              <option value="Q1">Q1</option>
              <option value="Q2">Q2</option>
              <option value="Q3">Q3</option>
              <option value="Q4">Q4</option>
            </select>
            <input
              type="number"
              name="income"
              value={newRecord.income}
              onChange={handleInputChange}
              placeholder="Income"
              className="border p-2 rounded"
              required
            />
            <input
              type="number"
              name="expenses"
              value={newRecord.expenses}
              onChange={handleInputChange}
              placeholder="Expenses"
              className="border p-2 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Tax Record
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Tax Records</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Year</TableHeader>
              <TableHeader>Quarter</TableHeader>
              <TableHeader>Income</TableHeader>
              <TableHeader>Expenses</TableHeader>
              <TableHeader>Tax Due</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {taxRecords.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.year}</TableCell>
                <TableCell>{record.quarter}</TableCell>
                <TableCell>${record.income.toLocaleString()}</TableCell>
                <TableCell>${record.expenses.toLocaleString()}</TableCell>
                <TableCell>${record.taxDue.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default TaxManagement