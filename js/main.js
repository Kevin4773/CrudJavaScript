'use strict'

// Import no javaScrit
import {openModal} from './modal.js'; 
import {closeModal} from './modal.js'; 

const carregarProdutos = () => {

    const produtos = getProdutos();

}

carregarProdutos();

// Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('cancel').addEventListener('click', closeModal);