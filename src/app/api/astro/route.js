import { connectDB } from '@/lib/db'
import Astrologer from '@/models/addastrologer'
import { NextResponse } from 'next/server'

export async function GET(req) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 6
    const skip = (page - 1) * limit

    const total = await Astrologer.countDocuments()
    const astrologers = await Astrologer.find().skip(skip).limit(limit)

    return NextResponse.json({ astrologers, total })
  } catch (err) {
    return NextResponse.json({ message: 'Error fetching data', error: err.message }, { status: 500 })
  }
}
