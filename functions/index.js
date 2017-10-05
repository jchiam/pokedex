const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({ origin: true });

const CLOUDINARY_NAME = functions.config().cloudinary.name;
const CLOUDINARY_KEY = functions.config().cloudinary.key.substring(1);
const CLOUDINARY_SECRET = functions.config().cloudinary.secret;

const CLOUDINARY_BASE_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}`;

const CLOUDINARY_AUTH = { username: CLOUDINARY_KEY, password: CLOUDINARY_SECRET };

exports.gridThumbnails = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    axios.get(
      `${CLOUDINARY_BASE_URL}/resources/image/upload/`,
      {
        auth: CLOUDINARY_AUTH,
        params: { prefix: 'pokemon/official' }
      }
    )
      .then(response => response.data)
      .then(data => res.status(200).send(data.resources));
  });
});
