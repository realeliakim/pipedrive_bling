import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    orderDay: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    personName: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Order', OrderSchema);
