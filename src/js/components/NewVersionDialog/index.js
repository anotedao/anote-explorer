import React from 'react';
import { isDialogEnabled, setRedirectCookie } from './helpers'

export class NewVersionDialog extends React.Component {

    onClickNewVersion() {
        setRedirectCookie();
        window.location.reload();
    }

    render() {

        if (!isDialogEnabled()) {
            return null;
        }

        return (
            <div></div>
        )
    }
}
