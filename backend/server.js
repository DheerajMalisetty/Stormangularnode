const express = require('express')
const bodyParser =require('body-parser')
const http = require('http');
let request = require('request');
let parseString = require('xml2js').parseString;
const cors = require('cors');
const PORT = 3000


const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', function(req, res){
  res.send('hello from server')
})

app.listen(PORT, function (){
  console.log('server running on localhost:' + PORT)
})

app.post('/login', ((req, res) =>{
  let user = req.body.username;
  let pass = req.body.password;
  console.log(user, pass)
  var options;
  options = {
    'method': 'POST',
    'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DH_CUSTLOGIN&receiverParty=&receiverService=&interface=SI_DH_CUST_LOGIN&interfaceNamespace=http://custportallogindhe.com',
    'headers': {
      'SOAPAction': '"http://sap.com/xi/WebService/soap1.1"',
      'Content-Type': 'text/xml;charset=UTF-8',
      'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ==',
      'Cookie': 'MYSAPSSO2=AjExMDAgAA1wb3J0YWw6UE9VU0VSiAAHZGVmYXVsdAEABlBPVVNFUgIAAzAwMAMAA0tQTwQADDIwMjEwNTE4MTc1OAUABAAAAAgKAAZQT1VTRVL%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNTE4MTc1ODA3WjAjBgkqhkiG9w0BCQQxFgQUKAJ2Azz6NnbpwG2gdUPSjeDQMTkwCQYHKoZIzjgEAwQvMC0CFDN6tzR2LyECiwf5LHC3IM%2F0glN0AhUA!Iz9z28X8aqRcKqKFAP5pTXBxDc%3D; JSESSIONID=BltX8qLnpxpwVSHnpBl_gPqnuaCAeQF-Y2kA_SAPdK-wo9PCSBUI4sepokc7aDfF; saplb_*=(J2EE6906720)6906750'
    },
    body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZBAPI_DH_CUSTLOGIN>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <CUS_ID>'+user+'</CUS_ID>\r\n         <PASS>'+pass+'</PASS>\r\n      </urn:ZBAPI_DH_CUSTLOGIN>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>',
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    //console.log(response.body);

    var xml = response.body;
    parseString(xml, function (err, result){
      result = result['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_DH_CUSTLOGIN.Response'][0]['RESULT'][0]['RESULT'][0];
      console.log(result)

      if (result == 'SC'){
        res.json({'username' : user, 'result':true})
      }
      else {
        res.json({'username' : user, 'result': false})
      }

    })


  });


}))
