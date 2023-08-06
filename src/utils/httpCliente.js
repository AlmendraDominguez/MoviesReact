const API = "https://api.themoviedb.org/3"

export const get =(path)=>{
return fetch (API+path,{
    headers:{
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTk1N2E2N2FiODljMDI5ODI4ZTlkMjk2NDA4NDA3YSIsInN1YiI6IjY0MzQ0YmU2MzkxYjljMTE0ZGJiZjUyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tPwoYsZNVw16Qb2oeJ2Owa69H_zuvXEeNz17CWYy-D0",
        "Content-Type":"application/json;charset=utf-8",
    }
}).then((results)=>results.json())

}