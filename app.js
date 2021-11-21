const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const admin = require('./routers/admin');
//Configurações
   //body-parser
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
  
//arquivos estáticos 
app.use(express.static("/public"));
   //handlebars
   app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}));
   app.set('view engine', handlebars);

   //Rotas
  app.use('/admin',admin);
  app.use((req,res,next)=>{
    console.log("Oie, eu sou o middlware!");
    next();
   });

   app.get('/',(req,res)=>{
    res.send("olá!");  
});

  /*// erro 404
app.use((req, res, next)=> {
    res.status(404).send("Caminho inválido!");
});*/
//Outros.
const PORT = 8081;
app.listen(PORT,()=>{
    console.log("Server Running");
})