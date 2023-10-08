import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bookingId: {
      
      type:String
    },
    userEmail: {
      type: String,
      
    },
    fullName: {
      type: String,
      required: true,
    },
    tourName:{
        type:String,
        required:true
    },
    guestSize: {
      type: Number,
      required:true
    },
    phoneNumber: {
        type: Number,
        required:true
      },
      bookAt: {
        type: Number,
        // required:true
      },
  },
  { timestamps: true }
);

export default mongoose.model("booking", bookingSchema);
