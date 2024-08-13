
function clocksec(){
    const date=new Date()
    const secondss=date.getSeconds() 
    const secondsdeg=((secondss/60)*360)+90
    const secondtime=document.getElementById("sec")
    secondtime.style.transform=`rotate(${secondsdeg}deg)`

    const minute=date.getMinutes()
    const minutedeg=((minute/60)*360)+90
    const minutetime=document.getElementById("min")
    minutetime.style.transform=`rotate(${minutedeg}deg)`
    console.log(minute)

    const hour=date.getHours()
    console.log(hour)
    const hourdeg=((hour/12)*360)+90
    const hourtime=document.getElementById("hrs")
    hourtime.style.transform=`rotate(${hourdeg}deg)`
}
clocksec()
setInterval(clocksec,1000)

