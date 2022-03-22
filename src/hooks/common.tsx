import React, { useState } from 'react'

export const ChangeStyleOnHover = () => {

    const [borderStyleOpacity, setBorderStyleOpacity] = useState({opacity: 0.6});

    const hoverOnText = () => {
        setBorderStyleOpacity({opacity: 1})
    }

    const hoverOutText = () => {
        setBorderStyleOpacity({opacity: 0.6})
    }
    return { borderStyleOpacity, hoverOnText, hoverOutText }
}
