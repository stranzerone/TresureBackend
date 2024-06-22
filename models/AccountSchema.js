import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({

  TransactionId:{type:String,required:true,unique:true},
 Remark:{type:String},

  Type:{
type:String,
enum:['DEBIT','CREDIT'],
require:true

},
  Amount:{type:Number,require:true},
  date: Date
},

);

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction



