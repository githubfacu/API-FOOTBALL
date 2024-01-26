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
            return <>
            <h1>Ha ocurrido un error</h1>
            <a href='/'>ir a Home</a>
            </>
        }
        return this.props.children
    }

}