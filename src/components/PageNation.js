import React from 'react';
import './css/PageNation.css'; // スタイルシートをインポート

function PageNation(props) {
	return (
		<>
			<p className='pagination'>Click on the items / arrows</p>
			<nav class="pagination">
				<a href="" class="pagination__arrow pagination__prev">
					<span class="visuallyhidden">Previous Page</span>
				</a>
				<ul class="pagination__items">
					<li class="is-active"><a href="/ArticleList"></a></li>

				</ul>
				<a href="" class="pagination__arrow pagination__next">
					<span class="visuallyhidden">Next Page</span>
				</a>
			</nav>

		</>
	);
}

export default PageNation;