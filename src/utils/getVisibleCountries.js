const getVisibleCountries = (state, filter) => {
  if (!filter) return state;
  const normalizedFilter = filter.toLowerCase();
  return state.filter(({ Country }) => {
    return Country.toLowerCase().startsWith(normalizedFilter);
  });
};

export default getVisibleCountries;
