import React from "react";
import { toast } from "react-toastify";

export default class ErrorBoundary extends React.Component {
    constructor (props){
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error){
        toast.error('ooops! Ha ocurrido el siguiente error: '+ error, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: 'Slide',
            });
    }

    render() {
        if(this.state.hasError){
            return <h1>Ha ocurrido un error</h1>
        }
        return this.props.children
    }

}