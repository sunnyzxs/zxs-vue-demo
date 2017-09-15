var express = require('express');
var webpack = require('webpack');
var path = require('path')
var ip = require('ip');
var config = require('../webpack/webpack.config');
var exphbs = require('express-handlebars');
var history = require('connect-history-api-fallback');

console.log();

//监听
var app = express();

var compiler = webpack(config);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: 'http://localhost:8888/',
    stats: {
        colors: true,
        chunks: false
    }
});

app.use(devMiddleware)


//设置模板引擎
app.engine('.hbs', exphbs({
    layoutsDir: `${process.cwd()}/build/views/layouts`,
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine','.hbs');
app.set('views', path.join(__dirname , '../views/layouts'))

app.use(history(),function(req,res){
    res.render('main',{ip:ip.address(),port: '8888'});
})

app.listen(8888, function(err){
    if(err){
        console.log(err)
        return;
    }
    console.log('Listening http://localhost:8888')
})