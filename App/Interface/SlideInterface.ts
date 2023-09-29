interface SlideElement
{
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
    
    setId(id: number): void;
    setElements(elements: Array<SlideElement>): void;
    setNumber(number: number): void;
    setBackgroundColor(color: string): void;

    getId(): number;
    getElements(): Array<SlideElement>;
    getNumber(): number;
    getBackgroundColor(): string;
}