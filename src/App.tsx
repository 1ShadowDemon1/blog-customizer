import { CSSProperties, useState } from 'react';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, ArticleStateType } from './constants/articleProps';
import styles from './styles/index.module.scss';

export const App = () => {
	const [articleParams, setArticleParams] = useState<ArticleStateType>(defaultArticleState)
	const onActiveForm = (prop: ArticleStateType) => {setArticleParams(prop)}
	return (
		<div
			className={styles.main}
			style={
				{
					'--font-family': articleParams.fontFamilyOption.value,
					'--font-size': articleParams.fontSizeOption.value,
					'--font-color': articleParams.fontColor.value,
					'--container-width': articleParams.contentWidth.value,
					'--bg-color': articleParams.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm prop={articleParams} onSubmit={onActiveForm}/>
			<Article />
		</div>
	);
};