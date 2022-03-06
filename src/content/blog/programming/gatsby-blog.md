---
layout: post
title: Reactの勉強も兼ねてSSG(Gatsby)でブログを立ててみた
image: ../../img/blog-images-1.png
author: [Ken]
date: 2022-03-02
excerpt: ReactのSSGフレームワーク「Gatsby」でビルドしたデータを、S3・CloudFrontで配信するJAMstackブログを立てる方法を解説
tags:
  - React
  - SSG
  - Gatsby
  - S3
  - CloudFront
draft: false
---
---

どうも、WEB系エンジニアのKenです。

今回はこのブログを構築した技術に関するお話をしようと思います。  

## この記事の要点

- SSGは「高速・堅牢・安価」の3拍子が揃っている
- ストレージサービスは現状AWSが良さそうだった
- HeadlessCMSだとホットリロードさせながら記事を書けなかった

## きっかけは、Reactの勉強

いきなり余談から入りますが、
