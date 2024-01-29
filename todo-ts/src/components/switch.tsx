import React from "react";
import { Switch } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

type Prop = { enabled: boolean; setEnabled: () => void };

export const SwitchInput: React.FC<Prop> = ({ enabled, setEnabled }) => {
    const dispatch: Dispatch<any> = useDispatch();

    const changeFilter = React.useCallback(
        () => dispatch(setEnabled()),
        [dispatch, setEnabled]
    );
    return (
        <div className=" flex">
            <h3 className="w-full">Filter to Show Completed item:</h3>
            <Switch
                checked={enabled}
                onChange={() => changeFilter()}
                className={`${!enabled ? "bg-teal-900" : "bg-teal-700"} switch`}
            >
                <span
                    aria-hidden="true"
                    className={`${!enabled ? "translate-x-7" : "translate-x-0"} switch-toggle`}
                />
            </Switch>
        </div>
    );
};
