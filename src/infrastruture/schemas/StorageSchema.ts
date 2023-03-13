import mongoose, { Schema } from 'mongoose';

const storageschema: Schema = new Schema({
    model: {
        type: Schema.Types.ObjectId,
        ref: 'Model',
        required: true,
    },
    size: {
        type: String,
        required: true,
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

export default mongoose.model('Storage_size',storageschema);
