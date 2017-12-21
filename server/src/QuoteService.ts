const quotes = require('../data/quotes.json')

export default class QuoteService {

  private quoteArray
  private sizeOfArray

  constructor() {
      this.quoteArray = quotes.data
      this.sizeOfArray = this.quoteArray.length
  }

  getRandomQuote() {
    return this.quoteArray[Math.floor(Math.random() * this.sizeOfArray)]
  }
}