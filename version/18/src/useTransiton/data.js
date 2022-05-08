export const generateItems = () => {
  const items = [];

  for (let i = 0; i < 10000; i++) {
    items.push(`Item ${i + 1}번`);
  }

  return items;
};
