
import Home from '../pages/Home';
import Header from '../templates/Header';

const routes = {
    '/': Home
}

const router = async () => {
    const header = null || document.getElementById('header');

    header.innerHTML = await Header();
}