export const register = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: 'CREATE_USER_LOADING',
    });
    // Fake auth:
    setTimeout(() => {
      dispatch({
        type: 'CREATE_USER_SUCCESS',
      });
      dispatch({
        type: 'AUTH_USER_SUCCESS',
      });
      dispatch({
        type: 'GET_USER_SUCCESS',
        payload: payload.data,
      });
    }, 1000);
  };
  // return async (dispatch: any) => {
  //   try {
  //     dispatch({
  //       type: 'CREATE_USER_LOADING',
  //     });
  //     const response = await fetchApi('/user/create', 'POST', payload, 200);

  //     if (response.success) {
  //       dispatch({
  //         type: 'CREAT_USER_SUCCESS',
  //       });
  //       dispatch({
  //         type: 'AUTH_USER_SUCCESS',
  //         token: response.token,
  //       });
  //       dispatch({
  //         type: 'GET_USER_SUCCESS',
  //         payload: response.responseBody,
  //       });

  //       return response;
  //     } else {
  //       throw response;
  //     }
  //   } catch (error) {
  //     dispatch({
  //       type: 'CREAT_USER_FAIL',
  //       payload: error.responseBody,
  //     });
  //     return error;
  //   }
  // };
};

export const login = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: 'LOGIN_USER_LOADING',
    });
    // Fake auth:
    setTimeout(() => {
      dispatch({
        type: 'LOGIN_USER_SUCCESS',
      });
      dispatch({
        type: 'AUTH_USER_SUCCESS',
      });
      dispatch({
        type: 'GET_USER_SUCCESS',
        payload: payload.data,
      });
    }, 1000);
  };

  // return async (dispatch: any) => {
  //   try {
  //     dispatch({
  //       type: 'LOGIN_USER_LOADING',
  //     });
  //     const response = await fetchApi('/user/login', 'POST', payload, 200);

  //     if (response.success) {
  //       dispatch({
  //         type: 'LOGIN_USER_SUCCESS',
  //       });
  //       dispatch({
  //         type: 'AUTH_USER_SUCCESS',
  //         token: response.token,
  //       });
  //       dispatch({
  //         type: 'GET_USER_SUCCESS',
  //         payload: response.responseBody,
  //       });
  //       return response;
  //     } else {
  //       throw response;
  //     }
  //   } catch (error) {
  //     dispatch({
  //       type: 'LOGIN_USER_FAIL',
  //       payload: error.responseBody,
  //     });
  //     return error;
  //   }
  // };
};

export const logout = () => {
  return async (dispatch: any) => {
    dispatch({
      type: 'USER_LOGGED_OUT_SUCCESS',
    });
  };

  // return async (dispatch: any, getState: any) => {
  //   const state = getState();
  //   try {
  //     const {
  //       authReducer: {
  //         authData: {token},
  //       },
  //     } = state;
  //     console.log(token);
  //     const response = await fetchApi(
  //       '/user/logout',
  //       'DELETE',
  //       null,
  //       200,
  //       token,
  //     );
  //     console.log(response);
  //     dispatch({
  //       type: 'USER_LOGGED_OUT_SUCCESS',
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
};
