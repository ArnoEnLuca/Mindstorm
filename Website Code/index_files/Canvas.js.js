var canvas;
function createcanvas(){
    canvas = new cvs();
    canvas.points=canvas.draw();
    
}
function updatecanvas(points,p,s=canvas.size){
    canvas.update(points,p,s);
}
class cvs{
    constructor(){
        this.width=26;
        this.height=26;
        this.offseth=this.height/2;
        this.offsetw=this.width/2;
        this.multiplier=30;
        this.c=document.getElementById("myCanvas");
        this.c.width=this.width*this.multiplier+this.offsetw;
        this.c.height=this.height*this.multiplier+this.offseth;
        this.ctx=this.c.getContext("2d");
        this.points;
        this.size=5;
    }
    draw(){
        var points = [];
        var temp=[];
        for(let x = 0;x<this.width;x++){
            for(let y = 0;y<this.height;y++){
                this.ctx.fillRect(x*this.multiplier+this.offsetw,y*this.multiplier+this.offseth,this.size,this.size); 
                temp.push([x*this.multiplier+this.offsetw,y*this.multiplier+this.offseth,this.size,this.size,allLetters[x],allLetters[y]]);
            }
            points.push(temp);
            temp=[];
        } 
        return points;
    }
    update(points,p,s){
        var stcoord1;
        var stcoord2;
        var encoord1;
        var encoord2;
        this.ctx.beginPath();
        for(var i = 0;i<p.length-1;i++){
            //from points[i] to points[i+1]
            var stpos = [0,0];
            var enpos = [0,0];
            if (p[i]=="STA"){
                stpos = [0,0];
            }
            else{
                stpos = toloc(p[i]);
            }
            if (p[i+1]=="END"){
                enpos = [0,0];
            }
            else{ 
                enpos = toloc(p[i+1]);
            }
            stcoord1=stpos[0]*this.multiplier+this.offsetw+this.size/2;
            stcoord2=stpos[1]*this.multiplier+this.offseth+this.size/2;
            encoord1=enpos[0]*this.multiplier+this.offsetw+this.size/2;
            encoord2=enpos[1]*this.multiplier+this.offseth+this.size/2;
            this.ctx.moveTo(stcoord1,stcoord2);
            this.ctx.lineTo(encoord1,encoord2);
            this.ctx.strokeStyle = "#FF0000";
            this.ctx.lineWidth = 10;
            this.ctx.stroke();
            //console.log("from:"+stpos[0]+","+stpos[1]);
            //console.log("to:"+enpos[0]+","+enpos[1]);
            //console.log("M:"+this.multiplier);
            //console.log(this.offseth+","+this.offsetw);
            //console.log("D:"+stcoord1+"F:"+stcoord2);
            //console.log("E:"+encoord1+"G:"+encoord2);
        }
    }

}
function toloc(strr){
    var coords = strr.split("");
    var x = coords[0];
    var y = coords[1];
    x=endAlphabet[x];
    y=endAlphabet[y];
    return [x,y];
}