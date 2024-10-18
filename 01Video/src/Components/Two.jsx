import React, { useEffect, useState } from 'react'

const Two = () => {
    const [val, setVal] = useState(0);
    useEffect(() => {
        alert(val);
        document.title = 'Insta video'
    }, [val])
    return (
        <>
            <div className="full">
                <input
                    type="number"
                    placeholder='Enter Number'
                    value={val}
                    onChange={(e) => {
                        setVal(e.target.value)
                    }}
                />
            </div>
        </>
    )
}

export default Two