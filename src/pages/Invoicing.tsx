import React, { useState } from 'react'
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '../components/ui/table'

const Invoicing = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, customer: 'Acme Corp', amount: 5000, date: '2023-03-15', status: 'Paid' },
    { id: 2, customer: 'TechStart Inc', amount: 7500, date: '2023-03-20', status: 'Pending' },
  ])

  const [newInvoice, setNewInvoice] = useState({
    customer: '',
    amount: 0,
    date: '',
    status: 'Pending',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewInvoice({ ...newInvoice, [name]: name === 'amount' ? parseFloat(value) : value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInvoices([...invoices, { id: invoices.length + 1, ...newInvoice }])
    setNewInvoice({ customer: '', amount: 0, date: '', status: 'Pending' })
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Invoicing</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Create New Invoice</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="customer"
              value={newInvoice.customer}
              onChange={handleInputChange}
              placeholder="Customer Name"
              className="border p-2 rounded"
              required
            />
            <input
              type="number"
              name="amount"
              value={newInvoice.amount}
              onChange={handleInputChange}
              placeholder="Amount"
              step="0.01"
              min="0"
              className="border p-2 rounded"
              required
            />
            <input
              type="date"
              name="date"
              value={newInvoice.date}
              onChange={handleInputChange}
              className="border p-2 rounded"
              required
            />
            <select
              name="status"
              value={newInvoice.status}
              onChange={handleInputChange}
              className="border p-2 rounded"
              required
            >
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Create Invoice
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Invoice List</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Invoice ID</TableHeader>
              <TableHeader>Customer</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.customer}</TableCell>
                <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Invoicing