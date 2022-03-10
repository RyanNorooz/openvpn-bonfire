import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export function openDB() {
  return open({
    filename: process.platform === 'win32' ? './db.sqlite' : '../db.sqlite',
    driver: sqlite3.Database,
  })
}
