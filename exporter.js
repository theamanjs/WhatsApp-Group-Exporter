let processContacts = {
    rawString : function(){ return document.querySelectorAll('header')[1].childNodes[1].childNodes[1].childNodes[0].innerText},
    brokenString : function(){ return this.rawString().split(',')},
    filtered : function(){ return this.brokenString().filter((element) => element.includes('+91'))},
    result: function(){ return this.filtered(); }
}
