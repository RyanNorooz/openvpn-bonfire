import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export function openDB() {
  return open({
    filename: '/tmp/database.db',
    driver: sqlite3.Database,
  })
}
