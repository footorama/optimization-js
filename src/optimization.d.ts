// eslint-disable-next-line camelcase
export declare function minimize_Powell<T extends number[] = number[]>(
	errorFunction: (amounts: T) => number,
	startPoint: T
): {
	argument: T;
	fncvalue: number;
};
