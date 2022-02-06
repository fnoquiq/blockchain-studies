const Block = require('./block.js')

const block = new Block('7657', '1234567890B21314', 'A1234567890F1231312', '100')
console.log(block.toString())

const primeiroBloco = Block.mineBlock(Block.genesis(), '$500')
console.log(primeiroBloco.toString())