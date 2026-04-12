import mongoose from 'mongoose';

const readingLogSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  surah: { type: Number, required: true },
  ayatsRead: { type: Number, required: true },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

readingLogSchema.index({ userId: 1, date: -1 });

export default mongoose.model('ReadingLog', readingLogSchema);
