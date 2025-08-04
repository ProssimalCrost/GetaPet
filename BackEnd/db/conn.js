const mongoose  = require('mongoose')

async function main() {
  try {
    await mongoose.connect('mongodb+srv://theylonsilva:Luck30154651@getapet.qx9xdnm.mongodb.net/?retryWrites=true&w=majority&appName=GetaPet');
    console.log('Conectado ao MongoDB com sucesso!');
   
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error);
  }
}

main();

module.exports = mongoose