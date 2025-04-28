import { useEffect, useState } from 'react';

const NOTION_API_URL = 'https://jsonplaceholder.typicode.com/todos/1';
const NOTION_API_KEY = 'secret_ntn_1463341200734rWifvSZyJCkq34dU8rI7dQkUMtEd0pciB'; // あなたのNotion Integrationのシークレットキー
const NOTION_VERSION = '2022-06-28'; // Notion APIバージョン

function NotionDataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(NOTION_API_URL, {
          method: 'GET',
/*           headers: {
            'Authorization': `Bearer ${NOTION_API_KEY}`,
            'Content-Type': 'application/json',
            'Notion-Version': NOTION_VERSION,
          },
          body: JSON.stringify({}),
 */        
});

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data from Notion API:', error);
      }
    };

    fetchData();
  }, []); // 空の依存配列 → マウント時のみ実行

  return (
    <div>
      <h1>Notion API Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default NotionDataFetcher;