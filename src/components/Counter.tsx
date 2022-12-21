import type { FC} from 'react';
import React, { useCallback } from 'react';
import { observer } from "mobx-react";

import { timer } from '../data/timer';

const Counter: FC = () => {
    const handleIncrease = useCallback(() => {
        timer.increaseTimer();
    }, [timer]);

    const handleDecrease = useCallback(() => {
        timer.decreaseTimer();
    }, [timer]);

    return (
        <div>
            <button className="bg-slate-400 py-2 px-3 mr-3 rounded-md" onClick={handleIncrease}>
                +
            </button>
            <span>{timer.secondsPassed}</span>
            <button className="bg-slate-400 py-2 px-3 ml-3 rounded-md" onClick={handleDecrease}>
                -
            </button>
        </div>
    );
};

export default observer(Counter);
