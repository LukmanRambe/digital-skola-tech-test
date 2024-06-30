const formatPercentage = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value / 100);
};

export { formatPercentage };
