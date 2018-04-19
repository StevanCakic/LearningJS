
/*const nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
for (let nickname of nicknames) {
    console.log(nickname);
}*/
// di
// boo
// punkeye

const nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
nicknames[5] = 10;
for (let nickname in nicknames) {
    console.log(nickname);
}
// 0
// 1
// 2
// size