import http from 'http'

const host = 'localhost'
const port = 8000

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = ''

    req.on('data', chunk => {
      body += chunk.toString()
    })

    req.on('close', () => {
      console.log(body)
    })

    req.on('end', () => {
      if (req.headers['content-type'] === 'application/json') {
        body = JSON.parse(body)
      }

      res.writeHead(201)
      res.end('ok')

    })
  } else {
    res.writeHead(200)
    res.end('Hello from my server')
  }

})

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})

