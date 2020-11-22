import { useContext } from 'react'
// import axios from 'axios'
import { BookContext } from '../BooksContext'
import React from 'react'
import '../css/style.css'
import '../css/index.css'

const Index = () => {
    const [dataBook,] = useContext(BookContext)

    const convertToRupiah = (angka) => {
        let rupiah = '';
        let angkarev = angka.toString().split('').reverse().join('');
        for (let i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.';
        return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
    }

    return (
        <section>
            <h1 style={{ textAlign: "center" }}>Daftar Buku - buku pilihan</h1>
            { dataBook !== null &&
                (
                    dataBook.map((book, index) => {
                        return (
                            <div className="book" key={index + 1}>
                                <h3>{book.title}</h3>
                                <div className="row-index">
                                    <div className="col iamge">
                                        <img src={book.image_url} alt="bookImage" />
                                    </div>
                                    <div className="col">
                                        <p><b>Tahun Terbit : {book.release_year}</b></p>
                                        <p><b>Harga : {convertToRupiah(book.price)},-</b></p>
                                        <p><b>Jumlah Halaman : {book.totalPage}</b></p>
                                    </div>
                                </div>
                                <p><b>Deskirpsi : </b>{book.description}</p>
                                <p><b>Ulasan : </b>{book.review}</p>
                            </div>
                        )
                    })
                )
            }
        </section>
    )
}

export default Index


