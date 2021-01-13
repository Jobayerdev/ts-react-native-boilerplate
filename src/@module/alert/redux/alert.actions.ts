import AlertTypes from './alert.types';

/*
 * File: alert.actions.ts
 * File Created: Tuesday, 5th January 2021 1:38:41 am
 * -----
 * Last Modified: Tuesday, 5th January 2021 1:40:34 am
 * -----
 * Description:
 */
export const snackBar = () => async (dispatch: any) => {
  dispatch({
    type: AlertTypes.ALERT_SNACKBAR_PUSH,
  });
};
