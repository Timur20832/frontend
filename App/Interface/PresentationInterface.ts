interface Presentation
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

    setName(name: string): void;
    setSlides(slides: Array<Slide>): void;
    setHistory(history: Array<Presentation>): void;
    setHistoryIndex(historyIndex: number): void;

    getName(): string;
    getSlides(): Array<Slide>;
    getHistory(): Array<Presentation>;
    getHistoryIndex(): number;
}