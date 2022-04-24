/* eslint-disable @typescript-eslint/no-var-requires */
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

async function setup() {
  const db = await open({
    filename: './db.sqlite',
    driver: sqlite3.Database,
  })
  await db.migrate({ force: true })

  const sql =
    'INSERT INTO Profile (name, creator, startDate, subscriptionLength) VALUES (?, ?, ?, ?)'

  await db.run(sql, 'test-1', 'rayan', '2022-3-1', 1)
  await db.run(sql, 'test-2', 'rayan', '2022-3-2', 2)
  await db.run(sql, 'test-3', 'rayan', '2022-3-3', 3)

  const profiles = await db.all('SELECT * FROM Profile')
  console.log('ALL PROFILES', profiles)
}

setup()
