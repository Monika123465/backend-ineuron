import { Collection } from "../models/collection.model";
import asyncHandler from "../service/asyncHandler";
import CustomError from "../utils/customError";

export const createCollection = asyncHandler(async (req, res) => {
    const { name } = req.body
    if (!name) {
        throw new CustomError("Collection name is required", 400)
    }
    const collection = await Collection.create({
        name
    })
    res.status(200).json({
        success: true,
        message: "collection was created successfully",
        collection
    })
})

export const updateCollection = asyncHandler(async (req, res) => {
    const { name } = req.body
    const { id: collectionId } = req.params
    if (!name) {
        throw new CustomError("collection name is required", 400)
    }
    let updatedCollection = await Collection.findbyIdAndUpdate(collectionId, {
        name
    }, {
        new: true,
        runValidators: true
    })
    if (!updatedCollection) {
        throw new CustomError("collection not found", 400)
    }
    res.status(200).json({
        success: true,
        message: "collection updated successfully",
        updatedCollection
    })
})

export const deleteColection = asyncHandler(async (req, res) => {
    const { id: collectionId } = req.params
    const collectionDelete = await Collection.findById(collectionId)
    if (!collectionDelete) {
        throw new CustomError("collection to be deleted,400")
    }
    await collectionDelete.remove()

    res.status(200).json({
        success: true,
        message: "collection deleted successfully"
    })

})

export const getAllCollection = asyncHandler(async (req, res) => {
    const collection = await Collection.find()
    if (!collection) {
        throw new CustomError("No collection found", 400)
    }
    res.status(200).json({
        success: true,
        collection
    })
})
