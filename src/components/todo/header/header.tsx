import React from 'react';
import {Input, Divider} from 'antd';
import headerStyle from "../list/item.module.css"

function Header() {
    return (
        <div className={headerStyle.header}>
            <Input/>
            <Divider />
        </div>
    );
}

export default Header;
