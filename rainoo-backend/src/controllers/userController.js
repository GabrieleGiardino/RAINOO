const User = require('../models/User');
const cloudinary = require('../config/Cloudinary');
const multer = require('multer');
const streamifier = require('streamifier');

const uploadAvatar = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!req.file) {
      return res.status(400).json({ message: 'Nessun file caricato.' });
    }

    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'rainoo_avatars' },
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const result = await streamUpload(req);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { avatar: result.secure_url },
      { new: true }
    ).select('-password');

    res.json({
      message: 'Avatar aggiornato con successo!',
      avatarUrl: result.secure_url,
      user: updatedUser,
    });
  } catch (error) {
    console.error('Errore upload avatar:', error);
    res.status(500).json({ message: 'Errore durante il caricamento avatar.' });
  }
};

module.exports = { uploadAvatar };
