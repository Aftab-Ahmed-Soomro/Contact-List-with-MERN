import React, { useEffect, useState } from 'react'
import FormData from './FormData'
import axios from 'axios'

const Dashboard = () => {
  const [modal, setModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: ''
  })
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    number: '',
    id: ''
  })
  const [dataList, setDataList] = useState([])

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // add-data
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:8080/api/add-data', formData)

    if (response?.data?.success) {
      setModal(false)
      alert(response?.data?.message)
      getFetchedData()
    }
    setFormData({ name: '', email: '', number: '' })
  }

  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:8080/api/delete-data/${id}`)
    if (response?.data?.success) {
      alert(response?.data?.message)
      getFetchedData()
    }
  }

  const handleEditOnChange = (e) => {
    const { name, value } = e.target
    setEditFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const response = await axios.put(`http://localhost:8080/api/update-data`, editFormData)

    if (response?.data?.success) {
      setEditModal(false)
      alert(response?.data?.message)
      getFetchedData()
    }
    setEditFormData({ name: '', email: '', number: '', _id: '' })
  }

  const handleEdit = (item) => {
    setEditModal(true)
    setEditFormData(item)
  }

  // get-data
  const getFetchedData = async () => {
    const response = await axios.get('http://localhost:8080/api/get-data')
    if (response?.data?.success) {
      setDataList(response?.data?.data)
    }
  }

  useEffect(() => {
    getFetchedData()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Dashboard</h1>
      
      <button 
        onClick={() => setModal(true)} 
        className="px-6 py-2 mb-6 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
      >
        ➕ Add Task
      </button>

      {/* Add Modal */}
      {modal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-[400px]">
            <FormData 
              close={() => setModal(false)}
              rest={formData}
              onChange={handleOnChange}
              submit={handleSubmit}
            />
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-[400px]">
            <FormData 
              close={() => setEditModal(false)}
              rest={editFormData}
              onChange={handleEditOnChange}
              submit={handleUpdate}
            />
          </div>
        </div>
      )}

      {/* All Data List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {dataList.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition border"
          >
            <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
            <p className="text-gray-600">{item.email}</p>
            <h5 className="text-gray-700 mt-2 font-medium">📞 {item.number}</h5>

            <div className="mt-4 flex justify-between">
              <button 
                onClick={() => handleDelete(item._id)} 
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
              <button 
                onClick={() => handleEdit(item)} 
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard