class SlideElement implements SlideElementInterface {
    private id: number;
    private posX: number;
    private posY: number;
    private size: number;
    private borderColor: string;
    private isSelected: boolean;

    public getId(): number
    {
        return this.id;
    }

    public getPosX(): number
    {
        return this.posX;
    }

    public getPosY(): number
    {
        return this.posY;
    }

    public getSize(): number
    {
        return this.size;
    }

    public getBorderColor(): string
    {
        return this.borderColor;
    }

    public getSelectCondition(): boolean
    {
        return this.isSelected;
    }

    public setId(id: number): void
    {
        this.id = id;
    }

    public setPosX(x: number): void
    {
        this.posX = x;
    }

    public setPosY(y: number): void
    {
        this.posY = y;
    }

    public setSize(size: number): void
    {
        this.size = size;
    }

    public setBorderColor(color: string): void
    {
        this.borderColor = color;
    }

    public select(): void
    {
        this.isSelected = true;
    }

    public unselect(): void
    {
        this.isSelected = false;
    }
}