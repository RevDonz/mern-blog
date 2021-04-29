import React from 'react'
import { Facebook, Github, Instagram, LogoImg, Twitter } from '../../../assets'
import './footer.scss'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon"/>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="">
                    <img className="logo" src={LogoImg} alt="LogoIm g" />
                </div>
                <div className="social-wrapper">
                    <Icon img={Facebook}/>
                    <Icon img={Instagram}/>
                    <Icon img={Github}/>
                    <Icon img={Twitter}/>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
