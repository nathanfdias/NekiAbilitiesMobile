import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setUserLocalStorage(user) {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}

export async function getUserLocalStorage() {
  try {
    const json = await AsyncStorage.getItem('user');

    if (!json) {
      return null;
    }

    const object = JSON.parse(json);

    if (!isUserStorage(object)) {
      await AsyncStorage.removeItem('user');
      return null;
    }

    return object;
  } catch (error) {
    console.log(error);
    return null;
  }
}

function isUserStorage(object) {
  return (
    object &&
    typeof object.username === 'string' &&
    typeof object.accessToken === 'string' &&
    typeof object.type === 'string' &&
    typeof object.refreshToken === 'string' &&
    typeof object.id === 'number' &&
    typeof object.email === 'string' &&
    Array.isArray(object.roles)
  );
}