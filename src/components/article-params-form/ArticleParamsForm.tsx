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
	prop: ArticleStateType;
	onSubmit: (prop: ArticleStateType) => void
}

export const ArticleParamsForm = ({prop, onSubmit}: ArticleParamsFormT) => {

	//Открыть\закрыть боковую панель
	const [openPopup, setOpenPopup] = useState<boolean>(false)
	const [formState, setFormState] = useState<ArticleStateType>(prop)

	//Форма вариации статьи
	const formRef = useRef<HTMLFormElement>(null);

	const activeSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		onSubmit(formState)
		setOpenPopup(false)
	}

	const selectChange = (key: keyof ArticleStateType) => (value: OptionType) => {
		setFormState((preventState) => ({
			...preventState,
			[key]: value
		}))
	}

	const buttonReset = () => {
		setFormState(defaultArticleState)
		onSubmit(defaultArticleState)
	}

	useClosePopup({
		onClose: () => setOpenPopup(false), 
		objectRef: formRef,
		openPopup
	})

	return (
		<>
			<ArrowButton openPopup={openPopup} onClick={() => setOpenPopup(!openPopup)}/>
			<aside className={clsx(styles.container, openPopup && styles.container_open)}>
				<form className={styles.form} ref={formRef} onSubmit={activeSubmit}>
					<div className={styles.contentSize}>
						<Text size={31} weight={800} uppercase={true}>Задайте параметры</Text>
						<Select selected={formState.fontFamilyOption} options={fontFamilyOptions} onChange={selectChange('fontFamilyOption')} title={'ШРИФТ'}/>
						<RadioGroup name={'fontSize'} options={fontSizeOptions} selected={formState.fontSizeOption} onChange={selectChange('fontSizeOption')} title={'РАЗМЕР ШРИФТА'}/>
						<Select selected={formState.fontColor} options={fontColors} onChange={selectChange('fontColor')} title={'ЦВЕТ ШРИФТА'}/>
						<Separator />
						<Select selected={formState.backgroundColor} options={backgroundColors} onChange={selectChange("backgroundColor")} title={'ЦВЕТ ФОНА'}/>
						<Select selected={formState.contentWidth} options={contentWidthArr} onChange={selectChange("contentWidth")} title={'ШИРИНА КОНТЕНТА'}/>
					</div>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={buttonReset}/>
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
