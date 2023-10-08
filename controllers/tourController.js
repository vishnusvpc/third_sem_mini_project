import Tour from '../models/Tour.js'

// Inserting new tour details..

export const createTour = async(req, res) =>
{
    const newTour = new Tour(req.body)

    try 
    {
        const savedTour = await newTour.save()    
        res.status(200).json({success: true, message: "Successfully created", data: savedTour})
    } 
    catch (error) 
    {
        res.status(500).json({success: false, message: "Something went wrong......"})
    }
}

// update tour details using id....

export const updateTour = async(req, res) =>
{
    const id = req.params.id

    try 
    {
        const updatedTour = await Tour.findByIdAndUpdate(id, 
        {
            $set: req.body
        }, {new: true})

        res.status(200).json({success: true, message: "Successfully updated....", data: updatedTour})        
    } 
    catch (error) 
    {
        res.status(500).json({success: false, message: "Updation Failed!!!!!"})
    }
}

// Delete tour record using id....

export const deleteTour = async(req, res) =>
{
    const id = req.params.id

    try 
    {
        await Tour.findByIdAndDelete(id)
        res.status(200).json({success: true, message: "Successfully deleted...."})        
    } 
    catch (error) 
    {
        res.status(500).json({success: false, message: "Failed to delete!!!!!"})
    }
}

// Get a single tour details using id....

export const getSingleTour = async(req, res) =>
{
    const id = req.params.id

    try 
    {
        const singleTourDetails = await Tour.findById(id).populate('reviews')
        res.status(200).json({success: true, message: "Retrived Data....", data: singleTourDetails})
    } 
    catch (error) 
    {
        res.status(500).json({success: false, message: "Data Retriveal failed....", data: singleTourDetails})
    }
}

// Get all tour details....

export const getAllTour = async(req, res) =>
{
    const page = parseInt(req.query.page)

    console.log(page)
    try 
    {
        const tours = await Tour.find({}).populate('reviews')
        .skip(page * 8).limit(8);
        res.status(200).json({success: true, count: tours.length, message: "Retrived Data....", data: tours})
    } 
    catch (error) 
    {
        res.status(500).json({success: false, message: "Failed to retrieve data...."})
    }
}

// Get tour by search....

export const getTourBySearch = async(req, res) =>
{
    const city = new RegExp(req.query.city,'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try{
        const tours = await Tour.find({city , distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize} }).populate("reviews");

        res.status(200).json({
            success:true,
            count : tours.length,
            message : "Successfull",
            data : tours,
        });
    }catch(err){
        res.status(404).json({
            success:false,
            messgae:"not found",
        })

    }
}
// get featured tour
export const getFeaturedTour = async(req,res) =>{
    try{
        const tours = await Tour.find({featured:true}).populate("reviews").limit(8);
        res.status(200).json({
            success:true,
            message:"successfull",
            data:tours,
        });
    }catch(err){
        res.status(404).json({
            success:false,
            message:"not found",
        });
    }
}

// get tour count
export const getTourCount = async(req,res) =>{
    try{
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({success:true,data:tourCount});
    }catch(err){
        res.status(500).json({success:false,message:"failed fetch"})
    }
}
