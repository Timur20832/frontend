// class Slide{
//     private id: number;
//     private elements: Array<Figure | Picture | TextBox>;
//     private numberOfSlide: number;
//     private backgroundColor: string;

//     public setId(id: number): void{
//         this.id = id;
//     }

//     public setElements(elements: Array<Figure | Picture | TextBox>): void
//     {
//         this.elements = elements;
//     }

//     public setNumber(number: number): void
//     {
//         this.numberOfSlide = number;
//     }

//     public setBackgroundColor(color: string): void
//     {
//         this.backgroundColor = color;
//     }

//     public getId(): number
//     {
//         return this.id;
//     }

//     public getElements(): Array<Figure | Picture | TextBox>
//     {
//         return this.elements;
//     }

//     public getNumber(): number
//     {
//         return this.numberOfSlide;
//     }

//     public getBackgroundColor(): string
//     {
//         return this.backgroundColor;
//     }
// }

type Slide = {
    id: number,
    elements: Array<Figure | Picture | TextBox>,
    numberOfSlide: number,
    backgroundColor: string,
}