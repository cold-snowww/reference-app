import { createSlice } from '@reduxjs/toolkit';
import { initialPagesState } from './initialPagesState';

const pagesSlice = createSlice({
   name: 'pages',
   initialState: initialPagesState,
   reducers: {
      showPage(state, action) {
         const key = action.payload;
         // Добавить страницу в историю
         if (state.currentPage) {
            const history = state.history;
            if (history.back.length > 50) history.back.shift();
            history.back.push(state.currentPage);
            history.next = [];
         }
         // Изменить страницу
         state.currentPage = key;
         // Закрыть меню
         const menuStatus = state.menuStatus;
         state.menuStatus = !menuStatus;
      },
      changeData(state, action) {
         const data = action.payload;
         state.data = data;
         // Обнулить текущую страницу
         state.currentPage = '';
         state.currentPageTitle = '';
         // Обнулить историю
         state.history.back = [];
         state.history.next = [];
      },
      changeMenuStatus(state, action) {
         const status = state.menuStatus;
         state.menuStatus = !status;
      },
      goBack(state, action) {
         if (state.currentPage && state.history.back.length >= 1) {
            state.history.next.push(state.currentPage);
            state.currentPage = state.history.back.pop();
         }
      },
      goNext(state, action) {
         if (state.currentPage && state.history.next.length >= 1) {
            state.history.back.push(state.currentPage);
            state.currentPage = state.history.next.pop();
         }
      },
   },
});

export const { showPage, changeData, changeMenuStatus, goBack, goNext } =
   pagesSlice.actions;
export default pagesSlice.reducer;
