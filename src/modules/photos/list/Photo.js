import React from 'react'

export function Photo(props) {
    return <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m" data-uk-grid="masonry: true">
            {props.photos.map ((value) => {
                return (
                    <div key={value.id}>
                        <div index={value.id} className="uk-inline uk-width-1-1">
                            <img src={value.url} className="uk-width-1-1" alt=""/>
                            <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                                <p>{value.title}</p>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>
}