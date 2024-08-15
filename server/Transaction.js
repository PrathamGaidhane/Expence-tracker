import { Schema,Types,model } from "mongoose";

const tractionSchema = new Schema({
    amount:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        default:"others"
    },
    type:{
        type:String,
        require:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
},{
    timestamps:true,
});

const Transaction = model("Transaction". transactionSchema);