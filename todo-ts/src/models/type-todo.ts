import Item from "./Item"

export interface TodoAction {
    type: string,
}

export interface TodoActionWithItem extends TodoAction {
    item: Item,
}

export interface TodoActionWithItems extends TodoAction {
    items: Item[]
}

export interface TodoAllAction extends TodoAction {
    item?: Item,
    items?: Item[]

}

export type TodoState = {
    items: Item[],
    selectedItem: Item,
    enabledFilter: boolean
}



export type DispatchType = (args: TodoAction) => TodoAction