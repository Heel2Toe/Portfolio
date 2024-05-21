import { create } from "zustand"

interface useAdminProps {
    admin: number,
    switchCounter: number,
    counterUp: () => void,
    counterReset: () => void
    adminCounter: (value: number) => void
}

export const useAdmin = create<useAdminProps>((set)=>({
    admin: 0,
    switchCounter: 0,
    counterUp: () => set((prev)=>({
        ...prev,
        switchCounter: prev.switchCounter < 5 ? prev.switchCounter+1 : prev.switchCounter,
    })),
    counterReset: () => set(()=>({switchCounter: 0, admin: 0})),
    adminCounter : (value: number) => set((prev)=>({...prev, admin: value}))
}))