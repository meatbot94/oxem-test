const useCount = (total, percent, months) => {
	const initPayment = (total * percent) / 100;
	const monthPayment = (total - initPayment) * ((0.035 * Math.pow(1 + 0.035, months)) / (Math.pow(1 + 0.035, months) - 1));
	const totalPayment = initPayment + months * monthPayment;

	return { initPayment, monthPayment, totalPayment };
};

export default useCount;
