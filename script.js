const Width=window.screen.width
const Height=window.screen.height
const area=document.querySelector("textarea")
const save=document.getElementById("save")
const date=new Date()
const nav=document.querySelectorAll('li')
const search=document.getElementById('search')
//for date
var year = date.getFullYear();
var month = date.getMonth()+1;      // Month is zero-indexed (0-11)
var day = date.getDate();
var str1=`${year}`,dateNow="",str2="",str3=""
const checkMonth=()=>{
    if(month<9){
        str2=`0`+`${month}`
    }
    else
        str2=`${month}`
}
const checkDate=()=>{
    if(day<9){
        str3=`0`+`${day}`
    }
    else
        str3=`${day}`
}
checkMonth()
checkDate()
//
dateNow=str1+str2+str3
const container=document.querySelector('#container')
const get=document.querySelector('#Get')
const min=(num1,num2)=>{
    return num1>num2?num2:num1;
}
const setDimensions=()=>{
    area.style.width=`${0.8*min(Width,Height)}px`
    area.style.height=`${0.6*min(Width,Height)}px`
}
save.addEventListener('click',()=>{
    let data=area.value
    if(data!=""){
        store(data)
        alert('stored')
        data=""
    }
})
const store=(data)=>{
    console.log(dateNow)
    localStorage.setItem(dateNow,data)
}
nav.forEach((n)=>{
    n.addEventListener('click',(e)=>{
        if(e.target.innerText==='Get'){
            get.style.display='block'
            container.style.display='none'
        }
        else{
            get.style.display='none'
            container.style.display='block'
            setDimensions()
        }
    })
})
setDimensions()
search.addEventListener('click',()=>{
    console.log('searching')
    var key=""
    const inp=document.querySelectorAll('input')
    inp.forEach((i)=>{
        key+=`${i.value}`
    })
    console.log(key)
    const d=localStorage.getItem(key)
    const nw=document.createElement('div')
    nw.id='found'
    if(d!="" || d!=null){
        nw.innerText=d
        alert(`${d}`)
    }
    else{
        nw.innerText='No Data Found.'
    }
    get.appendChild(nw)
})