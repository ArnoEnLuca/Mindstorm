var FRoute;
var arrr=["AB","FD","SD","XQ"];
var attempts=arrr.length*arrr.length*10000;//00;
var oldroute=new Set([]);
function daniel(){
    var newroute;
    FRoute=newroute=RandomRoute(arrr);
    if(attempts>factorialize(arrr.length)){
    //The algorithm if checking all routes isn't viable
        for(let i = 0;i<attempts;i++){
            newroute=RandomRoute(arrr);
            //await sleep(50);
            if(newroute.rlength<FRoute.rlength){
                FRoute=newroute;
                outputtext(FRoute.rlength+" , attempt , "+i+ " , array ,"+ FRoute.order.join(','));
            }
            oldroute.add(newroute.points);
        }
    }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function RandomRoute(arr){
    var FRoute = new Route(arr);
    FRoute.randomize(FRoute.points);
    
    //FRoute.mnh=FRoute.points;
    return FRoute;
}
class Route{
    constructor(arr){
        this.points=[];
        this.route=[];
        this.length;
        this.order=[];
        this.mhn=[];
        for(var i=0;i<arr.length;i++){
            var point = arr[i];
            this.points.push(point);
            this.route.push(point);
        }
    }
    addpoint(pos,point){
        this.route.splice(pos,0,point);
    }
    shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
    }
    randomize(a){
        this.shuffle=function(a){var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;}
        this.order=this.shuffle(a);
        this.order.splice(0,0,"STA");
        this.order.splice(this.order.length,0,"END");
        if(!oldroute.has(this.order)){
        this.rlength=this.length(this.order);
        }
    }
    length(a){
        let l = 0;
        for(let i = 0; i<a.length-1;i++){
            l+=getRoute(a[i],a[i+1])
            //outputtext("getRoute , "+a[i]+" , "+a[i+1]+" , "+l);

        }
        return l;
    }
    manh(){
        var length = [];
        for(var t=0;t<this.points.length-1;t++){
            //from,to
            //begin,eind
            length.push(...manhattan(this.points[t],this.points[t+1]));
        }
        return length;
    }
    
}
function test(arrr,short){
    var TRoute;
    var newroute;
    TRoute=newroute=RandomRoute(arrr);
    for(let i = 0;i<attempts;i++){
        newroute=RandomRoute(arrr);
        //await sleep(50);
        if(newroute.rlength<TRoute.rlength){
            TRoute=newroute;
            outputtext(TRoute.rlength+" , attempt , "+i+ " , array ,"+ TRoute.order.join(','));
        }
    }
    if(TRoute.points.join()!=short.join()){
        //console.error("The route is incorrect , "+short+" , "+TRoute.points+(short==TRoute.points));
        console.log(short);
        console.log(TRoute.points);
        console.error("The path is not the shortest");        
    }
    else{
        console.log("The algorithm calculated the fastest route");
    }
}
function calctrough(){
    test(["AA","FF","JJ","ZZ"],["STA","AA","FF","JJ","ZZ","END"]);
    test(["AA","SD","JJ","ZZ"],["STA","AA","JJ","SD","ZZ","END"]);
    test(["AB","FD","SD","XQ"],["STA","AB","FD","SD","XQ","END"]);
    test(["AB","BB","FD","CC","SD","XQ"],["STA","AB","BB","CC","FD","SD","XQ","END"]);
}
function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}