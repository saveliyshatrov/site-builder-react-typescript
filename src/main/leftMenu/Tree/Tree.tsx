import React, {Component} from "react";
import './style.css';

class Tree extends Component<any, any> {
    render() {
        return (
            <div className={"Tree"}>
                <ul>
                    <li>
                        <div className={"tree-elem"}>Page</div>
                        <ul>
                            <li>
                                <div className={"tree-elem"}>Header</div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div className={"tree-elem"}>Body</div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div className={"tree-elem"}>Footer</div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Tree;