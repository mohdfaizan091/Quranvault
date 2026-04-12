import Verse from '../models/verse.model.js';

export const saveVerse = async (req, res, next) => {
  try {
    const verse = await Verse.create({ ...req.body, userId: req.userId });
    res.status(201).json({ success: true, data: verse });
  } catch (error) {
    next(error);
  }
};

export const getVerses = async (req, res, next) => {
  try {
    const verses = await Verse.find({ userId: req.userId, isDeleted: false })
      .sort({ createdAt: -1 });
    res.json({ success: true, data: verses });
  } catch (error) {
    next(error);
  }
};

export const getVerseById = async (req, res, next) => {
  try {
    const verse = await Verse.findOne({ _id: req.params.id, userId: req.userId });
    if (!verse) return res.status(404).json({ success: false, message: 'Verse not found' });
    res.json({ success: true, data: verse });
  } catch (error) {
    next(error);
  }
};

export const updateVerse = async (req, res, next) => {
  try {
    const verse = await Verse.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );
    if (!verse) return res.status(404).json({ success: false, message: 'Verse not found' });
    res.json({ success: true, data: verse });
  } catch (error) {
    next(error);
  }
};

export const deleteVerse = async (req, res, next) => {
  try {
    await Verse.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { isDeleted: true }
    );
    res.json({ success: true, message: 'Verse deleted' });
  } catch (error) {
    next(error);
  }
};