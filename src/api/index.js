import axios from 'axios';

export const baseInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjM0ZGU0ZDBmY2Q2ZDMyMTU4NTZiOWNiY2FjOTIxMiIsInN1YiI6IjY1MjE0OTU4NzQ1MDdkMDBhYzQ5NjM1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4tSzuvDckrKfx97Li1MJc--OVLo4Rhp1vN70xjG_Y0w',
    accept: 'application/json',
  },
});
