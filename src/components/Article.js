import React from 'react'

export default function Article (props) {

  let { title, extract, thumbnail, image } = props.data
  return (
    <div>
      <h1>{title}</h1>
      <a href={image}><img src={thumbnail} /></a>
      <p>{extract}</p>
    </div>
  )
}