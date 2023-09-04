const mongoose = require('mongoose');

async function dbConnect() {
  await mongoose.connect(process.env.MONGO_URI);
}
dbConnect().then(res => console.log('Connected with mongodb')).catch(err => console.log(err));