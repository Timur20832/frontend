import {rootReducer} from './reducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as SlideActionCreator from './ActionCreators/slideActionCreators';
import * as PresentationActionCreator from './ActionCreators/presentationActionCreators';
import * as ToolActionCreator from './ActionCreators/toolActionCreators';
// Выведение типа `RootState` из хранилища
type RootState = ReturnType<typeof rootReducer>;

// Используйте во всем приложении вместо `useSelector`
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAppActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(
		{
			...SlideActionCreator,
			...PresentationActionCreator,
			...ToolActionCreator,
		},
		dispatch,
	);
};

export {useAppSelector, useAppActions};
