import React from 'react'

export function Photo(props) {
    return <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m" data-uk-grid="masonry: true">
            <div>
                <div className="uk-inline uk-width-1-1">
                    <img src="https://picsum.photos/600/400" className="uk-width-1-1" alt=""/>
                    <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                        <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="uk-inline uk-width-1-1">
                    <img src="https://picsum.photos/600/300" className="uk-width-1-1" alt=""/>
                    <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                        <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="uk-inline uk-width-1-1">
                    <img src="https://picsum.photos/400/400" className="uk-width-1-1" alt=""/>
                    <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                        <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="uk-inline uk-width-1-1">
                    <img src="https://picsum.photos/300/200" className="uk-width-1-1" alt=""/>
                    <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                        <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="uk-inline uk-width-1-1">
                    <img src="https://picsum.photos/300/500" className="uk-width-1-1" alt=""/>
                    <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                        <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="uk-inline uk-width-1-1">
                    <img src="https://picsum.photos/500/600" className="uk-width-1-1" alt=""/>
                    <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                        <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
}