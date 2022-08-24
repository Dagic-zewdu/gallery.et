
export function handleInfinityScroll(event) {
    let mHeight = event.nativeEvent.layoutMeasurement.height;
    let cSize = event.nativeEvent.contentSize.height;
    let Y = event.nativeEvent.contentOffset.y;
    if (Math.ceil(mHeight + Y) >= cSize) return true;
    return false;
}

export const Donothing = () => { }

export const handleScrollUpdown = (event, scrollUp = () => { }, scrollDown = () => { }) => {
    const currentYPosition = event.nativeEvent.contentOffset.y
    const oldPosition = scrollYRef.current

    if (oldPosition < currentYPosition) {
        // we scrolled down
        scrollDown()
    } else {
        // we scrolled up
        scrollDown()
    }
    scrollYRef.current = currentYPosition
}