export interface ProdutoItem {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  emEstoque: boolean;
  imagem: string;
}

export const PRODUTOS: ProdutoItem[] = [
  {
    id: 1,
    nome: 'Notebook Falcon i5 16GB',
    preco: 4299.9,
    descricao: 'Notebook com processador i5, 16GB de RAM e SSD de 512GB para produtividade diaria.',
    emEstoque: true,
    imagem: '/img/Notebook%20Falcon%20i5%2016GB.png',
  },
  {
    id: 2,
    nome: 'Notebook Orion Ryzen 7',
    preco: 5199.9,
    descricao: 'Modelo com Ryzen 7, tela Full HD 15.6 e placa integrada de alto desempenho.',
    emEstoque: true,
    imagem: '/img/Notebook%20Orion%20Ryzen%207.png',
  },
  {
    id: 3,
    nome: 'Notebook Titan Gamer RTX',
    preco: 7899.9,
    descricao: 'Notebook gamer com GPU dedicada RTX, 32GB de RAM e refrigeracao avancada.',
    emEstoque: true,
    imagem: '/img/Notebook%20Titan%20Gamer%20RTX.png',
  },
  {
    id: 4,
    nome: 'Notebook Slim Air 14',
    preco: 3899.9,
    descricao: 'Notebook ultrafino de 14 polegadas, leve e com bateria de longa duracao.',
    emEstoque: false,
    imagem: '/img/Notebook%20Slim%20Air%2014.png',
  },
];
