import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export function openDB() {
  return open({
    filename:
      process.env.NODE_ENV === 'development' ? './db.sqlite' : '../db.sqlite',
    driver: sqlite3.Database,
  })
}
