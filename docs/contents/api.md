---
layout: doc
title: "APIs"
lastUpdated: true
---

# APIs

## Get random Kaomoji

- url: `https://vince-api.vercel.app/`
- method: GET
- parameters: `nothing`

Return type: `JSON`

```json
{
  "code": 200,
  "kaomoji": "(｡T ω T｡)"
}
```

## Get random anime girl picture

- url: `https://vince-api.vercel.app/meizi`
- method: `GET`
- parameters:

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
  "url": "https://vince-api.vercel.app/pictures/common/IMG_0735.jpg"
}
```

## Online code runner

- url: `https://vince-api.vercel.app/codeRunner`
- method: GET
- parameters:
  | key | value |
  | - | - |
  | lang | `javascript`，`typescript`, `python`, `java`, `cpp`, `c` |
  | code | <your_code> |

Return type: `JSON`

```json
// lang=python&code=print("hello")
{
  "stdout": "hello\n",
  "stderr": ""
}
```
