const fetch = require('node-fetch');
const fs = require('fs')
const Handlebars = require('handlebars')

function buildHTML(filename, data) {
  const source = fs.readFileSync(filename,'utf8').toString()
  const template = Handlebars.compile(source)
  const output = template(data)

  return output
}

async function getData(id) {
  try {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return result.json()
  } catch (error) {
    return Promise.resolve(error)
  }
}

exports.builder = async function(id) {
  const data = await getData(id)
  const html = buildHTML('./src/templates/default.tpl.html', data)

  return html
}