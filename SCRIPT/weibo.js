let result = body

// 微博时间线广告
if (url.includes('groups/timeline') || url.includes('friends_timeline') || url.includes('hot_timeline')) {
  let json = JSON.parse(body)
  if (json.ad && json.ad.length) {
    let ads = json.ad.map(x => parseInt(x.id))
    json.statuses = json.statuses.filter(x => !ads.includes(x.id))
    result = JSON.stringify(json)
  }
}
// 微博创作者广告共享计划
else if (url.includes('/2/statuses/extend')) {
  let json = JSON.parse(body)
  delete json.trend
  result = JSON.stringify(json)
}
// 微博首页 我的故事
else if (url.includes('/2/stories/home_list')) {
  let json = JSON.parse(body)
  json.story_list = []
  result = JSON.stringify(json)
}
// 微博评论区广告与相关推荐
else if (url.includes('/2/comments/build_comments')) {
  let json = JSON.parse(body)
  json.datas = json.datas.filter(x => !x.adType)
  result = JSON.stringify(json)
}

result
