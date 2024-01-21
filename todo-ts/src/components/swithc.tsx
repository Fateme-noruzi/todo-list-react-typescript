import React from 'react'
import { Switch } from '@headlessui/react'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'

type Prop = { enabled: boolean, setEnabled: () => void }

const SwitchInput: React.FC<Prop> = ({ enabled, setEnabled }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const changeFilter = React.useCallback(
        () => dispatch(setEnabled()),
        [dispatch, setEnabled]
    )
    return (
        <div className=" flex">
            <h3 className='w-full'>

                Filter to Show Completed item:
            </h3>
            <Switch
                checked={enabled}
                onChange={() => changeFilter()}
                className={`${!enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span
                    aria-hidden="true"
                    className={`${!enabled ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    )
}

export default SwitchInput