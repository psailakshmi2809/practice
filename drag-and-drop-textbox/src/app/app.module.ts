// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DraggableTextBoxComponent } from './draggable-text-box/draggable-text-box.component';

@NgModule({
  declarations: [AppComponent, DraggableTextBoxComponent],
  imports: [BrowserModule, FormsModule,ReactiveFormsModule, DragDropModule], // Add DragDropModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
