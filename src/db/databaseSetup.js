/* eslint-disable @typescript-eslint/no-var-requires */
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

async function setup() {
  const db = await open({
    filename: '@/../db.sqlite',
    driver: sqlite3.Database,
  })
  await db.migrate()
}

setup()
