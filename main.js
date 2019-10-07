enchant();

window.onload = function(){
    var core = new Core(1600,1600);
    core.preload('serval.png','toki.png','japariman_blue.png','map0.png','jump.wav','jump.mp3');
    core.preload('zimen.png','asiba.png','boss.png','mouse.png','jaga.png','s.png','game_over.png','st.png');
    core.preload('dokan1.png','dokan2.png','dokan3.png','s2.png','zimen2.png','tuti.png','koe.png','japaricoin.png');
    core.fps = 100;
    core.onload = function(){
        // ここに処理を書いていきます。
        //音を鳴らす
        // Map を作って描画する
        var map = new Map(160, 160);
        /*map.image = core.assets['map0.png'];
         var baseMap = [
         [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
         [  1, 29, 30,  1,  1,  1,  1,  1,  1,  1],
         [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
         [ 15, 15, 15,  1,  1,  1,  1, 29, 30,  1],
         [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
         [  1,  1,  1,  1,  1,  1, 15, 15, 15, 15],
         [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
         [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
         [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
         [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
         ];
         */        //マップデータここまで
        map.image = core.assets['map0.png'];
        var baseMap = [
                       [  0,  1,  2,  3,  4,  5,  6,  7,  8,  9],
                       [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
                       [ 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                       [ 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
                       [ 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
                       [ 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
                       [ 60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
                       [ 70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
                       [ 80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
                       [ 80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
                       ];
        

        var time = 0; //全体の経過時間 フレーム変更に使用
        var time2 = 0;//画面切り替えに使用
        var muki = 10; //全てのキャラクターの向きの判定用
        var rpeat = 10; //繰り返しに使用
        var map_p = 0; //横スクロールに使用
        var map_u = 0; //上スクロールに使用
        var and = 0;
        //キャラクターの判定
        var character1;
        var character2;
        //キャラクタの切替変数
        var syosoku_character;
        var syosoku_character;
        var spead_characterl;
        var time_character;
        //サーバルちゃんのキャラデータの初期設定
        var serval = new Sprite(400,400);
        var syosoku_serval = 0;
        var spead_serval;
        var time_serval = 0;
        serval.image = core.assets['serval.png'];
        serval.x = 0;
        serval.y = 0;
        serval.frame = 0;
        
        var jaga = new Sprite(400,400);
        jaga.image = core.assets['jaga.png'];
        jaga_x_syoki = 2400;
        jaga.x = jaga_x_syoki;
        jaga.y = 900;
        jaga.frame = 0;
        
        var tuti = new Sprite(400,400);
        tuti.image = core.assets['tuti.png'];
        tuti_x_syoki = -500;
        tuti.x = tuti_x_syoki;
        tuti.y = 900;
        tuti.frame = 0;
        
        //トキさんのキャラデータの初期設定
        var toki = new Sprite(400,400);
        var syosoku_toki = 0;
        var spead_toki;
        var time_toki = 0;
        toki.image = core.assets['toki.png'];
        toki.x = 0;
        toki.y = -1100000;
        toki.frame = 0;
        
        //じゃぱりまんの初期設定
        var japariman_blue = new Sprite(70,70);
        var syosoku_japariman_blue = 0;
        var spead_japariman_blue;
        var time_japariman_blue = 0;
        japariman_blue.image = core.assets['japariman_blue.png'];
        japariman_blue_x_syoki = -500;
        japariman_blue.x = japariman_blue_x_syoki;
        japariman_blue.y = 0;
        japariman_blue.frame = 0;
        
        var japaricoin = new Sprite(350,350);
        japaricoin.image = core.assets['japaricoin.png'];
        japaricoin_x_syoki = -500;
        japaricoin.x = japaricoin_x_syoki;
        japaricoin.y = 0;
        japaricoin.frame = 0;
        
        
        // ネズミのおもちゃの初期設定
        var mouse = new Sprite(400,400);
        var syosoku_mouse = 0;
        var spead_mouse;
        var time_mouse = 0;
        mouse.image = core.assets['mouse.png'];
        mouse_x_syoki = -500;
        mouse.x = mouse_x_syoki;
        mouse.y = 0;
        mouse.frame = 0;
        
        
        var game_over = new Sprite(1600,1600);
        game_over.image = core.assets['game_over.png'];
        game_over.x = 0;
        game_over.y = 5000;
        
        var st = new Sprite(1600,1600);
        st.image = core.assets['st.png'];
        st.x = 0;
        st.y = 5000;
        
        var s2 = new Sprite(1600,1600);
        s2.image = core.assets['s2.png'];
        s2.x = 0;
        s2.y = 5000;
        
        var koe = new Sprite(600,200);
        koe.image = core.assets['koe.png'];
        koe.x = 0;
        koe.y = 50000;
        koe.frame = 0;
        
        //ボスの初期設定
        var boss = new Sprite(200,240);
        var syosoku_boss = 0;
        var spead_boss;
        var time_boss = 0;
        boss.image = core.assets['boss.png'];
        boss.x = 1600;
        boss.y = 0;
        boss.frame = 0;
        
        //地面の設定
        
        var zimen1 = new Sprite(4000,600);
        zimen1.image = core.assets['zimen.png'];
        zimen1_x_syoki = 0;
        zimen1.x = zimen1_x_syoki;
        zimen1.y = 1300;
        zimen1.frame = 0;
        
        
        var zimen2 = new Sprite(4000,600);
        zimen2.image = core.assets['zimen.png'];
        zimen2_x_syoki = 4600;
        zimen2.x = zimen2_x_syoki;
        zimen2.y = 1300;
        zimen2.frame = 0;
        
        
        //背景
        var s = new Sprite(16000,1600);
        s.image = core.assets['s.png'];
        s.x = 0;
        s.y = 0;
        s.frame = 0;
        
        
        
        //空中のブロックの初期設定
        var block1 = new Sprite(200,200);
        block1.image = core.assets['asiba.png'];
        block1_x_syoki = 2200;
        block1.x = block1_x_syoki;
        block1.y = 600;
        block1.frame = 1;
        
        
        var block2 = new Sprite(200,200);
        block2.image = core.assets['asiba.png'];
        block2_x_syoki = 2000;
        block2.x = block2_x_syoki;
        block2.y = 600;
        block2.frame = 2;
        
        
        var block3 = new Sprite(200,200);
        block3.image = core.assets['asiba.png'];
        block3_x_syoki = 1800;
        block3.x = block3_x_syoki;
        block3.y = 600;
        block3.frame = 3;
        
        var dokan1 = new Sprite(400,400);
        dokan1.image = core.assets['dokan1.png'];
        dokan1_x_syoki = 3200;
        dokan1.x = dokan1_x_syoki;
        dokan1.y = 901;
        dokan1.frame = 0;
        
        var dokan2 = new Sprite(400,400);
        dokan2.image = core.assets['dokan2.png'];
        dokan2_x_syoki = -500;
        dokan2.x = dokan2_x_syoki;
        dokan2.y = 900;
        dokan2.frame = 0;
        
        var dokan3 = new Sprite(203,1915);
        dokan3.image = core.assets['dokan3.png'];
        dokan3_x_syoki = -500;
        dokan3.x = dokan3_x_syoki;
        dokan3.y = 900;
        dokan3.frame = 0;
        
        var dokan4 = new Sprite(400,400);
        dokan4.image = core.assets['dokan1.png'];
        dokan4_x_syoki = 5000;
        dokan4.x = dokan4_x_syoki;
        dokan4.y = 901;
        dokan4.frame = 0;
        
        
        var g = 10;
        
        function grand(){
            spead_serval = syosoku_serval-g*time_serval;
            spead_toki = syosoku_toki-g*0.05*time_toki;
            spead_japariman_blue = syosoku_japariman_blue-g*time_japariman_blue;
            spead_mouse = syosoku_mouse-g*time_mouse;
        };
        function times(name){
            time        +=0.07;
            if(time>0){
            time2       +=0.07;
            time_serval +=0.05;
            time_toki   +=0.05;
            time_japariman_blue +=0.05;
            time_mouse +=0.05;
            };
        };
        
        function buturi_left(){
            if(map_p>=600){
            block1.x += 5;
            block2.x += 5;
            block3.x += 5;
            if(and==0){
            map_p += 5;
            };
            japariman_blue.x += 5;
            boss.x += 5;
            mouse.x += 5;
            zimen1.x += 5;
            zimen2.x += 5;
            s.x+= 5;
            dokan1.x+= 5;
            dokan4.x+= 5;
            jaga.x+= 5;
            };
        };
        
        function buturi_right(){
            if(map_p>=600){
            block1.x -= 5;
            block2.x -= 5;
            block3.x -= 5;
            if(and==0){
            map_p -= 5;
            };
            japariman_blue.x -= 5;
            boss.x -= 5;
            mouse.x -= 5;
            zimen1.x -= 5;
            zimen2.x -= 5;
            s.x-= 5;
            dokan1.x-= 5;
            dokan4.x-= 5;
            jaga.x-= 5;
            };
        };
        
        //ジャパリまんの反射係数設定
        function hansyaj(name){
            time_japariman_blue = 0;
            syosoku_japariman_blue = -spead_japariman_blue*0.8;
        };
        //ボスの反射係数
        function hansyab(name){
            time_boss = 0;
            syosoku_boss = -spead_boss*0.3;
        };
        //ネズミのおもちゃの反射係数
        function hansyam(name){
            time_mouse = 0;
            syosoku_mouse = -spead_mouse*0.8;
        };
        
        function character(){
            japariman_blue.x=5000;
            character1 = serval.x;
            character2 = serval.y;
            serval.x = toki.x;
            serval.y = toki.y;
            toki.x = character1;
            toki.y = character2;
        };
        
        function warp(name){
            if(this.x>1600){
                this.x = -400;
            };
            if(this.x<-400){
                this.x = 1600;
            };
        };
        //サーバルちゃんの動作設定
        serval.addEventListener('enterframe',function(){
                                syosoku_character = syosoku_serval;
                                spead_character = spead_serval;
                                time_character = time_serval;
                                if(this.x<=0){
                                this.x = 0;
                                };
                                if(time>0){
                                st.y=5000;
                                };
                                if(this.y>2500){
                                s2.y=5000;
                                this.x=0;
                                this.y=0;
                                game_over.y = 0;
                                time = -200;
                                time2 = 0;
                                block3.x = block3_x_syoki;
                                block3.frame = 3;
                                block2.x = block2_x_syoki;
                                block2.frame = 2;
                                block1.x = block1_x_syoki;
                                block1.frame = 1;
                                s.x = 0;
                                s.y = 0;
                                s.frame = 0;
                                zimen2.x = zimen2_x_syoki;
                                zimen2.frame = 0;
                                zimen1.x = zimen1_x_syoki;
                                zimen1.frame = 0;
                                mouse.x = mouse_x_syoki;
                                mouse.frame = 0;
                                japariman_blue.x = japariman_blue_x_syoki;
                                japariman_blue.frame = 0;
                                jaga.x = jaga_x_syoki;
                                map_p = 0;
                                dokan1.x = dokan1_x_syoki;
                                time_serval = 0;
                                syosoku_serval = 0;
                                };
                             if(this.intersect(japariman_blue)){
                                character();
                               // var sound = core.assets['jump.mp3'].clone();
                               // sound.play();
                             };
                                
                                if(this.intersect(japaricoin)){
                                japaricoin.x = -500;
                                koe.frame = 1;
                                };
                                
                                if(this.intersect(zimen1)){
                                time_serval = 0;
                                syosoku_serval = 0;
                                this.y = zimen1.y-400;
                                };
                                
                                if(this.intersect(zimen2)){
                                time_serval = 0;
                                syosoku_serval = 0;
                                this.y = zimen2.y-400;
                                };
                                
                                //ブロックの処理
                                if(this.intersect(block1)){
                                    //上に乗った時
                                    if(this.y<block1.y-100){
                                        if(this.x>block1.x-400+6){
                                            if(this.x<block1.x+200-6){
                                                time_serval = 0.01;
                                                syosoku_serval = 0;
                                                this.y=block1.y-400;
                                            };
                                        };
                                    };
                                    //下からの接触
                                    if(this.y>block1.y+100){
                                if(this.x>block1.x-400+6){
                                            syosoku_serval = 0;
                                            time_serval =1;
                                            this.y=block1.y+200;
                                block1.x = -500;
                                        };
                                    };
                                    //左からの接触
                                    if(this.x>block1.x-400){
                                        if(this.x<block1.x-400+6){
                                            if(this.y>block1.y-400+6){
                                                if(this.y<block1.y){
                                                    buturi_left();
                                
                                                };
                                            };
                                        };
                                    };
                                    //右からの接触
                                    if(this.x>block1.x+200-6){
                                        if(this.x<block1.x+200){
                                            if(this.y>block1.y-400+6){
                                                if(this.y<block1.y){
                                                buturi_right();
                                                };
                                            };
                                        };
                                    };
                                };
                                
                                if(this.intersect(block2)){
                                //上に乗った時
                                if(this.y<block2.y-100){
                                if(this.x>block2.x-400+6){
                                if(this.x<block2.x+200-6){
                                time_serval = 0.01;
                                syosoku_serval = 0;
                                this.y=block2.y-400;
                                };
                                };
                                };
                                //下からの接触
                                if(this.y>block2.y+100){
                                if(this.x>block2.x-400+6){
                                syosoku_serval = 0;
                                time_serval =1;
                                this.y=block2.y+200;
                                if(block2.frame<3){
                                block2.frame = 3;
                                japariman_blue.x = block2.x+70;
                                japariman_blue.y = block2.y-70;
                                syosoku_japariman_blue = 20;
                                time_japariman_blue = 0;
                                };
                                };
                                };
                                //左からの接触
                                if(this.x>block2.x-400){
                                if(this.x<block2.x-400+6){
                                if(this.y>block2.y-400+6){
                                if(this.y<block2.y){
                                buturi_left();
                                };
                                };
                                };
                                };
                                //右からの接触
                                if(this.x>block2.x+200-6){
                                if(this.x<block2.x+200){
                                if(this.y>block2.y-400+6){
                                if(this.y<block2.y){
                                buturi_right();
                                };
                                };
                                };
                                };
                                };
                                
                                if(this.intersect(block3)){
                                //上に乗った時
                                if(this.y<block3.y-100){
                                if(this.x>block3.x-400+6){
                                if(this.x<block3.x+200-6){
                                time_serval = 0.01;
                                syosoku_serval = 0;
                                this.y=block3.y-400;
                                };
                                };
                                };
                                //下からの接触
                                if(this.y>block3.y+100){
                                if(this.x>block3.x-400+6){
                                syosoku_serval = 0;
                                time_serval =1;
                                this.y=block3.y+200;
                                };
                                };
                                //左からの接触
                                if(this.x>block3.x-400){
                                if(this.x<block3.x-400+6){
                                if(this.y>block3.y-400+6){
                                if(this.y<block3.y){
                                buturi_left();
                                
                                };
                                };
                                };
                                };
                                //右からの接触
                                if(this.x>block3.x+200-6){
                                if(this.x<block3.x+200){
                                if(this.y>block3.y-400+6){
                                if(this.y<block3.y){
                                buturi_right();
                                };
                                };
                                };
                                };
                                };
                                
                                if(this.intersect(dokan1)){
                                //上に乗った時
                                if(this.y<dokan1.y){
                                if(this.x>dokan1.x-400+6){
                                if(this.x<dokan1.x+400-6){
                                if(this.x!=dokan1.x){
                                time_serval = 0;
                                syosoku_serval = 0;
                                this.y = dokan1.y-400;
                                if (core.input.down){
                                map_p = dokan1_x_syoki;
                                block3.x = block3_x_syoki - dokan1_x_syoki +600;
                                block2.x = block2_x_syoki - dokan1_x_syoki +600;
                                block1.x = block1_x_syoki - dokan1_x_syoki +600;
                                zimen2.x = zimen2_x_syoki - dokan1_x_syoki +600;
                                zimen1.x = zimen1_x_syoki - dokan1_x_syoki +600;
                                jaga.x = jaga_x_syoki - dokan1_x_syoki +600;
                                tuti.x = tuti_x_syoki - dokan1_x_syoki +600;
                                dokan1.x = dokan1_x_syoki - dokan1_x_syoki +600;
                                dokan4.x = dokan4_x_syoki - dokan1_x_syoki +600;
                                mouse.x = mouse_x_syoki - dokan1_x_syoki +600;
                                japariman_blue.x = japariman_blue_x_syoki - dokan1_x_syoki +600;
                                s.x = -dokan1_x_syoki + 600;
                                this.x = dokan1.x;
                                if(muki>9){
                                this.frame += 27;
                                };
                                if(muki<-29){
                                this.frame += 27;
                                };
                                };
                                };
                                };
                                };
                                };
                                
                                if(this.x==dokan1.x){
                                if(this.y==dokan1.y-1){
                                s2.y=0;
                                this.x=0;
                                this.y=0;
                                st.y = 0;
                                time =- 20;
                                time2 = 0;
                                koe.frame = 0;
                                japaricoin.x = 600;
                                japaricoin.y = 0;
                                block3.x = 11800;
                                block3.y = 600;
                                block3.frame = 3;
                                block2.x = 111800;
                                block2.y = 600;
                                block2.frame = 2;
                                block1.x = 1112000;
                                block1.y = 600;
                                block1.frame = 1;
                                s.x = 0;
                                s.y = 0;
                                s.frame = 0;
                                zimen2.x = 0;
                                zimen2.y = 1300;
                                zimen2.frame = 0;
                                zimen1.x = 5000;
                                zimen1.y = 1300;
                                zimen1.frame = 0;
                                mouse.x = 1000;
                                mouse.y = 500;
                                mouse.frame = 0;
                                japariman_blue.x = 20000;
                                japariman_blue.y = 20000;
                                japariman_blue.frame = 0;
                                jaga.x = 11100;
                                jaga.y = 900;
                                tuti.x = 600;
                                tuti.y = 900;
                                map_p = 0;
                                dokan1.x = 3400;
                                dokan1.y = 901;
                                and=1;
                                dokan2.y = 900;
                                dokan2.x = 1000;
                                dokan3.y = 900+400-1915;
                                dokan3.x = 1400;
                                zimen2.image = core.assets['zimen2.png'];
                                };
                                time_serval = 0;
                                syosoku_serval = 0;
                                if (core.input.down){
                                this.y +=3;
                                };
                                if(core.input.up){
                                this.y -=2;
                                };
                                if(this.y>dokan1.x+100){
                                if(core.input.right){
                                 this.x=dokan1.x
                                    buturi_left();
                                };
                                if(core.input.left){
                                 this.x=dokan1.x
                                buturi_right();
                                };
                                };
                                };
                                
                                
                                
                                //左からの接触
                                if(this.x>dokan1.x-400){
                                if(this.x<dokan1.x-400+6){
                                if(this.y>dokan1.y-400+6){
                                if(this.y<dokan1.y){
                                buturi_left();
                                };
                                };
                                };
                                };
                                //右からの接触
                                if(this.x>dokan1.x+400-6){
                                if(this.x<dokan1.x+400){
                                if(this.y>dokan1.y-800+6){
                                if(this.y<dokan1.y){
                                buturi_right();
                                };
                                };
                                };
                                };
                                };
                                if(this.intersect(dokan2)){
                                //上に乗った時
                                if(this.y<dokan2.y-100){
                                if(this.x>dokan2.x-400+6){
                                if(this.x<dokan2.x+200-6){
                                time_serval = 0.01;
                                syosoku_serval = 0;
                                this.y=dokan2.y-400;
                                };
                                };
                                };
                                if(this.y>dokan2.y-300){
                                this.y = dokan2.y;
                                time_serval = 0.01;
                                syosoku_serval = 0;
                                if(this.x==1000){
                                st.y = 0;
                                time = -20;
                                time2 =- 20;
                                map_p = dokan4_x_syoki;
                                japaricoin.x = -500;
                                block3.x = block3_x_syoki - dokan4_x_syoki +600;
                                block2.x = block2_x_syoki - dokan4_x_syoki+600;
                                block1.x = block1_x_syoki - dokan4_x_syoki+600;
                                zimen2.x = zimen2_x_syoki - dokan4_x_syoki+600;
                                zimen1.x = zimen1_x_syoki - dokan4_x_syoki+600;
                                jaga.x = jaga_x_syoki - dokan4_x_syoki+600;
                                tuti.x = tuti_x_syoki - dokan4_x_syoki+600;
                                dokan1.x = dokan1_x_syoki - dokan4_x_syoki+600;
                                dokan4.x = dokan4_x_syoki - dokan4_x_syoki+600;
                                mouse.x = mouse_x_syoki - dokan4_x_syoki+600;
                                japariman_blue.x = japariman_blue_x_syoki - dokan4_x_syoki+600;
                                s.x = -dokan4_x_syoki+600;;
                                dokan2.x = -500;
                                dokan3.x = -500;
                                zimen2.image = core.assets['zimen.png'];
                                this.x = 600;
                                this.y = 900;
                                and = 0;
                                s2.y = 5000;
                                };
                                };
                                };
                                if(this.intersect(dokan3)){
                                if(this.x>1150){
                                this.x -= 5;
                                };
                                };
                                
                                if(this.intersect(dokan4)){
                                //上に乗った時
                                if(this.y<dokan4.y-350){
                                if(this.x>dokan4.x-400+6){
                                if(this.x<dokan4.x+400-6){
                                time_serval = 0;
                                syosoku_serval = 0;
                                this.y = dokan4.y-400;
                                if(this.x==dokan4.x){
                                map_p = dokan4_x_syoki;
                                };
                                };
                                };
                                };
                                 
                                if(this.x==dokan4.x){
                                if(this.y > dokan4.y-380){
                                if(time>0){
                                 this.y -=5 ;
                                this.x -=6;
                                };
                                map_p = 0;
                                time2 = -1;
                                 time_serval = 0;
                                 syosoku_serval = 0;
                                this.x = dokan4.x;
                                };
                                };
                                
                                //左からの接触
                                if(this.x>dokan4.x-400){
                                if(this.x<dokan4.x-400+6){
                                if(this.y>dokan4.y-400+6){
                                if(this.y<dokan4.y){
                                buturi_left();
                                };
                                };
                                };
                                };
                                //右からの接触
                                if(this.x>dokan4.x+400-6){
                                if(this.x<dokan4.x+400){
                                if(this.y>dokan4.y-800+6){
                                if(this.y<dokan4.y){
                                buturi_right();
                                };
                                };
                                };
                                };
                                };
                                
                             grand();
                             this.y = this.y- spead_serval;
                             times();
                             
                                warp();
                                if(this.x>1600){
                                this.x = -400;
                                };
                                if(this.x<-400){
                                this.x = 1600;
                                };
                                
                             if(muki>9){
                                if(time_serval>0.1){
                             this.frame = 27;
                                };
                             };
                                if(muki<-9){
                                if(time_serval>0.1){
                                this.frame = 26;
                                };
                             };
                                if(this.y<-1000000){
                                this.y=-1100000;
                                this.x=1000;
                                time_serval =0;
                                syosoku_serval=0;
                                };
                                
                                if(time_serval < 0.1){
                                time_serval = 0;
                                syosoku_serval=0;
                                if(muki>9){
                                muki +=1;
                                this.frame = 12;
                                if(muki>1000){
                                this.frame = 30;
                                };
                                };
                                if(muki<-9){
                                muki -=1;
                                this.frame = 13;
                                if(muki<-1000){
                                this.frame = 31;
                                };
                                };
                                };
                                if(time>0){
                             if (core.input.right){
                             muki =10;
                                if(and==0){
                                map_p += 5 ;
                                };
                                this.x += 5;
                                if(map_p>=600){
                                if(and==0){
                                //map_p = 600;
                                this.x -= 5;
                                };
                                };
                             if(time_serval<0.1){
                             this.frame = time % 12;
                             if (core.input.left){
                             this.frame = 30;
                                if(map_p>=600){
                                map_p = 600;
                                this.x = 600;
                                };
                             };
                             };
                                         };
                             if (core.input.left){
                             muki =-10;
                                if(and==0){
                                map_p -= 5 ;
                                };
                                this.x -= 5;
                                if(map_p>=600){
                                this.x += 5;
                                };
                                if(map_p<0){
                                this.x += 5;
                                map_p += 5;
                                };
                             if(time_serval<0.1){
                             this.frame = time % 12 + 14;
                             if (core.input.right){
                             this.frame = 29;
                             };
                             };
                             };
                                
                                if (core.input.up){
                                if(muki<-9){
                                muki =-10;
                                };
                                if(muki>9){
                                muki =10;
                                };
                                if(time_serval<0.1){
                                this.y-=1;
                                };
                                if(time_serval<0.1){
                                syosoku_serval=38;
                                if(this.y>-100000){
                               // var sound = core.assets['jump.wav'].clone();
                               // sound.play();
                                };
                                };
                                };
                                if (core.input.down){
                                if(muki<-9){
                                muki =-10;
                                };
                                if(muki>9){
                                muki =10;
                                };
                                if(this.intersect(mouse)){
                                this.frame = time % 4 + 33;
                                this.x = mouse.x;
                                this.y = mouse.y;
                                };
                                };
                                };
                             });
        //トキさんの動作設定
        toki.addEventListener('enterframe',function(){
                              if(this.intersect(japariman_blue)){
                              character();
                              //var sound = core.assets['jump.mp3'].clone();
                              //sound.play();
                              };
                              if(this.y>2500){
                              game_over.y = 0;
                              };
                              if(this.intersect(zimen1)){
                              time_toki = 0;
                              syosoku_toki = 0;
                              this.y = zimen1.y-400;
                              };
                              
                              grand();
                              this.y = this.y- spead_toki;
                              times();
                              
                              warp();
                              if(this.x>1600){
                              this.x = -400;
                              };
                              if(this.x<-400){
                              this.x = 1600;
                              };
                              
                              if(muki>9){
                              if(time_toki>0.1){
                              this.frame = 27;
                              };
                              };
                              if(muki<-9){
                              if(time_toki>0.1){
                              this.frame = 26;
                              };
                              };
                              if(this.y<-1000000){
                              this.y=-1100000;
                              this.x=1000;
                              time_toki =0;
                              syosoku_toki=0;
                              };
                              
                              if(time_toki < 0.1){
                              time_toki = 0;
                              syosoku_toki=0;
                              if(muki>9){
                              muki +=1;
                              this.frame = 12;
                              if(muki>1000){
                              this.frame = 37;
                              };
                              };
                              if(muki<-9){
                              muki -=1;
                              this.frame = 13;
                              if(muki<-1000){
                              this.frame = 36;
                              };
                              };
                              };
                              
                              if (core.input.right){
                              muki =10;
                              this.x += 4;
                              if(time_toki<0.1){
                              this.frame = time % 12;
                              if (core.input.left){
                              this.frame = 30;
                              };
                              };
                              };
                              if (core.input.left){
                              muki =-10;
                              this.x -= 4;
                              if(time_toki<0.1){
                              this.frame = time % 12 + 14;
                              if (core.input.right){
                              this.frame = 29;
                              };
                              };
                              };
                              if (core.input.up){
                              if(muki<-9){
                              muki =-10;
                              this.frame = time % 6 + 30;
                              };
                              if(muki>9){
                              muki =10;
                              this.frame = time % 6 + 39;
                              };
                              this.y -= 1;
                              syosoku_toki += 0.1;
                              };
                              if (core.input.down){
                              if(muki<-9){
                              muki =-10;
                              };
                              if(muki>9){
                              muki =10;
                              };
                              if(time_toki>0.003){
                              syosoku_toki -= 0.1;
                              };
                              };
                                });
        //足場の動作設定
        block1.addEventListener('enterframe',function(){
                               if(map_p>=600){
                               if(core.input.right){
                               this.x-= 5;
                               };
                               if(core.input.left){
                               this.x+= 5;
                               };
                               };
                                });
        
        block2.addEventListener('enterframe',function(){
                                if(map_p>=600){
                                if(core.input.right){
                                this.x-= 5;
                                };
                                if(core.input.left){
                                this.x+= 5;
                                };
                                };
                                });
        block3.addEventListener('enterframe',function(){
                                if(map_p>=600){
                                if(core.input.right){
                                this.x-= 5;
                                };
                                if(core.input.left){
                                this.x+= 5;
                                };
                                };
                                });
        
        //じゃぱりまんの動作設定
        japariman_blue.addEventListener('enterframe',function(){
                                        if(map_p>=600){
                                        if(core.input.right){
                                        this.x-= 5;
                                        };
                                        if(core.input.left){
                                        this.x+= 5;
                                        };
                                        };
        japariman_blue.y = japariman_blue.y- spead_japariman_blue;
                                    if(this.intersect(zimen1)){
                                    hansyaj();
                                    this.y = zimen1.y-70;
                                    };
                                        if(this.intersect(zimen2)){
                                        hansyaj();
                                        this.y = zimen2.y-70;
                                        };
                                        if(this.intersect(block2)){
                                        hansyaj();
                                        this.y = block2.y-70;
                                        };
                                    });
        //ネズミのおもちゃの動作設定
        mouse.addEventListener('enterframe',function(){
                               
                               mouse.frame = 0;
                               if (core.input.down){
                               if(this.intersect(serval)){
                               this.frame = time % 4 + 1;
                               time_serval = 0;
                               syosoku_serval = 0;
                               };
                               };
                                   
                                   
                                   });
        //地面の動作設定
        zimen1.addEventListener('enterframe',function(){
                    
                               if(map_p>=600){
                               if(core.input.right){
                               this.x-= 5;
                               };
                               if(core.input.left){
                               this.x+= 5;
                               };
                               };
                               });
        
        zimen2.addEventListener('enterframe',function(){
                                
                                if(map_p>=600){
                                if(core.input.right){
                                this.x-= 5;
                                };
                                if(core.input.left){
                                this.x+= 5;
                                };
                                };
                                
                                });
        s.addEventListener('enterframe',function(){
                           if(map_p>=600){
                           if(core.input.right){
                           this.x-= 5;
                           };
                           if(core.input.left){
                           this.x+= 5;
                           };
                           };
                            });
        
        jaga.addEventListener('enterframe',function(){
                                
                                if(map_p>=600){
                                if(core.input.right){
                                this.x-= 5;
                                };
                                if(core.input.left){
                                this.x+= 5;
                                };
                                };
                              this.frame=0;
                              if(this.x<serval.x){
                              this.frame=1;
                              };
                                
                                });
        
        tuti.addEventListener('enterframe',function(){
                              
                              if(map_p>=600){
                              if(core.input.right){
                              this.x-= 5;
                              };
                              if(core.input.left){
                              this.x+= 5;
                              };
                              };
                              this.frame=0;
                              if(this.x<serval.x){
                              this.frame=1;
                              };
                              koe.y=900000;
                              if(this.intersect(serval)){
                                 koe.x=tuti.x-80;
                                 koe.y=tuti.y-200;
                                 };
                              
                              });
        
        
        dokan1.addEventListener('enterframe',function(){
                              
                              if(map_p>=600){
                              if(core.input.right){
                              this.x-= 5;
                              };
                              if(core.input.left){
                              this.x+= 5;
                              };
                              };
                              this.frame=0;
                              if(this.x<serval.x){
                              this.frame=1;
                              };
                              
                              });
        
        dokan4.addEventListener('enterframe',function(){
                                
                                if(map_p>=600){
                                if(core.input.right){
                                this.x-= 5;
                                };
                                if(core.input.left){
                                this.x+= 5;
                                };
                                };
                                this.frame=0;
                                if(this.x<serval.x){
                                this.frame=1;
                                };
                                
                                });

        
        //ボスの動作設定157 187
        boss.addEventListener('enterframe',function(){
                              if(map_p>=600){
                              if(core.input.right){
                              this.x-= 5;
                              };
                              if(core.input.left){
                              this.x+= 5;
                              };
                              };
                              this.frame = time % 5 + 5;
                                time_boss += 0.05;
                                spead_boss = syosoku_boss-g*time_boss;
                                boss.y = boss.y - spead_boss;
                              boss.x-=3;
                              
                              if(this.x<-200){
                              this.x = 1600;
                              this.y=0;
                              };
                              if(this.intersect(zimen1)){
                              hansyab();
                              this.y = zimen1.y-240;
                              };
                              if(this.intersect(zimen2)){
                              hansyab();
                              this.y = zimen2.y-240;
                              };
                              
                              
                              });
        
        
        map.loadData(baseMap);
        
        core.rootScene.on('touchstart',function(e){
                          
                          mouse.x = e.x;
                          mouse.y = e.y;
                          
                          });
        
        //文字ラベル作成する
        var label = new Label();
        label.x = 0;
        label.y = 0;
        label.color = 'bule';
        label.font = '30px "Arial"';
        label.text = '0';
        label.on('enterframe',function(){
                 label.text = core.frame;
                 });
        
        //core.rootSceneにチャイルドマップデータ追加
        core.rootScene.addChild(map);
        core.rootScene.addChild(label);
        core.rootScene.addChild(s);
        core.rootScene.addChild(s2);
        core.rootScene.addChild(jaga);
        core.rootScene.addChild(tuti);
        core.rootScene.addChild(koe);
        core.rootScene.addChild(serval);
        core.rootScene.addChild(japariman_blue);
        core.rootScene.addChild(toki);
        core.rootScene.addChild(dokan1);
        core.rootScene.addChild(dokan2);
        core.rootScene.addChild(dokan3);
        core.rootScene.addChild(dokan4);
        core.rootScene.addChild(zimen1);
        core.rootScene.addChild(zimen2);
        core.rootScene.addChild(block1);
        core.rootScene.addChild(block2);
        core.rootScene.addChild(block3);
        core.rootScene.addChild(mouse);
        core.rootScene.addChild(japaricoin);
        core.rootScene.addChild(boss);
        core.rootScene.addChild(st);
        core.rootScene.addChild(game_over);
    };
    core.start();
};
