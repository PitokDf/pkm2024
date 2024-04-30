function next(current){
    var nextLv = 0;
    do {
        nextLv = Math.floor(Math.random() * 4)+1;
    }while(nextLv == current);
    window.location.href = `${nextLv}.html`;
}
function start(){
    nextLv = Math.floor(Math.random() * 4)+1;
    window.location.href = `level/${nextLv}.html`;
}