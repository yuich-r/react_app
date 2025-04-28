// src/data/articles.js
export const articles = [
  {
    id: 'article-1',
    KBN: 'IPA_SC',
    title: 'Reactの基本',
    sections: [
      { id: 'section-1-1', title: 'コンポーネントとは' },
      { id: 'section-1-2', title: 'JSXの書き方' },
      { id: 'section-1-3', title: 'PropsとState' },
    ],
    date: '2025-04-26', // 投稿日を追加
  },
  {
    id: 'article-2',
    KBN: 'IPA_SC',
    title: '状態管理ライブラリRedux',
    sections: [
      { id: 'section-2-1', title: 'Reduxの概念' },
      { id: 'section-2-2', title: 'ActionとReducer' },
      { id: 'section-2-3', title: 'Storeの作成' },
    ],
    date: '2025-04-20', // 投稿日を追加
  },
  {
    id: 'article-3',
    KBN: 'IPA_SC',
    title: 'React Routerを使ったルーティング',
    sections: [
      { id: 'section-3-1', title: 'BrowserRouter' },
      { id: 'section-3-2', title: 'RoutesとRoute' },
      { id: 'section-3-3', title: 'Linkコンポーネント' },
    ],
    date: '2025-04-25', // 投稿日を追加
  },
  // 他の記事データも同様に追加
];