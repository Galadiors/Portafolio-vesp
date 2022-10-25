import axios from 'axios';

export const getCategorias = async () => {
    const res = await fetch('https://siglo-xxi-products.azurewebsites.net/Products/v1/categories');
    return await res.json();
}

export const getPlatos = async () => {
    const res = await fetch('https://siglo-xxi-products.azurewebsites.net/Products/v1/menu');
    return await res.json();
}

export const getPlatoId = async (id) => {
    const res = await fetch('https://siglo-xxi-products.azurewebsites.net/Products/v1/menu/' + id);
    return await res.json();
}

export const getMesas = async () => {
    const res = await fetch('https://siglo-xxi-tables.azurewebsites.net/Tables/v1/tables');
    return await res.json();
}

