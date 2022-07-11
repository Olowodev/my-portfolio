import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';


const Layout = ({children}) => {
    return (
        <div>
            <div className='leftFixed'>
                <div className='icons'>
                    <div className='icon'>
                        <FaInstagram size={21} />
                    </div>
                    <div className='icon'>
                        <FaLinkedinIn size={21} />
                    </div>
                    <div className='icon'>
                        <FaTwitter size={21} />
                    </div>
                    <div className='icon'>
                        <FaGithub size={21} />
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