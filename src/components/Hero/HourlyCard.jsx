import React from 'react'
import IconPartlyCloudy from '../../assets/images/icon-partly-cloudy.webp'

const HourlyCard = ({ time, temperature }) => {
  return (
    <div className="bg-(--color-neutral-600) rounded-xl w-full border border-(--color-neutral-300)">
        <div className="flex flex-row items-center justify-between p-4">
            <div className="flex flex-row items-center gap-2">
                <img src={IconPartlyCloudy} className="h-10 w-10" />
                <h1 className="text-white">{time}</h1>
            </div>

            <p className="text-white">{temperature}</p>
        </div>
    </div>
  )
}

export default HourlyCard