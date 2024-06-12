import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorage = () => {
  const setItem = useCallback(async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting item:', error);
    }
  }, []);

  const getItem = useCallback(async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error getting item:', error);
      return null;
    }
  }, []);

  const removeItem = useCallback(async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item:', error);
    }
  }, []);

  const mergeItem = useCallback(async (key, value) => {
    try {
      await AsyncStorage.mergeItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error merging item:', error);
    }
  }, []);

  const clear = useCallback(async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  }, []);

  const getAllKeys = useCallback(async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.error('Error getting all keys:', error);
      return [];
    }
  }, []);

  const getAllItems = useCallback(async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      return items.reduce((accumulator, [key, value]) => {
        accumulator[key] = JSON.parse(value);
        return accumulator;
      }, {});
    } catch (error) {
      console.error('Error getting all items:', error);
      return {};
    }
  }, []);

  return {
    setItem,
    getItem,
    removeItem,
    mergeItem,
    clear,
    getAllKeys,
    getAllItems,
  };
};

export default useAsyncStorage;