let valores = []

const addValor = (x) => {
    valores.push([valores.length+1, x]);
}

const media = () => {
    let soma = 0;
    for(x of valores)
        soma += x[1];
    return soma / valores.length;
}

//Essa função refere-se ao Google Charts
//É uma função de desenho para o Google Charts
const drawBasic = () => {
    var data = new google.visualization.DataTable();//Criando uma tabela interna
    data.addColumn('number','Pos');
    data.addColumn('number','X');
    data.addRows(valores);
    var options = {hAxis: {title:'Posicao'}, vAxis: {title: 'Valor de X'}};//Aqui valida que o eixo horizontal é posição e o vertical é valor.

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));//O componente da tela que é uma div, que vai receber o gráfico.

    chart.draw(data, options);
}