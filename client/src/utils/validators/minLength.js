export const minLength = (minLength) => {
    return {
      validator: (value) => value && value.length >= minLength,
      message: 'Password should contain at least 6 characters'
    }
  };