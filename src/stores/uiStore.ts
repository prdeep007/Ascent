import { create } from 'zustand';

interface UIStore {
  isModalOpen: boolean;
  activeChapter: number;
  filterDrawerOpen: boolean;
  lenisEnabled: boolean;
  setModal: (open: boolean) => void;
  setChapter: (chapter: number) => void;
  setFilterDrawer: (open: boolean) => void;
  setLenisEnabled: (enabled: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isModalOpen: false,
  activeChapter: 0,
  filterDrawerOpen: false,
  lenisEnabled: true,
  setModal: (open) => set({ isModalOpen: open }),
  setChapter: (chapter) => set({ activeChapter: chapter }),
  setFilterDrawer: (open) => set({ filterDrawerOpen: open }),
  setLenisEnabled: (enabled) => set({ lenisEnabled: enabled })
}));
