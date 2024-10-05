import React, { useState } from 'react'
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '../components/ui/table'

const Accounting = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-03-01', description: 'Sales Revenue', debit: 5000, credit: 0 },
    { id: 2, date: '2023-03-02', description: 'Office Supplies', debit: 0, credit: 200 },
    { id: 3, date: '2023-03-03', description: 'Utility Bill', debit: 0, credit: 150 },
  ])

  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    debit: 0,
    credit: 0,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewTransaction({ ...newTransaction, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTransactions([...transactions, { id: transactions.length + 1, ...newTransaction }])
    setNewTransaction({ date: '', description: '', debit: 0, credit: 0 })
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Accounting</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Transaction</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="date"
              name="date"
              value={newTransaction.date}
              onChange={handleInputChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="description"
              value={newTransaction.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="border p-2 rounded flex-grow"
              required
            />
            <input
              type="number"
              name="debit"
              value={newTransaction.debit}
              onChange={handleInputChange}
              placeholder="Debit"
              className="border p-2 rounded w-32"
            />
            <input
              type="number"
              name="credit"
              value={newTransaction.credit}
              onChange={handleInputChange}
              placeholder="Credit"
              className="border p-2 rounded w-32"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Transaction
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Transaction Ledger</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Date</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader>Debit</TableHeader>
              <TableHeader>Credit</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{transaction.debit}</TableCell>
                <TableCell>{transaction.credit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Accounting