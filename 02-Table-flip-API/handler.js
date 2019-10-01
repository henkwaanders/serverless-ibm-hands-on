'use strict';

const tableFlips = [
  '(╯°□°）╯︵ ┻━┻',
  '(┛◉Д◉)┛彡┻━┻',
  '┻━┻︵ヽ(`Д´)ﾉ︵ ┻━┻'
];

const tablePutBack = [
  '┬─┬ノ( º _ ºノ)',
  '(ヘ･_･)ヘ┳━┳',
  '┬──┬ ¯\_(ツ)'
];

function tableflip(params) {
  let index = params.id;
  let array = tableFlips;

  if(params.random == true) {
    index = Math.round(Math.random() * (tableFlips.length -1));
  }

  if(index < 0) {
    array = tablePutBack;
    index = Math.abs(index);
  }

  if(array[index] === undefined) return { tableflip : 'table not found' };

  return { tableflip : array[index] };
}

exports.tableflip = tableflip;
