import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogitem.scss'

const BlogItem = () => {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post"/>
            <div className="content-detail">
                <p className="title">Component Blog Item</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est provident iure vel distinctio. Omnis laudantium ratione dolorum quo tempore doloribus. Repellat suscipit accusantium voluptas totam tempore hic facere sequi repudiandae.</p>
            </div>
        </div>
    )
}

export default BlogItem
