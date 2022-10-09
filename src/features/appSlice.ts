import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppPayload } from '../interfaces/reducers.interface';
import { RootState } from '../app/store';

export interface AppState {
  channelId: string;
}

const initialState: AppState = {
  channelId: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterChannel: (state, action: PayloadAction<AppPayload>) => {
      state.channelId = action.payload.channelId;
    },
  },
});

export const { enterChannel } = appSlice.actions;

export const selectChannelId = (state: RootState) => state.app.channelId;

export default appSlice.reducer;
