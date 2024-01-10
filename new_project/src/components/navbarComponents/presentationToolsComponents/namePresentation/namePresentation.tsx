import React from 'react';
import PresentationNameStyle from './namePresentation.module.css';
import {useAppActions} from '../../../../redux/hooks';

const NamePresentation = () => {
	const {createRenamePresentationAction} = useAppActions();
	function updateName(e: {preventDefault: () => void; target: any}) {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);

		const formJson = Object.fromEntries(formData.entries());
		if (typeof formJson['presentationName'] === 'string') {
			createRenamePresentationAction(formJson['presentationName']);
		}
	}
	return (
		<div className={PresentationNameStyle.presentation_name}>
			<input
				spellCheck="false"
				className={PresentationNameStyle.presentation_name_input}
				type="text"
				name="presentationName"
				placeholder="Presentation name"
				onSubmit={updateName}
			/>
			<hr className={PresentationNameStyle.undextext_line}></hr>
		</div>
	);
};

export default NamePresentation;
