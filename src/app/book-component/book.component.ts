import { Component } from '@angular/core';

@Component({
  selector: 'my-book',
  templateUrl: './book.component.html',
})
export class BookComponent {
  onSubmit(form: any) {
    console.log(form.value);
  }
}
