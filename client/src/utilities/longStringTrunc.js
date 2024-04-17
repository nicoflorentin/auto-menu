	export const longStringTrunc = (string, length) => {
		if (string.length > length) {
			return string.slice(0, length) + '...';
		} else {
			return string;
		}
	}