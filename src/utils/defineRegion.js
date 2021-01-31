

const defineRegion = async (key) => {
  const response = await fetch(`https://geolocation-db.com/json/${key}`)
  if(response.ok){
    const json = await response.json()
    const countryCode = json.country_code.toLowerCase()
    if(countryCode === 'lv') return countryCode
    else return 'en'
  }
  return 'lv'
}

export default defineRegion