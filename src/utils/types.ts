import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './appStore'

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export interface StringArray {
    items: string[];
}
export interface String{
    item: string;
}
export interface VideoItem {
    id : string,
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            standard : { url: string; width: number; height: number };
          default: { url: string; width: number; height: number };
          medium: { url: string; width: number; height: number };
          high: { url: string; width: number; height: number };
          maxres: { url: string; width: number; height: number };
        };
        channelTitle: string;
        tags?: string[];
        categoryId?: string;
      }
      contentDetails?: {
        duration: string;
        dimension: string;
        definition: string;
      };
    statistics : {
        viewCount : string,
        likeCount : string,
        commentCount : string
    }
}

export interface VideoCardProps {
    item : VideoItem
}