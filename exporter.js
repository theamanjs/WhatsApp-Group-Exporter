let processContacts = {
    rawString() { return document.querySelectorAll('header')[1].childNodes[1].childNodes[1].childNodes[0].innerText},
    brokenString() { return this.rawString().split(',')},
    filtered () { return this.brokenString().filter((element) => element.includes('+91'))},
    result () { return this.filtered() }
}
