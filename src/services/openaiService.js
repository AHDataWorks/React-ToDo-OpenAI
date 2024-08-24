import axios from 'axios';

export const getSuggestedTodo = async (userTodo) => {
    try {
        const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
            model: "gpt-4o-mini", 
            messages: [
            { role: "system", content: "You are a mischievous assistant that suggests short one sentence procrastination tasks related to the user's task." },
            { role: "user", content: `The user added the todo item: "${userTodo}".
                Suggest a michievous short one setence procrastination task related to the user's todo item.
                If there is a spelling error, or if the todo item is nonsense reply "Learn to spell.
                Don't try to talk the user out of their todo item, suggest something to make it longer or procrastinate starting it."` }
            ],
            max_tokens: 50,
        },
        {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            },
        }
        );

        if (response.status !== 200) {
            throw new Error(`API request failed with status ${response.status}`);
        }
    
        return response.data.choices[0].message.content.trim();
        } catch (error) {
        console.error("Error fetching suggested todo:", error.message);
        return "Take a nap instead"; 
        }
    };