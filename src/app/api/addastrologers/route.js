// /app/api/addastrologers/route.js
import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Astrologer from '@/models/addastrologer'

async function generateUniqueID() {
  let unique = false
  let ID

  while (!unique) {
    ID = Math.floor(Math.random() * 9000000000) + 10000
    const exists = await Astrologer.findOne({ ID })
    if (!exists) unique = true
  }

  return ID.toString()
}

export async function POST(req) {
  try {
    await connectDB()
    const data = await req.json()

    console.log('🎯 Received Payload:', data)

    if (!data.name?.trim() || !data.image?.trim()) {
      console.log('❌ Missing name or image in request')
      return NextResponse.json(
        { success: false, error: 'Name and image are required' },
        { status: 400 }
      )
    }

    console.log('📷 Image Path Received:', data.image)

    const ID = await generateUniqueID()
    const astrologer = new Astrologer({ ...data, ID })

    await astrologer.save()

    console.log('✅ Astrologer saved:', astrologer)

    return NextResponse.json({ success: true, astrologer }, { status: 201 })
  } catch (error) {
    console.error('❌ Add Astrologer Error:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
