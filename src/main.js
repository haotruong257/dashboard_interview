import { app, BrowserWindow } from 'electron'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('http://localhost:3000') // Load your React app here
}

app.whenReady().then(() => {
    createWindow()
})