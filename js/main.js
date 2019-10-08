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
  core.preload("image/image.png","image/Blue_back.png");
  core.fps = 10;
  core.onload = function(){
    var StartScene = function(){
      var scene = new Scene();                                // 新しいシーンを作る
      var Back = new Sprite(width, height);
      Back.image = core.assets["image/Blue_back.png"];
      Back.x = 0;
      Back.y = 0;
      scene.addChild(Back);

      var Block = Class.create(Sprite, {
          initialize: function(x,y) {
              Sprite.call(this,32,32);
              this.x = x*32;
              this.y = y;
              this.image = core.assets["image/image.png"];
              scene.addChild(this);
          }
      });

      var Blocks = [];

      for (var i = 0; i < 110; i++){
        Blocks[i] = new Block(i,height-32);
      }

      scene.on("touchstart",function(e){
        return;
        core.replaceScene(MenuScene(0));
      })
      return scene;
    };
    core.replaceScene(StartScene());  // ゲームの_rootSceneをスタートシーンに置き換える
  }
  core.start()
}
