function get(key){return JSON.parse(localStorage.getItem(key)||"[]")}
function set(key,val){localStorage.setItem(key,JSON.stringify(val))}

function addTeam(){
let t=document.getElementById('team').value
let s=document.getElementById('sport').value
let data=get(s)
data.push({name:t,w:0,l:0})
set(s,data)
alert('added')
}

function renderTeams(s){
let list=document.getElementById('teams')
let data=get(s)
list.innerHTML=data.map(x=>`<li>${x.name}</li>`).join('')
}

function updateScore(){
let name=document.getElementById('teamScore').value
let w=+document.getElementById('wins').value
let l=+document.getElementById('losses').value
let sports=['basketball','volleyball','softball']
sports.forEach(s=>{
let data=get(s)
data=data.map(x=>x.name==name?{...x,w,l}:x)
set(s,data)
})
alert('updated')
}

function renderScoreboard(){
let all=[...get('basketball'),...get('volleyball'),...get('softball')]
all.sort((a,b)=>b.w-a.w||a.name.localeCompare(b.name))
let table=document.getElementById('table')
table.innerHTML='<tr><th>Rank</th><th>Team</th><th>W</th><th>L</th></tr>'+
all.map((x,i)=>`<tr><td>${i+1}</td><td>${x.name}</td><td>${x.w}</td><td>${x.l}</td></tr>`).join('')
}

function addSchedule(){
let a=document.getElementById('a').value
let b=document.getElementById('b').value
let dt=document.getElementById('dt').value
let data=get('schedule')
data.push({a,b,dt})
set('schedule',data)
alert('added')
}

function renderSchedule(){
let data=get('schedule')
let list=document.getElementById('list')
list.innerHTML=data.map(x=>`<li>${x.a} vs ${x.b}<br>${x.dt}</li>`).join('')
}
