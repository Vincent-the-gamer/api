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
  | 参数名称 | 值 | 备注 |
  | - | - | - |
  | lang | `javascript`，`typescript`, `python`, `java`, `cpp`, `c`, `rust` | |
  | code | <你的代码> | |
  | type | `remote`, null | 如果不是在`Vercel`部署, 你可以在 **dev** 或 **prod** 环境中手动指定`远程代码运行器`（默认会使用本地运行器）  |

返回值类型：`JSON`

```json
// lang=python&code=print("hello")
{
  "stdout": "hello\n",
  "stderr": ""
}
```

## YouTube/Bilibili直链解析

> [!IMPORTANT]
> 由[fast-dirpy](https://github.com/Vincent-the-gamer/fast-dirpy)赋能。

- URL: `https://vince-api.vercel.app/directLink`
- Method: `POST`
- 请求体:

```json
// "source": [
//    "bilibili",
//    "youtube",
// ]
{
  "rawLink": "https://www.youtube.com/watch?v=SAXpBgkXt60",
  "source": "youtube"
}
```

返回类型: `JSON`

```json
{
  "code": 200,
  "directLink": "<direct_link>"
}
```

## HTTP猫图

输入http状态码，获取对应的猫图。

- URL: `https://vince-api.vercel.app/httpcat/[status_code]`
- Method: `GET`

返回类型: `JSON`

示例：**https://vince-api.vercel.app/httpcat/404**

```json
{
  "code": 200,
  "img": "https://vince-api.vercel.app/httpcat/404.jpg"
}
```

![404](/imgs/404.jpeg)

## 重开你的人生

- URL: `https://vince-api.vercel.app/remake`
- Method: `GET`
- 参数: 无

返回类型: `JSON`

```json
{
  "code": 200,
  "message": "重开成功！你出生在芬兰的市区, 是小南梁！"
}
```
