import Tour from '../models/Tour.js'

// Creating new tour..

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

// update tour....

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

// Delete tour....

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

// Get single tour....

export const getSingleTour = async(req, res) =>
{
    try 
    {
        
    } 
    catch (error) 
    {
        
    }
}

// Get all tour....

export const getAllTour = async(req, res) =>
{
    try 
    {
        
    } 
    catch (error) 
    {
        
    }
}