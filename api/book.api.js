import axios from 'axios';

export const bookApi = {
    getAllBooks,
    getBookBySku,
};

const apiUrl = 'https://sach-tu-tam.herokuapp.com/api';

async function getAllBooks() {
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/book/getAll`).then(
            (response) => {
                return resolve(response.data);
            },
            (error) => {
                return reject(error);
            }
        );
    });
}

async function getBookBySku(bookSku) {
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/book/sku/${bookSku}`).then(
            (response) => {
                return resolve(response.data);
            },
            (error) => {
                return reject(error);
            }
        );
    });
}
