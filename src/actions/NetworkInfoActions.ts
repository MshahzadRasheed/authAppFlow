import {NETWORK_INFO} from './ActionTypes';

export default function networkInfoListener(
  isNetworkConnected: boolean = false,
) {
  return {
    type: NETWORK_INFO,
    isNetworkConnected,
  };
}
