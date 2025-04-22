const messages = ['Hello', 'Howdy', 'Goodbye', 'Morning', 'Good night'];
const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length )]

}
console.log(getRandomMessage());