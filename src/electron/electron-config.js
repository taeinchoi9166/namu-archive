const {app, BrowserWindow} = require('electron');
let browser;

function initWindow(){
    let browserView = new BrowserWindow({width:1000,height:800,webPreferences:{nodeIntegration:true}});

    browserView.on('closed',()=>{
        browser = null;
    });

    browserView.loadURL('http://localhost:3000');

    // let view = new BrowserView();
    // browserView.setBrowserView(view);
    // view.setBounds({x:400,y:200, width:500, height:600});
    // view.setAutoResize({width:true,height:true})
    // view.webContents.loadURL("https://namu.wiki/w/");
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
