import React from 'react';

const socialLinks = [{
    id: 'github',
    url: 'https://github.com/anotedao/'
}, {
    id: 'telegram',
    url: 'https://t.me/AintCoin'
}];

const Footer = ({version}) => {
    return (
        <div className="menu-footer">
            <div>Version: {version}</div>
            <div>Brought to you by Aint Chain</div>
            <div>
                {socialLinks.map(item =>
                    (<a key={item.id} className={`social ${item.id}`} href={item.url} target="_blank"></a>))}
            </div>
            <div>
                <a className="fade" href="https://aintchain.com/" target="_blank">aintchain.com</a>
            </div>
        </div>
    );
}

export default Footer;
