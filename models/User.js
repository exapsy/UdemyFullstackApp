const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleID: String,
	credits: { type: Number, default: 0 },
	displayName: String
});

mongoose.model('users', userSchema);