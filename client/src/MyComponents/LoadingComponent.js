import React from 'react';

const Loading=()=>{
    return(
        <div className="col-12 justify-content-center">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></i>
            <p>Loading . . .</p>
        </div>
    );
}

export default Loading;