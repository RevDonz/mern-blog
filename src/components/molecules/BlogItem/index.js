import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogitem.scss'
import { useHistory } from 'react-router-dom'
import { Button, Gap } from '../../atoms'

const BlogItem = (props) => {
    const history = useHistory();
    const {image, date, title, body, name} = props;
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post"/>
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20} />
                <Button title="Read more" onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
