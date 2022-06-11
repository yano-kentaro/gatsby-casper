---
layout: post
title: エンジニア転職を成功させるために工夫すべきこと3選
image: ../../img/my-job-change.png
author: [Ken]
date: 2022-03-08
excerpt: 私がエンジニア転職を行う際、どのようなことを考え、実践したのかを3点にまとめて紹介します。
tags:
  - Job Change
  - Tech Camp
  - portfolio
draft: false
---
---

どうも、WEB系エンジニアのKenです。

今回の記事では、私がエンジニア転職の際にどのようなことを考えていたのか、
そしてどのような工夫をして理想的な職場への転職に成功したのかについて書きます。

---

## この記事の要点

- ポートフォリオを完成させて満足してはいけない。
- 感謝の気持ちを言葉で伝えると、思いもよらない形で自分に返ってくる。
- 一次面接時に具体的な仕事内容を質問するべき。

---

## 前書きと、簡単な経歴紹介

私は1995年に生まれ、記事執筆時点で26歳です。
大学は文系の学部出身で、卒業後はメーカーの営業職に1年半勤務していました。
結婚のことを考えるようになり、場所を選ばない働き方をする必要性に迫られるまで、
プログラミングのことは何一つ知らずに生きてきました。

正直なところ、出発点としては
- どこでも働ける
- それなりに収入がある
この2つを満たせるなら別に何の仕事でもいいかな…くらいの気持ちでエンジニアを目指し始めました。
「プログラミングをすること」に何か拘りがあったわけでも、
「エンジニアになること」に夢や希望を抱いていた訳でもありません。

しかし、テックキャンプというプログラミングスクールに通い始め、
プログラミングの学習を進めて行く内にどんどんのめり込んでいくようになり、
今では平日の出社前・退社後、土日祝日…全ての時間を技術の習得や情報収集に当てる毎日を送っています。

この記事を読んでいるあなたがそんな生活を望んでいるかは分かりませんが、
私の経験が誰かの役に立てれば幸いです。

---

## 到達すべきポートフォリオのレベル

今回の記事は大部分が「心構え」の話になりますが、
本題に入る前に技術的な話題を済ませてしまいたいと思います。

というのも、当たり前のことではありますが、
エンジニアは技術職なので、技術とは切っても切れない関係にあります。

ここでは、初学者が取り組んでいると思わず関心してしまうようなポイントをまとめてみます。

### 変数・関数の命名は適切か

私はプログラミングを学び始めた時、<mark>名前の重要性がまるで分かっていませんでした。</mark>
「とにかく思い通りに動かしたい」という気持ちが先走り、
「str」「num」「dum」のような変数をいくつ作ったか分かりません。

断言しますが、いい加減に命名した変数名や関数名は、後々保守をする際に必ず牙を剥きます。
これは他人が書いたコードだけでなく、自分が書いた筈のコードでも同じです。
実務で毎日コードを書く立場になると、この重要性を嫌という程実感することになります。

命名する際は、「一目でどんな役割を持つのか想像がつく」ような名前にすることを心掛けましょう。
その癖が初学者の内から付いていることは、<mark>本当に素晴らしいこと</mark>なので、これは十分にアピールポイントになると考えています。

もし適切な名前が思い浮かばない時は、「codic」というサービスに名前を決めてもらいましょう。
おそらく、多くのエンジニアがこのサービスにお世話になっていることだと思います。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://codic.jp/engine" data-iframely-url="//iframely.net/NOYjBgn"></a></div></div><script async src="//iframely.net/embed.js" charset="utf-8"></script>

<br>

### モダンフロントの技術を採用しているか

ここでの「モダンフロントの技術」とは、
- React
- Svelte
- Vue
などのJavaScriptフレームワークを利用した、
- SPA(CSR)
- SSR
- SSG(ISR)
等の技術を想定しています。
無難なところで言うと、「フロントはVueで部分的にSPA化し、バックエンドは
何かしらの言語のフレームワークをAPIサーバーとして立てているWEBアプリ」かなと考えています。

ここは意見が分かれるところかもしれませんが、個人的にはここまで学習しているかどうかで、
内定を貰える企業の幅が完全に異なってくるという意見を持っています。

それは、モダンフロントの技術を使ったポートフォリオを完成させていることは、
- 少なくとも、入門的な内容は理解出来ている証明になる
- 最近の流行を調べていることから、自走力がありそうな印象を受ける
- ここまでやれている人は意外と多くないので、差別化になる
- WEBアプリのUI/UXが良い感じになる
ことに繋がるからです。

そのため、サーバーサイドの学習を終えた後はそこで満足せず、
JavaScriptとそのフレームワークの学習をすることをオススメします。

### インフラ環境構築の技術をおさえているか

これは「努力目標」になってくるかと思いますが、
インフラ方面まで学習が進んでいる人は入社後即戦力になりやすいので、凄まじい程に好印象です。

インフラ技術の中でも学習の優先順位をつけるとすれば、個人的には以下の順番になるかなと思います。
1. Dockerを利用した開発環境構築
2. 各種AWSのサービスを利用したテスト・本番環境構築
3. CircleCIやGitHub Actions等を利用したCI/CDパイプライン構築
これらの技術は、使いこなせるかどうかで開発の速度がかなり変わってきます。
正直、入社後に独学で勉強しても遅くは無いような気もしていますが、
先に学習しておくと効率よくポートフォリオを開発することが出来ますし、
何より面接時にとても強いアピールになります。

---

さて、前置きが長くなりましたが、そろそろ本題に入ります。

ここからは、他のエンジニア転職志望者と差別化を図るために有効な工夫を3つ紹介致します。

---

## 1. ポートフォリオ解説スライドを用意しよう

そもそもポートフォリオを開発することの意味は、

- 技術力
- 発想力
- 着眼点
- 情報収集能力
- 情報処理能力
- 課題突破力
- 継続力

など、<mark>「自分はこんなことが出来る人間なんです！この力は必ず御社の役に立ちますので、ぜひ雇って下さい！！」</mark>
といったメッセージに、具体性を持たせることにあります。

それなのに「あぷりつくっといたから見といてね(ﾊﾅﾎｼﾞ」くらいのいい加減さで、
履歴書にURLを記載して終わりの人は本当に勿体無いです。

それだと、見る人間が気が付いた点しかアピールになりませんし、何より…

<mark>「この仕事終わったので、確認お願いします。」と、
どんな内容の仕事をして、どこを確認して欲しいのか、
何も言わずにぶん投げてくる人とは、正直一緒に仕事を出来る気がしません…。</mark>

そのため、「確認して欲しい箇所を明示する」ための工夫があると、様々な面から好印象です。

### スライドに記載したい内容

応募者から聞きたいことに優先順位をつけるなら、

1. ポートフォリオを開発する上でどのような困難に直面し、それをどのように乗り越えたか
2. 誰の、どのような課題を解決したくて開発したWEBアプリか
3. プログラミング学習へのモチベーションはどこから来ているか

だというのが私の意見です。

そのため、スライドには下記のような内容が書かれていると、
応募者がどんな人か想像を膨らませながら読めると考えています。

- この機能を実装するために調べたこと
- 参考にした類似サービス







