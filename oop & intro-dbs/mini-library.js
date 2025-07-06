class Member {
  constructor(name, memberId) {
    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = [];
  }

  borrow(book) {
    if (!book.isCheckedOut) {
      book.checkOut(this);
      this.borrowedBooks.push(book);
    } else {
      console.log(`${book.title} is already checked out.`);
    }
  }

  return(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      book.returnBook();
      this.borrowedBooks.splice(index, 1);
      console.log(`${book.title} has been returned by ${this.name}.`);
    } else {
      console.log(`${this.name} does not have ${book.title} checked out.`);
    }
  }
}

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isCheckedOut = false;
    this.borrower = null;
  }

  checkOut(member) {
    if (!this.isCheckedOut) {
      this.isCheckedOut = true;
      this.borrower = member;
      console.log(`${this.title} has been checked out by ${member.name}.`);
    } else {
      console.log(`${this.title} is already checked out by ${this.borrower.name}.`);
    }
  }

  returnBook() {
    if (this.isCheckedOut) {
      this.isCheckedOut = false;
      this.borrower = null;
      console.log(`${this.title} has been returned.`);
    } else {
      console.log(`${this.title} is not currently checked out.`);
    }
  }
}



//testing my codee
const member1= new Member("Alice", "1");
console.log(member1);
const member2 = new Member("Dante", "2");
console.log(member2);
const book1 = new Book("1984", "George Orwell", "123");
console.log(book1);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "456");
console.log(book2);

member1.borrow(book1);
member1.borrow(book2);


//library simulation will be done on mini-library2.js
