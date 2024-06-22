import Transaction from "../models/AccountSchema.js"

const transactionIdGenrate =()=>{

const randomNUmber = Math.random(7)*1000000
const newNum = Math.floor(randomNUmber)
return newNum

}



export const newTransaction = async(req,res)=>{

try{
const data = req.body
    console.log(req.body)
    const transaction = new Transaction({TransactionId:transactionIdGenrate(),Amount:data.amount,Type:data.amountType,Remark:data.remark})

   await transaction.save()
   console.log(transaction)
res.status(201).json("Transaction Added successfully")

}catch(error){
    res.status(500).json(error)
}
    
}



export const getAllTransactions = async(req,res)=>{

    try{
    const data = req.body
        console.log(req.body)
        const AllTransactions = await Transaction.find({})
    
       
       console.log(AllTransactions)
    res.status(201).json(AllTransactions)
    
    }catch(error){
        res.status(500).json(error)
    }
        
    }


    export const deleteOne = async(req,res)=>{

        try{
        const {TransactionId}  =req.params
            console.log(TransactionId)
            const deletedTransaction = await Transaction.findOneAndDelete({TransactionId})
        
           
           console.log(deletedTransaction)
        res.status(201).json("Transaction Deleted")
        
        }catch(error){
            res.status(500).json(error)
        }
            
        }




        export const Balance = async (req, res) => {
            try {
              const creditTransactions = await Transaction.find({ Type: 'CREDIT' });
              const debitTransactions = await Transaction.find({ Type: 'DEBIT' });
          
              let totalCredit = 0;
              let totalDebit = 0;
          
              creditTransactions.forEach((transaction) => {
                totalCredit += transaction.Amount;
              });
          
              debitTransactions.forEach((transaction) => {
                totalDebit += transaction.Amount;
              });
          
              const currentBalance = totalCredit - totalDebit;
          
              console.log('Current Balance:', currentBalance);
              res.status(200).json({ balance: currentBalance });
            } catch (error) {
              res.status(500).json(error);
            }
          };
          