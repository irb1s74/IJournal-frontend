import { AppActionEnum, IAppSetMenu } from './types';

export const AppSetMenu = (): IAppSetMenu => ({ type: AppActionEnum.SET_MENU });
