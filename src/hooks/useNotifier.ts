import React from 'react';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useTypedSelector } from './useTypedSelector';
import { removeNotification } from '../store/reducers/appReducer/actions';
// import { removeSnackbar } from './redux/actions';

let displayed: string[] | number[] = [];

const useNotifier = () => {
  const dispatch = useDispatch();
  const notifications = useTypedSelector((store) => store.app.notifications);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id: string | number) => {
    // @ts-ignore
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: string | number) => {
    // @ts-ignore
    displayed = [...displayed.filter((key: string | number) => id !== key)];
  };

  React.useEffect(() => {
    notifications.forEach(
      ({ key, message, options = {}, dismissed = false }) => {
        if (dismissed) {
          // dismiss snackbar using notistack
          closeSnackbar(key);
          return;
        }

        // do nothing if snackbar is already displayed
        // @ts-ignore
        if (displayed.includes(key)) return;

        // display snackbar using notistack
        enqueueSnackbar(message, {
          key,
          ...options,
          onClose: (event, reason, myKey) => {
            if (options.onClose) {
              options.onClose(event, reason, myKey);
            }
          },
          onExited: (event, myKey) => {
            // remove this snackbar from redux store
            dispatch(removeNotification(myKey));
            removeDisplayed(myKey);
          },
        });

        // keep track of snackbars that we've displayed
        if (key) {
          storeDisplayed(key);
        }
      }
    );
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);
};

export default useNotifier;
