---
layout: doc
title: "API"
lastUpdated: true
---

# API

## 获取随机颜文字

- url: `https://vince-api.vercel.app/`
- method: `GET`
- 参数: `无`

返回值：JSON

```json
{
  "code": 200,
  "kaomoji": "(｡T ω T｡)"
}
```

## 获取随机妹子图片

- url: `https://vince-api.vercel.app/meizi`
- method: GET
- 参数:

```
- 参数名称："type"
  可选值：
    "common" - 杂图
    "ayachi_nene" - 绫地宁宁
    "mitsukasa_ayase" - 三司绫濑
    "murasame" - 丛雨
    "tomotake_yoshino" - 朝武芳乃

```

返回值类型：`JSON`

```json
{
  "code": 200,
  "url": "https://vince-api.vercel.app/pictures/common/IMG_0735.jpg"
}
```

## 获取当前设备在局域网内的IP

- url: `https://vince-api.vercel.app/whoami`
- method: GET
- 参数: 无

返回值类型：`JSON`

```json
{
  "ip": "169.254.100.6"
}
```
