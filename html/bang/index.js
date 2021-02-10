const alertIf = v => { if(getQueries().debug == 'yes') { alert(v) } }

const bangSearch = (search) => {
	var engine = getQueries().search.split(' ')[0]
	var query = search.replace(engine + ' ', '')
	url = 'http://b44ken.cf/bang/?engine=' + engine + '&search=' + query
	alertIf(url+'_'+engine,'_', query)
	return url
}

const geniusLyrics = (search) => {
	// radiohead - karma police
	// https://genius.com/Radiohead-karma-police-lyrics
	var format = search // - is a valid url character
		.replace(/[^A-z0-9\- ]+/g, '')
		.replaceAll(' ', '-')
		.replace(/-{2,}/, '-') + '-lyrics'
	url = 'https://genius.com/' + format[0].toUpperCase() + format.slice(1,)
	return url
}

const getQueries = () => {
	var queries = {}
	var esc = decodeURIComponent(location.search).replaceAll('+', ' ')
	var list = esc.replace('?', '').split('&')
	for(var q of list) {
		var [key, value] = q.split('=')
		queries[key] = value
	}
	return queries
}

search = getQueries().search
switch(getQueries().engine) {
	case 'bang':
		document.location = bangSearch(search)
		break
	case 'gen':
		document.location = geniusLyrics(search)
		break
	case undefined:
		document.write('Undefined query.')
}

