let processContacts = {
    csv: '',
    rawString() { return document.querySelectorAll('header')[1].childNodes[1].childNodes[1].childNodes[0].innerText; },
    brokenString() { return this.rawString().split(',')},
    filtered() { return this.brokenString().filter((element) => element.includes('+'))},
    createElement(data){ 
        let hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(data);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'Contacts.csv';
        hiddenElement.click()
    },
    loadData() {
        let singleEntity = [];
        this.csv = ['First Name', 'Last Name', 'Display Name', 'Nickname', 'E-mail Address', 'E-mail 2 Address', 'E-mail 3 Address', 'Home Phone', 'Business Phone', 'Home Fax',	'Business Fax', 'Pager', 'Mobile Phone', 'Home Street',	'Home Address 2', 'Home City', 'Home State', 'Home Postal Code', 'Home Country', 'Business Address', 'Business Address 2', 'Business City',	'Business State', 'Business Postal Code', 'Business Country', 'Country Code', 'Related name', 'Job Title', 'Department', 'Organization', 'Notes', 'Birthday', 'Anniversary', 'Gender', 'Web Page', 'Web Page 2', 'Categories\n'];
        alert('The Contacts will be exported according to the string you will enter: Example Name: Contact 23. In the example "Contact" is word, "23" is number. The series will go on!');
       
        let word = prompt('Write the word you want to append on all contacts. Default is: WaGE','');
        if(word == NaN || word == "")
            word = "WaGE";
       
        let number = parseInt(prompt('Starting Number of Contact. Default is 1','')); 
        if(!number || number === "")
            number = 1;

            for(element of processContacts.filtered()){
                singleEntity = [word, number, `${word} ${number}`, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', element, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
                number++;
                this.csv += singleEntity.join(',');
                this.csv += '\n';
            }
        processContacts.createElement(this.csv);
    }
}

let createButton = {
    create(){
        let $ = document;
        let exportButton = $.createElement('button');
        let $$ = exportButton.style;
        exportButton.id = "ExportButton";
        exportButton.innerText = "EXPORT";
        $$.zIndex = "999";
        $$.height = "42px";
        $$.width = "88px";
        $$.color = "#989898";
        $$.fontSize = "14px";
        $$.fontWeight = "bold";
        $$.position = "fixed";
        $$.right = "2%";
        $$.bottom = "80%";     
        $$.backgroundColor = "#FFFFFF";
        $$.borderRadius = "21px"
        $$.boxShadow = "0 1px 1px 0 rgba(0,0,0,.06), 0 2px 5px 0 rgba(0,0,0,.2)";
        let place = $.querySelector('footer');
        place.prepend(exportButton);
        exportButton.addEventListener("click", processContacts.loadData);
    },
}
setInterval(() => {
    if(document.querySelector('footer') && !document.querySelector('#ExportButton'))
        setTimeout(createButton.create, 1000);
}, 2000);
