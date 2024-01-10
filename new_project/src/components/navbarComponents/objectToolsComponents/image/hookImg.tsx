import {Picture} from '../../../../data/types';
import React from 'react';
import {useAppActions} from '../../../../redux/hooks';
export function ShowImageElement(
	Element: Picture,
	zoomX: number,
	visibility: string,
) {
	const {createSetActiveElementAction} = useAppActions();
	if (!Element.isSelected) {
		visibility = 'none';
	}
	function getIdElement(
		event:
			| React.DragEvent<HTMLTextAreaElement>
			| React.DragEvent<HTMLDivElement>,
		element: Picture,
		type: 'img' | 'div',
	) {
		event.dataTransfer.setData('id', `${element.id}`);
		switch (type) {
			case 'div':
				event.dataTransfer.setData('div', 'true');
				event.dataTransfer.setData('img', 'false');
				break;
			case 'img':
				event.dataTransfer.setData('img', 'true');
				event.dataTransfer.setData('div', 'false');
				event.dataTransfer.setData(
					'offSetX',
					`${event.clientX - element.pos.left}`,
				);
				event.dataTransfer.setData(
					'offSetY',
					`${event.clientY - element.pos.top}`,
				);
				break;
		}
	}
	const setActive = () => {
		createSetActiveElementAction(Element.id);
	};
	return (

		<li key={Element.id} style={{
			listStyleType: 'none',
		}}>
			<>
				<img
					className="pos"
					onDragStart={(event) => getIdElement(event, Element, 'img')}
					draggable={true}
					src={Element.path}
					alt="img"
					onClick={setActive}
					style={{
						width: Element.size.width * zoomX,
						height: Element.size.height * zoomX,
						top: Element.pos.top * zoomX,
						left: Element.pos.left * zoomX,
						borderWidth: 2 * zoomX,
						borderColor: Element.borderColor,
						borderStyle: 'solid',
					}}
				/>
				<div
					key={Element.id + 0.5}
					onDragStart={(event) => getIdElement(event, Element, 'div')}
					draggable={true}
					style={{
						cursor: 'nwse-resize',
						position: 'absolute',
						backgroundColor: 'green',
						width: `${5 * zoomX}px`,
						height: `${5 * zoomX}px`,
						top:
							(Element.pos.top + Element.size.height) * zoomX +
							5 * zoomX,
						left:
							(Element.pos.left + Element.size.width) * zoomX +
							5 * zoomX,
						display: visibility,
					}}
				></div>
			</>
		</li>
	);
}
