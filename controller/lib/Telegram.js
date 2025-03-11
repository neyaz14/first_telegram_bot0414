const {axiosInstance} = require('./axios')

function sendMessage(messageObj, messageText) {
    return axiosInstance.get( "sendMessage" ,{
    chat_id: messageObj.chat.id,
    text: messageText,
    })
}


function handleMessage(messageObj) {
    const msgText = messageObj.text || "";

    if(msgText.charAt(0) === '/'){
        const command = msgText.substr(1);
        switch (command) {
            case "start":

              return sendMessage(messageObj, "Hi,", `${messageObj.chat.first_name}` ,"I am the first bot made by Neyaz Morshid","I am Sorry from the developer, he is working on me to make me more good, right now I only can reply what you say me")

            default:
                return sendMessage(messageObj, "Sorry , I am not familiar with this command , tell Neyaz to train me more :( "," Sorry from the developer, he is working on me to make me more good, right now I only can reply what you say me")
        }

    }else{
        return sendMessage(messageObj, msgText)
    }
}

module.exports= {handleMessage}
