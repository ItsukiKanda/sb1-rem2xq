import React, { useState } from 'react'
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '../components/ui/table'

const Ecommerce = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 50 },
    { id: 2, name: 'T-Shirt', category: 'Apparel', price: 19.99, stock: 100 },
  ])

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: 0,
    stock: 0,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProduct({ ...newProduct, [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setProducts([...products, { id: products.length + 1, ...newProduct }])
    setNewProduct({ name: '', category: '', price: 0, stock: 0 })
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">E-commerce Management</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              placeholder="Product Name"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              placeholder="Category"
              className="border p-2 rounded"
              required
            />
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              placeholder="Price"
              step="0.01"
              min="0"
              className="border p-2 rounded"
              required
            />
            <input
              type="number"
              name="stock"
              value={newProduct.stock}
              onChange={handleInputChange}
              placeholder="Stock"
              min="0"
              className="border p-2 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Product
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Product Catalog</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Product Name</TableHeader>
              <TableHeader>Category</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeader>Stock</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Ecommerce