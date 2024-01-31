import React from "react";
import { useNavigate } from "react-router-dom";

export default class ErrorBoundary extends React.Component {
    constructor (props){
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error){

        return {hasError: true}
    }

    render() {
        if(this.state.hasError){
            return <div style={{
                display: 'flex',
                boxSizing: 'border-box',
                padding: '0 15%',
                width: '100%',
                justifyContent: 'center'
            }}>
            <h1>Ha ocurrido un error</h1>
            <a href='/'>ir a Home</a>
            </div>
        }
        return this.props.children
    }

}