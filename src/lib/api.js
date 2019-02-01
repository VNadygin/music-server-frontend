import client from './client';
import { normalize } from '../utils/common';

export const fetchLibraryAsync = async () => {
  try {
    const { data } = await client.get('/library');
    const normalizedData = normalize(data);

    return normalizedData;
  } catch (error) {
    return error.message;
  }
};
