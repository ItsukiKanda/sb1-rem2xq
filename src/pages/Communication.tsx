import React, { useState } from 'react'

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
}

const Communication = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'John Doe', content: 'Hello team!', timestamp: '2023-03-15 09:00' },
    { id: 2, sender: 'Jane Smith', content: 'Hi John, how are you?', timestamp: '2023-03-15 09:05' },
  ])

  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        sender: 'Current User', // In a real app, this would be the logged-in user
        content: newMessage.trim(),
        timestamp: new Date().toLocaleString(),
      }
      setMessages([...messages, message])
      setNewMessage('')
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Internal Communication</h1>
      <div className="bg-white rounded-lg shadow-md max-w-2xl mx-auto">
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-2">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center">
                {message.sender[0]}
              </div>
              <div className="bg-gray-100 rounded-lg p-2 max-w-xs">
                <p className="font-semibold">{message.sender}</p>
                <p>{message.content}</p>
                <p className="text-xs mt-1 opacity-75">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow border rounded-lg p-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Communication