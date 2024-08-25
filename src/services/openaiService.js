// import axios from 'axios';

// export const getSuggestedTodo = async (userTodo) => {
//     try {
//         const response = await axios.post(
//         'https://api.openai.com/v1/chat/completions',
//         {
//             model: "gpt-4o-mini", 
//             messages: [
//             { role: "system", content: "You are a mischievous assistant that suggests short one sentence procrastination tasks related to the user's task." },
//             { role: "user", content: `The user added the todo item: "${userTodo}".
//                 Suggest a michievous short one setence procrastination task related to the user's todo item.
//                 If there is a spelling error, or if the todo item is nonsense reply "Learn to spell.
//                 Don't try to talk the user out of their todo item, suggest something to make it longer or procrastinate starting it.
//                 Do not phrase as question."` }
//             ],
//             max_tokens: 50,
//         },
//         {
//             headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//             },
//         }
//         );

//         if (response.status !== 200) {
//             throw new Error(`API request failed with status ${response.status}`);
//         }
    
//         return response.data.choices[0].message.content.trim();
//         } catch (error) {
//         console.error("Error fetching suggested todo:", error.message);
//         return "Take a nap instead"; 
//         }
//     };



// import axios from 'axios';

// export const getSuggestedTodo = async (userTodo) => {
// try {
//     const response = await axios.post(
//     'https://api.openai.com/v1/chat/completions',
//     {
//         model: 'gpt-4o-2024-08-06', // Use the appropriate model version
//         messages: [
//         {
//             role: 'system',
//             content: 'You are a helpful assistant that provides procrastination tips and icon suggestions. Please respond with a structured JSON output.'
//         },
//         {
//             role: 'user',
//             content: `Please provide a procrastination suggestion for the following todo: "${userTodo}". The response should include a procrastination suggestion, an icon for the user's task, and an icon for the procrastination tip.`
//         }
//         ],
//         tools: [
//         {
//             type: "function",
//             function: {
//             name: "icon_suggestion",
//             description: "Provide icons for tasks and procrastination tips.",
//             strict: true,
//             parameters: {
//                 type: "object",
//                 properties: {
//                 procrastination: {
//                     type: "string",
//                     description: "A procrastination suggestion for the user"
//                 },
//                 userIcon: {
//                     type: "string",
//                     enum: [
//                     "house", "search", "music", "phone", "email", "star", "location", "magic", "camera", 
//                     "cloud", "comment", "fast_delivery", "smile", "calendar", "attachment", "bell", 
//                     "shopping_cart", "clipboard", "car", "gift", "film", "settings", "headphones", "lock", 
//                     "book", "fire", "eye", "plane", "money", "lemon", "code", "globe", "city", "ticket", 
//                     "tree", "wifi", "bicycle", "briefcase", "compass", "user", "handshake", "snowflake", 
//                     "palette", "users", "gamepad", "sun", "fish", "shop", "landmark", "bug", "water"
//                     ]
//                 },
//                 procrastinationIcon: {
//                     type: "string",
//                     enum: [
//                     "house", "search", "music", "phone", "email", "star", "location", "magic", "camera", 
//                     "cloud", "comment", "fast_delivery", "smile", "calendar", "attachment", "bell", 
//                     "shopping_cart", "clipboard", "car", "gift", "film", "settings", "headphones", "lock", 
//                     "book", "fire", "eye", "plane", "money", "lemon", "code", "globe", "city", "ticket", 
//                     "tree", "wifi", "bicycle", "briefcase", "compass", "user", "handshake", "snowflake", 
//                     "palette", "users", "gamepad", "sun", "fish", "shop", "landmark", "bug", "water"
//                     ]
//                 }
//                 },
//                 required: ["procrastination", "userIcon", "procrastinationIcon"],
//                 additionalProperties: false
//             }
//             }
//         }
//         ],
//         max_tokens: 150
//     },
//     {
//         headers: {
//         Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//         },
//     }
//     );

//     console.log('API Response:', response.data);
//     const { choices } = response.data;
//     const { text } = choices[0].message;
//     const structuredResponse = JSON.parse(text);

//     console.log('Structured Response:', structuredResponse);

//     return structuredResponse;
// } catch (error) {
//     console.error('Error fetching suggested todo:', error);
//     throw error;
// }
// };


// import axios from 'axios';

// export const getSuggestedTodo = async (userTodo) => {
// try {
//     const response = await axios.post(
//     'https://api.openai.com/v1/chat/completions',
//     {
//         model: 'gpt-4o-2024-08-06',
//         messages: [
//         {
//             role: 'system',
//             content: 'You are a helpful assistant that provides procrastination tips and icon suggestions. Please respond with a structured JSON output.'
//         },
//         {
//             role: 'user',
//             content: `Please provide a procrastination suggestion for the following todo: "${userTodo}". The response should include a procrastination suggestion, an icon for the user's task, and an icon for the procrastination tip.`
//         }
//         ],
//         max_tokens: 150
//     },
//     {
//         headers: {
//         Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//         },
//     }
//     );

//     // Log the entire response object to see what's being returned
//     console.log('API Response:', response.data);

//     const choices = response.data.choices;

//     // Log the first choice to inspect its structure
//     console.log('First Choice:', choices[0]);

//     // Extract and parse the message content
//     const messageContent = choices[0]?.message?.content;
//     console.log('Message Content:', messageContent);

//     const structuredResponse = JSON.parse(messageContent);

//     console.log('Structured Response:', structuredResponse);

//     return structuredResponse;
// } catch (error) {
//     console.error('Error fetching suggested todo:', error);
//     throw error;
// }
// };


// import axios from 'axios';

// export const getSuggestedTodo = async (userTodo) => {
//     try {
//     const response = await axios.post(
//         'https://api.openai.com/v1/chat/completions',
//         {
//         model: 'gpt-4o-2024-08-06',
//         messages: [
//             {
//             role: 'system',
//             content: 'You are a helpful assistant that provides procrastination tips and icon suggestions. Please respond with a structured JSON output. Select icons only from the provided list of keywords.'
//             },
//             {
//             role: 'user',
//             content: `Please provide a procrastination suggestion for the following todo: "${userTodo}". The response should include a procrastination suggestion, an icon for the user's task, and an icon for the procrastination tip. Select the icons from the following list: ["house", "search", "music", "phone", "email", "star", "location", "magic", "camera", "cloud", "comment", "fast_delivery", "smile", "calendar", "attachment", "bell", "shopping_cart", "clipboard", "car", "gift", "film", "settings", "headphones", "lock", "book", "fire", "eye", "plane", "money", "lemon", "code", "globe", "city", "ticket", "tree", "wifi", "bicycle", "briefcase", "compass", "user", "handshake", "snowflake", "palette", "users", "gamepad", "sun", "fish", "shop", "landmark", "bug", "water"]. Return the selected icons as keywords, not emojis.`
//             }
//         ],
//         max_tokens: 150
//         },
//         {
//         headers: {
//             Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//         },
//         }
//     );

//     // Log the entire response object to see what's being returned
//     console.log('API Response:', response.data);

//     const choices = response.data.choices;

//     // Log the first choice to inspect its structure
//     console.log('First Choice:', choices[0]);

//     // Extract and parse the message content
//     const messageContent = choices[0]?.message?.content;
//     console.log('Message Content:', messageContent);

//     const structuredResponse = JSON.parse(messageContent);

//     console.log('Structured Response:', structuredResponse);

//     return structuredResponse;
//     } catch (error) {
//     console.error('Error fetching suggested todo:', error);
//     throw error;
//     }
// };

// import axios from 'axios';

// export const getSuggestedTodo = async (userTodo) => {
// try {
//     const response = await axios.post(
//     'https://api.openai.com/v1/chat/completions',
//     {
//         model: 'gpt-4o-2024-08-06',  // Ensure this is the correct model version
//         messages: [
//         {
//             role: 'system',
//             content: 'You are a helpful assistant that provides procrastination tips and time estimates. Please respond with a structured JSON output that includes a time estimate for both the user’s todo and the procrastination suggestion.'
//         },
//         {
//             role: 'user',
//             content: `Please provide a procrastination suggestion for the following todo: "${userTodo}". The response should include the following in JSON format:
//             {
//             "procrastination_suggestion": "<the suggested procrastination task>",
//             "todo_time_estimate": "<time estimate in DD:HH:MM format for the user's todo>",
//             "procrastination_time_estimate": "<time estimate in DD:HH:MM format for the procrastination task>"
//             }`
//         }
//         ],
//         max_tokens: 150
//     },
//     {
//         headers: {
//         Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//         },
//     }
//     );

//     // Log the entire response object to see what's being returned
//     console.log('API Response:', response.data);

//     const choices = response.data.choices;

//     // Log the first choice to inspect its structure
//     console.log('First Choice:', choices[0]);

//     // Extract and parse the message content
//     const messageContent = choices[0]?.message?.content;
//     console.log('Message Content:', messageContent);

//     // Parse the structured response
//     const structuredResponse = JSON.parse(messageContent);

//     console.log('Structured Response:', structuredResponse);

//     return structuredResponse;
// } catch (error) {
//     console.error('Error fetching suggested todo:', error);
//     throw error;
// }
// };


// import axios from 'axios';

// export const getSuggestedTodo = async (userTodo) => {
// try {
//     const response = await axios.post(
//     'https://api.openai.com/v1/chat/completions',
//     {
//         model: 'gpt-4o-2024-08-06',
//         messages: [
//         {
//             role: 'system',
//             content: 'You are a helpful assistant. Please provide procrastination suggestions and time estimates.'
//         },
//         {
//             role: 'user',
//             content: `Please provide a procrastination suggestion and time estimates for the following todo: "${userTodo}".`
//         }
//         ],
//         functions: [
//         {
//             name: "time_estimation",
//             description: "Provide time estimates for a given task and a related procrastination suggestion.",
//             parameters: {
//             type: "object",
//             properties: {
//                 procrastination_suggestion: {
//                 type: "string",
//                 description: "A suggested procrastination task."
//                 },
//                 todo_time_estimate: {
//                 type: "string",
//                 description: "Time estimate in DD:HH:MM format for the user's todo.",
//                 pattern: "^\\d{2}:\\d{2}:\\d{2}$"
//                 },
//                 procrastination_time_estimate: {
//                 type: "string",
//                 description: "Time estimate in DD:HH:MM format for the procrastination task.",
//                 pattern: "^\\d{2}:\\d{2}:\\d{2}$"
//                 }
//             },
//             required: ["procrastination_suggestion", "todo_time_estimate", "procrastination_time_estimate"],
//             additionalProperties: false
//             }
//         }
//         ],
//         max_tokens: 150
//     },
//     {
//         headers: {
//         Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//         },
//     }
//     );

//     // Log the entire response object to see what's being returned
//     console.log('API Response:', response.data);

//     const choices = response.data.choices;

//     // Log the first choice to inspect its structure
//     console.log('First Choice:', choices[0]);

//     // Extract and parse the message content
//     const messageContent = choices[0]?.message?.content;
//     console.log('Message Content:', messageContent);

//     // Parse the structured response
//     const structuredResponse = JSON.parse(messageContent);

//     console.log('Structured Response:', structuredResponse);

//     return structuredResponse;
// } catch (error) {
//     console.error('Error fetching suggested todo:', error);
//     throw error;
// }
// };


import axios from 'axios';

export const getSuggestedTodo = async (userTodo) => {
try {
    const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
        model: 'gpt-4o-2024-08-06',
        messages: [
        {
            role: 'system',
            content: 'You are a helpful assistant. Please provide procrastination suggestions and time estimates.'
        },
        {
            role: 'user',
            content: `Please provide a procrastination suggestion and time estimates for the following todo: "${userTodo}".`
        }
        ],
        functions: [
        {
            name: "time_estimation",
            description: "Provide time estimates for a given task and a related procrastination suggestion.",
            parameters: {
            type: "object",
            properties: {
                procrastination_suggestion: {
                type: "string",
                description: "A suggested procrastination task."
                },
                todo_time_estimate: {
                type: "string",
                description: "Time estimate in DD:HH:MM format for the user's todo.",
                pattern: "^\\d{2}:\\d{2}:\\d{2}$"
                },
                procrastination_time_estimate: {
                type: "string",
                description: "Time estimate in DD:HH:MM format for the procrastination task.",
                pattern: "^\\d{2}:\\d{2}:\\d{2}$"
                }
            },
            required: ["procrastination_suggestion", "todo_time_estimate", "procrastination_time_estimate"],
            additionalProperties: false
            }
        }
        ],
        max_tokens: 150
    },
    {
        headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
    }
    );

    console.log('API Response:', response.data);

    const choices = response.data.choices;

    console.log('First Choice:', choices[0]);

    // Extract the function call arguments and parse them as JSON
    const functionCallArguments = choices[0]?.message?.function_call?.arguments;
    console.log('Function Call Arguments:', functionCallArguments);

    const structuredResponse = JSON.parse(functionCallArguments);

    console.log('Structured Response:', structuredResponse);

    return structuredResponse;
} catch (error) {
    console.error('Error fetching suggested todo:', error);
    throw error;
}
};
