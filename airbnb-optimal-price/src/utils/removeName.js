export const removeName = property => {
  const { name, ...rest } = property;
  return { ...rest };
};
