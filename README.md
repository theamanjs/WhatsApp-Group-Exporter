# WhatsApp Group Exporter(WaGE)

WhatsApp Group Exporter(WaGE) is made to export all the unknown contacts in WhatsApp group. WaGE is open source and free. Install WaGE and go to [WhatsApp Web](https://web.whatsapp.com) by default this extension will be invoked only on WhatsApp Web, you can see the permissons of WaGE. WaGE doesn't collect any kind of data from your machine.

# Installation(For Google Chrome) 
Follow these steps to install the extension locally for development purpose in Google Chrome
1. Clone the repository using command `git clone https://github.com/theamanjs/WhatsApp-Group-Exporter/`
2. Open Google Chrome -> Go to extensions directly from settings or putting `chrome://extensions` in url
3. Make sure you've enabled the option of `Developer mode` on top right
4. Click on `Load Unpacked` on left top
5. Select the path of the extension
6. The extension will be added to the extension bar in the browser

# Installation(For Firefox)
Follow these steps to install the extension locally for development purpose in Firefox
1. Clone the repository using command `git clone https://github.com/theamanjs/WhatsApp-Group-Exporter/`
2. Open Firefox -> Go to extensions directly from settings or putting `about:addons` in url
3. Click on the settings button under the search bar -> Select the `Install Add-on from files`
4. Select the path of the extension
5. The extension will be added to the extension bar in the browser


# How to run locally?
To run WaGE you can refer the screenshots or follow the steps below:
1. Open WhatsApp Web on your machine.
2. Open the group whose number you want to export.
3. The export button will appear on right top.
4. Click on the button and you will see an instruction alert saying "The Contacts will be exported according to the string you will enter: Example Name: Contact 23. In the example "Content" is word, "23" is number. The series will go on!"
5. The next prompt will appear on screen saying "Write the word you want to append on all contacts" which ask for a string to be appended on the contact names. By default the string is "WaGE".
6. Upcoming prompt will ask for starting number of series. You can set the starting number in that prompt or continue with default series starting from 1.
7. Boom the unkown contact are exported. You can directly import to you phone by going to Google Contacts(For Android Users). For iPhone users -> You need to convert the CSV file to vCard first and then the file will be imported.

# Permissions and Scope
* WaGE do not collect any kind data from your machine
* WaGE do not violates the privacy policy of any website or guideline
* WaGE only have access to WhatsApp Web
* WaGE can access and update the website informatin only on client side but leaves all data on client machine

> Disclaimer: WaGE do not promote any unethical activity, this is made just to automate and make work easier.

# Future Scope
- [ ] Add number of unkown contacts pop up on button
- [ ] Giving output in both .csv and .vcf file
- [ ] Removing Export button in personal chats

# Code Distribution 
Code can be used anywhere without any restrictions but it should not violates the guidelines of license. This extension is licensed under MIT.
