const { getData } = require("../utils/getData");

const data = getData();
exports.controlId = (req,res,next) => {
    //id'si bilinen tarifi bul
   const recipe =  data.find((i)=>i.id === req.params.id);

   //tarif dizide bulunamazsa hata gönder
    if(!recipe) {
        return res.status(404).json({message:"Aradığınız ID li eleman bulunamadı"});
    }
    //Tarif bilgilerinin middleware den bir sonraki adımda erişilebilir olması için req in içerisinde veriyi ekle
    req.recipe=recipe;
    //hata bulunursa bir sonraki adıma geç
    next()
}