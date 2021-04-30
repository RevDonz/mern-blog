import React from 'react'
import { LoginBg } from '../../../assets'
import './upload.scss'

const Upload = () => {
    return (
        <div className="upload">
            <img className="preview" src={LoginBg} alt="previe"/>
            <input type="file"/>
        </div>
    )
}

export default Upload
