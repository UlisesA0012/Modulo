//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=10;
var successes=0; successesMax=8; attempts=0; attemptsMax=4;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#6CB3C1"; colorButton="#91962F"; colorText="#000000"; colorSele="#F40B11";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Lo has lograda, ya identificas categorias gramaticales."; messageTime=""; messageError="Fallaste :(((("; messageErrorG="Fallaste :(((("; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y2F0ZQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Mi mejor amigo fue de vacaciones a Israel.</p>","<p>Mauricio trabaja en un banco.</p>","<p>El profe se llama Salomón Aquino.</p>","<p>Seño Marisol imparte clases entretenidas.</p>","<p>Le ofrecieron un sorbete a Joel.</p>","<p>Rene y Adriana son primos.</p>","<p>Messi es mejor que Ronaldo.</p>","<p>Los,las,ella</p>"];
var iL=["<div  align='center'><img src='cate_resources/media/_99042400_043316411.jpg'></div>","","","","","","",""];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Sus, sus, verbo, sus, sus.</p>","<p>Adj, adj, sus, verbo, prepo,sus, prepo, sus.</p>","<p>Sus, verbo, prepo, art, sus.</p>","<p>Art, sus, prom, sus, sus, sus.</p>","<p>pronom, verbo, prepo, sus, sus.</p>","<p>Sus, prepo, sus, sus, sus.</p>","<p>Sus, prepo, adj, pronom, sus.</p>","<p>Determinante</p>"]; ansRL=["MQ==","Mg==","Mw==","MA==","NA==","NQ==","Ng==","Nw=="];
var iR=["","","","","","","",""];
var auR=[4,1,2,3,5,6,7,8];
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
