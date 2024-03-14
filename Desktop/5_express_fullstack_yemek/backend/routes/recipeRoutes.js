const express = require('express');
const { getRecipe, getAllRecipes, createRecipe, deleteRecipe } = require('../controllers/recipeController');
const {controlId}= require('../middleware');

//router > server.js dışarısında route tanımı yapmamıza olanak sağlar
const router = express.Router();

//oluşturduğumuz router ın yollarını ve çalışacak fonksiyonlarını tanımlama
router
.route("/api/recipes")
.get(getAllRecipes)
.post(createRecipe);

router
.route("/api/recipes/:id")
.get(controlId, getRecipe)
.delete(controlId, deleteRecipe)


//server da kullanmak için export et
module.exports=router;