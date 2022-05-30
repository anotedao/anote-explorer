import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import EventBuilder from './shared/analytics/EventBuilder';
import ServiceFactory from './services/ServiceFactory';
import ConfigurationForm from './ConfigurationForm';

const Network = ({networkId, displayName, onSwitchNetwork}) => {
    return <div onClick={() => onSwitchNetwork(networkId)}>{displayName}</div>;
};

const extractEditableConfiguration = configuration => (
    (({apiBaseUrl}) => ({apiBaseUrl}))(configuration)
);

const NetworkShape = PropTypes.shape({
    networkId: PropTypes.string,
    displayName: PropTypes.string,
    url: PropTypes.string,
    apiBaseUrl: PropTypes.string,
    spamListUrl: PropTypes.string
});

export default class NetworkSwitch extends React.PureComponent {
    static propTypes = {
        current: NetworkShape.isRequired,
        networks: PropTypes.arrayOf(NetworkShape).isRequired,
        custom: NetworkShape,
        onSwitchNetwork: PropTypes.func,
        onUpdateCustomNetwork: PropTypes.func
    };

    static defaultProps = {
        onSwitchNetwork: () => {},
        onUpdateCustomNetwork: () => {}
    };

    state = {
        showNetworks: false,
        showModal: false
    };

    toggleModal = () => {
        const showModal = !this.state.showModal;
        if (showModal) {
            const event = new EventBuilder().settings().events().show().build();
            ServiceFactory.global().analyticsService().sendEvent(event);
        }

        this.setState({showModal});
    };

    toggleNetworks = () => {
        this.setState({showNetworks: !this.state.showNetworks});
    };

    switchNetwork = (networkId) => {
        this.setState({showNetworks: false});

        this.props.onSwitchNetwork(networkId);
    };

    render() {
        const {current, networks} = this.props;
        const listClassName = 'network-list' + (this.state.showNetworks ? ' expanded' : '');

        const custom = this.props.custom || {
            apiBaseUrl: ''
        };
        const configuration = extractEditableConfiguration(custom);

        return (
            <div></div>
        );
    }
}
