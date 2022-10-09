import {configureStore} from '@reduxjs/toolkit'

import {sliceName} from './slice'

const store = configureStore({
    reducers: {
        sliceName: sliceName.reducer
    }
})

export default store