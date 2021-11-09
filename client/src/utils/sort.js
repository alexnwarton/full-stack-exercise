const compareKey = key => 
	(a, b) => {
		if(a[key] < b[key]){
			return -1;
		}
		else if(a[key] > b[key]) {
			return 1;
		}
		else {
			return 0;
		}
}

export const AZTitle = arr => arr.sort(compareKey('title'))
export const ZATitle = arr => arr.sort(compareKey('title')).reverse()
export const AZPub = arr => arr.sort(compareKey('publisher'))
export const ZAPub = arr => arr.sort(compareKey('publisher')).reverse()