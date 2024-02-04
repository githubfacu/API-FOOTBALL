import React from "react";
import '../Styles/ErrorBoundary.css'


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
            return <div className="boundary">
                <h1>Ha ocurrido un error</h1>
                <a href='/'>ir a Home</a>

                <img src="/Images/fotor-ai-arbitro-roja.jpg" alt="" />
            </div>
        }
        return this.props.children
    }

}