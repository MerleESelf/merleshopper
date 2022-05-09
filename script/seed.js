'use strict'

const db = require('../server/db')
const {User, Plant, Order, cartDetail} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  //plants
  const Fiddle = await Plant.create({
    plantName: 'fiddle leaf fig',
    potSize: 10,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1656.JPG'
  })

  const Cebu = await Plant.create({
    commonName: 'cebu blue pothos',
    potSize: 8,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1662.JPG'
  })

  const ZZ = await Plant.create({
    commonName: 'zz raven',
    potSize: 8,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1662.JPG'
  })

  const dragon = await Plant.create({
    commonName: 'dragon bone cactus',
    potSize: 6,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1669.JPG'
  })

  const Avo = await Plant.create({
    commonName: 'avocado plant',
    potSize: 4,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1670.JPG'
  })

  const Sumatra = await Plant.create({
    commonName: 'wax plant',
    potSize: 2,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1672.JPG'
  })

  const Calli = await Plant.create({
    commonName: 'wax plant',
    potSize: 2,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1675.JPG'
  })

  const tiger = await Plant.create({
    commonName: 'prayer plant',
    potSize: 4,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1676.JPG'
  })

  const Money = await Plant.create({
    commonName: 'money tree',
    potSize: 6,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1679.JPG'
  })

  const TradN = await Plant.create({
    commonName: 'spiderwort',
    potSize: 6,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1680.JPG'
  })

  const Stromanthe = await Plant.create({
    commonName: 'prayer plant',
    potSize: 4,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1688.JPG'
  })

  const Rip = await Plant.create({
    commonName: 'junlge catus',
    potSize: 4,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1689.JPG'
  })

  const Stolen = await Plant.create({
    commonName: 'mistletoe catus',
    potSize: 4,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1754.JPG'
  })

  const retusa = await Plant.create({
    commonName: 'wax plant',
    origin: 'India',
    potSize: 1,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1754.JPG'
  })

  const bang = await Plant.create({
    commonName: 'wax plant',
    origin: 'Thailand',
    potSize: 6,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1694.JPG'
  })

  const macro = await Plant.create({
    pecies: 'macrophylla',
    commonName: 'wax plant',
    origin: 'Boreno',
    potSize: 6,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1696.JPG'
  })

  const whale = await Plant.create({
    commonName: 'whale fin',
    origin: 'Democratic Republic of the Congo',
    potSize: 4,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1697_2.JPG'
  })

  const cylindrical = await Plant.create({
    commonName: 'cylindrical snake plant',
    origin: 'Angolia',
    potSize: 4,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1700.JPG'
  })

  const Mikado = await Plant.create({
    commonName: 'mikado snake plant',
    origin: 'Africa',
    potSize: 4,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1702.JPG'
  })

  const hearts = await Plant.create({
    commonName: 'string of hearts',
    origin: 'South Africa',
    potSize: 1,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1706.JPG'
  })

  const princess = await Plant.create({
    commonName: 'wax plant',
    origin: 'Thailand',
    potSize: 6,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1707.JPG'
  })

  const shep = await Plant.create({
    commonName: 'wax plant',
    origin: 'Himalayas',
    potSize: 4,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1712.JPG'
  })

  const rope = await Plant.create({
    commonName: 'wax plant',
    origin: 'Australia',
    potSize: 1,
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1716.JPG'
  })

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
