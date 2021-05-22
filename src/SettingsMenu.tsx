import React, { ChangeEvent } from "react";
import { Button } from "./counter/Button";

export type SettingsMenuPropsType = {
    save: () => void
    max: number
    min: number
    changeSettingsMax: (number: number) => void
    changeSettingsMin: (number: number) => void
  }
  
  
 export function SettingsMenu(props: SettingsMenuPropsType) {
  
    const handleOnChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
      props.changeSettingsMax(e.currentTarget.valueAsNumber)
    }
    const handleOnChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
      props.changeSettingsMin(e.currentTarget.valueAsNumber)
    };
  
  
  
    return (
      <div className='customization'>
        <div className='maxValue'>
          Max value
        <input
            type="number"
            value={props.max}
            onChange={handleOnChangeMax}
          />
        </div>
        <div className='mixValue'>
          Mix value
        <input
            type="number"
            value={props.min}
            onChange={handleOnChangeMin}
          />
        </div>
        <div className='buttons'>
          <Button
            name={'save'}
            onClick={props.save}
            disable={props.max > 5 || props.min < 0}
          />
        </div>
      </div>
    );
  }
  