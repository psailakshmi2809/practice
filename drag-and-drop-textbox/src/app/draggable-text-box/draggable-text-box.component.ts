// draggable-text-box.component.ts
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TextBox } from './textbox.model';

@Component({
  selector: 'app-draggable-text-box',
  templateUrl: './draggable-text-box.component.html',
  styleUrls: ['./draggable-text-box.component.css'],
})
export class DraggableTextBoxComponent implements OnInit {
  textboxes: TextBox[] = [];
  dragPosition = { x: 0, y: 0 };

  selectedTextBox: TextBox | null = null;
  isEditing: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  onDragEnded() {
    this.dragPosition = { x: 0, y: 0 };
  }

  onTextBoxFocus(textbox: TextBox) {
    console.log('Text box focused');
    this.selectedTextBox = textbox;
    this.isEditing = true;
  }
  
  onTextBoxBlur() {
    console.log('Text box blurred');
    this.selectedTextBox = null;
    // this.isEditing = false;
  }
  

  updateView() {
    this.cdr.detectChanges();
  }

  addTextBox() {
    const newTextBox = new TextBox('New Text Box', 0, 0, 16, 'normal', '#000000',1.2,0.1,20);
    this.textboxes.push(newTextBox);
  }

  deleteTextBox(index: number) {
    this.textboxes.splice(index, 1);
  }

  changeFontSize(fontSize: number) {
    if (this.selectedTextBox) {
      this.selectedTextBox.fontSize = fontSize;
      this.updateView();
    }
  }

  changeFontStyle(fontStyle: string) {
    if (this.selectedTextBox) {
      this.selectedTextBox.fontStyle = fontStyle;
      this.updateView();
    }
  }

  changeFontColor(color: string) {
    if (this.selectedTextBox) {
      this.selectedTextBox.fontColor = color;
      this.updateView();
    }
  }

  // Newly added methods for line height and line spacing
  changeLineHeight(lineHeight: number) {
    if (this.selectedTextBox) {
      this.selectedTextBox.lineHeight = lineHeight;
      this.updateView();
    }
  }

  changeLetterSpacing(letterSpacing: number) {
    if (this.selectedTextBox) {
      this.selectedTextBox.letterSpacing = letterSpacing;
      this.updateView();
    }
  }
  changeTextArea(textarea: number) {
    if (this.selectedTextBox) {
      this.selectedTextBox.textarea= textarea;
      this.updateView();
    }
  }
  
}
