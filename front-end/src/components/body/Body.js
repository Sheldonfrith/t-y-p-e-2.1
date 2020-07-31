import React from 'react';
import BodyTabViewArea from './BodyTabViewArea';
import QueryTester from '../presentational/query-tester/QueryTester';

export default function Body() {
    return (
        <React.Fragment>
            <BodyTabViewArea/>
            <QueryTester/>
        </React.Fragment>

    );
}