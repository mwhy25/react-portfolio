import { Button } from '@material-ui/core';
import React from 'react'


function CustomBtn(props) {
    return (
        <Button color="primary" variant="contained">{ props.txt }</Button>
    )
}
export default CustomBtn;
