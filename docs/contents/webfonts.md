---
layout: doc
title: "Web fonts"
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
    createSnackbar("Font link is copied! ", {
        theme: isDark.value ? "dark" : "light",
        position: "right",
        timeout: 3000,
    })
}


</script>

# Webfonts

This API provides **Webfonts** for `reference` and `download`。

## Reference

For example, this api is currently providing `Input Mono` fonts:

> [!IMPORTANT]
> CSS `@font-face` can declare a series of fonts with `the same font-family` and `different font-weight`, this allows you to import any font in the series by giving a specific font-weight.

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

## Download

Directly open the link in the browser to download it：

https://vince-api.vercel.app/fonts/input-mono/InputMono-Regular.ttf

## Available fonts

<table>
    <thead>
        <tr>
            <td>Font Name</td>
            <td>Font Weight</td>
            <td>Link(Click to copy)</td>
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