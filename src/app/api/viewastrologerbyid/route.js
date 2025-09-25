import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Astrologer from '@/models/addastrologer'

export async function GET(req) {
  await connectDB()
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  const astrologer = await Astrologer.findOne({ ID: id })

  if (!astrologer) {
    return NextResponse.json({ message: 'Astrologer not found' }, { status: 404 })
  }

  return NextResponse.json(astrologer)
}
