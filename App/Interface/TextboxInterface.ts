interface Textbox
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

    setContent(content: string): void;
    setFont(font: string): void;

    getContent(): string;
    getFont(): string;
}