const cleanSet = (set, startString) => {
  if (startString === '' || typeof startString !== 'string') return '';
  const strings = Array.from(set).filter(
    (s) => typeof s === 'string' && s.startsWith(startString),
  );
  return strings.map((s) => s.slice(startString.length)).join('-');
};

export default cleanSet;
