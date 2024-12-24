// store.js
import { create } from 'zustand';

const useStore = create((set) => ({
    categories: [],
    setCategories: (categories) => set({ categories }),
}));

export default useStore;
