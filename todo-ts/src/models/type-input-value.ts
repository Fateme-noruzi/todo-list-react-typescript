import Item from "./Item"

export type InputValueAction = {
    type: string,
    item: Item
}

export type DispatchType = (args: InputValueAction) => InputValueAction