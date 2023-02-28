/**
 * The interest API controllers
 */

import DataSource from '../../lib/DataSource.js';

export const getInterests = async (req, res, next) => {
  try {
    const interestRepository = DataSource.getRepository("Interest");
    const interests = await interestRepository.findOne({
      where: { name: req.body.name }
    });

    // const interest = interests.filter((interest) => interest.id === 1);
    // console.log('interest with id 1', interest.pop());

    res.status(200).json(interests);
  } catch(e) {
    res.status(500).json({
      status: "Er liep iets fout!"
    })
  }
}

export const postInterest = async (req, res, next) => {
  try {
    const interestRepository = DataSource.getRepository("Interest");

    // get existing interest (if there is one...)
    const interest = await interestRepository.findOneBy({ name: req.body.name });

    // if we have an interest, return the existing one
    if(interest) {
      res.status(200).json({
        status: 'Interest already exists in database'
      });
    }

    else {
      // if the interest does not exist... create a new one in the database!
      await interestRepository.save(req.body);

      // let the client know that we added an entry
      res.status(201).json({
        status: 'We create a new interest in the database!'
      });
    }
  } catch(e) {
    res.status(500).json({
      status: "Er liep iets fout!"
    })
  }
}

export const deleteInterest = async (req, res, next) => {

}

export const updateInterest = async (req, res, next) => {
  try {
    const interestRepository = DataSource.getRepository("Interest");
    const interest = await interestRepository.findOneBy({ id: req.body.id });

    // change the name of the interest
    // interest.name = req.body.name;
    const newInterest = { ...interest, ...req.body };

    // save the data in the database
    await interestRepository.save(newInterest);

    // give a response to the client
    res.status(200).json(newInterest);
  } catch(e) {
    res.status(500).json({
      status: "Er liep iets fout!"
    })
  }
}