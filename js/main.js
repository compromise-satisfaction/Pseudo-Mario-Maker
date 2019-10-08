enchant()
function Load(width,height){
  var core = new Core(width, height);
  enchant.Game._loadFuncs['js']  = function(src, callback) {
    var ele = document.createElement("script");
    ele.type = "text/javascript";
    ele.src = src;
    ele.onload = callback;
    ele.onerror = function() {
      throw new Error('Cannot load an asset: ' + src);
    };
    document.body.appendChild(ele);
  };
  core.preload("image/image.png","image/Blue_back.png","image/Start.png","image/Key.png");
  core.fps = 10;
  core.onload = function(){
    var StartScene = function(){
      var scene = new Scene();                                // 新しいシーンを作る

      var Hand = new Sprite(1,1);
      Hand.image = core.assets["image/image.png"];
      scene.addChild(Hand);

      var Back = new Sprite(width, height);
      Back.image = core.assets["image/Blue_back.png"];
      Back.x = 0;
      Back.y = 0;
      scene.addChild(Back);

      var Mario = new Sprite(32,32);
      Mario.image = core.assets["image/image.png"];
      Mario.x = 0;
      Mario.y = 0;
      Mario.frame = 6;
      scene.addChild(Mario);

      var Start = new Sprite(110,40);
      Start.image = core.assets["image/Start.png"];
      Start.x = width-110;
      Start.y = height-40;
      Start.frame = 0;
      scene.addChild(Start);

      var Block = Class.create(Sprite, {
          initialize: function(x,y) {
              Sprite.call(this,32,32);
              this.x = x;
              this.y = y;
              this.image = core.assets["image/image.png"];
              //this.frame++;
              scene.addChild(this);
          }
      });

      var Blocks = [];
      var B_frame = [];
      var K = 1;

      for (var i = 0; i < 1490; i++){
        Blocks[i] = new Block(i*32-(K-1)*32*55-32,height-32*K);
        if(i==55*K) K++;
        B_frame[i] = 0;
      }

      scene.on("touchstart",function(e){
        Hand.x = e.x;
        Hand.y = e.y;
        if(Start.intersect(Hand)){
          core.replaceScene(GameScene(B_frame));
          return;
        }
        for (var i = 0; i < 1490; i++){
          if(Blocks[i].intersect(Hand)){
            B_frame[i] = 1;
            Blocks[i].frame = 1;
          }
        }
      })

      scene.on("touchmove",function(e){
        Hand.x = e.x;
        Hand.y = e.y;
        for (var i = 0; i < 1490; i++){
          if(Blocks[i].intersect(Hand)){
            B_frame[i] = 1;
            Blocks[i].frame = 1;
          }
        }
      })

      return scene;
    };
    var GameScene = function(B_frame){
      var scene = new Scene();                                // 新しいシーンを作る

      var Time = 0;

      var Hand = new Sprite(1,1);
      Hand.image = core.assets["image/image.png"];
      scene.addChild(Hand);

      var Back = new Sprite(width, height);
      Back.image = core.assets["image/Blue_back.png"];
      Back.x = 0;
      Back.y = 0;
      scene.addChild(Back);

      var Right = new Sprite(320,320);
      Right.image = core.assets["image/Key.png"];
      Right.x = 320;
      Right.y = height-320;
      Right.frame = 9;
      Right.rotation = 90;
      scene.addChild(Right);

      var Left = new Sprite(320,320);
      Left.image = core.assets["image/Key.png"];
      Left.x = 0;
      Left.y = height-320;
      Left.frame = 9;
      Left.rotation = 270;
      scene.addChild(Left);

      var Up = new Sprite(320,320);
      Up.image = core.assets["image/Key.png"];
      Up.x = width-320;
      Up.y = height-320;
      Up.frame;
      scene.addChild(Up);

      var Block = Class.create(Sprite, {
          initialize: function(x,y,z) {
              Sprite.call(this,32,32);
              this.x = x;
              this.y = y;
              this.image = core.assets["image/image.png"];
              this.frame = z;
              scene.addChild(this);
          }
      });

      var Blocks = [];
      var K = 1;

      for (var i = 0; i < 1490; i++){
        Blocks[i] = new Block(i*32-(K-1)*32*55-32,height-32*K,B_frame[i]);
        if(i==55*K) K++;
      }

      var Mario = new Sprite(32,32);
      Mario.image = core.assets["image/image.png"];
      Mario.x = 0;
      Mario.y = 0;
      Mario.frame = 6;
      scene.addChild(Mario);

      Back.addEventListener("enterframe",function(){
        Mario.y += Time;
        Time = Time + 2;
        for (var i = 0; i < 1490; i++){
          if(Mario.intersect(Blocks[i])&&Blocks[i].frame==1){
            Time = 0;
            Mario.y = Blocks[i].y - 31;
          }
        }
        idou_Mario();
        if(Mario.y>height+32){
          core.replaceScene(StartScene());
        }
      })

      scene.on("touchmove",function(e){
        Hand.x = e.x;
        Hand.y = e.y;
        if(Up.intersect(Hand)){
          idou_Mario("up");
        }
        if(Right.intersect(Hand)){
          idou_Mario("right");
        }
        if(Left.intersect(Hand)){
          idou_Mario("left");
        }
      })

      function idou_Mario(Key){
        if(core.input.up||Key=="up"){
          Mario.y = Mario.y -= 20;
        }
        if(core.input.down||Key=="down"){
          Mario.y = Mario.y += 10;
        }
        if(core.input.left||Key=="left"){
          Mario.x = Mario.x -= 10;
        }
        if(core.input.right||Key=="right"){
          Mario.x = Mario.x += 10;
        }
      }

      return scene;
    };
    core.replaceScene(StartScene());  // ゲームの_rootSceneをスタートシーンに置き換える
  }
  core.start()
}
