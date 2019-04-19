export function matchStateToTerm(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

export function matchStateToTermWithHeaders(state, value) {
  return (
    state.header ||
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

/**
 * An example of how to implement a relevancy-based sorting method. States are
 * sorted based on the location of the match - For example, a search for "or"
 * will return "Oregon" before "North Carolina" even though "North Carolina"
 * would normally sort above Oregon. Strings where the match is in the same
 * location (or there is no match) will be sorted alphabetically - For example,
 * a search for "or" would return "North Carolina" above "North Dakota".
 */
export function sortStates(a, b, value) {
	console.log('sortStates()')
  const aLower = a.name.toLowerCase()
  const bLower = b.name.toLowerCase()
  const valueLower = value.toLowerCase()
  const queryPosA = aLower.indexOf(valueLower)
  const queryPosB = bLower.indexOf(valueLower)
  if (queryPosA !== queryPosB) {
    return queryPosA - queryPosB
  }
  return aLower < bLower ? -1 : 1
}

export function fakeRequest(value, cb) {
	console.log('fakeRequest()')
  return setTimeout(cb, 500, value ?
    getStates().filter(state => matchStateToTerm(state, value)) :
    getStates()
  )
}


export function fakeCategorizedRequest(value, cb) {
	console.log('fakeCategorizedRequest()')
  setTimeout(cb, 500, value ?
    getCategorizedStates().filter(state => matchStateToTermWithHeaders(state, value)) :
    getCategorizedStates()
  )
}

export function getStates() {
	console.log('getStates()')
	return [
	    {"id":"4770","city_id":"709930","name":"Dnipropetrovsk","country":"UA","lon":"34.98333","lat":"48.450001"},
	    {"id":"11729","city_id":"703448","name":"Kiev","country":"UA","lon":"30.516666","lat":"50.433334"},
	    {"id":"24857","city_id":"706483","name":"Kharkiv","country":"UA","lon":"36.25","lat":"50"},
	    {"id":"24295","city_id":"698740","name":"Odessa","country":"UA","lon":"30.732622","lat":"46.477474"},
    ]
  return [
    { abbr: 'AL', name: 'Alabama' },
    { abbr: 'AK', name: 'Alaska' },
    { abbr: 'AZ', name: 'Arizona' },
    { abbr: 'AR', name: 'Arkansas' },
    { abbr: 'CA', name: 'California' },
    { abbr: 'CO', name: 'Colorado' },
    { abbr: 'CT', name: 'Connecticut' },
    { abbr: 'DE', name: 'Delaware' },
    { abbr: 'FL', name: 'Florida' },
    { abbr: 'GA', name: 'Georgia' },
    { abbr: 'HI', name: 'Hawaii' },
    { abbr: 'ID', name: 'Idaho' },
    { abbr: 'IL', name: 'Illinois' },
    { abbr: 'IN', name: 'Indiana' },
    { abbr: 'IA', name: 'Iowa' },
    { abbr: 'KS', name: 'Kansas' },
    { abbr: 'KY', name: 'Kentucky' },
    { abbr: 'LA', name: 'Louisiana' },
    { abbr: 'ME', name: 'Maine' },
    { abbr: 'MD', name: 'Maryland' },
    { abbr: 'MA', name: 'Massachusetts' },
    { abbr: 'MI', name: 'Michigan' },
    { abbr: 'MN', name: 'Minnesota' },
    { abbr: 'MS', name: 'Mississippi' },
    { abbr: 'MO', name: 'Missouri' },
    { abbr: 'MT', name: 'Montana' },
    { abbr: 'NE', name: 'Nebraska' },
    { abbr: 'NV', name: 'Nevada' },
    { abbr: 'NH', name: 'New Hampshire' },
    { abbr: 'NJ', name: 'New Jersey' },
    { abbr: 'NM', name: 'New Mexico' },
    { abbr: 'NY', name: 'New York' },
    { abbr: 'NC', name: 'North Carolina' },
    { abbr: 'ND', name: 'North Dakota' },
    { abbr: 'OH', name: 'Ohio' },
    { abbr: 'OK', name: 'Oklahoma' },
    { abbr: 'OR', name: 'Oregon' },
    { abbr: 'PA', name: 'Pennsylvania' },
    { abbr: 'RI', name: 'Rhode Island' },
    { abbr: 'SC', name: 'South Carolina' },
    { abbr: 'SD', name: 'South Dakota' },
    { abbr: 'TN', name: 'Tennessee' },
    { abbr: 'TX', name: 'Texas' },
    { abbr: 'UT', name: 'Utah' },
    { abbr: 'VT', name: 'Vermont' },
    { abbr: 'VA', name: 'Virginia' },
    { abbr: 'WA', name: 'Washington' },
    { abbr: 'WV', name: 'West Virginia' },
    { abbr: 'WI', name: 'Wisconsin' },
    { abbr: 'WY', name: 'Wyoming' }
  ]
}

export function getCategorizedStates() {
	console.log('getCategorizedStates()')
  return [
    { header: 'West' },
    { abbr: 'AZ', name: 'Arizona' },
    { abbr: 'CA', name: 'California' },
    { abbr: 'CO', name: 'Colorado' },
    { abbr: 'ID', name: 'Idaho' },
    { abbr: 'MT', name: 'Montana' },
    { abbr: 'NV', name: 'Nevada' },
    { abbr: 'NM', name: 'New Mexico' },
    { abbr: 'OK', name: 'Oklahoma' },
    { abbr: 'OR', name: 'Oregon' },
    { abbr: 'TX', name: 'Texas' },
    { abbr: 'UT', name: 'Utah' },
    { abbr: 'WA', name: 'Washington' },
    { abbr: 'WY', name: 'Wyoming' },
    { header: 'Southeast' },
    { abbr: 'AL', name: 'Alabama' },
    { abbr: 'AR', name: 'Arkansas' },
    { abbr: 'FL', name: 'Florida' },
    { abbr: 'GA', name: 'Georgia' },
    { abbr: 'KY', name: 'Kentucky' },
    { abbr: 'LA', name: 'Louisiana' },
    { abbr: 'MS', name: 'Mississippi' },
    { abbr: 'NC', name: 'North Carolina' },
    { abbr: 'SC', name: 'South Carolina' },
    { abbr: 'TN', name: 'Tennessee' },
    { abbr: 'VA', name: 'Virginia' },
    { abbr: 'WV', name: 'West Virginia' },
    { header: 'Midwest' },
    { abbr: 'IL', name: 'Illinois' },
    { abbr: 'IN', name: 'Indiana' },
    { abbr: 'IA', name: 'Iowa' },
    { abbr: 'KS', name: 'Kansas' },
    { abbr: 'MI', name: 'Michigan' },
    { abbr: 'MN', name: 'Minnesota' },
    { abbr: 'MO', name: 'Missouri' },
    { abbr: 'NE', name: 'Nebraska' },
    { abbr: 'OH', name: 'Ohio' },
    { abbr: 'ND', name: 'North Dakota' },
    { abbr: 'SD', name: 'South Dakota' },
    { abbr: 'WI', name: 'Wisconsin' },
    { header: 'Northeast' },
    { abbr: 'CT', name: 'Connecticut' },
    { abbr: 'DE', name: 'Delaware' },
    { abbr: 'ME', name: 'Maine' },
    { abbr: 'MD', name: 'Maryland' },
    { abbr: 'MA', name: 'Massachusetts' },
    { abbr: 'NH', name: 'New Hampshire' },
    { abbr: 'NJ', name: 'New Jersey' },
    { abbr: 'NY', name: 'New York' },
    { abbr: 'PA', name: 'Pennsylvania' },
    { abbr: 'RI', name: 'Rhode Island' },
    { abbr: 'VT', name: 'Vermont' },
    { header:'Pacific' },
    { abbr: 'AK', name: 'Alaska' },
    { abbr: 'HI', name: 'Hawaii' },
  ]
}