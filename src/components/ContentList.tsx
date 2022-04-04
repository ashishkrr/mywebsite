import React from 'react'
import { ChangeStyleOnHover } from '../hooks/common'

interface ContentListProps {
    label : string
    labelStyle ?  : React.CSSProperties
}

export const ContentList: React.FunctionComponent<ContentListProps> = ({label, labelStyle}) =>  {
  const { borderStyleOpacity, hoverOnText, hoverOutText } = ChangeStyleOnHover()
  return (
    <div style={{
        display: "flex", 
        width: 200,
        height: 50,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <div style={{
        borderBlockEnd: "2px solid white",
        opacity: borderStyleOpacity.opacity,
        height: 68
      }}
      onMouseEnter={(event) => hoverOnText()}
      onMouseLeave={(event) => hoverOutText()}
      >
        <p style={{
            fontSize: "1.68em", 
            color: "white",
            opacity: "revert",
            cursor: "pointer"
          }}>{label}
        </p>
      </div>
    </div>
  )
}
