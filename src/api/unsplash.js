import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
    Authorization:
    'Client-ID Y8MyUlrWdv-xzmy7RtxSUOVa5-XF5YIBcnCwa6r96zg'
}
    })