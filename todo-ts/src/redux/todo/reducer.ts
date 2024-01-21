import Item from '../../models/Item';
import { TodoAllAction, TodoState } from '../../models/type-todo';
import * as actionTypes from './types'
const initialState: TodoState = {
    items: [
    ],
    selectedItem: {},
    enabledFilter: false
}

const reducer = (state: TodoState = initialState, action: TodoAllAction): TodoState => {
    switch (action.type) {

        case actionTypes.UPDATE_ITEM:
            const newItems: Item[] = state.items.map(
                item => ((item.id == action?.item?.id) ? { ...item, title: action?.item?.title } : item)
            )
            return {
                ...state,
                items: newItems,
                selectedItem: {}
            }

        case actionTypes.INSERT_ITEM:

            const newItem: Item = {
                id: Math.random(), // not really unique
                title: action?.item?.title,
                completed: false,
            }
            return {
                ...state,
                items: state.items.concat(newItem),
            }



        case actionTypes.REMOVE_ITEM:
            const updatedArticles: Item[] = state.items.filter(
                item => item.id !== action?.item?.id
            )
            return {
                ...state,
                items: updatedArticles,
            }

        case actionTypes.SELECT_ITEM:
            return {
                ...state,
                selectedItem: action.item || {},
            }

        case actionTypes.RESET_SELECT_ITEM:
            return {
                ...state,
                selectedItem: initialState.selectedItem,
            }

        case actionTypes.TOGGLE_ITEM:
            const listITems: Item[] = state.items.map(
                item => ((item.id == action?.item?.id) ? { ...item, completed: !action?.item?.completed } : item)
            )
            return {
                ...state,
                items: listITems,
            }

        case actionTypes.ACTIVE_FILTER:
            return {
                ...state,
                enabledFilter: !state.enabledFilter,
            }

        case actionTypes.SET_SORTED_LIST:
            return {
                ...state,
                items: action.items || []
            }


        default:
            return state;


    }
}
export default reducer