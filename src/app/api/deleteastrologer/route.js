import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Astrologer from '@/models/addastrologer'

export async function DELETE(req) {
  await connectDB()
  const { ID } = await req.json()

  const deleted = await Astrologer.deleteOne({ ID })

  if (deleted.deletedCount === 0) {
    return NextResponse.json({ message: 'Astrologer not found' }, { status: 404 })
  }

  return NextResponse.json({ message: 'Astrologer deleted successfully' })
}
