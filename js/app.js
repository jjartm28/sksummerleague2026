function get(key){ return JSON.parse(localStorage.getItem(key) || "[]") }
function set(key,val){ localStorage.setItem(key, JSON.stringify(val)) }

/* ================= TEAM ================= */

function addTeam(){
let name = document.getElementById('team').value
let sport = document.getElementById('sport').value

```
let data = get(sport)
data.push({name, w:0, l:0})
set(sport, data)

alert("Team Added")
```

}

function deleteTeam(){
let name = document.getElementById('teamDelete').value
let sport = document.getElementById('sportDelete').value

```
let data = get(sport)
data = data.filter(x => x.name !== name)
set(sport, data)

alert("Team Deleted")
```

}

/* ================= SCORE ================= */

function updateScore(){
let name = document.getElementById('teamScore').value
let w = +document.getElementById('wins').value
let l = +document.getElementById('losses').value

```
let sports = ['basketball','volleyball','softball']

sports.forEach(s=>{
    let data = get(s)
    data = data.map(x => x.name === name ? {...x, w, l} : x)
    set(s, data)
})

alert("Score Updated")
```

}

/* ================= SCOREBOARD ================= */

function renderScoreboard(){
let all = [
...get('basketball'),
...get('volleyball'),
...get('softball')
]

```
all.sort((a,b)=> b.w - a.w || a.name.localeCompare(b.name))

let table = document.getElementById('table')
table.innerHTML =
    '<tr><th>Rank</th><th>Team</th><th>W</th><th>L</th></tr>' +
    all.map((x,i)=>
        `<tr>
            <td>${i+1}</td>
            <td>${x.name}</td>
            <td>${x.w}</td>
            <td>${x.l}</td>
        </tr>`
    ).join('')
```

}

/* ================= SCHEDULE ================= */

function addSchedule(){
let a = document.getElementById('a').value
let b = document.getElementById('b').value
let dt = document.getElementById('dt').value

```
let data = get('schedule')
data.push({a,b,dt})
set('schedule', data)

alert("Schedule Added")
```

}

function updateSchedule(){
let index = +document.getElementById('schedIndex').value
let dt = document.getElementById('newDT').value

```
let data = get('schedule')
if(data[index]){
    data[index].dt = dt
    set('schedule', data)
    alert("Schedule Updated")
}
```

}

function renderSchedule(){
let data = get('schedule')
let list = document.getElementById('list')

```
list.innerHTML = data.map((x,i)=>
    `<li>
        ${x.a} vs ${x.b}<br>
        ${x.dt}<br>
        <small>Index: ${i}</small>
    </li>`
).join('')
```

}

/* ================= TEAMS DISPLAY ================= */

function renderTeams(sport){
let list = document.getElementById('teams')
let data = get(sport)

```
list.innerHTML = data.map(x => `<li>${x.name}</li>`).join('')
```

}
