import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { AppPayload } from '../interfaces/reducers.interface';

export interface AppState {
  roomId: string | null;
}

const initialState: AppState = {
  roomId: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state, action: PayloadAction<AppPayload>) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state: AppState) => state.roomId;

export default appSlice.reducer;
