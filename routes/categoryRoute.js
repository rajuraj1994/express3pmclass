const express=require('express')
const { requireSignin } = require('../controllers/authController')
const { helloFunction, postCategory, showCategoryList, categoryDetails, updateCategory, deleteCategory } = require('../controllers/categoryController')
const router=express.Router()

router.get('/test',helloFunction)
router.post('/postcategory',requireSignin,postCategory)
router.get('/categorylist',showCategoryList)
router.get('/categorydetails/:id',categoryDetails)
router.put('/updatecategory/:id',requireSignin,updateCategory)
router.delete('/deletecategory/:id',requireSignin,deleteCategory)


module.exports=router