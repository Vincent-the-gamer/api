---
layout: doc
title: "APIs"
lastUpdated: true
---

# APIs

## Get random Kaomoji

- URL: `https://vince-api.vercel.app/`
- Method: `GET`
- Parameters: `nothing`

Return type: `JSON`

```json
{
  "code": 200,
  "kaomoji": "(｡T ω T｡)"
}
```

## Get random anime girl picture

- URL: `https://vince-api.vercel.app/meizi`
- Method: `GET`
- Parameters:

```
- Name："type"
  Options：
    "common" - Mixed types
    "ayachi_nene" - 綾地寧々
    "mitsukasa_ayase" - 三司あやせ
    "murasame" - ムラサメ
    "tomotake_yoshino" - 朝武芳乃
    "sakimichan" - Drawings of Sakimichan
```

Return type: `JSON`

```json
{
  "code": 200,
  "URL": "https://vince-api.vercel.app/pictures/common/IMG_0735.jpg"
}
```

## Online code runner

- URL: `https://vince-api.vercel.app/codeRunner`
- Method: `GET`
- Parameters:
  | key | value | note |
  | - | - | - |
  | lang | `javascript`，`typescript`, `python`, `java`, `cpp`, `c`, `rust` | |
  | code | <your_code> | |
  | type | `remote`, null | If environment is not `Vercel`, you can choose `remote runner` in **dev** or **prod** env. (local runner by default.)  |

Return type: `JSON`

```json
// lang=python&code=print("hello")
{
  "stdout": "hello\n",
  "stderr": ""
}
```

## YouTube/Bilibili direct link parser

> [!IMPORTANT]
> Powered by [fast-dirpy](https://github.com/Vincent-the-gamer/fast-dirpy).

- URL: `https://vince-api.vercel.app/directLink`
- Method: `POST`
- Request Body:

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

Return type: `JSON`

```json
{
  "code": 200,
  "directLink": "<direct_link>"
}
```

## HTTP Cat

Input HTTP status code, then get a cat picture.

- URL: `https://vince-api.vercel.app/httpcat/[status_code]`
- Method: `GET`

Return type: `JSON`

Example: **https://vince-api.vercel.app/httpcat/404**

```json
{
  "code": 200,
  "img": "https://vince-api.vercel.app/httpcat/404.jpg"
}
```

![404](/imgs/404.jpeg)

## 「Remake」 your life

> [!CAUTION] Notice
> This is a meme api, it's return message is in Chinese.

- URL: `https://vince-api.vercel.app/remake`
- Method: `GET`
- Parameters: None

Return Type: `JSON`

```json
{
  "code": 200,
  "message": "重开成功！你出生在芬兰的市区, 是小南梁！"
}
```
