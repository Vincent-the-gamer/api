---
layout: doc
title: "Webfonts 在线字体"
lastUpdated: true
---

<script lang="ts" setup>
import { useData } from 'vitepress'
import { createSnackbar } from '@snackbar/core'

const { isDark } = useData()

enum FontType {
    Regular = "Regular",
    Bold = "Bold",
    Italic = "Italic",
    BoldItalic = "Bold Italic"
}

const fontsInfo = [
    {
        name: "Input Mono",
        files: [
            {
                weight: FontType.Regular,
                link: "https://vince-api.vercel.app/fonts/input-mono/InputMono-Regular.ttf",
            },
            {
                weight: FontType.Bold,
                link: "https://vince-api.vercel.app/fonts/input-mono/InputMono-Bold.ttf",
            },
            {
                weight: FontType.Italic,
                link: "https://vince-api.vercel.app/fonts/input-mono/InputMono-Italic.ttf",
            },
            {
                weight: FontType.BoldItalic,
                link: "https://vince-api.vercel.app/fonts/input-mono/InputMono-BoldItalic.ttf",
            }
        ]
    }
]

async function copy(text: string) {
    await navigator.clipboard.writeText(text)
    createSnackbar("字体链接已复制到剪贴板！", {
        theme: isDark.value ? "dark" : "light",
        position: "right",
        timeout: 3000,
    })
}
</script>

# Webfonts在线字体支持

该API提供**在线字体**，可`引用`可`下载`。

## 引用

举个例子，目前API中提供了`Input Mono`字体：

> [!IMPORTANT] 重要
> CSS声明`同名字体(font-family要相同)`，`不同粗细(font-weight)`，可以实现通过font-weight参数来引入不同粗细的字体

```css
@font-face {
    font-family: "Input Mono";
    src: url("https://vince-api.vercel.app/fonts/input-mono/InputMono-Regular.ttf");
    font-style: normal;
    font-weight: 300;
}
@font-face {
    font-family: "Input Mono";
    src: url("https://vince-api.vercel.app/fonts/input-mono/InputMono-Bold.ttf");
    font-style: normal;
    font-weight: 400;
}
```

## 下载

在浏览器中直接访问字体即可下载：

https://vince-api.vercel.app/fonts/input-mono/InputMono-Regular.ttf

## 目前拥有的字体

<table>
    <thead>
        <tr>
            <td>字体名</td>
            <td>粗细</td>
            <td>链接(点击复制)</td>
        </tr>
    </thead>
    <tbody>
        <template v-for="font of fontsInfo" key="font.name">
            <tr>
                <td :rowspan="font.files.length">{{ font.name }}</td>
                <td>{{ font.files[0].weight }}</td>
                <td @click="copy(font.files[0].link)" color-blue underline hover:color-violet cursor-pointer >
                    {{ font.files[0].link }}
                </td>
            </tr>
            <tr v-for="file of font.files.slice(1, font.files.length)">
                <td>{{ file.weight }}</td>
                <td @click="copy(file.link)" color-blue underline hover:color-violet cursor-pointer >
                    {{ file.link }}
                </td>
            </tr>
        </template>
    </tbody>
</table>
