var Qut = [
    {'author': ' --Oscar Wilde', 
     'quote': '“Be yourself; everyone else is already taken.”'
    },
    {'author': '--Marcus Tullius Cicero', 
     'quote': '“A room without books is like a body without a soul.”'
    },
    {'author': '--Mahatma Gandhi', 
     'quote': '“Be the change that you wish to see in the world.”'
    },
    {'author': '--Wayne Gretzy', 
     'quote': '“You miss 100% of the shots you don\'t take.”'
    },
    {'author': '--Frank Zappa', 
     'quote': '“So many books, so little time.”'
    },
    {'author': '--Narcotics Anonymous', 
     'quote': '“Insanity is doing the same thing, over and over again, but expecting different results.”'
    },
];
var clickBtn=document.getElementById("btn");
function Quotes(){
    var quts=Math.floor(Math.random()*Qut.length + 1);
    document.getElementById('author').innerHTML = `${Qut[quts].author}`;
    document.getElementById('quote').innerHTML = `${Qut[quts].quote}`;}
clickBtn.onclick=Quotes;