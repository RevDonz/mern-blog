import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogitem.scss'
import { useHistory } from 'react-router-dom'
import { Button, Gap } from '../../atoms'

const BlogItem = () => {
    const history = useHistory();

    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post"/>
            <div className="content-detail">
                <p className="title">Component Blog Item</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est provident iure vel distinctio. Omnis laudantium ratione dolorum quo tempore doloribus. Repellat suscipit accusantium voluptas totam tempore hic facere sequi repudiandae.</p>
                <Gap height={20} />
                <Button title="Read more" onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
