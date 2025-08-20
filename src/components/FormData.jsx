import React from 'react'

const FormData = ({ close, rest, onChange, submit }) => {
  return (
    <form 
      onSubmit={submit} 
      className="flex flex-col gap-4"
    >
      {/* Close Button */}
      <div className="flex justify-end">
        <button 
          type="button" 
          onClick={close} 
          className="text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ✕
        </button>
      </div>

      {/* Input Fields */}
      <input 
        type="text" 
        placeholder="Enter name..." 
        name="name" 
        value={rest.name} 
        onChange={onChange}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input 
        type="email" 
        placeholder="Enter email..." 
        name="email" 
        value={rest.email} 
        onChange={onChange}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input 
        type="text" 
        placeholder="Enter number..." 
        name="number" 
        value={rest.number} 
        onChange={onChange}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      {/* Submit Button */}
      <button 
        type="submit" 
        className="w-full bg-indigo-600 text-white py-2 rounded-md shadow-md hover:bg-indigo-700 transition"
      >
        Submit Data
      </button>
    </form>
  )
}

export default FormData
