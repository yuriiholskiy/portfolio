export default function(compsName) {
	return {
		data() {
			return {
				themes: {
					primary: `c-${compsName}-primary`,
					secondary: `c-${compsName}-secondary`,
					warning: `c-${compsName}-warning`,
					danger: `c-${compsName}-danger`,
					success: `c-${compsName}-success`,
					dark: `c-${compsName}-dark`,
					light: `c-${compsName}-light`
				}
			}
		}
	}
}