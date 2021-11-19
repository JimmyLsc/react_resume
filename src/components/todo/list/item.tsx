import React from 'react';
import {Checkbox, Button, Typography} from 'antd';
import "./item.css"

interface ItemPropsInterface {
    content: string
    onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Item(props: ItemPropsInterface) {
    return (
        <div className={"item"}>
            <Checkbox/>
            <div className={"item-paragraph"}>
                <Typography>{props.content}</Typography>
            </div>
            <Button className={"item-button"} type="default" onClick={props.onButtonClick}>Delete</Button>
        </div>
    );
}

export default Item;
