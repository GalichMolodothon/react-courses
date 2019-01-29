import React from 'react'
import UIkit from 'uikit'

function onClickAlbum(event) {  
    UIkit.lightboxPanel({
        items: [
            {source: 'https://getuikit.com/assets/uikit/tests/images/size1.jpg', caption: 'Caption 1'},
            {source: 'https://getuikit.com/assets/uikit/tests/images/size2.jpg', caption: 'Caption 2'},
        ]
    }).show();
}

export function Album(props) {
    return <table className="uk-table uk-table-justify uk-table-divider">
                <tbody>
                    <tr>
                        <td><span uk-icon="icon: album; ratio: 2"></span></td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                        <td><a onClick={(e) => onClickAlbum(e)} href="#" className="uk-button uk-button-primary js-lightbox" styles={'white-space: nowrap'}>Open album</a></td>
                    </tr>
                    <tr>
                        <td><span uk-icon="icon: album; ratio: 2"></span></td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                        <td><a onClick={(e) => onClickAlbum(e)} href="#" className="uk-button uk-button-primary js-lightbox" styles={'white-space: nowrap'}>Open album</a></td>
                    </tr>
                    <tr>
                        <td><span uk-icon="icon: album; ratio: 2"></span></td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                        <td><a onClick={(e) => onClickAlbum(e)} href="#" className="uk-button uk-button-primary js-lightbox" styles={'white-space: nowrap'}>Open album</a></td>
                    </tr>
                    <tr>
                        <td><span uk-icon="icon: album; ratio: 2"></span></td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                        <td><a onClick={(e) => onClickAlbum(e)} href="#" className="uk-button uk-button-primary js-lightbox" styles={'white-space: nowrap'}>Open album</a></td>
                    </tr>
                </tbody>
            </table>
}