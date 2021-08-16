import React from 'react'
import { LoginBg } from '../../../assets'
import './upload.scss'

const Upload = ({img, ...res}) => {
    return (
        <div className="upload">
            {img && <img className="preview" src={img} alt="previe"/>}
            <input type="file" {...res} />
        </div>
    )
}

export default Upload
