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
  core.preload("image/image.png");
  core.fps = 10;
  core.onload = function(){
    var StartScene = function(){
      var scene = new Scene();                                // 新しいシーンを作る
      var Start = new Sprite(505,505);
      Start.image = core.assets["image/image.png"];
      Start.x = 0;
      Start.y = 0;
      scene.addChild(Start);
      scene.on("touchstart",function(e){
        core.replaceScene(MenuScene(0));
      })
      return scene;
    };
    core.replaceScene(StartScene());  // ゲームの_rootSceneをスタートシーンに置き換える
  }
  core.start()
}
