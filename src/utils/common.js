export const noop = () => {};

export const normalize = (array, uniqKey = 'id') => {
  const byId = {};
  const allIds = [];

  array.forEach(item => {
    const key = item[uniqKey];
    byId[key] = item;
    allIds.push(item[uniqKey]);
  });

  console.log(byId);
  console.log(allIds);

  return { byId, allIds };
};
