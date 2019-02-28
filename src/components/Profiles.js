import React, { Component } from 'react';
import {
    CardDeck
} from 'react-bootstrap';
import { Profile } from '../components';

const profiles = [
    {
        name: "Wade Wilson",
        description: "Wade is a 32 year old UI/UX designer, with an impressive portfolio behind him.",
        designation: "UI/UX designer",
        type: "Epic Coders",
        available: true,
        rate: 55,
        tags: ["UI", "UX", "photoshop", "PHP", "android", "ios", "HTML"],
        image: require('../assets/images/user1.jpg')
    },
    {
        name: "Wade Wilson",
        description: "Wade is a 32 year old UI/UX designer, with an impressive portfolio behind him.",
        designation: "UI/UX designer",
        type: "Epic Coders",
        available: true,
        rate: 55,
        tags: ["UI", "UX", "photoshop", "PHP", "android", "ios", "HTML"],
        image: require('../assets/images/user1.jpg')
    },
    {
        name: "Wade Wilson",
        description: "Wade is a 32 year old UI/UX designer, with an impressive portfolio behind him.",
        designation: "UI/UX designer",
        type: "Epic Coders",
        available: true,
        rate: 55,
        tags: ["UI", "UX", "photoshop", "PHP", "android", "ios", "HTML"],
        image: require('../assets/images/user1.jpg')
    }
];

export default class Profiles extends Component {
    render() {
        return(
            <CardDeck>
                {profiles.map((profile, key) => <Profile {...profile} />)}
            </CardDeck>
        )
    }
}