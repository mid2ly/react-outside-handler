import {useState} from "react";
import {useOutsideHandler} from "./index";

export const OutsideHandler = ({ defaultValue }: { defaultValue: boolean }) => {
    const [disable, setDisable] = useState(defaultValue)
    const { ref } = useOutsideHandler('click', () => setDisable(true))

    return <div>
        <div ref={ref}>outside</div>
        <button data-testid="button"
                disabled={disable}>
            Button
        </button>
    </div>
}
