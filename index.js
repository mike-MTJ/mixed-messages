
const greetings = [
    "Hey hey, superstar!",               // casual/cool
    "Greetings, Earthling. 👽",          // silly/funny
    "Good day to you, distinguished one.", // professional/formal
    "Yo, legend in the making!",         // cool
    "Wassup, brainiac?",                 // silly/casual
    "Salutations, noble scholar.",       // professional/silly
    "Howdy, partner!",                   // silly/casual
    "Ahoy, captain of success!",         // silly/funny
    "What's crackin', genius?",          // cool/funny
    "Hello there, bright light!",        // casual/positive
    "Hiya, hero!",                       // casual/fun
    "Good morning, future CEO.",         // professional/cool
    "Top of the morning to ya!",         // silly/casual
    "Hey you, yes *you*!",              // funny/silly
    "Yo yo yo, overachiever!",           // cool/funny
    "Warm greetings, change-maker.",     // professional/inspiring
    "Salute to the sharpest mind around!", // professional/fun
    "Knock knock — it's greatness time!", // silly/funny
    "Peace and progress, friend.",       // cool/zen
    "Hola, productivity wizard!",        // fun/cool
    "Welcome, seeker of knowledge.",     // professional/casual
    "Hi champ, ready to roll?",          // casual
    "Dear trailblazer, your moment awaits.", // professional/inspiring
    "Yo champ, let’s light it up!",      // cool/fun
    "Bonjour, brilliance!"               // fun/silly/professional
];
const quotes = [
    "The journey is often more enlightening than the destination.",
    "What you seek is also seeking you. — Rumi",
    "Time is the only currency you can never earn back.",
    "You don’t find yourself; you create yourself.",
    "Even chaos has a pattern — if you dare to look.",
    "He who knows others is wise; he who knows himself is enlightened. — Lao Tzu",
    "The weight of truth is heavy, but it frees you.",
    "Your thoughts paint the world you see.",
    "To live without questioning is to sleep while awake.",
    "The mountain only looks tall until you take the first step.",
    "Freedom is not doing what you want — it’s mastering your wants.",
    "You are not late. You’re just on a different timeline.",
    "Sometimes, standing still is the most powerful move.",
    "A storm can teach what calm never could.",
    "The mirror never lies, but it doesn’t show the whole truth either.",
    "To grow is to let go of versions of yourself you once loved.",
    "You were born to be real, not perfect.",
    "The mind is a garden; what you plant will grow.",
    "Even the moon needs darkness to shine.",
    "Every scar has a story — and a lesson.",
    "A fulfilled soul doesn’t chase, it attracts.",
    "To doubt is the beginning of understanding.",
    "There are no shortcuts to meaning — only deeper roads.",
    "In losing control, we sometimes find clarity.",
    "Not all those who wander are lost — some are simply exploring truth."
];
const randomMessageGenerator = () => {
    const luckyNum = Math.floor(Math.random() * 50) + 1;
    const finalMessage = `${greetings[Math.floor(Math.random() * greetings.length)]}, Your lucky number is: ${luckyNum}, ${quotes[Math.floor(Math.random() * quotes.length)]}`
    return finalMessage;
}

console.log(randomMessageGenerator());


