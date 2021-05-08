const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    require: [true, "please add some text"],
  },
  amount: {
    type: Number,
    require: [true, "please add some amount"],
  },
  createdAT: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transactions", TransactionSchema);
