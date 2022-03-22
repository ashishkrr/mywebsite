import React from 'react'

interface ContentListProps {
    label : string
    labelStyle ?  : React.CSSProperties
    
}

export const ContentList: React.FunctionComponent<ContentListProps> = ({label, labelStyle}) =>  {
  return (
    <div style={{display: "flex", borderWidth: 5, borderColor: "white", width: 200, height: 100, marginTop: 20}}>
        {/* <h2 style={{color: "white", fontFamily: `'Oxygen', 'sans-serif'`, fontSize: "2.3em"}}>{label}</h2> */}
    </div>
  )
}
