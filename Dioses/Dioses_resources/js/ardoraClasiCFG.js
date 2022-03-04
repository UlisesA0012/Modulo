//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=3;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="'Times New Roman', Times, serif";
var fEnun="'Times New Roman', Times, serif";
var timeOnMessage=5; messageOk="¡Felicidades lo lograste!"; messageTime="¡Se acabó el tiempo!"; messageError="¡Vuelve a intentarlo!"; messageErrorG="¡Vuelve a intentarlo!"; messageAttempts="¡Se te acabaron los intentos!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["","","","","",""];
var img_G=["i_zeus.jpg","i_Poseidon.jpg","i_hades.jpg","i_ares.jpg","i_Atenea.jpg","i_hera.jpg"];
var mp3_G=["","","","","",""];
var ogg_G=["","","","","",""];
var n_G=["MQ==","Mg==","Mw==","NA==","NQ==","Ng=="];
var e_G=["","","","","",""];
var mp4_G=["","","","","",""];
var ogv_G=["","","","","",""];
var txtGr=["Zeus: Soberano del Olimpo","Poseidón: Dios de los mares","Hades: Dios del inframundo","Ares: Dios de la guerra","Atenea: Dios de la sabidruría y estrategia","Hera: Reina de los dioses"];
var imgGr=["","","","","",""];
var mp3Gr=["","","","","",""];
var oggGr=["","","","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1];
var messageErrorG="¡Vuelve a intentarlo!";
var dirMedia="Dioses_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="RGlvc2Vz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
