# Moongose

## Conectandose a la base de datos

`mongodb` es el protocolo de comunicacion, `27017` es el puerto por default que busca mongo (es preferible usar este puerto).

```javascript
const mongoose = require('mongoose')

const connect = ()=>{
  return mongoose.connect('mongodb://localhost:27017/nameDatabase')
}
```

Para correr mongo localmente en Windows es necesario tener instalado [Mongo Community Server (Download Windows)](https://www.mongodb.com/try/download/community)

Una vez que se descarga y se instala abrimos el archivo `mongo.exe` que se encuentra en la siguiente ruta `C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe` con esto el servidor local estara escuchando en el puerto `27017`.

Podemos abrir en MongoDBCompass para ver las bases de datos creando una nueva conexion con `mongodb://127.0.0.1:27017/`.

## Creando modelos y esquemas
El nombre del modelo va en mayuscula.


```javascript
//esquema
const student = new mongoose.Schema({
  fisrtName: String
})

const Student = mongoose.model('student', student); //mongoose.model('nombre de la colleccion', esquema que se usara)
```
## Creando un documento de MongoDB

```javascript
connect()
.then(async conection =>{
  const student = await Student.create({
    fisrtName: 'Dani'
  })
  console.log(student)
})
.catch(e=> console.error(e))
```

### Resultado

```javascript
{
  fisrtName: 'Dani',
  _id: new ObjectId("61561244730acd2a939bf90d"), //id unico que genera mongo
  __v: 0 //Version del schema en este caso es la version 0
}
```

## Mongoose Schemas
Agregando mas informacion al esquema

```javascript
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
}, {timestamps: true}) //timestamp agrega marcas de tiempo (cuando se crea y se actualiza un documento de Mongo)
```