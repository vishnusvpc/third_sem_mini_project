import Booking from '../models/Booking.js'

// create new boking
export const createBooking = async(req,res)=>{
    const newBooking = new Booking(req.body)
    try{
        const savedBooking = await newBooking.save()

        res.status(200).json({success:true,message:"tour is booked",data:savedBooking})
    }catch(err){
        res.status(500).json({success:true,message:"server issue occured"})
    }
}

//  get single booking
export const getAllBooking = async(req,res)=>{

    try{
        const books = await Booking.find(id)
        res.status(200).json({success:true,message:"successfull",data:books})
    }catch(err){
        res.status(500).json({success:true,message:"internal server error"})
    }
}