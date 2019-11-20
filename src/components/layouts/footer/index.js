import React, {Component} from 'react';

class FooterLayout extends Component {

    render() {
        return (
            <>
                <footer id="page-footer" className="content-mini content-mini-full font-s12 bg-gray-lighter clearfix">
                    <div className="pull-left">
                        Copyright © 2019 Company Inc. All rights reserved.
                    </div>
                </footer>
            </>
        )
    }
}

export {FooterLayout};