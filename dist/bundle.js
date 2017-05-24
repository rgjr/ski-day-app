'use strict';

var _React = React,
    createElement = _React.createElement;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
    'h1',
    { id: 'title',
        className: 'header',
        style: { backgroundColor: 'orange', color: 'white', fontFamily: 'verdana' } },
    'Hello World'
), document.getElementById('react-container'));
