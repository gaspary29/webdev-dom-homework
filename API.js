export function getComments () { 
    return fetch('https://wedev-api.sky.pro/api/v1/belyaev/comments').then ((response) =>{
        if (response.status === 500) { 
            throw new Error("Извините, сервер упал, попробуйте позже") 
        }
        return response.json()
    })
}

export function postComment (name, text) {   
    return fetch('https://wedev-api.sky.pro/api/v1/belyaev/comments', {
    method: "POST",
    body: JSON.stringify({
      name,
      text,
    }),
  }).then((response)=>{  
  if (response.status === 400) 
    {
    throw new Error ("Поля ввода имени и текста комментария должны содержать не менее 3 символов в каждом");
  }
  
  if (response.status === 500) 
  { 
    throw new Error("Извините, сервер упал, попробуйте позже");
  }
  return response.json();
  }
  )
}
