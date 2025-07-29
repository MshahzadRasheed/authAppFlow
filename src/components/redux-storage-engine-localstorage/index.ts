import AsyncStorage from '@react-native-async-storage/async-storage';

function rejectWithMessage(error: any) {
  return Promise.reject(error.message);
}

export default (
  key: string,
  replacer: ((this: any, key: string, value: any) => any) | undefined,
  reviver: any,
) => ({
  async load() {
    try {
      return await new Promise(resolve => {
        const jsonState = AsyncStorage.getItem(key);
        resolve(jsonState);
        //resolve(JSON.parse(jsonState, reviver) || {});
      });
    } catch (error) {
      return rejectWithMessage(error);
    }
  },

  async save(state: any) {
    try {
      return await new Promise<void>(resolve => {
        const jsonState = JSON.stringify(state, replacer);
        AsyncStorage.setItem(key, jsonState);
        resolve();
      });
    } catch (error) {
      return rejectWithMessage(error);
    }
  },
});
