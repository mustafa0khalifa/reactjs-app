/**
 * Created by WebStorm
 * Author: Ahmed Marwan
 * Date: 5/23/2020
 * Time: 5:10 PM
 */
import React from "react";
import {Col} from "reactstrap"

function Loading() {
    return (
        <Col>
            <span className="fa fa-spinner fa-plus fa-3x fa-fw text-primary"/>
            <p>Loading . . .</p>
        </Col>
    );
}

export default Loading;