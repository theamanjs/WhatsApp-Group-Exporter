let processContacts = {
    rawString() { return document.querySelectorAll('header')[1].childNodes[1].childNodes[1].childNodes[0].innerText; },
    brokenString() { return this.rawString().split(',')},
    filtered () { return  this.brokenString().filter((element) => element.includes('+91'))},
    csv : '',
    loadData() {
        let singleEntity = [];
        this.csv = ['First Name', 'Last Name', 'Display Name', 'Nickname', 'E-mail Address', 'E-mail 2 Address', 'E-mail 3 Address', 'Home Phone', 'Business Phone', 'Home Fax',	'Business Fax', 'Pager', 'Mobile Phone', 'Home Street',	'Home Address 2', 'Home City', 'Home State', 'Home Postal Code', 'Home Country', 'Business Address', 'Business Address 2', 'Business City',	'Business State', 'Business Postal Code', 'Business Country', 'Country Code', 'Related name', 'Job Title', 'Department', 'Organization', 'Notes', 'Birthday', 'Anniversary', 'Gender', 'Web Page', 'Web Page 2', 'Categories\n'];
        alert('The Contacts will be exported according to the string you will enter: Example Name: Contact 23. In the example "Content" is word, "23" is number. The series will go on!');
        let word = prompt('Write the word you want to append on all contacts','');
        let number = parseInt(prompt('Starting Number of Contact','')); 
        for(element of this.filtered()){
            singleEntity = [word, number, `${word} ${number}`, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', element, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
            number++;
            this.csv += singleEntity.join(',');
            this.csv += '\n';
        }
        this.createElement();
    },
    
    createElement(){ 
        let hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(this.csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'Contacts.csv';
        hiddenElement.click();
    },
}
processContacts.loadData();

console.log("Contacts Exported!");
