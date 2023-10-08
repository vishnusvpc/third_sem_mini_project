import User from '../models/User.js'

// Inserting new tour details..

export const createUser = async(req, res) =>
{
    const newUser = new User(req.body)

    try 
    {
        const savedUser = await newUser.save()    
        res.status(200).json({success: true, message: "Successfully created", data: savedUser})
    } 
    catch (error) 
    {
        res.status(500).json({success: false, message: "Something went wrong......"})
    }
}

// update tour details using id....

export const updateUser = async(req, res) =>
{
    const id = req.params.id

    try 
    {
        const updatedUser = await User.findByIdAndUpdate(id, 
        {
            $set: req.body
        }, {new: true})

        res.status(200).json({success: true, message: "Successfully updated....", data: updatedUser})        
    } 
    catch (error) 
    {
        res.status(500).json({success: false, message: "Updation Failed!!!!!"})
    }
}

// Delete tour record using id....

export const deleteUser = async(req, res) =>
{
    const id = req.params.id

    try 
    {
        await User.findByIdAndDelete(id)
        res.status(200).json({success: true, message: "Successfully deleted...."})        
    } 
    catch (error) 
    {
        res.status(500).json({success: false, message: "Failed to delete!!!!!"})
    }
}

// Get a single tour details using id....

export const getSingleUser = async(req, res) =>
{
    const id = req.params.id

    try 
    {
        const user = await User.findById(id)
        res.status(200).json({success: true, message: "Retrived Data....", data: user})
    } 
    catch (error) 
    {
        res.status(500).json({success: false, message: "Data Retriveal failed....", data: singleUserDetails})
    }
}

// Get all tour details....

export const getAllUser = async(req, res) =>
{
    
    try 
    {
        const users = await User.find({});
        res.status(200).json({success: true, message: "Retrived Data....", data: users})
    } 
    catch (error) 
    {
        res.status(500).json({success: false, message: "Failed to retrieve data...."})
    }
}
