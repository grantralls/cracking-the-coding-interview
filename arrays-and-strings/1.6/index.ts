export const soln = (s: string): string => {
	if (s.length <= 2) return s;

	let currChar = s[0];
	let total = 1;
	let results = '';

	for (let i = 1; i < s.length; i++) {
		if (s[i] != currChar) {
			results += `${currChar}${total}`;
			currChar = s[i];
			total = 1;
			continue;
		}

		total++;
	}

	results += `${currChar}${total}`;


	if (results.length >= s.length) {
		return s;
	}

	return results;
} 
