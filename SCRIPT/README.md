```
[MITM]
hostname = mp.weixin.qq.com, api.zhihu.com, api.weibo.cn
...

[Script]
http-response ^https://mp\.weixin\.qq\.com/ script-path=https://raw.githubusercontent.com/metowolf/Surge/master/SCRIPT/wechat.js
http-response ^https://api\.zhihu\.com/ script-path=https://raw.githubusercontent.com/metowolf/Surge/master/SCRIPT/zhihu.js
http-response ^https://api\.weibo\.cn/ script-path=https://raw.githubusercontent.com/metowolf/Surge/master/SCRIPT/weibo.js
```
