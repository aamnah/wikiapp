import axios from 'axios'

const apiEndpoint = 'https://en.wikipedia.org/w/api.php'

export const searchWiki = (search) => {
  return axios.get(apiEndpoint + '?gsrsearch=' + search, {
    params: {
      origin: '*',
      format: 'json',
      formatversion: 2,
      utf8: 1,
      action: 'query',
      generator: 'search', // perform a full text search
      gsrnamespace: '0', // 0 = Article
      gsrlimit: 10, // how many articles to return
      prop: 'pageimages|extracts', // get Page Images & Extracts
      pilimit: 'max', // how many page images (thumbnails) to return
      piprop: 'thumbnail|original|name', // page image info to return
      pithumbsize: 200, // thumbnail size
      exsentences: 3, // How many Extract sentences to return
      exlimit: 'max', // How many Extracts to return
      exintro: 1, // Return only content before the first section.
      explaintext: 1 // Return extracts as plain text instead of limited HTML.
    },
    headers: {
      'Api-User-Agent': 'Wikipedia Viewer', // optional
      'Content-Type': 'application/json; charset=UTF-8' // optional
    }
  })
}


export const getWiki = (pageid) => {
  return axios.get(apiEndpoint + '?pageids=' + pageid, {
    params: {
      origin: '*',
      format: 'json',
      formatversion: 2,
      utf8: 1,
      action: 'query',
      prop: 'pageimages|extracts', // get Page Images & Extracts
      piprop: 'thumbnail|original|name', // page image info to return
      pithumbsize: 200, // thumbnail size
      exintro: 1, // Return only content before the first section.
      explaintext: 1, // Return extracts as plain text instead of limited HTML.
      exsectionformat: 'plain' // No formatting
    }
  })
}

/* 
LINKS

https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&prop=extracts%7Cpageimages&titles=Main+Page&generator=search&utf8=1&formatversion=2&exsentences=3&exlimit=max&exintro=1&piprop=thumbnail%7Coriginal%7Cname&pithumbsize=200&pilimit=max&gsrsearch=lahore&gsrnamespace=0&gsrlimit=10

https://en.wikipedia.org/wiki/Special:Random
*/