import React, { useState } from 'react'
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '../components/ui/table'

const HumanResources = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering', salary: 85000 },
    { id: 2, name: 'Jane Smith', position: 'Marketing Manager', department: 'Marketing', salary: 75000 },
  ])

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    position: '',
    department: '',
    salary: 0,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewEmployee({ ...newEmployee, [name]: name === 'salary' ? parseInt(value) : value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmployees([...employees, { id: employees.length + 1, ...newEmployee }])
    setNewEmployee({ name: '', position: '', department: '', salary: 0 })
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Human Resources</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              name="name"
              value={newEmployee.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="border p-2 rounded flex-grow"
              required
            />
            <input
              type="text"
              name="position"
              value={newEmployee.position}
              onChange={handleInputChange}
              placeholder="Position"
              className="border p-2 rounded flex-grow"
              required
            />
            <input
              type="text"
              name="department"
              value={newEmployee.department}
              onChange={handleInputChange}
              placeholder="Department"
              className="border p-2 rounded flex-grow"
              required
            />
            <input
              type="number"
              name="salary"
              value={newEmployee.salary}
              onChange={handleInputChange}
              placeholder="Salary"
              className="border p-2 rounded w-32"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Employee
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Employee Directory</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Position</TableHeader>
              <TableHeader>Department</TableHeader>
              <TableHeader>Salary</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>${employee.salary.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default HumanResources