let result = body

// 微信公众号广告
if (url.includes('/mp/getappmsgad?f=')) {
  let json = JSON.parse(body)
  json.advertisement_info = []
  json.advertisement_num = 0
  result = JSON.stringify(json)
}

result
