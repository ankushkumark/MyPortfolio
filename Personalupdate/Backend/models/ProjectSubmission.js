const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    projectName: String,
    technology: String,
    message: String,
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ProjectSubmission', submissionSchema);
