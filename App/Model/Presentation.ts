class Presentation{
    private name: string;
    private slides: Array<Slide>;
    private history: Array<Presentation>;
    private historyIndex: number;

    public setName(name: string): void
    {
        this.name = name;
    }

    public setSlides(slides: Array<Slide>): void
    {
        this.slides = slides;
    }

    public setHistory(history: Array<Presentation>): void
    {
        this.history = history;
    }

    public setHistoryIndex(historyIndex: number): void
    {
        this.historyIndex = historyIndex;
    }

    public getName(): string
    {
       return this.name;
    }

    public getSlides(): Array<Slide>
    {
        return this.slides;
    }

    public getHistory(): Array<Presentation>
    {
        return this.history
    }

    public getHistoryIndex(): number
    {
        return this.historyIndex;
    }

}