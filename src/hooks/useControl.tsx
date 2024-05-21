import { create } from 'zustand';

interface useControlProps{
    loading : boolean,
    error: boolean,
    channel : number,
    channelDown : () => void,
    channelUp : () => void,
    setLoading: (value: boolean) => void,
    setError: (value: boolean) => void
}

export const useControl = create<useControlProps>((set)=>({
    loading: false,
    error: false,
    channel: 0,
    channelDown: () => set((prev)=> ({
        channel : prev.channel == 0 ? 2 : prev.channel-1 
    })),
    channelUp : () => set((prev)=>({
        channel : prev.channel == 2 ? 0 : prev.channel+1
    })),
    setLoading : (value: boolean) => set((prev)=>({...prev, loading: value})),
    setError: (value: boolean) => set((prev)=>({...prev, error: value})),
}))
