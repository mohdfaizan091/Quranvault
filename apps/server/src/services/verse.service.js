import Verse from '../models/verse.model.js';

export const createVerse = (userId, data) =>
  Verse.create({ ...data, userId });

export const findVerses = (userId, filters = {}) =>
  Verse.find({ userId, isDeleted: false, ...filters }).sort({ createdAt: -1 });

export const findVerseById = (userId, id) =>
  Verse.findOne({ _id: id, userId, isDeleted: false });

export const updateVerseById = (userId, id, data) =>
  Verse.findOneAndUpdate({ _id: id, userId }, data, { new: true });

export const softDeleteVerse = (userId, id) =>
  Verse.findOneAndUpdate({ _id: id, userId }, { isDeleted: true });