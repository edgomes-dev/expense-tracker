import { Item } from "../types/Item"

export const items: Item[] = 
[
    { 
        date: new Date(2021, 9, 15), 
        category: 'food', 
        title: 'Burg King', 
        value: 32.12 
    },
    {
        date: new Date(2021, 9, 4),
        category: 'food',
        title: 'Lanche',
        value: 45.89
    },
    {
        date: new Date(2021, 10, 16),
        category: 'rent', 
        title: 'Aluguel Apt',
        value: 865.75
    },
    {
        date: new Date(2021, 9, 21),
        category: 'salary',
        title: 'Salário ACME',
        value: 3500.89
    }
];