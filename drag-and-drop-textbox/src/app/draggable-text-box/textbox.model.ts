// textbox.model.ts
export class TextBox {
  isFocused: boolean = false;
  horizontalAlignment: string = 'left';
  
 // verticalAlignment: string = 'top';
 // backgroundColor: string = '#ffffff';

  constructor(
    public text: string,
    public x: number,
    public y: number,
    public fontSize: number,
    public fontStyle: string,
    public fontColor: string,
    public lineHeight:number,
    public letterSpacing:number,
    public textarea:number,
  
  ) {}
}
