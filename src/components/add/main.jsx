'use client'

import { useState } from 'react'

export default function AddAstrologer() {
  const [form, setForm] = useState({
    name: '',
    expertise: '',
    rating: '',
    fees: '',
    language: '',
    image: '',
    bio: '',
    totalReviews: '',
    timings: ''
  })

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    try {
      const res = await fetch('/api/astrologers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed to add astrologer')

      setSuccess(true)
      setForm({
        name: '',
        expertise: '',
        rating: '',
        fees: '',
        language: '',
        image: '',
        bio: '',
        totalReviews: '',
        timings: ''
      })
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Add Astrologer</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'expertise', 'rating', 'fees', 'language', 'image', 'bio', 'totalReviews', 'timings'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        ))}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition"
        >
          Add Astrologer
        </button>
      </form>

      {success && <p className="text-green-600 mt-4 text-center">Astrologer added successfully!</p>}
      {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
    </div>
  )
}
