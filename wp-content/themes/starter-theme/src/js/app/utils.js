const isVisible = (element) => {
	if (!isElement(element) || element.getClientRects().length === 0) {
	return false;
	}

	return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
};

const isInViewport = (element) => {
	var rect = element.getBoundingClientRect()

	const windowHeight = (window.innerHeight || document.documentElement.clientHeight)
	const windowWidth = (window.innerWidth || document.documentElement.clientWidth)

	const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0)
	const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0)

	return (vertInView && horInView)
}

const triggerTransitionEnd = (element) => {
	element.dispatchEvent(new Event(TRANSITION_END));
  };
  
const isElement = (obj) => {
	if (!obj || typeof obj !== 'object') {
		return false;
	}

	if (typeof obj.jquery !== 'undefined') {
		obj = obj[0];
	}

	return typeof obj.nodeType !== 'undefined';
};

const setViewportUnit = () => {
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export { isInViewport, isVisible, triggerTransitionEnd, isElement, setViewportUnit };