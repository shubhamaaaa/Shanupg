import express from 'express'
import { addProduct, listProducts, removeProducts, singleProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';


const productRoute=express.Router();
productRoute.post('/add',upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1},{name:'image5',maxCount:1}]),addProduct)
productRoute.get('/list',listProducts)
productRoute.post('/remove',removeProducts)
productRoute.post('/single',singleProduct)

export default productRoute