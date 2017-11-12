const rp = require('request-promise')

let options = {
  'method': 'POST',
  'uri': 'https://ssbprd-banner.ecu.edu/DAD_PROD/bwskfreg.P_CheckAltPin',
  'form': {
    // Like <input type="text" name="name">
    'pin': '000000'
  },
  'headers': {
    'Host': 'ssbprd-banner.ecu.edu',
    'Connection': 'keep-alive',
    'Content-Length': '10',
    'Cache-Control': 'max-age=0',
    'Origin': 'https://ssbprd-banner.ecu.edu',
    'Upgrade-Insecure-Requests': '1',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'DNT': '1',
    'Referer': 'https://ssbprd-banner.ecu.edu/DAD_PROD/bwskfreg.P_AltPin',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cookie': 'TESTID=set; SESSID=MDBINkg5NjA3NzMx; BIGipServerbanner_ssbprd_8888=810940938.47138.0000; TESTID=set; SESSID=REMwUFI4NjA3NzMx'
  }
}

rp(options)
  .then((body) => {
    console.log(body)
  })
  .catch((err) => {
    console.error(err)
  })

// for (let pin = 396257; pin < 99999; pin++) {
// }
