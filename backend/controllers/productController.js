import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js'



//Function for addProduct

const addProduct=async(req,res)=>{
    try {
        const {name,ShortDescription,description,price,category,subCategory}=req.body
        const image1=req.files.image1 && req.files.image1[0]
        const image2=req.files.image2 && req.files.image2[0]
        const image3=req.files.image3 && req.files.image3[0]
        const image4=req.files.image4 && req.files.image4[0]
        const image5=req.files.image5 && req.files.image5[0]

        const images=[image1,image2,image3,image4,image5].filter((item)=>item!==undefined)
        const imageUrl=await Promise.all(
            images.map(async(item)=>{
        let result=await cloudinary.uploader.upload(item.path,{resource_type:'image'})
        return result.secure_url
            })
        )

        const productData={
            name,
            ShortDescription,
            description,
            price,
            category,
            subCategory,
            image:imageUrl
        }
         console.log(productData)
        const product=new productModel(productData)
        await product.save()
        res.json({success:true,message:"Product Added"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

//Function for list Products
const listProducts=async(req,res)=>{
    try {
        const products=await productModel.find({})
        res.json({success:true,products})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//Function for Remove  Products
const removeProducts=async(req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Product Deleted"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message}) 
    }
}

//Function for Single Product Information
const singleProduct=async(req,res)=>{
    try {
        const {productId}=req.body
        const product=await productModel.findById(productId);
        res.json({success:true,product})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})  
    }
}

export {addProduct,listProducts,removeProducts,singleProduct}