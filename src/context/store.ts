import { configureStore } from '@reduxjs/toolkit'

import { reducers } from './rootReducer'
import {api} from "@context/api/api";

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    devTools: true,
})

export type TypeRootState = ReturnType<typeof store.getState>