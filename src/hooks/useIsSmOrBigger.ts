import { useEffect, useState } from 'react';

export function useIsSmOrBigger() {
	const [isSmOrBigger, setIsSmOrBigger] = useState(false);
	useEffect(() => {
		const callBack = () => {
			if (window.innerWidth >= 640) {
				setIsSmOrBigger(true);
			} else {
				setIsSmOrBigger(false);
			}
		};
		window.addEventListener('resize', callBack);
		return () => window.removeEventListener('resize', callBack);
	}, []);
	return isSmOrBigger;
}
