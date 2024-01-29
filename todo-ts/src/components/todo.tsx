
import * as React from 'react';
import Item from '../models/Item';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { addInputValue, addItem, editItem, removeItem, toggleFilter, toggleItem } from '../redux/todo/actions';


type Props = {
    item: Item,
    index: number,
    handleSort: () => void,
    dragItem: React.MutableRefObject<number>,
    draggedOverItem: React.MutableRefObject<number>,

};
export const Todo: React.FC<Props> = ({ item, index, handleSort, dragItem, draggedOverItem }) => {
    const dispatch: Dispatch<any> = useDispatch()
    const deleteItem = React.useCallback((item: Item) => dispatch(removeItem(item)), [dispatch, removeItem])
    const updateValue = React.useCallback((item: Item) => dispatch(addInputValue(item)), [dispatch, addInputValue])
    const checkedItem = React.useCallback((item: Item) => dispatch(toggleItem(item)), [dispatch, toggleItem])


    return (

        <div draggable onDragStart={() => (dragItem.current = index)} onDragEnter={() => (draggedOverItem.current = index)} onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault}>
            <div className="todo-box">
                <div className="flex my-2">
                    <input type="checkbox" id={item.id?.toString()} value={item.id} checked={item.completed} onClick={() => checkedItem(item)} className='ml-4 mr-2 ' />
                    <p className={`w-full text-grey-darkest ${item.completed && 'line-through'}`}>{item.title}</p>
                </div>

                <div className='flex flex-row-reverse'>

                    <button onClick={() => deleteItem(item)} className="btn-outLine btn-default">Delete</button>
                    <button onClick={() => updateValue(item)} className="btn-outLine btn-alert">Edit</button>
                </div>

            </div>
        </div>
    );
};