const mongoose = require('mongoose')

const connect = ()=>{
  return mongoose.connect('mongodb://localhost:27017/nameDatabase')
}

const student = new mongoose.Schema({
  fisrtName: {
    type: String,
    required: true, //validation
    unique: true //index
  },
  favFoods: [{
    type: String
  }],
  info: {
    type: String,
  },
  shoeSize: {
    type: Number
  }
}, {timestamps: true})

const Student = mongoose.model('student', student);

connect()
  .then(async conection =>{
    const student = await Student.create({fisrtName: 'Pedro'})

    // Student.find({fisrtName: 'Dani'})
    // Student.findById('idABuscar')
    // Student.findById('idABuscar')

    console.log(student)
  })
  .catch(e=> console.error(e))