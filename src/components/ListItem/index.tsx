import { useState } from 'react';
import { Item } from '../../types/Item';
import * as C from './styles'

type Props = {
    item: Item;
    onChange: (id: number, done: boolean) => void
}

export const ListItem = ({item, onChange }: Props) => {
    // const [isChecked, setIsChecked] = useState(item.done)

    return(
        <C.Container done={item.done}>
            <input 
                type="checkbox" checked={item.done}
                onChange={(e) => onChange(item.id, e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
    )
}