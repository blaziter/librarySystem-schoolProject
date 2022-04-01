import React, { useState, useEffect } from 'react';

const TestBackend = (props) => {
    const [apiRes, setApiRes] = useState();

    useEffect(() => {
        callAPI();
    });
    
    const callAPI = () => {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => setApiRes(res));
    }

    return (
        <>
            {apiRes}
        </>
    );
}

export default TestBackend;