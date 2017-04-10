var List = require('./List');

test('', function(){
    var list = new List();
    list.append(10);
    list.append(20);
    list.append(30);
    list.append(35);
    list.append(130);
    list.append(330);
    list.append(120);
    
    list.moveTo(4);

    list.next();

});

