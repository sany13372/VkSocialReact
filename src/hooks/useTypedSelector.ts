import { TypedUseSelectorHook, useSelector } from 'react-redux'
import {TypeRootState} from "@context/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
