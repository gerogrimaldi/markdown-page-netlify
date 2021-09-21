import React, { Component } from 'react';
// import ReactMarkdown from 'react-markdown';
import '../assets/css/markdown.css';
import initialMarkdown from './initialMarkdown.jsx';
import Badge from "react-bootstrap/Badge"
let marked = require("marked");

marked.setOptions({
    breaks: true
})

class Markdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
        }
    }     onChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    componentWillMount() {
        this.setState({
            input: initialMarkdown
        })
    }
    render() {
        // const markdown = this.state.input
        const markdown = marked(this.state.input)
        return (
            <div className="container mt-3">
                <h2>Markdown App</h2>
                <div className="row mt-4">
                    <div className="col text-center">
                        <h1>
                            {" "}
                            <Badge className="text-align-center" variant="light">
                                Markdown Previewer
                            </Badge>
                        </h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col col-md-6">
                        <div className="col text-center">
                            <h4>
                                <Badge className="text-align-center" variant="secondary">
                                    Markdown Input
                                </Badge>
                            </h4>
                        </div>
                        <textarea
                            id="editor"
                            className="input-container mark-input"
                            placeholder="Post body..."
                            type="text"
                            rows={10}
                            onChange={this.onChange}
                            value={this.state.input}
                        />
                    </div>
                    <div className="col col-md-6">
                        <div className="col text-center">
                            <h4>
                                <Badge className="text-align-center" variant="secondary">
                                    Preview
                                </Badge>
                            </h4>
                        </div>
                        <div
                            id="preview"
                            className="markdown-container"
                            dangerouslySetInnerHTML={{ __html: markdown }}
                        >
                        </div>
                    </div>
                </div>
                {/* react markdown library */}
                {/* <div id="preview" className="row mt-4 justify-content-center">
                    <Badge className="text-align-center" variant="secondary">Preview</Badge>
                    <div className="col col-sm-8 col-lg-8">
                        <div className="card markdown-container">
                            <div className="card-body">
                                <ReactMarkdown
                                    className="markdown-preview"
                                >{markdown}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Markdown;
