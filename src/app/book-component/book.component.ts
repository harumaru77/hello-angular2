import { Component } from '@angular/core';

@Component({
  selector: 'my-book',
  templateUrl: './book.component.html',
})
export class BookComponent {
  booksResult: any = [];
  books = [
    {id: '001', name: '타이젠 모바일 프로그래밍', price: 31500, date: '20150115', img: './app/assets/image/img001.jpg'},
    {id: '002', name: '아파치 코르도바', price: 31500, date: '20150131', img: './app/assets/image/img002.jpg'},
    {id: '003', name: '웹앱 하이브리드 앱', price: 31500, date: '2015320', img: './app/assets/image/img003.jpg'},
    {id: '004', name: 'OpenGL ES 2.0 안드로이드 게임프로그래밍', price: 31500, date: '20150601', img: './app/assets/image/img004.jpg'},
    {id: '005', name: 'Ext JS6 프로그래밍', price: 31500, date: '20151005', img: './app/assets/image/img005.jpg'}
  ];
  constructor() {
    for (let book of this.books) {
      this.booksResult.push(book);
    }
  }
  bookName: string = '';
  onSelectBook(name: string) {
    this.bookName = name;
  }
  searchName($event: any) {
    let searchName = $event.target.value;
    this.booksResult = [];
    if (searchName === '') {
      for (let book of this.books) {
        this.booksResult.push(book);
      }
    }else {
      for (let book of this.books) {
        if (book.name.indexOf(searchName) !== -1) {
          this.booksResult.push(book);
        }
      }
    }
  }
}
