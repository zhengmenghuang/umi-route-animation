import axios from 'axios';

export default {

  namespace: 'todoList',

  state: {
    data: []
  },

  effects: {
    *query({  }, { put, call }: any) {
      const rsp = yield call(() => {
        return axios.get('api/v1/topics');
      });
      const todoList = rsp.data;
      yield put({ type: 'save', payload: todoList });
    },
  },

  reducers: {
    save(state: any, { payload: todoList }: any) {
      state.data = todoList;
      return state;
    },
  },

  subscriptions: {
    setup({ dispatch, history }: any) {
      history.listen(({ pathname }: any) => {
        if (pathname === '/test2') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
}
