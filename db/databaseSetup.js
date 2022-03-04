/* eslint-disable @typescript-eslint/no-var-requires */
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

async function setup() {
  const db = await open({
    filename: './tmp/db.sqlite',
    driver: sqlite3.Database,
  })
  await db.migrate({ force: true })

  const profiles = await db.all('SELECT * FROM profile')
  console.log('ALL PROFILES', JSON.stringify(profiles, null, 2))
}

setup()
