import Item from "../../models/Item";
import { InputValueAction } from "../../models/type-input-value";
import { DispatchType, TodoAction, TodoActionWithItem, TodoActionWithItems } from "../../models/type-todo";
import * as actionTypes from "./types";

export function editItem(item: Item) {
    const action: TodoActionWithItem = {
        type: actionTypes.UPDATE_ITEM,
        item,
    }

    return simulateHttpRequest(action)

}

export function toggleItem(item: Item) {
    const action: TodoActionWithItem = {
        type: actionTypes.TOGGLE_ITEM,
        item,
    }

    return simulateHttpRequest(action)

}


export function addItem(item: Item) {
    const action: TodoActionWithItem = {
        type: actionTypes.INSERT_ITEM,
        item,
    }

    return simulateHttpRequest(action)
}

export function toggleFilter() {
    const action: TodoAction = {
        type: actionTypes.ACTIVE_FILTER,
    }

    return simulateHttpRequest(action)

}

export function removeItem(item: Item) {
    const action: TodoActionWithItem = {
        type: actionTypes.REMOVE_ITEM,
        item,
    }
    return simulateHttpRequest(action)
}

export function sortItems(items: Item[]) {
    const action: TodoActionWithItems = {
        type: actionTypes.SET_SORTED_LIST,
        items: items,
    }
    return (dispatch: any) => {
        dispatch(action)
    }
}





export function addInputValue(item: Item) {
    const action: InputValueAction = {
        type: actionTypes.SELECT_ITEM,
        item,
    }

    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}

export function resestSelectedItem() {
    const action = {
        type: actionTypes.RESET_SELECT_ITEM,

    }

    return (dispatch: any) => {
        dispatch(action)
    }
}
// only for create a similar situation with request not necessary
export function simulateHttpRequest(action: TodoAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 200)
    }
}