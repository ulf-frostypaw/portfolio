// import Image from 'next/image'
import { FaFacebookF, FaTwitch, FaTwitter, FaStackOverflow, FaTelegram, FaYoutube } from 'react-icons/fa';
import { SiWattpad, SiFuraffinity } from "react-icons/si";
import { GiLoveHowl } from "react-icons/gi";

export default function ContactButton({name = [], link =[], classes=[]}){
    function Icon(){
        switch (classes) {
            case 'facebook':
                return <FaFacebookF />
                break;
            case 'twitch':
                return <FaTwitch />
                break;
            case 'twitter':
                return <FaTwitter />
            break;
            case 'stackoverflow':
                return <FaStackOverflow />
            break;
            case 'telegram':
                return <FaTelegram />
            break;
            case 'youtube':
                return <FaYoutube />
                break;
            case 'wattpad':
                return <SiWattpad />
                break;
            case 'furaffinity':
                return <SiFuraffinity />
                break;
            case 'murrtube':
                return <GiLoveHowl />
                break;
            default:
                return 'ERROR_ICON';
            break;
        }
    }

    return(
        <div className="container">
            <a className={'button ' + classes} href={link}>
                <div className="button-container"><Icon /> <span className="button-text">{name}</span></div>
            </a>
        </div>
    )
}