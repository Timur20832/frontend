import { ShowSlide } from "./slide"
import { ShowSlider } from "./slide"
import { presentation } from "../data/consts"

export function Editor() {
    return (
        <div className="editor">
            <div className="slider">
                {ShowSlider(presentation)}
            </div>
            <div className="main-slaid">
                {ShowSlide(presentation)}
            </div>
        </div>
    )
}