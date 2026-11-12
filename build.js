const fs=require('fs'),path=require('path');
const D=path.join(__dirname,'datos-ejemplo')+'/';
const map={p5:'Jugadores 5v5.csv',p4:'Jugadores 5v4 PP.csv',un:'nhl_alineaciones_y_lineas.csv',t5:'Equipos 5v5 SVA.csv',t4:'Equipos 5v4 (power play).csv',tk:'Equipos 4v5 (penal killing).csv',g5:'Porteros 5v5 SVA.csv',gk:'Porteros 4v5.csv',h5:'Histórico 5v5 (opcional).csv',h4:'Histórico 5v4 (opcional).csv'};
const S={};for(const k in map){S[k]={name:map[k],text:fs.readFileSync(D+map[k],'utf8')};}
const js='const SAMPLE='+JSON.stringify(S).replace(/<\//g,'<\/')+';';
const t=fs.readFileSync(path.join(__dirname,'src','template.html'),'utf8');
fs.writeFileSync(path.join(__dirname,'index.html'),t.replace('/*__SAMPLE__*/',()=>js));
console.log('ok',fs.statSync(path.join(__dirname,'index.html')).size);
