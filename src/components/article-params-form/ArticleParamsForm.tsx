import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useState, useRef, FormEvent } from 'react';
import {	fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions, OptionType, defaultArticleState, ArticleStateType} from 'src/constants/articleProps'
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { useClosePopup } from './hooks/useClosePopup';
import { Text } from 'components/text';

export type ArticleParamsFormT = {
	parameters: ArticleStateType;
	onSubmit: (parameters: ArticleStateType) => void
}
 
export const ArticleParamsForm = ({parameters, onSubmit}: ArticleParamsFormT) => {

	//Открыть\закрыть боковую панель
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const [formState, setFormState] = useState<ArticleStateType>(parameters)

	//Форма вариации статьи
	const formRef = useRef<HTMLFormElement>(null);

	const handleMenuSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		onSubmit(formState)
		setIsMenuOpen(false)
	}

	const handleSelectChange = (key: keyof ArticleStateType) => (value: OptionType) => {
		setFormState((preventState) => ({
			...preventState,
			[key]: value
		}))
	}

	const handleReset = () => {
		setFormState(defaultArticleState)
		onSubmit(defaultArticleState)
	}

	useClosePopup({
		onClose: () => setIsMenuOpen(false), 
		objectRef: formRef,
		isMenuOpen
	})

	return (
		<>
			<ArrowButton isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}/>
			<aside className={clsx(styles.container, isMenuOpen && styles.container_open)}>
				<form className={styles.form} ref={formRef} onSubmit={handleMenuSubmit}>
					<div className={styles.contentSize}>
						<Text size={31} weight={800} uppercase={true} as={"h2"}>Задайте параметры</Text>
						<Select selected={formState.fontFamilyOption} options={fontFamilyOptions} onChange={handleSelectChange('fontFamilyOption')} title={'ШРИФТ'}/>
						<RadioGroup name={'fontSize'} options={fontSizeOptions} selected={formState.fontSizeOption} onChange={handleSelectChange('fontSizeOption')} title={'РАЗМЕР ШРИФТА'}/>
						<Select selected={formState.fontColor} options={fontColors} onChange={handleSelectChange('fontColor')} title={'ЦВЕТ ШРИФТА'}/>
						<Separator />
						<Select selected={formState.backgroundColor} options={backgroundColors} onChange={handleSelectChange("backgroundColor")} title={'ЦВЕТ ФОНА'}/>
						<Select selected={formState.contentWidth} options={contentWidthArr} onChange={handleSelectChange("contentWidth")} title={'ШИРИНА КОНТЕНТА'}/>
					</div>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleReset}/>
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};