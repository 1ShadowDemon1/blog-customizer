// import arrow from 'src/images/arrow.svg';
// import clsx from 'clsx';
// import styles from './ArrowButton.module.scss';

// /** Функция для обработки открытия/закрытия формы */
// export type ArrowButtonPopup = {
// 	openPopup: boolean;
// 	onClick: () => void;
// };

// export const ArrowButton = ({onClick, openPopup}: ArrowButtonPopup) => {
// 	return (
// 		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
// 		<div
// 			role='button'
// 			aria-label='Открыть/Закрыть форму параметров статьи'
// 			tabIndex={0}
// 			className={clsx(styles.container, openPopup && styles.container_open) }
// 			onClick={onClick}>
// 			<img src={arrow} alt='иконка стрелочки' className={clsx(styles.arrow, openPopup && styles.arrow_open)} />
// 		</div>
// 	);
// };
