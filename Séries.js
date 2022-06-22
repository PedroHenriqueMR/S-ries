let serie = [
    {id: 1 ,nome: "Stranger Things" , temporada: 4 , episodios:34 },
    {id: 2 ,nome: "How I met your mother" , temporada: 9 , episodios: 208},
    {id: 3 ,nome: "Todo Mundo Odeia o Chris" , temporada: 4 , episodios: 88},
    {id: 4 ,nome: "Bob Esponja" , temporada: 13 , episodios: 387},
    {id: 5 ,nome: "Os Padrinhos Mágicos" , temporada: 10 , episodios: 172},
    {id: 6 ,nome: "Um Maluco no Pedaço" , temporada: 6 , episodios: 148},
    {id: 7 ,nome: "X-Men" , temporada: 5 , episodios: 76}
];

let quantasSeries = serie.length;
let totaldeTem = 0;
let totaldeEps = 0;

for(let i =0; i < quantasSeries;i++){

    totaldeTem += serie[i].temporada;
    totaldeEps += serie[i].episodios;

    console.log(`Nome série: ${serie[i].nome}. 
 Total de Temporadas: ${serie[i].temporada}.   
 Total de Epísodios: ${serie[i].episodios}.`);

    if((i+1) == quantasSeries){
      console.log(`Total de series: ${quantasSeries}.  
 Total de Temporadas: ${totaldeTem}.   
 Total de Epísodios: ${totaldeEps}.`);
  };
};

console.log(`Recomento você ver a série ${serie[1].nome}`)