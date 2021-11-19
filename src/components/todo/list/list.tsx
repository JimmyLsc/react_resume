import React, {useState} from 'react';
import Item from './item'

function List() {
    const [itemList, setItemList] = useState(["hello", "hello2", "hello3"])
    const onButtonClick: (event: React.MouseEvent<HTMLButtonElement>, index: number) => void = (event, index) => {
        const newItemList = itemList.slice(0, index).concat(itemList.slice(index + 1, itemList.length))
        setItemList(newItemList)
    }
    return (
        <div>
            {itemList.map((v: string, index: number) =>
                <Item content={v}
                      onButtonClick={(event: React.MouseEvent<HTMLButtonElement>) => onButtonClick(event, index)}
                      key={v}
                />)}
        </div>
    );
}

export default List;
