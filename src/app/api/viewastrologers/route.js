import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Astrologer from '@/models/addastrologer'

export async function GET() {
  try {
    await connectDB()
    const astrologers = await Astrologer.find({}, { _id: 0, __v: 0 }) // Hide Mongo fields
    return NextResponse.json(astrologers)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch astrologers' }, { status: 500 })
  }
}
