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
    nome: 'Fone Bluetooth Pulse',
    preco: 159.9,
    descricao: 'Fone sem fio com bateria de ate 18 horas e microfone integrado.',
    emEstoque: true,
    imagem: '/img/fone.png',
  },
  {
    id: 2,
    nome: 'Mouse Ergonomico Pro',
    preco: 89.5,
    descricao: 'Mouse com ajuste de sensibilidade e design confortavel para uso prolongado.',
    emEstoque: false,
    imagem: '/img/mouse.png',
  },
  {
    id: 3,
    nome: 'Teclado Mecanico RGB',
    preco: 249.99,
    descricao: 'Teclado mecanico compacto com iluminacao RGB e switches azuis.',
    emEstoque: true,
    imagem: '/img/teclado.png',
  },
];
