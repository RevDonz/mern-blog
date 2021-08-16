import React from 'react'
import { Button, Input, Upload, TextArea, Gap, Link } from '../../components'
import './createblog.scss'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const [preview, setPreview] = useState(null)
    const history = useHistory();


    const onSubmit = () => {
        console.log('title:', title);
        console.log('body:', body);
        console.log('image:', image);

        const data = new FormData();
        data.append('title', title)
        data.append('body', body)
        data.append('image', image)

        axios.post('http://localhost:4000/v1/blog/post/', data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log('post sukes', res);
        })
        .catch(err => {
            console.log('lah error', err);
        })
    }

    const onImgUpload = (e) => {
        const file = e.target.files[0]
        setImage(file)
        setPreview(URL.createObjectURL(file))
    }
    return (
        <div className="blog-post">
            <Link title="Kembali" onClick={() => history.push('/')} />
            <p className="title">Create New Blog Post</p>
            <Input label="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Upload onChange={(e) => onImgUpload(e)} img={preview} />
            <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
            <Gap height={20} />
            <div className="button-action">
                <Button title="Save" onClick={onSubmit} />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default CreateBlog
