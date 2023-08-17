import React from 'react';
const member = props => {
    return (
        <div>
            <h1>Member {props.match.params.id || "Who"}</h1>
            <p>Member page body content</p>
        </div>
    );
}
export default member;