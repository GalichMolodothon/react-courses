import React from 'react'
import UIkit from 'uikit'



export function Album(props) {

    function onClickAlbum(event, albumId) {
        props.onClickGetPhoto(albumId);
        event.preventDefault();
        let photoArray = [];
        // if (props.albumPhotos.length > 0) {
        //     props.albumPhotos.map((value) => {
        //         photoArray.push({source:`${value.url}.jpg`, caption:value.title})
        //     });
        //     console.log(photoArray);
        // }
        if (props.albumPhotos.length > 0) {
            props.albumPhotos.map((value) => {
                photoArray.push({source:`${value.url}.jpg`, caption:value.title})
            });
            UIkit.lightboxPanel({
                items: photoArray
            }).show();
        }
        // UIkit.lightboxPanel({
        //     items: [
        //         {source: 'https://getuikit.com/assets/uikit/tests/images/size1.jpg', caption: 'Caption 1'},
        //         {source: 'https://getuikit.com/assets/uikit/tests/images/size2.jpg', caption: 'Caption 2'},
        //     ]
        // }).show();
    }
    return <table className="uk-table uk-table-justify uk-table-divider">
                <tbody>
                    {props.albums.map ((value) => {
                            return (
                                <tr key={value.id}>
                                    <td>
                                        <span uk-icon="icon: album; ratio: 2"></span>
                                    </td>
                                    <td>
                                        {value.title}
                                    </td>
                                    <td>
                                        <a onClick={(e) => onClickAlbum(e, value.id)} href="#" className="uk-button uk-button-primary js-lightbox" styles={'white-space: nowrap'}>
                                            Open album
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
}