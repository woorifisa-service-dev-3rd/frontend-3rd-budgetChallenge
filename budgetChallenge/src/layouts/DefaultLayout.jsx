import React from 'react'

const DefaultLayout = ({ children }) => {
    return (
        <div className="w-full h-full overflow-y-scroll">
            <div className="max-w-6xl mx-auto min-w-[20rem]">
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout