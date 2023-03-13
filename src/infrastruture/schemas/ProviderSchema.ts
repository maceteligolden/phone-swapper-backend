import mongoose, { Schema } from 'mongoose';

const providerschema: Schema = new Schema({
    name: {
        type: String,
        default: 0,
    },
  created_at: {
    type: Date,
    default: function () {
      return Date.now();
    },
  },
  updated_at: {
    type: Date,
    default: function () {
      return Date.now();
    },
  },
});

export default mongoose.model('Provider',providerschema);
