const mongoose = require('mongoose');
// url de conexao -> mongodb://servidor:porta/nome do banco
// useNewUrlParser --> Para que o Moongoose use o novo sistema de Url
// useUnifiedTopology --> Mecanismo de monitoramento de Banco de Dados

function Conn(url, porta, banco){
    mongoose.connect(`mongodb+srv://dbUser:HylQnUFd51nZVTVb@cluster0.wmu9j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("MongoDB conectado");        
    }).catch((err)=>{
        console.error(err);
    });
}


module.exports = Conn;