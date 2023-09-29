interface Figure{
    setId(id: number): void;
    setPosX(x: number): void;
    setPosY(y: number): void;
    setSize(size: number): void;
    setBorderColor(color: string): void;
    select(): void;
    unselect(): void;

    getId(): number;
    getPosX(): number;
    getPosY(): number;
    getSize(): number;
    getBorderColor(): string;
    getSelectCondition(): boolean;
    
    setShape(shape: Form): void;
    setInnerColor(color: string): void;
    setWidth(width: number): void;
    setHeight(height: number): void;
    
    getShape(): Form;
    getInnerColor(): string;
    getWidth(): number;
    getHeight(): number;
}