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

```

Return type: `JSON`

```json
{
  "code": 200,
  "url": "https://vince-api.vercel.app/pictures/common/IMG_0735.jpg"
}
```

## Get local IP from LAN

- url: `https://vince-api.vercel.app/whoami`
- method: GET
- Parameters: `nothing`

Return type: `JSON`

```json
{
  "ip": "169.254.100.6"
}
```
