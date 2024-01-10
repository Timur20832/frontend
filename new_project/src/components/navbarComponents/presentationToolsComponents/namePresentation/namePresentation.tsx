import React from 'react';
import PresentationNameStyle from './namePresentation.module.css';
import {useAppActions} from '../../../../redux/hooks';

type prop = {
	presentationName: string;
};

const NamePresentation = (prop: prop) => {
	const {createRenamePresentationAction} = useAppActions();
	function updateName(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		createRenamePresentationAction(e.target.value);
	}
	return (
		<div className={PresentationNameStyle.presentation_name}>
			<input
				spellCheck="false"
				className={PresentationNameStyle.presentation_name_input}
				type="text"
				name={prop.presentationName}
				placeholder={prop.presentationName}
				onChange={updateName}
			/>
			<hr className={PresentationNameStyle.undextext_line}></hr>
		</div>
	);
};

export default NamePresentation;
