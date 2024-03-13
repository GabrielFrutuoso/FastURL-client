import { useState } from "react";
import { NavBar } from "./components/NavBar"
import { api } from "./service/api";

function App() {

  const [shortUrl, setShortUrl] = useState<string>('')

  const handleSubmit = (event: any) => {
    event.preventDefault();
    api.post(`/url/save?url=${event.target.original_url.value}`).then((response) => {
      setShortUrl(`https://fasturl-api.onrender.com/url/redirect?url=${response.data.short_url}`);
    });
  }

  return (
    <div className="h-screen flex justify-center items-center bg-neutral-100">
      <NavBar />
      <div className="flex flex-col items-center p-5 bg-white shadow-md rounded-md">
        {shortUrl === '' ?
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-500 text-transparent bg-clip-text">Olá, seja bem vindo!</h2>
          <p className="text-lg text-center max-w-80">Por favor, preencha o formulário abaixo, que em instantes, a sua URL encurtada estará disponível!</p>
          <form className="flex items-center border-2 border-emerald-500 rounded-md overflow-hidden" 
          onSubmit={handleSubmit}>
              <input type="url" name="original_url" placeholder="https://www.google.com" className="w-full p-1 text-lg" required />
              <button type="submit" className="p-1 bg-emerald-500 text-white text-lg">Encurtar</button>
          </form>        
        </div>

        :

        <div className="flex flex-col items-center gap-3 mx-3">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-500 text-transparent bg-clip-text">Muito obrigado por me usar {`: )`}</h2>
          <p className="text-3xl">sua URL encurtada:</p>
          <a href={shortUrl} target="_blank" rel="noreferrer" className="text-emerald-500 underline text-lg">{shortUrl}</a>
        </div>
       }
      </div>
    </div>
  )

}

export default App
