import { configureStore } from '@reduxjs/toolkit';
// We will import our reducers here later

export const store = configureStore({
  reducer: {
    // Add your feature reducers here (e.g., auth: authReducer)
  },
});
