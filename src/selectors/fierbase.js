export const selectBrands = (state) => state.brands;
export const selectCategories = (state) => state.categories;
export const selectItems = (state) => state.items;
export const selectBrand = (state) => state.selectedBrand;
export const selectNews = (state) => state.news;
export const selectCategory = (state) => state.selectedCategory;
export const selectCategoryById = (id) => (state) =>
  state.categories.find((category) => category.categoryId === id);
export const selectUser = (state) => state.user;
export const selectedItem = (state) => state.selectedItem;
