import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <div>{average(props.data)} {props.unit}</div>       
        </div>    
    );
    
}

function average(data) {
    if (data.length === 0) return 0;

    // var mean = data.reduce((a, b) => a + b, 0);
    // mean = mean / data.length;

    return _.round(_.sum(data) / data.length);
}