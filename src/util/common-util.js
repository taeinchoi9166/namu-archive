
exports.cardColors = [
    '#d18834',
    '#2a917d',
    '#ba569c',
    '#820d94',
    '#1793e6',
    '#dddddd',
    '#222222',
    'linear-gradient("#d18834","#2a917d")',
    '#165ac7'];

//카드 종류 구하기
exports.getCardType = (attr, kind) => {
    let type = 0;
    if(attr.lastIndexOf("마법") !== -1){
        type = 1;
    }else if(attr.lastIndexOf("함정") !== -1){
        type = 2;
    }else{

        if(kind.lastIndexOf("융합") !== -1){
            type = 3;
        }else if(kind.lastIndexOf("의식") !== -1){
            type = 4
        }else if(kind.lastIndexOf("싱크로") !== -1){
            type = 5;
        }else if(kind.lastIndexOf("엑시즈") !== -1){
            type = 6;
        }else if(kind.lastIndexOf("펜듈럼") !== -1){
            type = 7;
        }else if(kind.lastIndexOf("링크") !== -1){
            type = 8;
        }
    }

    return type;
};

exports.getDeckPosition = (type) => type < 3 || type === 4 || type === 7 ? 0 : 1;

