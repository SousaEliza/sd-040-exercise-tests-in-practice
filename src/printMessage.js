let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
  if (typeof characterInfo === 'object' && characterInfo.personagem) {
    let result = `Boas vindas, ${characterInfo.personagem}`;    
    return result;
  }
  throw new Error('objeto inválido');
};

// console.log(printMessage(info));

module.exports = { info, printMessage };