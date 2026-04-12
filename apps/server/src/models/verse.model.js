import mongoose from 'mongoose';

const verseSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  surah: { type: Number, required: true },
  surahName: { type: String },
  surahNameArabic: { type: String },
  ayat: { type: Number, required: true },
  translation: { type: String, required: true },
  aiContext: {
    literal: String,
    historical: String,
    modernRelevance: String
  },
  personalLesson: { type: String, default: '' },
  tags: [{ type: String }],
  isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

verseSchema.index({ userId: 1, createdAt: -1 });
verseSchema.index({ userId: 1, tags: 1 });

export default mongoose.model('Verse', verseSchema);