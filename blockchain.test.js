const Blockchain = require('./blockchain')
const Block = require('./block')

describe('Blockchain', () => {

  let bc, bc2

  beforeEach(() => {
    bc = new Blockchain()
    bc2 = new Blockchain()
  })

  it('starts with genesis block', () => {
    expect(bc.chain[0]).toEqual(Block.genesis())
  })

  it('adds a new block', () => {
    const data = 'arquivo.pdf'
    bc.addBlock(data)

    expect(bc.chain[bc.chain.length -1].data).toEqual(data)
  })

  it('validate a valid chain', () => {
    bc2.addBlock('500U$')
    
    expect(bc.isValidChain(bc2.chain)).toBe(true)
  })

  it ('invalidate a chain with a corrupt genesis block', () => {
    bc2.chain[0].data = '0U$'

    expect(bc.isValidChain(bc2.chain)).toBe(false)
  })

  it('invalidate a corrupt chain', () => {
    bc2.addBlock('200U$')
    bc2.chain[1].data = '0U$'

    expect(bc.isValidChain(bc2.chain)).toBe(false)
  })
})