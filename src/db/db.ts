import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export function openDB() {
  return open({
    filename: '@/../db.sqlite',
    driver: sqlite3.Database,
  })
}
