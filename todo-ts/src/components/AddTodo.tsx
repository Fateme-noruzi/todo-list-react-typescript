
import * as React from 'react';
import Item from '../models/Item';
import { Dispatch } from 'redux';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addItem, editItem, resestSelectedItem } from '../redux/todo/actions';
import { TodoState } from '../models/type-todo';


export const AddTodo: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch()

    const selectedItem: Item = useSelector(
        (state: TodoState) => state.selectedItem,
        shallowEqual
    )

    const saveItem = React.useCallback(
        (item: Item) => dispatch(addItem(item)),
        [dispatch]
    )

    const cancelEdit = React.useCallback(() => {
        dispatch(resestSelectedItem());
        setTitle('');
    }, [dispatch])

    const updateItem = React.useCallback(
        (item: Item) => dispatch(editItem(item)),
        [dispatch]
    )
    React.useEffect(() => {
        selectedItem?.title && setTitle(selectedItem?.title)
    }, [selectedItem])

    const [title, setTitle] = React.useState<string | ''>('')
    const handlerItemData = (e: React.FormEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const addNewItem = (e: React.FormEvent) => {
        e.preventDefault()
        if (selectedItem.title) {
            updateItem({ ...selectedItem, title: title });

        } else
            saveItem({ title: title, id: Math.random(), completed: false })

        setTitle('')
    }

    return (
        <form onSubmit={addNewItem} className="Add-Item">
            {/* in edit state this button is show to can exit from this state */}
            {selectedItem.title && <div className="flex flex-row-reverse mt-4">
                <button className="btn-outLine btn-alert" accessKey='c' onClick={cancelEdit}>
                    Cancel
                </button>
            </div>}
            <div className="flex mt-4">
                <input
                    type="text"
                    id="title"
                    placeholder="Add Todo"
                    onChange={handlerItemData}
                    value={title}
                    accessKey="a"
                    className='input'
                />

                <button className={`btn-outLine  ${title === '' ? 'btn-disabled' : 'btn-default'}`} disabled={title === '' ? true : false}>
                    Save
                </button>
            </div>
        </form>
    );
};