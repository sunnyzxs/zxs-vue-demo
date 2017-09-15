<template>
    <div class='canvas' @touchmove='test'>
        <canvas id="myCanvas" :width='width+x' :height= 'height+x+100'></canvas>
        <img :src='src'>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pixels: [],
                imageData: '',
                image: new Image(),
                ctx:'',
                width: 300,
                height: 200,
                x: 20,
                y: 20,
                src:''
            }
        },
        mounted() {
            console.log(a)
            let canvas = document.getElementById('myCanvas');
            this.ctx = canvas.getContext('2d');

            this.image.src = require('./image/WechatIMG1.jpeg');

            this.image.onload = ()=>{
                this.ctx.drawImage(this.image, 0, 0, this.width, this.height);
                this.imageData = this.ctx.getImageData(0, 0, this.width, this.height);
                this.getPixels().then(()=>{
                    this.drawPic();
                });
                
            }
        },
        methods:{
            getPixels(){
                return new Promise((resolve,reject)=>{
                    let pos = 0;
                    let data = this.imageData.data;
                    //Y轴
                    for(this.i = 1; this.i <= this.height; this.i++){
                        //X轴
                        for(this.j = 1; this.j <= this.width; this.j++){
                            pos = [(this.i-1)*this.width+(this.j-1)]*4;
                            if(data[pos] >= 0){
                                let pixel = {
                                    x:  this.j + Math.random() * this.x,
                                    y:  this.i + Math.random() * this.y,
                                    fillStyle: `rgba(${data[pos]}, ${data[pos + 1]}, ${data[pos + 2]}, ${data[pos + 3]})`
                                }
                                this.pixels.push(pixel)
                            }
                        }
                    }
                    resolve();
                })
            },
            drawPic(){
                this.ctx.clearRect(0, 0, this.width, this.height);
                let len = this.pixels.length;
                let curr_pixel = null;
                for(var i = 0; i < len; i++ ){
                    curr_pixel = this.pixels[i];
                    this.draw(curr_pixel.x,curr_pixel.y,curr_pixel.fillStyle);
                }

                // let canvas = document.getElementById('myCanvas');
                // let myimage = canvas.toDataURL('image/png');
                // this.src = myimage;
            },
            draw(x,y,fillStyle){
                setTimeout(()=>{
                    this.ctx.fillStyle = fillStyle;
                    this.ctx.fillRect(x, y, 1, 1);
                },(Math.random()*2*1000))
            },
            test(e){
                console.log(e)
            }
        }
    }
</script>

<style lang='scss'>

</style>
