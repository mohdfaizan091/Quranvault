import express from 'express';
import protect from '../middleware/auth.js';
import validate from '../middleware/validate.js';
import { saveVerseSchema, updateVerseSchema } from '../validators/verse.validator.js';
import {
  saveVerse,
  getVerses,
  getVerseById,
  updateVerse,
  deleteVerse
} from '../controllers/verse.controller.js';

const router = express.Router();

router.use(protect);

router.post('/', validate(saveVerseSchema), saveVerse);
router.get('/', getVerses);
router.get('/:id', getVerseById);
router.put('/:id', validate(updateVerseSchema), updateVerse);
router.delete('/:id', deleteVerse);

export default router;