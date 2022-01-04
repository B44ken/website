// redirect if query matches - like p27.ca?hemingway

const links = {
	"hemingway": () => "https://vault.fbi.gov/ernest-miller-hemingway/ernest-hemingway-part-01-of-01/at_download/file"
}

var func = document.location.search.replace('?','')
if(links[func]) document.location.href = links[func]()
