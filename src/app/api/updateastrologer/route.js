import { connectDB } from '@/lib/db'
import Astrologer from '@/models/addastrologer'

export async function PUT(req) {
  try {
    await connectDB()

    const body = await req.json()
    const { ID, ...updates } = body

    const astrologer = await Astrologer.findOneAndUpdate({ ID }, updates, {
      new: true,
    })

    if (!astrologer) {
      return new Response(JSON.stringify({ message: 'Astrologer not found' }), {
        status: 404,
      })
    }

    return new Response(JSON.stringify(astrologer), {
      status: 200,
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ message: 'Update failed' }), {
      status: 500,
    })
  }
}
