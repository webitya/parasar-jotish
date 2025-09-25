import mongoose from 'mongoose'

const astrologerSchema = new mongoose.Schema({
  ID: { type: String, required: true, unique: true }, // 5–10 digit unique ID
  name: String,
  expertise: String,
  rating: Number,
  fees: Number,
  language: String,
  image: String,
  bio: String,
  totalReviews: Number,
  timings: String,

  // ✅ New field added here
  sociallink: String,

}, { timestamps: true })

export default mongoose.models.Astrologer || mongoose.model('Astrologer', astrologerSchema)
