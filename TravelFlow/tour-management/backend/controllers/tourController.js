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
        const singleTourDetails = await Tour.findById(id)
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
        const tours = await Tour.find({}).skip(page * 8).limit(8);
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
    
}