require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
console.log("🧪 MONGO_URL:", process.env.MONGO_URL);
// ✅ Routes
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes'); // ✅ Added this

const app = express();
const PORT = process.env.PORT || 5000; // Use environment port if deployed

// ✅ Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/signupDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Exit if DB fails
});

// ✅ Mount Routes
app.use('/api/users', userRoutes);
app.use('/api/project', projectRoutes); // ✅ This line handles /api/project/submit

// ✅ Root Route (optional)
app.get("/", (req, res) => {
    res.send("🎉 API is working! Use /api/users or /api/project");
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
