import * as verseService from '../services/verse.service.js';

export const saveVerse = async (req, res, next) => {
  try {
    const verse = await verseService.createVerse(req.userId, req.body);
    res.status(201).json({ success: true, data: verse });
  } catch (error) {
    next(error);
  }
};

export const getVerses = async (req, res, next) => {
  try {
    const verses = await verseService.findVerses(req.userId);
    res.json({ success: true, data: verses });
  } catch (error) {
    next(error);
  }
};

export const getVerseById = async (req, res, next) => {
  try {
    const verse = await verseService.findVerseById(req.userId, req.params.id);
    if (!verse) return res.status(404).json({ success: false, message: 'Verse not found' });
    res.json({ success: true, data: verse });
  } catch (error) {
    next(error);
  }
};

export const updateVerse = async (req, res, next) => {
  try {
    const verse = await verseService.updateVerseById(req.userId, req.params.id, req.body);
    if (!verse) return res.status(404).json({ success: false, message: 'Verse not found' });
    res.json({ success: true, data: verse });
  } catch (error) {
    next(error);
  }
};

export const deleteVerse = async (req, res, next) => {
  try {
    await verseService.softDeleteVerse(req.userId, req.params.id);
    res.json({ success: true, message: 'Verse deleted' });
  } catch (error) {
    next(error);
  }
};