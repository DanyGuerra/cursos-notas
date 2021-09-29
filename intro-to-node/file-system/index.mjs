import {readFile, writeFile} from 'fs/promises' //importando file systme
import path from 'path'

let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')

// console.log(template.toString())

const data = {
  title: 'Aprendiendo Node.js',
  body: 'Este es el body del HTML modificado otra vez'
}

for (const [key, val] of Object.entries(data)) {
  template = template.replace(`{${key}}`, val);
}

// console.log(template) //Imprimiendo el template con los valores sustituidos

await writeFile(new URL('./index.html', import.meta.url), template) //Guardando el nuevo html modificado con el nombre index.html