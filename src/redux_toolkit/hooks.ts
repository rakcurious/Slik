import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

//custom hooks to use throughout the app instead of plain `useDispatch` and `useSelector` (typescript recommended)
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()