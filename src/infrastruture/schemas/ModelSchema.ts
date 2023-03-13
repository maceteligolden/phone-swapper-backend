import mongoose, { Schema } from 'mongoose';

const modelschema: Schema = new Schema({
    provider: {
        type: Schema.Types.ObjectId,
        ref: 'Provider',
        required: true,
    },
    model: {
        type: String,
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

export default mongoose.model('Model',modelschema);
