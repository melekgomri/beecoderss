const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Charger les routes des cours
const courseRoutes = require('./routes/courseRoutes');

// Initialisation de l'application Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads')); // Servir les fichiers d'images

// Routes
app.use('/api', courseRoutes);

// Connexion à MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/coursesdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Port d'écoute
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
