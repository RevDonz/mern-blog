import React from 'react'
import { RegisterBg } from '../../assets'
import './detailblog.scss'
import { useHistory } from 'react-router-dom'
import { Link } from '../../components'

const DetailBlog = () => {
    const history = useHistory();

    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="thumb"/>
            <p className="blog-title">Title Vlog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque recusandae aliquam, quis adipisci est inventore mollitia esse natus quia soluta quaerat eum, deleniti necessitatibus! Cupiditate et eius corporis nihil beatae.</p>
            <Link title="Kembali ke home" onClick={() => history.push('/')} />
        </div>
    )
}

export default DetailBlog
