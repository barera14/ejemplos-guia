
//ejemplo comentarios
alert('Bienvenido a JavaScrip');
alert('Ha hecho click sobre el párrafo inferior');


const a = 7;
document.writeln("a es " + a + ".");
var numero=5;

// ejemplo declaracion de variables
//tipos de datos
var boolean=true;
var varnull=null;
var varNumerico=12345;
var varString="hola";
var varUndefined= undefined;
var varsymbol=Symbo("foo");
// ejemplo conversiones
toString(varNumerico);
parseInt(varString);
Number("12");
parseFloat(2);
//---> falta ejemplos literales

// ejemplo if else switch

var numero=3;
if(numero>3){
	document.writeln("numero es mayor a 3");
}else{
	document.writeln("numero menor a 3");
}
// ejemplo switch
var Animal = 'jirafa';
switch (Animal) {
  case 'Gallo':
  console.log('nombre del Gallo');
    break;
  case 'jirafa':
  console.log('nombre de la jirafa');
    break;
  case 'Perro':
    console.log('nombre del perro');
    break;

  default:
    console.log('este animal no esta');
}
// ejemplo try-catch
function getMonthName (mo) {
  mo = mo-1; 
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                "Aug","Sep","Oct","Nov","Dec"];
  if (months[mo] != null) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; 
  }
}

try { 
  monthName = getMonthName(myMonth); /
}
catch (e) {
  monthName = "unknown";
  logMyErrors(e);
}
//ejemplo throw

function UserException (aviso){
  this.aviso=aviso;
  this.nombre="UserException";
}

UserException.prototype.toString = function () {
  return this.nombre + ': "' + this.aviso + '"';
}

throw new UserException("Value too high");

