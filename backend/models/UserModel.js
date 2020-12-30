import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const orderSchema = mongoose.Schema({
  orderPicture: {
    type: String,
    required: true,
  },
  orderName: {
    type: String,
    required: true,
  },
});

const ordersSchema = mongoose.Schema(
  {
    orders: [orderSchema],
  },
  {
    timestamps: true,
  }
);

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    totalOrders: [ordersSchema],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
