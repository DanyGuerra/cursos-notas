# Moongose

## Conectandose a la base de datos

`mongodb` es el protocolo de comunicacion, `27017` es el puerto por default que busca mongo (es preferible usar este puerto).

```javascript
const mongoose = require('mongoose')

const connect = ()=>{
  return mongoose.connect('mongodb://localhost:27017/nameDatabase')
}
```

