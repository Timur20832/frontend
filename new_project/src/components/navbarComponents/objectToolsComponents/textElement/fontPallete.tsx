import React, {useState} from 'react';
import FontPalleteStyle from './fontPallete.module.css';

import {ReactComponent as FontPalleteSVG} from '../../../../sources/navbar icons/font-pallete-icon.svg';
import {ReactComponent as ArrowDownSVG} from '../../../../sources/navbar icons/arrow-down-navbar-icon.svg';
import {ReactComponent as ArrowUpSVG} from '../../../../sources/navbar icons/arrow-up-navbar-icon.svg';
import PalleteElement from '../../slideToolsComponents/palleteSlide/palleteElement';
import {Simulate} from 'react-dom/test-utils';
import change = Simulate.change;
import {useAppActions} from '../../../../redux/hooks';

const ArrowRotateAnim = '100%{transform: rotate(180deg);}';

function FontPalleteElement() {
	const [show, setShow] = React.useState(false);
	const [fontSize, setFontSize] = React.useState(16);
	const [font, setFont] = React.useState('Arial');
	const {createChangeFontAction} = useAppActions();

	const [dropDownButtonAnim, setDropDownButtonAnim] = React.useState();
	const [dropDownShow, setDropDownShow] = React.useState(false);
	const [fontSizes] = React.useState([
		{size: 1},
		{size: 2},
		{size: 4},
		{size: 6},
		{size: 8},
		{size: 10},
		{size: 12},
		{size: 14},
		{size: 16},
		{size: 18},
		{size: 20},
		{size: 24},
	]);
	const [fontPallete] = React.useState([
		{font: 'Arial'},
		{font: 'Times New Roman'},
		{font: 'Roboto'},
	]);

	function ShowArrowButton(props: {status: boolean}) {
		if (!props.status) {
			return <ArrowDownSVG className={FontPalleteStyle.ArrowSVG} />;
		} else {
			return <ArrowUpSVG className={FontPalleteStyle.ArrowSVG} />;
		}
	}

	function ShowSizes(props: {status: boolean}) {
		return (
			<ul
				className={FontPalleteStyle.fontSizeList}
				style={{
					opacity: props.status ? '100%' : '0%',
				}}
			>
				{fontSizes.map((fontSize) => (
					<button
						key={fontSize.size}
						className={FontPalleteStyle.fontSizeSelectButton}
						onClick={() => setFontSize(fontSize.size)}
					>
						{fontSize.size}
					</button>
				))}
			</ul>
		);
	}

	const changeFont = () => {
		createChangeFontAction(font, fontSize);
	};

	function ShowFontPallete(props: {status: boolean}) {
		return (
			<div
				className={FontPalleteStyle.pallete}
				style={{
					opacity: props.status ? '100%' : '0%',
				}}
			>
				<div className={FontPalleteStyle.fontSelect}>
					<div className={FontPalleteStyle.fontSelectBlock}>
						{fontPallete.map((fontPalleteUnit) => (
							<button
								key={fontPalleteUnit.font}
								className={FontPalleteStyle.fontPalleteUnit}
								style={{
									backgroundColor: fontPalleteUnit.font,
									animation: ArrowRotateAnim,
									opacity: props.status ? '100%' : '0%',
								}}
								onClick={() => setFont(fontPalleteUnit.font)}
							>
								{fontPalleteUnit.font}
							</button>
						))}
					</div>
					<button
						className={FontPalleteStyle.fontSelectButton}
						onClick={changeFont}
						type={'button'}
					>
						submit
					</button>
				</div>
				<div className={FontPalleteStyle.scroll_area}></div>
				<div className={FontPalleteStyle.fontPreviewBlock}>
					<div className={FontPalleteStyle.dropDownDiv}>
						<div className={FontPalleteStyle.dropDownList}>
							{fontSize}
						</div>
						<ShowSizes status={dropDownShow} />
					</div>

					<button
						className={FontPalleteStyle.dropDownButton}
						onClick={() => setDropDownShow(!dropDownShow)}
					>
						<ShowArrowButton status={dropDownShow} />
					</button>
				</div>
			</div>
		);
	}

	return (
		<>
			<button
				className={FontPalleteStyle.buttontools}
				onClick={() => setShow(!show)}
			>
				<FontPalleteSVG />
			</button>
			<ShowFontPallete status={show} />
		</>
	);
}

export default FontPalleteElement;
