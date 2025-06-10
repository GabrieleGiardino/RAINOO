const express = require('express');
const router = express.Router();

const upload = require('../middlewares/multer'); // middleware per l’upload
const authMiddleware = require('../middlewares/authMiddleware');
const { uploadAvatar } = require('../controllers/authController'); // attenzione: qui prendiamo da authController!

// Rotta POST /api/users/:id/avatar → protetta da authMiddleware + multer
router.post('/:id/avatar', authMiddleware, upload.single('avatar'), uploadAvatar);

module.exports = router;
