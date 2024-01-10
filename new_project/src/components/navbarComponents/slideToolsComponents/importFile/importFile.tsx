import React, {ChangeEvent} from 'react';
import {Presentation} from '../../../../data/types';

// import styles
import InputStyle from './importFile.module.css';

// import svg / svg's
import {ReactComponent as ImportSVG} from '../../../../sources/navbar icons/import-navbar-icon.svg';
import {useAppActions} from '../../../../redux/hooks';

const ImportFile = () => {
	const {createImportPresentationAction} = useAppActions();
	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files && files.length > 0) {
			const file = files[0];
			const reader = new FileReader();
			reader.onload = (e) => {
				const contents = e.target?.result as string;
				console.log(JSON.parse(contents) as Presentation);
				const newPresentation = JSON.parse(contents) as Presentation;
				createImportPresentationAction(newPresentation);
			};
			reader.readAsText(file);
		}
	};

	return (
		<div className="input__wrapper">
			<input
				id="import-file-button"
				type="file"
				className={InputStyle.popUp}
				onChange={handleFileChange}
			/>
			<label
				htmlFor={'import-file-button'}
				className={InputStyle.buttontools}
			>
				<ImportSVG />
			</label>
		</div>
	);
};

export default ImportFile;
