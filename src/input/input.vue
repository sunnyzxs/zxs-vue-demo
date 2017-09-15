<template>
    <div class="getInputFile">
        <img src='' v-show='false'>
        <input class='setInputFile' type='file' @change='test'/>
    </div>
</template>

<script>
    export default{
        mounted(){
            $('.setInputFile').addClass('test');
        },
        methods:{
            test(e){
                console.log(e);
                let getFile = e.target.files[0];

                let reader = new FileReader();

                let File = reader.readAsDataURL(getFile);

                reader.onload = function(e){
                    console.log(e.target.result)
                }
            }
        }
    }
</script>

<style lang='scss'>
.getInputFile{
    width: 200px;
    height: 200px;
    position: relative;
    border: 1px dashed #e1e1e1;
    &:after{
        content: '+';
        position: absolute;
        z-index: 1;
        font-size: 100px;
        left: 50%;
        transform: translateX(-50%);
        line-height: 180px;
    }
}
.setInputFile{
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    z-index: 2;
}
</style>
