import React from 'react'
import { Link } from 'react-router-dom'
import { BarChart2, DollarSign, FileText, Users, ShoppingBag, FileInvoice, Package, ShoppingCart, MessageCircle, FileText as NotesIcon } from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { icon: BarChart2, text: 'Dashboard', link: '/' },
    { icon: DollarSign, text: 'Accounting', link: '/accounting' },
    { icon: FileText, text: 'Tax Management', link: '/tax' },
    { icon: Users, text: 'Human Resources', link: '/hr' },
    { icon: ShoppingBag, text: 'CRM', link: '/crm' },
    { icon: ShoppingCart, text: 'E-commerce', link: '/ecommerce' },
    { icon: FileInvoice, text: 'Invoicing', link: '/invoicing' },
    { icon: Package, text: 'Inventory', link: '/inventory' },
    { icon: ShoppingCart, text: 'POS', link: '/pos' },
    { icon: MessageCircle, text: 'Communication', link: '/communication' },
    { icon: NotesIcon, text: 'Notes', link: '/notes' },
  ]

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h1 className="text-2xl font-semibold text-center">All-in-One SaaS</h1>
      <nav>
        {menuItems.map((item, index) => (
          <Link key={index} to={item.link} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <item.icon className="inline-block mr-2 w-6 h-6" />
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar