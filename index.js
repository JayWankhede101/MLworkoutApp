import axios from 'axios'
import process from 'dotenv' 

process.config()

const response="";
const apiKey = "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";

const client = axios.create({
  headers: {
    Authorization: "Bearer " + apiKey,
  },
});

const params = {
    prompt: "",
    model: "text-davinci-003",
    max_tokens: 10,
    temperature: 0,
  };

const useAxios = (prompt) => { 
    client
    .post("https://api.openai.com/v1/completions", {...params, prompt})
    .then((result) => {
      response = result.data.choices[0].text;
    })
    .catch((err) => {
      console.log(err);
    });
    return response
}

export default useAxios;