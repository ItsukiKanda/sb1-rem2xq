import React, { useState } from 'react'
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '../components/ui/table'

const CRM = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Acme Corp', contact: 'John Smith', email: 'john@acme.com', phone: '123-456-7890', status: 'Active' },
    { id: 2, name: 'TechStart Inc', contact: 'Jane Doe', email: 'jane@techstart.com', phone: '987-654-3210', status: 'Lead' },
  ])

  const [newCustomer, setNewCustomer] = useState({
    name: '',
    contact: '',
    email: '',
    phone: '',
    status: 'Lead',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewCustomer({ ...newCustomer, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCustomers([...customers, { id: customers.length + 1, ...newCustomer }])
    setNewCustomer({ name: '', contact: '', email: '', phone: '', status: 'Lead' })
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Customer Relationship Management</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Customer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={newCustomer.name}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="contact"
              value={newCustomer.contact}
              onChange={handleInputChange}
              placeholder="Contact Person"
              className="border p-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={newCustomer.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border p-2 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              value={newCustomer.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              className="border p-2 rounded"
              required
            />
            <select
              name="status"
              value={newCustomer.status}
              onChange={handleInputChange}
              className="border p-2 rounded"
              required
            >
              <option value="Lead">Lead</option>
              <option value="Prospect">Prospect</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Customer
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Customer List</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Company Name</TableHeader>
              <TableHeader>Contact Person</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Phone</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.contact}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default CRM