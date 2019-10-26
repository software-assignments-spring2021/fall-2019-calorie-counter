const axios = require('axios')
api_key='gHImpDLBeNUC8KUmNFCCCh9j74zv3SfstjJ6MidK'

axios.post('https://api.nal.usda.gov/fdc/v1/search?api_key='+api_key, {
    'generalSearchInput':'Cheddar Cheese'
})
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})