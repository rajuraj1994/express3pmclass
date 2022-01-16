const express=require('express')
const { requireSignin } = require('../controllers/authController')
const { postProduct, productList, productDetails, updateProduct, deleteProduct, listRelated, listBySearch } = require('../controllers/productController')
const router=express.Router()
const upload=require('../middleware/file-upload')
const { productValidation } = require('../validation')


router.post('/postproduct',requireSignin,upload.single('product_image'),productValidation, postProduct)
router.get('/productlist',productList)
router.get('/productdetails/:id',productDetails)
router.put('/updateproduct/:id',requireSignin,updateProduct)
router.delete('/deleteproduct/:id',requireSignin,deleteProduct)
router.get('/product/related/:id',listRelated)
router.post('/products/by/search',listBySearch)

module.exports=router
