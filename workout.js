const apiKey = "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";

const client = axios.create({
  headers: {
    Authorization: "Bearer " + apiKey,
  },
});

const params = {
    prompt: "How are you?",
    model: "text-davinci-003",
    max_tokens: 2048,
    temperature: 0,
  };

const useAxios = async (prompt) => { 
    try{
        const response = await client
            .post("https://api.openai.com/v1/completions", {...params, prompt})
            console.log(response.data.choices)
        return response.data.choices[0].text;
    } catch (err) {
        console.error(err)
    }
}

document.getElementById("myForm").addEventListener("submit", async (e) => {
    e.preventDefault(); 
    const plan = document.getElementById("plan").value
    const height = document.getElementById("height").value+" centimeters tall,";
    const weight = document.getElementById("weight").value+" pounds";
    const gender = document.getElementById("gender").value+" ";
    const age = document.getElementById("age").value+" year old,";
    const activityLevel = document.getElementById("activity-level").value;
    const goals = document.getElementById("goals").value;

    //if (plan.localeCompare("Gym Workout")==0){
    const push = await useAxios("Give me a chest and tricep"+plan+" plan (do not mention diet,format as a list, mention number of sets and reps) if I am a "+age+gender+" who is"+height+weight+" and my activity level is"+activityLevel+" and my goal is to"+goals )
    const pull = await useAxios("Give me a back and bicep"+plan+" plan (do not mention diet,format as a list, mention number of sets and reps) if I am a "+age+gender+" who is"+height+weight+" and my activity level is"+activityLevel+" and my goal is to"+goals )
    const legs = await useAxios("Give me a leg"+plan+" plan (do not mention diet,format as a list, mention number of sets and reps) if I am a "+age+gender+" who is"+height+weight+" and my activity level is"+activityLevel+" and my goal is to"+goals )

    //}


    document.getElementById('p1').innerHTML = "";
    document.getElementById('p2').innerHTML = push;
    document.getElementById('p3').innerHTML = pull;
    document.getElementById('p4').innerHTML = legs;



});