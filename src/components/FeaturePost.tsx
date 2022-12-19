import React, { useState } from 'react';
import PostImage from '../assets/images/cooking_effective_code_reviews_featured.jpg';
import useWindowDimensions from '../hooks/dimension';

const featurePost = [1, 2, 3, 4, 5, 6];

interface PostsProps {
    label: string
}

const Posts: React.FunctionComponent<PostsProps> = ({label}) => {
  return (
    <div>
        <h2 
            style={{
                fontFamily: '"Roboto Slab", Helvetica, Arial, sans-serif',
                fontWeight: 700,
                color: 'rgb(51, 51, 51)',
                marginLeft: "15px"
            }}
        >{label}</h2>
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", padding: "2%"}}>
            {featurePost.map((data, index) =>{
                return <PostItems key={index} />
            })}
        </div>
    </div>
  )
}

export default Posts;


const PostItems: React.FunctionComponent = () => {
    const { height, width } = useWindowDimensions();
    const [ onHoverTop, setOnHoverTop ] = useState("0px");
    
    return <div 
            onMouseOver={() => setOnHoverTop("-5px")}
            onMouseOut={() => setOnHoverTop("0px")}
            style={{
            width: width <= 600 ? "98%" : "48.5%", 
            height: "30%",
            boxShadow: "10px 5px 10px rgba(136, 136, 136, 0.3), -10px 5px 10px rgba(136, 136, 136, 0.3)",
            marginBottom: "1.08rem",
            position: "relative",
            transition: "top ease 0.2s",
            top: onHoverTop
        }}>
        <img width={"100%"} height={"40%"} style={{objectFit: "cover"}} src={PostImage} alt="loading..." />
        <h2 style={{
            fontSize: "1.08rem",
            marginInline: "1.08rem",
            textAlign: "center",
            color: "rgb(51, 51, 51)",
            fontWeight: 700,
        }}><a style={{
            textUnderlineOffset: "0.35rem",
            textDecorationThickness: "2px",
            textDecorationStyle: "solid",
            textDecorationColor: "rgb(154,198,231)",
            color: "black",
            fontWeight: 700
        }} href="/blog/">Cooking Effective Code Reviews</a></h2>
        <p style={{
            fontFamily: "Noto Sans",
            color: "rgb(51, 51, 51)",
            fontWeight: 400,
            textAlign: "center",
            lineHeight: "20px",
            marginInline: "1.08rem",
        }} property="disambiguatingDescription"> <strong>Reviewing code (PRs) is not an easy task</strong>, so in this post I will share <strong>tips and tricks</strong> on how your code reviews can better contribute to <strong>code quality</strong>, <strong>be more effective and increase team morale</strong> by following a structured and organized process. <strong>Let’s jump in!</strong></p>
    </div>
}