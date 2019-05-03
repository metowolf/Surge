let result = body

// 知乎答案页广告
if (url.includes('/appview/api/v4/answers') && url.includes('recommendations')) {
  let json = JSON.parse(body)
  json.data = json.data.filter(x => x.type !== 'ad')
  result = JSON.stringify(json)
}
// 知乎启动页广告
else if (url.includes('launch?app=zhihu')) {
  let json = JSON.parse(body)
  json.launch_ads = []
  result = JSON.stringify(json)
}

result
