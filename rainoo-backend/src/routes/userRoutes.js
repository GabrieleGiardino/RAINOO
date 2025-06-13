const express = require('express');
const router = express.Router();

const upload = require('../middlewares/multer');
const authMiddleware = require('../middlewares/authMiddleware');
const {
  uploadAvatar,
  updateUser,
  getUserRentals
} = require('../controllers/authController'); 
router.post('/:id/avatar', authMiddleware, upload.single('avatar'), uploadAvatar);

router.put('/:id', authMiddleware, updateUser); 
router.get('/:id/rentals', authMiddleware, getUserRentals); 

module.exports = router;
