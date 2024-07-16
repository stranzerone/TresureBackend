import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({

  TransactionId:{type:String,required:true,unique:true},
 Name:{type:String},

  Type:{
type:String,
enum:['DEBIT','CREDIT'],
require:true

},
  Amount:{type:Number,require:true},
 


Active:{
  type:Boolean,require:true,default:true
},
CardDate:{type:String,require:true}
}

);

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction



