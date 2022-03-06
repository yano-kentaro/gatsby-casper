import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h3>コンセプト</h3>
                <br />
                <p>
                  当サイトは、以下のコンセプトの下に開発しております。
                </p>
                <ul>
                  <li>エンジニア転職を考えている方の判断材料となり得る情報を発信する</li>
                  <li>同じ課題に直面した人の助けとなるような技術的知見を発信する</li>
                </ul>
                <p>
                  私自身、元々はエンジニアとは全く縁もゆかりも無い仕事をしておりました。
                  そんな中でプログラミング学習の助けとなったのは、多くの技術記事や学習の体験記など、
                  「いつか誰かの役に立つこと」を信じて発信された情報でした。
                  まだまだ先人たちの情報を頼りに手探りで開発を行っている身ですが、
                  私も同じように誰かの役に立つ情報を発信したいという想いが、このブログの出発点です。
                </p>
                <br />
                <h3>主な記事のテーマ</h3>
                <br />
                <p>
                  具体的には、下記のテーマをメインに記事を執筆していきます。
                </p>
                <ul>
                  <li>面接の際に重要視していること</li>
                  <li>実務で獲得した技術的な知見</li>
                  <li>実装に工夫が必要だった機能</li>
                  <li>開発を行う上で便利なサービス</li>
                </ul>
                <br />
                <h3>ブログの技術構成</h3>
                <br />
                <p>
                  ブログはReactのSSGフレームワーク「Gatsby」を利用して開発しております。
                  <br />
                  ビルドした静的コンテンツはS3にデプロイし、CloudFrontから配信しております。
                  <br />
                  詳細は別の記事にてまとめる予定です。
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
