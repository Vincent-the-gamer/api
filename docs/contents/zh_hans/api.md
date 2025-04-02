---
layout: doc
title: "API"
lastUpdated: true
---

# API

## 获取随机颜文字

- URL: `https://vince-api.vercel.app/`
- Method: `GET`
- 参数: `无`

返回值：JSON

```json
{
  "code": 200,
  "kaomoji": "(｡T ω T｡)"
}
```

## 获取随机妹子图片

- URL: `https://vince-api.vercel.app/meizi`
- Method: `GET`
- 参数:

```
- 参数名称："type"
  可选值：
    "common" - 杂图
    "ayachi_nene" - 绫地宁宁
    "mitsukasa_ayase" - 三司绫濑
    "murasame" - 丛雨
    "tomotake_yoshino" - 朝武芳乃
    "sakimichan" - 画师Sakimichan的作品
```

返回值类型：`JSON`

```json
{
  "code": 200,
  "URL": "https://vince-api.vercel.app/pictures/common/IMG_0735.jpg"
}
```

## 在线运行代码

- URL: `https://vince-api.vercel.app/codeRunner`
- Method: `GET`
- 参数:
  | 名称 | 值 |
  | - | - |
  | lang | `javascript`，`typescript`, `python`, `java`, `cpp`, `c` |
  | code | <你的代码> |

返回值类型：`JSON`

```json
// lang=python&code=print("hello")
{
  "stdout": "hello\n",
  "stderr": ""
}
```


## YouTube直链解析

> [!IMPORTANT]
> 由[fast-dirpy](https://github.com/Vincent-the-gamer/fast-dirpy)赋能。

- URL: `https://vince-api.vercel.app/directLink`
- Method: `POST`
- 请求体:

```json
{
    "rawLink": "https://www.youtube.com/watch?v=SAXpBgkXt60"
}
```

返回类型: `JSON`

```json
{
    "code": 200,
    "directLink": "<direct_link>"
}
```