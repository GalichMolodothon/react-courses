import React from 'react'
import UIkit from 'uikit'
import { getData } from "../../../api";

export function Album(props) {

    function onClickAlbum(event, albumId) {
        event.preventDefault();
        getData('/photos', {
            params: {
                albumId: albumId
            }
        })
        .then(data => {
            const photos = data.json;
            UIkit.lightboxPanel({
                items:photos.map((photo, index) => {
                    return {
                        source: `${photo.url}.jpg`,
                        caption: `${index} - ${photo.title}`
                    }
                })

            }).show();
        });
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
                                        <button onClick={(e) => onClickAlbum(e, value.id)} className="uk-button uk-button-primary js-lightbox" styles={'white-space: nowrap'}>
                                            Open album
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
}
