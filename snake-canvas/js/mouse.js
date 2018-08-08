class Mouse{
    constructor(canvas){
        this.icon_mouse = 'img/mouse.png';
        this.x = randCoord();
        this.y = randCoord();
        this.direction = 'up';
        this.canvas = canvas;
        this.who = 'mouse';
    }
    // render to canvas
    render(){

        // segments
        var image = new Image();
            image.src = this.icon_mouse;
            var self = this;
            image.onload = function(){
                self.canvas.drawImage(image, self.x,self.y);
            }

    }

    // life cycle
    live(){
        var self = this;
        self.timer = setInterval(function(){ self.render(); }, 100);
    }
    die(){
        clearInterval(this.timer);
    }
// hw 2
// сделать телепорт
teleport(){

}

// hw3 placeMice(),placeBomb() -> if() крч чтобы бомба не попалп на змею

}
