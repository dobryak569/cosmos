const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    console.log('Next.js app is prepared')
    
    const server = createServer(async (req, res) => {
      try {
        console.log(`Incoming request: ${req.method} ${req.url}`)
        
        const parsedUrl = parse(req.url, true)
        await handle(req, res, parsedUrl)
      } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('internal server error')
      }
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://${hostname}:${port}`)
    })
  })
  .catch((err) => {
    console.error('Error occurred during Next.js app preparation:', err)
    process.exit(1)
  }) 