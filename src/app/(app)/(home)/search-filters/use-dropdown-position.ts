import { RefObject } from "react";

export const useDropdownPosition = (ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>) => {
    const getDropdownPosition = () => {
        if (!ref.current) return { top: 0, left: 0 }
        const rect = ref.current.getBoundingClientRect()
        const dropdownWidth = 240

        // Calculate the initial position
        let left = rect.left + window.scrollX
        const top = rect.bottom + window.scrollY

        //Check id dropdown whould go off the right edge of the viewport
        if (left + dropdownWidth > window.innerWidth) {
            //ALign to right edge of bottom instead
            left = rect.right + window.scrollX - dropdownWidth

            // If still off-screen, align to the right edge of viewport with some padding
            if (left < 0) {
                left = window.innerWidth - dropdownWidth - 16
            }
        }

        // Ensure dropdown doesn't go off left side
        if (left < 0) {
            left = 16
        }
    }

    return { getDropdownPosition }
}