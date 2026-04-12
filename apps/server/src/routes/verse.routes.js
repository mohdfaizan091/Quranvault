import express from 'express';
import protect from '../middleware/auth.js';
import {
  saveVerse,
  getVerses,
  getVerseById,
  updateVerse,
  deleteVerse
} from '../controllers/verse.controller.js';

const router = express.Router();

router.use(protect);

router.post('/', saveVerse);
router.get('/', getVerses);
router.get('/:id', getVerseById);
router.put('/:id', updateVerse);
router.delete('/:id', deleteVerse);

export default router;