import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {ISignInResponse} from '@/types/api/user';

function useStorageToken() {
  const getStorageToken = async () => {
    const existedToken = await AsyncStorage.getItem('@tokenInfo');
    return existedToken ? JSON.parse(existedToken) : null;
  };
  const setStorageToken = async (data: ISignInResponse) => {
    await AsyncStorage.setItem('@tokenInfo', JSON.stringify(data));
  };
  return {getStorageToken, setStorageToken};
}

export default useStorageToken;
