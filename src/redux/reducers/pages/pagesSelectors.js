import { createSelector } from 'reselect';
import pageStatus from './pageStatus';

// Получить название страницы
export const selectPageTitle = (state) => {
   const key = state.pages.currentPage;
   const data = state.pages.data;
   if (!key || !data) return pageStatus.EMPTY;

   return data.pages[key].title;
};

// Получить массив со структурой разделов
export const selectKeys = createSelector(
   (state) => state.pages.data,
   (data) => {
      if (!data) return null;
      return data.keys.map((section) => ({
         sectionTitle: section.sectionTitle,
         pages: section.pages.map((key) => ({
            key,
            title: data.pages[key].title,
         })),
      }));
   }
);

// Получить данные страницы
export const selectPage = (state) => {
   const key = state.pages.currentPage;
   const data = state.pages.data;
   if (!key || !data) return pageStatus.EMPTY;

   if (!(key in data.pages)) return pageStatus.NOT_FOUND;
   return data.pages[key].data;
};

// Получить статус меню
export const selectMenuStatus = (state) => state.pages.menuStatus;
