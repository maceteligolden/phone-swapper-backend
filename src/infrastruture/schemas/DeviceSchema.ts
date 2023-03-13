import mongoose, { Schema } from 'mongoose';

const deviceschema: Schema = new Schema({
  model: {
    type: Schema.Types.ObjectId,
    ref: 'Model',
    required: true,
    },
   provider: {
        type: Schema.Types.ObjectId,
        ref: 'Provider',
        required: true,
    },
    storage_size: {
        type: Schema.Types.ObjectId,
        ref: 'Storage_size',
        required: true,
    },
    price: {
        type: Number,
        default: 0,
    },
    swap_cost: {
        type: Number,
        default: 0,
    },
    vendor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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

export default mongoose.model('Device',deviceschema);
