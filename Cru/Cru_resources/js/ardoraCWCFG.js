//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=300; timeIni=300; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#C0C0C0"; colorButton="#000000"; colorText="#000000"; colorSele="#FFFF59";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Times New Roman', Times, serif";
var fActi="'Times New Roman', Times, serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="'Times New Roman', Times, serif";
var timeOnMessage=5; messageOk="¡Felicidades! Lo has logrado"; messageTime="Se te ha acabado el tiempo"; messageError="¡Te has equivocado!"; messageErrorG="¡Te has equivocado!"; messageAttempts="¡Ups! Tu número de intentos se han acabado"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q3J1"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Og==","Qw==","Og==","TQ==","RQ==","Uw==","VQ==","Ug==","QQ==","Og==","Og==","Og==","Og=="],["Og==","TA==","Og==","SQ==","Og==","Og==","Og==","Og==","Og==","Ug==","Og==","Og==","Og=="],["Og==","QQ==","Og==","TQ==","Og==","Og==","Og==","Og==","Og==","RQ==","Og==","Og==","Og=="],["Og==","Ug==","Og==","RQ==","UA==","SQ==","Qw==","QQ==","Og==","QQ==","Og==","Og==","Og=="],["Og==","Tw==","Og==","Uw==","Og==","Og==","Og==","Og==","Og==","TA==","Og==","Og==","SA=="],["Tg==","Og==","Og==","SQ==","Og==","Sg==","VQ==","Uw==","VA==","SQ==","Qw==","SQ==","QQ=="],["VQ==","Og==","Og==","Uw==","Og==","Og==","Og==","Og==","Og==","Uw==","Og==","Og==","RA=="],["RA==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","TQ==","Og==","Og==","Tw=="],["Tw==","Og==","Og==","QQ==","Tg==","Qw==","SQ==","QQ==","Tg==","Tw==","Uw==","Og==","Og=="]];
var x1=[4,4,6,4,2,4,10,13,1];
var y1=[1,4,6,9,1,1,2,5,6];
var x2=[9,8,13,11,2,4,10,13,1];
var y2=[1,4,6,9,5,7,9,8,9];
var imaCW=["","","","","","","","",""];
var audioCW=["","","","","","","","",""];
var defCW=["Afán de medida y orden.","Los géneros literarios están divididos en 3: Lírica, dramática y _____.","Los héroes griegos siempre buscaban la _____ para todos.","Para hacer justicia se necesitaba sabiduría, la cual era atribuida a los _____.","El lenguaje debe ser elegante y también _____.","Es la imitación de la realidad de la naturaleza con fin esencial del arte.","Encontramos objetos, costumbres, animales muy bien descritos con verosimilitud, a esto se le dice ______.","Es una fuerza irresistible sobre hombres y dioses se le pude llamar también destino fatal.","Las obras tienen una estructura: Inicio, ______ , Desenlace"];
var colNum=13;
var rowNum=9;
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
