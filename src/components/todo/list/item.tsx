import React from 'react';
import {Checkbox, Button, Typography} from 'antd';
import itemStyle from "./item.module.css"

function Item() {
    return (
        <div className={itemStyle.item}>
            <Checkbox/>
            <div className={itemStyle.divParagraph}>
                <Typography>你好呀</Typography>
            </div>
            <Button type="primary">Primary Button</Button>
        </div>
    );
}

export default Item;
