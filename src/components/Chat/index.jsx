import REACT,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import reduser from '..reduser';
const data = {
    users:[
        {
            id:1,
            name:'Tom Fox',
        },
        {
            id:2,
            name:'John Smith',
        },
        {
            id:3,
            name:'Ivan Ivanov',
        },
    ],
    messages:[
        {
            userId:1,
            body:'some text'
        },
        {
            userId:2,
            body:'some text'
        },
        {
            userId:1,
            body:'some text'
        },
        {
            userId:1,
            body:'some text'
        },
        {
            userId:2,
            body:'some text'
        },
    ]
}