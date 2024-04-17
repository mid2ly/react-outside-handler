# react-outside-handler

[![NPM License](https://img.shields.io/npm/l/react-outside-handler)](https://github.com/mid2ly/react-outside-handler/blob/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/react-outside-handler)](https://www.npmjs.com/package/react-outside-handler)

React library for detecting events outside of element

# Installation

```
npm i react-outside-handler
```

# Usage

```typescript jsx
import {useOutsideHandler} from "react-outside-handler";

export const OutsideHandler = () => {
    const { ref } = useOutsideHandler("click", () => {
        // event code
    })

    return <div>
        {/* Internal elements including this element do not execute 'event code' when click */}
        <div ref={ref}>
            <p>Element</p>
        </div>

        {/* Click on this element will execute 'event code' */}
        <button>Outside Element</button>
    </div>
}
```
