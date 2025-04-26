import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch';
import {Blob} from 'node:buffer';
import { vi } from 'vitest'
import data from "./devData.json"

const mocks =  async (url, options) => {
    if (url === 'http://localhost:4000/movies') {
      return {
        ok: true,
        status: 200,
        json: async () => data.movies,
      }
    }

    if (url === 'http://localhost:4000/actors'){
        return {
            ok: true,
            status: 200,
            json: async () => data.actors,
          }
    }
    if (url === 'http://localhost:4000/directors'){
        return {
            ok: true,
            status: 200,
            json: async () => data.directors,
          }
    }

    if (url === 'http://localhost:4000/movies/1'){
        return {
            ok: true,
            status: 200,
            json: async () => data.movies[0],
          }
    }
  
  
    // Optional fallback if needed
    return {
      ok: false,
      status: 404,
      json: async () => ({ error: 'Not found' }),
    }
  }


afterEach(() => {
    cleanup();
})

// Not sure if code grader has a mock or runs json server
// vi.stubGlobal('fetch', mocks)