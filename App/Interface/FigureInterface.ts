interface SlideElement{
    setShape(shape: Form): void;
    setInnerColor(color: string): void;
    setWidth(width: number): void;
    setHeight(height: number): void;
    
    getShape(): Form;
    getInnerColor(): string;
    getWidth(): number;
    getHeight(): number;
}