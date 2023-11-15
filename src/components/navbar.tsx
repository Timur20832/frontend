





export function Navbar() {
    return (
        <div className="navbar">
            <img className="icon" src={require("../img/icon.png")} alt="" />
            <div className="info">
                <div className="info__presentation">
                    <input className="presentation__name" type="text" placeholder="Presentation name" />
                </div>
                <div className="info__main">
                    <div className="info__menubar">
                        <button className="button__style" >Download fail</button>
                        <button className="button__style">Noname</button>
                        <button className="button__style">Noname</button>
                        <button className="button__style">Noname</button>
                    </div>
                    <div className="info__tools">
                        <button className="button__tools-style"><img className="icon__tools-style" src={require("../img/shapetext.png")} alt="" /></button>
                        <span className="border__indent"></span>
                        <button className="button__tools-style"><img className="icon__tools-style" src={require("../img/shapecircle.png")} alt="" /></button>
                        <span className="border__indent"></span>
                        <button className="button__tools-style"><img className="icon__tools-style" src={require("../img/shapesquare.png")} alt="" /></button>
                        <span className="border__indent"></span>
                        <button className="button__tools-style"><img className="icon__tools-style" src={require("../img/shapetriangle.png")} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}