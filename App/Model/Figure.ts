enum Form 
{
    "triangle",
    "circle",
    "square"
}

class Figure extends SlideElement
{
    private shape: Form;
    private innerColor: string;
    private width: number;
    private height: number;

    public setShape(shape: Form): void
    {
        this.shape = shape;
    }

    public setInnerColor(color: string): void
    {
        this.innerColor = color;
    }

    public setWidth(width: number): void
    {
        this.width = width;
    }

    public setHeight(height: number): void
    {
        this.height = height;
    }

    public getShape(): Form
    {
        return this.shape
    }

    public getInnerColor(): string
    {
        return this.innerColor;
    }

    public getWidth(): number
    {
        return this.width;
    }

    public getHeight(): number
    {
        return this.height;
    }
}