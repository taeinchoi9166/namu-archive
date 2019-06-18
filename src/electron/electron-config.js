const {app, BrowserWindow} = require('electron');
let browser;

function initWindow(){
    let browserView = new BrowserWindow({width:1000,height:800});

    browserView.on('closed',()=>{
        browser = null;
    });

    browserView.loadURL('http://localhost:3000');
}
app.on('ready',initWindow);
app.on('window-all-closed',()=>{
   if(process.platform !== "darwin"){
       app.quit();
   }
});

app.on('activate',()=>{
   if(browser === null){
       initWindow();
   }
});