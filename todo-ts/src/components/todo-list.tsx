import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { sortItems } from "../redux/todo/actions";
import { TodoState } from "../models/type-todo";
import { Todo } from "./todo";
import Item from '../models/Item';

export const TodoList = () => {
    const [resultList, setResultList] = useState<Item[]>([])
    const dispatch: Dispatch<any> = useDispatch()

    const dragItem = React.useRef<number>(0)
    const draggedOverItem = React.useRef<number>(0)
    const items: Item[] = useSelector(
        (state: TodoState) => state.items,
        shallowEqual
    )
    const enabledFilter: boolean = useSelector(
        (state: TodoState) => state.enabledFilter,
        shallowEqual
    )
    const setSortedItems = React.useCallback(
        (items: Item[]) => dispatch(sortItems(items)),
        [dispatch]
    )
    function handleSort() {
        const itemsClone: Item[] = [...items]
        const temp = itemsClone[dragItem.current]
        itemsClone[dragItem.current] = itemsClone[draggedOverItem.current]
        itemsClone[draggedOverItem.current] = temp
        setSortedItems(itemsClone)

    }

    useEffect(() => {
        const result = () => {
            if (enabledFilter) return items.filter(item => item.completed);
            return items
        }
        setResultList(result)
    }, [enabledFilter, items])
    return (
        <>
            {
                resultList.length ? resultList.map((item: Item, index: number) => (
                    <Todo
                        key={item.id}
                        index={index}
                        item={item}
                        handleSort={handleSort}
                        dragItem={dragItem}
                        draggedOverItem={draggedOverItem}
                    />
                )) : <div className="flex justify-center mt-4"><img src={require('../images/nodata.png')} alt="no-Data" /></div>
            }
        </>
    );
};
