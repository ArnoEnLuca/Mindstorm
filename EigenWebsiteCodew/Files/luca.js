var crossings;

var allLetters="abcdefghijklmnopqrstuvwxyz".toUpperCase();
var alphabet=[];
var endAlphabet=[];

var horDist=1;
var vertDist=1;

var all;

var tested=0;

var blockedPaths;//i is x*width+y

var magWidth=23;
var magHeight=23;


function wiebe(){
    //sortBooks();
    //outputtext(getBookLocations(getThese));
    singAlphabet();
}

function setBlockedPaths(blocked=[]){//Implement this function in the function Wiebe();
    blockedPaths=new Set(blocked);
}

function addToBlockedPaths(path){
    blockedPaths.add(getLocInBlock(path));
}

function getLocInBlock(path){
    return path.x*magWidth+path.y;
}

function checkIfBlocked(path){
    blockedPaths.add(getLocInBlock(path));
}

function singAlphabet(){
    var firstalphabet=allLetters.split('');
    firstalphabet.map((char,index)=>endAlphabet[char]=index);
}
function volgendeKruising(){

}

function sortBooks(){//sorteert de boeken
    getThese.sort();
    locations.sort(compareID);
}

function compareID(a, b){//vergelijkt twee id's
    return a[0]-b[0];
}

function getBookLocations(UNSORTED_books){
    var books=UNSORTED_books.sort();
    var a=0;
    var foundLocs=[];
    var lastA=0;
    for(var i=0;i<books.length;i++){
        var found=false;
        while(!found){
            if(locations[a][0]==books[i]){
                foundLocs.push(locations[a][1]);
                lastA=a;
                found=true;
            }
            if(a==locations.length-1){
                foundLocs.push(null);
                a=lastA;
                found=true;
            }
            a++;
        }
    }
    return [books, foundLocs];
}

function getRoute(from, to){
    if(from=="STA"){
        from="AA";
    }
    if(to=="END"){
        to="ZZ";
    }
    var locFrom=from.split("");
    var locTo=to.split("");
    var distance=[Math.abs(endAlphabet[locFrom[0]]-endAlphabet[locTo[0]])*horDist,Math.abs(endAlphabet[locFrom[1]]-endAlphabet[locTo[1]])*vertDist];
    return distance[0]+distance[1];
}

function manhattan(fromIN,toIN){
     if(fromIN=="STA"){
        fromIN="AA";
    }
    if(toIN=="END"){
        toIN="ZZ";
    }
    var from={x:endAlphabet[fromIN[0]],y:endAlphabet[fromIN[1]]};
    var to={x:endAlphabet[toIN[0]],y:endAlphabet[toIN[1]]};
    var first=singPart(from.x,to.x).splice("");
    //first.splice(first.length-1,1);
    first=first.map(x=>x+allLetters[from.y]);
    var second=singPart(from.y, to.y).splice("");
    second=second.map(y=>allLetters[to.x]+y);
    first.push(...second);
    return first;
}

function singPart(from,to){
    var ret=[];
    if(from<to){
        for(var i=from;i<to;i++){
            ret.push(allLetters[i]);
        }
    }else{
        for(var i=from;to<i;i--){
            ret.push(allLetters[i]);
        }
    }    
    return ret;
}

function isBlocked(path){
    return blockedPaths.has(getLocInBlock(path));
}

class pathChooser{
    constructor(from, target){
        this.pathsDone=new Set([from]);
        this.target=target;
        this.routes=[from];
    }
    checkPath(pathNow){//Look if you should check this path or if you should igbore it,since tou reached it earlier
        if(this.pathsDone.has(pathNow)){
            return false;//Do not check
        }
        this.pathsDone.add(pathNow);
        return true;//Check
        
    }

    addPath(found){
        found.determineDistance();
        if(this.checkPath(found)){
            for(var i=0;i<this.routes.length;i++){
                if(this.routes[i].distance<found.distance){
                    this.routes[i].splice(i,0,found);
                }
            }
        }
    }

    extendPath(){

    }
}