import React, { useState } from 'react'
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '../components/ui/table'

const Inventory = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Laptop', sku: 'LAP001', quantity: 50, reorderPoint: 10 },
    { id: 2, name: 'Mouse', sku: 'MOU001', quantity: 100, reorderPoint: 20 },
  ])

  const [newItem, setNewItem] = useState({
    name: '',
    sku: '',
    quantity: 0,
    reorderPoint: 0,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewItem({ ...newItem, [name]: name === 'quantity' || name === 'reorderPoint' ? parseInt(value) : value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInventory([...inventory, { id: inventory.length + 1, ...newItem }])
    setNewItem({ name: '', sku: '', quantity: 0, reorderPoint: 0 })
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Inventory Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={newItem.name}
              onChange={handleInputChange}
              placeholder="Item Name"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="sku"
              value={newItem.sku}
              onChange={handleInputChange}
              placeholder="SKU"
              className="border p-2 rounded"
              required
            />
            <input
              type="number"
              name="quantity"
              value={newItem.quantity}
              onChange={handleInputChange}
              placeholder="Quantity"
              min="0"
              className="border p-2 rounded"
              required
            />
            <input
              type="number"
              name="reorderPoint"
              value={newItem.reorderPoint}
              onChange={handleInputChange}
              placeholder="Reorder Point"
              min="0"
              className="border p-2 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Item
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Inventory List</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Item Name</TableHeader>
              <TableHeader>SKU</TableHeader>
              <TableHeader>Quantity</TableHeader>
              <TableHeader>Reorder Point</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.sku}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.reorderPoint}</TableCell>
                <TableCell>
                  {item.quantity <= item.reorderPoint ? (
                    <span className="text-red-500 font-semibold">Reorder</span>
                  ) : (
                    <span className="text-green-500 font-semibold">In Stock</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Inventory