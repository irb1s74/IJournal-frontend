import { EFetchStatus } from '../../../models/EFetchStatus';
import { IProfileSetFetchStatus, ProfileActionEnum } from './types';

export const SetProfileFetchStatus = (
  status: EFetchStatus
): IProfileSetFetchStatus => ({
  type: ProfileActionEnum.SET_PROFILE_FETCH_STATUS,
  payload: status,
});
