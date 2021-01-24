
const defineRegion = async () => {
  const KEY = process.env.GEOLOCATION_API_KEY
  const response = await fetch(`https://geolocation-db.com/json/${KEY}`)
  if(response.ok){
    const json = await response.json()
    const countryCode = json.country_code.toLowerCase()
    if(countryCode === 'lv') return countryCode
    else return 'en'
  }
  return null
}

export default defineRegion