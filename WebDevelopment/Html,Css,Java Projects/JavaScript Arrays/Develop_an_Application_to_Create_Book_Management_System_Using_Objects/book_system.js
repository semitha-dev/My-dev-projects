let books = []

function add_book(){

    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)){

        const book = {
            name: bookName,
            author_name: authorName,
            book_Description: bookDescription,
            page_Number: pagesNumber

        }
        books.push(book);
        showbooks();
        clearInputs();


    }
    else{
        alert("Please enter all fields correctly")
    }

}

function showbooks(){

    const bookdiv = books.map((book, index) => `

    <h1> Book number : ${index + 1}</h1>
    <p><strong>Book Name:</strong> ${book.name}</p>
    <p><strong>Author Name:</strong> ${book.author_name}</p>
    <p><strong>Book Description:</strong> ${book.book_Description}</p>
    <p><strong>No. of Pages:</strong> ${book.page_Number} mins</p>
    
    
    
    
    `)
    document.getElementById("books").innerHTML = bookdiv


}
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';}