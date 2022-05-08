const http = require('http')
const fs = require('fs')
const url = require('url')
const etag = require('etag')

http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  if (pathname === '/') {
    const data = fs.readFileSync('./index.html')
    res.end(data)
  } else if (pathname === '/img/01.jpg') {
    const data = fs.readFileSync('./img/01.jpg')
    // 给定过期时间进行强制缓存缺点是如果服务器时间与浏览器事件不一致会导致不准确
    res.writeHead(200, {
      Expires: new Date('2025-4-30 12:19:57').toUTCString()
    })
    res.end(data)
  } else if (pathname === '/img/02.jpg') {
    const data = fs.readFileSync('./img/02.jpg')
    // 通过设置Cache-Control可以设置滑动时间进行强制缓存
    res.writeHead(200, {
      'Cache-Control': 'max-age=5' // 滑动时间，单位是秒
    })
    res.end(data)
  } else if (pathname === '/img/03.jpg') {
    const { mtime } = fs.statSync('./img/03.jpg')
    // 设置协商缓存通过浏览器端if-modified-since与last-modified是否相等并且设置'Cache-Control', 'no-cache'，
    // 缺点是如果知识修改文件名称没有修改内容也会重新获取资源，标识是s如果操作过快也会导致不准确。
    const ifModifiedSince = req.headers['if-modified-since']

    if (ifModifiedSince === mtime.toUTCString()) {
      // 缓存生效
      res.statusCode = 304
      res.end()
      return
    }

    const data = fs.readFileSync('./img/03.jpg')

    res.setHeader('last-modified', mtime.toUTCString())
    res.setHeader('Cache-Control', 'no-cache')
    res.end(data)
  } else if (pathname === '/img/04.jpg') {
    const data = fs.readFileSync('./img/04.jpg')
    //使用etag形式将资源打标签可以解决以上不足，但是强验证服务器开销会增加，若验证会导致不准确。
    const etagContent = etag(data)

    const ifNoneMatch = req.headers['if-none-match']

    if (ifNoneMatch === etagContent) {
      res.statusCode = 304
      res.end()
      return
    }

    res.setHeader('etag', etagContent)
    res.setHeader('Cache-Control', 'no-cache')
    res.end(data)
  } else {
    res.statusCode = 404
    res.end()
  }
}).listen(3000, () => {
  console.log('http://localhost:3000')
})
