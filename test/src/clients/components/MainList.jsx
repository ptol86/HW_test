import React from 'react';
import ClientsList from './ClientsList';
import CreateClientInput from "./CreateClientInput";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as ClientsActions from "../clients.actions";
import { clientsListSelector, meowFactsSelector } from "../clients.selectors"

class MainList extends React.Component {
    componentDidMount() {
        this.props.getClientsList();
        this.props.getMeowFacts();
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.clients)
        return this.props.clients != nextProps.clients;
    }
    render () {
        return (
            <>
            <h1 className="title">Clients  List</h1>
            <main className="clients-list">
                <CreateClientInput getClientsList={this.props.getClientsList}/>
                <ClientsList
                    clients={this.props.clients}
                    meowFact={this.props.meowFacts}
                />
            </main>  
            </> 
        );
    }
}

MainList.propTypes = {
    clients: PropTypes.arrayOf(PropTypes.shape()),
    getClientsList: PropTypes.func.isRequired,
    createClient: PropTypes.func.isRequired,
}
const mapState = state => {
    return {
        clients: clientsListSelector(state),
        meowFacts: meowFactsSelector(state)
    }
}

const mapDispatch = {
    getClientsList: ClientsActions.getClientsList,
    createClient: ClientsActions.createClient,
    getMeowFacts: ClientsActions.getMeowFacts,
}

export default connect(mapState, mapDispatch)(MainList);