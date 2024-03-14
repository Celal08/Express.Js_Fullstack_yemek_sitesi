const { getData } = require("../utils/getData");
const { setData } = require("../utils/setData");
const crypto = require('crypto');


//json dosyasından verileri alıyoruz
let data = getData();

exports.getAllRecipes = (req,res)=>{
    //tariflerin bir kopyasını oluşturuyoruz
    let recipes = [...data];
    //aratılan terime ulaş
    const searchTerm = req.query?.title?.trim()?.toLowerCase();

    //sıralama parametrelerine erişmek gerek
    const order = req.query.order;

    //eğer aratılan terim varsa filtrele
if(searchTerm){
    recipes = data.filter((recipe)=>recipe.recipeName.toLowerCase().includes
    (searchTerm));

  
}
    


//eğer sıralama varsa sırala
if(order){
    recipes.sort((a, b)=> order === "asc" 
    ? a.recipeTime - b.recipeTime
    : b.recipeTime - a.recipeTime
    );
}

//cevap gönder
res.status(200).json({
    message:"Tarifler başarı ile gönderildi",
    result:recipes.length,
    recipes:recipes,
})
}



exports.createRecipe = (req,res)=>{
    //1 isteğin body kısmıyla gelen veriye eriş
    const newRecipe= req.body;
    //2 gelen verinin bütün değerleri tanımlandı mı kontrol et
    if( !newRecipe.recipeName ||
        !newRecipe.recipeTime ||
        !newRecipe.category ||
        !newRecipe.ingredients || 
        !newRecipe.instructions||
        !newRecipe.image){
     return res.status(400).json({message:'Lütfen bütün değerleri tamamlayın'})
}
    //3 veriye Id ekle
    newRecipe.id = crypto.randomUUID();
    //4 yeni tarifi diziye ekle
    data.push(newRecipe);
    //5 yeni diziyi JSON dosyasına yaz
    setData(data);
    //6 Cevap gönder
    res.status(201).json({message: 'yeni bir tarif oluşturuldu', recipe:data});


}

exports.getRecipe = (req,res)=>{

    //id'si bilinen tarifi bul
   const recipe =  data.find((i)=>i.id ==req.params.id);

   //tarif dizide bulunamazsa
    if(!recipe) {
        return res.status(404).json({message:"Aradığınız ID li eleman bulunamadı"});
    }
    

    //cevap gönder
   res.status(200).json({
    message:"Aradığınız tarif bulundu",
    recipe: req.recipe,
   })
};
exports.deleteRecipe = (req,res)=>{
    //silinecek elemanın sırasını bul
    const index = data.findIndex((i)=> i.id == req.params.id)
    //id si bilinen elemanı diziden kaldır 
    data.splice(index,1);
    //json dosyasını güncelle
    setData(data);
    //cevap gönder
    res.status(204).json({message: 'Başarı ile silindi'});
};

