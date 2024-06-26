export default class En {
    avoidPassHands = () => "Avoid passing hands."
    benDescription = () => "ben is a Bridge Engine that uses AI. Follow the link to learn more.";
    bid = () => "Bid!";
    correct = () => "Correct!";
    drawRandomHand = () => "Draw random hand";
    error_failedToConnectToServer = () => "Failed to connect to server :("
    error_failedToGetBidFromServer = () => "Failed to get expected bid from server :(";
    theExpectedBidWas = (expectedBid:string,bid:string) => "The expected bid was " + expectedBid + " but you bid " + bid;
    whoIsBen = () => "Who is ben?";
}
