import { OptionsObject, SnackbarMessage } from 'notistack';

export interface INotification {
  key?: string | number;
  message: SnackbarMessage;
  options?: OptionsObject;
  dismissed?: boolean;
}
