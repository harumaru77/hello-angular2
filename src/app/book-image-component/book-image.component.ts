import {Component, EventEmitter, Input, Output} from '@angular/core';
/**
 * Created by HANA on 2017-06-02.
 */
@Component({
  selector: 'book-image',
  templateUrl: './book-image.component.html',
})
export class BookImageComponent {
  @Input() title = '제목';
  @Input() path = './app/assets/image/img001.jpg';
  @Input() width = '100';
  @Input() height = '150';
  @Output() selectBook = new EventEmitter<string>();
  onClick(name: string) {
    this.selectBook.emit(name);
  }
}
