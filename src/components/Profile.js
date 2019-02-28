import React from 'react';
import {
    Col,
    Card,
    Row
} from 'react-bootstrap';
import { Tag } from '../components';

const Profile = (props) => {
    const { 
        available = false, 
        rate = 0, 
        image = '',
        name = '',
        description = '',
        designation= '',
        type = '',
        tags = []
    } = props;

    const renderTags = () => {
        let html = [];
        for(let i=0; i<=2; i++)
            html.push(<Tag key={i} title={tags[i]} />);

        if(tags.length>3)
            html.push(<Tag key={html.length+1} count title={`+${tags.length-html.length}`} />);

        return html;
    }

    return(
        <Col xs={12} sm={4}>
            <Row>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xs={12}>
                                <Row>
                                    <Col xs={12} className="text-center">
                                        {available?<span className="available float-left">available</span>:null}
                                        <img src={image} />
                                        <h3 className="float-right">${rate}/hr</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="text-center">
                                        <h4 className="profile-name">{name}</h4>
                                        <p className="designation">{designation}</p>
                                        <p className="type">{type}</p>
                                        <p className="tags">
                                            {renderTags()}
                                        </p>
                                        <p className="description">{description}</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                    <p className="view-profile text-center">
                        <a href="javascript:void(0);">VIEW PROFILE</a>
                    </p>
                </Card>
            </Row>
        </Col>
    )
}

export default Profile;