export const handleScroll = (e, containerRef) => {
    e.preventDefault()
    const container = containerRef.current;
    if (container) {
        container.scrollLeft += event.deltaY;
    }
};