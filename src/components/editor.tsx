import { ShowSlide } from "./slide"
import { presentation } from "../data/consts"

export function Editor() {
    return (
        <div className="editor">
            <div className="slider">
                {ShowSlide(presentation)}
            </div>
            <div className="main-slaid">
            </div>
        </div>
    )
}