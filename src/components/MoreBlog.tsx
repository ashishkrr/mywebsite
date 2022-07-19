import React from 'react'
interface MoreBlogProps {
    label : string
}

export const MoreBlog = ({label}: MoreBlogProps) => {
  return (
    <p style={{
        marginTop: "1rem",
        marginBottom: "3rem",
        fontFamily: 'Noto Sans, Helvetica, Arial, sans-serif',
        fontSize: "1.1rem",
        color: 'rgb(119, 119, 119)'
     }}> See <a style={{
         textUnderlineOffset: "0.35rem",
         textDecorationThickness: "2px",
         textDecorationStyle: "solid",
         textDecorationColor: "rgb(154,198,231)",
         color: "black",
         fontWeight: 700
     }} href="/blog/">{label}</a> for more</p>
  )
}
