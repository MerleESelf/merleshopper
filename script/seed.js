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
    potSize: '10"',
    care: 'keep in bright indirect light, water when dry',
    description: 'Ficus lyrata, commonly known as the fiddle-leaf fig, is a species of flowering plant in the mulberry and fig family Moraceae. It is native to western Africa, from Cameroon west to Sierra Leone, where it grows in lowland tropical rainforest. It can grow up to 12–15 m tall',
    price: 15.99, 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1656.JPG'
  })

  const Cebu = await Plant.create({
    plantName: 'cebu blue pothos',
    potSize: '8"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'Epipremnum pinnatum is a species of flowering plant in the family Araceae. It has many common names, including centipede tongavine and dragon-tail plant.',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1662.JPG'
  })

  const ZZ = await Plant.create({
    plantName: 'zz raven',
    potSize: '8"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'Zamioculcas is a genus of flowering plants in the family Araceae, containing the single species Zamioculcas zamiifolia. It is a tropical perennial plant native to eastern Africa, from southern Kenya to northeastern South Africa.',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1662.JPG'
  })

  const dragon = await Plant.create({
    plantName: 'dragon bone cactus',
    potSize: '6"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'tropical perennial shrub that is native to tropical areas of Asia. These plants have multiple spiny branches that grow in various directions with smaller branches extending from the main stalks.',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1669.JPG'
  })

  const Avo = await Plant.create({
    plantName: 'avocado plant',
    potSize: '4"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'Avocados are tropical trees, so they will prefer a warmer environment with lots of sun.',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1670.JPG'
  })

  const Sumatra = await Plant.create({
    plantName: 'wax plant',
    potSize: '2"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'Hoya is a genus of over 500 accepted species of tropical plants in the dogbane family, Apocynaceae. Most are native to several countries of Asia such as Philippines, India, Thailand, Malaysia, Vietnam, Bangladesh, Indonesia, Polynesia, New Guinea, and vast variety of species could also be found in',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1672.JPG'
  })

  const Calli = await Plant.create({
    plantName: 'wax plant',
    potSize: '2"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'Hoya is a genus of over 500 accepted species of tropical plants in the dogbane family, Apocynaceae. Most are native to several countries of Asia such as Philippines, India, Thailand, Malaysia, Vietnam, Bangladesh, Indonesia, Polynesia, New Guinea, and vast variety of species could also be found in',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1675.JPG'
  })

  const tiger = await Plant.create({
    plantName: 'prayer plant',
    potSize: '4"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'plant',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1676.JPG'
  })

  const Money = await Plant.create({
    plantName: 'money tree',
    potSize: '6"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'plant',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1679.JPG'
  })

  const TradN = await Plant.create({
    plantName: 'spiderwort',
    potSize: '6"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'plant',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1680.JPG'
  })

  const Stromanthe = await Plant.create({
    plantName: 'prayer plant',
    potSize: '4"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'plant',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1688.JPG'
  })

  const Rip = await Plant.create({
    plantName: 'junlge catus',
    potSize: '4"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'plant',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1689.JPG'
  })

  const Stolen = await Plant.create({
    plantName: 'mistletoe catus',
    potSize: '4"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'plant',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1754.JPG'
  })

  const retusa = await Plant.create({
    plantName: 'wax plant',
    potSize: '1"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'Hoya is a genus of over 500 accepted species of tropical plants in the dogbane family, Apocynaceae. Most are native to several countries of Asia such as Philippines, India, Thailand, Malaysia, Vietnam, Bangladesh, Indonesia, Polynesia, New Guinea, and vast variety of species could also be found in',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1754.JPG'
  })

  const bang = await Plant.create({
    plantName: 'wax plant',
    potSize: '6"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'Hoya is a genus of over 500 accepted species of tropical plants in the dogbane family, Apocynaceae. Most are native to several countries of Asia such as Philippines, India, Thailand, Malaysia, Vietnam, Bangladesh, Indonesia, Polynesia, New Guinea, and vast variety of species could also be found in',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1694.JPG'
  })

  const macro = await Plant.create({
    plantName: 'wax plant',
    potSize: '6"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'Hoya is a genus of over 500 accepted species of tropical plants in the dogbane family, Apocynaceae. Most are native to several countries of Asia such as Philippines, India, Thailand, Malaysia, Vietnam, Bangladesh, Indonesia, Polynesia, New Guinea, and vast variety of species could also be found in',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1696.JPG'
  })

  const whale = await Plant.create({
    plantName: 'whale fin',
    potSize: '4"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'plant',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1697_2.JPG'
  })

  const cylindrical = await Plant.create({
    plantName: 'cylindrical snake plant',
    potSize: '4"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'plant',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1700.JPG'
  })

  const Mikado = await Plant.create({
    plantName: 'mikado snake plant',
    potSize: '4"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'plant',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1702.JPG'
  })

  const hearts = await Plant.create({
    plantName: 'string of hearts',
    potSize: '1"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'plant',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1706.JPG'
  })

  const princess = await Plant.create({
    plantName: 'wax plant',
    potSize: '6"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'Hoya is a genus of over 500 accepted species of tropical plants in the dogbane family, Apocynaceae. Most are native to several countries of Asia such as Philippines, India, Thailand, Malaysia, Vietnam, Bangladesh, Indonesia, Polynesia, New Guinea, and vast variety of species could also be found in',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1707.JPG'
  })

  const shep = await Plant.create({
    plantName: 'wax plant',
    potSize: '4"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'Hoya is a genus of over 500 accepted species of tropical plants in the dogbane family, Apocynaceae. Most are native to several countries of Asia such as Philippines, India, Thailand, Malaysia, Vietnam, Bangladesh, Indonesia, Polynesia, New Guinea, and vast variety of species could also be found in',
    price: 15.99 , 
    qty: 100 ,  
    image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1712.JPG'
  })

  const rope = await Plant.create({
    plantName: 'wax plant',
    potSize: '1"',
    care: 'keep in bright indirect light, water when dry' , 
    description: 'Hoya is a genus of over 500 accepted species of tropical plants in the dogbane family, Apocynaceae. Most are native to several countries of Asia such as Philippines, India, Thailand, Malaysia, Vietnam, Bangladesh, Indonesia, Polynesia, New Guinea, and vast variety of species could also be found in',
    price: 15.99 , 
    qty: 100 ,  
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
