import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';


const Layout = ({children}) => {
    return (
        <div>
            <div className='leftFixed'>
                <div className='icons'>
                    <div className='icon'>
                        <a href=''><FaInstagram size={21} /></a>
                    </div>
                    <div className='icon'>
                        <a href=''><FaLinkedinIn size={21} /></a>
                    </div>
                    <div className='icon'>
                        <a href=''><FaTwitter size={21} /></a>
                    </div>
                    <div className='icon'>
                        <a href=''><FaGithub size={21} /></a>
                    </div>
                </div> 
                <div className='vLine'></div>
            </div>
            {children}
            <div className='middleFixed'>
                <div className='dot active'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>
            <div className='rightFixed'>
                <div className='rightFixedText'>
                    adebayoolowofoyeku@gmail.com
                </div>
                <div className='vLine'></div>
            </div>
        </div>
    );
}

export default Layout;