// server/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['customer', 'staff', 'manager'], default: 'customer' },
  membership: { type: String, default: 'trial' } // Ensure the default value is se
});

UserSchema.pre('save', async function (next) {
    try {
      if (this.isModified('password') || this.isNew) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
      }
      next();
    } catch (error) {
      next(error);
    }
});
  

module.exports = mongoose.model('User', UserSchema);
