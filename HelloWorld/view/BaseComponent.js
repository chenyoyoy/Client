/**
 * Created by chenyou on 2019/1/25.
 */
import React, {Component} from 'react'

export default class BaseComponent extends Component {

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.printLifeCycle("constructor");
    }

    render() {
        this.printLifeCycle("render");
    }

    componentWillMount() {
        this.printLifeCycle("componentWillMount");
    }

    componentDidMount() {
        this.printLifeCycle("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        this.printLifeCycle("componentWillReceiveProps"+nextProps.toString());
    }

    shouldComponentUpdate() {
        this.printLifeCycle("shouldComponentUpdate");
        return true;
    }

    componentWillUpdate() {
        this.printLifeCycle("componentWillUpdate");
    }

    componentDidUpdate() {
        this.printLifeCycle("componentDidUpdate");
    }

    componentWillUnmount() {
        this.printLifeCycle("componentWillUnmount");
    }

    printLifeCycle(name) {
        console.log(this.getTag() + ":" + name);
    }


    getTag(){
        return "BaseComponent" ;
    }

}