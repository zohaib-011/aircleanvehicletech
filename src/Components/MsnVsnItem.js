import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MsnVsnItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }

    toggleExpand = () => {
        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded
        }));
    }

    render() {
        const { clas, title, description, width } = this.props;
        const { isExpanded } = this.state;
        const maxLength = 100; // Set the max length for description

        return (
            <div className={clas} style={{ width: width }}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {isExpanded ? description : `${description.substring(0, maxLength)}${description.length > maxLength ? '...' : ''}`}
                        </p>
                        {description.length > maxLength && (
                            <Link to="" onClick={this.toggleExpand} className="btn btn-primary">
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

 

export default MsnVsnItem;